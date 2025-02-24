"use strict";
cc._RF.push(module, '08a4cwtdYhD/p2j71yoNU9K', 'RotationSelf');
// c2f-framework/component/animation/RotationSelf.ts

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
exports.RotationSelf = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var RotationSelf = /** @class */ (function (_super) {
    __extends(RotationSelf, _super);
    function RotationSelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onceDur = 5;
        _this.clockwise = true;
        return _this;
    }
    RotationSelf.prototype.onLoad = function () {
    };
    RotationSelf.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.playRotate();
        });
    };
    RotationSelf.prototype.playRotate = function () {
        var dstValue = this.clockwise ? 359 : -359;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .by(this.onceDur, { angle: dstValue })
            .repeatForever()
            .start();
    };
    __decorate([
        property({ serializable: true })
    ], RotationSelf.prototype, "onceDur", void 0);
    __decorate([
        property({ serializable: true })
    ], RotationSelf.prototype, "clockwise", void 0);
    RotationSelf = __decorate([
        ccclass,
        menu('c2f/animation/RotationSelf')
    ], RotationSelf);
    return RotationSelf;
}(cc.Component));
exports.RotationSelf = RotationSelf;

cc._RF.pop();