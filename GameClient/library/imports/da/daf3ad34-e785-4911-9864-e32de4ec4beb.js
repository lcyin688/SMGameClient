"use strict";
cc._RF.push(module, 'daf3a0054VJEZhk4y3k7Evr', 'AuditItem');
// c2f-framework/component/ui/audit/AuditItem.ts

"use strict";
/**
 * 提审·设置目标
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditItem = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var AuditItem = /** @class */ (function () {
    function AuditItem() {
        this.target = null;
        this._controlVisible = false;
        this._tsVisible = false;
        this._controlOpacity = false;
        this._tsOpacity = 0;
        this._btnDisableOp0 = false;
    }
    Object.defineProperty(AuditItem.prototype, "controlVisible", {
        get: function () {
            return this._controlVisible;
        },
        set: function (visible) {
            this._controlVisible = visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "tsVisible", {
        get: function () {
            return this._tsVisible;
        },
        set: function (show) {
            this._tsVisible = show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "controlOpacity", {
        get: function () {
            return this._controlOpacity;
        },
        set: function (visible) {
            this._controlOpacity = visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "tsOpacity", {
        get: function () {
            return this._tsOpacity;
        },
        set: function (value) {
            this._tsOpacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "btnDisableOp0", {
        get: function () {
            return this._btnDisableOp0;
        },
        set: function (value) {
            this._btnDisableOp0 = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表容器节点",
        })
    ], AuditItem.prototype, "target", void 0);
    __decorate([
        property()
    ], AuditItem.prototype, "_controlVisible", void 0);
    __decorate([
        property({ tooltip: '控制目标节点可见性' })
    ], AuditItem.prototype, "controlVisible", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_tsVisible", void 0);
    __decorate([
        property({ tooltip: '目标节点是否可见性', visible: function () { return this.controlVisible; } })
    ], AuditItem.prototype, "tsVisible", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_controlOpacity", void 0);
    __decorate([
        property({ tooltip: '控制目标节点透明度' })
    ], AuditItem.prototype, "controlOpacity", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_tsOpacity", void 0);
    __decorate([
        property({ tooltip: '目标节点透明度', visible: function () { return this.controlOpacity; } })
    ], AuditItem.prototype, "tsOpacity", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_btnDisableOp0", void 0);
    __decorate([
        property({ tooltip: '目标节点透明度为0时，其button组件无效', visible: function () { return this.controlOpacity; } })
    ], AuditItem.prototype, "btnDisableOp0", null);
    AuditItem = __decorate([
        ccclass("AuditItem"),
        executeInEditMode
    ], AuditItem);
    return AuditItem;
}());
exports.AuditItem = AuditItem;

cc._RF.pop();