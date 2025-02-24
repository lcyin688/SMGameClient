
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/basketBall/BasketBallMain/BasketBallMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296dekOI6VHxoo9uAbDOp5G', 'BasketBallMain');
// mainPack/script/basketBall/BasketBallMain/BasketBallMain.ts

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
var UIVControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIVControlBase");
var C2FEnum_1 = require("./../../../../c2f-framework/define/C2FEnum");
var GameHelper_1 = require("../../../../Script/game/GameHelper");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var EntranceView_1 = require("../../../../entrance/script/EntranceView");
var EventName_1 = require("../../../../Script/game/EventName");
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var Ball_1 = require("../Ball/Ball");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasketBallMain = /** @class */ (function (_super) {
    __extends(BasketBallMain, _super);
    function BasketBallMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BasketBallMain';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BasketBallMain.prototype.onLoad = function () {
        UIHelper_1.UIHelper.playMusic('physics2048BackMusic');
        GameHelper_1.GameHelper.setPhysics(true);
        c2f.event.on(EventName_1.EventName.EName.newBall, this.newBall, this);
        this.loadTabItemFirst(this.startView.bind(this));
    };
    BasketBallMain.prototype.onDestroy = function () {
        c2f.event.off(EventName_1.EventName.EName.newBall, this.newBall, this);
        _super.prototype.onDestroy.call(this);
    };
    BasketBallMain.prototype.onViewOpen = function (param) {
        this.model.initData();
        this.updateScore();
    };
    BasketBallMain.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    BasketBallMain.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    BasketBallMain.prototype.onButtonClick = function (eventType, component) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (component.name) {
                    case this.view.btnMenuButton.name:
                        this.CC_onClickbtnMenu();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    BasketBallMain.prototype.CC_onClickbtnMenu = function () {
        UIHelper_1.UIHelper.playEffect('betClick');
        // UIHelper.playEffect('basketBall/betClick');
        // c2f.gui.open(EntranceUI.SoundSet)
        c2f.gui.open(EntranceView_1.EntranceUI.GameLogin);
        this.closeView();
    };
    BasketBallMain.prototype.loadTabItemFirst = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.ball, cc.Prefab).then(function (resItem) {
                            _this.model.ballItem = resItem;
                            if (cb) {
                                cb();
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BasketBallMain.prototype.startView = function () {
        this.newBall("", "");
    };
    BasketBallMain.prototype.newBall = function (str, input) {
        var nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.ballItem, this.view.content);
        this.view.content.addChild(nodeItem);
        var blockItem = nodeItem.getComponent(Ball_1.default);
        nodeItem.setPosition(this.view.initPos.getPosition());
        blockItem.init(this); // 启动篮球逻辑
        // this.newShadow(ballComp);
    };
    BasketBallMain.prototype.startMoveBasket = function () {
    };
    BasketBallMain.prototype.stopMoveBasket = function () {
    };
    BasketBallMain.prototype.gameOver = function () {
    };
    BasketBallMain.prototype.addScore = function () {
        this.model.score += 1;
        this.updateScore();
    };
    BasketBallMain.prototype.updateScore = function () {
        this.view.txtCountLabel.string = this.model.score.toString();
    };
    BasketBallMain.prototype.playNetAnim = function () {
    };
    BasketBallMain.prototype.switchMaskLineShow = function (flag) {
        if (flag) {
            // this.view.line.lo(100);
        }
        else {
            // this.linePreNode.setLocalZOrder(0);
        }
    };
    BasketBallMain = __decorate([
        ccclass
    ], BasketBallMain);
    return BasketBallMain;
}(UIVControlBase_1.UIVControlBase));
exports.default = BasketBallMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvYmFza2V0QmFsbC9CYXNrZXRCYWxsTWFpbi9CYXNrZXRCYWxsTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBc0Y7QUFDdEYsc0VBQXFFO0FBR3JFLGlFQUFnRTtBQUNoRSw2REFBNEQ7QUFDNUQseUVBQXNFO0FBQ3RFLCtEQUE4RDtBQUM5RCxpRUFBZ0U7QUFDaEUscUNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFjO0lBQTFEO1FBQUEscUVBNkdDO1FBNUdHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFFaEMsV0FBSyxHQUF3QixTQUFTLENBQUM7UUFDdkMsVUFBSSxHQUF1QixTQUFTLENBQUM7O0lBd0doRCxDQUFDO0lBdEdhLCtCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMzQyx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFB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QUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBQ08sb0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDaEUsQ0FBQztJQUNNLG9DQUFXLEdBQWxCO0lBRUEsQ0FBQztJQUVNLDJDQUFrQixHQUF6QixVQUEwQixJQUFhO1FBQ25DLElBQUksSUFBSSxFQUFFO1lBQ04sMEJBQTBCO1NBQzdCO2FBQU07WUFDSCxzQ0FBc0M7U0FDekM7SUFDTCxDQUFDO0lBM0dnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBNkdsQztJQUFELHFCQUFDO0NBN0dELEFBNkdDLENBN0cyQywrQkFBYyxHQTZHekQ7a0JBN0dvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlWQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVkNvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IEJhc2tldEJhbGxNYWluTW9kZWwgZnJvbSAnLi9CYXNrZXRCYWxsTWFpbk1vZGVsJztcbmltcG9ydCBCYXNrZXRCYWxsTWFpblZpZXcgZnJvbSAnLi9CYXNrZXRCYWxsTWFpblZpZXcnO1xuaW1wb3J0IHsgR2FtZUhlbHBlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVIZWxwZXInO1xuaW1wb3J0IHsgVUlIZWxwZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSUhlbHBlcic7XG5pbXBvcnQgeyBFbnRyYW5jZVVJIH0gZnJvbSAnLi4vLi4vLi4vLi4vZW50cmFuY2Uvc2NyaXB0L0VudHJhbmNlVmlldyc7XG5pbXBvcnQgeyBFdmVudE5hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9FdmVudE5hbWUnO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi4vQmFsbC9CYWxsJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRCYWxsTWFpbiBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfQmFza2V0QmFsbE1haW4nO1xuXG4gICAgcHVibGljIG1vZGVsOiBCYXNrZXRCYWxsTWFpbk1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBCYXNrZXRCYWxsTWFpblZpZXcgPSB1bmRlZmluZWQ7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBVSUhlbHBlci5wbGF5TXVzaWMoJ3BoeXNpY3MyMDQ4QmFja011c2ljJyk7XG4gICAgICAgIEdhbWVIZWxwZXIuc2V0UGh5c2ljcyh0cnVlKVxuICAgICAgICBjMmYuZXZlbnQub24oRXZlbnROYW1lLkVOYW1lLm5ld0JhbGwsIHRoaXMubmV3QmFsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMubG9hZFRhYkl0ZW1GaXJzdCh0aGlzLnN0YXJ0Vmlldy5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGMyZi5ldmVudC5vZmYoRXZlbnROYW1lLkVOYW1lLm5ld0JhbGwsIHRoaXMubmV3QmFsbCwgdGhpcyk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WaWV3T3BlbihwYXJhbTogYW55KSB7XG4gICAgICAgIHRoaXMubW9kZWwuaW5pdERhdGEoKVxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKClcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkJ1dHRvbkNsaWNrKGV2ZW50VHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudC5uYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0bk1lbnVCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5NZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIENDX29uQ2xpY2tidG5NZW51KCkge1xuICAgICAgICBVSUhlbHBlci5wbGF5RWZmZWN0KCdiZXRDbGljaycpO1xuICAgICAgICAvLyBVSUhlbHBlci5wbGF5RWZmZWN0KCdiYXNrZXRCYWxsL2JldENsaWNrJyk7XG4gICAgICAgIC8vIGMyZi5ndWkub3BlbihFbnRyYW5jZVVJLlNvdW5kU2V0KVxuICAgICAgICBjMmYuZ3VpLm9wZW4oRW50cmFuY2VVSS5HYW1lTG9naW4pXG4gICAgICAgIHRoaXMuY2xvc2VWaWV3KClcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGxvYWRUYWJJdGVtRmlyc3QoY2IpIHtcbiAgICAgICAgYXdhaXQgYzJmLnJlcy5sb2FkT25lKEdhbWVDb25zdHMuQ21tUHJlZmFiLmJhbGwsIGNjLlByZWZhYikudGhlbigocmVzSXRlbTogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJhbGxJdGVtID0gcmVzSXRlbTtcbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFZpZXcoKSB7XG4gICAgICAgIHRoaXMubmV3QmFsbChcIlwiLCBcIlwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgbmV3QmFsbChzdHI6IHN0cmluZywgaW5wdXQ6IGFueSkge1xuXG4gICAgICAgIGxldCBub2RlSXRlbSA9IGMyZi51dGlscy52aWV3Lmluc3RhbnRpYXRlTVZDUHJlZmFiKHRoaXMubW9kZWwuYmFsbEl0ZW0sIHRoaXMudmlldy5jb250ZW50KTtcbiAgICAgICAgdGhpcy52aWV3LmNvbnRlbnQuYWRkQ2hpbGQobm9kZUl0ZW0pXG4gICAgICAgIGxldCBibG9ja0l0ZW0gPSBub2RlSXRlbS5nZXRDb21wb25lbnQoQmFsbClcbiAgICAgICAgbm9kZUl0ZW0uc2V0UG9zaXRpb24odGhpcy52aWV3LmluaXRQb3MuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgYmxvY2tJdGVtLmluaXQodGhpcyk7IC8vIOWQr+WKqOevrueQg+mAu+i+kVxuICAgICAgICAvLyB0aGlzLm5ld1NoYWRvdyhiYWxsQ29tcCk7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhcnRNb3ZlQmFza2V0KCkge1xuXG4gICAgfVxuICAgIHByaXZhdGUgc3RvcE1vdmVCYXNrZXQoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdhbWVPdmVyKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFNjb3JlKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnNjb3JlICs9IDE7XG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKVxuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZVNjb3JlKCkge1xuICAgICAgICB0aGlzLnZpZXcudHh0Q291bnRMYWJlbC5zdHJpbmcgPSB0aGlzLm1vZGVsLnNjb3JlLnRvU3RyaW5nKClcbiAgICB9XG4gICAgcHVibGljIHBsYXlOZXRBbmltKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN3aXRjaE1hc2tMaW5lU2hvdyhmbGFnOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnZpZXcubGluZS5sbygxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy5saW5lUHJlTm9kZS5zZXRMb2NhbFpPcmRlcigwKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==