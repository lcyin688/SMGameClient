import { GameMsgId } from "../../../resources/proto/GameMsgId";
import { msgName } from "../../../resources/proto/msgName";
import { SocketState } from "../ws/WebService";

// 网络管理类 NetworkMgr.ts
const { ccclass } = cc._decorator;

@ccclass
export class NetworkMsg {
    private static _instance: NetworkMsg | null = null;
    private ws: WebSocket | null = null;
    private readonly RECONNECT_INTERVAL = 3000;
    private heartbeatTimer: NodeJS.Timeout

    protected state: SocketState;
    protected reconnectTimes: number; //重连次数
    protected reconnectTimer: NodeJS.Timeout; //重连timer    
    //重连最大次数
    reconnetMax = 5;
    //重连间隔
    reconnetInterval = 6;

    protected url: string;

    protected connectCb: Function;    //连接成功回调
    protected messageCb: Function;    //收到消息回调

    protected messages: any;
    protected root: any;
    protected encryptCb: Function;    //消息加密回调
    protected decryptCb: Function;    //消息解码回调


    constructor() {
        this.ws = null;
        this.state = SocketState.Error;
        this.url = null;

        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;

        this.messages = new Uint8Array(0);
        this.root = undefined;
    
    }

    static getInst(): NetworkMsg {
        if (!this._instance) {
            this._instance = new NetworkMsg();
        }
        return this._instance;
    }
    // 连接配置
    public connect(url: string,callback?: Function) {
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

        cc.log("websocket connect", url);
        this.ws = new WebSocket(url);
        this.ws.onopen = this.onopen.bind(this);
        this.ws.onmessage = this.onmessage.bind(this);
        this.ws.onerror = this.onerror.bind(this);
        this.ws.onclose = this.onclose.bind(this);
    }

    /** socket连接成功 */
    private onopen(event: any) {
        console.log("连接成功", event);
        this.reconnectTimes = 0;
        this.stateChanged(SocketState.Connected);
        this.startHeartbeat()
        if (this.connectCb) {
            this.connectCb("Connected")
        }

    }
    /** 收到消息：子类具体实现 */
    protected onmessage(event: any) {
        try {
            const data = JSON.parse(event.data);
            console.log("  收到 消息  onmessage", data);


        } catch (e) {
            console.error("消息解析失败", e);
        }


        // let e = event.data.replace(String.fromCharCode(30), "")
        // let data = JSON.parse(e);
        // if (1 === data.type) {
        //     switch (data.target) {
        //         case "PushMessage":
        //             console.log("收到服务器内容：" + JSON.stringify(data.arguments[0]));
        //             break
        //     }
        // }

    }

    /** 网络错误 */
    private onerror(error) {
        cc.log("WebSocketClient fired an error");
        console.error("连接错误", error);


        
        // let target = event.currentTarget || event.target;
        // if (this.ws && this.ws.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
        //     this.stateChanged(SocketState.Error);
        // }
    }

    /** 网络断开 */
    private onclose(event) {
        console.log("连接关闭", event);
        
        // let target = event.currentTarget || event.target;
        // if (this.url && target && target.url == this.url) {
        //     if (target) {
        //         cc.log("WebSocketClient instance closed:" + target.readyState);
        //     }
        //     this.stateChanged(SocketState.ConnectTimeOut);
        //     // this.reconnect(this.url);
        // }
    }

