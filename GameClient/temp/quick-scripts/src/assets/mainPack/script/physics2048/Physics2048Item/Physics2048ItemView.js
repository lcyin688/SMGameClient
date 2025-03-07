"use strict";
cc._RF.push(module, '75d60cbuohLT4Q6yxHzi68I', 'Physics2048ItemView');
// mainPack/script/physics2048/Physics2048Item/Physics2048ItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048ItemView.ts .
// If you need add data, please write in Physics2048ItemViewModel.ts .
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
var UIPanelBase_1 = require("./../../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048ItemView = /** @class */ (function (_super) {
    __extends(Physics2048ItemView, _super);
    function Physics2048ItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Physics2048Item';
        _this.iconSprite = undefined;
        return _this;
    }
    Physics2048ItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Physics2048ItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    Physics2048ItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    Physics2048ItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
    };
    Physics2048ItemView.prototype.addEvent = function () {
    };
    Physics2048ItemView.prototype.removeEvent = function () {
    };
    Physics2048ItemView = __decorate([
        ccclass
    ], Physics2048ItemView);
    return Physics2048ItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = Physics2048ItemView;

cc._RF.pop();