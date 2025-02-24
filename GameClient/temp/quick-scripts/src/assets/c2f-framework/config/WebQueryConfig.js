"use strict";
cc._RF.push(module, '8bb21IROaBFTbh700IUA1Yf', 'WebQueryConfig');
// c2f-framework/config/WebQueryConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebQueryConfig = void 0;
var C2FConst_1 = require("../define/C2FConst");
/**
 * 获取和处理浏览器地址栏参数
 * @example
 * config.query.data.username
 */
var WebQueryConfig = /** @class */ (function () {
    /** 构造函数 */
    function WebQueryConfig() {
        this._data = null;
        if (!cc.sys.isBrowser) {
            this._data = {};
            return;
        }
        this._data = this.parseUrl();
        // if (!this._data["username"]) {
        //     this._data["username"] = StringUtil.guid();
        // }
        // YT.log.logConfig(this._data, "查询参数");
    }
    Object.defineProperty(WebQueryConfig.prototype, "debug", {
        /** 调试模式开关 */
        get: function () {
            return this._data["debug"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebQueryConfig.prototype, "username", {
        /** 玩家帐号名 */
        get: function () {
            return this._data["username"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebQueryConfig.prototype, "lang", {
        /** 语言 */
        get: function () {
            return this._data["lang"] || C2FConst_1.C2FConst.LanguageKey.zh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebQueryConfig.prototype, "data", {
        /** 浏览器地址栏原始参数 */
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    WebQueryConfig.prototype.parseUrl = function () {
        if (typeof window !== "object")
            return {};
        if (!window.document)
            return {};
        var url = window.document.location.href.toString();
        var u = url.split("?");
        if (typeof (u[1]) == "string") {
            u = u[1].split("&");
            var get = {};
            for (var i = 0, l = u.length; i < l; ++i) {
                var j = u[i];
                var x = j.indexOf("=");
                if (x < 0) {
                    continue;
                }
                var key = j.substring(0, x);
                var value = j.substring(x + 1);
                get[decodeURIComponent(key)] = value && decodeURIComponent(value);
            }
            return get;
        }
        else {
            return {};
        }
    };
    return WebQueryConfig;
}());
exports.WebQueryConfig = WebQueryConfig;

cc._RF.pop();