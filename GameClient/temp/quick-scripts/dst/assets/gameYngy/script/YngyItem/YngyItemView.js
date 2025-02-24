
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyItem/YngyItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff0f4LJ3E5HPod0F6euAqys', 'YngyItemView');
// gameYngy/script/YngyItem/YngyItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyItemView.ts .
// If you need add data, please write in YngyItemViewModel.ts .
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
var UIPanelBase_1 = require("./../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyItemView = /** @class */ (function (_super) {
    __extends(YngyItemView, _super);
    function YngyItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_YngyItem';
        _this.iconSprite = undefined;
        _this.iconButton = undefined;
        return _this;
    }
    YngyItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    YngyItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    YngyItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    YngyItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconButton = this.icon.getComponent(cc.Button);
    };
    YngyItemView.prototype.addEvent = function () {
        this.iconButton.node.on('click', this.oniconButtonClick, this);
    };
    YngyItemView.prototype.removeEvent = function () {
        this.iconButton.node.off('click', this.oniconButtonClick, this);
    };
    YngyItemView.prototype.oniconButtonClick = function (component) {
        this.emit('click', component);
    };
    YngyItemView = __decorate([
        ccclass
    ], YngyItemView);
    return YngyItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = YngyItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neUl0ZW0vWW5neUl0ZW1WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELDhFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBVztJQUFyRDtRQUFBLHFFQWtEQztRQWpERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFlBQVksQ0FBQztRQUcxQixnQkFBVSxHQUFjLFNBQVMsQ0FBQztRQUNsQyxnQkFBVSxHQUFjLFNBQVMsQ0FBQzs7SUE0QzdDLENBQUM7SUF6Q1UsNkJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG1DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhELENBQUM7SUFFTywrQkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXBFLENBQUM7SUFFTyx3Q0FBaUIsR0FBekIsVUFBMEIsU0FBb0I7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQS9DZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWtEaEM7SUFBRCxtQkFBQztDQWxERCxBQWtEQyxDQWxEeUMseUJBQVcsR0FrRHBEO2tCQWxEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBZbmd5SXRlbVZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBZbmd5SXRlbVZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJUGFuZWxCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBhbmVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW5neUl0ZW1WaWV3IGV4dGVuZHMgVUlQYW5lbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnUF9Zbmd5SXRlbSc7XG5cbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBpY29uQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgXG5cbiAgICBwdWJsaWMgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH0gXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFByb3BlcnR5KCkge1xuICAgICAgICBzdXBlci5pbml0UHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5nZXQoJ19pY29uXycpO1xuICAgICAgICB0aGlzLmljb25TcHJpdGUgPSB0aGlzLmljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuaWNvbkJ1dHRvbiA9IHRoaXMuaWNvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5pY29uQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmljb25CdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmljb25CdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmljb25CdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uaWNvbkJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19