"use strict";
cc._RF.push(module, '675b9jSxWxEtLmrR+B8IRM6', 'ButtonLongPress');
// c2f-framework/component/ui/button/ButtonLongPress.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
/**
 * 长按按钮
 */
var ButtonLongPress = /** @class */ (function (_super) {
    __extends(ButtonLongPress, _super);
    function ButtonLongPress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchInterval = 0.1;
        _this.triggerHander = [];
        _this._counter = 0;
        _this._isTouching = false;
        return _this;
    }
    ButtonLongPress.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancle, this);
    };
    ButtonLongPress.prototype.onDisable = function () {
        this.stop();
    };
    ButtonLongPress.prototype._onTouchStart = function (evt) {
        if (this._isTouching) {
            return;
        }
        ;
        var btn = this.node.getComponent(cc.Button);
        if (btn && !btn.interactable) {
            return;
        }
        this._counter = 0;
        this._isTouching = true;
        this.schedule(this.triggerOnce, this.touchInterval);
    };
    ButtonLongPress.prototype._onTouchEnd = function (evt) {
        if (this._counter == 0 && this._isTouching) {
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
        this.stop();
    };
    ButtonLongPress.prototype._onTouchCancle = function (evt) {
        this.stop();
    };
    ButtonLongPress.prototype.triggerOnce = function (evt) {
        if (this._isTouching) {
            this._counter++;
            cc.Component.EventHandler.emitEvents(this.triggerHander, evt);
        }
    };
    ButtonLongPress.prototype.stop = function () {
        this._counter = 0;
        this._isTouching = false;
        this.unschedule(this.triggerOnce);
    };
    /** 快捷设置触发处理方法 */
    ButtonLongPress.prototype.quickSetTriggerHnadler = function (ower, handlerName) {
        this.triggerHander = [];
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.triggerHander.push(handler);
    };
    __decorate([
        property({ tooltip: '触发间隔时间' })
    ], ButtonLongPress.prototype, "touchInterval", void 0);
    __decorate([
        property({ type: cc.Component.EventHandler, tooltip: "触发事件" })
    ], ButtonLongPress.prototype, "triggerHander", void 0);
    ButtonLongPress = __decorate([
        ccclass,
        requireComponent(cc.Button),
        menu("c2f/UI/ButtonLongPress")
    ], ButtonLongPress);
    return ButtonLongPress;
}(cc.Component));
exports.default = ButtonLongPress;

cc._RF.pop();