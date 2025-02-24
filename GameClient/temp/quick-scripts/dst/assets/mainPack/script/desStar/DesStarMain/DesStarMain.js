
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/DesStarMain/DesStarMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0c425xfFZLMbXkRWV/8sSy', 'DesStarMain');
// mainPack/script/desStar/DesStarMain/DesStarMain.ts

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
var EntranceView_1 = require("../../../../entrance/script/EntranceView");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var BlockItem_1 = require("../BlockItem/BlockItem");
var UIParam_1 = require("../../../../Script/game/UIParam");
var StartItem_1 = require("../StartItem/StartItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DesStarMain = /** @class */ (function (_super) {
    __extends(DesStarMain, _super);
    function DesStarMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_DesStarMain';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    DesStarMain.prototype.onViewOpen = function (param) {
        this.initAudioState();
        UIHelper_1.UIHelper.playMusic('backMusic');
        this.model.initData();
        this.resetGame();
        this.loadTabItemFirst(this.startGame.bind(this));
        this.loadStarItem();
        UIHelper_1.UIHelper.playEffect('ready_go');
    };
    DesStarMain.prototype.initAudioState = function () {
        var state = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundBg);
        c2f.audio.bgmOff = state;
        var stateEff = c2f.storage.getBoolean(GameConsts_1.GameConsts.StorageKey.soundEff);
        c2f.audio.sfxOff = stateEff;
    };
    DesStarMain.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    };
    DesStarMain.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.UIEvent.ButtonClick);
    };
    DesStarMain.prototype.onButtonClick = function (eventType, component) {
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
    DesStarMain.prototype.CC_onClickbtnMenu = function () {
        UIHelper_1.UIHelper.playEffect('betClick');
        c2f.gui.open(EntranceView_1.EntranceUI.SoundSet);
    };
    DesStarMain.prototype.loadTabItemFirst = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.blockItem, cc.Prefab).then(function (resItem) {
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
    DesStarMain.prototype.loadStarItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, c2f.res.loadOne(GameConsts_1.GameConsts.CmmPrefab.P_StartItem, cc.Prefab).then(function (resItem) {
                            _this.model.startItem = resItem;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DesStarMain.prototype.initItemArr = function () {
        this.model.starItemMap = new Map();
        for (var row = 0; row < 10; row++) {
            var mapItem = new Map();
            for (var column = 0; column < 10; column++) {
                var nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.blockItem, this.view.content);
                this.view.content.addChild(nodeItem);
                var blockItem = nodeItem.getComponent(BlockItem_1.default);
                mapItem.set(column, blockItem);
            }
            this.model.starItemMap.set(row, mapItem);
        }
    };
    DesStarMain.prototype.setBarView = function () {
        this.view.txtScoreLabel.string = "{0}/{1}".format(this.model.curScore, this.model.totalShowScore);
        var perNum = this.model.curScore / this.model.totalShowScore;
        if (perNum > 1) {
            perNum = 1;
        }
        this.view.barProgressBar.progress = perNum;
    };
    DesStarMain.prototype.startGame = function () {
        this.setBarView();
        this.model.isActionRunning = false;
        if (!this.model.starItemMap) {
            this.initItemArr();
        }
        this.view.txtLvLabel.string = (this.model.curLv + 1).toString();
        var actionDelay = 0;
        for (var row = 0; row < 10; row++) {
            actionDelay = 0.02 * row;
            for (var column = 0; column < 10; column++) {
                actionDelay += 0.02;
                var initPosition = this.model.getStarPosition(row, column);
                initPosition.y += this.model.visibleSize.height;
                var item = this.model.starItemMap.get(row).get(column);
                var nodeItem = item.node;
                nodeItem.name = "block" + column + "_" + row;
                nodeItem.setPosition(initPosition);
                var typ = this.model.starDataArr[row][column];
                var itemData = UIParam_1.UIPa.StarItemData[typ];
                var score = 0;
                var url = "";
                if (itemData) {
                    score = itemData.score;
                    url = itemData.url;
                }
                var dataItem = {
                    typ: typ,
                    score: score,
                    url: url,
                    column: column,
                    row: row,
                    cbFun: this.clickItemCb.bind(this),
                };
                item.setInit(dataItem);
                cc.tween(nodeItem)
                    .to(0.2 + actionDelay, { position: this.model.getStarPosition(row, column) })
                    .start();
            }
        }
    };
    DesStarMain.prototype.judgeFinal = function (result, starDataArr) {
        var _this = this;
        var rowAndCol;
        var score = 0;
        for (var i = 0; i < result.length; i++) {
            rowAndCol = result[i];
            //播放爆炸效果  应该是要爆炸后飞星星特效
            var item = this.model.starItemMap.get(rowAndCol.row).get(rowAndCol.column);
            item.playChoose();
            score += item.model.data.score;
            starDataArr[rowAndCol.row][rowAndCol.column] = -1;
        }
        var tweenItem = cc.tween(this.node);
        var _loop_1 = function (i) {
            rowAndCol = result[i];
            //播放爆炸效果  应该是要爆炸后飞星星特效
            UIHelper_1.UIHelper.playEffect('getMoney');
            var item = this_1.model.starItemMap.get(rowAndCol.row).get(rowAndCol.column);
            tweenItem.call(function () {
                _this.model.curScore += item.model.data.score;
                item.playExplode(function () {
                    _this.setBarView();
                    _this.playStartAni(item.node);
                });
            }).delay(0.02);
        };
        var this_1 = this;
        for (var i = 0; i < result.length; i++) {
            _loop_1(i);
        }
        var countHave = this.getHaveCount();
        tweenItem.call(function () {
            _this.showReward(score);
            _this.scheduleOnce(function () {
                if (countHave <= 1) { //如果完成了游戏
                    _this.winGame(countHave);
                }
                else {
                    _this.drawBlock(starDataArr);
                }
            }, 0.8);
        }).start();
    };
    DesStarMain.prototype.playStartAni = function (nodeTemp) {
        var itemNode = c2f.utils.view.instantiateMVCPrefab(this.model.startItem, this.view.content);
        this.view.content.addChild(itemNode);
        var starItem = itemNode.getComponent(StartItem_1.default);
        starItem.playAni();
        itemNode.setPosition(nodeTemp.position);
        var worldPoint = this.view.endPos.parent.convertToWorldSpaceAR(this.view.endPos.position);
        var endPos = this.view.content.convertToNodeSpaceAR(worldPoint);
        var config = {
            startPos: nodeTemp.position,
            endPos: endPos,
        };
        UIHelper_1.UIHelper.createBezier(itemNode, config);
        cc.tween(itemNode).to(0.8, {}, UIHelper_1.UIHelper.createBezier(itemNode, config)).delay(0.2).call(function () {
            itemNode.destroy();
        }).start();
    };
    DesStarMain.prototype.showReward = function (score) {
        UIHelper_1.UIHelper.playEffect('select');
        if (score > 400) {
            this.playWinByIndex(5);
        }
        else if (score > 200) {
            this.playWinByIndex(4);
        }
        else if (score > 100) {
            this.playWinByIndex(3);
        }
        else if (score > 50) {
            this.playWinByIndex(2);
        }
        else if (score > 20) {
            this.playWinByIndex(1);
        }
    };
    DesStarMain.prototype.playWinByIndex = function (index) {
        var _this = this;
        UIHelper_1.UIHelper.playEffect('reward_' + index);
        this.view.reward.active = true;
        this.view.reward.setScale(0.8);
        this.view.reward.opacity = 120;
        c2f.utils.view.changeSpriteFrame(this.view.rewardSprite, GameConsts_1.GameConsts.ResUrl.desStar + 'reward_' + index);
        cc.Tween.stopAllByTarget(this.view.reward);
        cc.tween(this.view.reward).to(0.3, { scale: 1.8 }).start();
        cc.tween(this.view.reward).to(0.3, { opacity: 255 }).call(function () {
            _this.view.reward.active = false;
        }).start();
    };
    DesStarMain.prototype.clickItemCb = function (data) {
        if (!this.model.isActionRunning) {
            UIHelper_1.UIHelper.playEffect('select');
            this.model.isActionRunning = true;
            var result = this.model.findSameStarIndex(data.row, data.column);
            if (result.length > 1) {
                var starDataArr = this.model.starDataArr;
                this.judgeFinal(result, starDataArr);
            }
            else {
                this.model.isActionRunning = false;
            }
        }
    };
    DesStarMain.prototype.drawBlock = function (starDataArr) {
        var _this = this;
        // 先整体往下，再往左
        var starMoveData = [];
        for (var r = 0; r < 10; r++) {
            for (var c = 0; c < 10; c++) {
                if (starDataArr[r][c] == -1) {
                    var rowTop = r + 1;
                    while (rowTop < 10 && starDataArr[rowTop][c] == -1) {
                        rowTop += 1;
                    }
                    if (rowTop < 10) {
                        starDataArr[r][c] = starDataArr[rowTop][c];
                        starDataArr[rowTop][c] = -1;
                        var moveDataItem = {
                            fromRow: rowTop,
                            fromCol: c,
                            toRow: r,
                            toCol: c
                        };
                        starMoveData.push(moveDataItem);
                    }
                }
            }
        }
        var isColEmpty = false;
        var b = false;
        for (var c = 8; c > -1; c--) {
            isColEmpty = true;
            for (var r = 0; r < 10; r++) {
                if (starDataArr[r][c] != -1) {
                    isColEmpty = false;
                    break;
                }
            }
            if (isColEmpty) {
                for (var newCol = c + 1; newCol < 10; newCol++) {
                    for (var r = 0; r < 10; r++) {
                        starDataArr[r][newCol - 1] = starDataArr[r][newCol];
                        starDataArr[r][newCol] = -1;
                        // 不等于-1，才有移动的需求
                        if (starDataArr[r][newCol - 1] != -1) {
                            b = false;
                            for (var i = 0; i < starMoveData.length; i++) {
                                if (starMoveData[i].toRow == r && starMoveData[i].toCol == newCol) {
                                    starMoveData[i].toRow = r;
                                    starMoveData[i].toCol = newCol - 1;
                                    b = true;
                                    break;
                                }
                            }
                            if (!b) {
                                starMoveData.push({
                                    fromRow: r,
                                    fromCol: newCol,
                                    toRow: r,
                                    toCol: newCol - 1
                                });
                            }
                        }
                    }
                }
            }
        }
        var starMoveDataLength = starMoveData.length;
        if (starMoveDataLength > 0) {
            var actionCount_1 = 0;
            for (var i = 0; i < starMoveDataLength; i++) {
                var moveData = starMoveData[i];
                actionCount_1++;
                var item = this.model.starItemMap.get(moveData.fromRow).get(moveData.fromCol);
                cc.tween(item.node)
                    .to(0.2, { position: this.model.getStarPosition(moveData.toRow, moveData.toCol) })
                    .call(function () {
                    if (--actionCount_1 == 0) {
                        //所有元素重置下位置
                        _this.model.isActionRunning = false;
                        _this.resetView();
                    }
                })
                    .start();
            }
        }
        else {
            this.model.isActionRunning = false;
        }
    };
    DesStarMain.prototype.resetView = function () {
        for (var row = 0; row < 10; row++) {
            for (var column = 0; column < 10; column++) {
                var initPosition = this.model.getStarPosition(row, column);
                var item = this.model.starItemMap.get(row).get(column);
                var nodeItem = item.node;
                nodeItem.name = "block" + column + "_" + row;
                nodeItem.setPosition(initPosition);
                var typ = this.model.starDataArr[row][column];
                var itemData = UIParam_1.UIPa.StarItemData[typ];
                var score = 0;
                var url = "";
                if (itemData) {
                    score = itemData.score;
                    url = itemData.url;
                }
                var dataItem = {
                    typ: typ,
                    score: score,
                    url: url,
                    column: column,
                    row: row,
                    cbFun: this.clickItemCb.bind(this),
                };
                item.setInit(dataItem);
            }
        }
        var countHave = this.getHaveCount();
        if (countHave <= 1) { //如果完成了游戏
            this.winGame(countHave);
            return;
        }
    };
    DesStarMain.prototype.getHaveCount = function () {
        var maxCount = 0;
        //最多的只有一个的时候也需要完成
        var mapItem = new Map();
        for (var i = 0; i < this.model.starDataArr.length; i++) {
            var row = this.model.starDataArr[i];
            for (var j = 0; j < row.length; j++) {
                var typ = row[j];
                if (typ >= 0) {
                    var item = mapItem.get(typ);
                    if (item) {
                        var curCount = item + 1;
                        mapItem.set(typ, curCount);
                    }
                    else {
                        mapItem.set(typ, 1);
                    }
                }
            }
        }
        mapItem.forEach(function (v) {
            if (v > maxCount) {
                maxCount = v;
            }
        });
        return maxCount;
    };
    DesStarMain.prototype.winGame = function (count) {
        var _this = this;
        if (count == 1) { //单独爆炸
            for (var row = 0; row < 10; row++) {
                var _loop_2 = function (column) {
                    var typ = this_2.model.starDataArr[row][column];
                    var item = this_2.model.starItemMap.get(row).get(column);
                    if (typ > 0) {
                        this_2.model.curScore += item.model.data.score;
                        item.playChoose();
                        item.playExplode(function () {
                            _this.setBarView();
                            _this.playStartAni(item.node);
                        });
                    }
                    return "break";
                };
                var this_2 = this;
                for (var column = 0; column < 10; column++) {
                    var state_1 = _loop_2(column);
                    if (state_1 === "break")
                        break;
                }
            }
            this.enterNextLv();
        }
        else {
            this.enterNextLv();
        }
    };
    DesStarMain.prototype.enterNextLv = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.model.curLv++;
            c2f.storage.setNumber(GameConsts_1.GameConsts.StorageKey.curLv, _this.model.curLv);
            _this.model.getDataByLv(_this.model.curLv);
            _this.startGame();
        }, 1);
    };
    DesStarMain.prototype.resetGame = function () {
        this.view.reward.active = false;
    };
    DesStarMain = __decorate([
        ccclass
    ], DesStarMain);
    return DesStarMain;
}(UIVControlBase_1.UIVControlBase));
exports.default = DesStarMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9EZXNTdGFyTWFpbi9EZXNTdGFyTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBc0Y7QUFDdEYsc0VBQXFFO0FBR3JFLHlFQUFzRTtBQUN0RSw2REFBNEQ7QUFDNUQsaUVBQWdFO0FBQ2hFLG9EQUErQztBQUMvQywyREFBdUQ7QUFDdkQsb0RBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFjO0lBQXZEO1FBQUEscUVBd2FDO1FBdmFHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsZUFBZSxDQUFDO1FBRTdCLFdBQUssR0FBcUIsU0FBUyxDQUFDO1FBQ3BDLFVBQUksR0FBb0IsU0FBUyxDQUFDOztJQW1hN0MsQ0FBQztJQWphYSxnQ0FBVSxHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNyQixtQkFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsbUJBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNPLG9DQUFjLEdBQXRCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsdUJB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QUM7SUFFTywrQkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQXRhZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdhL0I7SUFBRCxrQkFBQztDQXhhRCxBQXdhQyxDQXhhd0MsK0JBQWMsR0F3YXREO2tCQXhhb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVkNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBEZXNTdGFyTWFpbk1vZGVsIGZyb20gJy4vRGVzU3Rhck1haW5Nb2RlbCc7XG5pbXBvcnQgRGVzU3Rhck1haW5WaWV3IGZyb20gJy4vRGVzU3Rhck1haW5WaWV3JztcbmltcG9ydCB7IEVudHJhbmNlVUkgfSBmcm9tICcuLi8uLi8uLi8uLi9lbnRyYW5jZS9zY3JpcHQvRW50cmFuY2VWaWV3JztcbmltcG9ydCB7IFVJSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlIZWxwZXInO1xuaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHMnO1xuaW1wb3J0IEJsb2NrSXRlbSBmcm9tICcuLi9CbG9ja0l0ZW0vQmxvY2tJdGVtJztcbmltcG9ydCB7IFVJUGEgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSVBhcmFtJztcbmltcG9ydCBTdGFydEl0ZW0gZnJvbSAnLi4vU3RhcnRJdGVtL1N0YXJ0SXRlbSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzU3Rhck1haW4gZXh0ZW5kcyBVSVZDb250cm9sQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdGX0Rlc1N0YXJNYWluJztcblxuICAgIHB1YmxpYyBtb2RlbDogRGVzU3Rhck1haW5Nb2RlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdmlldzogRGVzU3Rhck1haW5WaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgcHJvdGVjdGVkIG9uVmlld09wZW4ocGFyYW06IGFueSkge1xuICAgICAgICB0aGlzLmluaXRBdWRpb1N0YXRlKClcbiAgICAgICAgVUlIZWxwZXIucGxheU11c2ljKCdiYWNrTXVzaWMnKTtcbiAgICAgICAgdGhpcy5tb2RlbC5pbml0RGF0YSgpXG4gICAgICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICAgICAgdGhpcy5sb2FkVGFiSXRlbUZpcnN0KHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMubG9hZFN0YXJJdGVtKClcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgncmVhZHlfZ28nKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0QXVkaW9TdGF0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gYzJmLnN0b3JhZ2UuZ2V0Qm9vbGVhbihHYW1lQ29uc3RzLlN0b3JhZ2VLZXkuc291bmRCZylcbiAgICAgICAgYzJmLmF1ZGlvLmJnbU9mZiA9IHN0YXRlO1xuICAgICAgICBsZXQgc3RhdGVFZmYgPSBjMmYuc3RvcmFnZS5nZXRCb29sZWFuKEdhbWVDb25zdHMuU3RvcmFnZUtleS5zb3VuZEVmZilcbiAgICAgICAgYzJmLmF1ZGlvLnNmeE9mZiA9IHN0YXRlRWZmO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oQzJGRW51bS5VSUV2ZW50LkJ1dHRvbkNsaWNrLCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uVUlFdmVudC5CdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkJ1dHRvbkNsaWNrKGV2ZW50VHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudC5uYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy52aWV3LmJ0bk1lbnVCdXR0b24ubmFtZTpcbiAgICAgICAgICAgICAgICB0aGlzLkNDX29uQ2xpY2tidG5NZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBDQ19vbkNsaWNrYnRuTWVudSgpIHtcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgnYmV0Q2xpY2snKTtcbiAgICAgICAgYzJmLmd1aS5vcGVuKEVudHJhbmNlVUkuU291bmRTZXQpXG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBsb2FkVGFiSXRlbUZpcnN0KGNiKSB7XG4gICAgICAgIGF3YWl0IGMyZi5yZXMubG9hZE9uZShHYW1lQ29uc3RzLkNtbVByZWZhYi5ibG9ja0l0ZW0sIGNjLlByZWZhYikudGhlbigocmVzSXRlbTogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJsb2NrSXRlbSA9IHJlc0l0ZW07XG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkU3Rhckl0ZW0oKSB7XG4gICAgICAgIGF3YWl0IGMyZi5yZXMubG9hZE9uZShHYW1lQ29uc3RzLkNtbVByZWZhYi5QX1N0YXJ0SXRlbSwgY2MuUHJlZmFiKS50aGVuKChyZXNJdGVtOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc3RhcnRJdGVtID0gcmVzSXRlbTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRJdGVtQXJyKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnN0YXJJdGVtTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCBtYXBJdGVtOiBNYXA8bnVtYmVyLCBCbG9ja0l0ZW0+ID0gbmV3IE1hcCgpXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUl0ZW0gPSBjMmYudXRpbHMudmlldy5pbnN0YW50aWF0ZU1WQ1ByZWZhYih0aGlzLm1vZGVsLmJsb2NrSXRlbSwgdGhpcy52aWV3LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5jb250ZW50LmFkZENoaWxkKG5vZGVJdGVtKVxuICAgICAgICAgICAgICAgIGxldCBibG9ja0l0ZW0gPSBub2RlSXRlbS5nZXRDb21wb25lbnQoQmxvY2tJdGVtKVxuICAgICAgICAgICAgICAgIG1hcEl0ZW0uc2V0KGNvbHVtbiwgYmxvY2tJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5zZXQocm93LCBtYXBJdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHNldEJhclZpZXcoKSB7XG4gICAgICAgIHRoaXMudmlldy50eHRTY29yZUxhYmVsLnN0cmluZyA9IFwiezB9L3sxfVwiLmZvcm1hdCh0aGlzLm1vZGVsLmN1clNjb3JlLCB0aGlzLm1vZGVsLnRvdGFsU2hvd1Njb3JlKVxuICAgICAgICBsZXQgcGVyTnVtID0gdGhpcy5tb2RlbC5jdXJTY29yZSAvIHRoaXMubW9kZWwudG90YWxTaG93U2NvcmU7XG4gICAgICAgIGlmIChwZXJOdW0gPiAxKSB7XG4gICAgICAgICAgICBwZXJOdW0gPSAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LmJhclByb2dyZXNzQmFyLnByb2dyZXNzID0gcGVyTnVtO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zZXRCYXJWaWV3KClcbiAgICAgICAgdGhpcy5tb2RlbC5pc0FjdGlvblJ1bm5pbmcgPSBmYWxzZVxuICAgICAgICBpZiAoIXRoaXMubW9kZWwuc3Rhckl0ZW1NYXApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEl0ZW1BcnIoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy50eHRMdkxhYmVsLnN0cmluZyA9ICh0aGlzLm1vZGVsLmN1ckx2ICsgMSkudG9TdHJpbmcoKVxuICAgICAgICBsZXQgYWN0aW9uRGVsYXkgPSAwO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGFjdGlvbkRlbGF5ID0gMC4wMiAqIHJvdztcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgIGFjdGlvbkRlbGF5ICs9IDAuMDJcbiAgICAgICAgICAgICAgICBsZXQgaW5pdFBvc2l0aW9uID0gdGhpcy5tb2RlbC5nZXRTdGFyUG9zaXRpb24ocm93LCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIGluaXRQb3NpdGlvbi55ICs9IHRoaXMubW9kZWwudmlzaWJsZVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5nZXQocm93KS5nZXQoY29sdW1uKTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUl0ZW0gPSBpdGVtLm5vZGVcbiAgICAgICAgICAgICAgICBub2RlSXRlbS5uYW1lID0gYGJsb2NrJHtjb2x1bW59XyR7cm93fWBcbiAgICAgICAgICAgICAgICBub2RlSXRlbS5zZXRQb3NpdGlvbihpbml0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGxldCB0eXAgPSB0aGlzLm1vZGVsLnN0YXJEYXRhQXJyW3Jvd11bY29sdW1uXVxuICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IFVJUGEuU3Rhckl0ZW1EYXRhW3R5cF1cbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSAwXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IFwiXCJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBpdGVtRGF0YS5zY29yZVxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBpdGVtRGF0YS51cmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJdGVtOiBVSVBhLkRlc1N0YXJJdGVtQXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwOiB0eXAsXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICAgICAgICAgICAgY2JGdW46IHRoaXMuY2xpY2tJdGVtQ2IuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRJbml0KGRhdGFJdGVtKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiArIGFjdGlvbkRlbGF5LCB7IHBvc2l0aW9uOiB0aGlzLm1vZGVsLmdldFN0YXJQb3NpdGlvbihyb3csIGNvbHVtbikgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBqdWRnZUZpbmFsKHJlc3VsdDogVUlQYS5EZXNTdGFyQmFzZVtdLCBzdGFyRGF0YUFycjogbnVtYmVyW11bXSkge1xuICAgICAgICBsZXQgcm93QW5kQ29sOiBVSVBhLkRlc1N0YXJCYXNlXG4gICAgICAgIGxldCBzY29yZSA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJvd0FuZENvbCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIC8v5pKt5pS+54iG54K45pWI5p6cICDlupTor6XmmK/opoHniIbngrjlkI7po57mmJ/mmJ/nibnmlYhcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5nZXQocm93QW5kQ29sLnJvdykuZ2V0KHJvd0FuZENvbC5jb2x1bW4pO1xuICAgICAgICAgICAgaXRlbS5wbGF5Q2hvb3NlKCk7XG4gICAgICAgICAgICBzY29yZSArPSBpdGVtLm1vZGVsLmRhdGEuc2NvcmVcbiAgICAgICAgICAgIHN0YXJEYXRhQXJyW3Jvd0FuZENvbC5yb3ddW3Jvd0FuZENvbC5jb2x1bW5dID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHdlZW5JdGVtID0gY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcm93QW5kQ29sID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgLy/mkq3mlL7niIbngrjmlYjmnpwgIOW6lOivpeaYr+imgeeIhueCuOWQjumjnuaYn+aYn+eJueaViFxuICAgICAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgnZ2V0TW9uZXknKTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5nZXQocm93QW5kQ29sLnJvdykuZ2V0KHJvd0FuZENvbC5jb2x1bW4pO1xuICAgICAgICAgICAgdHdlZW5JdGVtLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY3VyU2NvcmUgKz0gaXRlbS5tb2RlbC5kYXRhLnNjb3JlXG4gICAgICAgICAgICAgICAgaXRlbS5wbGF5RXhwbG9kZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QmFyVmlldygpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVN0YXJ0QW5pKGl0ZW0ubm9kZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmRlbGF5KDAuMDIpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50SGF2ZSA9IHRoaXMuZ2V0SGF2ZUNvdW50KClcbiAgICAgICAgdHdlZW5JdGVtLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UmV3YXJkKHNjb3JlKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudEhhdmUgPD0gMSkgey8v5aaC5p6c5a6M5oiQ5LqG5ri45oiPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2luR2FtZShjb3VudEhhdmUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QmxvY2soc3RhckRhdGFBcnIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC44KVxuICAgICAgICB9KS5zdGFydCgpXG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheVN0YXJ0QW5pKG5vZGVUZW1wOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBpdGVtTm9kZSA9IGMyZi51dGlscy52aWV3Lmluc3RhbnRpYXRlTVZDUHJlZmFiKHRoaXMubW9kZWwuc3RhcnRJdGVtLCB0aGlzLnZpZXcuY29udGVudCk7XG4gICAgICAgIHRoaXMudmlldy5jb250ZW50LmFkZENoaWxkKGl0ZW1Ob2RlKVxuICAgICAgICBsZXQgc3Rhckl0ZW0gPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoU3RhcnRJdGVtKVxuICAgICAgICBzdGFySXRlbS5wbGF5QW5pKClcbiAgICAgICAgaXRlbU5vZGUuc2V0UG9zaXRpb24obm9kZVRlbXAucG9zaXRpb24pXG5cbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSB0aGlzLnZpZXcuZW5kUG9zLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy52aWV3LmVuZFBvcy5wb3NpdGlvbik7XG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLnZpZXcuY29udGVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvaW50KTtcbiAgICAgICAgbGV0IGNvbmZpZzogVUlQYS5Nb3ZlQ29uZmlnID0ge1xuICAgICAgICAgICAgc3RhcnRQb3M6IG5vZGVUZW1wLnBvc2l0aW9uLFxuICAgICAgICAgICAgZW5kUG9zOiBlbmRQb3MsXG4gICAgICAgIH1cbiAgICAgICAgVUlIZWxwZXIuY3JlYXRlQmV6aWVyKGl0ZW1Ob2RlLCBjb25maWcpXG4gICAgICAgIGNjLnR3ZWVuKGl0ZW1Ob2RlKS50bygwLjgsIHt9LCBVSUhlbHBlci5jcmVhdGVCZXppZXIoaXRlbU5vZGUsIGNvbmZpZykpLmRlbGF5KDAuMikuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtTm9kZS5kZXN0cm95KClcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzaG93UmV3YXJkKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdCgnc2VsZWN0Jyk7XG4gICAgICAgIGlmIChzY29yZSA+IDQwMCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5V2luQnlJbmRleCg1KVxuICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID4gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlXaW5CeUluZGV4KDQpXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPiAxMDApIHtcbiAgICAgICAgICAgIHRoaXMucGxheVdpbkJ5SW5kZXgoMylcbiAgICAgICAgfSBlbHNlIGlmIChzY29yZSA+IDUwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlXaW5CeUluZGV4KDIpXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPiAyMCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5V2luQnlJbmRleCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5V2luQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoJ3Jld2FyZF8nICsgaW5kZXgpO1xuICAgICAgICB0aGlzLnZpZXcucmV3YXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudmlldy5yZXdhcmQuc2V0U2NhbGUoMC44KVxuICAgICAgICB0aGlzLnZpZXcucmV3YXJkLm9wYWNpdHkgPSAxMjBcbiAgICAgICAgYzJmLnV0aWxzLnZpZXcuY2hhbmdlU3ByaXRlRnJhbWUodGhpcy52aWV3LnJld2FyZFNwcml0ZSwgR2FtZUNvbnN0cy5SZXNVcmwuZGVzU3RhciArICdyZXdhcmRfJyArIGluZGV4KVxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy52aWV3LnJld2FyZClcbiAgICAgICAgY2MudHdlZW4odGhpcy52aWV3LnJld2FyZCkudG8oMC4zLCB7IHNjYWxlOiAxLjggfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLnZpZXcucmV3YXJkKS50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LnJld2FyZC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGlja0l0ZW1DYihkYXRhOiBVSVBhLkRlc1N0YXJJdGVtQXJncykge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNBY3Rpb25SdW5uaW5nKSB7XG4gICAgICAgICAgICBVSUhlbHBlci5wbGF5RWZmZWN0KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuaXNBY3Rpb25SdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubW9kZWwuZmluZFNhbWVTdGFySW5kZXgoZGF0YS5yb3csIGRhdGEuY29sdW1uKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJEYXRhQXJyID0gdGhpcy5tb2RlbC5zdGFyRGF0YUFycjtcbiAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlRmluYWwocmVzdWx0LCBzdGFyRGF0YUFycilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5pc0FjdGlvblJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0Jsb2NrKHN0YXJEYXRhQXJyOiBudW1iZXJbXVtdKSB7XG4gICAgICAgIC8vIOWFiOaVtOS9k+W+gOS4i++8jOWGjeW+gOW3plxuICAgICAgICBjb25zdCBzdGFyTW92ZURhdGE6IFVJUGEuTW92ZURhdGFbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDEwOyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMTA7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdGFyRGF0YUFycltyXVtjXSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm93VG9wID0gciArIDE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChyb3dUb3AgPCAxMCAmJiBzdGFyRGF0YUFycltyb3dUb3BdW2NdID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUb3AgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocm93VG9wIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJEYXRhQXJyW3JdW2NdID0gc3RhckRhdGFBcnJbcm93VG9wXVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJEYXRhQXJyW3Jvd1RvcF1bY10gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRGF0YUl0ZW06IFVJUGEuTW92ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVJvdzogcm93VG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Db2w6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Sb3c6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db2w6IGNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJNb3ZlRGF0YS5wdXNoKG1vdmVEYXRhSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzQ29sRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDg7IGMgPiAtMTsgYy0tKSB7XG4gICAgICAgICAgICBpc0NvbEVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgMTA7IHIrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdGFyRGF0YUFycltyXVtjXSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NvbEVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NvbEVtcHR5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmV3Q29sID0gYyArIDE7IG5ld0NvbCA8IDEwOyBuZXdDb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDEwOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJEYXRhQXJyW3JdW25ld0NvbCAtIDFdID0gc3RhckRhdGFBcnJbcl1bbmV3Q29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJEYXRhQXJyW3JdW25ld0NvbF0gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4jeetieS6ji0x77yM5omN5pyJ56e75Yqo55qE6ZyA5rGCXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhckRhdGFBcnJbcl1bbmV3Q29sIC0gMV0gIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFyTW92ZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJNb3ZlRGF0YVtpXS50b1JvdyA9PSByICYmIHN0YXJNb3ZlRGF0YVtpXS50b0NvbCA9PSBuZXdDb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJNb3ZlRGF0YVtpXS50b1JvdyA9IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFyTW92ZURhdGFbaV0udG9Db2wgPSBuZXdDb2wgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rhck1vdmVEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVJvdzogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Db2w6IG5ld0NvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvUm93OiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db2w6IG5ld0NvbCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJNb3ZlRGF0YUxlbmd0aCA9IHN0YXJNb3ZlRGF0YS5sZW5ndGg7XG4gICAgICAgIGlmIChzdGFyTW92ZURhdGFMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFyTW92ZURhdGFMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlRGF0YSA9IHN0YXJNb3ZlRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBhY3Rpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5nZXQobW92ZURhdGEuZnJvbVJvdykuZ2V0KG1vdmVEYXRhLmZyb21Db2wpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0ubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogdGhpcy5tb2RlbC5nZXRTdGFyUG9zaXRpb24obW92ZURhdGEudG9Sb3csIG1vdmVEYXRhLnRvQ29sKSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLS1hY3Rpb25Db3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/miYDmnInlhYPntKDph43nva7kuIvkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmlzQWN0aW9uUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuaXNBY3Rpb25SdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSByZXNldFZpZXcoKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluaXRQb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0U3RhclBvc2l0aW9uKHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubW9kZWwuc3Rhckl0ZW1NYXAuZ2V0KHJvdykuZ2V0KGNvbHVtbik7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVJdGVtID0gaXRlbS5ub2RlXG4gICAgICAgICAgICAgICAgbm9kZUl0ZW0ubmFtZSA9IGBibG9jayR7Y29sdW1ufV8ke3Jvd31gXG4gICAgICAgICAgICAgICAgbm9kZUl0ZW0uc2V0UG9zaXRpb24oaW5pdFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwID0gdGhpcy5tb2RlbC5zdGFyRGF0YUFycltyb3ddW2NvbHVtbl1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBVSVBhLlN0YXJJdGVtRGF0YVt0eXBdXG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBcIlwiXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gaXRlbURhdGEuc2NvcmVcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gaXRlbURhdGEudXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkYXRhSXRlbTogVUlQYS5EZXNTdGFySXRlbUFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cDogdHlwLFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICAgICAgICAgIGNiRnVuOiB0aGlzLmNsaWNrSXRlbUNiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SW5pdChkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50SGF2ZSA9IHRoaXMuZ2V0SGF2ZUNvdW50KClcbiAgICAgICAgaWYgKGNvdW50SGF2ZSA8PSAxKSB7Ly/lpoLmnpzlrozmiJDkuobmuLjmiI9cbiAgICAgICAgICAgIHRoaXMud2luR2FtZShjb3VudEhhdmUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIYXZlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1heENvdW50ID0gMFxuICAgICAgICAvL+acgOWkmueahOWPquacieS4gOS4queahOaXtuWAmeS5n+mcgOimgeWujOaIkFxuICAgICAgICBsZXQgbWFwSXRlbTogTWFwPG51bWJlciwgbnVtYmVyPiA9IG5ldyBNYXAoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwuc3RhckRhdGFBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLm1vZGVsLnN0YXJEYXRhQXJyW2ldXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCB0eXAgPSByb3dbal1cbiAgICAgICAgICAgICAgICBpZiAodHlwID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBtYXBJdGVtLmdldCh0eXApXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ291bnQgPSBpdGVtICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwSXRlbS5zZXQodHlwLCBjdXJDb3VudClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcEl0ZW0uc2V0KHR5cCwgMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXBJdGVtLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBpZiAodiA+IG1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSB2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF4Q291bnRcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpbkdhbWUoY291bnQ6IG51bWJlcikge1xuICAgICAgICBpZiAoY291bnQgPT0gMSkgey8v5Y2V54us54iG54K4XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cCA9IHRoaXMubW9kZWwuc3RhckRhdGFBcnJbcm93XVtjb2x1bW5dXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tb2RlbC5zdGFySXRlbU1hcC5nZXQocm93KS5nZXQoY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY3VyU2NvcmUgKz0gaXRlbS5tb2RlbC5kYXRhLnNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBsYXlDaG9vc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGxheUV4cGxvZGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QmFyVmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5U3RhcnRBbmkoaXRlbS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbnRlck5leHRMdigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVudGVyTmV4dEx2KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGVudGVyTmV4dEx2KCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmN1ckx2KytcbiAgICAgICAgICAgIGMyZi5zdG9yYWdlLnNldE51bWJlcihHYW1lQ29uc3RzLlN0b3JhZ2VLZXkuY3VyTHYsIHRoaXMubW9kZWwuY3VyTHYpXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmdldERhdGFCeUx2KHRoaXMubW9kZWwuY3VyTHYpXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXG4gICAgICAgIH0sIDEpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEdhbWUoKSB7XG4gICAgICAgIHRoaXMudmlldy5yZXdhcmQuYWN0aXZlID0gZmFsc2VcbiAgICB9XG5cbn0iXX0=