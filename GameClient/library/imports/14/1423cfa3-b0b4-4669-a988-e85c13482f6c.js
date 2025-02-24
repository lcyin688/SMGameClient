"use strict";
cc._RF.push(module, '1423c+jsLRGaamI6FwTSC9s', 'GameLogo');
// entrance/script/GameLogo/GameLogo.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var UIVControlBase_1 = require("./../../../c2f-framework/gui/layer/UIVControlBase");
var C2FEnum_1 = require("./../../../c2f-framework/define/C2FEnum");
var EntranceView_1 = require("../EntranceView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogo = /** @class */ (function (_super) {
    __extends(GameLogo, _super);
    function GameLogo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogo';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    GameLogo.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    GameLogo.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    GameLogo.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    GameLogo.prototype.onViewOpen = function (param) {
    };
    GameLogo.prototype.onLoad = function () {
        if (_super.prototype.onLoad) {
            _super.prototype.onLoad.call(this);
        }
        cc.debug.setDisplayStats(false);
    };
    GameLogo.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    GameLogo.prototype.start = function () {
        this.startGame();
    };
    GameLogo.prototype.startGame = function () {
        this.initLanguage();
    };
    GameLogo.prototype.initLanguage = function () {
        c2f.language.initLanguage(this.playLogoAnima.bind(this));
        szg.player.initModules();
    };
    GameLogo.prototype.playLogoAnima = function () {
        var _this = this;
        this.view.barProgressBar.progress = 0.1;
        cc.tween(this.view.barProgressBar).to(0.3, { progress: 1 }).call(function () {
            _this.openLoginView();
        }).start();
    };
    GameLogo.prototype.openLoginView = function () {
        var uic = {
            onUIAdded: function (node, params) {
                c2f.gui.remove(EntranceView_1.EntranceUI.GameLogo);
            },
        };
        c2f.gui.open(EntranceView_1.EntranceUI.GameLogin, null, uic);
        // GameHelper.loadBundle(GameConsts.Bundle.mainPack).then(UIID => {
        //     c2f.gui.open(UIID.DesStarMain, null, uic)
        // });
    };
    GameLogo = __decorate([
        ccclass
    ], GameLogo);
    return GameLogo;
}(UIVControlBase_1.UIVControlBase));
exports.default = GameLogo;

cc._RF.pop();