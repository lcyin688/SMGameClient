
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/config/WebQueryConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbmZpZy9XZWJRdWVyeUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7Ozs7R0FJRztBQUNIO0lBc0JJLFdBQVc7SUFDWDtRQVBRLFVBQUssR0FBUSxJQUFJLENBQUM7UUFRdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdCLGlDQUFpQztRQUNqQyxrREFBa0Q7UUFDbEQsSUFBSTtRQUVKLHdDQUF3QztJQUM1QyxDQUFDO0lBakNELHNCQUFXLGlDQUFLO1FBRGhCLGFBQWE7YUFDYjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLG9DQUFRO1FBRG5CLFlBQVk7YUFDWjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGdDQUFJO1FBRGYsU0FBUzthQUNUO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUlELHNCQUFXLGdDQUFJO1FBRGYsaUJBQWlCO2FBQ2pCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBaUJPLGlDQUFRLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFaEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLFNBQVM7aUJBQ1o7Z0JBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixHQUFHLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckU7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQ0k7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQTtBQTlEWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uL2RlZmluZS9DMkZDb25zdFwiO1xuXG4vKipcbiAqIOiOt+WPluWSjOWkhOeQhua1j+iniOWZqOWcsOWdgOagj+WPguaVsFxuICogQGV4YW1wbGVcbiAqIGNvbmZpZy5xdWVyeS5kYXRhLnVzZXJuYW1lXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJRdWVyeUNvbmZpZyB7XG4gICAgLyoqIOiwg+ivleaooeW8j+W8gOWFsyAqL1xuICAgIHB1YmxpYyBnZXQgZGVidWcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbXCJkZWJ1Z1wiXTtcbiAgICB9XG5cbiAgICAvKiog546p5a625biQ5Y+35ZCNICovXG4gICAgcHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtcInVzZXJuYW1lXCJdO1xuICAgIH1cblxuICAgIC8qKiDor63oqIAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbXCJsYW5nXCJdIHx8IEMyRkNvbnN0Lkxhbmd1YWdlS2V5LnpoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGE6IGFueSA9IG51bGw7XG4gICAgLyoqIOa1j+iniOWZqOWcsOWdgOagj+WOn+Wni+WPguaVsCAqL1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICAvKiog5p6E6YCg5Ye95pWwICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLnBhcnNlVXJsKCk7XG5cbiAgICAgICAgLy8gaWYgKCF0aGlzLl9kYXRhW1widXNlcm5hbWVcIl0pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuX2RhdGFbXCJ1c2VybmFtZVwiXSA9IFN0cmluZ1V0aWwuZ3VpZCgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gWVQubG9nLmxvZ0NvbmZpZyh0aGlzLl9kYXRhLCBcIuafpeivouWPguaVsFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcnNlVXJsKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHt9O1xuICAgICAgICBpZiAoIXdpbmRvdy5kb2N1bWVudCkgcmV0dXJuIHt9O1xuXG4gICAgICAgIGxldCB1cmwgPSB3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24uaHJlZi50b1N0cmluZygpO1xuICAgICAgICBsZXQgdSA9IHVybC5zcGxpdChcIj9cIik7XG4gICAgICAgIGlmICh0eXBlb2YgKHVbMV0pID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHUgPSB1WzFdLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgIGxldCBnZXQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB1Lmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBqID0gdVtpXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGouaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gai5zdWJzdHJpbmcoMCwgeCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gai5zdWJzdHJpbmcoeCArIDEpO1xuICAgICAgICAgICAgICAgIGdldFtkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSB2YWx1ZSAmJiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=