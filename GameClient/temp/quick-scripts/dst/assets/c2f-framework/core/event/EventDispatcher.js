
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/event/EventDispatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71b27i1qnpBg50M1l8A+rzW', 'EventDispatcher');
// c2f-framework/core/event/EventDispatcher.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcher = void 0;
var EventGroup_1 = require("./EventGroup");
/* 事件对象基类，继承该类将拥有发送和接送事件的能力 */
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.group = null;
        this._msg = null;
    }
    /** 设置分组名称 */
    EventDispatcher.prototype.setGroupName = function (name) {
        this.group = name;
    };
    /**
     * 注册全局事件
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    EventDispatcher.prototype.on = function (event, listener, object) {
        if (this._msg == null) {
            this._msg = new EventGroup_1.EventGroup(this.group);
        }
        this._msg.on(event, listener, object);
    };
    /**
     * 移除全局事件
     * @param event      事件名
     */
    EventDispatcher.prototype.off = function (event) {
        if (this._msg) {
            this._msg.off(event);
        }
    };
    /**
     * 触发全局事件
     * @param event      事件名
     * @param args       事件参数
     */
    EventDispatcher.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._msg == null) {
            this._msg = new EventGroup_1.EventGroup(this.group);
        }
        (_a = this._msg).emit.apply(_a, __spreadArrays([event], args));
    };
    /** 移除所有事件监听 */
    EventDispatcher.prototype.offAll = function () {
        if (this._msg) {
            this._msg.clear();
        }
    };
    /**
     * 销毁事件对象
     */
    EventDispatcher.prototype.destroy = function () {
        this.offAll();
        this._msg = null;
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvZXZlbnQvRXZlbnREaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBMEM7QUFFMUMsOEJBQThCO0FBQzlCO0lBQUE7UUFDWSxVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBc0IsSUFBSSxDQUFDO0lBd0Q3QyxDQUFDO0lBdERHLGFBQWE7SUFDTixzQ0FBWSxHQUFuQixVQUFvQixJQUFZO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDRCQUFFLEdBQVQsVUFBVSxLQUFhLEVBQUUsUUFBc0IsRUFBRSxNQUFXO1FBQ3hELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQUcsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUFJLEdBQVgsVUFBWSxLQUFhOztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxJQUFJLDJCQUFDLEtBQUssR0FBSyxJQUFJLEdBQUU7SUFDbkMsQ0FBQztJQUVELGVBQWU7SUFDUixnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGlDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQTFEQSxBQTBEQyxJQUFBO0FBMURZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJGdW5jIH0gZnJvbSBcIi4vRXZlbnREZWZpbmVcIjtcbmltcG9ydCB7IEV2ZW50R3JvdXAgfSBmcm9tIFwiLi9FdmVudEdyb3VwXCI7XG5cbi8qIOS6i+S7tuWvueixoeWfuuexu++8jOe7p+aJv+ivpeexu+WwhuaLpeacieWPkemAgeWSjOaOpemAgeS6i+S7tueahOiDveWKmyAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgcHJpdmF0ZSBncm91cDogc3RyaW5nID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX21zZzogRXZlbnRHcm91cCB8IG51bGwgPSBudWxsO1xuXG4gICAgLyoqIOiuvue9ruWIhue7hOWQjeensCAqL1xuICAgIHB1YmxpYyBzZXRHcm91cE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOWGjOWFqOWxgOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudCAgICAg5LqL5Lu25ZCNXG4gICAgICogQHBhcmFtIGxpc3RlbmVyICDlpITnkIbkuovku7bnmoTkvqblkKzlmajlh73mlbBcbiAgICAgKiBAcGFyYW0gb2JqZWN0ICAgIOS+puWQrOWHveaVsOe7keWumueahOS9nOeUqOWfn+WvueixoVxuICAgICAqL1xuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogTGlzdGVuZXJGdW5jLCBvYmplY3Q6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5fbXNnID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21zZyA9IG5ldyBFdmVudEdyb3VwKHRoaXMuZ3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21zZy5vbihldmVudCwgbGlzdGVuZXIsIG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5YWo5bGA5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50ICAgICAg5LqL5Lu25ZCNXG4gICAgICovXG4gICAgcHVibGljIG9mZihldmVudDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9tc2cpIHtcbiAgICAgICAgICAgIHRoaXMuX21zZy5vZmYoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIOinpuWPkeWFqOWxgOS6i+S7tiBcbiAgICAgKiBAcGFyYW0gZXZlbnQgICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gYXJncyAgICAgICDkuovku7blj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZW1pdChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5fbXNnID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21zZyA9IG5ldyBFdmVudEdyb3VwKHRoaXMuZ3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21zZy5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKiog56e76Zmk5omA5pyJ5LqL5Lu255uR5ZCsICovXG4gICAgcHVibGljIG9mZkFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21zZykge1xuICAgICAgICAgICAgdGhpcy5fbXNnLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDplIDmr4Hkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vZmZBbGwoKTtcbiAgICAgICAgdGhpcy5fbXNnID0gbnVsbDtcbiAgICB9XG59Il19