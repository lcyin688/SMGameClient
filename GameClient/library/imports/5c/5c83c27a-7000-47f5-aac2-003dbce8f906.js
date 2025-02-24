"use strict";
cc._RF.push(module, '5c83cJ6cABH9arCAD286PkG', 'GameLogoView');
// entrance/script/GameLogo/GameLogoView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLogoView.ts .
// If you need add data, please write in GameLogoViewModel.ts .
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
var GameLogoView = /** @class */ (function (_super) {
    __extends(GameLogoView, _super);
    function GameLogoView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogo';
        _this.barSprite = undefined;
        _this.barProgressBar = undefined;
        return _this;
    }
    GameLogoView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLogoView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLogoView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLogoView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
    };
    GameLogoView.prototype.addEvent = function () {
    };
    GameLogoView.prototype.removeEvent = function () {
    };
    GameLogoView = __decorate([
        ccclass
    ], GameLogoView);
    return GameLogoView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLogoView;

cc._RF.pop();