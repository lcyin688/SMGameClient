
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/BoomItem/BoomItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1335cAU0+dASbgmfNko4tgU', 'BoomItemView');
// mainPack/script/physics2048/BoomItem/BoomItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoomItemView.ts .
// If you need add data, please write in BoomItemViewModel.ts .
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
var UIPanelBase_1 = require("./../../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoomItemView = /** @class */ (function (_super) {
    __extends(BoomItemView, _super);
    function BoomItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BoomItem';
        _this.boom4Sprite = undefined;
        _this.move1Sprite = undefined;
        return _this;
    }
    BoomItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoomItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoomItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoomItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.boom4 = this.get('_boom4_');
        this.boom4Sprite = this.boom4.getComponent(cc.Sprite);
        this.move1 = this.get('_move1_');
        this.move1Sprite = this.move1.getComponent(cc.Sprite);
    };
    BoomItemView.prototype.addEvent = function () {
    };
    BoomItemView.prototype.removeEvent = function () {
    };
    BoomItemView = __decorate([
        ccclass
    ], BoomItemView);
    return BoomItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = BoomItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvQm9vbUl0ZW0vQm9vbUl0ZW1WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELGlGQUFnRjtBQUUxRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBVztJQUFyRDtRQUFBLHFFQThDQztRQTdDRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFlBQVksQ0FBQztRQUcxQixpQkFBVyxHQUFjLFNBQVMsQ0FBQztRQUVuQyxpQkFBVyxHQUFjLFNBQVMsQ0FBQzs7SUF1QzlDLENBQUM7SUFwQ1UsNkJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG1DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRU8sK0JBQVEsR0FBaEI7SUFFQSxDQUFDO0lBRU8sa0NBQVcsR0FBbkI7SUFFQSxDQUFDO0lBM0NnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOENoQztJQUFELG1CQUFDO0NBOUNELEFBOENDLENBOUN5Qyx5QkFBVyxHQThDcEQ7a0JBOUNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEJvb21JdGVtVmlldy50cyAuXG4vLyBJZiB5b3UgbmVlZCBhZGQgZGF0YSwgcGxlYXNlIHdyaXRlIGluIEJvb21JdGVtVmlld01vZGVsLnRzIC5cblxuaW1wb3J0IHsgVUlQYW5lbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUGFuZWxCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29tSXRlbVZpZXcgZXh0ZW5kcyBVSVBhbmVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0Jvb21JdGVtJztcblxuICAgIHB1YmxpYyBib29tNDogY2MuTm9kZTtcbiAgICBwdWJsaWMgYm9vbTRTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgbW92ZTE6IGNjLk5vZGU7XG4gICAgcHVibGljIG1vdmUxU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgXG5cbiAgICBwdWJsaWMgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH0gXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFByb3BlcnR5KCkge1xuICAgICAgICBzdXBlci5pbml0UHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5ib29tNCA9IHRoaXMuZ2V0KCdfYm9vbTRfJyk7XG4gICAgICAgIHRoaXMuYm9vbTRTcHJpdGUgPSB0aGlzLmJvb200LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLm1vdmUxID0gdGhpcy5nZXQoJ19tb3ZlMV8nKTtcbiAgICAgICAgdGhpcy5tb3ZlMVNwcml0ZSA9IHRoaXMubW92ZTEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuXG4gICAgfVxuXG5cbn0iXX0=