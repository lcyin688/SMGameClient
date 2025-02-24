
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '671a3MogpZPVaO49jb3gKm0', 'EventManager');
// c2f-framework/core/event/EventManager.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventDefine_1 = require("./EventDefine");
var EventManager = /** @class */ (function () {
    function EventManager() {
        //普通事件
        this.events = {};
        //分组事件
        this.groupEvt = {};
    }
    EventManager.prototype.addToList = function (list, event, listener, object) {
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener == listener && bin.object == object) {
                cc.warn("\u540D\u4E3A\u3010" + event + "\u3011\u7684\u4E8B\u4EF6\u91CD\u590D\u6CE8\u518C\u4FA6\u542C\u5668");
            }
        }
        var data = new EventDefine_1.EventData();
        data.event = event;
        data.listener = listener;
        data.object = object;
        list.push(data);
    };
    /**
     * 注册全局事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    EventManager.prototype.on = function (event, listener, object) {
        if (!event || !listener) {
            cc.warn("\u6CE8\u518C\u3010" + event + "\u3011\u4E8B\u4EF6\u7684\u4FA6\u542C\u5668\u51FD\u6570\u4E3A\u7A7A");
            return;
        }
        var list = this.events[event];
        if (list == null) {
            list = [];
            this.events[event] = list;
        }
        this.addToList(list, event, listener, object);
    };
    /**
     * 按分组监听时间
     * @param group 分组名称
     * @param event 时间名称
     * @param listener 监听函数
     * @param object 监听函数绑定的作用域对象
     */
    EventManager.prototype.onGroup = function (group, event, listener, object) {
        if (!this.groupEvt[group]) {
            this.groupEvt[group] = {};
        }
        if (!this.groupEvt[group][event]) {
            this.groupEvt[group][event] = [];
        }
        this.addToList(this.groupEvt[group][event], event, listener, object);
    };
    /**
     * 监听一次事件，事件响应后，该监听自动移除
     * @param event     事件名
     * @param listener  事件触发回调方法
     * @param object    侦听函数绑定的作用域对象
     */
    EventManager.prototype.once = function (event, listener, object) {
        var _this = this;
        var _listener = function ($event, $args) {
            _this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
        };
        this.on(event, _listener, object);
    };
    /**
     * 移除全局事件
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    EventManager.prototype.off = function (event, listener, object) {
        var list = this.events[event];
        if (!list) {
            cc.log("\u540D\u4E3A\u3010" + event + "\u3011\u7684\u4E8B\u4EF6\u4E0D\u5B58\u5728");
            return;
        }
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener == listener && bin.object == object) {
                list.splice(i, 1);
                break;
            }
        }
        if (list.length == 0) {
            delete this.events[event];
        }
    };
    /**
     * 移除分组事件监听
     * @param group 分组名称
     * @param event 事件名称
     * @param listener 监听函数
     * @param object 监听函数绑定对象
     */
    EventManager.prototype.offGroup = function (group, event, listener, object) {
        var dstGroup = this.groupEvt[group];
        if (!dstGroup) {
            return;
        }
        var evts = dstGroup[event];
        if (!evts || evts.length <= 0) {
            return;
        }
        var length = evts.length;
        for (var i = 0; i < length; i++) {
            var bin = evts[i];
            if (bin.listener == listener && bin.object == object) {
                evts.splice(i, 1);
                break;
            }
        }
        if (evts.length == 0) {
            delete dstGroup[event];
        }
    };
    /**
     * 移除分组内所有事件
     * @param group 分组名称
     * @returns
     */
    EventManager.prototype.offGroupAll = function (group) {
        var dictEvent = this.groupEvt[group];
        if (!dictEvent) {
            return;
        }
        this.groupEvt[group] = {};
    };
    /**
     * 触发全局事件
     * @param event(string)      事件名
     * @param args(any)          事件参数
     */
    EventManager.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.events[event];
        if (list != null) {
            var temp = list.concat();
            var length = temp.length;
            for (var i = 0; i < length; i++) {
                var eventBin = temp[i];
                (_a = eventBin.listener).call.apply(_a, __spreadArrays([eventBin.object, event], args));
            }
        }
    };
    /**
         * 触发全局事件
         * @param group 分组名称
         * @param event(string)      事件名
         * @param args(any)          事件参数
         */
    EventManager.prototype.emitGroup = function (group, event) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var dictEvent = this.groupEvt[group];
        if (!dictEvent) {
            return;
        }
        var list = dictEvent[event];
        if (!list || list.length <= 0) {
            return;
        }
        var temp = list.concat();
        var length = temp.length;
        for (var i = 0; i < length; i++) {
            var eventBin = temp[i];
            (_a = eventBin.listener).call.apply(_a, __spreadArrays([eventBin.object, event], args));
        }
    };
    EventManager.instance = new EventManager();
    return EventManager;
}());
c2f.event = EventManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvZXZlbnQvRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3RDtBQUV4RDtJQUFBO1FBR0ksTUFBTTtRQUNFLFdBQU0sR0FBd0MsRUFBRSxDQUFDO1FBQ3pELE1BQU07UUFDRSxhQUFRLEdBQTJELEVBQUUsQ0FBQTtJQWlMakYsQ0FBQztJQS9LVyxnQ0FBUyxHQUFqQixVQUFrQixJQUFpQixFQUFFLEtBQWEsRUFBRSxRQUFzQixFQUFFLE1BQWM7UUFDdEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO2dCQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUFNLEtBQUssdUVBQWEsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7UUFDRCxJQUFJLElBQUksR0FBYyxJQUFJLHVCQUFTLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHlCQUFFLEdBQVQsVUFBVSxLQUFhLEVBQUUsUUFBc0IsRUFBRSxNQUFjO1FBQzNELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsRUFBRSxD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QyxDQUFDLENBQUM7WUFDdkIsQ0FBQSxLQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLDJCQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxHQUFLLElBQUksR0FBRTtTQUMzRDtJQUNMLENBQUM7SUFwTGUscUJBQVEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXNMaEUsbUJBQUM7Q0F2TEQsQUF1TEMsSUFBQTtBQVFELEdBQUcsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgTGlzdGVuZXJGdW5jIH0gZnJvbSBcIi4vRXZlbnREZWZpbmVcIjtcblxuY2xhc3MgRXZlbnRNYW5hZ2VyIHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTtcblxuICAgIC8v5pmu6YCa5LqL5Lu2XG4gICAgcHJpdmF0ZSBldmVudHM6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8RXZlbnREYXRhPiB9ID0ge307XG4gICAgLy/liIbnu4Tkuovku7ZcbiAgICBwcml2YXRlIGdyb3VwRXZ0OiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogQXJyYXk8RXZlbnREYXRhPiB9IH0gPSB7fVxuXG4gICAgcHJpdmF0ZSBhZGRUb0xpc3QobGlzdDogRXZlbnREYXRhW10sIGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBMaXN0ZW5lckZ1bmMsIG9iamVjdDogT2JqZWN0KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbiA9IGxpc3RbaV07XG4gICAgICAgICAgICBpZiAoYmluLmxpc3RlbmVyID09IGxpc3RlbmVyICYmIGJpbi5vYmplY3QgPT0gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2Mud2Fybihg5ZCN5Li644CQJHtldmVudH3jgJHnmoTkuovku7bph43lpI3ms6jlhozkvqblkKzlmahgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YTogRXZlbnREYXRhID0gbmV3IEV2ZW50RGF0YSgpO1xuICAgICAgICBkYXRhLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIGRhdGEubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgZGF0YS5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIGxpc3QucHVzaChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jlhozlhajlsYDkuovku7ZcbiAgICAgKiBAcGFyYW0gZXZlbnQgICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgICDlpITnkIbkuovku7bnmoTkvqblkKzlmajlh73mlbBcbiAgICAgKiBAcGFyYW0gb2JqZWN0ICAgICDkvqblkKzlh73mlbDnu5HlrprnmoTkvZznlKjln5/lr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyRnVuYywgb2JqZWN0OiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCFldmVudCB8fCAhbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOazqOWGjOOAkCR7ZXZlbnR944CR5LqL5Lu255qE5L6m5ZCs5Zmo5Ye95pWw5Li656m6YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3Q6IEFycmF5PEV2ZW50RGF0YT4gPSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICAgIGlmIChsaXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IGxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb0xpc3QobGlzdCwgZXZlbnQsIGxpc3RlbmVyLCBvYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMieWIhue7hOebkeWQrOaXtumXtFxuICAgICAqIEBwYXJhbSBncm91cCDliIbnu4TlkI3np7BcbiAgICAgKiBAcGFyYW0gZXZlbnQg5pe26Ze05ZCN56ewXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICAgICAqIEBwYXJhbSBvYmplY3Qg55uR5ZCs5Ye95pWw57uR5a6a55qE5L2c55So5Z+f5a+56LGhXG4gICAgICovXG4gICAgcHVibGljIG9uR3JvdXAoZ3JvdXA6IHN0cmluZywgZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyRnVuYywgb2JqZWN0OiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyb3VwRXZ0W2dyb3VwXSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEV2dFtncm91cF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ3JvdXBFdnRbZ3JvdXBdW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEV2dFtncm91cF1bZXZlbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb0xpc3QodGhpcy5ncm91cEV2dFtncm91cF1bZXZlbnRdLCBldmVudCwgbGlzdGVuZXIsIG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5LiA5qyh5LqL5Lu277yM5LqL5Lu25ZON5bqU5ZCO77yM6K+l55uR5ZCs6Ieq5Yqo56e76ZmkXG4gICAgICogQHBhcmFtIGV2ZW50ICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgIOS6i+S7tuinpuWPkeWbnuiwg+aWueazlVxuICAgICAqIEBwYXJhbSBvYmplY3QgICAg5L6m5ZCs5Ye95pWw57uR5a6a55qE5L2c55So5Z+f5a+56LGhXG4gICAgICovXG4gICAgcHVibGljIG9uY2UoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyRnVuYywgb2JqZWN0OiBvYmplY3QpIHtcbiAgICAgICAgbGV0IF9saXN0ZW5lcjogYW55ID0gKCRldmVudDogc3RyaW5nLCAkYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9mZihldmVudCwgX2xpc3RlbmVyLCBvYmplY3QpO1xuICAgICAgICAgICAgX2xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwob2JqZWN0LCAkZXZlbnQsICRhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKGV2ZW50LCBfbGlzdGVuZXIsIG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5YWo5bGA5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50ICAgICDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgIOWkhOeQhuS6i+S7tueahOS+puWQrOWZqOWHveaVsFxuICAgICAqIEBwYXJhbSBvYmplY3QgICAg5L6m5ZCs5Ye95pWw57uR5a6a55qE5L2c55So5Z+f5a+56LGhXG4gICAgICovXG4gICAgcHVibGljIG9mZihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIG9iamVjdDogb2JqZWN0KSB7XG4gICAgICAgIGxldCBsaXN0OiBBcnJheTxFdmVudERhdGE+ID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIGNjLmxvZyhg5ZCN5Li644CQJHtldmVudH3jgJHnmoTkuovku7bkuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbjogRXZlbnREYXRhID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChiaW4ubGlzdGVuZXIgPT0gbGlzdGVuZXIgJiYgYmluLm9iamVjdCA9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5YiG57uE5LqL5Lu255uR5ZCsXG4gICAgICogQHBhcmFtIGdyb3VwIOWIhue7hOWQjeensFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gICAgICogQHBhcmFtIG9iamVjdCDnm5HlkKzlh73mlbDnu5Hlrprlr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgb2ZmR3JvdXAoZ3JvdXA6IHN0cmluZywgZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uLCBvYmplY3Q6IG9iamVjdCkge1xuICAgICAgICBsZXQgZHN0R3JvdXAgPSB0aGlzLmdyb3VwRXZ0W2dyb3VwXTtcbiAgICAgICAgaWYgKCFkc3RHcm91cCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBldnRzID0gZHN0R3JvdXBbZXZlbnRdO1xuICAgICAgICBpZiAoIWV2dHMgfHwgZXZ0cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsZW5ndGggPSBldnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbjogRXZlbnREYXRhID0gZXZ0c1tpXTtcbiAgICAgICAgICAgIGlmIChiaW4ubGlzdGVuZXIgPT0gbGlzdGVuZXIgJiYgYmluLm9iamVjdCA9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBldnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGRzdEdyb3VwW2V2ZW50XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOWIhue7hOWGheaJgOacieS6i+S7tlxuICAgICAqIEBwYXJhbSBncm91cCDliIbnu4TlkI3np7BcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgb2ZmR3JvdXBBbGwoZ3JvdXA6IHN0cmluZykge1xuICAgICAgICBsZXQgZGljdEV2ZW50ID0gdGhpcy5ncm91cEV2dFtncm91cF07XG4gICAgICAgIGlmICghZGljdEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cEV2dFtncm91cF0gPSB7fTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICog6Kem5Y+R5YWo5bGA5LqL5Lu2IFxuICAgICAqIEBwYXJhbSBldmVudChzdHJpbmcpICAgICAg5LqL5Lu25ZCNXG4gICAgICogQHBhcmFtIGFyZ3MoYW55KSAgICAgICAgICDkuovku7blj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZW1pdChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBsZXQgbGlzdDogQXJyYXk8RXZlbnREYXRhPiA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgaWYgKGxpc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXA6IEFycmF5PEV2ZW50RGF0YT4gPSBsaXN0LmNvbmNhdCgpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRlbXAubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBldmVudEJpbiA9IHRlbXBbaV07XG4gICAgICAgICAgICAgICAgZXZlbnRCaW4ubGlzdGVuZXIuY2FsbChldmVudEJpbi5vYmplY3QsIGV2ZW50LCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgICAgICog6Kem5Y+R5YWo5bGA5LqL5Lu2IFxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXAg5YiG57uE5ZCN56ewXG4gICAgICAgICAqIEBwYXJhbSBldmVudChzdHJpbmcpICAgICAg5LqL5Lu25ZCNXG4gICAgICAgICAqIEBwYXJhbSBhcmdzKGFueSkgICAgICAgICAg5LqL5Lu25Y+C5pWwXG4gICAgICAgICAqL1xuICAgIHB1YmxpYyBlbWl0R3JvdXAoZ3JvdXA6IHN0cmluZywgZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgbGV0IGRpY3RFdmVudCA9IHRoaXMuZ3JvdXBFdnRbZ3JvdXBdO1xuICAgICAgICBpZiAoIWRpY3RFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0ID0gZGljdEV2ZW50W2V2ZW50XTtcbiAgICAgICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcDogQXJyYXk8RXZlbnREYXRhPiA9IGxpc3QuY29uY2F0KCk7XG4gICAgICAgIGxldCBsZW5ndGggPSB0ZW1wLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGV2ZW50QmluID0gdGVtcFtpXTtcbiAgICAgICAgICAgIGV2ZW50QmluLmxpc3RlbmVyLmNhbGwoZXZlbnRCaW4ub2JqZWN0LCBldmVudCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50TWFuYWdlcjtcbiAgICB9XG59XG5cbmMyZi5ldmVudCA9IEV2ZW50TWFuYWdlci5pbnN0YW5jZTtcbmV4cG9ydCB7IH07Il19