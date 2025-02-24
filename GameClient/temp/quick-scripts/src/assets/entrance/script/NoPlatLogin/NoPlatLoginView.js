"use strict";
cc._RF.push(module, 'bba6dTV2TpGgrO1R0bUM29t', 'NoPlatLoginView');
// entrance/script/NoPlatLogin/NoPlatLoginView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in NoPlatLoginView.ts .
// If you need add data, please write in NoPlatLoginViewModel.ts .
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
var LinkPrefab_1 = require("./../../../c2f-framework/component/common/LinkPrefab");
var PopDlgPanel_1 = require("./../controls/entity/PopDlgPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NoPlatLoginView = /** @class */ (function (_super) {
    __extends(NoPlatLoginView, _super);
    function NoPlatLoginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'NoPlatLogin';
        _this.dlgPanelLinkPrefab = undefined;
        _this.dlgPanelPopDlgPanel = undefined;
        _this.userIdEditBox = undefined;
        _this.platFlagEditBox = undefined;
        _this.payFlagEditBox = undefined;
        _this.loginButton = undefined;
        return _this;
    }
    NoPlatLoginView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoPlatLoginView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    NoPlatLoginView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    NoPlatLoginView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.dlgPanel = this.get('_dlgPanel_');
        this.dlgPanelLinkPrefab = this.dlgPanel.getComponent(LinkPrefab_1.default);
        this.dlgPanelPopDlgPanel = this.dlgPanel.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        this.userId = this.get('_userId_');
        this.userIdEditBox = this.userId.getComponent(cc.EditBox);
        this.platFlag = this.get('_platFlag_');
        this.platFlagEditBox = this.platFlag.getComponent(cc.EditBox);
        this.payFlag = this.get('_payFlag_');
        this.payFlagEditBox = this.payFlag.getComponent(cc.EditBox);
        this.login = this.get('_login_');
        this.loginButton = this.login.getComponent(cc.Button);
    };
    NoPlatLoginView.prototype.addEvent = function () {
        this.userIdEditBox.node.on('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.on('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.on('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.on('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.on('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.on('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.on('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.on('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.on('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.on('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.on('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.on('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.on('click', this.onloginButtonClick, this);
    };
    NoPlatLoginView.prototype.removeEvent = function () {
        this.userIdEditBox.node.off('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.off('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.off('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.off('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.off('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.off('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.off('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.off('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.off('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.off('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.off('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.off('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.off('click', this.onloginButtonClick, this);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onloginButtonClick = function (component) {
        this.emit('click', component);
    };
    NoPlatLoginView = __decorate([
        ccclass
    ], NoPlatLoginView);
    return NoPlatLoginView;
}(UIViewBase_1.UIViewBase));
exports.default = NoPlatLoginView;

cc._RF.pop();