
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/audit/AuditTargetListen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hdWRpdC9BdWRpdFRhcmdldExpc3Rlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxtREFBa0Q7QUFHNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMscUNBQVk7SUFBbkQ7O0lBU0EsQ0FBQztJQVBhLG9DQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFUyxxQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBUlEsaUJBQWlCO1FBRDdCLE9BQU8sRUFBRTtPQUNHLGlCQUFpQixDQVM3QjtJQUFELHdCQUFDO0NBVEQsQUFTQyxDQVRzQyxFQUFFLENBQUMsU0FBUyxHQVNsRDtBQVRZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o+Q5a6hwrfnm67moIfnm5HlkKxcbiAqL1xuXG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSBcIi4uLy4uLy4uL2RlZmluZS9DMkZFbnVtXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzKClcbmV4cG9ydCBjbGFzcyBBdWRpdFRhcmdldExpc3RlbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KEMyRkVudW0uRXh0RXZlbnQuTm9kZUFjdGl2ZUNoYW5nZWQsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoQzJGRW51bS5FeHRFdmVudC5Ob2RlQWN0aXZlQ2hhbmdlZCwgdGhpcy5ub2RlKTtcbiAgICB9XG59XG4iXX0=