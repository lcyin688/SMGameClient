
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreateMain/MapCreateMainModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0ZU1haW4vTWFwQ3JlYXRlTWFpbk1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF1RDtBQUV2RCxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0Qsc0NBQVc7SUFBM0Q7UUFBQSxxRUFrREM7UUFqREcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7SUFnRDFDLENBQUM7SUExQ1UsNENBQWUsR0FBdEIsVUFBdUIsS0FBYTtRQUNoQyxJQUFJLEdBQUcsR0FBZTtZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQyxDQUFDO1FBQ0YsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQixLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFBO2FBQzNCO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFFTSxxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDeEMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN6QjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxHQUFXO1FBQzlDLElBQU0sQ0FBQyxHQUFHLGNBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQU0sQ0FBQyxHQUFHLGNBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWpEZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FrRHRDO0lBQUQseUJBQUM7Q0FsREQsQUFrREMsQ0FsRCtDLHlCQUFXLEdBa0QxRDtrQkFsRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJUGEgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSVBhcmFtJztcbmltcG9ydCBNYXBDcmVhdEl0ZW0gZnJvbSAnLi4vTWFwQ3JlYXRJdGVtL01hcENyZWF0SXRlbSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENyZWF0ZU1haW5Nb2RlbCBleHRlbmRzIFVJTW9kZWxCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfTWFwQ3JlYXRlTWFpbic7XG4gICAgcHVibGljIGN1clNlbGVjdDogc3RyaW5nO1xuICAgIHB1YmxpYyBzdGFyRGF0YUFycjogbnVtYmVyW11bXVxuICAgIHB1YmxpYyBjdXJMdjogbnVtYmVyXG4gICAgcHVibGljIGJsb2NrSXRlbTogY2MuUHJlZmFiO1xuICAgIHB1YmxpYyBzdGFySXRlbU1hcDogTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwQ3JlYXRJdGVtPj5cbiAgICBwdWJsaWMgaW5pdFN0YXJEYXRhQXJyKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW11bXSA9IFtcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbcm93XVtjb2x1bW5dID0gaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgcHVibGljIGluaXREYXRhKCkge1xuICAgICAgICBsZXQgY3VySW5kZXggPSB0aGlzLmdldEN1ckluZGV4KClcbiAgICAgICAgdGhpcy5zdGFyRGF0YUFyciA9IHRoaXMuaW5pdFN0YXJEYXRhQXJyKGN1ckluZGV4KVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDdXJJbmRleCgpIHtcbiAgICAgICAgbGV0IGN1ciA9IDBcbiAgICAgICAgaWYgKHRoaXMuY3VyU2VsZWN0KSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5jdXJTZWxlY3Quc3BsaXQoXCJ0b2dnbGVcIilcbiAgICAgICAgICAgIGN1ciA9IHBhcnNlSW50KGFyclsxXSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyXG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXJQb3NpdGlvbihjb2x1bW46IG51bWJlciwgcm93OiBudW1iZXIpOiBjYy5WZWMzIHtcbiAgICAgICAgY29uc3QgdyA9IFVJUGEuRGVzU3RhckdhbWVBcmdzLndpZHRoO1xuICAgICAgICBjb25zdCBoID0gVUlQYS5EZXNTdGFyR2FtZUFyZ3MuaGVpZ2g7XG4gICAgICAgIGxldCB4ID0gKHJvdyArIDEgLyAyKSAqIHdcbiAgICAgICAgbGV0IHkgPSAoY29sdW1uICsgMSAvIDIpICogaFxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCwgeSk7XG4gICAgfVxufSJdfQ==