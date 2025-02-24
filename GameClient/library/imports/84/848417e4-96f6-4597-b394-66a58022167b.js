"use strict";
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