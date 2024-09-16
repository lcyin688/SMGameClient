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
    protected socket: WebSocket;
    protected state: SocketState;
    protected url: string;

    protected connectCb: Function;    //连接成功回调
    protected messageCb: Function;    //收到消息回调
    protected wsEventCb: Function;    //网络事件回调

    protected reconnectTimes: number; //重连次数
    protected reconnectTimer: NodeJS.Timeout; //重连timer    
    constructor() {
        this.socket = null;
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
        if (this.socket && this.socket.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
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
        if (this.socket) {
            this.socket.close();
            this.socket.onopen = null;
            this.socket.onmessage = null;
            this.socket.onerror = null;
            this.socket.onclose = null;
            this.socket = null;
        }
        this.connectCb = callback;

        cc.log("websocket connect", url);
        this.socket = new WebSocket(url);
        // this.socket.onopen = () => {
        //     console.log('Connected to server');
        //     this.sendMessage('Hello, server!');
        // };
        // this.socket.onmessage = (event) => {
        //     console.log('Received from server:', event.data);
        // };


        // this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onclose = this.onClosed.bind(this);
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
                    if (this.socket.readyState == WebSocket.OPEN && this.url) {
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
        if (this.socket) {
            this.socket.close();
            this.socket = null;
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