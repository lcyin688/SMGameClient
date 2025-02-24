"use strict";
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