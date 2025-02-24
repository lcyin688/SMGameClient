
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/config/GlobalConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbmZpZy9HbG9iYWxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBdUI5Qyw0Q0FBNEM7QUFDNUM7SUFxRUksc0JBQVksTUFBVztRQU52QixhQUFhO1FBQ0wsVUFBSyxHQUFXLElBQUksQ0FBQztRQU16QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF4RUQsc0JBQUksaUNBQU87UUFEWCxlQUFlO2FBQ2Y7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBTztRQURYLFNBQVM7YUFDVDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFTO1FBRGIsZUFBZTthQUNmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBWTtRQURoQixtQkFBbUI7YUFDbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFXO1FBRGYsa0JBQWtCO2FBQ2xCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVTtRQURkLGlCQUFpQjthQUNqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7UUFEZixrQkFBa0I7YUFDbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGtDQUFRO1FBRFoscUJBQXFCO2FBQ3JCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFlO1FBRG5CLHVCQUF1QjthQUN2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFZO1FBRGhCLHFCQUFxQjthQUNyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFlO1FBRG5CLHVCQUF1QjthQUN2QjtZQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDbkUsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7aUJBQ3ZGO3FCQUFNO29CQUNILGdCQUFnQjtvQkFDaEIsS0FBSyxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztpQkFDbkM7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUkscUNBQVc7UUFEZix1QkFBdUI7YUFDdkI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQy9ELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBSUQsc0JBQVcsOEJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQVFMLG1CQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQTNFWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uL2RlZmluZS9DMkZDb25zdFwiO1xuXG5pbnRlcmZhY2UgR0dDZmcge1xuICAgIHZlcnNpb246IHN0cmluZztcbiAgICBwYWNrYWdlOiBzdHJpbmc7XG4gICAgbG9jYWxEYXRhS2V5OiBzdHJpbmc7XG4gICAgbG9jYWxEYXRhSXY6IHN0cmluZztcbiAgICBodHRwU2VydmVyOiBzdHJpbmc7XG4gICAgaHR0cFRpbWVvdXQ6IG51bWJlcjtcbiAgICBmcmFtZVJhdGU6IG51bWJlcjtcbn1cbmludGVyZmFjZSBHTGdDZmcge1xuICAgIGZpbGU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmdbXTtcbiAgICBiYXNlOiBzdHJpbmc7XG4gICAgZGVmYXVsdDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIEdHQ0RlZiB7XG4gICAgY29uZmlnOiBHR0NmZztcbiAgICBsYW5ndWFnZTogR0xnQ2ZnO1xufVxuXG5cbi8qIOa4uOaIj+mFjee9ruino+aekO+8jOWvueW6lCBmcmFtZXdvcmsvZ2FtZUNvbmZpZy5qc29uIOmFjee9riAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbENvbmZpZyB7XG4gICAgLyoqIOWuouaIt+err+eJiOacrOWPt+mFjee9riAqL1xuICAgIGdldCB2ZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW1wiY29uZmlnXCJdW1widmVyc2lvblwiXTtcbiAgICB9XG4gICAgLyoqIOWMheWQjSAqL1xuICAgIGdldCBwYWNrYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW1wiY29uZmlnXCJdW1wicGFja2FnZVwiXTtcbiAgICB9XG4gICAgLyoqIOa4uOaIj+avj+enkuS8oOi+k+W4p+aVsCAqL1xuICAgIGdldCBmcmFtZVJhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuY29uZmlnLmZyYW1lUmF0ZTtcbiAgICB9XG4gICAgLyoqIOacrOWcsOWtmOWCqOWGheWuueWKoOWvhiBrZXkgKi9cbiAgICBnZXQgbG9jYWxEYXRhS2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmNvbmZpZy5sb2NhbERhdGFLZXk7XG4gICAgfVxuICAgIC8qKiDmnKzlnLDlrZjlgqjlhoXlrrnliqDlr4YgaXYgKi9cbiAgICBnZXQgbG9jYWxEYXRhSXYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuY29uZmlnLmxvY2FsRGF0YUl2O1xuICAgIH1cbiAgICAvKiogSHR0cCDmnI3liqHlmajlnLDlnYAgKi9cbiAgICBnZXQgaHR0cFNlcnZlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5jb25maWcuaHR0cFNlcnZlcjtcbiAgICB9XG4gICAgLyoqIEh0dHAg6K+35rGC6LaF5pe25pe26Ze0ICovXG4gICAgZ2V0IGh0dHBUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmNvbmZpZy5odHRwVGltZW91dDtcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5b2T5YmN5a6i5oi356uv5pSv5oyB55qE6K+t6KiA57G75Z6LICovXG4gICAgZ2V0IGxhbmd1YWdlKCk6IEdMZ0NmZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmxhbmd1YWdlO1xuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmN5a6i5oi356uv5pSv5oyB55qE6K+t6KiA6YWN572u5paH5Lu2ICovXG4gICAgZ2V0IGxhbmd1YWdlQ2ZnRmlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5sYW5ndWFnZS5maWxlIHx8IFwibGFuZ3VhZ2VSZXNcIjtcbiAgICB9XG4gICAgLyoqIOiOt+WPluW9k+WJjeWuouaIt+err+aUr+aMgeeahOivreiogOWIl+ihqCAqL1xuICAgIGdldCBsYW5ndWFnZUxpc3QoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5sYW5ndWFnZS50eXBlIHx8IFtdO1xuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmN5a6i5oi356uv5pSv5oyB55qE6K+t6KiA6YWN572u5paH5Lu2ICovXG4gICAgZ2V0IGxhbmd1YWdlRGVmYXVsdCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGVmTEcgPSB0aGlzLl9kYXRhLmxhbmd1YWdlLmRlZmF1bHQgfHwgQzJGQ29uc3QuTGFuZ3VhZ2VLZXkuemg7XG4gICAgICAgIGlmIChkZWZMRy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgbGV0IGNvZGUgPSBjYy5zeXMubGFuZ3VhZ2VDb2RlO1xuICAgICAgICAgICAgaWYgKGNvZGUuaW5kZXhPZignemhfJykgPj0gMCB8fCBjb2RlLmluZGV4T2YoJ3poLScpID49IDApIHtcbiAgICAgICAgICAgICAgICBkZWZMRyA9IGNvZGUuaW5kZXhPZigndHcnKSA+PSAwID8gQzJGQ29uc3QuTGFuZ3VhZ2VLZXkudHcgOiBDMkZDb25zdC5MYW5ndWFnZUtleS56aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiDlhbbku5bpu5jorqTor63oqIDpgILphY1cbiAgICAgICAgICAgICAgICBkZWZMRyA9IEMyRkNvbnN0Lkxhbmd1YWdlS2V5LnpoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZMRztcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5b2T5YmN5a6i5oi356uv57yW6L6R5qih5byP5LiL5omA55So6K+t6KiAICovXG4gICAgZ2V0IGxhbnVhZ2VCYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBiYXNlID0gdGhpcy5fZGF0YS5sYW5ndWFnZS5iYXNlIHx8IEMyRkNvbnN0Lkxhbmd1YWdlS2V5LnpoO1xuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICAvKiog5ri45oiP6YWN572u5pWw5o2uICovXG4gICAgcHJpdmF0ZSBfZGF0YTogR0dDRGVmID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBhbnkpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBjb25maWcuanNvbjtcbiAgICAgICAgdGhpcy5fZGF0YSA9IE9iamVjdC5mcmVlemUoZGF0YSk7XG5cbiAgICAgICAgYzJmLmxvZy5sb2dDb25maWcodGhpcy5fZGF0YSwgXCLmuLjmiI/phY3nva5cIik7XG4gICAgfVxufSJdfQ==