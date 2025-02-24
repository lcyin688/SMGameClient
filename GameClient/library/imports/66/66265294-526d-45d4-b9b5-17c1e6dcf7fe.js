"use strict";
cc._RF.push(module, '66265KUUm1F1Lm1F8Hm3Pf+', 'GameHelper');
// Script/game/GameHelper.ts

"use strict";
/** 游戏全域级工具类·不可引入子包文件 */
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
exports.GameHelper = void 0;
var GameHelper = /** @class */ (function () {
    function GameHelper() {
    }
    /** 加载子包，并且将子包中的UI配置加入界面管理配置中 */
    GameHelper.loadBundle = function (bundle) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, viewDt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadBundle(bundle)];
                    case 1:
                        _a.sent();
                        fileName = c2f.utils.str.uppercaseFirstLetter(bundle);
                        viewDt = {};
                        viewDt[fileName + "UI"] = null;
                        viewDt[fileName + "View"] = null;
                        viewDt = require(fileName + "View");
                        c2f.gui.addViewList(viewDt[fileName + "View"]);
                        return [2 /*return*/, viewDt[fileName + "UI"]];
                }
            });
        });
    };
    /** 版本比较:verA - verB
     * = 0: 版本号相同
     * > 0: verA版本更高
     * < 0: verB版本更高
     */
    GameHelper.compareVersion = function (verA, verB) {
        var vA = verA.split('.');
        var vB = verB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || '0');
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    };
    /** 是否为H5游戏 */
    GameHelper.isH5Game = function () {
        var isH5 = false;
        if (CC_BUILD) {
            switch (cc.sys.platform) {
                case cc.sys.MOBILE_BROWSER:
                case cc.sys.DESKTOP_BROWSER:
                    isH5 = true;
                    break;
            }
        }
        else {
            isH5 = false;
        }
        return isH5;
    };
    /**一星=白色，二星=绿色，三星=蓝色，四星=紫色，五星=橙色，六星—十星=红 */
    GameHelper.starConversionQuality = function (star) {
        var data = star;
        if (star > 5) {
            data = 6;
        }
        return data;
    };
    /** map to object */
    GameHelper.protoMapToObject = function (map) {
        if (map == null) {
            return {};
        }
        if (map.forEach == null) {
            return map;
        }
        var obj = {};
        if (map.forEach) {
            map.forEach(function (val, id) {
                obj[id] = val;
            });
        }
        return obj;
    };
    // array To Object
    GameHelper.protoArrayToObject = function (array) {
        var obj = {};
        if (array != null && array.length > 0) {
            for (var i = 0; i < array.length; ++i) {
                obj[array[i]] = true;
            }
        }
        return obj;
    };
    /** IDN->idn */
    GameHelper.convertIdNToidn = function (arrIdN) {
        var ret = [];
        for (var _i = 0, arrIdN_1 = arrIdN; _i < arrIdN_1.length; _i++) {
            var one = arrIdN_1[_i];
            ret.push({ id: one.Id, n: one.N });
        }
        return ret;
    };
    /** IdNum->idn */
    GameHelper.convertIdNumToidn = function (arrIdNum) {
        var ret = [];
        for (var _i = 0, arrIdNum_1 = arrIdNum; _i < arrIdNum_1.length; _i++) {
            var one = arrIdNum_1[_i];
            ret.push({ id: one.Id, n: one.Num });
        }
        return ret;
    };
    /** 数字转大写 */
    GameHelper.conversionUppercase = function (num) {
        return c2f.language.words(2400 + num);
    };
    /** 周几数字转大写 */
    GameHelper.conversionUppercaseWeek = function (num) {
        var str = "";
        if (num <= 6) {
            str = c2f.language.words(2400 + num);
        }
        else {
            str = c2f.language.words(30040);
        }
        return str;
    };
    /**获取数组里边有几个相同的数字 */
    GameHelper.getArrHaveCount = function (arr, num) {
        var count = 0;
        arr.forEach(function (v) {
            if (v == num) {
                count++;
            }
        });
        return count;
    };
    /**设置物理引擎状态 */
    GameHelper.setPhysics = function (state) {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = state;
        physicsManager.debugDrawFlags = 0;
        cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
        physicsManager.enabledAccumulator = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    };
    return GameHelper;
}());
exports.GameHelper = GameHelper;

cc._RF.pop();