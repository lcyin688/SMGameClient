"use strict";
cc._RF.push(module, 'bb0c2Z+BUJGbIJr86Nn2BgE', 'WebService');
// c2f-framework/net/ws/WebService.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebService = exports.SocketState = void 0;
var SocketState;
(function (SocketState) {
    SocketState[SocketState["Connecting"] = 0] = "Connecting";
    SocketState[SocketState["ConnectTimeOut"] = 1] = "ConnectTimeOut";
    SocketState[SocketState["Connected"] = 2] = "Connected";
    SocketState[SocketState["Error"] = 3] = "Error";
    SocketState[SocketState["ReconnectSuc"] = 4] = "ReconnectSuc";
})(SocketState = exports.SocketState || (exports.SocketState = {}));
;
//重连最大次数
var reconnetMax = 5;
//重连间隔
var reconnetInterval = 6;
var WebService = /** @class */ (function () {
    function WebService() {
        this.socket = null;
        this.state = SocketState.Error;
        this.url = null;
        this.reconnectTimes = 0;
        this.reconnectTimer = null;
        this.connectCb = null;
    }
    /** 消息回调 */
    WebService.prototype.setMessageCb = function (cb) {
        this.messageCb = cb;
    };
    /** socket事件回调 */
    WebService.prototype.setWsEventCb = function (cb) {
        this.wsEventCb = cb;
    };
    /** socket连接成功 */
    WebService.prototype.onOpen = function (event) {
        cc.log("Send Text WS was opened.");
        this.reconnectTimes = 0;
        this.stateChanged(SocketState.Connected);
    };
    /** 发送消息: 子类具体实现 */
    WebService.prototype.tcpSend = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /** 收到消息：子类具体实现 */
    WebService.prototype.onMessage = function (event) {
    };
    /** 网络错误 */
    WebService.prototype.onError = function (event) {
        cc.log("WebSocket fired an error");
        var target = event.currentTarget || event.target;
        if (this.socket && this.socket.readyState != WebSocket.CLOSED && this.url && target && target.url == this.url) {
            this.stateChanged(SocketState.Error);
        }
    };
    /** 网络断开 */
    WebService.prototype.onClosed = function (event) {
        cc.log("WebSocket instance closed.");
        var target = event.currentTarget || event.target;
        if (this.url && target && target.url == this.url) {
            if (target) {
                cc.log("WebSocket instance closed:" + target.readyState);
            }
            this.stateChanged(SocketState.ConnectTimeOut);
            this.reconnect(this.url);
        }
    };
    /** 连接socket */
    WebService.prototype.tcpConnet = function (url, callback) {
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
    };
    /** 重新连接 */
    WebService.prototype.reconnect = function (url) {
        var _this = this;
        if (!this.url) {
            return;
        }
        //最大重连次数5次
        if (this.reconnectTimes > reconnetMax) {
            this.stateChanged(SocketState.Error);
            return;
        }
        this.reconnectTimer = setTimeout(function () {
            _this.reconnectTimer = null;
            if (_this.url) {
                _this.reconnectTimes++;
                _this.tcpConnet(url, function () {
                    if (_this.socket.readyState == WebSocket.OPEN && _this.url) {
                        _this.wsEventCb && _this.wsEventCb(SocketState.ReconnectSuc);
                    }
                });
            }
        }, reconnetInterval * 1000);
    };
    WebService.prototype.stateChanged = function (state) {
        this.state = state;
        if (state === SocketState.Connecting) {
        }
        else {
            var reason = "";
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
    };
    WebService.prototype.purge = function () {
        this.clearReconnectTimer();
        if (this.socket) {
            this.socket.close();
            this.socket = null;
            this.url = null;
            this.reconnectTimes = 0;
        }
    };
    WebService.prototype.clearReconnectTimer = function () {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimes = null;
        }
    };
    return WebService;
}());
exports.WebService = WebService;

cc._RF.pop();