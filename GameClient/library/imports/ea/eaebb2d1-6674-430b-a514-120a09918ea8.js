"use strict";
cc._RF.push(module, 'eaebbLRZnRDC6UUEgoJkY6o', 'GameLoadingView');
// entrance/script/GameLoading/GameLoadingView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoadingView.ts .
// If you need add data, please write in GameLoadingViewModel.ts .
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
var GameLoadingView = /** @class */ (function (_super) {
    __extends(GameLoadingView, _super);
    function GameLoadingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLoading';
        _this.barLoadingSprite = undefined;
        _this.barLoadingProgressBar = undefined;
        _this.noticeBotLabel = undefined;
        _this.noticeBotLabelOutline = undefined;
        _this.progressLabel = undefined;
        _this.progressLabelOutline = undefined;
        return _this;
    }
    GameLoadingView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLoadingView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLoadingView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLoadingView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.barLoading = this.get('_barLoading_');
        this.barLoadingSprite = this.barLoading.getComponent(cc.Sprite);
        this.barLoadingProgressBar = this.barLoading.getComponent(cc.ProgressBar);
        this.noticeBot = this.get('_noticeBot_');
        this.noticeBotLabel = this.noticeBot.getComponent(cc.Label);
        this.noticeBotLabelOutline = this.noticeBot.getComponent(cc.LabelOutline);
        this.progress = this.get('_progress_');
        this.progressLabel = this.progress.getComponent(cc.Label);
        this.progressLabelOutline = this.progress.getComponent(cc.LabelOutline);
    };
    GameLoadingView.prototype.addEvent = function () {
    };
    GameLoadingView.prototype.removeEvent = function () {
    };
    GameLoadingView = __decorate([
        ccclass
    ], GameLoadingView);
    return GameLoadingView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLoadingView;

cc._RF.pop();