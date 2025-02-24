
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/config/C2FConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc9b85vTRVC/6zHwCfw5IME', 'C2FConfig');
// c2f-framework/config/C2FConfig.ts

"use strict";
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
var C2FConst_1 = require("../define/C2FConst");
var GlobalConfig_1 = require("./GlobalConfig");
var WebQueryConfig_1 = require("./WebQueryConfig");
/** 游戏配置静态访问类 */
var C2FConfig = /** @class */ (function () {
    function C2FConfig() {
        this.query = new WebQueryConfig_1.WebQueryConfig();
    }
    C2FConfig.prototype.initCfg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configUrl, cfg, localRate, realRate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configUrl = c2f.res.getFullUrl(C2FConst_1.C2FConst.fwBundleName, 'gameCfg');
                        return [4 /*yield*/, c2f.res.loadOne(configUrl, cc.JsonAsset)];
                    case 1:
                        cfg = _a.sent();
                        this.game = new GlobalConfig_1.GlobalConfig(cfg);
                        c2f.res.release(configUrl, cc.JsonAsset);
                        localRate = c2f.storage.getPlainItem(C2FConst_1.C2FConst.localFrameSet, this.game.frameRate);
                        realRate = Number(localRate) || this.game.frameRate;
                        cc.game.setFrameRate(realRate);
                        //初始化加密key
                        c2f.storage.init(this.game.localDataKey, this.game.localDataKey);
                        return [2 /*return*/];
                }
            });
        });
    };
    C2FConfig.getInstance = function () {
        if (!this._instance) {
            this._instance = new C2FConfig();
        }
        return this._instance;
    };
    /** 静态成员 */
    C2FConfig._instance = null;
    return C2FConfig;
}());
c2f.config = C2FConfig.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbmZpZy9DMkZDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLG1EQUFrRDtBQUVsRCxnQkFBZ0I7QUFDaEI7SUFNSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVZLDJCQUFPLEdBQXBCOzs7Ozs7d0JBQ1EsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLG1CQUFRLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzRCxxQkFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBcEQsR0FBRyxHQUFHLFNBQThDO3dCQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFckMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2xGLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQixVQUFVO3dCQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7O0tBQ3BFO0lBSWEscUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVBELFdBQVc7SUFDSSxtQkFBUyxHQUFjLElBQUksQ0FBQTtJQU85QyxnQkFBQztDQS9CRCxBQStCQyxJQUFBO0FBUUQsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi9kZWZpbmUvQzJGQ29uc3RcIjtcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gXCIuL0dsb2JhbENvbmZpZ1wiO1xuaW1wb3J0IHsgV2ViUXVlcnlDb25maWcgfSBmcm9tIFwiLi9XZWJRdWVyeUNvbmZpZ1wiO1xuXG4vKiog5ri45oiP6YWN572u6Z2Z5oCB6K6/6Zeu57G7ICovXG5jbGFzcyBDMkZDb25maWcge1xuICAgIC8qKiDmuLjmiI/phY3nva7mlbDmja7vvIzniYjmnKzlj7fjgIHmlK/mjIHor63np43nrYnmlbDmja4gKi9cbiAgICBwdWJsaWMgZ2FtZSE6IEdsb2JhbENvbmZpZztcbiAgICAvKiog5rWP6KeI5Zmo5p+l6K+i5Y+C5pWwICovXG4gICAgcHJpdmF0ZSBxdWVyeSE6IFdlYlF1ZXJ5Q29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBuZXcgV2ViUXVlcnlDb25maWcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdENmZygpIHtcbiAgICAgICAgbGV0IGNvbmZpZ1VybCA9IGMyZi5yZXMuZ2V0RnVsbFVybChDMkZDb25zdC5md0J1bmRsZU5hbWUsICdnYW1lQ2ZnJyk7XG4gICAgICAgIGxldCBjZmcgPSBhd2FpdCBjMmYucmVzLmxvYWRPbmUoY29uZmlnVXJsLCBjYy5Kc29uQXNzZXQpO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2xvYmFsQ29uZmlnKGNmZyk7XG4gICAgICAgIGMyZi5yZXMucmVsZWFzZShjb25maWdVcmwsIGNjLkpzb25Bc3NldCk7XG4gICAgICAgIC8v5Yid5aeL5YyW5bin546HXG4gICAgICAgIGxldCBsb2NhbFJhdGUgPSBjMmYuc3RvcmFnZS5nZXRQbGFpbkl0ZW0oQzJGQ29uc3QubG9jYWxGcmFtZVNldCwgdGhpcy5nYW1lLmZyYW1lUmF0ZSk7XG4gICAgICAgIGxldCByZWFsUmF0ZSA9IE51bWJlcihsb2NhbFJhdGUpIHx8IHRoaXMuZ2FtZS5mcmFtZVJhdGU7XG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKHJlYWxSYXRlKTtcbiAgICAgICAgLy/liJ3lp4vljJbliqDlr4ZrZXlcbiAgICAgICAgYzJmLnN0b3JhZ2UuaW5pdCh0aGlzLmdhbWUubG9jYWxEYXRhS2V5LCB0aGlzLmdhbWUubG9jYWxEYXRhS2V5KTtcbiAgICB9XG5cbiAgICAvKiog6Z2Z5oCB5oiQ5ZGYICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDMkZDb25maWcgPSBudWxsXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDMkZDb25maWcge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDMkZDb25maWcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICBjb25maWc6IEMyRkNvbmZpZztcbiAgICB9XG59XG5cbmMyZi5jb25maWcgPSBDMkZDb25maWcuZ2V0SW5zdGFuY2UoKTtcbmV4cG9ydCB7IH07Il19