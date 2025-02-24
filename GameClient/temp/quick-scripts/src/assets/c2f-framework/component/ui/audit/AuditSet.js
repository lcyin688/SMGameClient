"use strict";
cc._RF.push(module, '26620LS4CZNnI4J2rOY03D7', 'AuditSet');
// c2f-framework/component/ui/audit/AuditSet.ts

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
var C2FEnum_1 = require("../../../define/C2FEnum");
var AuditItem_1 = require("./AuditItem");
var AuditTargetListen_1 = require("./AuditTargetListen");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var AuditSet = /** @class */ (function (_super) {
    __extends(AuditSet, _super);
    function AuditSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targets = [];
        return _this;
    }
    AuditSet.prototype.onLoad = function () {
    };
    AuditSet.prototype.start = function () {
        this.updateView();
    };
    ;
    AuditSet.prototype.updateView = function () {
        var isAudit = szg.plat.isAudit;
        if (!isAudit) {
            return;
        }
        for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
            var one = _a[_i];
            if (!one.target || !one.target.isValid) {
                continue;
            }
            this.updateTarget(one);
        }
    };
    AuditSet.prototype.updateTarget = function (one) {
        var listen = one.target.getComponent(AuditTargetListen_1.AuditTargetListen);
        if (!listen) {
            listen = one.target.addComponent(AuditTargetListen_1.AuditTargetListen);
            one.target.on(C2FEnum_1.C2FEnum.ExtEvent.NodeActiveChanged, this.onTargetActiveChanged, this);
        }
        if (one.controlVisible) {
            one.target.active = one.tsVisible;
        }
        if (one.controlOpacity) {
            one.target.opacity = one.tsOpacity;
            var btnComp = one.target.getComponent(cc.Button);
            if (btnComp) {
                btnComp.interactable = one.tsOpacity > 0;
            }
        }
    };
    AuditSet.prototype.onTargetActiveChanged = function (target) {
        var find = this.targets.find(function (a) { return a.target == target; });
        if (find) {
            this.updateTarget(find);
        }
    };
    __decorate([
        property(AuditItem_1.AuditItem)
    ], AuditSet.prototype, "targets", void 0);
    AuditSet = __decorate([
        ccclass,
        menu('c2f/audit/AuditSet')
    ], AuditSet);
    return AuditSet;
}(cc.Component));
exports.default = AuditSet;

cc._RF.pop();