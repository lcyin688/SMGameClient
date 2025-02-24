"use strict";
cc._RF.push(module, 'f9fc30gimhKpK1QGuRZuig3', 'BoxGameMainView');
// boxGame/script/BoxGameMain/BoxGameMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameMainView.ts .
// If you need add data, please write in BoxGameMainViewModel.ts .
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
var CountdownLabel_1 = require("./../../../c2f-framework/component/common/CountdownLabel");
var LinkPrefab_1 = require("./../../../c2f-framework/component/common/LinkPrefab");
var BoxItem_1 = require("./../BoxItem/BoxItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxGameMainView = /** @class */ (function (_super) {
    __extends(BoxGameMainView, _super);
    function BoxGameMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameMain';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.txt_timeLabel = undefined;
        _this.txt_timeCountdownLabel = undefined;
        _this.txt_1Label = undefined;
        _this.txt_com2Label = undefined;
        _this.txt_lessLabel = undefined;
        _this.txt_levelLabel = undefined;
        _this.box1LinkPrefab = undefined;
        _this.box1BoxItem = undefined;
        _this.box2LinkPrefab = undefined;
        _this.box2BoxItem = undefined;
        _this.box3LinkPrefab = undefined;
        _this.box3BoxItem = undefined;
        _this.btnStartButton = undefined;
        _this.txt_startCountLabel = undefined;
        _this.txt_count1Label = undefined;
        _this.txt_count2Label = undefined;
        _this.txt_count3Label = undefined;
        _this.boxBtnSprite = undefined;
        _this.boxBtnButton = undefined;
        _this.txt_adLabel = undefined;
        return _this;
    }
    BoxGameMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxGameMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxGameMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxGameMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.txt_time = this.get('_txt_time_');
        this.txt_timeLabel = this.txt_time.getComponent(cc.Label);
        this.txt_timeCountdownLabel = this.txt_time.getComponent(CountdownLabel_1.default);
        this.txt_1 = this.get('_txt_1_');
        this.txt_1Label = this.txt_1.getComponent(cc.Label);
        this.complete = this.get('_complete_');
        this.txt_com2 = this.get('_txt_com2_');
        this.txt_com2Label = this.txt_com2.getComponent(cc.Label);
        this.less = this.get('_less_');
        this.txt_less = this.get('_txt_less_');
        this.txt_lessLabel = this.txt_less.getComponent(cc.Label);
        this.txt_level = this.get('_txt_level_');
        this.txt_levelLabel = this.txt_level.getComponent(cc.Label);
        this.box1 = this.get('_box1_');
        this.box1LinkPrefab = this.box1.getComponent(LinkPrefab_1.default);
        this.box1BoxItem = this.box1.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.box2 = this.get('_box2_');
        this.box2LinkPrefab = this.box2.getComponent(LinkPrefab_1.default);
        this.box2BoxItem = this.box2.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.box3 = this.get('_box3_');
        this.box3LinkPrefab = this.box3.getComponent(LinkPrefab_1.default);
        this.box3BoxItem = this.box3.getComponent(LinkPrefab_1.default).getComponentEx(BoxItem_1.default);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.txt_startCount = this.get('_txt_startCount_');
        this.txt_startCountLabel = this.txt_startCount.getComponent(cc.Label);
        this.txt_count1 = this.get('_txt_count1_');
        this.txt_count1Label = this.txt_count1.getComponent(cc.Label);
        this.txt_count2 = this.get('_txt_count2_');
        this.txt_count2Label = this.txt_count2.getComponent(cc.Label);
        this.txt_count3 = this.get('_txt_count3_');
        this.txt_count3Label = this.txt_count3.getComponent(cc.Label);
        this.boxBtn = this.get('_boxBtn_');
        this.boxBtnSprite = this.boxBtn.getComponent(cc.Sprite);
        this.boxBtnButton = this.boxBtn.getComponent(cc.Button);
        this.txt_ad = this.get('_txt_ad_');
        this.txt_adLabel = this.txt_ad.getComponent(cc.Label);
    };
    BoxGameMainView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.on('click', this.onboxBtnButtonClick, this);
    };
    BoxGameMainView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.boxBtnButton.node.off('click', this.onboxBtnButtonClick, this);
    };
    BoxGameMainView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView.prototype.onbtnStartButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView.prototype.onboxBtnButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameMainView = __decorate([
        ccclass
    ], BoxGameMainView);
    return BoxGameMainView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxGameMainView;

cc._RF.pop();