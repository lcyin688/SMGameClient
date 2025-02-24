
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84841fklvZFl7OUZqWAIhZ7', 'UIBase');
// c2f-framework/gui/layer/UIBase.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIBase = void 0;
var EventDispatcher_1 = require("../../core/event/EventDispatcher");
var ccclass = cc._decorator.ccclass;
/** 游戏显示对象组件模板 */
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制体名称 */
        _this.prefabName = '';
        /** 事件触发器 */
        _this._eventDispatcher = null;
        return _this;
    }
    Object.defineProperty(UIBase.prototype, "eventDispatcher", {
        get: function () {
            if (!this._eventDispatcher) {
                this._eventDispatcher = new EventDispatcher_1.EventDispatcher();
                this._eventDispatcher.setGroupName(this.prefabName + "_" + this.node.uuid);
            }
            return this._eventDispatcher;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 注册全局事件
     * @param event       事件名
     * @param listener   处理事件的侦听器函数
     * @param object    侦听函数绑定的this对象
     */
    UIBase.prototype.on = function (event, listener, object) {
        this.eventDispatcher.on(event, listener, object);
    };
    /**
     * 移除全局事件
     * @param event      事件名
     */
    UIBase.prototype.off = function (event) {
        if (this._eventDispatcher) {
            this._eventDispatcher.off(event);
        }
    };
    /**
     * 触发全局事件
     * @param event      事件名
     * @param args       事件参数
     */
    UIBase.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.eventDispatcher).emit.apply(_a, __spreadArrays([event], args));
    };
    /**
     * 移除预制内的所有事件
     */
    UIBase.prototype.offAll = function () {
        this.eventDispatcher.offAll();
    };
    UIBase.prototype.onDestroy = function () {
        // 释放消息对象
        if (this._eventDispatcher) {
            this._eventDispatcher.destroy();
            this._eventDispatcher = null;
        }
    };
    UIBase = __decorate([
        ccclass
    ], UIBase);
    return UIBase;
}(cc.Component));
exports.UIBase = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvRUFBbUU7QUFFM0QsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsaUJBQWlCO0FBRWpCO0lBQTRCLDBCQUFZO0lBQXhDO1FBQUEscUVBeURDO1FBeERHLFlBQVk7UUFDTCxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUUvQixZQUFZO1FBQ0osc0JBQWdCLEdBQTJCLElBQUksQ0FBQzs7SUFvRDVELENBQUM7SUFuREcsc0JBQUksbUNBQWU7YUFBbkI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUksSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO2FBQzlFO1lBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7T0FLRztJQUNJLG1CQUFFLEdBQVQsVUFBVSxLQUFhLEVBQUUsUUFBc0IsRUFBRSxNQUFXO1FBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9CQUFHLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFCQUFJLEdBQVgsVUFBWSxLQUFhOztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3JDLENBQUEsS0FBQSxJQUFJLENBQUMsZUFBZSxDQUFBLENBQUMsSUFBSSwyQkFBQyxLQUFLLEdBQUssSUFBSSxHQUFFO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNJLHVCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLFNBQVM7UUFDVCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQztJQUNMLENBQUM7SUF4RFEsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQXlEbEI7SUFBRCxhQUFDO0NBekRELEFBeURDLENBekQyQixFQUFFLENBQUMsU0FBUyxHQXlEdkM7QUF6RFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lckZ1bmMgfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC9FdmVudERlZmluZVwiO1xuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIOa4uOaIj+aYvuekuuWvueixoee7hOS7tuaooeadvyAqL1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSUJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qKiDpooTliLbkvZPlkI3np7AgKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICAvKiog5LqL5Lu26Kem5Y+R5ZmoICovXG4gICAgcHJpdmF0ZSBfZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIgfCBudWxsID0gbnVsbDtcbiAgICBnZXQgZXZlbnREaXNwYXRjaGVyKCk6IEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgICAgIGlmICghdGhpcy5fZXZlbnREaXNwYXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIuc2V0R3JvdXBOYW1lKGAke3RoaXMucHJlZmFiTmFtZX1fJHt0aGlzLm5vZGUudXVpZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnREaXNwYXRjaGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOWGjOWFqOWxgOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudCAgICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgICDlpITnkIbkuovku7bnmoTkvqblkKzlmajlh73mlbBcbiAgICAgKiBAcGFyYW0gb2JqZWN0ICAgIOS+puWQrOWHveaVsOe7keWumueahHRoaXPlr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyRnVuYywgb2JqZWN0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oZXZlbnQsIGxpc3RlbmVyLCBvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOWFqOWxgOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudCAgICAgIOS6i+S7tuWQjVxuICAgICAqL1xuICAgIHB1YmxpYyBvZmYoZXZlbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnREaXNwYXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIub2ZmKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiDop6blj5HlhajlsYDkuovku7YgXG4gICAgICogQHBhcmFtIGV2ZW50ICAgICAg5LqL5Lu25ZCNXG4gICAgICogQHBhcmFtIGFyZ3MgICAgICAg5LqL5Lu25Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGVtaXQoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZW1pdChldmVudCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk6aKE5Yi25YaF55qE5omA5pyJ5LqL5Lu2XG4gICAgICovXG4gICAgcHVibGljIG9mZkFsbCgpIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub2ZmQWxsKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g6YeK5pS+5raI5oGv5a+56LGhXG4gICAgICAgIGlmICh0aGlzLl9ldmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50RGlzcGF0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==