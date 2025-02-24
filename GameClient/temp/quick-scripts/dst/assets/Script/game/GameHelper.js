
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/GameHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9HYW1lSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtJQUFBO0lBaUtBLENBQUM7SUE3SkcsZ0NBQWdDO0lBQ25CLHFCQUFVLEdBQXZCLFVBQXdCLE1BQWtDOzs7Ozs0QkFDdEQscUJBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUM3QixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3RELE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ2hCLE1BQU0sQ0FBSSxRQUFRLE9BQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDL0IsTUFBTSxDQUFJLFFBQVEsU0FBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUNqQyxNQUFNLEdBQUcsT0FBTyxDQUFJLFFBQVEsU0FBTSxDQUFDLENBQUM7d0JBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBSSxRQUFRLFNBQU0sQ0FBQyxDQUFDLENBQUM7d0JBQy9DLHNCQUFPLE1BQU0sQ0FBSSxRQUFRLE9BQUksQ0FBQyxFQUFDOzs7O0tBQ2xDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUFjLEdBQXJCLFVBQXNCLElBQVksRUFBRSxJQUFZO1FBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMs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QUNQLHFCQUFVLEdBQWpCLFVBQWtCLEtBQWM7UUFDNUIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDOUUsY0FBYyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQTtRQUV4QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBSzFDLENBQUM7SUFNTCxpQkFBQztBQUFELENBaktBLEFBaUtDLElBQUE7QUFqS1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5ri45oiP5YWo5Z+f57qn5bel5YW357G7wrfkuI3lj6/lvJXlhaXlrZDljIXmlofku7YgKi9cblxuaW1wb3J0IHsgR2FtZUNhbGMgfSBmcm9tIFwiLi9HYW1lQ2FsY3VsYXRvclwiO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gXCIuL0dhbWVDb25zdHNcIjtcbmltcG9ydCB7IFVJUGEgfSBmcm9tIFwiLi9VSVBhcmFtXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lSGVscGVyIHtcblxuXG5cbiAgICAvKiog5Yqg6L295a2Q5YyF77yM5bm25LiU5bCG5a2Q5YyF5Lit55qEVUnphY3nva7liqDlhaXnlYzpnaLnrqHnkIbphY3nva7kuK0gKi9cbiAgICBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZShidW5kbGU6IEdhbWVDb25zdHMuQnVuZGxlIHwgc3RyaW5nKSB7XG4gICAgICAgIGF3YWl0IGMyZi5yZXMubG9hZEJ1bmRsZShidW5kbGUpO1xuICAgICAgICBsZXQgZmlsZU5hbWUgPSBjMmYudXRpbHMuc3RyLnVwcGVyY2FzZUZpcnN0TGV0dGVyKGJ1bmRsZSk7XG4gICAgICAgIGxldCB2aWV3RHQgPSB7fTtcbiAgICAgICAgdmlld0R0W2Ake2ZpbGVOYW1lfVVJYF0gPSBudWxsO1xuICAgICAgICB2aWV3RHRbYCR7ZmlsZU5hbWV9Vmlld2BdID0gbnVsbDtcbiAgICAgICAgdmlld0R0ID0gcmVxdWlyZShgJHtmaWxlTmFtZX1WaWV3YCk7XG4gICAgICAgIGMyZi5ndWkuYWRkVmlld0xpc3Qodmlld0R0W2Ake2ZpbGVOYW1lfVZpZXdgXSk7XG4gICAgICAgIHJldHVybiB2aWV3RHRbYCR7ZmlsZU5hbWV9VUlgXTtcbiAgICB9XG5cbiAgICAvKiog54mI5pys5q+U6L6DOnZlckEgLSB2ZXJCXG4gICAgICogPSAwOiDniYjmnKzlj7fnm7jlkIxcbiAgICAgKiA+IDA6IHZlckHniYjmnKzmm7Tpq5hcbiAgICAgKiA8IDA6IHZlckLniYjmnKzmm7Tpq5hcbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVZlcnNpb24odmVyQTogc3RyaW5nLCB2ZXJCOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZBID0gdmVyQS5zcGxpdCgnLicpO1xuICAgICAgICBsZXQgdkIgPSB2ZXJCLnNwbGl0KCcuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBhID0gcGFyc2VJbnQodkFbaV0pO1xuICAgICAgICAgICAgbGV0IGIgPSBwYXJzZUludCh2QltpXSB8fCAnMCcpO1xuICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2Qi5sZW5ndGggPiB2QS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuS4ukg15ri45oiPICovXG4gICAgc3RhdGljIGlzSDVHYW1lKCkge1xuICAgICAgICBsZXQgaXNINSA9IGZhbHNlO1xuICAgICAgICBpZiAoQ0NfQlVJTEQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5zeXMuTU9CSUxFX0JST1dTRVI6XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5zeXMuREVTS1RPUF9CUk9XU0VSOlxuICAgICAgICAgICAgICAgICAgICBpc0g1ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0g1ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzSDU7XG4gICAgfVxuXG4gICAgLyoq5LiA5pifPeeZveiJsu+8jOS6jOaYnz3nu7/oibLvvIzkuInmmJ896JOd6Imy77yM5Zub5pifPee0q+iJsu+8jOS6lOaYnz3mqZnoibLvvIzlha3mmJ/igJTljYHmmJ8957qiICovXG4gICAgc3RhdGljIHN0YXJDb252ZXJzaW9uUXVhbGl0eShzdGFyOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgZGF0YSA9IHN0YXJcbiAgICAgICAgaWYgKHN0YXIgPiA1KSB7XG4gICAgICAgICAgICBkYXRhID0gNlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIC8qKiBtYXAgdG8gb2JqZWN0ICovXG4gICAgc3RhdGljIHByb3RvTWFwVG9PYmplY3QobWFwOiBNYXA8YW55LCBhbnk+KSB7XG4gICAgICAgIGlmIChtYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hcC5mb3JFYWNoID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIGlmIChtYXAuZm9yRWFjaCkge1xuICAgICAgICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWQpIHtcbiAgICAgICAgICAgICAgICBvYmpbaWRdID0gdmFsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvLyBhcnJheSBUbyBPYmplY3RcbiAgICBzdGF0aWMgcHJvdG9BcnJheVRvT2JqZWN0KGFycmF5OiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIGlmIChhcnJheSAhPSBudWxsICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBvYmpbYXJyYXlbaV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuXG4gICAgLyoqIElETi0+aWRuICovXG4gICAgc3RhdGljIGNvbnZlcnRJZE5Ub2lkbihhcnJJZE46IHsgSWQ/OiBudW1iZXIsIE4/OiBudW1iZXIgfVtdKSB7XG4gICAgICAgIGxldCByZXQ6IGNzdi5JZG5fTk5bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgYXJySWROKSB7XG4gICAgICAgICAgICByZXQucHVzaCh7IGlkOiBvbmUuSWQsIG46IG9uZS5OIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKiBJZE51bS0+aWRuICovXG4gICAgc3RhdGljIGNvbnZlcnRJZE51bVRvaWRuKGFycklkTnVtOiB7IElkPzogbnVtYmVyLCBOdW0/OiBudW1iZXIgfVtdKSB7XG4gICAgICAgIGxldCByZXQ6IGNzdi5JZG5fTk5bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgYXJySWROdW0pIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHsgaWQ6IG9uZS5JZCwgbjogb25lLk51bSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuXG4gICAgLyoqIOaVsOWtl+i9rOWkp+WGmSAqL1xuICAgIHN0YXRpYyBjb252ZXJzaW9uVXBwZXJjYXNlKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGMyZi5sYW5ndWFnZS53b3JkcygyNDAwICsgbnVtKVxuICAgIH1cblxuICAgIC8qKiDlkajlh6DmlbDlrZfovazlpKflhpkgKi9cbiAgICBzdGF0aWMgY29udmVyc2lvblVwcGVyY2FzZVdlZWsobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyID0gXCJcIlxuICAgICAgICBpZiAobnVtIDw9IDYpIHtcbiAgICAgICAgICAgIHN0ciA9IGMyZi5sYW5ndWFnZS53b3JkcygyNDAwICsgbnVtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gYzJmLmxhbmd1YWdlLndvcmRzKDMwMDQwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJcbiAgICB9XG5cblxuICAgIC8qKuiOt+WPluaVsOe7hOmHjOi+ueacieWHoOS4quebuOWQjOeahOaVsOWtlyAqL1xuICAgIHN0YXRpYyBnZXRBcnJIYXZlQ291bnQoYXJyOiBudW1iZXJbXSwgbnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBhcnIuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2ID09IG51bSkge1xuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudFxuICAgIH1cblxuICAgIC8qKuiuvue9rueJqeeQhuW8leaTjueKtuaAgSAqL1xuICAgIHN0YXRpYyBzZXRQaHlzaWNzKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBzdGF0ZTtcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHwgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZW5hYmxlZEFjY3VtdWxhdG9yID0gdHJ1ZVxuXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuXG5cblxuXG4gICAgfVxuXG5cblxuXG5cbn1cbiJdfQ==