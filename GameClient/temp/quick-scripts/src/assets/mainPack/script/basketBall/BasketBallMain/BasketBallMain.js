"use strict";
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