"use strict";
cc._RF.push(module, '152feLlpYNMjYbk4GBa5MlY', 'MapCreateMainModel');
// mainPack/script/mapCreate/MapCreateMain/MapCreateMainModel.ts

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
var UIParam_1 = require("../../../../Script/game/UIParam");
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreateMainModel = /** @class */ (function (_super) {
    __extends(MapCreateMainModel, _super);
    function MapCreateMainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_MapCreateMain';
        return _this;
    }
    MapCreateMainModel.prototype.initStarDataArr = function (index) {
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
        for (var row = 0; row < 10; row++) {
            for (var column = 0; column < 10; column++) {
                arr[row][column] = index;
            }
        }
        return arr;
    };
    MapCreateMainModel.prototype.initData = function () {
        var curIndex = this.getCurIndex();
        this.starDataArr = this.initStarDataArr(curIndex);
    };
    MapCreateMainModel.prototype.getCurIndex = function () {
        var cur = 0;
        if (this.curSelect) {
            var arr = this.curSelect.split("toggle");
            cur = parseInt(arr[1]);
        }
        return cur;
    };
    MapCreateMainModel.prototype.getStarPosition = function (column, row) {
        var w = UIParam_1.UIPa.DesStarGameArgs.width;
        var h = UIParam_1.UIPa.DesStarGameArgs.heigh;
        var x = (row + 1 / 2) * w;
        var y = (column + 1 / 2) * h;
        return new cc.Vec3(x, y);
    };
    MapCreateMainModel = __decorate([
        ccclass
    ], MapCreateMainModel);
    return MapCreateMainModel;
}(UIModelBase_1.UIModelBase));
exports.default = MapCreateMainModel;

cc._RF.pop();