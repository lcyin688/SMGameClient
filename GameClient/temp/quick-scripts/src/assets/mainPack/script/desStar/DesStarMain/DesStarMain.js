"use strict";
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