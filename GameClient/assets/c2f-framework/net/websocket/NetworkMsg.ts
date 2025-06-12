import { GameMsgId } from '../../../resources/proto/GameMsgId';
import { msgName } from '../../../resources/proto/msgName';
import { UIHelper } from '../../../Script/game/UIHelper';
import { C2FConst } from '../../define/C2FConst';
import { SocketState } from '../ws/WebService';

// 网络管理类 NetworkMgr.ts
const { ccclass } = cc._decorator;
//重连最大次数
const reconnetMax = 5;
//重连间隔
const reconnetInterval = 6;

@ccclass
export class NetworkMsg {
    private static _instance: NetworkMsg | null = null;
    private ws: WebSocket | null = null;
    private readonly RECONNECT_INTERVAL = 3000;
    private heartbeatTimer: NodeJS.Timeout;

    protected state: SocketState;
    protected reconnectTimes: number; //重连次数
    protected reconnectTimer: NodeJS.Timeout; //重连timer

    protected url: string;

    protected connectCb: Function; //连接成功回调

    protected root: any;
    protected encryptCb: Function; //消息加密回调
    protected decryptCb: Function; //消息解码回调

    private buffer: Uint8Array = new Uint8Array(0);

    /** 模块消息分发 */
    private plrMsgHandle: Function;

    private msgListeners: any[];
    private waitListenerCnt: number; //消息锁屏等待数量

    constructor() {
        this.ws = null;
        this.state = SocketState.Error;
        this.url = null;

        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;

        this.buffer = new Uint8Array(0);
        this.root = undefined;

        this.msgListeners = [];
        this.waitListenerCnt = 0;

        this.plrMsgHandle = null;
    }

    static getInst(): NetworkMsg {
        if (!this._instance) {
            this._instance = new NetworkMsg();
        }
        return this._instance;
    }
    // 连接配置
    public connect(url: string, callback?: Function) {
        console.log('connect 001');
        if (this.ws) this.close();

        this.url = url;
        if (this.ws) {
            this.ws.close();
            this.ws.onopen = null;
            this.ws.onmessage = null;
            this.ws.onerror = null;
            this.ws.onclose = null;
            this.ws = null;
        }
        this.connectCb = callback;

        cc.log('websocket connect', url);
        this.ws = new WebSocket(url);
        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = this.onopen.bind(this);
        this.ws.onmessage = this.onmessage.bind(this);
        this.ws.onerror = this.onerror.bind(this);
        this.ws.onclose = this.onclose.bind(this);
    }

    /** socket连接成功 */
    private onopen(event: any) {
        console.log('连接成功', event);
        this.reconnectTimes = 0;
        this.stateChanged(SocketState.Connected);
        this.startHeartbeat();
        if (this.connectCb) {
            this.connectCb('Connected');
        }
    }
    /** 收到消息 */
    protected onmessage(event: any) {
        const newData = new Uint8Array(event.data);
        this.buffer = this.concatBuffer(this.buffer, newData);
        // 处理完整消息
        // this.buffer = event.data
        this.processBuffer();
    }
    // 合并二进制数据
    private concatBuffer(a: Uint8Array, b: Uint8Array): Uint8Array {
        const result = new Uint8Array(a.length + b.length);
        result.set(a, 0);
        result.set(b, a.length);
        return result;
    }

    /** 处理缓冲区 */
    private processBuffer() {
        while (this.buffer.length >= 8) {
            // 8字节头部
            // 读取消息头（小端序）
            const msgId = new DataView(this.buffer.buffer).getUint32(0, false);
            const dataLen = new DataView(this.buffer.buffer).getUint32(4, false);

            // 检查数据是否完整
            if (this.buffer.length < 8 + dataLen) break;

            // 提取数据体
            const body = this.buffer.subarray(8, 8 + dataLen);

            if (msgId == GameMsgId.MsgId.MSG_SC_Pong) {
                // cc.log("msgId  SC_Pong  ==============   ");
            } else {
                cc.log('msgId  ========   :', msgId);
                this.parseMessage(msgId, body);
            }
            // 移除已处理的数据
            this.buffer = this.buffer.subarray(8 + dataLen);
        }
    }

