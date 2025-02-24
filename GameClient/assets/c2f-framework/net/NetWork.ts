import { RC4 } from "../libs/rc4/RC4";
import { WSByProtobuf } from "./ws/WSByProtobuf";
import { SocketState } from "./ws/WebService";
import { msgname } from "../../resources/proto/msgname";
import { INetToUI } from "./INetToUI";
import { C2FConst } from "../define/C2FConst";
var msgpack = require('msgpack');

const rc4Key = [37, 19, 8, 169, 132, 244, 222, 112, 172, 185, 164, 69, 131, 210, 85, 37];

class NetWork {
    private enRc4: RC4;
    private deRc4: RC4;
    private service: WSByProtobuf;

    private waitHeartTimer: NodeJS.Timeout; //心跳等待timer
    private heartbeatTimer: NodeJS.Timeout; //心跳timer

    private msgListeners: any[];
    private waitListenerCnt: number; //消息锁屏等待数量

    /** 模块消息分发 */
    private plrMsgHandle: Function;
    /** UI交互接口 */
    private _toUI: INetToUI;
    public get toUI(): INetToUI {
        return this._toUI;
    }
    public set toUI(v: INetToUI) {
        this._toUI = v;
    }

    constructor() {
        this.enRc4 = null;
        this.deRc4 = null;

        this.waitHeartTimer = null;
        this.heartbeatTimer = null;

        this.msgListeners = [];
        this.waitListenerCnt = 0;

        this.plrMsgHandle = null;
    }

    public async initService() {
        if (this.service) {
            this.service.purge();
        } else {
            this.service = new WSByProtobuf();
            this.service.setWsEventCb(this.onWSEvent.bind(this));
            let result = await this.loadProtoFile();
            if (result) {
                this.initMsgIds();
            } else {
                c2f.log.logNet('failed to load proto!');
            }
        }
    }

    private initMsgIds() {
        this.service.setMessageCb(this.onWSMsg.bind(this));
    }

    /** 重置加解密 */
    private reInitRc4() {
        this.enRc4 = new RC4(rc4Key);
        this.deRc4 = new RC4(rc4Key);

        // this.service.setEncryptCb(this.enRc4.encrypt.bind(this.enRc4));
        // this.service.setDecryptCb(this.deRc4.decrypt.bind(this.deRc4));
    }

    private async loadProtoFile() {
        return new Promise<boolean>((resolve, reject) => {
            let protobuf = require('protobuf');
            protobuf.loadProtoFile("proto/game", (err, result) => {
                if (err) {
                    cc.log(err);
                    resolve(false);
                } else {
                    this.service.setRoot(result);
                    resolve(true);
                }
            });
        });
    }

    public setPlrMsgHandle(handle: Function) {
        this.plrMsgHandle = handle;
    }

    /** tcp连接 */
    public connect(url: string, callback: Function) {
        this.service.tcpConnet(url, callback);
    }

    /** 添加监听 */
    public addListener(view, ops, callback, getErr = false) {
        this.msgListeners.push({ view: view, ops: ops, callback: callback, type: "persist", getErr: getErr });
    }

    /** 网络事件 */
    private onWSEvent(state: SocketState) {
        switch (state) {
            case SocketState.Connected:
                this.reInitRc4();
                break;
            case SocketState.Error:
                this.toUI.hideWaitUI();
                this.toUI.showErrorMsg(C2FConst.NetErrOffline);
                break;
            case SocketState.ConnectTimeOut:
                this.toUI.showWaitUI();
                break;
            case SocketState.ReconnectSuc:
                this.toUI.hideWaitUI();
                this.toUI.showReloginView();
                break;
            default:
                break;
        }
    }

    /** 请求消息 */
    public sendMsg(op: number, data: any, params?: any) {
        let result = this.service.tcpSend(op, data);
        if (!result) {
            if (params && params.callback) {
                params.callback(op, { ErrorCode: C2FConst.NetErrOffline })
            }
            return;
        }
        if (params === undefined) {
            params = {};
        }
        this.msgListeners.push(
            {
                view: params.view,
                ops: params.ops,
                callback: params.callback,
                waitNet: params.waitNet,
                getErr: params.getErr,
                type: "once"
            });
        if (params.waitNet) {
            this.waitListenerCnt += 1;
            if (this.waitListenerCnt > 0) {
                this.toUI.showWaitUI();
            }
        }
    }

