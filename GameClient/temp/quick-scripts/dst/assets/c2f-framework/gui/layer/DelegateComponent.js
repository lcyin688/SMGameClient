
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/DelegateComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fe44B0sbpJrYP0YPEfyOeW', 'DelegateComponent');
// c2f-framework/gui/layer/DelegateComponent.ts

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
exports.DelegateComponent = void 0;
var C2FEnum_1 = require("../../define/C2FEnum");
var ccclass = cc._decorator.ccclass;
/** 窗口事件触发组件 */
var DelegateComponent = /** @class */ (function (_super) {
    __extends(DelegateComponent, _super);
    function DelegateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 视图参数 */
        _this.viewParams = null;
        return _this;
    }
    /** 窗口添加 */
    DelegateComponent.prototype.add = function () {
        // 触发窗口组件上添加到父节点后的事件
        this.parallelApplyComponentsFunction(this.node, "onViewOpen", this.viewParams.params);
        this.parallelApplyComponentsFunction(this.node, "playInAnima", this.viewParams.params);
        if (typeof this.viewParams.callbacks.onUIAdded === "function") {
            this.viewParams.callbacks.onUIAdded(this.node, this.viewParams.params);
        }
        c2f.event.emit(C2FEnum_1.C2FEnum.Event.PopViewAdded, this.node.name);
    };
    /** 删除节点，该方法只能调用一次，将会触发onUIBeforeRemove回调 */
    DelegateComponent.prototype.remove = function (isDestroy) {
        var _this = this;
        if (this.viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.parallelApplyComponentsFunction(this.node, "beforeViewClose", this.viewParams.params);
            this.serialApplyComponentsFunction(this.node, "playOutAnima", this.viewParams.params, function () {
                //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）
                if (typeof _this.viewParams.callbacks.onUIBeforeRemove === "function") {
                    _this.viewParams.callbacks.onUIBeforeRemove(_this.node, function () {
                        _this.removed(_this.viewParams, isDestroy);
                    });
                }
                else {
                    _this.removed(_this.viewParams, isDestroy);
                }
            });
        }
    };
    /** 窗口组件中触发移除事件与释放窗口对象 */
    DelegateComponent.prototype.removed = function (viewParams, isDestroy) {
        viewParams.valid = false;
        if (typeof viewParams.callbacks.onUIRemoved === "function") {
            viewParams.callbacks.onUIRemoved(this.node, viewParams.params);
        }
        if (isDestroy) {
            this.node.destroy();
            //TODO:包名
            c2f.res.release(viewParams.prefabPath, cc.Prefab, viewParams.bundle);
        }
        else {
            this.node.removeFromParent();
        }
        c2f.event.emit(C2FEnum_1.C2FEnum.Event.PopViewRemoved, this.node.name);
    };
    DelegateComponent.prototype.onDestroy = function () {
        // 触发窗口组件上窗口移除之后的事件
        this.parallelApplyComponentsFunction(this.node, "onUIDestroy", this.viewParams.params);
        // 通知外部对象窗口移除之后的事件
        if (typeof this.viewParams.callbacks.onUIDestroy === "function") {
            this.viewParams.callbacks.onUIDestroy(this.node, this.viewParams.params);
        }
        this.viewParams = null;
    };
    //并行执行
    DelegateComponent.prototype.parallelApplyComponentsFunction = function (node, funName, params) {
        var allComps = node['_components'];
        for (var i = 0; i < allComps.length; i++) {
            var component = allComps[i];
            var func = component[funName];
            if (func) {
                func.call(component, params);
            }
        }
    };
    //依次执行
    DelegateComponent.prototype.serialApplyComponentsFunction = function (node, funName, params, endCb) {
        var idx = 0;
        var applyOnce = function () {
            var allComps = node['_components'];
            if (idx >= allComps.length) {
                endCb && endCb();
            }
            else {
                var component = allComps[idx];
                var func = component[funName];
                if (func) {
                    func.call(component, params, function () {
                        idx++;
                        applyOnce();
                    });
                }
                else {
                    idx++;
                    applyOnce();
                }
            }
        };
        applyOnce();
    };
    DelegateComponent = __decorate([
        ccclass
    ], DelegateComponent);
    return DelegateComponent;
}(cc.Component));
exports.DelegateComponent = DelegateComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9EZWxlZ2F0ZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBR3ZDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBRWxDLGVBQWU7QUFFZjtJQUF1QyxxQ0FBWTtJQUFuRDtRQUFBLHFFQXNHQztRQXJHRyxXQUFXO1FBQ1gsZ0JBQVUsR0FBZSxJQUFLLENBQUM7O0lBb0duQyxDQUFDO0lBbEdHLFdBQVc7SUFDSiwrQkFBRyxHQUFWO1FBQ0ksb0JBQW9CO1FBQ3BCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUU7UUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNENBQTRDO0lBQ3JDLGtDQUFNLEdBQWIsVUFBYyxTQUFrQjtRQUFoQyxpQkFrQkM7UUFqQkcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZ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QVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU07SUFDSSx5REFBNkIsR0FBdkMsVUFBd0MsSUFBYSxFQUFFLE9BQWUsRUFBRSxNQUFXLEVBQUUsS0FBZTtRQUNoRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLFNBQVMsR0FBRztZQUNaLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4QixLQUFLLElBQUksS0FBSyxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsSUFBSSxTQUFTLEdBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRTt3QkFDekIsR0FBRyxFQUFFLENBQUM7d0JBQ04sU0FBUyxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFNO29CQUNILEdBQUcsRUFBRSxDQUFDO29CQUNOLFNBQVMsRUFBRSxDQUFDO2lCQUNmO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUFDRCxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBckdRLGlCQUFpQjtRQUQ3QixPQUFPO09BQ0ssaUJBQWlCLENBc0c3QjtJQUFELHdCQUFDO0NBdEdELEFBc0dDLENBdEdzQyxFQUFFLENBQUMsU0FBUyxHQXNHbEQ7QUF0R1ksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGRW51bVwiO1xuaW1wb3J0IHsgVmlld1BhcmFtcyB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGVUlEZWZcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiog56qX5Y+j5LqL5Lu26Kem5Y+R57uE5Lu2ICovXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIERlbGVnYXRlQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiog6KeG5Zu+5Y+C5pWwICovXG4gICAgdmlld1BhcmFtczogVmlld1BhcmFtcyA9IG51bGwhO1xuXG4gICAgLyoqIOeql+WPo+a3u+WKoCAqL1xuICAgIHB1YmxpYyBhZGQoKSB7XG4gICAgICAgIC8vIOinpuWPkeeql+WPo+e7hOS7tuS4iua3u+WKoOWIsOeItuiKgueCueWQjueahOS6i+S7tlxuICAgICAgICB0aGlzLnBhcmFsbGVsQXBwbHlDb21wb25lbnRzRnVuY3Rpb24odGhpcy5ub2RlLCBcIm9uVmlld09wZW5cIiwgdGhpcy52aWV3UGFyYW1zLnBhcmFtcyk7XG4gICAgICAgIHRoaXMucGFyYWxsZWxBcHBseUNvbXBvbmVudHNGdW5jdGlvbih0aGlzLm5vZGUsIFwicGxheUluQW5pbWFcIiwgdGhpcy52aWV3UGFyYW1zLnBhcmFtcyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJQWRkZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy52aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJQWRkZWQodGhpcy5ub2RlLCB0aGlzLnZpZXdQYXJhbXMucGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBjMmYuZXZlbnQuZW1pdChDMkZFbnVtLkV2ZW50LlBvcFZpZXdBZGRlZCwgdGhpcy5ub2RlLm5hbWUpO1xuICAgIH1cblxuICAgIC8qKiDliKDpmaToioLngrnvvIzor6Xmlrnms5Xlj6rog73osIPnlKjkuIDmrKHvvIzlsIbkvJrop6blj5FvblVJQmVmb3JlUmVtb3Zl5Zue6LCDICovXG4gICAgcHVibGljIHJlbW92ZShpc0Rlc3Ryb3k6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1BhcmFtcy52YWxpZCkge1xuICAgICAgICAgICAgLy8g6Kem5Y+R56qX5Y+j57uE5Lu25LiK56e76Zmk5LmL5YmN55qE5LqL5Lu2XG4gICAgICAgICAgICB0aGlzLnBhcmFsbGVsQXBwbHlDb21wb25lbnRzRnVuY3Rpb24odGhpcy5ub2RlLCBcImJlZm9yZVZpZXdDbG9zZVwiLCB0aGlzLnZpZXdQYXJhbXMucGFyYW1zKTtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsQXBwbHlDb21wb25lbnRzRnVuY3Rpb24odGhpcy5ub2RlLCBcInBsYXlPdXRBbmltYVwiLCB0aGlzLnZpZXdQYXJhbXMucGFyYW1zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gIOmAmuefpeWklumDqOWvueixoeeql+WPo+e7hOS7tuS4iuenu+mZpOS5i+WJjeeahOS6i+S7tu+8iOWFs+mXreeql+WPo+WJjeeahOWFs+mXreWKqOeUu+WkhOeQhu+8iVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy52aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJQmVmb3JlUmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJQmVmb3JlUmVtb3ZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZCh0aGlzLnZpZXdQYXJhbXMsIGlzRGVzdHJveSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZCh0aGlzLnZpZXdQYXJhbXMsIGlzRGVzdHJveSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog56qX5Y+j57uE5Lu25Lit6Kem5Y+R56e76Zmk5LqL5Lu25LiO6YeK5pS+56qX5Y+j5a+56LGhICovXG4gICAgcHJpdmF0ZSByZW1vdmVkKHZpZXdQYXJhbXM6IFZpZXdQYXJhbXMsIGlzRGVzdHJveTogYm9vbGVhbikge1xuICAgICAgICB2aWV3UGFyYW1zLnZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3UGFyYW1zLmNhbGxiYWNrcy5vblVJUmVtb3ZlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2aWV3UGFyYW1zLmNhbGxiYWNrcyEub25VSVJlbW92ZWQodGhpcy5ub2RlLCB2aWV3UGFyYW1zLnBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZXN0cm95KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy9UT0RPOuWMheWQjVxuICAgICAgICAgICAgYzJmLnJlcy5yZWxlYXNlKHZpZXdQYXJhbXMucHJlZmFiUGF0aCwgY2MuUHJlZmFiLCB2aWV3UGFyYW1zLmJ1bmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGMyZi5ldmVudC5lbWl0KEMyRkVudW0uRXZlbnQuUG9wVmlld1JlbW92ZWQsIHRoaXMubm9kZS5uYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EZXN0cm95KCkge1xuICAgICAgICAvLyDop6blj5Hnqpflj6Pnu4Tku7bkuIrnqpflj6Pnp7vpmaTkuYvlkI7nmoTkuovku7ZcbiAgICAgICAgdGhpcy5wYXJhbGxlbEFwcGx5Q29tcG9uZW50c0Z1bmN0aW9uKHRoaXMubm9kZSwgXCJvblVJRGVzdHJveVwiLCB0aGlzLnZpZXdQYXJhbXMucGFyYW1zKTtcblxuICAgICAgICAvLyDpgJrnn6XlpJbpg6jlr7nosaHnqpflj6Pnp7vpmaTkuYvlkI7nmoTkuovku7ZcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpZXdQYXJhbXMuY2FsbGJhY2tzIS5vblVJRGVzdHJveSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdQYXJhbXMuY2FsbGJhY2tzIS5vblVJRGVzdHJveSh0aGlzLm5vZGUsIHRoaXMudmlld1BhcmFtcy5wYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3UGFyYW1zID0gbnVsbCE7XG4gICAgfVxuXG4gICAgLy/lubbooYzmiafooYxcbiAgICBwcm90ZWN0ZWQgcGFyYWxsZWxBcHBseUNvbXBvbmVudHNGdW5jdGlvbihub2RlOiBjYy5Ob2RlLCBmdW5OYW1lOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG4gICAgICAgIGNvbnN0IGFsbENvbXBzID0gbm9kZVsnX2NvbXBvbmVudHMnXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDb21wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudDogYW55ID0gYWxsQ29tcHNbaV07XG4gICAgICAgICAgICBsZXQgZnVuYyA9IGNvbXBvbmVudFtmdW5OYW1lXTtcbiAgICAgICAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5jYWxsKGNvbXBvbmVudCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5L6d5qyh5omn6KGMXG4gICAgcHJvdGVjdGVkIHNlcmlhbEFwcGx5Q29tcG9uZW50c0Z1bmN0aW9uKG5vZGU6IGNjLk5vZGUsIGZ1bk5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnksIGVuZENiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgbGV0IGFwcGx5T25jZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbXBzID0gbm9kZVsnX2NvbXBvbmVudHMnXTtcbiAgICAgICAgICAgIGlmIChpZHggPj0gYWxsQ29tcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudDogYW55ID0gYWxsQ29tcHNbaWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgZnVuYyA9IGNvbXBvbmVudFtmdW5OYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZnVuYykge1xuICAgICAgICAgICAgICAgICAgICBmdW5jLmNhbGwoY29tcG9uZW50LCBwYXJhbXMsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICAgICAgICBhcHBseU9uY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXBwbHlPbmNlKCk7XG4gICAgfVxufSJdfQ==