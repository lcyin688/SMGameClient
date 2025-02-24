"use strict";
cc._RF.push(module, '4c091yr2+xIELEL1AEaMAsH', 'GlobalConfig');
// c2f-framework/config/GlobalConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConfig = void 0;
var C2FConst_1 = require("../define/C2FConst");
/* 游戏配置解析，对应 framework/gameConfig.json 配置 */
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig(config) {
        /** 游戏配置数据 */
        this._data = null;
        var data = config.json;
        this._data = Object.freeze(data);
        c2f.log.logConfig(this._data, "游戏配置");
    }
    Object.defineProperty(GlobalConfig.prototype, "version", {
        /** 客户端版本号配置 */
        get: function () {
            return this._data["config"]["version"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "package", {
        /** 包名 */
        get: function () {
            return this._data["config"]["package"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "frameRate", {
        /** 游戏每秒传输帧数 */
        get: function () {
            return this._data.config.frameRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "localDataKey", {
        /** 本地存储内容加密 key */
        get: function () {
            return this._data.config.localDataKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "localDataIv", {
        /** 本地存储内容加密 iv */
        get: function () {
            return this._data.config.localDataIv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "httpServer", {
        /** Http 服务器地址 */
        get: function () {
            return this._data.config.httpServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "httpTimeout", {
        /** Http 请求超时时间 */
        get: function () {
            return this._data.config.httpTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "language", {
        /** 获取当前客户端支持的语言类型 */
        get: function () {
            return this._data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "languageCfgFile", {
        /** 获取当前客户端支持的语言配置文件 */
        get: function () {
            return this._data.language.file || "languageRes";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "languageList", {
        /** 获取当前客户端支持的语言列表 */
        get: function () {
            return this._data.language.type || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "languageDefault", {
        /** 获取当前客户端支持的语言配置文件 */
        get: function () {
            var defLG = this._data.language.default || C2FConst_1.C2FConst.LanguageKey.zh;
            if (defLG.length <= 0) {
                var code = cc.sys.languageCode;
                if (code.indexOf('zh_') >= 0 || code.indexOf('zh-') >= 0) {
                    defLG = code.indexOf('tw') >= 0 ? C2FConst_1.C2FConst.LanguageKey.tw : C2FConst_1.C2FConst.LanguageKey.zh;
                }
                else {
                    //TODO: 其他默认语言适配
                    defLG = C2FConst_1.C2FConst.LanguageKey.zh;
                }
            }
            return defLG;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "lanuageBase", {
        /** 获取当前客户端编辑模式下所用语言 */
        get: function () {
            var base = this._data.language.base || C2FConst_1.C2FConst.LanguageKey.zh;
            return base;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalConfig.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return GlobalConfig;
}());
exports.GlobalConfig = GlobalConfig;

cc._RF.pop();