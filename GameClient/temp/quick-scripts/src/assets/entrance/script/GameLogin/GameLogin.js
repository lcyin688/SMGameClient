"use strict";
cc._RF.push(module, '5cac2q2bgtDRaFqRndTVwUo', 'GameLogin');
// entrance/script/GameLogin/GameLogin.ts

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
var GameHelper_1 = require("../../../Script/game/GameHelper");
var GameConsts_1 = require("../../../Script/game/GameConsts");
var UIHelper_1 = require("../../../Script/game/UIHelper");
var UINetwork_1 = require("../../../Script/game/UINetwork");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogin = /** @class */ (function (_super) {
    __extends(GameLogin, _super);
    function GameLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogin';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    GameLogin.prototype.onViewOpen = function (param) {
        // this.connetToServer()
    };
    GameLogin.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    GameLogin.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    GameLogin.prototype.onLoad = function () {
        if (_super.prototype.onLoad) {
            _super.prototype.onLoad.call(this);
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
    };
    GameLogin.prototype.onDestroy = function () {
        if (_super.prototype.onDestroy) {
            _super.prototype.onDestroy.call(this);
        }
    };
    GameLogin.prototype.start = function () {
        UIHelper_1.UIHelper.playMusic('backMusic');
    };
    GameLogin.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnStartButton.name:
                        this.CC_onClickbtnStart();
                        break;
                    case this.view.btnBasketBallButton.name:
                        this.CC_onClickbtnBasketBall();
                        break;
                    case this.view.btnLoginButton.name:
                        this.CC_onClickbtnLogin();
                        break;
                    case this.view.btn2048Button.name:
                        this.CC_onClickbtn2048();
                        break;
                    case this.view.btnCreateMapButton.name:
                        this.CC_onClickbtnCreateMap();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    GameLogin.prototype.CC_onClickbtnStart = function () {
        GameHelper_1.GameHelper.loadBundle(GameConsts_1.GameConsts.Bundle.mainPack).then(function (UIID) {
            c2f.gui.open(UIID.DesStarMain);
        });
    };
    GameLogin.prototype.CC_onClickbtn2048 = function () {
        GameHelper_1.GameHelper.loadBundle(GameConsts_1.GameConsts.Bundle.mainPack).then(function (UIID) {
            c2f.gui.open(UIID.Physics2048Main);
        });
    };
    GameLogin.prototype.CC_onClickbtnCreateMap = function () {
        GameHelper_1.GameHelper.loadBundle(GameConsts_1.GameConsts.Bundle.mainPack).then(function (UIID) {
            c2f.gui.open(UIID.MapCreateMain);
        });
    };
    GameLogin.prototype.CC_onClickbtnBasketBall = function () {
        GameHelper_1.GameHelper.loadBundle(GameConsts_1.GameConsts.Bundle.mainPack).then(function (UIID) {
            c2f.gui.open(UIID.BasketBallMain);
        });
    };
    /** 连接服务器 */
    GameLogin.prototype.connetToServer = function () {
        var _this = this;
        if (!c2f.net.toUI) {
            c2f.net.toUI = new UINetwork_1.UINetwork();
        }
        var url = "ws://localhost:8080";
        c2f.gui.showLoading();
        c2f.net.initService().then(function () {
            c2f.net.connect(url, function (reason) {
                c2f.gui.hideLoading();
                if (reason === "Connected") {
                    _this.loginToGame();
                }
                else {
                    c2f.gui.notifyTxt('1006');
                    c2f.net.purge();
                }
            });
        });
    };
    GameLogin.prototype.loginToGame = function () {
        c2f.gui.notifyTxt('513');
        //发个消息给服务器
        szg.player.rank.reqLogin("lcy", "gogogo");
    };
    GameLogin.prototype.CC_onClickbtnLogin = function () {
        console.error('CC_onClickbtnLogin test 004');
        var url = "ws://127.0.0.1:8999";
        c2f.webSocket.connect(url);
        // 创建玩家登录信息
        // const playerInfo: msg.player.LoginReq = {
        //     account: "test2025",
        //     password: "p@ssw0rd",
        //     serverId: 1001
        // };
        // c2f.webSocket.send(playerInfo)
    };
    GameLogin = __decorate([
        ccclass
    ], GameLogin);
    return GameLogin;
}(UIVControlBase_1.UIVControlBase));
exports.default = GameLogin;

cc._RF.pop();