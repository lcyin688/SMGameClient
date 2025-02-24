"use strict";
cc._RF.push(module, '7890cdVoaZJFolALdsc/6Nm', 'RedDotCompProxy');
// c2f-framework/redDot/RedDotCompProxy.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RedDotCompProxy = /** @class */ (function (_super) {
    __extends(RedDotCompProxy, _super);
    function RedDotCompProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.txtCount = null;
        return _this;
    }
    RedDotCompProxy.prototype.onDestroy = function () {
        if (this.dotKey) {
            c2f.dotMgr.deleteDataByCompDestory(this.dotKey, this);
        }
        _super.prototype.onDestroy.call(this);
    };
    RedDotCompProxy.prototype.start = function () {
        this.amendDotPos();
    };
    /** 修正红点位置 */
    RedDotCompProxy.prototype.amendDotPos = function () {
        var parent = this.node.parent;
        if (!parent) {
            return;
        }
        var rtX = (1 - parent.anchorX) * parent.width * parent.scaleX;
        var rtY = (1 - parent.anchorY) * parent.height * parent.scaleY;
        this.node.setPosition(cc.v2(rtX + this.offset.x, rtY + this.offset.y));
    };
    RedDotCompProxy.prototype.setShowType = function (showType) {
        _super.prototype.setShowType.call(this, showType);
        this.txtCount.node.active = (showType === c2f.RedDot.ShowType.Number);
        this.nodeMask.active = (showType === c2f.RedDot.ShowType.Mark);
    };
    RedDotCompProxy.prototype.updateCount = function (count) {
        this.txtCount.string = count.toString();
    };
    __decorate([
        property(cc.Node)
    ], RedDotCompProxy.prototype, "nodeMask", void 0);
    __decorate([
        property(cc.Label)
    ], RedDotCompProxy.prototype, "txtCount", void 0);
    RedDotCompProxy = __decorate([
        ccclass
    ], RedDotCompProxy);
    return RedDotCompProxy;
}(c2f.RedDotComp));
exports.default = RedDotCompProxy;

cc._RF.pop();