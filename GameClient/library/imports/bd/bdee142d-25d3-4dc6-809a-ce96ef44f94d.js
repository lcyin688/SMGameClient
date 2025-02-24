"use strict";
cc._RF.push(module, 'bdee1QtJdNNxoCazpbvRPlN', 'UIVControlBase');
// c2f-framework/gui/layer/UIVControlBase.ts

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
exports.UIVControlBase = void 0;
var UIBase_1 = require("./UIBase");
var C2FEnum_1 = require("../../define/C2FEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIVControlBase = /** @class */ (function (_super) {
    __extends(UIVControlBase, _super);
    function UIVControlBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIVControlBase.prototype.onEnable = function () {
        this.on(C2FEnum_1.C2FEnum.Event.PopViewInAnimaCmpl, this.onInAnimaComplete, this);
    };
    UIVControlBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.offAll();
    };
    UIVControlBase.prototype.onDestroy = function () {
        this.model = null;
        this.view = null;
        _super.prototype.onDestroy.call(this);
    };
    /** 关闭本窗口 */
    UIVControlBase.prototype.closeView = function (releaseAll) {
        if (releaseAll === void 0) { releaseAll = true; }
        c2f.gui.removeByNode(this.node);
        if (releaseAll) {
            c2f.res.delayReleaseAll();
        }
    };
    /** 入场动画完成 */
    UIVControlBase.prototype.onInAnimaComplete = function () {
    };
    UIVControlBase = __decorate([
        ccclass
    ], UIVControlBase);
    return UIVControlBase;
}(UIBase_1.UIBase));
exports.UIVControlBase = UIVControlBase;

cc._RF.pop();