
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Main/Physics2048Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhNYWluL1BoeXNpY3MyMDQ4TWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBc0Y7QUFDdEYsc0VBQXFFO0FBR3JFLDZEQUE0RDtBQUM1RCx5RUFBc0U7QUFDdEUsaUVBQWdFO0FBQ2hFLHNFQUFpRTtBQUNqRSwyREFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QyxtQ0FBYztJQUEzRDtRQUFBLHFFQTZLQztRQTVLRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLG1CQUFtQixDQUFDO1FBRWpDLFdBQUssR0FBeUIsU0FBUyxDQUFDO1FBQ3hDLFVBQUksR0FBd0IsU0FBUyxDQUFDOztJQXdLakQsQ0FBQztJQXBLYSxnQ0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNyQixtQkFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzNDLHVCQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENB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QUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBR3JFLENBQUM7SUFFTyxrQ0FBUSxHQUFoQixVQUFpQixJQUE4QixFQUFFLFNBQWtCLEVBQUUsS0FBZTtRQUNoRixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQTtRQUM5QyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQTNLZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTZLbkM7SUFBRCxzQkFBQztDQTdLRCxBQTZLQyxDQTdLNEMsK0JBQWMsR0E2SzFEO2tCQTdLb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBQaHlzaWNzMjA0OE1haW5Nb2RlbCBmcm9tICcuL1BoeXNpY3MyMDQ4TWFpbk1vZGVsJztcbmltcG9ydCBQaHlzaWNzMjA0OE1haW5WaWV3IGZyb20gJy4vUGh5c2ljczIwNDhNYWluVmlldyc7XG5pbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJSGVscGVyJztcbmltcG9ydCB7IEVudHJhbmNlVUkgfSBmcm9tICcuLi8uLi8uLi8uLi9lbnRyYW5jZS9zY3JpcHQvRW50cmFuY2VWaWV3JztcbmltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzJztcbmltcG9ydCBQaHlzaWNzMjA0OEl0ZW0gZnJvbSAnLi4vUGh5c2ljczIwNDhJdGVtL1BoeXNpY3MyMDQ4SXRlbSc7XG5pbXBvcnQgeyBVSVBhIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlQYXJhbSc7XG5pbXBvcnQgeyBHYW1lSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUhlbHBlcic7XG5pbXBvcnQgQm9vbUl0ZW0gZnJvbSAnLi4vQm9vbUl0ZW0vQm9vbUl0ZW0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MyMDQ4TWFpbiBleHRlbmRzIFVJVkNvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfUGh5c2ljczIwNDhNYWluJztcblxuICAgIHB1YmxpYyBtb2RlbDogUGh5c2ljczIwNDhNYWluTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IFBoeXNpY3MyMDQ4TWFpblZpZXcgPSB1bmRlZmluZWQ7XG5cblxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0QXVkaW9TdGF0ZSgpXG4gICAgICAgIFVJSGVscGVyLnBsYXlNdXNpYygncGh5c2ljczIwNDhCYWNrTXVzaWMnKTtcbiAgICAgICAgR2FtZUhlbHBlci5zZXRQaHlzaWNzKHRydWUpXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZVsnX3RvdWNoTGlzdGVuZXInXS5zd2FsbG93VG91Y2hlcyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRBdWRpb1N0YXRlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSBjMmYuc3RvcmFnZS5nZXRCb29sZWFuKEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEJnKVxuICAgICAgICBjMmYuYXVkaW8uYmdtT2ZmID0gc3RhdGU7XG4gICAgICAgIGxldCBzdGF0ZUVmZiA9IGMyZi5zdG9yYWdlLmdldEJvb2xlYW4oR2FtZUNvbnN0cy5TdG9yYWdlS2V5LnNvdW5kRWZmKVxuICAgICAgICBjMmYuYXVkaW8uc2Z4T2ZmID0gc3RhdGVFZmY7XG4gICAgfVxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldykge1xuICAgICAgICAgICAgdGhpcy5zZXRCbG9ja0l0ZW1Qb3MoZXZlbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNDYW5DcmVhdGVOZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmxvY2tJdGVtUG9zKGV2ZW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldykge1xuICAgICAgICAgICAgdGhpcy5zZXRCbG9ja0l0ZW1Qb3MoZXZlbnQpXG4gICAgICAgICAgICB0aGlzLnBsYXlGYWxsaW5nQW5pKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QmxvY2tJdGVtUG9zKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnBoeXNpY3MyMDQ4SXRlbSkge1xuICAgICAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgbGV0IHBvc0luTm9kZSA9IHRoaXMudmlldy5jb250ZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5waHlzaWNzMjA0OEl0ZW0ubm9kZS54ID0gcG9zSW5Ob2RlLnhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUZhbGxpbmdBbmkoKSB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoJ3BoeXNpY3MyMDQ4Y2xpY2snKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwucGh5c2ljczIwNDhJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRvdGFsU2NvcmUgKz0gdGhpcy5tb2RlbC5waHlzaWNzMjA0OEl0ZW0ubW9kZWwuZGF0YS5zY29yZVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5waHlzaWNzMjA0OEl0ZW0uc2V0UmlnaWRCb2R5VHlwZShjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWMpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnBoeXNpY3MyMDQ4SXRlbSA9IG51bGxcbiAgICAgICAgICAgIHRoaXMucmVmbGFzaFNjb3JlKClcbiAgICAgICAgICAgIC8v6KGo5ryU5LiL6JC9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVjZUNyZWF0ZU5ld0l0ZW0oKVxuICAgICAgICAgICAgfSwgMilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVmbGFzaFNjb3JlKCkge1xuICAgICAgICB0aGlzLnZpZXcudHh0VG90YWxTY29yZUxhYmVsLnN0cmluZyA9IFwiU2NvcmU6ezB9XCIuZm9ybWF0KHRoaXMubW9kZWwudG90YWxTY29yZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25WaWV3T3BlbihwYXJhbTogYW55KSB7XG4gICAgICAgIHRoaXMubW9kZWwuaW5pdERhdGEoKVxuICAgICAgICB0aGlzLnJlZmxhc2hTY29yZSgpXG4gICAgICAgIHRoaXMubG9hZFRhYkl0ZW1GaXJzdCh0aGlzLnN0YXJ0Vmlldy5iaW5kKHRoaXMpKVxuICAgICAgICBjMmYucmVzLmxvYWRPbmUoR2FtZUNvbnN0cy5DbW1QcmVmYWIuYm9vbUl0ZW0sIGNjLlByZWZhYikudGhlbigocmVzSXRlbTogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJvb21JdGVtID0gcmVzSXRlbTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihDMkZFbnVtLlVJRXZlbnQuQnV0dG9uQ2xpY2ssIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmYoQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQnV0dG9uQ2xpY2soZXZlbnRUeXBlOiBzdHJpbmcsIGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLnZpZXcuYnRuTWVudUJ1dHRvbi5uYW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuQ0Nfb25DbGlja2J0bk1lbnUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQ0Nfb25DbGlja2J0bk1lbnUoKSB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoJ2JldENsaWNrJyk7XG4gICAgICAgIC8vIGMyZi5ndWkub3BlbihFbnRyYW5jZVVJLlNvdW5kU2V0KVxuXG4gICAgICAgIGMyZi5ndWkub3BlbihFbnRyYW5jZVVJLkdhbWVMb2dpbilcbiAgICAgICAgdGhpcy5jbG9zZVZpZXcoKVxuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgbG9hZFRhYkl0ZW1GaXJzdChjYikge1xuICAgICAgICBhd2FpdCBjMmYucmVzLmxvYWRPbmUoR2FtZUNvbnN0cy5DbW1QcmVmYWIucGh5c2ljczIwNDhJdGVtLCBjYy5QcmVmYWIpLnRoZW4oKHJlc0l0ZW06IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5ibG9ja0l0ZW0gPSByZXNJdGVtO1xuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0VmlldygpIHtcbiAgICAgICAgdGhpcy5mb3JlY2VDcmVhdGVOZXdJdGVtKClcblxuICAgIH1cblxuICAgIHByaXZhdGUgZm9yZWNlQ3JlYXRlTmV3SXRlbSgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldyA9IHRydWVcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdJdGVtKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld0l0ZW0oKSB7XG4gICAgICAgIGlmICghdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5pc0NhbkNyZWF0ZU5ldyA9IGZhbHNlXG4gICAgICAgIHRoaXMucmFuZG9tTmV3SXRlbSgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21OZXdJdGVtKCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1vZGVsLnJvZG9tT25lSW5kZXgoKVxuICAgICAgICBsZXQgbm9kZUl0ZW0gPSBjMmYudXRpbHMudmlldy5pbnN0YW50aWF0ZU1WQ1ByZWZhYih0aGlzLm1vZGVsLmJsb2NrSXRlbSwgdGhpcy52aWV3LmNvbnRlbnQpO1xuICAgICAgICB0aGlzLnZpZXcuY29udGVudC5hZGRDaGlsZChub2RlSXRlbSlcbiAgICAgICAgbGV0IGJsb2NrSXRlbSA9IG5vZGVJdGVtLmdldENvbXBvbmVudChQaHlzaWNzMjA0OEl0ZW0pXG4gICAgICAgIHRoaXMubW9kZWwucGh5c2ljczIwNDhJdGVtID0gYmxvY2tJdGVtXG4gICAgICAgIGxldCBzdGFydEl0ZW0gPSB0aGlzLnZpZXcuaW5pdFBvc1xuICAgICAgICBsZXQgd29ybGQgPSBzdGFydEl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdGFydEl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCBzcGFjZSA9IG5vZGVJdGVtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCk7XG4gICAgICAgIG5vZGVJdGVtLnNldFBvc2l0aW9uKHNwYWNlKVxuICAgICAgICBsZXQgaXRlbURhdGEgPSBVSVBhLlBoeXNpY3MyMDQ4SXRlbURhdGFbaW5kZXhdXG4gICAgICAgIGJsb2NrSXRlbS5zZXRJbml0KGl0ZW1EYXRhLCB0aGlzLmNhbGxCYWNrLmJpbmQodGhpcykpXG4gICAgICAgIGJsb2NrSXRlbS5zZXRSaWdpZEJvZHlUeXBlKGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljKVxuICAgICAgICAvL+iuvue9ruW3puS4iuinkuW9k+WJjeWFg+e0oFxuICAgICAgICBjMmYudXRpbHMudmlldy5jaGFuZ2VTcHJpdGVGcmFtZSh0aGlzLnZpZXcuaWNvbk1heFNwcml0ZSwgaXRlbURhdGEudXJsKVxuICAgICAgICB0aGlzLnZpZXcudHh0Q3VyU2NvcmVMYWJlbC5zdHJpbmcgPSBcIlh7MH1cIi5mb3JtYXQoaXRlbURhdGEuc2NvcmUpXG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsbEJhY2soZGF0YTogVUlQYS5QaHlzaWNzMjA0OEl0ZW1BcmdzLCBzdGFydEl0ZW06IGNjLk5vZGUsIGNiRnVuOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgbm9kZUl0ZW0gPSBjMmYudXRpbHMudmlldy5pbnN0YW50aWF0ZU1WQ1ByZWZhYih0aGlzLm1vZGVsLmJvb21JdGVtLCB0aGlzLnZpZXcuZWZmZWN0KTtcbiAgICAgICAgdGhpcy52aWV3LmVmZmVjdC5hZGRDaGlsZChub2RlSXRlbSlcbiAgICAgICAgbGV0IGJvb21JdGVtID0gbm9kZUl0ZW0uZ2V0Q29tcG9uZW50KEJvb21JdGVtKVxuICAgICAgICBsZXQgd29ybGQgPSBzdGFydEl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdGFydEl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCBzcGFjZSA9IG5vZGVJdGVtLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZCk7XG4gICAgICAgIG5vZGVJdGVtLnNldFBvc2l0aW9uKHNwYWNlKVxuICAgICAgICBib29tSXRlbS5wbGF5Qm9vbShkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICBjYkZ1bigpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn0iXX0=