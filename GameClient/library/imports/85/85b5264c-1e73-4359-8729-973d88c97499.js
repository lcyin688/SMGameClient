"use strict";
cc._RF.push(module, '85b52ZMHnNDWYcplz2IyXSZ', 'BoxGameMain');
// boxGame/script/BoxGameMain/BoxGameMain.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxGameMain = /** @class */ (function (_super) {
    __extends(BoxGameMain, _super);
    function BoxGameMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameMain';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BoxGameMain.prototype.onViewOpen = function (param) {
        this.model.initData();
        this.loginToGame();
    };
    BoxGameMain.prototype.loginToGame = function () {
        var _this = this;
        c2f.gui.showLoading();
        var url = this.model.baseUrl + '/pddgame/login';
        var data = JSON.stringify({
            ksCode: this.model.accounts[0],
            test: !0
        });
        this.model.sendMsg(url, function (dataOut) {
            _this.model.playerData = dataOut;
            _this.reflashView();
            _this.model.getWsUrl(dataOut.token, function (reason) {
                c2f.gui.hideLoading();
                if (reason === "Connected") {
                    var dataTemp = '{"protocol":"json", "version":1}';
                    _this.model.client.tcpSend(dataTemp);
                }
                else {
                    c2f.gui.notifyTxt('1006');
                    c2f.net.purge();
                }
            });
        }, data, 'POST');
    };
    BoxGameMain.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    BoxGameMain.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    BoxGameMain.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnCloseButton.name:
                        this.CC_onClickbtnClose();
                        break;
                    case this.view.btnStartButton.name:
                        this.CC_onClickbtnStart();
                        break;
                    case this.view.boxBtnButton.name:
                        this.CC_onClickboxBtn();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BoxGameMain.prototype.CC_onClickbtnClose = function () {
        this.closeView();
    };
    BoxGameMain.prototype.CC_onClickbtnStart = function () {
        this.startGame();
    };
    BoxGameMain.prototype.reflashView = function () {
        var endTs = this.model.playerData.endTime;
        var tsNow = c2f.utils.date.getLocalTick();
        var sec = endTs - tsNow;
        this.setTimeCountDownScore(this.view.txt_timeCountdownLabel, sec);
        this.setNowMoney();
        this.setNowDimond();
        this.setNowCoin();
        this.setNowCash();
        this.setLevel();
        this.setStartCount();
        this.setAdCount();
        this.setGameRet();
    };
    BoxGameMain.prototype.setGameRet = function () {
        if (this.model.playerData.gameRet.isOver) {
            this.view.less.active = true;
            this.setLessCount();
        }
    };
    BoxGameMain.prototype.setNowMoney = function () {
        this.view.txt_1Label.string = this.model.playerData.nowMoney.toString();
    };
    BoxGameMain.prototype.setNowDimond = function () {
        this.view.txt_count1Label.string = this.model.playerData.nowDiamond.toString();
    };
    BoxGameMain.prototype.setNowCoin = function () {
        this.view.txt_count2Label.string = this.model.playerData.nowCoin.toString();
    };
    BoxGameMain.prototype.setNowCash = function () {
        this.view.txt_count3Label.string = this.model.playerData.nowCash.toString();
    };
    BoxGameMain.prototype.setLevel = function () {
        this.view.txt_levelLabel.string = this.model.playerData.gameLevel.toString();
    };
    BoxGameMain.prototype.setAdCount = function () {
        this.view.txt_adLabel.string = this.model.playerData.boxAdLuckTimes.toString();
    };
    BoxGameMain.prototype.setStartCount = function () {
        this.view.txt_startCountLabel.string = this.model.playerData.timeBoxs.toString();
    };
    BoxGameMain.prototype.setLessCount = function () {
        this.view.txt_lessLabel.string = this.model.playerData.gameRet.coinNum.toString();
    };
    /**倒计时显示 */
    BoxGameMain.prototype.setTimeCountDownScore = function (countdownLabel, interval) {
        var dayStr = "%{d}" + c2f.language.words(3001) + "%{hh}:%{mm}:%{ss}";
        countdownLabel.startCountdown(interval, {
            S: "%{hh}:%{mm}:%{ss}",
            M: "%{hh}:%{mm}:%{ss}",
            H: "%{hh}:%{mm}:%{ss}",
            D: dayStr
        }, c2f.language.words(3000), null, function () {
        });
    };
    /**点击开宝箱 看广告 */
    BoxGameMain.prototype.CC_onClickboxBtn = function () {
        this.clickAd(1);
    };
    BoxGameMain.prototype.clickAd = function (typ) {
        var url = this.model.baseUrl + '/pddgame/viewad';
        var data = JSON.stringify({
            operType: typ,
        });
        this.model.sendMsg(url, function (dataOut) {
        }, data, 'POST');
    };
    BoxGameMain.prototype.startGame = function () {
        var url = this.model.baseUrl + '/pddgame/timebox';
        this.model.sendMsg(url, function (dataOut) {
        }, null, 'POST');
    };
    BoxGameMain.prototype.luckGame = function (typ) {
        var url = this.model.baseUrl + '/pddgame/luck';
        var data = JSON.stringify({
            luckType: typ,
        });
        this.model.sendMsg(url, function (dataOut) {
        }, data, 'POST');
    };
    BoxGameMain = __decorate([
        ccclass
    ], BoxGameMain);
    return BoxGameMain;
}(UIVControlBase_1.UIVControlBase));
exports.default = BoxGameMain;

cc._RF.pop();