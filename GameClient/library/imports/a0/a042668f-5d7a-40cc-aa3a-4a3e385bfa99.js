"use strict";
cc._RF.push(module, 'a0426aPXXpAzKo6Sj44W/qZ', 'DesStarMainView');
// mainPack/script/desStar/DesStarMain/DesStarMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in DesStarMainView.ts .
// If you need add data, please write in DesStarMainViewModel.ts .
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
var DesStarMainView = /** @class */ (function (_super) {
    __extends(DesStarMainView, _super);
    function DesStarMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_DesStarMain';
        _this.barSprite = undefined;
        _this.barProgressBar = undefined;
        _this.txtLvLabel = undefined;
        _this.txtLvLabelOutline = undefined;
        _this.txtScoreLabel = undefined;
        _this.txtScoreLabelOutline = undefined;
        _this.rewardSprite = undefined;
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        return _this;
    }
    DesStarMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DesStarMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    DesStarMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    DesStarMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
        this.txtLv = this.get('_txtLv_');
        this.txtLvLabel = this.txtLv.getComponent(cc.Label);
        this.txtLvLabelOutline = this.txtLv.getComponent(cc.LabelOutline);
        this.txtScore = this.get('_txtScore_');
        this.txtScoreLabel = this.txtScore.getComponent(cc.Label);
        this.txtScoreLabelOutline = this.txtScore.getComponent(cc.LabelOutline);
        this.endPos = this.get('_endPos_');
        this.content = this.get('_content_');
        this.reward = this.get('_reward_');
        this.rewardSprite = this.reward.getComponent(cc.Sprite);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
    };
    DesStarMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    DesStarMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    DesStarMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    DesStarMainView = __decorate([
        ccclass
    ], DesStarMainView);
    return DesStarMainView;
}(UIViewBase_1.UIViewBase));
exports.default = DesStarMainView;

cc._RF.pop();