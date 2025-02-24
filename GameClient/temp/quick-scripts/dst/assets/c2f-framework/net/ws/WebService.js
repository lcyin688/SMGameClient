
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/ws/WebService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93cy9XZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUNuQix5REFBYyxDQUFBO0lBQ2QsaUVBQWtCLENBQUE7SUFDbEIsdURBQWEsQ0FBQTtJQUNiLCtDQUFTLENBQUE7SUFDVCw2REFBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBTlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFNdEI7QUFBQSxDQUFDO0FBRUYsUUFBUTtBQUNSLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUN0QixNQUFNO0FBQ04sSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFHM0I7SUFXSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztJQUNKLGlDQUFZLEdBQW5CLFVBQW9CLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQjtJQUNWLGlDQUFZLEdBQW5CLFVBQW9CLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQjtJQUNULDJCQUFNLEdBQWQsVUFBZSxLQUFVO1FBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FB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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBTb2NrZXRTdGF0ZSB7XG4gICAgQ29ubmVjdGluZyA9IDAsXG4gICAgQ29ubmVjdFRpbWVPdXQgPSAxLFxuICAgIENvbm5lY3RlZCA9IDIsXG4gICAgRXJyb3IgPSAzLFxuICAgIFJlY29ubmVjdFN1YyA9IDQsXG59O1xuXG4vL+mHjei/nuacgOWkp+asoeaVsFxuY29uc3QgcmVjb25uZXRNYXggPSA1O1xuLy/ph43ov57pl7TpmpRcbmNvbnN0IHJlY29ubmV0SW50ZXJ2YWwgPSA2O1xuXG5cbmV4cG9ydCBjbGFzcyBXZWJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc29ja2V0OiBXZWJTb2NrZXQ7XG4gICAgcHJvdGVjdGVkIHN0YXRlOiBTb2NrZXRTdGF0ZTtcbiAgICBwcm90ZWN0ZWQgdXJsOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29ubmVjdENiOiBGdW5jdGlvbjsgICAgLy/ov57mjqXmiJDlip/lm57osINcbiAgICBwcm90ZWN0ZWQgbWVzc2FnZUNiOiBGdW5jdGlvbjsgICAgLy/mlLbliLDmtojmga/lm57osINcbiAgICBwcm90ZWN0ZWQgd3NFdmVudENiOiBGdW5jdGlvbjsgICAgLy/nvZHnu5zkuovku7blm57osINcblxuICAgIHByb3RlY3RlZCByZWNvbm5lY3RUaW1lczogbnVtYmVyOyAvL+mHjei/nuasoeaVsFxuICAgIHByb3RlY3RlZCByZWNvbm5lY3RUaW1lcjogTm9kZUpTLlRpbWVvdXQ7IC8v6YeN6L+edGltZXIgICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNvY2tldFN0YXRlLkVycm9yO1xuICAgICAgICB0aGlzLnVybCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lcyA9IDA7XG4gICAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbm5lY3RDYiA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIOa2iOaBr+WbnuiwgyAqL1xuICAgIHB1YmxpYyBzZXRNZXNzYWdlQ2IoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUNiID0gY2I7XG4gICAgfVxuXG4gICAgLyoqIHNvY2tldOS6i+S7tuWbnuiwgyAqL1xuICAgIHB1YmxpYyBzZXRXc0V2ZW50Q2IoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMud3NFdmVudENiID0gY2I7XG4gICAgfVxuXG4gICAgLyoqIHNvY2tldOi/nuaOpeaIkOWKnyAqL1xuICAgIHByaXZhdGUgb25PcGVuKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY2MubG9nKFwiU2VuZCBUZXh0IFdTIHdhcyBvcGVuZWQuXCIpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZWQoU29ja2V0U3RhdGUuQ29ubmVjdGVkKTtcbiAgICB9XG5cbiAgICAvKiog5Y+R6YCB5raI5oGvOiDlrZDnsbvlhbfkvZPlrp7njrAgKi9cbiAgICBwdWJsaWMgdGNwU2VuZCguLi5wYXJhbXMpIHtcbiAgICB9XG5cbiAgICAvKiog5pS25Yiw5raI5oGv77ya5a2Q57G75YW35L2T5a6e546wICovXG4gICAgcHJvdGVjdGVkIG9uTWVzc2FnZShldmVudDogYW55KSB7XG4gICAgfVxuXG4gICAgLyoqIOe9kee7nOmUmeivryAqL1xuICAgIHByaXZhdGUgb25FcnJvcihldmVudCkge1xuICAgICAgICBjYy5sb2coXCJXZWJTb2NrZXQgZmlyZWQgYW4gZXJyb3JcIik7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgIT0gV2ViU29ja2V0LkNMT1NFRCAmJiB0aGlzLnVybCAmJiB0YXJnZXQgJiYgdGFyZ2V0LnVybCA9PSB0aGlzLnVybCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZWQoU29ja2V0U3RhdGUuRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOe9kee7nOaWreW8gCAqL1xuICAgIHByaXZhdGUgb25DbG9zZWQoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKFwiV2ViU29ja2V0IGluc3RhbmNlIGNsb3NlZC5cIik7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMudXJsICYmIHRhcmdldCAmJiB0YXJnZXQudXJsID09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiV2ViU29ja2V0IGluc3RhbmNlIGNsb3NlZDpcIiArIHRhcmdldC5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkKFNvY2tldFN0YXRlLkNvbm5lY3RUaW1lT3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog6L+e5o6lc29ja2V0ICovXG4gICAgcHVibGljIHRjcENvbm5ldCh1cmw6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0Q2IgPSBjYWxsYmFjaztcblxuICAgICAgICBjYy5sb2coXCJ3ZWJzb2NrZXQgY29ubmVjdFwiLCB1cmwpO1xuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBzZXJ2ZXInKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ0hlbGxvLCBzZXJ2ZXIhJyk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGZyb20gc2VydmVyOicsIGV2ZW50LmRhdGEpO1xuICAgICAgICAvLyB9O1xuXG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdGhpcy5vbkNsb3NlZC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKiog6YeN5paw6L+e5o6lICovXG4gICAgcHJpdmF0ZSByZWNvbm5lY3QodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5pyA5aSn6YeN6L+e5qyh5pWwNeasoVxuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lcyA+IHJlY29ubmV0TWF4KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlZChTb2NrZXRTdGF0ZS5FcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzKys7XG4gICAgICAgICAgICAgICAgdGhpcy50Y3BDb25uZXQodXJsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5PUEVOICYmIHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndzRXZlbnRDYiAmJiB0aGlzLndzRXZlbnRDYihTb2NrZXRTdGF0ZS5SZWNvbm5lY3RTdWMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHJlY29ubmV0SW50ZXJ2YWwgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGVDaGFuZ2VkKHN0YXRlOiBTb2NrZXRTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU29ja2V0U3RhdGUuQ29ubmVjdGluZykge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmVhc29uID0gXCJcIjtcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFNvY2tldFN0YXRlLkNvbm5lY3RUaW1lT3V0OlxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBcIkNvbm5lY3RUaW1lT3V0XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU29ja2V0U3RhdGUuQ29ubmVjdGVkOlxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBcIkNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNvY2tldFN0YXRlLkVycm9yOlxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBcIlNvY2tldEVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLndzRXZlbnRDYiAmJiB0aGlzLndzRXZlbnRDYihzdGF0ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0Q2IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDYihyZWFzb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdENiID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwdXJnZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlY29ubmVjdFRpbWVyKCk7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXJsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0VGltZXMgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyUmVjb25uZWN0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29ubmVjdFRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZWNvbm5lY3RUaW1lcik7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=