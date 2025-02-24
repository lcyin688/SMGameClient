
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/StartItem/StartItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3da7SJ0yZEKrKOW8kS/SfZ', 'StartItemView');
// mainPack/script/desStar/StartItem/StartItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in StartItemView.ts .
// If you need add data, please write in StartItemViewModel.ts .
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
var StartItemView = /** @class */ (function (_super) {
    __extends(StartItemView, _super);
    function StartItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_StartItem';
        _this.skeSkeleton = undefined;
        return _this;
    }
    StartItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StartItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    StartItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    StartItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.ske = this.get('_ske_');
        this.skeSkeleton = this.ske.getComponent(sp.Skeleton);
    };
    StartItemView.prototype.addEvent = function () {
    };
    StartItemView.prototype.removeEvent = function () {
    };
    StartItemView = __decorate([
        ccclass
    ], StartItemView);
    return StartItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = StartItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9TdGFydEl0ZW0vU3RhcnRJdGVtVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCxnRUFBZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMkMsaUNBQVc7SUFBdEQ7UUFBQSxxRUEwQ0M7UUF6Q0csZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxhQUFhLENBQUM7UUFHM0IsaUJBQVcsR0FBZ0IsU0FBUyxDQUFDOztJQXFDaEQsQ0FBQztJQWxDVSw4QkFBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsb0NBQVksR0FBdEI7UUFDSSxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVPLG1DQUFXLEdBQW5CO0lBRUEsQ0FBQztJQXZDZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBDakM7SUFBRCxvQkFBQztDQTFDRCxBQTBDQyxDQTFDMEMseUJBQVcsR0EwQ3JEO2tCQTFDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBTdGFydEl0ZW1WaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gU3RhcnRJdGVtVmlld01vZGVsLnRzIC5cblxuaW1wb3J0IHsgVUlQYW5lbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUGFuZWxCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEl0ZW1WaWV3IGV4dGVuZHMgVUlQYW5lbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnUF9TdGFydEl0ZW0nO1xuXG4gICAgcHVibGljIHNrZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgc2tlU2tlbGV0b246IHNwLlNrZWxldG9uID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuc2tlID0gdGhpcy5nZXQoJ19za2VfJyk7XG4gICAgICAgIHRoaXMuc2tlU2tlbGV0b24gPSB0aGlzLnNrZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcblxuICAgIH1cblxuXG59Il19