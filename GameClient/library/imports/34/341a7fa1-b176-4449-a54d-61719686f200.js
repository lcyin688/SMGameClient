"use strict";
cc._RF.push(module, '341a7+hsXZESaVNYXGWhvIA', 'BoxGameResultView');
// boxGame/script/BoxGameResult/BoxGameResultView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameResultView.ts .
// If you need add data, please write in BoxGameResultViewModel.ts .
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
var BoxGameResultView = /** @class */ (function (_super) {
    __extends(BoxGameResultView, _super);
    function BoxGameResultView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameResult';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.iconSprite = undefined;
        _this.txt_betLabel = undefined;
        return _this;
    }
    BoxGameResultView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxGameResultView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxGameResultView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxGameResultView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.txt_bet = this.get('_txt_bet_');
        this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
    };
    BoxGameResultView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
    };
    BoxGameResultView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
    };
    BoxGameResultView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameResultView = __decorate([
        ccclass
    ], BoxGameResultView);
    return BoxGameResultView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxGameResultView;

cc._RF.pop();