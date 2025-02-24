"use strict";
cc._RF.push(module, '8c4aflMClBOML84dx3w7EBZ', 'EntranceData');
// entrance/script/game/EntranceData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntraData = void 0;
var msgid_1 = require("../../../resources/proto/msgid");
/** 游戏入口数据 */
var EntraData = /** @class */ (function () {
    //---------DEV相关-----------
    function EntraData() {
        /** 已拥有角色 */
        this._owned = undefined;
        this.curSvrUnit = null;
        this._netCfg = null;
        this.mapArea = null;
        this.isWhite = undefined;
        this.customHotUrl = null;
    }
    Object.defineProperty(EntraData, "ins", {
        get: function () {
            if (!EntraData._ins) {
                EntraData._ins = new EntraData();
            }
            return EntraData._ins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "curSvrUnit", {
        get: function () {
            return this._curSvrUnit;
        },
        set: function (value) {
            this._curSvrUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "netCfg", {
        get: function () {
            return this._netCfg;
        },
        set: function (v) {
            this._netCfg = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "loginParam", {
        get: function () {
            return this._loginParam;
        },
        set: function (v) {
            this._loginParam = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "isWhite", {
        get: function () {
            return this._isWhite;
        },
        set: function (value) {
            this._isWhite = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "customHotUrl", {
        get: function () {
            return this._customHotUrl;
        },
        set: function (v) {
            this._customHotUrl = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntraData.prototype, "owned", {
        get: function () {
            return this._owned;
        },
        set: function (v) {
            this._owned = v;
        },
        enumerable: false,
        configurable: true
    });
    //重登录：先重登录sdk,再重登陆游戏
    EntraData.prototype.reLogin = function (sucCb, failCb) {
        if (!this.loginParam) {
            failCb && failCb();
            return;
        }
        var param = Object.copyDepth(this.loginParam);
        param.P1 = "reconnect";
        c2f.net.sendMsg(msgid_1.msgid.C_Login, param, {
            getErr: true,
            ops: [msgid_1.msgid.GW_Login_R],
            callback: sucCb,
        });
    };
    EntraData._ins = null;
    return EntraData;
}());
exports.EntraData = EntraData;
szg.entrance = EntraData.ins;

cc._RF.pop();