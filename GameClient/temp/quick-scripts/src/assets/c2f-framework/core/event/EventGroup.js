"use strict";
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