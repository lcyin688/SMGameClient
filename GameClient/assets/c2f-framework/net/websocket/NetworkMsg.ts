import { GameMsgId } from "../../../Script/GameMsgId";
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
    protected wsEventCb: Function;    //网络事件回调
    


    constructor() {
        this.ws = null;
        this.state = SocketState.Error;
        this.url = null;

        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;
    }

    static getInst(): NetworkMsg {
        if (!this._instance) {
            this._instance = new NetworkMsg();
        }
        return this._instance;
    }
    // 连接配置
    public connect(url: string,callback?: Function) {
        console.error('connect 001');
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

            this.wsEventCb && this.wsEventCb(state);
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
            this.send(GameMsgId.MsgId.MSG_Ping);
        }, this.reconnetInterval * 1000);
    }
    /** 清除心跳timer */
    private clearHeartbeatTimer() {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }
    /** 发送消息: 子类具体实现 */
    public send(msgId: number, value?: any) {
        console.log("发送消息   this.ws?.readyState  " ,this.ws?.readyState);
        if (this.ws?.readyState === WebSocket.OPEN||this.ws?.readyState === WebSocket.CONNECTING) {
            let data = {
                msgId: msgId,
                value: value
            };
            let jsonStr = JSON.stringify(data);
            this.ws.send(jsonStr)
            return 
        }
        console.log("发送消息失败   this.ws?.readyState  " ,this.ws?.readyState);
    }

}
declare global {
    interface IC2F {
        webSocket: NetworkMsg;
    }
}

c2f.webSocket = NetworkMsg.getInst();
export { };