    // 根据消息ID反序列化
    private parseMessage(msgId: number, data: ArrayBuffer) {
        let opName = msgName[msgId];
        if (!opName) {
            cc.log('can not find op:', msgId);
            return;
        }
        let name = 'msg.' + opName;
        let proto = this.root.build(name);
        if (!proto) {
            cc.log('can not find proto:', name);
            return;
        }
        let rep = proto.decode(data);
        // console.log('收到响应  rep  :', rep);
        this.onWSMsg(msgId, rep);
    }

    public setPlrMsgHandle(handle: Function) {
        this.plrMsgHandle = handle;
    }

    /** 网络消息回调 */
    private onWSMsg(op: number, data: any) {
        let success = data.code === undefined || data.code === 0;
        const msgNameTemp = msgName[op];
        if (msgNameTemp === undefined) {
            cc.log('network.dispatch msgName is nil: op = ' + op);
        }
        cc.log(' onWSMsg 收到响应  op  :', msgNameTemp, data, success);
        if (success) {
            this.plrMsgHandle && this.plrMsgHandle(op, data);
        }

        let needRemove = [];
        let count = this.msgListeners.length;

        // 倒序遍历，也就是说在最直接请求的地方最先响应，其他均获取刷新
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
                    if (info.type == 'once') {
                        needRemove.push(idx);
                    }
                    break;
                }
            }
        }

        for (let idx = 0; idx < needRemove.length; idx++) {
            const listenerIndex = needRemove[idx];
            if (this.msgListeners[listenerIndex] && this.msgListeners[listenerIndex].waitNet) {
                this.waitListenerCnt -= 1;
                c2f.gui.hideLoading();
            }
            this.msgListeners.splice(listenerIndex, 1);
        }
        if (!success) {
            UIHelper.showNetError(data.code);
        }
    }

    /** 网络错误 */
    private onerror(error) {
        cc.log('WebSocketClient fired an error');
        console.error('连接错误', error);

        // let target = event.currentTarget || event.target;
        // if (this.ws && this.ws.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
        //     this.stateChanged(SocketState.Error);
        // }
    }

    /** 网络断开 */
    private onclose(event) {
        console.log('连接关闭', event);

        let target = event.currentTarget || event.target;
        if (this.url && target && target.url == this.url) {
            if (target) {
                cc.log('WebSocketClient instance closed:' + target.readyState);
            }
            this.stateChanged(SocketState.ConnectTimeOut);
            this.reconnect(this.url);
        }
    }
    /** 重新连接 */
    private reconnect(url: string) {
        if (!this.url) {
            return;
        }
        //最大重连次数5次
        if (this.reconnectTimes > reconnetMax) {
            this.stateChanged(SocketState.Error);
            return;
        }
        this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = null;
            if (this.url) {
                this.reconnectTimes++;
                this.connect(url, () => {
                    if (this.state == WebSocket.OPEN && this.url) {
                        cc.log(' ~~~ reconnect success');
                    }
                });
            }
        }, reconnetInterval * 1000);
    }
    public stateChanged(state: SocketState) {
        this.state = state;
        if (state === SocketState.Connecting) {
        } else {
            let reason = '';
            switch (state) {
                case SocketState.ConnectTimeOut:
                    reason = 'ConnectTimeOut';
                    break;
                case SocketState.Connected:
                    reason = 'Connected';
                    break;
                case SocketState.Error:
                    reason = 'SocketError';
                    break;
                default:
                    break;
            }

            this.onWSEvent(state);
            if (this.connectCb) {
                this.connectCb(reason);
                this.connectCb = null;
            }
        }
    }

    private scheduleReconnect() {
        setTimeout(() => this.connect(this.ws?.url || ''), this.RECONNECT_INTERVAL);
    }

    public close() {
        this.ws?.close();
    }
    private startHeartbeat() {
        this.clearHeartbeatTimer();
        this.heartbeatTimer = setInterval(() => {
            let cData: msg.CS_Ping = {
                Timestamp: new Date().getTime(),
            };
            this.send(GameMsgId.MsgId.MSG_CS_Ping, cData);
        }, reconnetInterval * 1000);
    }
    /** 清除心跳timer */
    private clearHeartbeatTimer() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }

    /** 发送消息: 子类具体实现 */
    public send(msgId: number, msgData: any, params?: any) {
        if (this.state !== SocketState.Connected) {
            return false;
        }
        if (!this.ws || this.ws.readyState != WebSocket.OPEN) {
            return false;
        }
        const msgNameTemp = msgName[msgId];
        if (!msgNameTemp) {
            cc.warn(`don't find msg for id:${msgId}`);
            return false;
        }
        if (msgId !== GameMsgId.MsgId.MSG_CS_Ping) {
            console.log('发送消息   msgId  ', msgId, msgNameTemp);
        }
        let name = 'msg.' + msgNameTemp;
        let message = this.root.build(name);
        let msg = new message();
        for (const p in msgData) {
            if (msgData.hasOwnProperty(p)) {
                let itemData = msgData[p] || msgData.p;
                msg.set(p, itemData, false);
            }
        }
        let bytes = new Uint8Array(msg.encode().toBuffer());
        this.sendMessage(msgId, bytes);
        //单独去注册回调的监听
        if (params) {
            if (!this.msgListeners) {
                this.msgListeners = [];
            }
            this.msgListeners.push({
                view: params.view,
                ops: params.ops,
                callback: params.callback,
                waitNet: params.waitNet,
                getErr: params.getErr,
                type: 'once',
            });
            if (params.waitNet) {
                this.waitListenerCnt += 1;
                if (this.waitListenerCnt > 0) {
                    c2f.gui.showLoading();
                }
            }
        }
    }

    /** 添加监听 */
    public addListener(view, ops, callback, getErr = false) {
        this.msgListeners.push({ view: view, ops: ops, callback: callback, type: 'persist', getErr: getErr });
    }

    // 通用消息发送方法
    private sendMessage(msgId: number, data: Uint8Array) {
        const buffer = new ArrayBuffer(8 + data.length);
        const dv = new DataView(buffer);
        // 大端序写入
        dv.setUint32(0, msgId, false); // 消息ID
        dv.setUint32(4, data.length, false); // 数据长度
        const bytes = new Uint8Array(buffer);
        bytes.set(data, 8); // 填充protobuf数据
        this.ws.send(bytes.buffer);
    }

    public async initService() {
        if (this.ws) {
            this.purge();
        } else {
            let result = await this.loadProtoFile();
            if (result) {
                szg.player.cfgLoaded = true;
            } else {
                c2f.log.logNet('failed to load proto!');
            }
        }
    }

    public purge() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
            this.url = null;
            this.reconnectTimes = 0;
        }
        this.clearReconnectTimer();
    }

    private clearReconnectTimer() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimes = null;
        }
    }

    private async loadProtoFile() {
        return new Promise<boolean>((resolve, reject) => {
            let protobuf = require('protobuf');
            protobuf.loadProtoFile('proto/msg', (err, result) => {
                if (err) {
                    cc.log(err);
                    resolve(false);
                } else {
                    this.setRoot(result);
                    resolve(true);
                }
            });
        });
    }

    public setRoot(root: any) {
        this.root = root;
    }

    /** 加密消息回调 */
    public setEncryptCb(cb: Function) {
        this.encryptCb = cb;
    }

    /** 解密消息回调 */
    public setDecryptCb(cb: Function) {
        this.decryptCb = cb;
    }

    /** 网络事件 */
    private onWSEvent(state: SocketState) {
        switch (state) {
            case SocketState.Connected:
                break;
            case SocketState.Error:
                c2f.gui.hideLoading();
                UIHelper.showNetError(C2FConst.NetErrOffline);
                break;
            case SocketState.ConnectTimeOut:
                c2f.gui.showLoading();
                break;
            case SocketState.ReconnectSuc:
                c2f.gui.hideLoading();
                this.showReloginView();
                break;
            default:
                break;
        }
    }

    /** 显示重新登录界面 */
    private showReloginView() {
        c2f.gui.hideLoading(true);
        // szg.entrance.reLogin(
        //     (op: number, data: msg.GW_Login) => {
        //         let isSuccess = data.ErrorCode === undefined || data.ErrorCode === 0;
        //         if (isSuccess) {
        //             c2f.gui.notifyTxt('511');
        //             c2f.net.startHeartbeat();
        //         } else {
        //             UIHelper.showNetError(data.ErrorCode);
        //         }
        //     },
        //     () => {
        //         c2f.gui.notifyTxt('512');
        //     });
    }
}
declare global {
    interface IC2F {
        webSocket: NetworkMsg;
    }
}

c2f.webSocket = NetworkMsg.getInst();
export {};
