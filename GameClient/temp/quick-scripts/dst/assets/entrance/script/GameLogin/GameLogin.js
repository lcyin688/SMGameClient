
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
        console.error('CC_onClickbtnLogin test 002');
        // 创建玩家登录信息
        var playerInfo = {
            account: "test2025",
            password: "p@ssw0rd",
            serverId: 1001
        };
        var ws = new WebSocket("ws://127.0.0.1/ws");
        //  let url = "ws://127.0.0.1:8080/ws";
        // c2f.webSocket.connect(url)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ2luL0dhbWVMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBbUY7QUFDbkYsbUVBQWtFO0FBR2xFLDhEQUE2RDtBQUM3RCw4REFBNkQ7QUFDN0QsMERBQXlEO0FBRXpELDREQUEyRDtBQUtyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBYztJQUFyRDtRQUFBLHFFQWdLSztRQS9KRCxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUV6QixXQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxVQUFJLEdBQWtCLFNBQVMsQ0FBQzs7SUEySnZDLENBQUM7SUF2SlMsOEJBQVUsR0FBcEIsVUFBcUIsS0FBVTtRQUMzQix3QkFBd0I7SUFDNUIsQ0FBQztJQUVTLDRCQUFRLEdBQWxCO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDUyw2QkFBUyxHQUFuQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVMsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLGlCQUFNLE1BQU0sRUFBRTtZQUNkLGlCQUFNLE1BQU0sV0FBRSxD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dCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVZDb250cm9sQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlWQ29udHJvbEJhc2UnO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgR2FtZUxvZ2luTW9kZWwgZnJvbSAnLi9HYW1lTG9naW5Nb2RlbCc7XG5pbXBvcnQgR2FtZUxvZ2luVmlldyBmcm9tICcuL0dhbWVMb2dpblZpZXcnO1xuaW1wb3J0IHsgR2FtZUhlbHBlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVIZWxwZXInO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuaW1wb3J0IHsgVUlIZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSUhlbHBlcic7XG5pbXBvcnQgeyBNYWluUGFja1VJIH0gZnJvbSAnLi4vLi4vLi4vbWFpblBhY2svc2NyaXB0L01haW5QYWNrVmlldyc7XG5pbXBvcnQgeyBVSU5ldHdvcmsgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSU5ldHdvcmsnO1xuXG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMb2dpbiBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0dhbWVMb2dpbic7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEdhbWVMb2dpbk1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBHYW1lTG9naW5WaWV3ID0gdW5kZWZpbmVkO1xuXG5cblxuICAgIHByb3RlY3RlZCBvblZpZXdPcGVuKHBhcmFtOiBhbnkpIHtcbiAgICAgICAgLy8gdGhpcy5jb25uZXRUb1NlcnZlcigpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2ssIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uTG9hZCkge1xuICAgICAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGVzdHJveSkge1xuICAgICAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBVSUhlbHBlci5wbGF5TXVzaWMoJ2JhY2tNdXNpYycpO1xuXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuU3RhcnRCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5TdGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5CYXNrZXRCYWxsQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuQmFza2V0QmFsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5Mb2dpbkJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bkxvZ2luKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuMjA0OEJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bjIwNDgoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuQ3JlYXRlTWFwQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuQ3JlYXRlTWFwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuXG5cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG5TdGFydCgpIHtcbiAgICAgICAgR2FtZUhlbHBlci5sb2FkQnVuZGxlKEdhbWVDb25zdHMuQnVuZGxlLm1haW5QYWNrKS50aGVuKFVJSUQgPT4ge1xuICAgICAgICAgICAgYzJmLmd1aS5vcGVuKFVJSUQuRGVzU3Rhck1haW4pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuMjA0OCgpIHtcbiAgICAgICAgR2FtZUhlbHBlci5sb2FkQnVuZGxlKEdhbWVDb25zdHMuQnVuZGxlLm1haW5QYWNrKS50aGVuKFVJSUQgPT4ge1xuICAgICAgICAgICAgYzJmLmd1aS5vcGVuKFVJSUQuUGh5c2ljczIwNDhNYWluKVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bkNyZWF0ZU1hcCgpIHtcbiAgICAgICAgR2FtZUhlbHBlci5sb2FkQnVuZGxlKEdhbWVDb25zdHMuQnVuZGxlLm1haW5QYWNrKS50aGVuKFVJSUQgPT4ge1xuICAgICAgICAgICAgYzJmLmd1aS5vcGVuKFVJSUQuTWFwQ3JlYXRlTWFpbilcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG5CYXNrZXRCYWxsKCkge1xuICAgICAgICBHYW1lSGVscGVyLmxvYWRCdW5kbGUoR2FtZUNvbnN0cy5CdW5kbGUubWFpblBhY2spLnRoZW4oVUlJRCA9PiB7XG4gICAgICAgICAgICBjMmYuZ3VpLm9wZW4oVUlJRC5CYXNrZXRCYWxsTWFpbilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIOi/nuaOpeacjeWKoeWZqCAqL1xuICAgIHByaXZhdGUgY29ubmV0VG9TZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghYzJmLm5ldC50b1VJKSB7XG4gICAgICAgICAgICBjMmYubmV0LnRvVUkgPSBuZXcgVUlOZXR3b3JrKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybCA9IFwid3M6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgICAgICBjMmYuZ3VpLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGMyZi5uZXQuaW5pdFNlcnZpY2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGMyZi5uZXQuY29ubmVjdCh1cmwsIChyZWFzb246IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGMyZi5ndWkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcIkNvbm5lY3RlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Ub0dhbWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjMmYuZ3VpLm5vdGlmeVR4dCgnMTAwNicpO1xuICAgICAgICAgICAgICAgICAgICBjMmYubmV0LnB1cmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGxvZ2luVG9HYW1lKCkge1xuICAgICAgICBjMmYuZ3VpLm5vdGlmeVR4dCgnNTEzJyk7XG4gICAgICAgIC8v5Y+R5Liq5raI5oGv57uZ5pyN5Yqh5ZmoXG4gICAgICAgIHN6Zy5wbGF5ZXIucmFuay5yZXFMb2dpbihcImxjeVwiLCBcImdvZ29nb1wiKVxuXG4gICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bkxvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDQ19vbkNsaWNrYnRuTG9naW4gdGVzdCAwMDInKTtcbiAgICBcbiAgICAgICAgLy8g5Yib5bu6546p5a6255m75b2V5L+h5oGvXG4gICAgICAgIGNvbnN0IHBsYXllckluZm86IG1zZy5wbGF5ZXIuTG9naW5SZXEgPSB7XG4gICAgICAgICAgICBhY2NvdW50OiBcInRlc3QyMDI1XCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJwQHNzdzByZFwiLFxuICAgICAgICAgICAgc2VydmVySWQ6IDEwMDFcbiAgICAgICAgfTtcblxuXG4gICAgICAgICBsZXQgd3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMjcuMC4wLjEvd3NcIik7XG4gICAgICAgIC8vICBsZXQgdXJsID0gXCJ3czovLzEyNy4wLjAuMTo4MDgwL3dzXCI7XG4gICAgICAgIC8vIGMyZi53ZWJTb2NrZXQuY29ubmVjdCh1cmwpXG4gICAgICAgIC8vIGMyZi53ZWJTb2NrZXQuc2VuZChwbGF5ZXJJbmZvKVxuICAgIH1cblxuXG5cbiAgICAgIFxuXG5cblxuICAgICAgICAgICAgXG4gICAgfSJdfQ==