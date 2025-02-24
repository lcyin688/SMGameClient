"use strict";
cc._RF.push(module, 'f6b35KouaZCFpyRaoVcWe23', 'UIAnimaDef');
// c2f-framework/define/UIAnimaDef.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIAnimaTarget = exports.UIAnimaOnce = exports.UIAnimaParam = exports.UIAnimaFunc = exports.UIAnimaType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIAnimaType;
(function (UIAnimaType) {
    UIAnimaType[UIAnimaType["none"] = 0] = "none";
    UIAnimaType[UIAnimaType["move"] = 1] = "move";
    UIAnimaType[UIAnimaType["scale"] = 2] = "scale";
    UIAnimaType[UIAnimaType["opacity"] = 3] = "opacity";
    UIAnimaType[UIAnimaType["ratation"] = 4] = "ratation";
    UIAnimaType[UIAnimaType["function"] = 5] = "function";
    UIAnimaType[UIAnimaType["delay"] = 6] = "delay";
})(UIAnimaType = exports.UIAnimaType || (exports.UIAnimaType = {}));
var UIAnimaFunc = /** @class */ (function () {
    function UIAnimaFunc() {
        this.tarNode = null;
        this.compName = '';
        this.funcName = '';
    }
    __decorate([
        property(cc.Node)
    ], UIAnimaFunc.prototype, "tarNode", void 0);
    __decorate([
        property()
    ], UIAnimaFunc.prototype, "compName", void 0);
    __decorate([
        property()
    ], UIAnimaFunc.prototype, "funcName", void 0);
    UIAnimaFunc = __decorate([
        ccclass("UIAnimaFunc")
    ], UIAnimaFunc);
    return UIAnimaFunc;
}());
exports.UIAnimaFunc = UIAnimaFunc;
var UIAnimaParam = /** @class */ (function () {
    function UIAnimaParam() {
        this.animaTp = UIAnimaType.none;
        this.byVec2 = cc.v2(0, 0);
        this.byNum = 0;
        this.cbHandler = new UIAnimaFunc();
    }
    __decorate([
        property({ type: cc.Enum(UIAnimaType) })
    ], UIAnimaParam.prototype, "animaTp", void 0);
    __decorate([
        property({ visible: function () { return this.animaTp === UIAnimaType.move || this.animaTp === UIAnimaType.scale; } })
    ], UIAnimaParam.prototype, "byVec2", void 0);
    __decorate([
        property({ visible: function () { return this.animaTp === UIAnimaType.opacity || this.animaTp === UIAnimaType.ratation; } })
    ], UIAnimaParam.prototype, "byNum", void 0);
    __decorate([
        property({ type: UIAnimaFunc, visible: function () { return this.animaTp === UIAnimaType.function; } })
    ], UIAnimaParam.prototype, "cbHandler", void 0);
    UIAnimaParam = __decorate([
        ccclass("UIAnimaParam")
    ], UIAnimaParam);
    return UIAnimaParam;
}());
exports.UIAnimaParam = UIAnimaParam;
var UIAnimaOnce = /** @class */ (function () {
    function UIAnimaOnce() {
        this.duration = 0;
        this.animaList = [];
    }
    __decorate([
        property()
    ], UIAnimaOnce.prototype, "duration", void 0);
    __decorate([
        property(UIAnimaParam)
    ], UIAnimaOnce.prototype, "animaList", void 0);
    UIAnimaOnce = __decorate([
        ccclass("UIAnimaOnce")
    ], UIAnimaOnce);
    return UIAnimaOnce;
}());
exports.UIAnimaOnce = UIAnimaOnce;
var UIAnimaTarget = /** @class */ (function () {
    function UIAnimaTarget() {
        this.tarNode = null;
        this.actionList = [];
    }
    __decorate([
        property(cc.Node)
    ], UIAnimaTarget.prototype, "tarNode", void 0);
    __decorate([
        property(UIAnimaOnce)
    ], UIAnimaTarget.prototype, "actionList", void 0);
    UIAnimaTarget = __decorate([
        ccclass("UIAnimaTarget")
    ], UIAnimaTarget);
    return UIAnimaTarget;
}());
exports.UIAnimaTarget = UIAnimaTarget;

cc._RF.pop();