
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIVControlBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdee1QtJdNNxoCazpbvRPlN', 'UIVControlBase');
// c2f-framework/gui/layer/UIVControlBase.ts

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
exports.UIVControlBase = void 0;
var UIBase_1 = require("./UIBase");
var C2FEnum_1 = require("../../define/C2FEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIVControlBase = /** @class */ (function (_super) {
    __extends(UIVControlBase, _super);
    function UIVControlBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIVControlBase.prototype.onEnable = function () {
        this.on(C2FEnum_1.C2FEnum.Event.PopViewInAnimaCmpl, this.onInAnimaComplete, this);
    };
    UIVControlBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.offAll();
    };
    UIVControlBase.prototype.onDestroy = function () {
        this.model = null;
        this.view = null;
        _super.prototype.onDestroy.call(this);
    };
    /** 关闭本窗口 */
    UIVControlBase.prototype.closeView = function (releaseAll) {
        if (releaseAll === void 0) { releaseAll = true; }
        c2f.gui.removeByNode(this.node);
        if (releaseAll) {
            c2f.res.delayReleaseAll();
        }
    };
    /** 入场动画完成 */
    UIVControlBase.prototype.onInAnimaComplete = function () {
    };
    UIVControlBase = __decorate([
        ccclass
    ], UIVControlBase);
    return UIVControlBase;
}(UIBase_1.UIBase));
exports.UIVControlBase = UIVControlBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZDb250cm9sQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQWtDO0FBRWxDLGdEQUErQztBQUV6QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFvQyxrQ0FBTTtJQUExQzs7SUFvQ0EsQ0FBQztJQTdCYSxpQ0FBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFUyxrQ0FBUyxHQUFuQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxrQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZO0lBQ0wsa0NBQVMsR0FBaEIsVUFBaUIsVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxFQUFFO1lBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCxhQUFhO0lBQ04sMENBQWlCLEdBQXhCO0lBRUEsQ0FBQztJQW5DUSxjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBb0MxQjtJQUFELHFCQUFDO0NBcENELEFBb0NDLENBcENtQyxlQUFNLEdBb0N6QztBQXBDWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJTW9kZWxCYXNlIH0gZnJvbSAnLi9VSU1vZGVsQmFzZSc7XG5pbXBvcnQgeyBVSUJhc2UgfSBmcm9tICcuL1VJQmFzZSc7XG5pbXBvcnQgeyBVSVZpZXdCYXNlIH0gZnJvbSAnLi9VSVZpZXdCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLi8uLi9kZWZpbmUvQzJGRW51bSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFVJVkNvbnRyb2xCYXNlIGV4dGVuZHMgVUlCYXNlIHtcblxuICAgIC8v5pWw5o2u5a+56LGhXG4gICAgcHVibGljIG1vZGVsOiBVSU1vZGVsQmFzZTtcbiAgICAvL+inhuWbvuWvueixoVxuICAgIHB1YmxpYyB2aWV3OiBVSVZpZXdCYXNlO1xuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uKEMyRkVudW0uRXZlbnQuUG9wVmlld0luQW5pbWFDbXBsLCB0aGlzLm9uSW5BbmltYUNvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZkFsbCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKiog5YWz6Zet5pys56qX5Y+jICovXG4gICAgcHVibGljIGNsb3NlVmlldyhyZWxlYXNlQWxsOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBjMmYuZ3VpLnJlbW92ZUJ5Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBpZiAocmVsZWFzZUFsbCkge1xuICAgICAgICAgICAgYzJmLnJlcy5kZWxheVJlbGVhc2VBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlhaXlnLrliqjnlLvlrozmiJAgKi9cbiAgICBwdWJsaWMgb25JbkFuaW1hQ29tcGxldGUoKSB7XG5cbiAgICB9XG59XG4iXX0=