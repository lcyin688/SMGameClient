"use strict";
cc._RF.push(module, '720caHihc9OtL5lLAQv0xzq', 'SoundSetView');
// entrance/script/SoundSet/SoundSetView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in SoundSetView.ts .
// If you need add data, please write in SoundSetViewModel.ts .
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
var UIViewBase_1 = require("./../../../c2f-framework/gui/layer/UIViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundSetView = /** @class */ (function (_super) {
    __extends(SoundSetView, _super);
    function SoundSetView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'V_SoundSet';
        _this.soundBgSprite = undefined;
        _this.soundBgButton = undefined;
        _this.soundEffSprite = undefined;
        _this.soundEffButton = undefined;
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        return _this;
    }
    SoundSetView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SoundSetView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    SoundSetView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    SoundSetView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.soundBg = this.get('_soundBg_');
        this.soundBgSprite = this.soundBg.getComponent(cc.Sprite);
        this.soundBgButton = this.soundBg.getComponent(cc.Button);
        this.soundEff = this.get('_soundEff_');
        this.soundEffSprite = this.soundEff.getComponent(cc.Sprite);
        this.soundEffButton = this.soundEff.getComponent(cc.Button);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
    };
    SoundSetView.prototype.addEvent = function () {
        this.soundBgButton.node.on('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.on('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
    };
    SoundSetView.prototype.removeEvent = function () {
        this.soundBgButton.node.off('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.off('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
    };
    SoundSetView.prototype.onsoundBgButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView.prototype.onsoundEffButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    SoundSetView = __decorate([
        ccclass
    ], SoundSetView);
    return SoundSetView;
}(UIViewBase_1.UIViewBase));
exports.default = SoundSetView;

cc._RF.pop();