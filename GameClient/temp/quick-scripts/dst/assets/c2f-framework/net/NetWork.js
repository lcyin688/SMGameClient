
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/NetWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5233baVGtFNICt/0pPgcEk', 'NetWork');
// c2f-framework/net/NetWork.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RC4_1 = require("../libs/rc4/RC4");
var WSByProtobuf_1 = require("./ws/WSByProtobuf");
var WebService_1 = require("./ws/WebService");
var msgid_1 = require("../../resources/proto/msgid");
var msgname_1 = require("../../resources/proto/msgname");
var C2FConst_1 = require("../define/C2FConst");
var msgpack = require('msgpack');
var rc4Key = [37, 19, 8, 169, 132, 244, 222, 112, 172, 185, 164, 69, 131, 210, 85, 37];
var NetWork = /** @class */ (function () {
    function NetWork() {
        this.enRc4 = null;
        this.deRc4 = null;
        this.waitHeartTimer = null;
        this.heartbeatTimer = null;
        this.msgListeners = [];
        this.waitListenerCnt = 0;
        this.plrMsgHandle = null;
    }
    Object.defineProperty(NetWork.prototype, "toUI", {
        get: function () {
            return this._toUI;
        },
        set: function (v) {
            this._toUI = v;
        },
        enumerable: false,
        configurable: true
    });
    NetWork.prototype.initService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.service) return [3 /*break*/, 1];
                        this.service.purge();
                        return [3 /*break*/, 3];
                    case 1:
                        this.service = new WSByProtobuf_1.WSByProtobuf();
                        this.service.setWsEventCb(this.onWSEvent.bind(this));
                        return [4 /*yield*/, this.loadProtoFile()];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.initMsgIds();
                        }
                        else {
                            c2f.log.logNet('failed to load proto!');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NetWork.prototype.initMsgIds = function () {
        this.service.setMessageCb(this.onWSMsg.bind(this));
    };
    /** 重置加解密 */
    NetWork.prototype.reInitRc4 = function () {
        this.enRc4 = new RC4_1.RC4(rc4Key);
        this.deRc4 = new RC4_1.RC4(rc4Key);
        // this.service.setEncryptCb(this.enRc4.encrypt.bind(this.enRc4));
        // this.service.setDecryptCb(this.deRc4.decrypt.bind(this.deRc4));
    };
    NetWork.prototype.loadProtoFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var protobuf = require('protobuf');
                        protobuf.loadProtoFile("proto/game", function (err, result) {
                            if (err) {
                                cc.log(err);
                                resolve(false);
                            }
                            else {
                                _this.service.setRoot(result);
                                resolve(true);
                            }
                        });
                    })];
            });
        });
    };
    NetWork.prototype.setPlrMsgHandle = function (handle) {
        this.plrMsgHandle = handle;
    };
    /** tcp连接 */
    NetWork.prototype.connect = function (url, callback) {
        this.service.tcpConnet(url, callback);
    };
    /** 添加监听 */
    NetWork.prototype.addListener = function (view, ops, callback, getErr) {
        if (getErr === void 0) { getErr = false; }
        this.msgListeners.push({ view: view, ops: ops, callback: callback, type: "persist", getErr: getErr });
    };
    /** 网络事件 */
    NetWork.prototype.onWSEvent = function (state) {
        switch (state) {
            case WebService_1.SocketState.Connected:
                this.reInitRc4();
                break;
            case WebService_1.SocketState.Error:
                this.toUI.hideWaitUI();
                this.toUI.showErrorMsg(C2FConst_1.C2FConst.NetErrOffline);
                break;
            case WebService_1.SocketState.ConnectTimeOut:
                this.toUI.showWaitUI();
                break;
            case WebService_1.SocketState.ReconnectSuc:
                this.toUI.hideWaitUI();
                this.toUI.showReloginView();
                break;
            default:
                break;
        }
    };
    /** 请求消息 */
    NetWork.prototype.sendMsg = function (op, data, params) {
        var result = this.service.tcpSend(op, data);
        if (!result) {
            if (params && params.callback) {
                params.callback(op, { ErrorCode: C2FConst_1.C2FConst.NetErrOffline });
            }
            return;
        }
        if (params === undefined) {
            params = {};
        }
        this.msgListeners.push({
            view: params.view,
            ops: params.ops,
            callback: params.callback,
            waitNet: params.waitNet,
            getErr: params.getErr,
            type: "once"
        });
        if (params.waitNet) {
            this.waitListenerCnt += 1;
            if (this.waitListenerCnt > 0) {
                this.toUI.showWaitUI();
            }
        }
    };
    /** 网络消息回调 */
    NetWork.prototype.onWSMsg = function (op, data) {
        var success = data.ErrorCode === undefined || data.ErrorCode === 0;
        var msgName = msgname_1.msgname[op];
        if (msgName === undefined) {
            cc.log("network.dispatch msgName is nil: op = " + op);
        }
        if (success) {
            this.plrMsgHandle && this.plrMsgHandle(op, data);
        }
        var needRemove = [];
        var count = this.msgListeners.length;
        //倒序遍历，也就是说在最直接请求的地方最先响应，其他均获取刷新
        for (var idx = count - 1; idx >= 0; idx--) {
            var info = this.msgListeners[idx];
            if (info.view !== undefined && info.view.node == null) {
                needRemove.push(idx);
                continue;
            }
            if (info.ops === undefined || info.ops === null) {
                needRemove.push(idx);
                continue;
            }
            var ops = info.ops;
            for (var index = 0; index < ops.length; index++) {
                var val = ops[index];
                if (val === op) {
                    if (success || info.getErr) {
                        info.callback && info.callback(op, data);
                    }
                    if (info.type == "once") {
                        needRemove.push(idx);
                    }
                    break;
                }
            }
        }
        //let quickDisplay = this.getQuickDisPlay();
        for (var idx = 0; idx < needRemove.length; idx++) {
            var listenerIndex = needRemove[idx];
            if (this.msgListeners[listenerIndex] && this.msgListeners[listenerIndex].waitNet) {
                this.waitListenerCnt -= 1;
                this.toUI.hideWaitUI();
            }
            this.msgListeners.splice(listenerIndex, 1);
        }
        if (!success) {
            this.toUI.showErrorMsg(data.ErrorCode);
        }
    };
    /** 开始心跳检查 */
    NetWork.prototype.startHeartbeat = function () {
        var _this = this;
        var heartWaitTimeout = function () {
            //检测是否正处于可重连状态，如果是就不用断开了
            if (_this.toUI.isOpenReloginView()) {
                _this.clearHeartbeatTimer();
                _this.clearWaitHeartTimer();
            }
            else {
                _this.purge();
                _this.toUI.showErrorMsg(C2FConst_1.C2FConst.NetErrOffline);
            }
        };
        var rate = 6000;
        var heartMsgId = msgid_1.msgid.C_TimeSync;
        var heartRetId = msgid_1.msgid.GS_TimeSync_R;
        var sendHeartMsg = function () {
            _this.sendMsg(heartMsgId, {}, {
                ops: [heartRetId],
                callback: _this.clearWaitHeartTimer.bind(_this)
            });
            if (!_this.waitHeartTimer) {
                _this.waitHeartTimer = setTimeout(heartWaitTimeout, rate * 5);
            }
        };
        this.clearHeartbeatTimer();
        //立即执行一次
        sendHeartMsg();
        this.heartbeatTimer = setInterval(sendHeartMsg, rate);
    };
    /** 清除心跳等待timer */
    NetWork.prototype.clearWaitHeartTimer = function () {
        if (this.waitHeartTimer) {
            clearTimeout(this.waitHeartTimer);
            this.waitHeartTimer = null;
        }
    };
    /** 清除心跳timer */
    NetWork.prototype.clearHeartbeatTimer = function () {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    };
    /** 停止网络 */
    NetWork.prototype.purge = function () {
        this.clearHeartbeatTimer();
        this.clearWaitHeartTimer();
        this.service.purge();
    };
    /** 获得消息ID名称 */
    NetWork.prototype.getMsgName = function (id) {
        return msgname_1.msgname[id];
    };
    /** 解码二进制数据 */
    NetWork.prototype.decodeBinary = function (binary) {
        var data = msgpack.decode(binary.toBuffer());
        return data;
    };
    NetWork.getInstance = function () {
        if (!this._instance) {
            this._instance = new NetWork();
        }
        return this._instance;
    };
    /** 静态成员 */
    NetWork._instance = null;
    return NetWork;
}());
c2f.net = NetWork.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC9OZXRXb3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLGtEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMscURBQW9EO0FBQ3BELHlEQUF3RDtBQUV4RCwrQ0FBOEM7QUFDOUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWpDLElBQU0sTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFekY7SUFzQkk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBbEJELHNCQUFXLHlCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLENBQVc7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQzs7O09BSEE7SUFrQlksNkJBQVcsR0FBeEI7Ozs7Ozs2QkFDUSxJQUFJLENBQUMs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QUFJLENBQUE7SUFPNUMsY0FBQztDQWxSRCxBQWtSQyxJQUFBO0FBUUQsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSQzQgfSBmcm9tIFwiLi4vbGlicy9yYzQvUkM0XCI7XG5pbXBvcnQgeyBXU0J5UHJvdG9idWYgfSBmcm9tIFwiLi93cy9XU0J5UHJvdG9idWZcIjtcbmltcG9ydCB7IFNvY2tldFN0YXRlIH0gZnJvbSBcIi4vd3MvV2ViU2VydmljZVwiO1xuaW1wb3J0IHsgbXNnaWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3Byb3RvL21zZ2lkXCI7XG5pbXBvcnQgeyBtc2duYW1lIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9wcm90by9tc2duYW1lXCI7XG5pbXBvcnQgeyBJTmV0VG9VSSB9IGZyb20gXCIuL0lOZXRUb1VJXCI7XG5pbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi9kZWZpbmUvQzJGQ29uc3RcIjtcbnZhciBtc2dwYWNrID0gcmVxdWlyZSgnbXNncGFjaycpO1xuXG5jb25zdCByYzRLZXkgPSBbMzcsIDE5LCA4LCAxNjksIDEzMiwgMjQ0LCAyMjIsIDExMiwgMTcyLCAxODUsIDE2NCwgNjksIDEzMSwgMjEwLCA4NSwgMzddO1xuXG5jbGFzcyBOZXRXb3JrIHtcbiAgICBwcml2YXRlIGVuUmM0OiBSQzQ7XG4gICAgcHJpdmF0ZSBkZVJjNDogUkM0O1xuICAgIHByaXZhdGUgc2VydmljZTogV1NCeVByb3RvYnVmO1xuXG4gICAgcHJpdmF0ZSB3YWl0SGVhcnRUaW1lcjogTm9kZUpTLlRpbWVvdXQ7IC8v5b+D6Lez562J5b6FdGltZXJcbiAgICBwcml2YXRlIGhlYXJ0YmVhdFRpbWVyOiBOb2RlSlMuVGltZW91dDsgLy/lv4Pot7N0aW1lclxuXG4gICAgcHJpdmF0ZSBtc2dMaXN0ZW5lcnM6IGFueVtdO1xuICAgIHByaXZhdGUgd2FpdExpc3RlbmVyQ250OiBudW1iZXI7IC8v5raI5oGv6ZSB5bGP562J5b6F5pWw6YePXG5cbiAgICAvKiog5qih5Z2X5raI5oGv5YiG5Y+RICovXG4gICAgcHJpdmF0ZSBwbHJNc2dIYW5kbGU6IEZ1bmN0aW9uO1xuICAgIC8qKiBVSeS6pOS6kuaOpeWPoyAqL1xuICAgIHByaXZhdGUgX3RvVUk6IElOZXRUb1VJO1xuICAgIHB1YmxpYyBnZXQgdG9VSSgpOiBJTmV0VG9VSSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b1VJO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRvVUkodjogSU5ldFRvVUkpIHtcbiAgICAgICAgdGhpcy5fdG9VSSA9IHY7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5SYzQgPSBudWxsO1xuICAgICAgICB0aGlzLmRlUmM0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLndhaXRIZWFydFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5tc2dMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy53YWl0TGlzdGVuZXJDbnQgPSAwO1xuXG4gICAgICAgIHRoaXMucGxyTXNnSGFuZGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdFNlcnZpY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5wdXJnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IFdTQnlQcm90b2J1ZigpO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFdzRXZlbnRDYih0aGlzLm9uV1NFdmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWRQcm90b0ZpbGUoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNc2dJZHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYzJmLmxvZy5sb2dOZXQoJ2ZhaWxlZCB0byBsb2FkIHByb3RvIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TXNnSWRzKCkge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0TWVzc2FnZUNiKHRoaXMub25XU01zZy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKiog6YeN572u5Yqg6Kej5a+GICovXG4gICAgcHJpdmF0ZSByZUluaXRSYzQoKSB7XG4gICAgICAgIHRoaXMuZW5SYzQgPSBuZXcgUkM0KHJjNEtleSk7XG4gICAgICAgIHRoaXMuZGVSYzQgPSBuZXcgUkM0KHJjNEtleSk7XG5cbiAgICAgICAgLy8gdGhpcy5zZXJ2aWNlLnNldEVuY3J5cHRDYih0aGlzLmVuUmM0LmVuY3J5cHQuYmluZCh0aGlzLmVuUmM0KSk7XG4gICAgICAgIC8vIHRoaXMuc2VydmljZS5zZXREZWNyeXB0Q2IodGhpcy5kZVJjNC5kZWNyeXB0LmJpbmQodGhpcy5kZVJjNCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZFByb3RvRmlsZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm90b2J1ZiA9IHJlcXVpcmUoJ3Byb3RvYnVmJyk7XG4gICAgICAgICAgICBwcm90b2J1Zi5sb2FkUHJvdG9GaWxlKFwicHJvdG8vZ2FtZVwiLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0Um9vdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGxyTXNnSGFuZGxlKGhhbmRsZTogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wbHJNc2dIYW5kbGUgPSBoYW5kbGU7XG4gICAgfVxuXG4gICAgLyoqIHRjcOi/nuaOpSAqL1xuICAgIHB1YmxpYyBjb25uZWN0KHVybDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRjcENvbm5ldCh1cmwsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKiog5re75Yqg55uR5ZCsICovXG4gICAgcHVibGljIGFkZExpc3RlbmVyKHZpZXcsIG9wcywgY2FsbGJhY2ssIGdldEVyciA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubXNnTGlzdGVuZXJzLnB1c2goeyB2aWV3OiB2aWV3LCBvcHM6IG9wcywgY2FsbGJhY2s6IGNhbGxiYWNrLCB0eXBlOiBcInBlcnNpc3RcIiwgZ2V0RXJyOiBnZXRFcnIgfSk7XG4gICAgfVxuXG4gICAgLyoqIOe9kee7nOS6i+S7tiAqL1xuICAgIHByaXZhdGUgb25XU0V2ZW50KHN0YXRlOiBTb2NrZXRTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNvY2tldFN0YXRlLkNvbm5lY3RlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnJlSW5pdFJjNCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTb2NrZXRTdGF0ZS5FcnJvcjpcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuaGlkZVdhaXRVSSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9VSS5zaG93RXJyb3JNc2coQzJGQ29uc3QuTmV0RXJyT2ZmbGluZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNvY2tldFN0YXRlLkNvbm5lY3RUaW1lT3V0OlxuICAgICAgICAgICAgICAgIHRoaXMudG9VSS5zaG93V2FpdFVJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNvY2tldFN0YXRlLlJlY29ubmVjdFN1YzpcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuaGlkZVdhaXRVSSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9VSS5zaG93UmVsb2dpblZpZXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K+35rGC5raI5oGvICovXG4gICAgcHVibGljIHNlbmRNc2cob3A6IG51bWJlciwgZGF0YTogYW55LCBwYXJhbXM/OiBhbnkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS50Y3BTZW5kKG9wLCBkYXRhKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKG9wLCB7IEVycm9yQ29kZTogQzJGQ29uc3QuTmV0RXJyT2ZmbGluZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tc2dMaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2aWV3OiBwYXJhbXMudmlldyxcbiAgICAgICAgICAgICAgICBvcHM6IHBhcmFtcy5vcHMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICAgICAgICB3YWl0TmV0OiBwYXJhbXMud2FpdE5ldCxcbiAgICAgICAgICAgICAgICBnZXRFcnI6IHBhcmFtcy5nZXRFcnIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJvbmNlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyYW1zLndhaXROZXQpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdExpc3RlbmVyQ250ICs9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0TGlzdGVuZXJDbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b1VJLnNob3dXYWl0VUkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnvZHnu5zmtojmga/lm57osIMgKi9cbiAgICBwcml2YXRlIG9uV1NNc2cob3A6IG51bWJlciwgZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZGF0YS5FcnJvckNvZGUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLkVycm9yQ29kZSA9PT0gMDtcbiAgICAgICAgY29uc3QgbXNnTmFtZSA9IG1zZ25hbWVbb3BdO1xuICAgICAgICBpZiAobXNnTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJuZXR3b3JrLmRpc3BhdGNoIG1zZ05hbWUgaXMgbmlsOiBvcCA9IFwiICsgb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMucGxyTXNnSGFuZGxlICYmIHRoaXMucGxyTXNnSGFuZGxlKG9wLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZWVkUmVtb3ZlID0gW107XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubXNnTGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAvL+WAkuW6j+mBjeWOhu+8jOS5n+WwseaYr+ivtOWcqOacgOebtOaOpeivt+axgueahOWcsOaWueacgOWFiOWTjeW6lO+8jOWFtuS7luWdh+iOt+WPluWIt+aWsFxuICAgICAgICBmb3IgKGxldCBpZHggPSBjb3VudCAtIDE7IGlkeCA+PSAwOyBpZHgtLSkge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMubXNnTGlzdGVuZXJzW2lkeF07XG4gICAgICAgICAgICBpZiAoaW5mby52aWV3ICE9PSB1bmRlZmluZWQgJiYgaW5mby52aWV3Lm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5lZWRSZW1vdmUucHVzaChpZHgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZm8ub3BzID09PSB1bmRlZmluZWQgfHwgaW5mby5vcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZWVkUmVtb3ZlLnB1c2goaWR4KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvcHMgPSBpbmZvLm9wcztcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG9wc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgfHwgaW5mby5nZXRFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uY2FsbGJhY2sgJiYgaW5mby5jYWxsYmFjayhvcCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8udHlwZSA9PSBcIm9uY2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFJlbW92ZS5wdXNoKGlkeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9sZXQgcXVpY2tEaXNwbGF5ID0gdGhpcy5nZXRRdWlja0Rpc1BsYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmVlZFJlbW92ZS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gbmVlZFJlbW92ZVtpZHhdO1xuICAgICAgICAgICAgaWYgKHRoaXMubXNnTGlzdGVuZXJzW2xpc3RlbmVySW5kZXhdICYmIHRoaXMubXNnTGlzdGVuZXJzW2xpc3RlbmVySW5kZXhdLndhaXROZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRMaXN0ZW5lckNudCAtPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudG9VSS5oaWRlV2FpdFVJKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1zZ0xpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnRvVUkuc2hvd0Vycm9yTXNnKGRhdGEuRXJyb3JDb2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOW8gOWni+W/g+i3s+ajgOafpSAqL1xuICAgIHB1YmxpYyBzdGFydEhlYXJ0YmVhdCgpIHtcbiAgICAgICAgbGV0IGhlYXJ0V2FpdFRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL+ajgOa1i+aYr+WQpuato+WkhOS6juWPr+mHjei/nueKtuaAge+8jOWmguaenOaYr+WwseS4jeeUqOaWreW8gOS6hlxuICAgICAgICAgICAgaWYgKHRoaXMudG9VSS5pc09wZW5SZWxvZ2luVmlldygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcldhaXRIZWFydFRpbWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuc2hvd0Vycm9yTXNnKEMyRkNvbnN0Lk5ldEVyck9mZmxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhdGUgPSA2MDAwO1xuICAgICAgICBjb25zdCBoZWFydE1zZ0lkID0gbXNnaWQuQ19UaW1lU3luYztcbiAgICAgICAgY29uc3QgaGVhcnRSZXRJZCA9IG1zZ2lkLkdTX1RpbWVTeW5jX1I7XG4gICAgICAgIGxldCBzZW5kSGVhcnRNc2cgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbmRNc2coXG4gICAgICAgICAgICAgICAgaGVhcnRNc2dJZCxcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wczogW2hlYXJ0UmV0SWRdLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5jbGVhcldhaXRIZWFydFRpbWVyLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdGhpcy53YWl0SGVhcnRUaW1lcikge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdEhlYXJ0VGltZXIgPSBzZXRUaW1lb3V0KGhlYXJ0V2FpdFRpbWVvdXQsIHJhdGUgKiA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFySGVhcnRiZWF0VGltZXIoKTtcbiAgICAgICAgLy/nq4vljbPmiafooYzkuIDmrKFcbiAgICAgICAgc2VuZEhlYXJ0TXNnKCk7XG4gICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRJbnRlcnZhbChzZW5kSGVhcnRNc2csIHJhdGUpO1xuICAgIH1cblxuICAgIC8qKiDmuIXpmaTlv4Pot7PnrYnlvoV0aW1lciAqL1xuICAgIHByaXZhdGUgY2xlYXJXYWl0SGVhcnRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMud2FpdEhlYXJ0VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLndhaXRIZWFydFRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMud2FpdEhlYXJ0VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOa4hemZpOW/g+i3s3RpbWVyICovXG4gICAgcHJpdmF0ZSBjbGVhckhlYXJ0YmVhdFRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFydGJlYXRUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0YmVhdFRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWBnOatoue9kee7nCAqL1xuICAgIHB1YmxpYyBwdXJnZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdFRpbWVyKCk7XG4gICAgICAgIHRoaXMuY2xlYXJXYWl0SGVhcnRUaW1lcigpO1xuICAgICAgICB0aGlzLnNlcnZpY2UucHVyZ2UoKTtcbiAgICB9XG5cbiAgICAvKiog6I635b6X5raI5oGvSUTlkI3np7AgKi9cbiAgICBwdWJsaWMgZ2V0TXNnTmFtZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBtc2duYW1lW2lkXTtcbiAgICB9XG5cbiAgICAvKiog6Kej56CB5LqM6L+b5Yi25pWw5o2uICovXG4gICAgcHVibGljIGRlY29kZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBtc2dwYWNrLmRlY29kZShiaW5hcnkudG9CdWZmZXIoKSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuXG4gICAgLyoqIOmdmeaAgeaIkOWRmCAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTmV0V29yayA9IG51bGxcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE5ldFdvcmsge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBOZXRXb3JrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgbmV0OiBOZXRXb3JrO1xuICAgIH1cbn1cblxuYzJmLm5ldCA9IE5ldFdvcmsuZ2V0SW5zdGFuY2UoKTtcbmV4cG9ydCB7IH07Il19