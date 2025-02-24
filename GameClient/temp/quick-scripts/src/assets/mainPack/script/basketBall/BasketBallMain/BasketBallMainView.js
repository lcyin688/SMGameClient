"use strict";
cc._RF.push(module, 'bba39gmbZ5PNZKn4q+T0Ozz', 'BasketBallMainView');
// mainPack/script/basketBall/BasketBallMain/BasketBallMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BasketBallMainView.ts .
// If you need add data, please write in BasketBallMainViewModel.ts .
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
var BasketBallMainView = /** @class */ (function (_super) {
    __extends(BasketBallMainView, _super);
    function BasketBallMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BasketBallMain';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.txtCountLabel = undefined;
        _this.leftSprite = undefined;
        _this.leftBoxCollider = undefined;
        _this.rightSprite = undefined;
        _this.rightBoxCollider = undefined;
        _this.lineSprite = undefined;
        _this.contentWidget = undefined;
        return _this;
    }
    BasketBallMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BasketBallMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BasketBallMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BasketBallMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.txtCount = this.get('_txtCount_');
        this.txtCountLabel = this.txtCount.getComponent(cc.Label);
        this.left = this.get('_left_');
        this.leftSprite = this.left.getComponent(cc.Sprite);
        this.leftBoxCollider = this.left.getComponent(cc.BoxCollider);
        this.right = this.get('_right_');
        this.rightSprite = this.right.getComponent(cc.Sprite);
        this.rightBoxCollider = this.right.getComponent(cc.BoxCollider);
        this.line = this.get('_line_');
        this.lineSprite = this.line.getComponent(cc.Sprite);
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
        this.initPos = this.get('_initPos_');
    };
    BasketBallMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    BasketBallMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    BasketBallMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    BasketBallMainView = __decorate([
        ccclass
    ], BasketBallMainView);
    return BasketBallMainView;
}(UIViewBase_1.UIViewBase));
exports.default = BasketBallMainView;

cc._RF.pop();