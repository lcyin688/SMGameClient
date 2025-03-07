
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLogin/GameLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ2luL0dhbWVMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBbUY7QUFDbkYsbUVBQWtFO0FBR2xFLDhEQUE2RDtBQUM3RCw4REFBNkQ7QUFDN0QsMERBQXlEO0FBRXpELDREQUEyRDtBQUtyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBYztJQUFyRDtRQUFBLHFFQThKSztRQTdKRCxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUV6QixXQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxVQUFJLEdBQWtCLFNBQVMsQ0FBQzs7SUF5SnZDLENBQUM7SUFySlMsOEJBQVUsR0FBcEIsVUFBcUIsS0FBVTtRQUMzQix3QkFBd0I7SUFDNUIsQ0FBQztJQUVTLDRCQUFRLEdBQWxCO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDUyw2QkFBUyxHQUFuQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVMsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLGlCQUFNLE1BQU0sRUFBRTtZQUNkLGlCQUFNLE1BQU0sV0FBRSxD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cG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBHYW1lTG9naW5Nb2RlbCBmcm9tICcuL0dhbWVMb2dpbk1vZGVsJztcbmltcG9ydCBHYW1lTG9naW5WaWV3IGZyb20gJy4vR2FtZUxvZ2luVmlldyc7XG5pbXBvcnQgeyBHYW1lSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUhlbHBlcic7XG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0cyc7XG5pbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJSGVscGVyJztcbmltcG9ydCB7IE1haW5QYWNrVUkgfSBmcm9tICcuLi8uLi8uLi9tYWluUGFjay9zY3JpcHQvTWFpblBhY2tWaWV3JztcbmltcG9ydCB7IFVJTmV0d29yayB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJTmV0d29yayc7XG5cblxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2luIGV4dGVuZHMgVUlWQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnR2FtZUxvZ2luJztcblxuICAgIHB1YmxpYyBtb2RlbDogR2FtZUxvZ2luTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IEdhbWVMb2dpblZpZXcgPSB1bmRlZmluZWQ7XG5cblxuXG4gICAgcHJvdGVjdGVkIG9uVmlld09wZW4ocGFyYW06IGFueSkge1xuICAgICAgICAvLyB0aGlzLmNvbm5ldFRvU2VydmVyKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmYoQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25Mb2FkKSB7XG4gICAgICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25EZXN0cm95KSB7XG4gICAgICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlNdXNpYygnYmFja011c2ljJyk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgb25CdXR0b25DbGljayhldmVudFR5cGU6IHN0cmluZywgY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnQubmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5TdGFydEJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0blN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0bkJhc2tldEJhbGxCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5CYXNrZXRCYWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0bkxvZ2luQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuTG9naW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG4yMDQ4QnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuMjA0OCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5DcmVhdGVNYXBCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5DcmVhdGVNYXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuXG5cblxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0blN0YXJ0KCkge1xuICAgICAgICBHYW1lSGVscGVyLmxvYWRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spLnRoZW4oVUlJRCA9PiB7XG4gICAgICAgICAgICBjMmYuZ3VpLm9wZW4oVUlJRC5EZXNTdGFyTWFpbilcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG4yMDQ4KCkge1xuICAgICAgICBHYW1lSGVscGVyLmxvYWRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spLnRoZW4oVUlJRCA9PiB7XG4gICAgICAgICAgICBjMmYuZ3VpLm9wZW4oVUlJRC5QaHlzaWNzMjA0OE1haW4pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuQ3JlYXRlTWFwKCkge1xuICAgICAgICBHYW1lSGVscGVyLmxvYWRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spLnRoZW4oVUlJRCA9PiB7XG4gICAgICAgICAgICBjMmYuZ3VpLm9wZW4oVUlJRC5NYXBDcmVhdGVNYWluKVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bkJhc2tldEJhbGwoKSB7XG4gICAgICAgIEdhbWVIZWxwZXIubG9hZEJ1bmRsZShHYW1lQ29uc3RzLkJ1bmRsZS5tYWluUGFjaykudGhlbihVSUlEID0+IHtcbiAgICAgICAgICAgIGMyZi5ndWkub3BlbihVSUlELkJhc2tldEJhbGxNYWluKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiog6L+e5o6l5pyN5Yqh5ZmoICovXG4gICAgcHJpdmF0ZSBjb25uZXRUb1NlcnZlcigpIHtcbiAgICAgICAgaWYgKCFjMmYubmV0LnRvVUkpIHtcbiAgICAgICAgICAgIGMyZi5uZXQudG9VSSA9IG5ldyBVSU5ldHdvcmsoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gXCJ3czovL2xvY2FsaG9zdDo4MDgwXCI7XG4gICAgICAgIGMyZi5ndWkuc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgYzJmLm5ldC5pbml0U2VydmljZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgYzJmLm5ldC5jb25uZWN0KHVybCwgKHJlYXNvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgYzJmLmd1aS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFwiQ29ubmVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblRvR2FtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5ndWkubm90aWZ5VHh0KCcxMDA2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5uZXQucHVyZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgbG9naW5Ub0dhbWUoKSB7XG4gICAgICAgIGMyZi5ndWkubm90aWZ5VHh0KCc1MTMnKTtcbiAgICAgICAgLy/lj5HkuKrmtojmga/nu5nmnI3liqHlmahcbiAgICAgICAgc3pnLnBsYXllci5yYW5rLnJlcUxvZ2luKFwibGN5XCIsIFwiZ29nb2dvXCIpXG5cbiAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuTG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NDX29uQ2xpY2tidG5Mb2dpbiB0ZXN0IDAwNCcpO1xuICAgICAgICBsZXQgdXJsID0gXCJ3czovLzEyNy4wLjAuMTo4OTk5XCI7XG4gICAgICAgIGMyZi53ZWJTb2NrZXQuY29ubmVjdCh1cmwpXG4gICAgICAgIC8vIOWIm+W7uueOqeWutueZu+W9leS/oeaBr1xuICAgICAgICAvLyBjb25zdCBwbGF5ZXJJbmZvOiBtc2cucGxheWVyLkxvZ2luUmVxID0ge1xuICAgICAgICAvLyAgICAgYWNjb3VudDogXCJ0ZXN0MjAyNVwiLFxuICAgICAgICAvLyAgICAgcGFzc3dvcmQ6IFwicEBzc3cwcmRcIixcbiAgICAgICAgLy8gICAgIHNlcnZlcklkOiAxMDAxXG4gICAgICAgIC8vIH07XG5cblxuICAgICAgICAvLyBjMmYud2ViU29ja2V0LnNlbmQocGxheWVySW5mbylcbiAgICB9XG5cblxuXG4gICAgICBcblxuXG5cbiAgICAgICAgICAgIFxuICAgIH0iXX0=