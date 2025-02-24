
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/event/EventGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '028f8M7JRxITYmylHj1PZsy', 'EventGroup');
// c2f-framework/core/event/EventGroup.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventGroup = void 0;
var EventDefine_1 = require("./EventDefine");
/**
 * 批量注册、移除全局事件对象
 */
var EventGroup = /** @class */ (function () {
    function EventGroup(name) {
        this.events = {};
        this.groupEvt = {};
        this.group = name;
    }
    EventGroup.prototype.addToList = function (list, event, listener, object) {
        var data = new EventDefine_1.EventData();
        data.event = event;
        data.listener = listener;
        data.object = object;
        list.push(data);
    };
    /**
     * 注册分组事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    EventGroup.prototype.on = function (event, listener, object) {
        if (this.group) {
            if (!this.groupEvt[this.group]) {
                this.groupEvt[this.group] = {};
            }
            if (!this.groupEvt[this.group][event]) {
                this.groupEvt[this.group][event] = [];
            }
            this.addToList(this.groupEvt[this.group][event], event, listener, object);
            c2f.event.onGroup(this.group, event, listener, object);
        }
        else {
            var list = this.events[event];
            if (list == null) {
                list = [];
                this.events[event] = list;
            }
            this.addToList(list, event, listener, object);
            c2f.event.on(event, listener, object);
        }
    };
    /**
    * 移除全局事件
     * @param event     事件名
     */
    EventGroup.prototype.off = function (event) {
        if (this.group) {
            var dictEvent = this.groupEvt[this.group];
            if (!dictEvent) {
                return;
            }
            var obs = dictEvent[event];
            if (!obs) {
                return;
            }
            for (var _i = 0, obs_1 = obs; _i < obs_1.length; _i++) {
                var ob = obs_1[_i];
                c2f.event.offGroup(this.group, event, ob.listener, ob.object);
            }
            delete dictEvent[event];
        }
        else {
            var ebs = this.events[event];
            if (!ebs) {
                return;
            }
            for (var _a = 0, ebs_1 = ebs; _a < ebs_1.length; _a++) {
                var eb = ebs_1[_a];
                c2f.event.off(event, eb.listener, eb.object);
            }
            delete this.events[event];
        }
    };
    /**
     * 触发全局事件
     * @param event(string)      事件名
     * @param args(any)          事件参数
     */
    EventGroup.prototype.emit = function (event) {
        var _a, _b;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.group) {
            (_a = c2f.event).emitGroup.apply(_a, __spreadArrays([this.group, event], args));
        }
        else {
            (_b = c2f.event).emit.apply(_b, __spreadArrays([event], args));
        }
    };
    /** 清除所有的全局事件监听 */
    EventGroup.prototype.clear = function () {
        if (this.group) {
            c2f.event.offGroupAll(this.group);
            this.groupEvt = {};
        }
        else {
            for (var event in this.events) {
                this.off(event);
            }
        }
    };
    return EventGroup;
}());
exports.EventGroup = EventGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvZXZlbnQvRXZlbnRHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdEO0FBRXhEOztHQUVHO0FBQ0g7SUFLSSxvQkFBWSxJQUFZO1FBSGhCLFdBQU0sR0FBd0MsRUFBRSxDQUFDO1FBQ2pELGFBQVEsR0FBMkQsRUFBRSxDQUFBO1FBR3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw4QkFBUyxHQUFqQixVQUFrQixJQUFzQixFQUFFLEtBQWEsRUFBRSxRQUFzQixFQUFFLE1BQWM7UUFDM0YsSUFBSSxJQUFJLEdBQWMsSUFBSSx1QkFBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx1QkFBRSxHQUFULFVBQVUsS0FBYSxFQUFFLFFBQXNCLEVBQUUsTUFBYztRQUMzRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNsQztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFD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QUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBbEdBLEFBa0dDLElBQUE7QUFsR1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIExpc3RlbmVyRnVuYyB9IGZyb20gXCIuL0V2ZW50RGVmaW5lXCI7XG5cbi8qKlxuICog5om56YeP5rOo5YaM44CB56e76Zmk5YWo5bGA5LqL5Lu25a+56LGhXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudEdyb3VwIHtcbiAgICBwcml2YXRlIGdyb3VwOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBldmVudHM6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8RXZlbnREYXRhPiB9ID0ge307XG4gICAgcHJpdmF0ZSBncm91cEV2dDogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PEV2ZW50RGF0YT4gfSB9ID0ge31cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdyb3VwID0gbmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvTGlzdChsaXN0OiBBcnJheTxFdmVudERhdGE+LCBldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogTGlzdGVuZXJGdW5jLCBvYmplY3Q6IE9iamVjdCkge1xuICAgICAgICBsZXQgZGF0YTogRXZlbnREYXRhID0gbmV3IEV2ZW50RGF0YSgpO1xuICAgICAgICBkYXRhLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIGRhdGEubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgZGF0YS5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIGxpc3QucHVzaChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jlhozliIbnu4Tkuovku7ZcbiAgICAgKiBAcGFyYW0gZXZlbnQgICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgICDlpITnkIbkuovku7bnmoTkvqblkKzlmajlh73mlbBcbiAgICAgKiBAcGFyYW0gb2JqZWN0ICAgICDkvqblkKzlh73mlbDnu5HlrprnmoTkvZznlKjln5/lr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyRnVuYywgb2JqZWN0OiBvYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncm91cEV2dFt0aGlzLmdyb3VwXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBFdnRbdGhpcy5ncm91cF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5ncm91cEV2dFt0aGlzLmdyb3VwXVtldmVudF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwRXZ0W3RoaXMuZ3JvdXBdW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRUb0xpc3QodGhpcy5ncm91cEV2dFt0aGlzLmdyb3VwXVtldmVudF0sIGV2ZW50LCBsaXN0ZW5lciwgb2JqZWN0KTtcbiAgICAgICAgICAgIGMyZi5ldmVudC5vbkdyb3VwKHRoaXMuZ3JvdXAsIGV2ZW50LCBsaXN0ZW5lciwgb2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0OiBBcnJheTxFdmVudERhdGE+ID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICAgICAgaWYgKGxpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBsaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRUb0xpc3QobGlzdCwgZXZlbnQsIGxpc3RlbmVyLCBvYmplY3QpO1xuICAgICAgICAgICAgYzJmLmV2ZW50Lm9uKGV2ZW50LCBsaXN0ZW5lciwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICog56e76Zmk5YWo5bGA5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50ICAgICDkuovku7blkI1cbiAgICAgKi9cbiAgICBwdWJsaWMgb2ZmKGV2ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIGxldCBkaWN0RXZlbnQgPSB0aGlzLmdyb3VwRXZ0W3RoaXMuZ3JvdXBdO1xuICAgICAgICAgICAgaWYgKCFkaWN0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb2JzID0gZGljdEV2ZW50W2V2ZW50XTtcbiAgICAgICAgICAgIGlmICghb2JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgb2Igb2Ygb2JzKSB7XG4gICAgICAgICAgICAgICAgYzJmLmV2ZW50Lm9mZkdyb3VwKHRoaXMuZ3JvdXAsIGV2ZW50LCBvYi5saXN0ZW5lciwgb2Iub2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkaWN0RXZlbnRbZXZlbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGViczogQXJyYXk8RXZlbnREYXRhPiA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIGlmICghZWJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgZWIgb2YgZWJzKSB7XG4gICAgICAgICAgICAgICAgYzJmLmV2ZW50Lm9mZihldmVudCwgZWIubGlzdGVuZXIsIGViLm9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIOinpuWPkeWFqOWxgOS6i+S7tiBcbiAgICAgKiBAcGFyYW0gZXZlbnQoc3RyaW5nKSAgICAgIOS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBhcmdzKGFueSkgICAgICAgICAg5LqL5Lu25Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGVtaXQoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIGMyZi5ldmVudC5lbWl0R3JvdXAodGhpcy5ncm91cCwgZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYzJmLmV2ZW50LmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOa4hemZpOaJgOacieeahOWFqOWxgOS6i+S7tuebkeWQrCAqL1xuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIGMyZi5ldmVudC5vZmZHcm91cEFsbCh0aGlzLmdyb3VwKTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBFdnQgPSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50IGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19