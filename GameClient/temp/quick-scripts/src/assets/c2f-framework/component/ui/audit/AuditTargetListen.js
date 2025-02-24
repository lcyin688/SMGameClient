"use strict";
cc._RF.push(module, '4d07eYsNrxOKZRekAhYcC8W', 'AuditTargetListen');
// c2f-framework/component/ui/audit/AuditTargetListen.ts

"use strict";
/**
 * 提审·目标监听
 */
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
exports.AuditTargetListen = void 0;
var C2FEnum_1 = require("../../../define/C2FEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AuditTargetListen = /** @class */ (function (_super) {
    __extends(AuditTargetListen, _super);
    function AuditTargetListen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuditTargetListen.prototype.onEnable = function () {
        this.node.emit(C2FEnum_1.C2FEnum.ExtEvent.NodeActiveChanged, this.node);
    };
    AuditTargetListen.prototype.onDisable = function () {
        this.node.emit(C2FEnum_1.C2FEnum.ExtEvent.NodeActiveChanged, this.node);
    };
    AuditTargetListen = __decorate([
        ccclass()
    ], AuditTargetListen);
    return AuditTargetListen;
}(cc.Component));
exports.AuditTargetListen = AuditTargetListen;

cc._RF.pop();