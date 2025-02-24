"use strict";
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