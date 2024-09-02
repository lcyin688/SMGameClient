export enum SocketState {
    Connecting = 0,
    ConnectTimeOut = 1,
    Connected = 2,
    Error = 3,
    ReconnectSuc = 4,
};

//重连最大次数
const reconnetMax = 5;
//重连间隔
const reconnetInterval = 6;

export class WebService {
    protected ws: WebSocket;
    protected state: SocketState;
    protected url: string;

    protected connectCb: Function;    //连接成功回调
    protected messageCb: Function;    //收到消息回调
    protected wsEventCb: Function;    //网络事件回调

    protected reconnectTimes: number; //重连次数
    protected reconnectTimer: number; //重连timer    

    constructor() {
        this.ws = null;
        this.state = SocketState.Error;
        this.url = null;

        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;
    }

    /** 消息回调 */
    public setMessageCb(cb: Function) {
        this.messageCb = cb;
    }

    /** socket事件回调 */
    public setWsEventCb(cb: Function) {
        this.wsEventCb = cb;
    }

    /** socket连接成功 */
    private onOpen(event: any) {
        cc.log("Send Text WS was opened.");
        this.reconnectTimes = 0;
        this.stateChanged(SocketState.Connected);
    }

    /** 发送消息: 子类具体实现 */
    public tcpSend(...params) {
    }

    /** 收到消息：子类具体实现 */
    protected onMessage(event: any) {
    }

    /** 网络错误 */
    private onError(event) {
        cc.log("WebSocket fired an error");
        let target = event.currentTarget || event.target;
        if (this.ws && this.ws.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
            this.stateChanged(SocketState.Error);
        }
    }

    /** 网络断开 */
    private onClosed(event) {
        cc.log("WebSocket instance closed.");
        let target = event.currentTarget || event.target;
        if (this.url && target && target.url == this.url) {
            if (target) {
                cc.log("WebSocket instance closed:" + target.readyState);
            }
            this.stateChanged(SocketState.ConnectTimeOut);
            this.reconnect(this.url);
        }
    }

    /** 连接socket */
    public tcpConnet(url: string, callback: Function) {
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
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClosed.bind(this);
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
                this.tcpConnet(url, () => {
                    if (this.ws.readyState == WebSocket.OPEN && this.url) {
                        this.wsEventCb && this.wsEventCb(SocketState.ReconnectSuc);
                    }
                });
            }
        }, reconnetInterval * 1000);
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

    public purge() {
        this.clearReconnectTimer();
        if (this.ws) {
            this.ws.close();
            this.ws = null;
            this.url = null;
            this.reconnectTimes = 0;
        }
    }

    public clearReconnectTimer() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimes = null;
        }
    }
}