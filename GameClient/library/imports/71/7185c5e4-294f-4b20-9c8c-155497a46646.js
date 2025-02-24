"use strict";
cc._RF.push(module, '7185cXkKU9LIJyMFVSXpGZG', 'GameConfig');
// entrance/script/game/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CfgType;
(function (CfgType) {
    CfgType[CfgType["JSON"] = 1] = "JSON";
    CfgType[CfgType["CSV"] = 2] = "CSV";
})(CfgType || (CfgType = {}));
var GameConfig = /** @class */ (function () {
    function GameConfig() {
        /** 本地配置 */
        this.cfgs = null;
        /** 配置文件类型 */
        this.type = null;
        /** 活动语言表 */
        this.actLanguage = null;
        this.cfgs = new Map();
    }
    Object.defineProperty(GameConfig, "ins", {
        get: function () {
            if (!GameConfig._ins) {
                GameConfig._ins = new GameConfig();
            }
            return GameConfig._ins;
        },
        enumerable: false,
        configurable: true
    });
    /** 释放 */
    GameConfig.prototype.clear = function () {
        //this.cfgs.clear();//暂时不释放
    };
    /** 获得某表数据 */
    GameConfig.prototype.getCfgData = function (tabName) {
        var result = null;
        if (this.cfgs) {
            result = this.cfgs.get(tabName);
        }
        return result;
    };
    /** 是否为JSON */
    GameConfig.prototype.isJsonCfg = function () {
        return this.type == CfgType.JSON;
    };
    /** 设置活动语言表配置 */
    GameConfig.prototype.setActLanguageTab = function (data) {
    };
    //单例
    GameConfig._ins = null;
    return GameConfig;
}());
szg.cfg = GameConfig.ins;

cc._RF.pop();