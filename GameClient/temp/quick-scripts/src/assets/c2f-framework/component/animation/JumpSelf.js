"use strict";
cc._RF.push(module, 'cfbd3YNkF9FMJ5N/GM4LDfG', 'JumpSelf');
// c2f-framework/component/animation/JumpSelf.ts

"use strict";
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
exports.JumpSelf = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var JumpSelf = /** @class */ (function (_super) {
    __extends(JumpSelf, _super);
    function JumpSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleMin = cc.v2(0.6, 0.6);
        _this.scaleMax = cc.v2(1.5, 1.5);
        _this.intervalDur = 1;
        _this.jumpHeight = 50;
        _this.stepDur = 0.1;
        _this.playOnLoad = true;
        return _this;
    }
    JumpSelf.prototype.onLoad = function () {
    };
    JumpSelf.prototype.start = function () {
        var _this = this;
        if (this.playOnLoad) {
            this.scheduleOnce(function () {
                _this.playAnima();
            });
        }
    };
    JumpSelf.prototype.resetState = function () {
        this.node.setScale(1, 1, 1);
        this.node.setPosition(0, 0, 0);
    };
    JumpSelf.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.resetState();
    };
    JumpSelf.prototype.playAnima = function () {
        this.stopAnima();
        var twSub1 = cc.tween(this.node)
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scaleX: this.scaleMin.x, scaleY: this.scaleMax.y })
            .to(this.stepDur, { position: cc.v3(0, this.jumpHeight, 0), scale: 1 })
            .to(this.stepDur, { position: cc.v3(0, 0, 0), scaleX: 1, scaleY: this.scaleMax.y })
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scale: 1 });
        var twSub2 = cc.tween(this.node).delay(this.intervalDur);
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    __decorate([
        property({ tooltip: "最小缩放" })
    ], JumpSelf.prototype, "scaleMin", void 0);
    __decorate([
        property({ tooltip: "最大缩放" })
    ], JumpSelf.prototype, "scaleMax", void 0);
    __decorate([
        property({ serializable: true, tooltip: "动画间隔" })
    ], JumpSelf.prototype, "intervalDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "跳跃高度" })
    ], JumpSelf.prototype, "jumpHeight", void 0);
    __decorate([
        property({ serializable: true, tooltip: "分步执行时长" })
    ], JumpSelf.prototype, "stepDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "自动播放" })
    ], JumpSelf.prototype, "playOnLoad", void 0);
    JumpSelf = __decorate([
        ccclass,
        menu('c2f/animation/JumpSelf')
    ], JumpSelf);
    return JumpSelf;
}(cc.Component));
exports.JumpSelf = JumpSelf;

cc._RF.pop();