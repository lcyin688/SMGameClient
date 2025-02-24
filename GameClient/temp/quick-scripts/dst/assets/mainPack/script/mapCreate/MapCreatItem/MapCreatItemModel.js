
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/mapCreate/MapCreatItem/MapCreatItemModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c41caUNWIRNZI2IPaLf+gxm', 'MapCreatItemModel');
// mainPack/script/mapCreate/MapCreatItem/MapCreatItemModel.ts

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
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreatItemModel = /** @class */ (function (_super) {
    __extends(MapCreatItemModel, _super);
    function MapCreatItemModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_MapCreatItem';
        return _this;
    }
    MapCreatItemModel.prototype.initData = function (data) {
        this.data = data;
    };
    MapCreatItemModel = __decorate([
        ccclass
    ], MapCreatItemModel);
    return MapCreatItemModel;
}(UIModelBase_1.UIModelBase));
exports.default = MapCreatItemModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvbWFwQ3JlYXRlL01hcENyZWF0SXRlbS9NYXBDcmVhdEl0ZW1Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBK0MscUNBQVc7SUFBMUQ7UUFBQSxxRUFPQztRQU5HLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsZ0JBQWdCLENBQUM7O0lBS3pDLENBQUM7SUFIVSxvQ0FBUSxHQUFmLFVBQWdCLElBQTBCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFOZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FPckM7SUFBRCx3QkFBQztDQVBELEFBT0MsQ0FQOEMseUJBQVcsR0FPekQ7a0JBUG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJUGEgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSVBhcmFtJztcbmltcG9ydCB7IFVJTW9kZWxCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSU1vZGVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ3JlYXRJdGVtTW9kZWwgZXh0ZW5kcyBVSU1vZGVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX01hcENyZWF0SXRlbSc7XG4gICAgcHVibGljIGRhdGE6IFVJUGEuRGVzU3Rhckl0ZW1BcmdzO1xuICAgIHB1YmxpYyBpbml0RGF0YShkYXRhOiBVSVBhLkRlc1N0YXJJdGVtQXJncykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgfVxufSJdfQ==