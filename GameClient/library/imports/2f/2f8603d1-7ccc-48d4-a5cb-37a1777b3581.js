"use strict";
cc._RF.push(module, '2f860PRfMxI1KXLN6F3ezWB', 'NetworkMsg');
// c2f-framework/net/websocket/NetworkMsg.ts

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMsg = void 0;
// 网络管理类 NetworkMgr.ts
var ccclass = cc._decorator.ccclass;
var NetworkMsg = /** @class */ (function () {
    function NetworkMsg() {
        this.ws = null;
        this.RECONNECT_INTERVAL = 3000;
    }
    NetworkMsg_1 = NetworkMsg;
    NetworkMsg.getInst = function () {
        if (!this._instance) {
            this._instance = new NetworkMsg_1();
        }
        return this._instance;
    };
    // 连接配置
    NetworkMsg.prototype.connect = function (url) {
        var _this = this;
        if (this.ws)
            this.close();
        this.ws = new WebSocket(url);
        this.ws.onopen = function (event) {
            console.log("连接成功", event);
            // this.dispatchEvent(new Event('connected'));
        };
        this.ws.onmessage = function (event) {
            try {
                var data = JSON.parse(event.data);
                console.log("消息  onmessage", data);
            }
            catch (e) {
                console.error("消息解析失败", e);
            }
        };
        this.ws.onerror = function (error) {
            console.error("连接错误", error);
            _this.scheduleReconnect();
        };
        this.ws.onclose = function (event) {
            console.log("连接关闭", event);
            // this.scheduleReconnect();
        };
    };
    // 发送结构化数据
    NetworkMsg.prototype.send = function (data) {
        var _a;
        if (((_a = this.ws) === null || _a === void 0 ? void 0 : _a.readyState) === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(__assign({ protocol: 1.2, timestamp: Date.now() }, data)));
        }
    };
    NetworkMsg.prototype.scheduleReconnect = function () {
        var _this = this;
        setTimeout(function () { var _a; return _this.connect(((_a = _this.ws) === null || _a === void 0 ? void 0 : _a.url) || ""); }, this.RECONNECT_INTERVAL);
    };
    NetworkMsg.prototype.close = function () {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
    };
    var NetworkMsg_1;
    NetworkMsg._instance = null;
    NetworkMsg = NetworkMsg_1 = __decorate([
        ccclass
    ], NetworkMsg);
    return NetworkMsg;
}());
exports.NetworkMsg = NetworkMsg;
c2f.webSocket = NetworkMsg.getInst();

cc._RF.pop();