    public stateChanged(state: SocketState) {
        this.state = state;
        if (state === SocketState.Connecting) {

        } else {
            let reason = "";
            switch (state) {
                case SocketState.ConnectTimeOut:
                    reason = "ConnectTimeOut";
                    break;
                case SocketState.Connected:
                    reason = "Connected";
                    break;
                case SocketState.Error:
                    reason = "SocketError";
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
        setTimeout(() => this.connect(this.ws?.url || ""), this.RECONNECT_INTERVAL);
    }

    public close() {
        this.ws?.close();
    }
    private startHeartbeat() {
        this.clearHeartbeatTimer()
        this.heartbeatTimer = setInterval(() => {
            let cData: msg.CS_Ping = {
                Timestamp: new Date().getTime(),
            }
            this.send(GameMsgId.MsgId.MSG_CS_Ping,cData);
        }, this.reconnetInterval * 1000);
    }
    /** 清除心跳timer */
    private clearHeartbeatTimer() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }

    /** 请求消息 */
    public sendMsg(op: number, data: any, params?: any) {



        // let result = this.service.tcpSend(op, data);
        // if (!result) {
        //     if (params && params.callback) {
        //         params.callback(op, { ErrorCode: C2FConst.NetErrOffline })
        //     }
        //     return;
        // }
        // if (params === undefined) {
        //     params = {};
        // }
        // this.msgListeners.push(
        //     {
        //         view: params.view,
        //         ops: params.ops,
        //         callback: params.callback,
        //         waitNet: params.waitNet,
        //         getErr: params.getErr,
        //         type: "once"
        //     });
        // if (params.waitNet) {
        //     this.waitListenerCnt += 1;
        //     if (this.waitListenerCnt > 0) {
        //         this.toUI.showWaitUI();
        //     }
        // }
    }

    /** 发送消息: 子类具体实现 */
    public send(msgId: number, msgData: any) {
        console.log("发送消息   this.ws?.readyState  " ,this.ws?.readyState);
        if (this.state !== SocketState.Connected) {
            return false;
        }
        if (!this.ws || this.ws.readyState != WebSocket.OPEN) {
            return false;
        }
        this.tcpSend(msgId,msgData);
        //     // let data = {
        //     //     msgId: msgId,
        //     //     value: value
        //     // };
        //     // let jsonStr = JSON.stringify(data);
        //     // this.ws.send(jsonStr)
        //     return 
        console.log("发送消息失败   this.ws?.readyState  " ,this.ws?.readyState);
    }


    /** 发送消息 */
    public tcpSend(op: number, data: any) {
        const msgNameTemp = msgName[op];
        if (!msgNameTemp) {
            cc.warn(`don't find msg for id:${op}`);
            return false;
        }
        let name = "msg." + msgNameTemp;
        let message = this.root.build(name);
        let msg = new message();
        for (const p in data) {
            if (data.hasOwnProperty(p)) {
                msg.set(p, data[p], false);
            }
        }
        let bytes = new Uint8Array(msg.encode().toBuffer());
        let buffer = new ArrayBuffer(bytes.byteLength + 8);
        let dv = new DataView(buffer);
        dv.setUint32(0, bytes.byteLength + 8, false);
        dv.setUint32(4, op, false);
        for (var i = 0, length = bytes.byteLength; i < length; i++) {
            dv.setUint8(i + 8, bytes[i]);
        }
        let content = new Uint8Array(buffer);
        this.encryptCb && this.encryptCb(content);
        this.ws.send(content.buffer);

        return true;
    }


    public async initService() {
        if (this.ws) {
            this.purge();
        } else {
            let result = await this.loadProtoFile();
            if (result) {
                // this.initMsgIds();
            } else {
                c2f.log.logNet('failed to load proto!');
            }
        }
    }

    // private initMsgIds(){
    //     this.messageCb(this.onWSMsg.bind(this));


    // }

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
            protobuf.loadProtoFile("proto/msg", (err, result) => {
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
        // switch (state) {
        //     case SocketState.Connected:
        //         this.reInitRc4();
        //         break;
        //     case SocketState.Error:
        //         this.toUI.hideWaitUI();
        //         this.toUI.showErrorMsg(C2FConst.NetErrOffline);
        //         break;
        //     case SocketState.ConnectTimeOut:
        //         this.toUI.showWaitUI();
        //         break;
        //     case SocketState.ReconnectSuc:
        //         this.toUI.hideWaitUI();
        //         this.toUI.showReloginView();
        //         break;
        //     default:
        //         break;
        // }
    }


    /** 网络消息回调 */
    private onWSMsg(op: number, data: any) {
        let success = data.ErrorCode === undefined || data.ErrorCode === 0;
        const msgNameTemp = msgName[op];
        if (msgNameTemp === undefined) {
            cc.log("network.dispatch msgName is nil: op = " + op);
        }

        // if (success) {
        //     this.plrMsgHandle && this.plrMsgHandle(op, data);
        // }

        // let needRemove = [];
        // let count = this.msgListeners.length;

        // //倒序遍历，也就是说在最直接请求的地方最先响应，其他均获取刷新
        // for (let idx = count - 1; idx >= 0; idx--) {
        //     const info = this.msgListeners[idx];
        //     if (info.view !== undefined && info.view.node == null) {
        //         needRemove.push(idx);
        //         continue;
        //     }
        //     if (info.ops === undefined || info.ops === null) {
        //         needRemove.push(idx);
        //         continue;
        //     }
        //     let ops = info.ops;
        //     for (let index = 0; index < ops.length; index++) {
        //         let val = ops[index];
        //         if (val === op) {
        //             if (success || info.getErr) {
        //                 info.callback && info.callback(op, data);
        //             }
        //             if (info.type == "once") {
        //                 needRemove.push(idx);
        //             }
        //             break;
        //         }
        //     }
        // }

        // //let quickDisplay = this.getQuickDisPlay();
        // for (let idx = 0; idx < needRemove.length; idx++) {
        //     const listenerIndex = needRemove[idx];
        //     if (this.msgListeners[listenerIndex] && this.msgListeners[listenerIndex].waitNet) {
        //         this.waitListenerCnt -= 1;
        //         this.toUI.hideWaitUI();
        //     }
        //     this.msgListeners.splice(listenerIndex, 1);
        // }
        // if (!success) {
        //     this.toUI.showErrorMsg(data.ErrorCode)
        // }
    }



}
declare global {
    interface IC2F {
        webSocket: NetworkMsg;
    }
}

c2f.webSocket = NetworkMsg.getInst();
export { };