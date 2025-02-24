
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/websocket/NetworkMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93ZWJzb2NrZXQvTmV0d29ya01zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUNkLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQUE7UUFFWSxPQUFFLEdBQXFCLElBQUksQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUE0RC9DLENBQUM7bUJBL0RZLFVBQVU7SUFNWixrQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPO0lBQ0EsNEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFBMUIsaUJBOEJDO1FBN0JHLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQUs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0IsOENBQThDO1FBQ2xELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBSztZQUN0QixJQUFJO2dCQUNBLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUd0QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBSztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQiw0QkFBNEI7UUFDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFVBQVU7SUFDSCx5QkFBSSxHQUFYLFVBQVksSUFBWTs7UUFDcEIsSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLDBDQUFFLFVBQVUsTUFBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFlBQ3ZCLFFBQVEsRUFBRSxHQUFHLEVBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFDbEIsSUFBSSxFQUNULENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQztJQUVPLHNDQUFpQixHQUF6QjtRQUFBLGlCQUVDO1FBREcsVUFBVSxDQUFDLHNCQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFBLEtBQUksQ0FBQyxFQUFFLDBDQUFFLEdBQUcsS0FBSSxFQUFFLENBQUMsQ0FBQSxFQUFBLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLDBCQUFLLEdBQVo7O1FBQ0ksTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxLQUFLLEdBQUc7SUFDckIsQ0FBQzs7SUE3RGMsb0JBQVMsR0FBc0IsSUFBSSxDQUFDO0lBRDFDLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0ErRHRCO0lBQUQsaUJBQUM7Q0EvREQsQUErREMsSUFBQTtBQS9EWSxnQ0FBVTtBQXNFdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnvZHnu5znrqHnkIbnsbsgTmV0d29ya01nci50c1xuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIE5ldHdvcmtNc2cge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmV0d29ya01zZyB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgd3M6IFdlYlNvY2tldCB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUkVDT05ORUNUX0lOVEVSVkFMID0gMzAwMDtcblxuXG4gICAgc3RhdGljIGdldEluc3QoKTogTmV0d29ya01zZyB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5ldHdvcmtNc2coKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICAgIC8vIOi/nuaOpemFjee9rlxuICAgIHB1YmxpYyBjb25uZWN0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLndzKSB0aGlzLmNsb3NlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53cy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+e5o6l5oiQ5YqfXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Nvbm5lY3RlZCcpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua2iOaBryAgb25tZXNzYWdlXCIsIGRhdGEpO1xuXG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5raI5oGv6Kej5p6Q5aSx6LSlXCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMud3Mub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIui/nuaOpemUmeivr1wiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlUmVjb25uZWN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/nuaOpeWFs+mXrVwiLCBldmVudCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlUmVjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8g5Y+R6YCB57uT5p6E5YyW5pWw5o2uXG4gICAgcHVibGljIHNlbmQoZGF0YTogb2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLndzPy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogMS4yLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjaGVkdWxlUmVjb25uZWN0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29ubmVjdCh0aGlzLndzPy51cmwgfHwgXCJcIiksIHRoaXMuUkVDT05ORUNUX0lOVEVSVkFMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMud3M/LmNsb3NlKCk7XG4gICAgfVxufVxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgd2ViU29ja2V0OiBOZXR3b3JrTXNnO1xuICAgIH1cbn1cblxuYzJmLndlYlNvY2tldCA9IE5ldHdvcmtNc2cuZ2V0SW5zdCgpO1xuZXhwb3J0IHsgfTsiXX0=