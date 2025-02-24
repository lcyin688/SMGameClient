
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
        // const heartMsgId = msgid.C_TimeSync;
        // const heartRetId = msgid.GS_TimeSync_R;
        var sendHeartMsg = function () {
            // this.sendMsg(
            //     heartMsgId,
            //     {},
            //     {
            //         ops: [heartRetId],
            //         callback: this.clearWaitHeartTimer.bind(this)
            //     });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC9OZXRXb3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLGtEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMseURBQXdEO0FBRXhELCtDQUE4QztBQUM5QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFakMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV6RjtJQXNCSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFsQkQsc0JBQVcseUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsQ0FBVztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDOzs7T0FIQTtJQWtCWSw2QkFBVyxHQUF4Qjs7Ozs7OzZCQUNRLElBQUksQ0FBQyxPQUFPLEVBQVosd0JB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cnQgeyBSQzQgfSBmcm9tIFwiLi4vbGlicy9yYzQvUkM0XCI7XG5pbXBvcnQgeyBXU0J5UHJvdG9idWYgfSBmcm9tIFwiLi93cy9XU0J5UHJvdG9idWZcIjtcbmltcG9ydCB7IFNvY2tldFN0YXRlIH0gZnJvbSBcIi4vd3MvV2ViU2VydmljZVwiO1xuaW1wb3J0IHsgbXNnbmFtZSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvcHJvdG8vbXNnbmFtZVwiO1xuaW1wb3J0IHsgSU5ldFRvVUkgfSBmcm9tIFwiLi9JTmV0VG9VSVwiO1xuaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG52YXIgbXNncGFjayA9IHJlcXVpcmUoJ21zZ3BhY2snKTtcblxuY29uc3QgcmM0S2V5ID0gWzM3LCAxOSwgOCwgMTY5LCAxMzIsIDI0NCwgMjIyLCAxMTIsIDE3MiwgMTg1LCAxNjQsIDY5LCAxMzEsIDIxMCwgODUsIDM3XTtcblxuY2xhc3MgTmV0V29yayB7XG4gICAgcHJpdmF0ZSBlblJjNDogUkM0O1xuICAgIHByaXZhdGUgZGVSYzQ6IFJDNDtcbiAgICBwcml2YXRlIHNlcnZpY2U6IFdTQnlQcm90b2J1ZjtcblxuICAgIHByaXZhdGUgd2FpdEhlYXJ0VGltZXI6IE5vZGVKUy5UaW1lb3V0OyAvL+W/g+i3s+etieW+hXRpbWVyXG4gICAgcHJpdmF0ZSBoZWFydGJlYXRUaW1lcjogTm9kZUpTLlRpbWVvdXQ7IC8v5b+D6LezdGltZXJcblxuICAgIHByaXZhdGUgbXNnTGlzdGVuZXJzOiBhbnlbXTtcbiAgICBwcml2YXRlIHdhaXRMaXN0ZW5lckNudDogbnVtYmVyOyAvL+a2iOaBr+mUgeWxj+etieW+heaVsOmHj1xuXG4gICAgLyoqIOaooeWdl+a2iOaBr+WIhuWPkSAqL1xuICAgIHByaXZhdGUgcGxyTXNnSGFuZGxlOiBGdW5jdGlvbjtcbiAgICAvKiogVUnkuqTkupLmjqXlj6MgKi9cbiAgICBwcml2YXRlIF90b1VJOiBJTmV0VG9VSTtcbiAgICBwdWJsaWMgZ2V0IHRvVUkoKTogSU5ldFRvVUkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9VSTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0b1VJKHY6IElOZXRUb1VJKSB7XG4gICAgICAgIHRoaXMuX3RvVUkgPSB2O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuUmM0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZVJjNCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy53YWl0SGVhcnRUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubXNnTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2FpdExpc3RlbmVyQ250ID0gMDtcblxuICAgICAgICB0aGlzLnBsck1zZ0hhbmRsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXRTZXJ2aWNlKCkge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UucHVyZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBXU0J5UHJvdG9idWYoKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRXc0V2ZW50Q2IodGhpcy5vbldTRXZlbnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2FkUHJvdG9GaWxlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TXNnSWRzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGMyZi5sb2cubG9nTmV0KCdmYWlsZWQgdG8gbG9hZCBwcm90byEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1zZ0lkcygpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE1lc3NhZ2VDYih0aGlzLm9uV1NNc2cuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqIOmHjee9ruWKoOino+WvhiAqL1xuICAgIHByaXZhdGUgcmVJbml0UmM0KCkge1xuICAgICAgICB0aGlzLmVuUmM0ID0gbmV3IFJDNChyYzRLZXkpO1xuICAgICAgICB0aGlzLmRlUmM0ID0gbmV3IFJDNChyYzRLZXkpO1xuXG4gICAgICAgIC8vIHRoaXMuc2VydmljZS5zZXRFbmNyeXB0Q2IodGhpcy5lblJjNC5lbmNyeXB0LmJpbmQodGhpcy5lblJjNCkpO1xuICAgICAgICAvLyB0aGlzLnNlcnZpY2Uuc2V0RGVjcnlwdENiKHRoaXMuZGVSYzQuZGVjcnlwdC5iaW5kKHRoaXMuZGVSYzQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQcm90b0ZpbGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvdG9idWYgPSByZXF1aXJlKCdwcm90b2J1ZicpO1xuICAgICAgICAgICAgcHJvdG9idWYubG9hZFByb3RvRmlsZShcInByb3RvL2dhbWVcIiwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFJvb3QocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBsck1zZ0hhbmRsZShoYW5kbGU6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMucGxyTXNnSGFuZGxlID0gaGFuZGxlO1xuICAgIH1cblxuICAgIC8qKiB0Y3Dov57mjqUgKi9cbiAgICBwdWJsaWMgY29ubmVjdCh1cmw6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS50Y3BDb25uZXQodXJsLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqIOa3u+WKoOebkeWQrCAqL1xuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcih2aWV3LCBvcHMsIGNhbGxiYWNrLCBnZXRFcnIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm1zZ0xpc3RlbmVycy5wdXNoKHsgdmlldzogdmlldywgb3BzOiBvcHMsIGNhbGxiYWNrOiBjYWxsYmFjaywgdHlwZTogXCJwZXJzaXN0XCIsIGdldEVycjogZ2V0RXJyIH0pO1xuICAgIH1cblxuICAgIC8qKiDnvZHnu5zkuovku7YgKi9cbiAgICBwcml2YXRlIG9uV1NFdmVudChzdGF0ZTogU29ja2V0U3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBTb2NrZXRTdGF0ZS5Db25uZWN0ZWQ6XG4gICAgICAgICAgICAgICAgdGhpcy5yZUluaXRSYzQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU29ja2V0U3RhdGUuRXJyb3I6XG4gICAgICAgICAgICAgICAgdGhpcy50b1VJLmhpZGVXYWl0VUkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuc2hvd0Vycm9yTXNnKEMyRkNvbnN0Lk5ldEVyck9mZmxpbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTb2NrZXRTdGF0ZS5Db25uZWN0VGltZU91dDpcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuc2hvd1dhaXRVSSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTb2NrZXRTdGF0ZS5SZWNvbm5lY3RTdWM6XG4gICAgICAgICAgICAgICAgdGhpcy50b1VJLmhpZGVXYWl0VUkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuc2hvd1JlbG9naW5WaWV3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOivt+axgua2iOaBryAqL1xuICAgIHB1YmxpYyBzZW5kTXNnKG9wOiBudW1iZXIsIGRhdGE6IGFueSwgcGFyYW1zPzogYW55KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UudGNwU2VuZChvcCwgZGF0YSk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhvcCwgeyBFcnJvckNvZGU6IEMyRkNvbnN0Lk5ldEVyck9mZmxpbmUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXNnTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmlldzogcGFyYW1zLnZpZXcsXG4gICAgICAgICAgICAgICAgb3BzOiBwYXJhbXMub3BzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgd2FpdE5ldDogcGFyYW1zLndhaXROZXQsXG4gICAgICAgICAgICAgICAgZ2V0RXJyOiBwYXJhbXMuZ2V0RXJyLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwib25jZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhcmFtcy53YWl0TmV0KSB7XG4gICAgICAgICAgICB0aGlzLndhaXRMaXN0ZW5lckNudCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdExpc3RlbmVyQ250ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9VSS5zaG93V2FpdFVJKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog572R57uc5raI5oGv5Zue6LCDICovXG4gICAgcHJpdmF0ZSBvbldTTXNnKG9wOiBudW1iZXIsIGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGRhdGEuRXJyb3JDb2RlID09PSB1bmRlZmluZWQgfHwgZGF0YS5FcnJvckNvZGUgPT09IDA7XG4gICAgICAgIGNvbnN0IG1zZ05hbWUgPSBtc2duYW1lW29wXTtcbiAgICAgICAgaWYgKG1zZ05hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MubG9nKFwibmV0d29yay5kaXNwYXRjaCBtc2dOYW1lIGlzIG5pbDogb3AgPSBcIiArIG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnBsck1zZ0hhbmRsZSAmJiB0aGlzLnBsck1zZ0hhbmRsZShvcCwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmVlZFJlbW92ZSA9IFtdO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLm1zZ0xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgLy/lgJLluo/pgY3ljobvvIzkuZ/lsLHmmK/or7TlnKjmnIDnm7TmjqXor7fmsYLnmoTlnLDmlrnmnIDlhYjlk43lupTvvIzlhbbku5blnYfojrflj5bliLfmlrBcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gY291bnQgLSAxOyBpZHggPj0gMDsgaWR4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLm1zZ0xpc3RlbmVyc1tpZHhdO1xuICAgICAgICAgICAgaWYgKGluZm8udmlldyAhPT0gdW5kZWZpbmVkICYmIGluZm8udmlldy5ub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZWVkUmVtb3ZlLnB1c2goaWR4KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmZvLm9wcyA9PT0gdW5kZWZpbmVkIHx8IGluZm8ub3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmVlZFJlbW92ZS5wdXNoKGlkeCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb3BzID0gaW5mby5vcHM7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3BzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBvcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzIHx8IGluZm8uZ2V0RXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmNhbGxiYWNrICYmIGluZm8uY2FsbGJhY2sob3AsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLnR5cGUgPT0gXCJvbmNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRSZW1vdmUucHVzaChpZHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGV0IHF1aWNrRGlzcGxheSA9IHRoaXMuZ2V0UXVpY2tEaXNQbGF5KCk7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5lZWRSZW1vdmUubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJJbmRleCA9IG5lZWRSZW1vdmVbaWR4XTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0xpc3RlbmVyc1tsaXN0ZW5lckluZGV4XSAmJiB0aGlzLm1zZ0xpc3RlbmVyc1tsaXN0ZW5lckluZGV4XS53YWl0TmV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0TGlzdGVuZXJDbnQgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVUkuaGlkZVdhaXRVSSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tc2dMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy50b1VJLnNob3dFcnJvck1zZyhkYXRhLkVycm9yQ29kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlvIDlp4vlv4Pot7Pmo4Dmn6UgKi9cbiAgICBwdWJsaWMgc3RhcnRIZWFydGJlYXQoKSB7XG4gICAgICAgIGxldCBoZWFydFdhaXRUaW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmraPlpITkuo7lj6/ph43ov57nirbmgIHvvIzlpoLmnpzmmK/lsLHkuI3nlKjmlq3lvIDkuoZcbiAgICAgICAgICAgIGlmICh0aGlzLnRvVUkuaXNPcGVuUmVsb2dpblZpZXcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJIZWFydGJlYXRUaW1lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJXYWl0SGVhcnRUaW1lcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b1VJLnNob3dFcnJvck1zZyhDMkZDb25zdC5OZXRFcnJPZmZsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXRlID0gNjAwMDtcbiAgICAgICAgLy8gY29uc3QgaGVhcnRNc2dJZCA9IG1zZ2lkLkNfVGltZVN5bmM7XG4gICAgICAgIC8vIGNvbnN0IGhlYXJ0UmV0SWQgPSBtc2dpZC5HU19UaW1lU3luY19SO1xuICAgICAgICBsZXQgc2VuZEhlYXJ0TXNnID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5zZW5kTXNnKFxuICAgICAgICAgICAgLy8gICAgIGhlYXJ0TXNnSWQsXG4gICAgICAgICAgICAvLyAgICAge30sXG4gICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICBvcHM6IFtoZWFydFJldElkXSxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2FsbGJhY2s6IHRoaXMuY2xlYXJXYWl0SGVhcnRUaW1lci5iaW5kKHRoaXMpXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2FpdEhlYXJ0VGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRIZWFydFRpbWVyID0gc2V0VGltZW91dChoZWFydFdhaXRUaW1lb3V0LCByYXRlICogNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdFRpbWVyKCk7XG4gICAgICAgIC8v56uL5Y2z5omn6KGM5LiA5qyhXG4gICAgICAgIHNlbmRIZWFydE1zZygpO1xuICAgICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gc2V0SW50ZXJ2YWwoc2VuZEhlYXJ0TXNnLCByYXRlKTtcbiAgICB9XG5cbiAgICAvKiog5riF6Zmk5b+D6Lez562J5b6FdGltZXIgKi9cbiAgICBwcml2YXRlIGNsZWFyV2FpdEhlYXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLndhaXRIZWFydFRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53YWl0SGVhcnRUaW1lcik7XG4gICAgICAgICAgICB0aGlzLndhaXRIZWFydFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmuIXpmaTlv4Pot7N0aW1lciAqL1xuICAgIHByaXZhdGUgY2xlYXJIZWFydGJlYXRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhcnRiZWF0VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydGJlYXRUaW1lcik7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlgZzmraLnvZHnu5wgKi9cbiAgICBwdWJsaWMgcHVyZ2UoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIZWFydGJlYXRUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyV2FpdEhlYXJ0VGltZXIoKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnB1cmdlKCk7XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+a2iOaBr0lE5ZCN56ewICovXG4gICAgcHVibGljIGdldE1zZ05hbWUoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbXNnbmFtZVtpZF07XG4gICAgfVxuXG4gICAgLyoqIOino+eggeS6jOi/m+WItuaVsOaNriAqL1xuICAgIHB1YmxpYyBkZWNvZGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIGxldCBkYXRhID0gbXNncGFjay5kZWNvZGUoYmluYXJ5LnRvQnVmZmVyKCkpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cblxuICAgIC8qKiDpnZnmgIHmiJDlkZggKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE5ldFdvcmsgPSBudWxsXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOZXRXb3JrIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTmV0V29yaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIG5ldDogTmV0V29yaztcbiAgICB9XG59XG5cbmMyZi5uZXQgPSBOZXRXb3JrLmdldEluc3RhbmNlKCk7XG5leHBvcnQgeyB9OyJdfQ==