
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLogo/GameLogoView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c83cJ6cABH9arCAD286PkG', 'GameLogoView');
// entrance/script/GameLogo/GameLogoView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLogoView.ts .
// If you need add data, please write in GameLogoViewModel.ts .
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
var UIViewBase_1 = require("./../../../c2f-framework/gui/layer/UIViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogoView = /** @class */ (function (_super) {
    __extends(GameLogoView, _super);
    function GameLogoView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogo';
        _this.barSprite = undefined;
        _this.barProgressBar = undefined;
        return _this;
    }
    GameLogoView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLogoView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLogoView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLogoView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
    };
    GameLogoView.prototype.addEvent = function () {
    };
    GameLogoView.prototype.removeEvent = function () {
    };
    GameLogoView = __decorate([
        ccclass
    ], GameLogoView);
    return GameLogoView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLogoView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ28vR2FtZUxvZ29WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELCtEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBVTtJQUFwRDtRQUFBLHFFQTZDQztRQTNDRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFVBQVUsQ0FBQztRQUd4QixlQUFTLEdBQWMsU0FBUyxDQUFDO1FBQ2pDLG9CQUFjLEdBQW1CLFNBQVMsQ0FBQzs7SUFzQ3RELENBQUM7SUFuQ1UsNkJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLG1DQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWhFLENBQUM7SUFFTywrQkFBUSxHQUFoQjtJQUVBLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtJQUVBLENBQUM7SUExQ2dCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2Q2hDO0lBQUQsbUJBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3lDLHVCQUFVLEdBNkNuRDtrQkE3Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWMgZ2VuZXJhdGlvbiwgcGxlYXNlIGRvIG5vdCBlZGl0LlxuLy8gSWYgeW91IG5lZWQgYWRkIGxvZ2ljLCBwbGVhc2Ugd3JpdGUgaW4gR2FtZUxvZ29WaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gR2FtZUxvZ29WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVZpZXdCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZpZXdCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9nb1ZpZXcgZXh0ZW5kcyBVSVZpZXdCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnR2FtZUxvZ28nO1xuXG4gICAgcHVibGljIGJhcjogY2MuTm9kZTtcbiAgICBwdWJsaWMgYmFyU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJhclByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMuZ2V0KCdfYmFyXycpO1xuICAgICAgICB0aGlzLmJhclNwcml0ZSA9IHRoaXMuYmFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmJhclByb2dyZXNzQmFyID0gdGhpcy5iYXIuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG5cbiAgICB9XG5cblxufSJdfQ==