"use strict";
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