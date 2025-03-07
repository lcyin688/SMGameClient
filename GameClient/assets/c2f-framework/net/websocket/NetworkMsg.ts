// 网络管理类 NetworkMgr.ts
const { ccclass } = cc._decorator;

@ccclass
export class NetworkMsg {
    private static _instance: NetworkMsg | null = null;
    private ws: WebSocket | null = null;
    private readonly RECONNECT_INTERVAL = 3000;


    static getInst(): NetworkMsg {
        if (!this._instance) {
            this._instance = new NetworkMsg();
        }
        return this._instance;
    }
    // 连接配置
    public connect(url: string) {
        if (this.ws) this.close();
        
        this.ws = new WebSocket(url);
        
        this.ws.onopen = (event) => {
            console.log("连接成功", event);
            this.sendHello();
            // this.dispatchEvent(new Event('connected'));
        };

        this.ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log("消息  onmessage", data);


            } catch (e) {
                console.error("消息解析失败", e);
            }
        };

        this.ws.onerror = (error) => {
            console.error("连接错误", error);
            // this.scheduleReconnect();
        };

        this.ws.onclose = (event) => {
            console.log("连接关闭", event);
            // this.scheduleReconnect();
        };
    }

    // 发送结构化数据
    public send(data: object) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                protocol: 1.2,
                timestamp: Date.now(),
                ...data
            }));
        }
    }

    private scheduleReconnect() {
        setTimeout(() => this.connect(this.ws?.url || ""), this.RECONNECT_INTERVAL);
    }

    public close() {
        this.ws?.close();
    }

    sendHello() {
        const message = {
            type: 2, // 根据你的协议定义消息类型
            content: 'Hello, server!'
        };
        this.send(message)
    }

}
declare global {
    interface IC2F {
        webSocket: NetworkMsg;
    }
}

c2f.webSocket = NetworkMsg.getInst();
export { };