
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
        // let physicsManager = cc.director.getPhysicsManager();
        // physicsManager.enabled = state;
        // physicsManager.debugDrawFlags = 0;
        // cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
        // physicsManager.enabledAccumulator = true
        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = state;
        cc.director.getCollisionManager().enabled = state;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9HYW1lSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtJQUFBO0lBbUtBLENBQUM7SUEvSkcsZ0NBQWdDO0lBQ25CLHFCQUFVLEdBQXZCLFVBQXdCLE1BQWtDOzs7Ozs0QkFDdEQscUJBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUM3QixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3RELE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ2hCLE1BQU0sQ0FBSSxRQUFRLE9BQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDL0IsTUFBTSxDQUFJLFFBQVEsU0FBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUNqQyxNQUFNLEdBQUcsT0FBTyxDQUFJLFFBQVEsU0FBTSxDQUFDLENBQUM7d0JBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBSSxRQUFRLFNBQU0sQ0FBQyxDQUFDLENBQUM7d0JBQy9DLHNCQUFPLE1BQU0sQ0FBSSxRQUFRLE9BQUksQ0FBQyxFQUFDOzs7O0tBQ2xDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUFjLEdBQXJCLFVBQXNCLElBQVksRUFBRSxJQUFZO1FBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMs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QUNQLHFCQUFVLEdBQWpCLFVBQWtCLEtBQWM7UUFDNUIsd0RBQXdEO1FBQ3hELGtDQUFrQztRQUNsQyxxQ0FBcUM7UUFDckMsaUZBQWlGO1FBQ2pGLDJDQUEyQztRQUUzQyxtREFBbUQ7UUFDbkQsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyx5Q0FBeUM7UUFHekMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDaEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFHdEQsQ0FBQztJQU1MLGlCQUFDO0FBQUQsQ0FuS0EsQUFtS0MsSUFBQTtBQW5LWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmuLjmiI/lhajln5/nuqflt6XlhbfnsbvCt+S4jeWPr+W8leWFpeWtkOWMheaWh+S7tiAqL1xuXG5pbXBvcnQgeyBHYW1lQ2FsYyB9IGZyb20gXCIuL0dhbWVDYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4vR2FtZUNvbnN0c1wiO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gXCIuL1VJUGFyYW1cIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVIZWxwZXIge1xuXG5cblxuICAgIC8qKiDliqDovb3lrZDljIXvvIzlubbkuJTlsIblrZDljIXkuK3nmoRVSemFjee9ruWKoOWFpeeVjOmdoueuoeeQhumFjee9ruS4rSAqL1xuICAgIHN0YXRpYyBhc3luYyBsb2FkQnVuZGxlKGJ1bmRsZTogR2FtZUNvbnN0cy5CdW5kbGUgfCBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgYzJmLnJlcy5sb2FkQnVuZGxlKGJ1bmRsZSk7XG4gICAgICAgIGxldCBmaWxlTmFtZSA9IGMyZi51dGlscy5zdHIudXBwZXJjYXNlRmlyc3RMZXR0ZXIoYnVuZGxlKTtcbiAgICAgICAgbGV0IHZpZXdEdCA9IHt9O1xuICAgICAgICB2aWV3RHRbYCR7ZmlsZU5hbWV9VUlgXSA9IG51bGw7XG4gICAgICAgIHZpZXdEdFtgJHtmaWxlTmFtZX1WaWV3YF0gPSBudWxsO1xuICAgICAgICB2aWV3RHQgPSByZXF1aXJlKGAke2ZpbGVOYW1lfVZpZXdgKTtcbiAgICAgICAgYzJmLmd1aS5hZGRWaWV3TGlzdCh2aWV3RHRbYCR7ZmlsZU5hbWV9Vmlld2BdKTtcbiAgICAgICAgcmV0dXJuIHZpZXdEdFtgJHtmaWxlTmFtZX1VSWBdO1xuICAgIH1cblxuICAgIC8qKiDniYjmnKzmr5TovoM6dmVyQSAtIHZlckJcbiAgICAgKiA9IDA6IOeJiOacrOWPt+ebuOWQjFxuICAgICAqID4gMDogdmVyQeeJiOacrOabtOmrmFxuICAgICAqIDwgMDogdmVyQueJiOacrOabtOmrmFxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlVmVyc2lvbih2ZXJBOiBzdHJpbmcsIHZlckI6IHN0cmluZykge1xuICAgICAgICBsZXQgdkEgPSB2ZXJBLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCB2QiA9IHZlckIuc3BsaXQoJy4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2QS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGEgPSBwYXJzZUludCh2QVtpXSk7XG4gICAgICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHZCW2ldIHx8ICcwJyk7XG4gICAgICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5Li6SDXmuLjmiI8gKi9cbiAgICBzdGF0aWMgaXNINUdhbWUoKSB7XG4gICAgICAgIGxldCBpc0g1ID0gZmFsc2U7XG4gICAgICAgIGlmIChDQ19CVUlMRCkge1xuICAgICAgICAgICAgc3dpdGNoIChjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNjLnN5cy5NT0JJTEVfQlJPV1NFUjpcbiAgICAgICAgICAgICAgICBjYXNlIGNjLnN5cy5ERVNLVE9QX0JST1dTRVI6XG4gICAgICAgICAgICAgICAgICAgIGlzSDUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzSDUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNINTtcbiAgICB9XG5cbiAgICAvKirkuIDmmJ8955m96Imy77yM5LqM5pifPee7v+iJsu+8jOS4ieaYnz3ok53oibLvvIzlm5vmmJ8957Sr6Imy77yM5LqU5pifPeapmeiJsu+8jOWFreaYn+KAlOWNgeaYnz3nuqIgKi9cbiAgICBzdGF0aWMgc3RhckNvbnZlcnNpb25RdWFsaXR5KHN0YXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBkYXRhID0gc3RhclxuICAgICAgICBpZiAoc3RhciA+IDUpIHtcbiAgICAgICAgICAgIGRhdGEgPSA2XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgLyoqIG1hcCB0byBvYmplY3QgKi9cbiAgICBzdGF0aWMgcHJvdG9NYXBUb09iamVjdChtYXA6IE1hcDxhbnksIGFueT4pIHtcbiAgICAgICAgaWYgKG1hcCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuICAgICAgICBpZiAobWFwLmZvckVhY2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgICB9XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgaWYgKG1hcC5mb3JFYWNoKSB7XG4gICAgICAgICAgICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZCkge1xuICAgICAgICAgICAgICAgIG9ialtpZF0gPSB2YWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8vIGFycmF5IFRvIE9iamVjdFxuICAgIHN0YXRpYyBwcm90b0FycmF5VG9PYmplY3QoYXJyYXk6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgaWYgKGFycmF5ICE9IG51bGwgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIG9ialthcnJheVtpXV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG5cbiAgICAvKiogSUROLT5pZG4gKi9cbiAgICBzdGF0aWMgY29udmVydElkTlRvaWRuKGFycklkTjogeyBJZD86IG51bWJlciwgTj86IG51bWJlciB9W10pIHtcbiAgICAgICAgbGV0IHJldDogY3N2Lklkbl9OTltdID0gW107XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiBhcnJJZE4pIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHsgaWQ6IG9uZS5JZCwgbjogb25lLk4gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqIElkTnVtLT5pZG4gKi9cbiAgICBzdGF0aWMgY29udmVydElkTnVtVG9pZG4oYXJySWROdW06IHsgSWQ/OiBudW1iZXIsIE51bT86IG51bWJlciB9W10pIHtcbiAgICAgICAgbGV0IHJldDogY3N2Lklkbl9OTltdID0gW107XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiBhcnJJZE51bSkge1xuICAgICAgICAgICAgcmV0LnB1c2goeyBpZDogb25lLklkLCBuOiBvbmUuTnVtIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKiog5pWw5a2X6L2s5aSn5YaZICovXG4gICAgc3RhdGljIGNvbnZlcnNpb25VcHBlcmNhc2UobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYzJmLmxhbmd1YWdlLndvcmRzKDI0MDAgKyBudW0pXG4gICAgfVxuXG4gICAgLyoqIOWRqOWHoOaVsOWtl+i9rOWkp+WGmSAqL1xuICAgIHN0YXRpYyBjb252ZXJzaW9uVXBwZXJjYXNlV2VlayhudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiXG4gICAgICAgIGlmIChudW0gPD0gNikge1xuICAgICAgICAgICAgc3RyID0gYzJmLmxhbmd1YWdlLndvcmRzKDI0MDAgKyBudW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBjMmYubGFuZ3VhZ2Uud29yZHMoMzAwNDApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clxuICAgIH1cblxuXG4gICAgLyoq6I635Y+W5pWw57uE6YeM6L655pyJ5Yeg5Liq55u45ZCM55qE5pWw5a2XICovXG4gICAgc3RhdGljIGdldEFyckhhdmVDb3VudChhcnI6IG51bWJlcltdLCBudW06IG51bWJlcikge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGFyci5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVtKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvdW50XG4gICAgfVxuXG4gICAgLyoq6K6+572u54mp55CG5byV5pOO54q25oCBICovXG4gICAgc3RhdGljIHNldFBoeXNpY3Moc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgLy8gbGV0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgLy8gcGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHN0YXRlO1xuICAgICAgICAvLyBwaHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IDA7XG4gICAgICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfCBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xuICAgICAgICAvLyBwaHlzaWNzTWFuYWdlci5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlXG5cbiAgICAgICAgLy8gdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cblxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBzdGF0ZTsgIFxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHN0YXRlO1xuXG5cbiAgICB9XG5cblxuXG5cblxufVxuIl19