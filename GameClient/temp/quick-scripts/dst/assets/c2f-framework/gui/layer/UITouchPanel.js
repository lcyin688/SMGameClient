
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UITouchPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab0bd9feZZLVIYDfpi2v2dI', 'UITouchPanel');
// c2f-framework/gui/layer/UITouchPanel.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UITouchPanel = void 0;
var UIPTouchBase_1 = require("./UIPTouchBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UITouchPanel = /** @class */ (function () {
    function UITouchPanel() {
        /** 当前正在拖动的对象 */
        this._moving = null;
        /** 拖动的出发点对象 */
        this._moveFrom = null;
        /** 拖动的拖入点对象 */
        this._moveTo = null;
        /** 可拖动对象 */
        this.arrDragObj = [];
    }
    Object.defineProperty(UITouchPanel.prototype, "createDragObj", {
        get: function () {
            return this._createDragObj;
        },
        set: function (v) {
            this._createDragObj = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "exchangeDragObj", {
        get: function () {
            return this._exchangeDragObj;
        },
        set: function (v) {
            this._exchangeDragObj = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moving", {
        get: function () {
            return this._moving;
        },
        set: function (v) {
            this._moving = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moveFrom", {
        get: function () {
            return this._moveFrom;
        },
        set: function (v) {
            this._moveFrom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moveTo", {
        get: function () {
            return this._moveTo;
        },
        set: function (v) {
            this._moveTo = v;
        },
        enumerable: false,
        configurable: true
    });
    UITouchPanel.prototype.onDestroy = function () {
        this.createDragObj = null;
        this.exchangeDragObj = null;
        this.moving = null;
        this.moveFrom = null;
        this.moveTo = null;
        this.arrDragObj = [];
    };
    /** 设置可拖动列表 */
    UITouchPanel.prototype.setDragObjList = function (list) {
        this.arrDragObj = list;
    };
    UITouchPanel.prototype.onVCTouchStart = function (event, touchObj) {
        if (this.moving && this.moving.isValid) {
            this.moving.destroy();
        }
        touchObj.setDragState(UIPTouchBase_1.MoveState.moveOut);
        this.moveFrom = touchObj;
        this.createDragObj && this.createDragObj(event, touchObj);
    };
    UITouchPanel.prototype.onVCTouchMove = function (event, touchObj) {
        if (!this.moving) {
            return;
        }
        var delta = event.touch.getDelta();
        this.moving.node.x += delta.x;
        this.moving.node.y += delta.y;
        //判断是否拖入到某个位置
        var moveInObj = null;
        var posW = event.getLocation();
        for (var _i = 0, _a = this.arrDragObj; _i < _a.length; _i++) {
            var one = _a[_i];
            var isRect = one.checkIsMoveIn(posW);
            if (isRect) {
                moveInObj = one;
                break;
            }
        }
        if (this.moveTo == moveInObj) {
            return;
        }
        if (this.moveFrom == moveInObj) {
            return;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveTo = null;
        }
        if (moveInObj) {
            moveInObj.setDragState(UIPTouchBase_1.MoveState.moveIn);
            this.moveTo = moveInObj;
        }
    };
    UITouchPanel.prototype.onVCTouchEnd = function (event, touchObj) {
        if (!this.moving || !this.moving.isValid) {
            return;
        }
        this.exchangeDragObj && this.exchangeDragObj(event, touchObj);
        this.moving.node.destroy();
        this.moving = null;
        if (this.moveFrom) {
            this.moveFrom.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveFrom = null;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveTo = null;
        }
    };
    UITouchPanel = __decorate([
        ccclass
    ], UITouchPanel);
    return UITouchPanel;
}());
exports.UITouchPanel = UITouchPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVRvdWNoUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQXlEO0FBSW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFxQkksZ0JBQWdCO1FBQ1IsWUFBTyxHQUFpQixJQUFJLENBQUM7UUFRckMsZUFBZTtRQUNQLGNBQVMsR0FBaUIsSUFBSSxDQUFDO1FBUXZDLGVBQWU7UUFDUCxZQUFPLEdBQWlCLElBQUksQ0FBQztRQVFyQyxZQUFZO1FBQ0osZUFBVSxHQUFtQixFQUFFLENBQUM7SUE2RTVDLENBQUM7SUExSEcsc0JBQVcsdUNBQWE7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUNELFVBQXlCLENBQWM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7SUFRRCxzQkFBVyx5Q0FBZTthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUEyQixDQUFjO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BSEE7SUFPRCxzQkFBVyxnQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBa0IsQ0FBZTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FIQTtJQU9ELHNCQUFXLGtDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFvQixDQUFlO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FB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QUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQTdIUSxZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBOEh4QjtJQUFELG1CQUFDO0NBOUhELEFBOEhDLElBQUE7QUE5SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBVSVBUb3VjaEJhc2UsIHsgTW92ZVN0YXRlIH0gZnJvbSAnLi9VSVBUb3VjaEJhc2UnO1xuXG50eXBlIERyYWdPYmpGdW5jID0gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCB0b3VjaE9iajogVUlQVG91Y2hCYXNlKSA9PiB2b2lkO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVRvdWNoUGFuZWwge1xuXG4gICAgLyoqIOWIm+W7uuaLluWKqOWvueixoSAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZURyYWdPYmo6IERyYWdPYmpGdW5jO1xuICAgIHB1YmxpYyBnZXQgY3JlYXRlRHJhZ09iaigpOiBEcmFnT2JqRnVuYyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVEcmFnT2JqO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNyZWF0ZURyYWdPYmoodjogRHJhZ09iakZ1bmMpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlRHJhZ09iaiA9IHY7XG4gICAgfVxuXG4gICAgLyoqIOaLluWKqOe7k+adnyAqL1xuXG4gICAgcHJpdmF0ZSBfZXhjaGFuZ2VEcmFnT2JqOiBEcmFnT2JqRnVuYztcbiAgICBwdWJsaWMgZ2V0IGV4Y2hhbmdlRHJhZ09iaigpOiBEcmFnT2JqRnVuYyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGNoYW5nZURyYWdPYmo7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZXhjaGFuZ2VEcmFnT2JqKHY6IERyYWdPYmpGdW5jKSB7XG4gICAgICAgIHRoaXMuX2V4Y2hhbmdlRHJhZ09iaiA9IHY7XG4gICAgfVxuXG4gICAgLyoqIOW9k+WJjeato+WcqOaLluWKqOeahOWvueixoSAqL1xuICAgIHByaXZhdGUgX21vdmluZzogVUlQVG91Y2hCYXNlID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IG1vdmluZygpOiBVSVBUb3VjaEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW92aW5nO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1vdmluZyh2OiBVSVBUb3VjaEJhc2UpIHtcbiAgICAgICAgdGhpcy5fbW92aW5nID0gdjtcbiAgICB9XG5cbiAgICAvKiog5ouW5Yqo55qE5Ye65Y+R54K55a+56LGhICovXG4gICAgcHJpdmF0ZSBfbW92ZUZyb206IFVJUFRvdWNoQmFzZSA9IG51bGw7XG4gICAgcHVibGljIGdldCBtb3ZlRnJvbSgpOiBVSVBUb3VjaEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUZyb207XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbW92ZUZyb20odjogVUlQVG91Y2hCYXNlKSB7XG4gICAgICAgIHRoaXMuX21vdmVGcm9tID0gdjtcbiAgICB9XG5cbiAgICAvKiog5ouW5Yqo55qE5ouW5YWl54K55a+56LGhICovXG4gICAgcHJpdmF0ZSBfbW92ZVRvOiBVSVBUb3VjaEJhc2UgPSBudWxsO1xuICAgIHB1YmxpYyBnZXQgbW92ZVRvKCk6IFVJUFRvdWNoQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlVG87XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbW92ZVRvKHY6IFVJUFRvdWNoQmFzZSkge1xuICAgICAgICB0aGlzLl9tb3ZlVG8gPSB2O1xuICAgIH1cblxuICAgIC8qKiDlj6/mi5bliqjlr7nosaEgKi9cbiAgICBwcml2YXRlIGFyckRyYWdPYmo6IFVJUFRvdWNoQmFzZVtdID0gW107XG5cblxuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRHJhZ09iaiA9IG51bGw7XG4gICAgICAgIHRoaXMuZXhjaGFuZ2VEcmFnT2JqID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm1vdmVGcm9tID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb3ZlVG8gPSBudWxsO1xuICAgICAgICB0aGlzLmFyckRyYWdPYmogPSBbXTtcbiAgICB9XG5cbiAgICAvKiog6K6+572u5Y+v5ouW5Yqo5YiX6KGoICovXG4gICAgcHVibGljIHNldERyYWdPYmpMaXN0KGxpc3Q6IFVJUFRvdWNoQmFzZVtdKSB7XG4gICAgICAgIHRoaXMuYXJyRHJhZ09iaiA9IGxpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVkNUb3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCB0b3VjaE9iajogVUlQVG91Y2hCYXNlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiB0aGlzLm1vdmluZy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmluZy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hPYmouc2V0RHJhZ1N0YXRlKE1vdmVTdGF0ZS5tb3ZlT3V0KTtcbiAgICAgICAgdGhpcy5tb3ZlRnJvbSA9IHRvdWNoT2JqO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlRHJhZ09iaiAmJiB0aGlzLmNyZWF0ZURyYWdPYmooZXZlbnQsIHRvdWNoT2JqKVxuICAgIH1cblxuICAgIHB1YmxpYyBvblZDVG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCB0b3VjaE9iajogVUlQVG91Y2hCYXNlKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVsdGEgPSBldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICB0aGlzLm1vdmluZy5ub2RlLnggKz0gZGVsdGEueDtcbiAgICAgICAgdGhpcy5tb3Zpbmcubm9kZS55ICs9IGRlbHRhLnk7XG5cbiAgICAgICAgLy/liKTmlq3mmK/lkKbmi5blhaXliLDmn5DkuKrkvY3nva5cbiAgICAgICAgbGV0IG1vdmVJbk9iajogVUlQVG91Y2hCYXNlID0gbnVsbDtcbiAgICAgICAgbGV0IHBvc1cgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5hcnJEcmFnT2JqKSB7XG4gICAgICAgICAgICBsZXQgaXNSZWN0ID0gb25lLmNoZWNrSXNNb3ZlSW4ocG9zVyk7XG4gICAgICAgICAgICBpZiAoaXNSZWN0KSB7XG4gICAgICAgICAgICAgICAgbW92ZUluT2JqID0gb25lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVUbyA9PSBtb3ZlSW5PYmopIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJvbSA9PSBtb3ZlSW5PYmopIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlVG8pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvLnNldERyYWdTdGF0ZShNb3ZlU3RhdGUubm9ybWFsKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW92ZUluT2JqKSB7XG4gICAgICAgICAgICBtb3ZlSW5PYmouc2V0RHJhZ1N0YXRlKE1vdmVTdGF0ZS5tb3ZlSW4pO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG8gPSBtb3ZlSW5PYmo7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25WQ1RvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCB0b3VjaE9iajogVUlQVG91Y2hCYXNlKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcgfHwgIXRoaXMubW92aW5nLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4Y2hhbmdlRHJhZ09iaiAmJiB0aGlzLmV4Y2hhbmdlRHJhZ09iaihldmVudCwgdG91Y2hPYmopO1xuICAgICAgICB0aGlzLm1vdmluZy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5tb3ZlRnJvbSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRnJvbS5zZXREcmFnU3RhdGUoTW92ZVN0YXRlLm5vcm1hbCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVGcm9tID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlVG8pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvLnNldERyYWdTdGF0ZShNb3ZlU3RhdGUubm9ybWFsKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=