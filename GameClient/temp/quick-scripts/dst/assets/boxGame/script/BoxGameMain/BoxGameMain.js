
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxGameMain/BoxGameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hHYW1lTWFpbi9Cb3hHYW1lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBbUY7QUFDbkYsbUVBQWtFO0FBSzVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFjO0lBQXZEO1FBQUEscUVBNExDO1FBM0xHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsZUFBZSxDQUFDO1FBRTdCLFdBQUssR0FBcUIsU0FBUyxDQUFDO1FBQ3BDLFVBQUksR0FBb0IsU0FBUyxDQUFDOztJQXVMN0MsQ0FBQztJQXJMYSxnQ0FBVSxHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBR3RCLENBQUM7SUFFTyxpQ0FBVyxHQUFuQjtRQUFBLGlCQXNCQztRQXJCRyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFBO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBNEI7WUFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBO1lBQy9CLEtB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Q0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBWTtRQUlyQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFHTywrQkFBUyxHQUFqQjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQVk7UUFFckMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRU8sOEJBQVEsR0FBaEIsVUFBaUIsR0FBVztRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUE7UUFDOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxPQUFZO1FBRXJDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQXpMZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRML0I7SUFBRCxrQkFBQztDQTVMRCxBQTRMQyxDQTVMd0MsK0JBQWMsR0E0THREO2tCQTVMb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBCb3hHYW1lTWFpbk1vZGVsIGZyb20gJy4vQm94R2FtZU1haW5Nb2RlbCc7XG5pbXBvcnQgQm94R2FtZU1haW5WaWV3IGZyb20gJy4vQm94R2FtZU1haW5WaWV3JztcbmltcG9ydCBDb3VudGRvd25MYWJlbCBmcm9tICcuLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vQ291bnRkb3duTGFiZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveEdhbWVNYWluIGV4dGVuZHMgVUlWQ29udHJvbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Cb3hHYW1lTWFpbic7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEJveEdhbWVNYWluTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IEJveEdhbWVNYWluVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvblZpZXdPcGVuKHBhcmFtOiBhbnkpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0RGF0YSgpXG4gICAgICAgIHRoaXMubG9naW5Ub0dhbWUoKVxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luVG9HYW1lKCkge1xuICAgICAgICBjMmYuZ3VpLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1vZGVsLmJhc2VVcmwgKyAnL3BkZGdhbWUvbG9naW4nXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAga3NDb2RlOiB0aGlzLm1vZGVsLmFjY291bnRzWzBdLFxuICAgICAgICAgICAgdGVzdDogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWwuc2VuZE1zZyh1cmwsIChkYXRhT3V0OiBtc2dCb3hHYW1lLkdXX0xvZ2luKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnBsYXllckRhdGEgPSBkYXRhT3V0XG4gICAgICAgICAgICB0aGlzLnJlZmxhc2hWaWV3KClcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0V3NVcmwoZGF0YU91dC50b2tlbiwgKHJlYXNvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgYzJmLmd1aS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFwiQ29ubmVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFUZW1wID0gJ3tcInByb3RvY29sXCI6XCJqc29uXCIsIFwidmVyc2lvblwiOjF9J1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWVudC50Y3BTZW5kKGRhdGFUZW1wKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5ndWkubm90aWZ5VHh0KCcxMDA2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5uZXQucHVyZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0sIGRhdGEsICdQT1NUJylcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljaywgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25CdXR0b25DbGljayhldmVudFR5cGU6IHN0cmluZywgY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnQubmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMudmlldy5idG5DbG9zZUJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0blN0YXJ0QnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYnRuU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYm94QnRuQnV0dG9uLm5hbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5DQ19vbkNsaWNrYm94QnRuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bkNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlVmlldygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZmxhc2hWaWV3KCkge1xuICAgICAgICBsZXQgZW5kVHMgPSB0aGlzLm1vZGVsLnBsYXllckRhdGEuZW5kVGltZVxuICAgICAgICBsZXQgdHNOb3cgPSBjMmYudXRpbHMuZGF0ZS5nZXRMb2NhbFRpY2soKTtcbiAgICAgICAgbGV0IHNlYyA9IGVuZFRzIC0gdHNOb3c7XG4gICAgICAgIHRoaXMuc2V0VGltZUNvdW50RG93blNjb3JlKHRoaXMudmlldy50eHRfdGltZUNvdW50ZG93bkxhYmVsLCBzZWMpXG4gICAgICAgIHRoaXMuc2V0Tm93TW9uZXkoKVxuICAgICAgICB0aGlzLnNldE5vd0RpbW9uZCgpXG4gICAgICAgIHRoaXMuc2V0Tm93Q29pbigpXG4gICAgICAgIHRoaXMuc2V0Tm93Q2FzaCgpXG4gICAgICAgIHRoaXMuc2V0TGV2ZWwoKVxuICAgICAgICB0aGlzLnNldFN0YXJ0Q291bnQoKVxuICAgICAgICB0aGlzLnNldEFkQ291bnQoKVxuICAgICAgICB0aGlzLnNldEdhbWVSZXQoKVxuXG4gICAgfVxuICAgIHByaXZhdGUgc2V0R2FtZVJldCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwucGxheWVyRGF0YS5nYW1lUmV0LmlzT3Zlcikge1xuICAgICAgICAgICAgdGhpcy52aWV3Lmxlc3MuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5zZXRMZXNzQ291bnQoKVxuXG5cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzZXROb3dNb25leSgpIHtcbiAgICAgICAgdGhpcy52aWV3LnR4dF8xTGFiZWwuc3RyaW5nID0gdGhpcy5tb2RlbC5wbGF5ZXJEYXRhLm5vd01vbmV5LnRvU3RyaW5nKClcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXROb3dEaW1vbmQoKSB7XG4gICAgICAgIHRoaXMudmlldy50eHRfY291bnQxTGFiZWwuc3RyaW5nID0gdGhpcy5tb2RlbC5wbGF5ZXJEYXRhLm5vd0RpYW1vbmQudG9TdHJpbmcoKVxuICAgIH1cbiAgICBwcml2YXRlIHNldE5vd0NvaW4oKSB7XG4gICAgICAgIHRoaXMudmlldy50eHRfY291bnQyTGFiZWwuc3RyaW5nID0gdGhpcy5tb2RlbC5wbGF5ZXJEYXRhLm5vd0NvaW4udG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Tm93Q2FzaCgpIHtcbiAgICAgICAgdGhpcy52aWV3LnR4dF9jb3VudDNMYWJlbC5zdHJpbmcgPSB0aGlzLm1vZGVsLnBsYXllckRhdGEubm93Q2FzaC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRMZXZlbCgpIHtcbiAgICAgICAgdGhpcy52aWV3LnR4dF9sZXZlbExhYmVsLnN0cmluZyA9IHRoaXMubW9kZWwucGxheWVyRGF0YS5nYW1lTGV2ZWwudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QWRDb3VudCgpIHtcbiAgICAgICAgdGhpcy52aWV3LnR4dF9hZExhYmVsLnN0cmluZyA9IHRoaXMubW9kZWwucGxheWVyRGF0YS5ib3hBZEx1Y2tUaW1lcy50b1N0cmluZygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGFydENvdW50KCkge1xuICAgICAgICB0aGlzLnZpZXcudHh0X3N0YXJ0Q291bnRMYWJlbC5zdHJpbmcgPSB0aGlzLm1vZGVsLnBsYXllckRhdGEudGltZUJveHMudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TGVzc0NvdW50KCkge1xuICAgICAgICB0aGlzLnZpZXcudHh0X2xlc3NMYWJlbC5zdHJpbmcgPSB0aGlzLm1vZGVsLnBsYXllckRhdGEuZ2FtZVJldC5jb2luTnVtLnRvU3RyaW5nKClcbiAgICB9XG4gICAgLyoq5YCS6K6h5pe25pi+56S6ICovXG4gICAgcHJpdmF0ZSBzZXRUaW1lQ291bnREb3duU2NvcmUoY291bnRkb3duTGFiZWw6IENvdW50ZG93bkxhYmVsLCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkYXlTdHIgPSBcIiV7ZH1cIiArIGMyZi5sYW5ndWFnZS53b3JkcygzMDAxKSArIFwiJXtoaH06JXttbX06JXtzc31cIjtcbiAgICAgICAgY291bnRkb3duTGFiZWwuc3RhcnRDb3VudGRvd24oaW50ZXJ2YWwsIHtcbiAgICAgICAgICAgIFM6IFwiJXtoaH06JXttbX06JXtzc31cIixcbiAgICAgICAgICAgIE06IFwiJXtoaH06JXttbX06JXtzc31cIixcbiAgICAgICAgICAgIEg6IFwiJXtoaH06JXttbX06JXtzc31cIixcbiAgICAgICAgICAgIEQ6IGRheVN0clxuICAgICAgICB9LCBjMmYubGFuZ3VhZ2Uud29yZHMoMzAwMCksIG51bGwsICgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq54K55Ye75byA5a6d566xIOeci+W5v+WRiiAqL1xuICAgIHByaXZhdGUgQ0Nfb25DbGlja2JveEJ0bigpIHtcbiAgICAgICAgdGhpcy5jbGlja0FkKDEpXG5cblxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsaWNrQWQodHlwOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubW9kZWwuYmFzZVVybCArICcvcGRkZ2FtZS92aWV3YWQnXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgb3BlclR5cGU6IHR5cCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWwuc2VuZE1zZyh1cmwsIChkYXRhT3V0OiBhbnkpID0+IHtcblxuXG5cbiAgICAgICAgfSwgZGF0YSwgJ1BPU1QnKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1vZGVsLmJhc2VVcmwgKyAnL3BkZGdhbWUvdGltZWJveCdcbiAgICAgICAgdGhpcy5tb2RlbC5zZW5kTXNnKHVybCwgKGRhdGFPdXQ6IGFueSkgPT4ge1xuXG4gICAgICAgIH0sIG51bGwsICdQT1NUJylcbiAgICB9XG5cbiAgICBwcml2YXRlIGx1Y2tHYW1lKHR5cDogbnVtYmVyKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1vZGVsLmJhc2VVcmwgKyAnL3BkZGdhbWUvbHVjaydcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBsdWNrVHlwZTogdHlwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsLnNlbmRNc2codXJsLCAoZGF0YU91dDogYW55KSA9PiB7XG5cbiAgICAgICAgfSwgZGF0YSwgJ1BPU1QnKVxuICAgIH1cblxuXG59Il19