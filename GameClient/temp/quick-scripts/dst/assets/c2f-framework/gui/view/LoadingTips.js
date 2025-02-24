
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/view/LoadingTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26c3ar7sklOKojlqGeXtPBt', 'LoadingTips');
// c2f-framework/gui/view/LoadingTips.ts

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
exports.LoadingTips = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 加载延时提示动画 */
var LoadingTips = /** @class */ (function (_super) {
    __extends(LoadingTips, _super);
    function LoadingTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.angle = 0;
        return _this;
    }
    LoadingTips.prototype.update = function (dt) {
        this.angle += dt * 220;
        this.loading.angle = this.angle % 360;
        if (this.angle > 360) {
            this.angle -= 360;
        }
    };
    __decorate([
        property(cc.Node)
    ], LoadingTips.prototype, "loading", void 0);
    LoadingTips = __decorate([
        ccclass
    ], LoadingTips);
    return LoadingTips;
}(cc.Component));
exports.LoadingTips = LoadingTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS92aWV3L0xvYWRpbmdUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxlQUFlO0FBRWY7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUFhQztRQVhXLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBUzlCLENBQUM7SUFQRyw0QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQVZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ3FCO0lBRjlCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQWJELEFBYUMsQ0FiZ0MsRUFBRSxDQUFDLFNBQVMsR0FhNUM7QUFiWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDliqDovb3lu7bml7bmj5DnpLrliqjnlLsgKi9cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTG9hZGluZ1RpcHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbG9hZGluZzogY2MuTm9kZSB8IG51bGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBhbmdsZTogbnVtYmVyID0gMDtcblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZHQgKiAyMjA7XG4gICAgICAgIHRoaXMubG9hZGluZyEuYW5nbGUgPSB0aGlzLmFuZ2xlICUgMzYwO1xuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAtPSAzNjA7XG4gICAgICAgIH1cbiAgICB9XG59Il19