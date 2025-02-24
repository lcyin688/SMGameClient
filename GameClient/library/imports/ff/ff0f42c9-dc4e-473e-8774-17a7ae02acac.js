"use strict";
cc._RF.push(module, 'ff0f4LJ3E5HPod0F6euAqys', 'YngyItemView');
// gameYngy/script/YngyItem/YngyItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyItemView.ts .
// If you need add data, please write in YngyItemViewModel.ts .
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
var UIPanelBase_1 = require("./../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyItemView = /** @class */ (function (_super) {
    __extends(YngyItemView, _super);
    function YngyItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_YngyItem';
        _this.iconSprite = undefined;
        _this.iconButton = undefined;
        return _this;
    }
    YngyItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    YngyItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    YngyItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    YngyItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconButton = this.icon.getComponent(cc.Button);
    };
    YngyItemView.prototype.addEvent = function () {
        this.iconButton.node.on('click', this.oniconButtonClick, this);
    };
    YngyItemView.prototype.removeEvent = function () {
        this.iconButton.node.off('click', this.oniconButtonClick, this);
    };
    YngyItemView.prototype.oniconButtonClick = function (component) {
        this.emit('click', component);
    };
    YngyItemView = __decorate([
        ccclass
    ], YngyItemView);
    return YngyItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = YngyItemView;

cc._RF.pop();