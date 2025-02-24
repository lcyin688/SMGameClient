"use strict";
cc._RF.push(module, '0798241B+5P3bcmVbpZzC3j', 'YngyMainView');
// gameYngy/script/YngyMain/YngyMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyMainView.ts .
// If you need add data, please write in YngyMainViewModel.ts .
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
var YngyMainView = /** @class */ (function (_super) {
    __extends(YngyMainView, _super);
    function YngyMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_YngyMain';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.lvPanelSprite = undefined;
        _this.seletedSprite = undefined;
        return _this;
    }
    YngyMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    YngyMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    YngyMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    YngyMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.lvPanel = this.get('_lvPanel_');
        this.lvPanelSprite = this.lvPanel.getComponent(cc.Sprite);
        this.seleted = this.get('_seleted_');
        this.seletedSprite = this.seleted.getComponent(cc.Sprite);
    };
    YngyMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    YngyMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    YngyMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    YngyMainView = __decorate([
        ccclass
    ], YngyMainView);
    return YngyMainView;
}(UIViewBase_1.UIViewBase));
exports.default = YngyMainView;

cc._RF.pop();