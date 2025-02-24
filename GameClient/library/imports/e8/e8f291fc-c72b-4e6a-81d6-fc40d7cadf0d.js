"use strict";
cc._RF.push(module, 'e8f29H8xytOaoHW/EDXyt8N', 'Notify');
// c2f-framework/gui/view/Notify.ts

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
exports.Notify = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 滚动消息提示组件  */
var Notify = /** @class */ (function (_super) {
    __extends(Notify, _super);
    function Notify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lab_content = null;
        _this.animation = null;
        return _this;
    }
    Notify.prototype.onLoad = function () {
        if (this.animation)
            this.animation.on(cc.Animation.EventType.FINISHED, this.onFinished, this);
    };
    Notify.prototype.onFinished = function () {
        this.node.destroy();
    };
    /**
     * 显示提示
     * @param msg       文本
     * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
     */
    Notify.prototype.toast = function (msg, useI18n) {
        var realMsg = msg;
        if (c2f.utils.str.isAllDigits(msg)) {
            var words = c2f.language.words(Number(msg));
            if (words) {
                realMsg = words;
            }
        }
        if (c2f.gui.gameFont && this.lab_content.font != c2f.gui.gameFont) {
            this.lab_content.font = c2f.gui.gameFont;
        }
        this.lab_content.string = realMsg;
    };
    __decorate([
        property(cc.Label)
    ], Notify.prototype, "lab_content", void 0);
    __decorate([
        property(cc.Animation)
    ], Notify.prototype, "animation", void 0);
    Notify = __decorate([
        ccclass
    ], Notify);
    return Notify;
}(cc.Component));
exports.Notify = Notify;

cc._RF.pop();