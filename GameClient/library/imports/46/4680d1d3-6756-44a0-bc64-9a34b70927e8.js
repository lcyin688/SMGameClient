"use strict";
cc._RF.push(module, '4680dHTZ1ZEoLxkmjS3CSfo', 'BreatheSelf');
// c2f-framework/component/animation/BreatheSelf.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var BreatheSelf = /** @class */ (function (_super) {
    __extends(BreatheSelf, _super);
    function BreatheSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lessenDur = 1;
        _this.lessenValue = 0.8;
        _this.magnifyDur = 2;
        _this.magnifyValue = 1.2;
        _this.playOnLoad = true;
        return _this;
    }
    BreatheSelf.prototype.onLoad = function () {
    };
    BreatheSelf.prototype.start = function () {
        var _this = this;
        if (this.playOnLoad) {
            this.scheduleOnce(function () {
                _this.playAnima();
            });
        }
    };
    BreatheSelf.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(1, 1, 1);
    };
    BreatheSelf.prototype.playAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(this.magnifyValue, this.magnifyValue, 1);
        var twSub1 = cc.tween(this.node).to(this.lessenDur, { scale: this.lessenValue });
        var twSub2 = cc.tween(this.node).to(this.magnifyDur, { scale: this.magnifyValue });
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start();
    };
    __decorate([
        property({ serializable: true, tooltip: "缩小所用时间" })
    ], BreatheSelf.prototype, "lessenDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "缩小尺寸" })
    ], BreatheSelf.prototype, "lessenValue", void 0);
    __decorate([
        property({ serializable: true, tooltip: "放大所用时间" })
    ], BreatheSelf.prototype, "magnifyDur", void 0);
    __decorate([
        property({ serializable: true, tooltip: "放大尺寸" })
    ], BreatheSelf.prototype, "magnifyValue", void 0);
    __decorate([
        property({ serializable: true, tooltip: "自动播放" })
    ], BreatheSelf.prototype, "playOnLoad", void 0);
    BreatheSelf = __decorate([
        ccclass,
        menu('c2f/animation/BreatheSelf')
    ], BreatheSelf);
    return BreatheSelf;
}(cc.Component));
exports.default = BreatheSelf;

cc._RF.pop();