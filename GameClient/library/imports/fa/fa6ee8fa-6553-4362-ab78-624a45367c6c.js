"use strict";
cc._RF.push(module, 'fa6eej6ZVNDYqt4YkpFNnxs', 'BoxTimeView');
// boxGame/script/BoxTime/BoxTimeView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxTimeView.ts .
// If you need add data, please write in BoxTimeViewModel.ts .
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
var BoxTimeView = /** @class */ (function (_super) {
    __extends(BoxTimeView, _super);
    function BoxTimeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxTime';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.txt_betLabel = undefined;
        _this.btm_doubleSprite = undefined;
        _this.btm_doubleButton = undefined;
        return _this;
    }
    BoxTimeView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxTimeView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxTimeView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxTimeView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.txt_bet = this.get('_txt_bet_');
        this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
        this.btm_double = this.get('_btm_double_');
        this.btm_doubleSprite = this.btm_double.getComponent(cc.Sprite);
        this.btm_doubleButton = this.btm_double.getComponent(cc.Button);
    };
    BoxTimeView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.on('click', this.onbtm_doubleButtonClick, this);
    };
    BoxTimeView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.off('click', this.onbtm_doubleButtonClick, this);
    };
    BoxTimeView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxTimeView.prototype.onbtm_doubleButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxTimeView = __decorate([
        ccclass
    ], BoxTimeView);
    return BoxTimeView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxTimeView;

cc._RF.pop();