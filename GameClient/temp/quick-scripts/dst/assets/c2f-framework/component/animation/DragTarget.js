
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/DragTarget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c7b8k5mqZHWolLFZi1fmRL', 'DragTarget');
// c2f-framework/component/animation/DragTarget.ts

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
var DragTarget = /** @class */ (function (_super) {
    __extends(DragTarget, _super);
    function DragTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.startPos = null;
        _this.currtPos = null;
        _this.dragEndCb = null;
        return _this;
    }
    DragTarget.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        // 监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    DragTarget.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    DragTarget.prototype.onTouchStart = function (event) {
        this.currtPos = this.target.getPosition();
        this.startPos = this.currtPos.clone();
    };
    DragTarget.prototype.onTouchMove = function (event) {
        var delta = event.getDelta();
        this.currtPos.x = this.currtPos.x + delta.x;
        this.currtPos.y = this.currtPos.y + delta.y;
        this.target.setPosition(this.currtPos);
    };
    DragTarget.prototype.onTouchEnd = function (event) {
        this.onDragEnd(event);
    };
    DragTarget.prototype.onTouchCancel = function (event) {
        this.onDragEnd(event);
    };
    DragTarget.prototype.onDragEnd = function (event) {
        if (cc.Vec2.distance(this.currtPos, this.startPos) > 20) {
            event.stopPropagation();
            this.dragEndCb && this.dragEndCb();
            var btn = this.target.getComponent(cc.Button);
            if (btn) {
                btn['_onTouchCancel']();
            }
        }
    };
    DragTarget.prototype.setDragEndCb = function (endCb) {
        this.dragEndCb = endCb;
    };
    __decorate([
        property(cc.Node)
    ], DragTarget.prototype, "target", void 0);
    DragTarget = __decorate([
        ccclass
    ], DragTarget);
    return DragTarget;
}(cc.Component));
exports.default = DragTarget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vRHJhZ1RhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlFQztRQTlERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRWYsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7O0lBMER2QyxDQUFDO0lBeERhLDZCQUFRLEdBQWxCO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsS0FBMEI7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsS0FBMEI7UUFDMUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLCtCQUFVLEdBQWxCLFVBQW1CLEtBQTBCO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLGtDQUFhLEdBQXJCLFVBQXNCLEtBQTBCO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLDhCQUFTLEdBQWpCLFVBQWtCLEtBQTBCO1FBQ3hDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVuQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQztJQUVNLGlDQUFZLEdBQW5CLFVBQW9CLEtBQWU7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNLO0lBSE4sVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlFOUI7SUFBRCxpQkFBQztDQWpFRCxBQWlFQyxDQWpFdUMsRUFBRSxDQUFDLFNBQVMsR0FpRW5EO2tCQWpFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ1RhcmdldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGFydFBvczogY2MuVmVjMiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJydFBvczogY2MuVmVjMiA9IG51bGw7XG4gICAgcHJpdmF0ZSBkcmFnRW5kQ2I6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebkeWQrOinpuaRuOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycnRQb3MgPSB0aGlzLnRhcmdldC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5jdXJydFBvcy5jbG9uZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcbiAgICAgICAgdGhpcy5jdXJydFBvcy54ID0gdGhpcy5jdXJydFBvcy54ICsgZGVsdGEueDtcbiAgICAgICAgdGhpcy5jdXJydFBvcy55ID0gdGhpcy5jdXJydFBvcy55ICsgZGVsdGEueTtcbiAgICAgICAgdGhpcy50YXJnZXQuc2V0UG9zaXRpb24odGhpcy5jdXJydFBvcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25EcmFnRW5kKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hDYW5jZWwoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQoZXZlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EcmFnRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmIChjYy5WZWMyLmRpc3RhbmNlKHRoaXMuY3VycnRQb3MsIHRoaXMuc3RhcnRQb3MpID4gMjApIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmFnRW5kQ2IgJiYgdGhpcy5kcmFnRW5kQ2IoKTtcblxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKGJ0bikge1xuICAgICAgICAgICAgICAgIGJ0blsnX29uVG91Y2hDYW5jZWwnXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldERyYWdFbmRDYihlbmRDYjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kcmFnRW5kQ2IgPSBlbmRDYjtcbiAgICB9XG59Il19