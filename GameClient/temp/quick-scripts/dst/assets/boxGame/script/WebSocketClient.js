
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/WebSocketClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9XZWJTb2NrZXRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW9FO0FBR3BFO0lBbUJJO1FBTEEsUUFBUTtRQUNSLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE1BQU07UUFDTixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBVyxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztJQUNKLHNDQUFZLEdBQW5CLFVBQW9CLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQjtJQUNWLHNDQUFZLEdBQW5CLFVBQW9CLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQjtJQUNULGdDQUFNLEdBQWQsVUFBZSxLQUFVO1FBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFFTyx3Q0FBYyxHQUF0QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDMUIsSUFBSSxD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LElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFJTCxzQkFBQztBQUFELENBOU1BLEFBOE1DLElBQUE7QUE5TVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9jMmYtZnJhbWV3b3JrL25ldC93cy9XZWJTZXJ2aWNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldENsaWVudCB7XG4gICAgcHJvdGVjdGVkIHNvY2tldDogV2ViU29ja2V0O1xuICAgIHByb3RlY3RlZCBzdGF0ZTogU29ja2V0U3RhdGU7XG4gICAgcHJvdGVjdGVkIHVybDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGNvbm5lY3RDYjogRnVuY3Rpb247ICAgIC8v6L+e5o6l5oiQ5Yqf5Zue6LCDXG4gICAgcHJvdGVjdGVkIG1lc3NhZ2VDYjogRnVuY3Rpb247ICAgIC8v5pS25Yiw5raI5oGv5Zue6LCDXG4gICAgcHJvdGVjdGVkIHdzRXZlbnRDYjogRnVuY3Rpb247ICAgIC8v572R57uc5LqL5Lu25Zue6LCDXG5cbiAgICBwcm90ZWN0ZWQgcmVjb25uZWN0VGltZXM6IG51bWJlcjsgLy/ph43ov57mrKHmlbBcbiAgICBwcm90ZWN0ZWQgcmVjb25uZWN0VGltZXI6IE5vZGVKUy5UaW1lb3V0OyAvL+mHjei/nnRpbWVyICAgIFxuXG4gICAgcHJpdmF0ZSBoZWFydGJlYXRUaW1lcjogTm9kZUpTLlRpbWVvdXRcblxuICAgIC8v6YeN6L+e5pyA5aSn5qyh5pWwXG4gICAgcmVjb25uZXRNYXggPSA1O1xuICAgIC8v6YeN6L+e6Ze06ZqUXG4gICAgcmVjb25uZXRJbnRlcnZhbCA9IDY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gU29ja2V0U3RhdGUuRXJyb3I7XG4gICAgICAgIHRoaXMudXJsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzID0gMDtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY29ubmVjdENiID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiog5raI5oGv5Zue6LCDICovXG4gICAgcHVibGljIHNldE1lc3NhZ2VDYihjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlQ2IgPSBjYjtcbiAgICB9XG5cbiAgICAvKiogc29ja2V05LqL5Lu25Zue6LCDICovXG4gICAgcHVibGljIHNldFdzRXZlbnRDYihjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy53c0V2ZW50Q2IgPSBjYjtcbiAgICB9XG5cbiAgICAvKiogc29ja2V06L+e5o6l5oiQ5YqfICovXG4gICAgcHJpdmF0ZSBvbk9wZW4oZXZlbnQ6IGFueSkge1xuICAgICAgICBjYy5sb2coXCIgV2ViU29ja2V0Q2xpZW50ICBTZW5kIFRleHQgV1Mgd2FzIG9wZW5lZC5cIik7XG4gICAgICAgIHRoaXMucmVjb25uZWN0VGltZXMgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlZChTb2NrZXRTdGF0ZS5Db25uZWN0ZWQpO1xuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KClcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0SGVhcnRiZWF0KCkge1xuICAgICAgICB0aGlzLmNsZWFySGVhcnRiZWF0VGltZXIoKVxuICAgICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBcIlwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiSGVhcnRiZWF0XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogMVxuICAgICAgICAgICAgfSkpLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKSlcbiAgICAgICAgICAgIHRoaXMudGNwU2VuZChkYXRhKTtcbiAgICAgICAgfSwgdGhpcy5yZWNvbm5ldEludGVydmFsICogMTAwMCk7XG4gICAgfVxuXG5cbiAgICAvKiog5Y+R6YCB5raI5oGvOiDlrZDnsbvlhbfkvZPlrp7njrAgKi9cbiAgICBwdWJsaWMgdGNwU2VuZChkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNvY2tldFN0YXRlLkNvbm5lY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyBXZWJTb2NrZXRDbGllbnQgdGNwU2VuZCA6JywgZGF0YSk7XG4gICAgICAgICAgICBsZXQgZGF0YVRlbXAgPSBkYXRhLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKSlcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YVRlbXApXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKiDmlLbliLDmtojmga/vvJrlrZDnsbvlhbfkvZPlrp7njrAgKi9cbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBXZWJTb2NrZXRDbGllbnQgUmVjZWl2ZWQgZnJvbSBzZXJ2ZXI6JywgZXZlbnQuZGF0YSk7XG4gICAgICAgIGxldCBlID0gZXZlbnQuZGF0YS5yZXBsYWNlKFN0cmluZy5mcm9tQ2hhckNvZGUoMzApLCBcIlwiKVxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZSk7XG4gICAgICAgIGlmICgxID09PSBkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiUHVzaE1lc3NhZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlLbliLDmnI3liqHlmajlhoXlrrnvvJpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEuYXJndW1lbnRzWzBdKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKiDnvZHnu5zplJnor68gKi9cbiAgICBwcml2YXRlIG9uRXJyb3IoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKFwiV2ViU29ja2V0Q2xpZW50IGZpcmVkIGFuIGVycm9yXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlICE9IFdlYlNvY2tldC5DTE9TRUQgJiYgdGhpcy51cmwgJiYgdGFyZ2V0ICYmIHRhcmdldC51cmwgPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkKFNvY2tldFN0YXRlLkVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnvZHnu5zmlq3lvIAgKi9cbiAgICBwcml2YXRlIG9uQ2xvc2VkKGV2ZW50KSB7XG4gICAgICAgIGNjLmxvZyhcIldlYlNvY2tldENsaWVudCBpbnN0YW5jZSBjbG9zZWQuXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLnVybCAmJiB0YXJnZXQgJiYgdGFyZ2V0LnVybCA9PSB0aGlzLnVybCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIldlYlNvY2tldENsaWVudCBpbnN0YW5jZSBjbG9zZWQ6XCIgKyB0YXJnZXQucmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlZChTb2NrZXRTdGF0ZS5Db25uZWN0VGltZU91dCk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlY29ubmVjdCh0aGlzLnVybCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOi/nuaOpXNvY2tldCAqL1xuICAgIHB1YmxpYyB0Y3BDb25uZXQodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdENiID0gY2FsbGJhY2s7XG5cbiAgICAgICAgY2MubG9nKFwid2Vic29ja2V0IGNvbm5lY3RcIiwgdXJsKTtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgICAgIC8vIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHRoaXMub25DbG9zZWQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqIOmHjeaWsOi/nuaOpSAqL1xuICAgIHByaXZhdGUgcmVjb25uZWN0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy51cmwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL+acgOWkp+mHjei/nuasoeaVsDXmrKFcbiAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0VGltZXMgPiB0aGlzLnJlY29ubmV0TWF4KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlZChTb2NrZXRTdGF0ZS5FcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzKys7XG4gICAgICAgICAgICAgICAgdGhpcy50Y3BDb25uZXQodXJsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5PUEVOICYmIHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndzRXZlbnRDYiAmJiB0aGlzLndzRXZlbnRDYihTb2NrZXRTdGF0ZS5SZWNvbm5lY3RTdWMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMucmVjb25uZXRJbnRlcnZhbCAqIDEwMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0ZUNoYW5nZWQoc3RhdGU6IFNvY2tldFN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBTb2NrZXRTdGF0ZS5Db25uZWN0aW5nKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZWFzb24gPSBcIlwiO1xuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgU29ja2V0U3RhdGUuQ29ubmVjdFRpbWVPdXQ6XG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IFwiQ29ubmVjdFRpbWVPdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTb2NrZXRTdGF0ZS5Db25uZWN0ZWQ6XG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IFwiQ29ubmVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU29ja2V0U3RhdGUuRXJyb3I6XG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IFwiU29ja2V0RXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMud3NFdmVudENiICYmIHRoaXMud3NFdmVudENiKHN0YXRlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RDYikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdENiKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0Q2IgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHB1cmdlKCkge1xuICAgICAgICB0aGlzLmNsZWFyUmVjb25uZWN0VGltZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cmwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyUmVjb25uZWN0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZWNvbm5lY3RUaW1lcik7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmuIXpmaTlv4Pot7N0aW1lciAqL1xuICAgIHByaXZhdGUgY2xlYXJIZWFydGJlYXRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhcnRiZWF0VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydGJlYXRUaW1lcik7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cblxuIl19