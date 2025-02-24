"use strict";
cc._RF.push(module, '201e8tu755HQoDkulIo02/3', 'PlayerData');
// entrance/script/game/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
var PublicData_1 = require("./plrBase/PublicData");
var LoginData_1 = require("./login/LoginData");
/** 玩家数据总领：具体模块数据 */
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        /** 配置加载成功 */
        this._cfgLoaded = false;
        this.dispatchs = [];
    }
    Object.defineProperty(PlayerData, "ins", {
        get: function () {
            if (!PlayerData._ins) {
                PlayerData._ins = new PlayerData();
            }
            return PlayerData._ins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "cfgLoaded", {
        get: function () {
            return this._cfgLoaded;
        },
        set: function (value) {
            this._cfgLoaded = value;
            if (value && this.beforeLoadCfg) {
                for (var key in this.beforeLoadCfg) {
                    this.dispatchMsg(Number(key), this.beforeLoadCfg[key]);
                }
                this.beforeLoadCfg = null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "public", {
        /** 公用数据 */
        get: function () {
            return this._public;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    /** 初始化 */
    PlayerData.prototype.initPlayer = function () {
    };
    /** 清空模块数据 */
    PlayerData.prototype.clearModules = function () {
        for (var _i = 0, _a = this.dispatchs; _i < _a.length; _i++) {
            var one = _a[_i];
            if (one.reset) {
                one.reset();
            }
            if (one.release) {
                one.release();
            }
        }
        this._public = null;
        this._rank = null;
        this.dispatchs = [];
    };
    /** 分发网络消息 */
    PlayerData.prototype.handleMsg = function (op, data) {
        if (this.cfgLoaded) {
            this.dispatchMsg(op, data);
        }
        else {
            this.beforeLoadCfg = this.beforeLoadCfg || {};
            this.beforeLoadCfg[op] = data;
        }
    };
    PlayerData.prototype.dispatchMsg = function (op, data) {
    };
    PlayerData.prototype.initModules = function () {
        this.dispatchs = [];
        this._public = new PublicData_1.PublicData();
        this.dispatchs.push(this._public);
        this._rank = new LoginData_1.LoginData();
        this.dispatchs.push(this._rank);
    };
    PlayerData._ins = null;
    return PlayerData;
}());
exports.PlayerData = PlayerData;
szg.player = PlayerData.ins;

cc._RF.pop();