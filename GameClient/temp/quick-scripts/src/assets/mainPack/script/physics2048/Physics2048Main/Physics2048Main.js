"use strict";
cc._RF.push(module, '77b73KegwhCQYrb05p+adFh', 'Physics2048Main');
// mainPack/script/physics2048/Physics2048Main/Physics2048Main.ts

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
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var EntranceView_1 = require("../../../../entrance/script/EntranceView");
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var Physics2048Item_1 = require("../Physics2048Item/Physics2048Item");
var UIParam_1 = require("../../../../Script/game/UIParam");
var GameHelper_1 = require("../../../../Script/game/GameHelper");
var BoomItem_1 = require("../BoomItem/BoomItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048Main = /** @class */ (function (_super) {
    __extends(Physics2048Main, _super);
    function Physics2048Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_Physics2048Main';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    Physics2048Main.prototype.onLoad = function () {
        this.initAudioState();
        UIHelper_1.UIHelper.playMusic('physics2048BackMusic');
        GameHelper_1.GameHelper.setPhysics(true);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node['_touchListener'].swallowTouches = false;
    };
    Physics2048Main.prototype.initAudioState = function () {
        var state = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundBg);
        c2f.audio.bgmOff = state;
        var stateEff = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundEff);
        c2f.audio.sfxOff = stateEff;
    };
    Physics2048Main.prototype.onTouchStart = function (event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
        }
    };
    Physics2048Main.prototype.onTouchMove = function (event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
        }
    };
    Physics2048Main.prototype.onTouchEnd = function (event) {
        if (!this.model.isCanCreateNew) {
            this.setBlockItemPos(event);
            this.playFallingAni();
        }
    };
    Physics2048Main.prototype.setBlockItemPos = function (event) {
        if (this.model.physics2048Item) {
            var worldPoint = event.getLocation();
            var posInNode = this.view.content.convertToNodeSpaceAR(worldPoint);
            this.model.physics2048Item.node.x = posInNode.x;
        }
    };
    Physics2048Main.prototype.playFallingAni = function () {
        var _this = this;
        UIHelper_1.UIHelper.playEffect('physics2048click');
        if (this.model.physics2048Item) {
            this.model.totalScore += this.model.physics2048Item.model.data.score;
            this.model.physics2048Item.setRigidBodyType(cc.RigidBodyType.Dynamic);
            this.model.physics2048Item = null;
            this.reflashScore();
            //表演下落
            this.scheduleOnce(function () {
                _this.model.isCanCreateNew = true;
                _this.foreceCreateNewItem();
            }, 2);
        }
    };
    Physics2048Main.prototype.reflashScore = function () {
        this.view.txtTotalScoreLabel.string = "Score:{0}".format(this.model.totalScore);
    };
    Physics2048Main.prototype.onViewOpen = function (param) {
        var _this = this;
        this.model.initData();
        this.reflashScore();
        this.loadTabItemFirst(this.startView.bind(this));
        c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.boomItem, cc.Prefab).then(function (resItem) {
            _this.model.boomItem = resItem;
        });
    };
    Physics2048Main.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    Physics2048Main.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    Physics2048Main.prototype.onButtonClick = function (eventType, component) {
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
    Physics2048Main.prototype.CC_onClickbtnMenu = function () {
        UIHelper_1.UIHelper.playEffect('betClick');
        // c2f.gui.open(EntranceUI.SoundSet)
        c2f.gui.open(EntranceView_1.EntranceUI.GameLogin);
        this.closeView();
    };
    Physics2048Main.prototype.loadTabItemFirst = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.physics2048Item, cc.Prefab).then(function (resItem) {
                            _this.model.blockItem = resItem;
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
    Physics2048Main.prototype.startView = function () {
        this.foreceCreateNewItem();
    };
    Physics2048Main.prototype.foreceCreateNewItem = function () {
        this.model.isCanCreateNew = true;
        this.createNewItem();
    };
    Physics2048Main.prototype.createNewItem = function () {
        if (!this.model.isCanCreateNew) {
            return;
        }
        this.model.isCanCreateNew = false;
        this.randomNewItem();
    };
    Physics2048Main.prototype.randomNewItem = function () {
        var index = this.model.rodomOneIndex();
        var nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
        this.view.content.addChild(nodeItem);
        var blockItem = nodeItem.getComponent(Physics2048Item_1.default);
        this.model.physics2048Item = blockItem;
        var startItem = this.view.initPos;
        var world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        var space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space);
        var itemData = UIParam_1.UIPa.Physics2048ItemData[index];
        blockItem.setInit(itemData, this.callBack.bind(this));
        blockItem.setRigidBodyType(cc.RigidBodyType.Static);
        //设置左上角当前元素
        c2f.utils.view.changeSpriteFrame(this.view.iconMaxSprite, itemData.url);
        this.view.txtCurScoreLabel.string = "X{0}".format(itemData.score);
    };
    Physics2048Main.prototype.callBack = function (data, startItem, cbFun) {
        var nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.boomItem, this.view.effect);
        this.view.effect.addChild(nodeItem);
        var boomItem = nodeItem.getComponent(BoomItem_1.default);
        var world = startItem.parent.convertToWorldSpaceAR(startItem.getPosition());
        var space = nodeItem.parent.convertToNodeSpaceAR(world);
        nodeItem.setPosition(space);
        boomItem.playBoom(data, function () {
            cbFun();
        });
    };
    Physics2048Main = __decorate([
        ccclass
    ], Physics2048Main);
    return Physics2048Main;
}(UIVControlBase_1.UIVControlBase));
exports.default = Physics2048Main;

cc._RF.pop();