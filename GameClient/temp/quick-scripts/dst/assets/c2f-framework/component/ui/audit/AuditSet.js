
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/audit/AuditSet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hdWRpdC9BdWRpdFNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQseUNBQXdDO0FBQ3hDLHlEQUF3RDtBQUVsRCxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUdsRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlEQztRQTlDRyxhQUFPLEdBQWdCLEVBQUUsQ0FBQzs7SUE4QzlCLENBQUM7SUE1Q2EseUJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBRVMsd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVNLDZCQUFVLEdBQWxCO1FBQ0ksSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU87U0FDVjtRQUNELEtBQWdCLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUF6QixJQUFJLEdBQUcsU0FBQTtZQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLFNBQVM7YUFDWjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU8sK0JBQVksR0FBcEIsVUFBcUIsR0FBYztRQUMvQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQ0FBaUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMscUNBQWlCLENBQUMsQ0FBQztZQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNyQztRQUNELElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ25DLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7SUFDTCxDQUFDO0lBRU8sd0NBQXFCLEdBQTdCLFVBQThCLE1BQWU7UUFDekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMscUJBQVMsQ0FBQzs2Q0FDTTtJQUhULFFBQVE7UUFGNUIsT0FBTztRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUNOLFFBQVEsQ0FpRDVCO0lBQUQsZUFBQztDQWpERCxBQWlEQyxDQWpEcUMsRUFBRSxDQUFDLFNBQVMsR0FpRGpEO2tCQWpEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkVudW0gfSBmcm9tIFwiLi4vLi4vLi4vZGVmaW5lL0MyRkVudW1cIjtcbmltcG9ydCB7IEF1ZGl0SXRlbSB9IGZyb20gXCIuL0F1ZGl0SXRlbVwiO1xuaW1wb3J0IHsgQXVkaXRUYXJnZXRMaXN0ZW4gfSBmcm9tIFwiLi9BdWRpdFRhcmdldExpc3RlblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdjMmYvYXVkaXQvQXVkaXRTZXQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaXRTZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEF1ZGl0SXRlbSlcbiAgICB0YXJnZXRzOiBBdWRpdEl0ZW1bXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIGNvbnN0IGlzQXVkaXQgPSBzemcucGxhdC5pc0F1ZGl0O1xuICAgICAgICBpZiAoIWlzQXVkaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICBpZiAoIW9uZS50YXJnZXQgfHwgIW9uZS50YXJnZXQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQob25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVGFyZ2V0KG9uZTogQXVkaXRJdGVtKSB7XG4gICAgICAgIGxldCBsaXN0ZW4gPSBvbmUudGFyZ2V0LmdldENvbXBvbmVudChBdWRpdFRhcmdldExpc3Rlbik7XG4gICAgICAgIGlmICghbGlzdGVuKSB7XG4gICAgICAgICAgICBsaXN0ZW4gPSBvbmUudGFyZ2V0LmFkZENvbXBvbmVudChBdWRpdFRhcmdldExpc3Rlbik7XG4gICAgICAgICAgICBvbmUudGFyZ2V0Lm9uKEMyRkVudW0uRXh0RXZlbnQuTm9kZUFjdGl2ZUNoYW5nZWQsIHRoaXMub25UYXJnZXRBY3RpdmVDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25lLmNvbnRyb2xWaXNpYmxlKSB7XG4gICAgICAgICAgICBvbmUudGFyZ2V0LmFjdGl2ZSA9IG9uZS50c1Zpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uZS5jb250cm9sT3BhY2l0eSkge1xuICAgICAgICAgICAgb25lLnRhcmdldC5vcGFjaXR5ID0gb25lLnRzT3BhY2l0eTtcbiAgICAgICAgICAgIGxldCBidG5Db21wID0gb25lLnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChidG5Db21wKSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tcC5pbnRlcmFjdGFibGUgPSBvbmUudHNPcGFjaXR5ID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25UYXJnZXRBY3RpdmVDaGFuZ2VkKHRhcmdldDogY2MuTm9kZSkge1xuICAgICAgICBsZXQgZmluZCA9IHRoaXMudGFyZ2V0cy5maW5kKChhKSA9PiB7IHJldHVybiBhLnRhcmdldCA9PSB0YXJnZXQ7IH0pO1xuICAgICAgICBpZiAoZmluZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoZmluZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=