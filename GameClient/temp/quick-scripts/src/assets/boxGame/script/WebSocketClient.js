"use strict";
cc._RF.push(module, '6ab30nOSX1Bk5mvw5c2/aDy', 'WebSocketClient');
// boxGame/script/WebSocketClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
var WebService_1 = require("../../c2f-framework/net/ws/WebService");
var WebSocketClient = /** @class */ (function () {
    function WebSocketClient() {
        //重连最大次数
        this.reconnetMax = 5;
        //重连间隔
        this.reconnetInterval = 6;
        this.socket = null;
        this.state = WebService_1.SocketState.Error;
        this.url = null;
        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;
    }
    /** 消息回调 */
    WebSocketClient.prototype.setMessageCb = function (cb) {
        this.messageCb = cb;
    };
    /** socket事件回调 */
    WebSocketClient.prototype.setWsEventCb = function (cb) {
        this.wsEventCb = cb;
    };
    /** socket连接成功 */
    WebSocketClient.prototype.onOpen = function (event) {
        cc.log(" WebSocketClient  Send Text WS was opened.");
        this.reconnectTimes = 0;
        this.stateChanged(WebService_1.SocketState.Connected);
        this.startHeartbeat();
    };
    WebSocketClient.prototype.startHeartbeat = function () {
        var _this = this;
        this.clearHeartbeatTimer();
        this.heartbeatTimer = setInterval(function () {
            var data = "".concat(JSON.stringify({
                arguments: [],
                target: "Heartbeat",
                type: 1
            })).concat(String.fromCharCode(30));
            _this.tcpSend(data);
        }, this.reconnetInterval * 1000);
    };
    /** 发送消息: 子类具体实现 */
    WebSocketClient.prototype.tcpSend = function (data) {
        if (this.state === WebService_1.SocketState.Connected) {
            console.log(' WebSocketClient tcpSend :', data);
            var dataTemp = data.concat(String.fromCharCode(30));
            this.socket.send(dataTemp);
        }
    };
    /** 收到消息：子类具体实现 */
    WebSocketClient.prototype.onMessage = function (event) {
        console.log(' WebSocketClient Received from server:', event.data);
        var e = event.data.replace(String.fromCharCode(30), "");
        var data = JSON.parse(e);
        if (1 === data.type) {
            switch (data.target) {
                case "PushMessage":
                    console.log("收到服务器内容：" + JSON.stringify(data.arguments[0]));
                    break;
            }
        }
    };
    /** 网络错误 */
    WebSocketClient.prototype.onError = function (event) {
        cc.log("WebSocketClient fired an error");
        var target = event.currentTarget || event.target;
        if (this.socket && this.socket.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
            this.stateChanged(WebService_1.SocketState.Error);
        }
    };
    /** 网络断开 */
    WebSocketClient.prototype.onClosed = function (event) {
        cc.log("WebSocketClient instance closed.");
        var target = event.currentTarget || event.target;
        if (this.url && target && target.url == this.url) {
            if (target) {
                cc.log("WebSocketClient instance closed:" + target.readyState);
            }
            this.stateChanged(WebService_1.SocketState.ConnectTimeOut);
            // this.reconnect(this.url);
        }
    };
    /** 连接socket */
    WebSocketClient.prototype.tcpConnet = function (url, callback) {
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
        // this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onclose = this.onClosed.bind(this);
    };
    /** 重新连接 */
    WebSocketClient.prototype.reconnect = function (url) {
        var _this = this;
        if (!this.url) {
            return;
        }
        //最大重连次数5次
        if (this.reconnectTimes > this.reconnetMax) {
            this.stateChanged(WebService_1.SocketState.Error);
            return;
        }
        this.reconnectTimer = setTimeout(function () {
            _this.reconnectTimer = null;
            if (_this.url) {
                _this.reconnectTimes++;
                _this.tcpConnet(url, function () {
                    if (_this.socket.readyState == WebSocket.OPEN && _this.url) {
                        _this.wsEventCb && _this.wsEventCb(WebService_1.SocketState.ReconnectSuc);
                    }
                });
            }
        }, this.reconnetInterval * 1000);
    };
    WebSocketClient.prototype.stateChanged = function (state) {
        this.state = state;
        if (state === WebService_1.SocketState.Connecting) {
        }
        else {
            var reason = "";
            switch (state) {
                case WebService_1.SocketState.ConnectTimeOut:
                    reason = "ConnectTimeOut";
                    break;
                case WebService_1.SocketState.Connected:
                    reason = "Connected";
                    break;
                case WebService_1.SocketState.Error:
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
    };
    WebSocketClient.prototype.purge = function () {
        this.clearReconnectTimer();
        if (this.socket) {
            this.socket.close();
            this.socket = null;
            this.url = null;
            this.reconnectTimes = 0;
        }
        this.clearHeartbeatTimer();
    };
    WebSocketClient.prototype.clearReconnectTimer = function () {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimes = null;
        }
    };
    /** 清除心跳timer */
    WebSocketClient.prototype.clearHeartbeatTimer = function () {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    };
    return WebSocketClient;
}());
exports.WebSocketClient = WebSocketClient;

cc._RF.pop();