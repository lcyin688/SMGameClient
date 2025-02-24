"use strict";
cc._RF.push(module, 'b31d03ujX5NlLMAU8z6EFXe', 'UIAudioEffect');
// c2f-framework/component/ui/button/UIAudioEffect.ts

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
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var C2FConst_1 = require("../../../define/C2FConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var UIAudioEffect = /** @class */ (function (_super) {
    __extends(UIAudioEffect, _super);
    function UIAudioEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioId = C2FConst_1.C2FConst.UIAudioID.unknown;
        _this.playOnClick = true;
        _this.playOnLoad = false;
        return _this;
    }
    UIAudioEffect.prototype.onLoad = function () {
        if (this.playOnClick) {
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        else if (this.playOnLoad) {
        }
    };
    UIAudioEffect.prototype.onDestroy = function () {
        if (this.playOnClick) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchtStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    UIAudioEffect.prototype.onTouchtStart = function (event) {
        UIHelper_1.UIHelper.playEffect("betClick");
    };
    UIAudioEffect.prototype.onTouchEnd = function (event) {
    };
    __decorate([
        property({
            type: cc.Enum(C2FConst_1.C2FConst.UIAudioID),
            tooltip: "音效类型"
        })
    ], UIAudioEffect.prototype, "audioId", void 0);
    __decorate([
        property({ tooltip: "点击时播放" })
    ], UIAudioEffect.prototype, "playOnClick", void 0);
    __decorate([
        property({ tooltip: "加载完成播放", visible: function () { return !this.playOnClick; } })
    ], UIAudioEffect.prototype, "playOnLoad", void 0);
    UIAudioEffect = __decorate([
        ccclass,
        menu("c2f/UI/UIAudioEffect")
    ], UIAudioEffect);
    return UIAudioEffect;
}(cc.Component));
exports.default = UIAudioEffect;

cc._RF.pop();