"use strict";
cc._RF.push(module, 'd7ceeIfjM9HYoWbgtG1+WKD', 'GameLoginView');
// entrance/script/GameLogin/GameLoginView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoginView.ts .
// If you need add data, please write in GameLoginViewModel.ts .
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
var GameLoginView = /** @class */ (function (_super) {
    __extends(GameLoginView, _super);
    function GameLoginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogin';
        _this.btn2048Button = undefined;
        _this.btnCreateMapButton = undefined;
        _this.btnStartButton = undefined;
        _this.btnBasketBallButton = undefined;
        _this.btnLoginButton = undefined;
        return _this;
    }
    GameLoginView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLoginView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLoginView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLoginView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btn2048 = this.get('_btn2048_');
        this.btn2048Button = this.btn2048.getComponent(cc.Button);
        this.btnCreateMap = this.get('_btnCreateMap_');
        this.btnCreateMapButton = this.btnCreateMap.getComponent(cc.Button);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.btnBasketBall = this.get('_btnBasketBall_');
        this.btnBasketBallButton = this.btnBasketBall.getComponent(cc.Button);
        this.btnLogin = this.get('_btnLogin_');
        this.btnLoginButton = this.btnLogin.getComponent(cc.Button);
    };
    GameLoginView.prototype.addEvent = function () {
        this.btn2048Button.node.on('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.on('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.on('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.on('click', this.onbtnLoginButtonClick, this);
    };
    GameLoginView.prototype.removeEvent = function () {
        this.btn2048Button.node.off('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.off('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.off('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.off('click', this.onbtnLoginButtonClick, this);
    };
    GameLoginView.prototype.onbtn2048ButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnCreateMapButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnStartButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnBasketBallButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnLoginButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView = __decorate([
        ccclass
    ], GameLoginView);
    return GameLoginView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLoginView;

cc._RF.pop();