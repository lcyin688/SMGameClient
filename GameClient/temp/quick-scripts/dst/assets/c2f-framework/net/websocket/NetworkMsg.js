
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
            _this.sendHello();
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
            // this.scheduleReconnect();
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
    NetworkMsg.prototype.sendHello = function () {
        var message = {
            type: 2,
            content: 'Hello, server!'
        };
        this.send(message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC93ZWJzb2NrZXQvTmV0d29ya01zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUNkLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQUE7UUFFWSxPQUFFLEdBQXFCLElBQUksQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFzRS9DLENBQUM7bUJBekVZLFVBQVU7SUFNWixrQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPO0lBQ0EsNEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFBMUIsaUJBK0JDO1FBOUJHLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQUs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLDhDQUE4QztRQUNsRCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFDLEtBQUs7WUFDdEIsSUFBSTtnQkFDQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFHdEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QjtRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBSztZQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3Qiw0QkFBNEI7UUFDaEMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNCLDRCQUE0QjtRQUNoQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsVUFBVTtJQUNILHlCQUFJLEdBQVgsVUFBWSxJQUFZOztRQUNwQixJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsVUFBVSxNQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsWUFDdkIsUUFBUSxFQUFFLEdBQUcsRUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUNsQixJQUFJLEVBQ1QsQ0FBQyxDQUFDO1NBQ1A7SUFDTCxDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQUEsaUJBRUM7UUFERyxVQUFVLENBQUMsc0JBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQUEsS0FBSSxDQUFDLEVBQUUsMENBQUUsR0FBRyxLQUFJLEVBQUUsQ0FBQyxDQUFBLEVBQUEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sMEJBQUssR0FBWjs7UUFDSSxNQUFBLElBQUksQ0FBQyxFQUFFLDBDQUFFLEtBQUssR0FBRztJQUNyQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQU0sT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7O0lBdEVjLG9CQUFTLEdBQXNCLElBQUksQ0FBQztJQUQxQyxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBeUV0QjtJQUFELGlCQUFDO0NBekVELEFBeUVDLElBQUE7QUF6RVksZ0NBQVU7QUFnRnZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g572R57uc566h55CG57G7IE5ldHdvcmtNZ3IudHNcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBOZXR3b3JrTXNnIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5ldHdvcmtNc2cgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHdzOiBXZWJTb2NrZXQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFJFQ09OTkVDVF9JTlRFUlZBTCA9IDMwMDA7XG5cblxuICAgIHN0YXRpYyBnZXRJbnN0KCk6IE5ldHdvcmtNc2cge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrTXNnKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICAvLyDov57mjqXphY3nva5cbiAgICBwdWJsaWMgY29ubmVjdCh1cmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy53cykgdGhpcy5jbG9zZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMud3Mub25vcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/nuaOpeaIkOWKn1wiLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRIZWxsbygpO1xuICAgICAgICAgICAgLy8gdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY29ubmVjdGVkJykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5raI5oGvICBvbm1lc3NhZ2VcIiwgZGF0YSk7XG5cblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmtojmga/op6PmnpDlpLHotKVcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy53cy5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6L+e5o6l6ZSZ6K+vXCIsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVSZWNvbm5lY3QoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+e5o6l5YWz6ZetXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVSZWNvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyDlj5HpgIHnu5PmnoTljJbmlbDmja5cbiAgICBwdWJsaWMgc2VuZChkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMud3M/LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHByb3RvY29sOiAxLjIsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIC4uLmRhdGFcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2NoZWR1bGVSZWNvbm5lY3QoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb25uZWN0KHRoaXMud3M/LnVybCB8fCBcIlwiKSwgdGhpcy5SRUNPTk5FQ1RfSU5URVJWQUwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy53cz8uY2xvc2UoKTtcbiAgICB9XG5cbiAgICBzZW5kSGVsbG8oKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiAyLCAvLyDmoLnmja7kvaDnmoTljY/orq7lrprkuYnmtojmga/nsbvlnotcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdIZWxsbywgc2VydmVyISdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZW5kKG1lc3NhZ2UpXG4gICAgfVxuXG59XG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICB3ZWJTb2NrZXQ6IE5ldHdvcmtNc2c7XG4gICAgfVxufVxuXG5jMmYud2ViU29ja2V0ID0gTmV0d29ya01zZy5nZXRJbnN0KCk7XG5leHBvcnQgeyB9OyJdfQ==