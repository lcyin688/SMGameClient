"use strict";
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