"use strict";
cc._RF.push(module, 'be533baN2NNOKFhSaS8tiz2', 'TouchEffect');
// c2f-framework/gui/view/TouchEffect.ts

"use strict";
/** 点击特效 */
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
exports.TouchEffect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEffect = /** @class */ (function (_super) {
    __extends(TouchEffect, _super);
    function TouchEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spEfxDt = null;
        return _this;
    }
    TouchEffect.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node['_touchListener'].swallowTouches = false;
    };
    TouchEffect.prototype.onTouchStart = function (event) {
        var maxCnt = 5;
        if (!this.spEfxDt || this.node.children.length > maxCnt) {
            return;
        }
        var worldPoint = event.getLocation();
        var posInNode = this.node.convertToNodeSpaceAR(worldPoint);
        var spNode = new cc.Node();
        spNode.setPosition(posInNode);
        spNode.scale = 1;
        spNode.angle = Math.random() * 360;
        var newSpine = spNode.addComponent(sp.Skeleton);
        newSpine.premultipliedAlpha = false;
        newSpine.enableBatch = true;
        newSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
        spNode.parent = this.node;
        newSpine.skeletonData = this.spEfxDt;
        newSpine.setAnimation(0, "idle", false);
        newSpine.setCompleteListener(function (data) {
            spNode.destroy();
        });
    };
    __decorate([
        property(sp.SkeletonData)
    ], TouchEffect.prototype, "spEfxDt", void 0);
    TouchEffect = __decorate([
        ccclass
    ], TouchEffect);
    return TouchEffect;
}(cc.Component));
exports.TouchEffect = TouchEffect;

cc._RF.pop();