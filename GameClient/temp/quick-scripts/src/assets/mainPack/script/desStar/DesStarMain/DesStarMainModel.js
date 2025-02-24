"use strict";
cc._RF.push(module, '444f5lwxEpEnavEyUp87+7t', 'DesStarMainModel');
// mainPack/script/desStar/DesStarMain/DesStarMainModel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var UIParam_1 = require("../../../../Script/game/UIParam");
var StarCfg_1 = require("../StarCfg");
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DesStarMainModel = /** @class */ (function (_super) {
    __extends(DesStarMainModel, _super);
    function DesStarMainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_DesStarMain';
        return _this;
    }
    DesStarMainModel.prototype.initData = function () {
        this.blockTotalNum = 8;
        this.curLv = c2f.storage.getNumber(GameConsts_1.GameConsts.StorageKey.curLv);
        this.visibleSize = cc.view.getVisibleSize();
        this.getDataByLv(this.curLv);
        // this.getCfgStr()
    };
    DesStarMainModel.prototype.getDataByLv = function (lv) {
        this.starDataArr = this.getStarDataArr(lv);
        this.curScore = 0;
        this.totalShowScore = 0;
        var scorTotal = 0;
        this.starDataArr.forEach(function (vv) {
            vv.forEach(function (v) {
                var item = UIParam_1.UIPa.StarItemData[v];
                scorTotal += item.score;
            });
        });
        this.totalShowScore = Math.ceil(scorTotal * 0.8);
    };
    DesStarMainModel.prototype.getStarDataArr = function (lv) {
        var arr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        if (StarCfg_1.StarCfg[lv]) {
            for (var col = 0; col < 10; col++) {
                for (var row = 0; row < 10; row++) {
                    arr[col][row] = StarCfg_1.StarCfg[lv][col][row];
                }
            }
            return arr;
        }
        else {
            return this.getStarLvData(arr);
        }
    };
    DesStarMainModel.prototype.getStarLvData = function (arr) {
        var numArr = this.getRandomInt(0, this.blockTotalNum, 2);
        for (var col = 0; col < 10; col++) {
            for (var row = 0; row < 10; row++) {
                var num = c2f.random.getRandomInt(0, 10, 1);
                if (num > 5) {
                    arr[col][row] = numArr[0];
                }
                else {
                    arr[col][row] = numArr[1];
                }
            }
        }
        return arr;
    };
    DesStarMainModel.prototype.getRandomInt = function (min, max, count) {
        var result = [];
        var range = max - min + 1;
        var usedNumbers = new Map();
        while (result.length < count) {
            var randomNum = Math.floor(Math.random() * range) + min;
            if (!usedNumbers.has(randomNum)) {
                usedNumbers.set(randomNum, randomNum);
                result.push(randomNum);
            }
        }
        return result;
    };
    DesStarMainModel.prototype.getStarPosition = function (column, row) {
        var w = UIParam_1.UIPa.DesStarGameArgs.width;
        var h = UIParam_1.UIPa.DesStarGameArgs.heigh;
        var x = (row + 1 / 2) * w;
        var y = (column + 1 / 2) * h;
        return new cc.Vec3(x, y);
    };
    DesStarMainModel.prototype.findSameStarIndex = function (row, col, checkedRowAndCol, result) {
        if (row < 0 || col < 0 || row > 9 || col > 9)
            return [];
        var targetValue = this.starDataArr[row][col];
        if (targetValue == -1)
            return [];
        if (!checkedRowAndCol)
            checkedRowAndCol = [{ row: row, column: col }];
        else {
            for (var i = 0; i < checkedRowAndCol.length; i++) {
                if (checkedRowAndCol[i].row == row && checkedRowAndCol[i].column == col) {
                    return [];
                }
            }
            checkedRowAndCol.push({ row: row, column: col });
        }
        if (!result)
            result = [];
        // 先找上边
        if (row < 9) {
            if (this.starDataArr[row + 1][col] == targetValue) {
                this.putIndexTo(result, row + 1, col);
                this.findSameStarIndex(row + 1, col, checkedRowAndCol, result);
            }
        }
        /**找下边 */
        if (row > 0) {
            if (this.starDataArr[row - 1][col] == targetValue) {
                this.putIndexTo(result, row - 1, col);
                this.findSameStarIndex(row - 1, col, checkedRowAndCol, result);
            }
        }
        // 再找右边
        if (col < 9) {
            if (this.starDataArr[row][col + 1] == targetValue) {
                this.putIndexTo(result, row, col + 1);
                this.findSameStarIndex(row, col + 1, checkedRowAndCol, result);
            }
        }
        // 再找左边
        if (col > 0) {
            if (this.starDataArr[row][col - 1] == targetValue) {
                this.putIndexTo(result, row, col - 1);
                this.findSameStarIndex(row, col - 1, checkedRowAndCol, result);
            }
        }
        return result;
    };
    /** 满足条件并且没有添加过就加入 */
    DesStarMainModel.prototype.putIndexTo = function (baseArr, row, col) {
        for (var i = 0; i < baseArr.length; i++) {
            if (baseArr[i].row == row && baseArr[i].column == col)
                return;
        }
        baseArr.push({ row: row, column: col });
    };
    DesStarMainModel = __decorate([
        ccclass
    ], DesStarMainModel);
    return DesStarMainModel;
}(UIModelBase_1.UIModelBase));
exports.default = DesStarMainModel;

cc._RF.pop();