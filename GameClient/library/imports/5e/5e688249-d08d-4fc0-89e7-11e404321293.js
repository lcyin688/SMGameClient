"use strict";
cc._RF.push(module, '5e688JJ0I1PwInnEeQEMhKT', 'Physics2048MainView');
// mainPack/script/physics2048/Physics2048Main/Physics2048MainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048MainView.ts .
// If you need add data, please write in Physics2048MainViewModel.ts .
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
var UIViewBase_1 = require("./../../../../c2f-framework/gui/layer/UIViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048MainView = /** @class */ (function (_super) {
    __extends(Physics2048MainView, _super);
    function Physics2048MainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_Physics2048Main';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.iconMaxSprite = undefined;
        _this.txtCurScoreLabel = undefined;
        _this.contentWidget = undefined;
        _this.effectWidget = undefined;
        _this.txtTotalScoreLabel = undefined;
        _this.iconSprite = undefined;
        _this.iconRigidBody = undefined;
        _this.iconPhysicsCircleCollider = undefined;
        return _this;
    }
    Physics2048MainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Physics2048MainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    Physics2048MainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    Physics2048MainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.iconMax = this.get('_iconMax_');
        this.iconMaxSprite = this.iconMax.getComponent(cc.Sprite);
        this.txtCurScore = this.get('_txtCurScore_');
        this.txtCurScoreLabel = this.txtCurScore.getComponent(cc.Label);
        this.initPos = this.get('_initPos_');
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
        this.effect = this.get('_effect_');
        this.effectWidget = this.effect.getComponent(cc.Widget);
        this.txtTotalScore = this.get('_txtTotalScore_');
        this.txtTotalScoreLabel = this.txtTotalScore.getComponent(cc.Label);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconRigidBody = this.icon.getComponent(cc.RigidBody);
        this.iconPhysicsCircleCollider = this.icon.getComponent(cc.PhysicsCircleCollider);
    };
    Physics2048MainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    Physics2048MainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    Physics2048MainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    Physics2048MainView = __decorate([
        ccclass
    ], Physics2048MainView);
    return Physics2048MainView;
}(UIViewBase_1.UIViewBase));
exports.default = Physics2048MainView;

cc._RF.pop();