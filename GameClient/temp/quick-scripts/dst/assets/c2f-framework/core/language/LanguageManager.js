
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/language/LanguageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8de4em2xv5EGJl6DxA8jLN0', 'LanguageManager');
// c2f-framework/core/language/LanguageManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.LanguageEvent = void 0;
var C2FConst_1 = require("../../define/C2FConst");
var EventDispatcher_1 = require("../event/EventDispatcher");
var LanguageData_1 = require("./LanguageData");
var words_1 = require("../../game/words");
var LanguageEvent;
(function (LanguageEvent) {
    /** 语种变化事件 */
    LanguageEvent["CHANGE"] = "LanguageEvent.CHANGE";
    /** 语种资源释放事件 */
    LanguageEvent["RELEASE_RES"] = "LanguageEvent.RELEASE_RES";
})(LanguageEvent = exports.LanguageEvent || (exports.LanguageEvent = {}));
var LanguageManager = /** @class */ (function (_super) {
    __extends(LanguageManager, _super);
    function LanguageManager() {
        var _this = _super.call(this) || this;
        _this.mulLGRes = {};
        return _this;
    }
    Object.defineProperty(LanguageManager.prototype, "current", {
        /** 获取当前语种 */
        get: function () {
            return LanguageData_1.LanguageData.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageManager.prototype, "languages", {
        /** 获取支持的多语种数组 */
        get: function () {
            if (c2f.config.game) {
                return c2f.config.game.languageList;
            }
            else {
                return [];
            }
        },
        enumerable: false,
        configurable: true
    });
    /** 当前语言是否存在 */
    LanguageManager.prototype.isExist = function (lang) {
        return this.languages.indexOf(lang) > -1;
    };
    /**
     * 根据data获取对应语种的字符
     * @param labId
     * @param arr
     */
    LanguageManager.prototype.getLangByID = function (labId, param) {
        if (param === void 0) { param = ''; }
        var value = LanguageData_1.LanguageData.getLangByID(labId, param);
        return value;
    };
    /**
     * 根据data获取对应语种的字符
     * @param labId
     * @param arr
     */
    LanguageManager.prototype.words = function (id) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var strParam = '';
        for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
            var one = params_1[_a];
            if (strParam.length <= 0) {
                strParam = '' + one;
            }
            else {
                strParam += '|' + one;
            }
        }
        return LanguageData_1.LanguageData.getLangByID(id, strParam);
    };
    /** 初始化语言设置 */
    LanguageManager.prototype.initLanguage = function (endCb) {
        return __awaiter(this, void 0, void 0, function () {
            var lgSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.languages.length > 0)) return [3 /*break*/, 2];
                        lgSet = c2f.storage.getPlainItem(C2FConst_1.C2FConst.localLGSet, null);
                        if (lgSet) {
                            LanguageData_1.LanguageData.current = lgSet;
                        }
                        else {
                            LanguageData_1.LanguageData.current = c2f.config.game.languageDefault;
                        }
                        return [4 /*yield*/, this.resetCurWords()];
                    case 1:
                        _a.sent();
                        this.loadLGResJson(endCb);
                        return [3 /*break*/, 3];
                    case 2:
                        endCb && endCb();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** 加载多语言配置文件 */
    LanguageManager.prototype.loadLGResJson = function (endCb) {
        var _this = this;
        var url = 'statistic/' + c2f.config.game.languageCfgFile;
        c2f.res.load(cc.resources.name, url, cc.JsonAsset, function (err, asset) {
            if (err) {
                cc.error(err.message);
            }
            else {
                _this.mulLGRes = asset.json;
            }
            c2f.res.release(url, cc.JsonAsset, cc.resources.name);
            endCb && endCb();
        });
    };
    /** 根据uuid获得多语言对应ID */
    LanguageManager.prototype.getLGResUuid = function (uuid) {
        var retUuid = null;
        if (this.languages.length > 0) {
            var find = this.mulLGRes[uuid];
            if (find && find[this.current]) {
                retUuid = find[this.current];
            }
        }
        return retUuid;
    };
    /** 重置程序文本 */
    LanguageManager.prototype.resetCurWords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bundleName, url, assetRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.current == C2FConst_1.C2FConst.LanguageKey.zh)) return [3 /*break*/, 1];
                        LanguageData_1.LanguageData.data = words_1.words;
                        return [3 /*break*/, 3];
                    case 1:
                        bundleName = C2FConst_1.C2FConst.mulBundlePre + this.current;
                        url = "ab:" + bundleName + "/words";
                        return [4 /*yield*/, c2f.res.loadOne(url, cc.TextAsset)];
                    case 2:
                        assetRes = _a.sent();
                        if (assetRes && assetRes.text) {
                            LanguageData_1.LanguageData.data = eval(assetRes.text);
                        }
                        c2f.res.release(url, cc.TextAsset);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LanguageManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new LanguageManager();
        }
        return this._instance;
    };
    /** 静态成员 */
    LanguageManager._instance = null;
    return LanguageManager;
}(EventDispatcher_1.EventDispatcher));
c2f.language = LanguageManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvbGFuZ3VhZ2UvTGFuZ3VhZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsNERBQTJEO0FBQzNELCtDQUE4QztBQUM5QywwQ0FBeUM7QUFFekMsSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3JCLGFBQWE7SUFDYixnREFBK0IsQ0FBQTtJQUMvQixlQUFlO0lBQ2YsMERBQXlDLENBQUE7QUFDN0MsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBR0Q7SUFBOEIsbUNBQWU7SUFLekM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUdELHNCQUFXLG9DQUFPO1FBRGxCLGFBQWE7YUFDYjtZQUNJLE9BQU8sMkJBQVksQ0FBQyxPQUFPLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxzQ0FBUztRQURwQixpQkFBaUI7YUFDakI7WUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQzthQUNiO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxlQUFlO0lBQ1IsaUNBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFDQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxLQUFrQjtRQUFsQixzQkFBQSxFQUFB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBMYW5ndWFnZURhdGEgfSBmcm9tIFwiLi9MYW5ndWFnZURhdGFcIjtcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4uLy4uL2dhbWUvd29yZHNcIjtcblxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VFdmVudCB7XG4gICAgLyoqIOivreenjeWPmOWMluS6i+S7tiAqL1xuICAgIENIQU5HRSA9ICdMYW5ndWFnZUV2ZW50LkNIQU5HRScsXG4gICAgLyoqIOivreenjei1hOa6kOmHiuaUvuS6i+S7tiAqL1xuICAgIFJFTEVBU0VfUkVTID0gXCJMYW5ndWFnZUV2ZW50LlJFTEVBU0VfUkVTXCJcbn1cblxuXG5jbGFzcyBMYW5ndWFnZU1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG4gICAgLyoqIOWkmuivreiogOmFjee9riAqL1xuICAgIHByaXZhdGUgbXVsTEdSZXM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm11bExHUmVzID0ge307XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluW9k+WJjeivreenjSAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2VEYXRhLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluaUr+aMgeeahOWkmuivreenjeaVsOe7hCAqL1xuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgaWYgKGMyZi5jb25maWcuZ2FtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGMyZi5jb25maWcuZ2FtZS5sYW5ndWFnZUxpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5b2T5YmN6K+t6KiA5piv5ZCm5a2Y5ZyoICovXG4gICAgcHVibGljIGlzRXhpc3QobGFuZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcy5pbmRleE9mKGxhbmcpID4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2uZGF0YeiOt+WPluWvueW6lOivreenjeeahOWtl+esplxuICAgICAqIEBwYXJhbSBsYWJJZCBcbiAgICAgKiBAcGFyYW0gYXJyIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMYW5nQnlJRChsYWJJZDogbnVtYmVyLCBwYXJhbTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdmFsdWUgPSBMYW5ndWFnZURhdGEuZ2V0TGFuZ0J5SUQobGFiSWQsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrmRhdGHojrflj5blr7nlupTor63np43nmoTlrZfnrKZcbiAgICAgKiBAcGFyYW0gbGFiSWQgXG4gICAgICogQHBhcmFtIGFyciBcbiAgICAgKi9cbiAgICBwdWJsaWMgd29yZHMoaWQ6IG51bWJlciwgLi4ucGFyYW1zKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0clBhcmFtID0gJyc7XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChzdHJQYXJhbS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHN0clBhcmFtID0gJycgKyBvbmU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0clBhcmFtICs9ICd8JyArIG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTGFuZ3VhZ2VEYXRhLmdldExhbmdCeUlEKGlkLCBzdHJQYXJhbSk7XG4gICAgfVxuXG4gICAgLyoqIOWIneWni+WMluivreiogOiuvue9riAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0TGFuZ3VhZ2UoZW5kQ2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGdTZXQgPSBjMmYuc3RvcmFnZS5nZXRQbGFpbkl0ZW0oQzJGQ29uc3QubG9jYWxMR1NldCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAobGdTZXQpIHtcbiAgICAgICAgICAgICAgICBMYW5ndWFnZURhdGEuY3VycmVudCA9IGxnU2V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMYW5ndWFnZURhdGEuY3VycmVudCA9IGMyZi5jb25maWcuZ2FtZS5sYW5ndWFnZURlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlc2V0Q3VyV29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZExHUmVzSnNvbihlbmRDYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmRDYiAmJiBlbmRDYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWKoOi9veWkmuivreiogOmFjee9ruaWh+S7tiAqL1xuICAgIHB1YmxpYyBsb2FkTEdSZXNKc29uKGVuZENiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdXJsID0gJ3N0YXRpc3RpYy8nICsgYzJmLmNvbmZpZy5nYW1lLmxhbmd1YWdlQ2ZnRmlsZTtcbiAgICAgICAgYzJmLnJlcy5sb2FkKGNjLnJlc291cmNlcy5uYW1lLCB1cmwsIGNjLkpzb25Bc3NldCwgKGVycjogRXJyb3IgfCBudWxsLCBhc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm11bExHUmVzID0gYXNzZXQuanNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMyZi5yZXMucmVsZWFzZSh1cmwsIGNjLkpzb25Bc3NldCwgY2MucmVzb3VyY2VzLm5hbWUpO1xuICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOagueaNrnV1aWTojrflvpflpJror63oqIDlr7nlupRJRCAqL1xuICAgIHB1YmxpYyBnZXRMR1Jlc1V1aWQodXVpZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXRVdWlkID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBmaW5kID0gdGhpcy5tdWxMR1Jlc1t1dWlkXTtcbiAgICAgICAgICAgIGlmIChmaW5kICYmIGZpbmRbdGhpcy5jdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHJldFV1aWQgPSBmaW5kW3RoaXMuY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldFV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIOmHjee9rueoi+W6j+aWh+acrCAqL1xuICAgIHB1YmxpYyBhc3luYyByZXNldEN1cldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IEMyRkNvbnN0Lkxhbmd1YWdlS2V5LnpoKSB7XG4gICAgICAgICAgICBMYW5ndWFnZURhdGEuZGF0YSA9IHdvcmRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJ1bmRsZU5hbWUgPSBDMkZDb25zdC5tdWxCdW5kbGVQcmUgKyB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICBsZXQgdXJsID0gYGFiOiR7YnVuZGxlTmFtZX0vd29yZHNgO1xuICAgICAgICAgICAgbGV0IGFzc2V0UmVzOiBjYy5UZXh0QXNzZXQgPSBhd2FpdCBjMmYucmVzLmxvYWRPbmUodXJsLCBjYy5UZXh0QXNzZXQpO1xuICAgICAgICAgICAgaWYgKGFzc2V0UmVzICYmIGFzc2V0UmVzLnRleHQpIHtcbiAgICAgICAgICAgICAgICBMYW5ndWFnZURhdGEuZGF0YSA9IGV2YWwoYXNzZXRSZXMudGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjMmYucmVzLnJlbGVhc2UodXJsLCBjYy5UZXh0QXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOmdmeaAgeaIkOWRmCAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTGFuZ3VhZ2VNYW5hZ2VyID0gbnVsbFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTGFuZ3VhZ2VNYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGFuZ3VhZ2VNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlTWFuYWdlcjtcbiAgICB9XG59XG5cbmMyZi5sYW5ndWFnZSA9IExhbmd1YWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuZXhwb3J0IHsgfTsiXX0=