    /** 网络消息回调 */
    private onWSMsg(op: number, data: any) {
        let success = data.ErrorCode === undefined || data.ErrorCode === 0;
        const msgName = msgname[op];
        if (msgName === undefined) {
            cc.log("network.dispatch msgName is nil: op = " + op);
        }

        if (success) {
            this.plrMsgHandle && this.plrMsgHandle(op, data);
        }

        let needRemove = [];
        let count = this.msgListeners.length;

        //倒序遍历，也就是说在最直接请求的地方最先响应，其他均获取刷新
        for (let idx = count - 1; idx >= 0; idx--) {
            const info = this.msgListeners[idx];
            if (info.view !== undefined && info.view.node == null) {
                needRemove.push(idx);
                continue;
            }
            if (info.ops === undefined || info.ops === null) {
                needRemove.push(idx);
                continue;
            }
            let ops = info.ops;
            for (let index = 0; index < ops.length; index++) {
                let val = ops[index];
                if (val === op) {
                    if (success || info.getErr) {
                        info.callback && info.callback(op, data);
                    }
                    if (info.type == "once") {
                        needRemove.push(idx);
                    }
                    break;
                }
            }
        }

        //let quickDisplay = this.getQuickDisPlay();
        for (let idx = 0; idx < needRemove.length; idx++) {
            const listenerIndex = needRemove[idx];
            if (this.msgListeners[listenerIndex] && this.msgListeners[listenerIndex].waitNet) {
                this.waitListenerCnt -= 1;
                this.toUI.hideWaitUI();
            }
            this.msgListeners.splice(listenerIndex, 1);
        }
        if (!success) {
            this.toUI.showErrorMsg(data.ErrorCode)
        }
    }

    /** 开始心跳检查 */
    public startHeartbeat() {
        let heartWaitTimeout = () => {
            //检测是否正处于可重连状态，如果是就不用断开了
            if (this.toUI.isOpenReloginView()) {
                this.clearHeartbeatTimer();
                this.clearWaitHeartTimer();
            } else {
                this.purge();
                this.toUI.showErrorMsg(C2FConst.NetErrOffline);
            }
        }
        const rate = 6000;
        // const heartMsgId = msgid.C_TimeSync;
        // const heartRetId = msgid.GS_TimeSync_R;
        let sendHeartMsg = () => {
            // this.sendMsg(
            //     heartMsgId,
            //     {},
            //     {
            //         ops: [heartRetId],
            //         callback: this.clearWaitHeartTimer.bind(this)
            //     });
            if (!this.waitHeartTimer) {
                this.waitHeartTimer = setTimeout(heartWaitTimeout, rate * 5);
            }
        }
        this.clearHeartbeatTimer();
        //立即执行一次
        sendHeartMsg();
        this.heartbeatTimer = setInterval(sendHeartMsg, rate);
    }

    /** 清除心跳等待timer */
    private clearWaitHeartTimer() {
        if (this.waitHeartTimer) {
            clearTimeout(this.waitHeartTimer);
            this.waitHeartTimer = null;
        }
    }

    /** 清除心跳timer */
    private clearHeartbeatTimer() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }

    /** 停止网络 */
    public purge() {
        this.clearHeartbeatTimer();
        this.clearWaitHeartTimer();
        this.service.purge();
    }

    /** 获得消息ID名称 */
    public getMsgName(id: number) {
        return msgname[id];
    }

    /** 解码二进制数据 */
    public decodeBinary(binary) {
        let data = msgpack.decode(binary.toBuffer());
        return data;
    }


    /** 静态成员 */
    private static _instance: NetWork = null
    public static getInstance(): NetWork {
        if (!this._instance) {
            this._instance = new NetWork();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        net: NetWork;
    }
}

c2f.net = NetWork.getInstance();
export { };