"use strict";
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