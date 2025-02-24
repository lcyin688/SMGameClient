
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIPTouchBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec3658D2pJBY6kxT8KeQlC3', 'UIPTouchBase');
// c2f-framework/gui/layer/UIPTouchBase.ts

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
exports.MoveState = void 0;
var UIPControlBase_1 = require("./UIPControlBase");
/** 拖动状态 */
var MoveState;
(function (MoveState) {
    MoveState[MoveState["normal"] = 1] = "normal";
    MoveState[MoveState["moveOut"] = 2] = "moveOut";
    MoveState[MoveState["moveIn"] = 3] = "moveIn";
    MoveState[MoveState["disable"] = 4] = "disable";
})(MoveState = exports.MoveState || (exports.MoveState = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPTouchBase = /** @class */ (function (_super) {
    __extends(UIPTouchBase, _super);
    function UIPTouchBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startHandler = null;
        _this.moveHandler = null;
        _this.endHandler = null;
        _this.cancelHander = null;
        /** 是否发生拖动 */
        _this._didDragMove = false;
        return _this;
    }
    Object.defineProperty(UIPTouchBase.prototype, "canDrag", {
        get: function () {
            return this._canDrag;
        },
        set: function (v) {
            this._canDrag = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIPTouchBase.prototype, "canDragIn", {
        get: function () {
            return this._canDragIn;
        },
        set: function (v) {
            this._canDragIn = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIPTouchBase.prototype, "dragFrom", {
        get: function () {
            return this._dragFrom || this.node;
        },
        set: function (v) {
            this._dragFrom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIPTouchBase.prototype, "dragIn", {
        get: function () {
            return this._dragIn || this.node;
        },
        set: function (v) {
            this._dragIn = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIPTouchBase.prototype, "didDragMove", {
        get: function () {
            return this._didDragMove;
        },
        set: function (v) {
            this._didDragMove = v;
        },
        enumerable: false,
        configurable: true
    });
    UIPTouchBase.prototype.onDestroy = function () {
        this.startHandler = null;
        this.moveHandler = null;
        this.endHandler = null;
        this.cancelHander = null;
        this.dragFrom = null;
        this.dragIn = null;
        _super.prototype.onDestroy.call(this);
    };
    UIPTouchBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        // 监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    UIPTouchBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    };
    /** 判断是否拖入 */
    UIPTouchBase.prototype.checkIsMoveIn = function (posW) {
        var result = false;
        if (this.canDragIn) {
            var toBox = this.dragIn.getBoundingBox();
            var curPosL = this.node.parent.convertToNodeSpaceAR(posW);
            result = toBox.contains(curPosL);
        }
        return result;
    };
    /** 拖动事件 */
    UIPTouchBase.prototype.setTouchHandler = function (startHandler, moveHandler, endHandler, cancelHander) {
        this.startHandler = startHandler;
        this.moveHandler = moveHandler;
        this.endHandler = endHandler;
        this.cancelHander = cancelHander;
    };
    UIPTouchBase.prototype.onTouchStart = function (event) {
        if (!this.canDrag) {
            return;
        }
        var fromBox = this.dragFrom.getBoundingBox();
        var curPosW = event.getLocation();
        var curPosL = this.node.parent.convertToNodeSpaceAR(curPosW);
        if (!fromBox.contains(curPosL)) {
            return;
        }
        this.didDragMove = false;
        this.startHandler && this.startHandler(event, this);
    };
    UIPTouchBase.prototype.onTouchMove = function (event) {
        this.didDragMove = true;
        this.moveHandler && this.moveHandler(event, this);
    };
    UIPTouchBase.prototype.onTouchEnd = function (event) {
        this.endHandler && this.endHandler(event, this);
    };
    UIPTouchBase.prototype.onTouchCancel = function (event) {
        this.cancelHander && this.cancelHander(event, this);
    };
    /** 拖动状态 */
    UIPTouchBase.prototype.setDragState = function (state) {
    };
    UIPTouchBase = __decorate([
        ccclass
    ], UIPTouchBase);
    return UIPTouchBase;
}(UIPControlBase_1.UIPControlBase));
exports.default = UIPTouchBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBUb3VjaEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUtsRCxXQUFXO0FBQ1gsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFVLENBQUE7SUFDViwrQ0FBVyxDQUFBO0lBQ1gsNkNBQVUsQ0FBQTtJQUNWLCtDQUFXLENBQUE7QUFDZixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBYztJQUF4RDtRQUFBLHFFQXFJQztRQW5JVyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBQ2pDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUNoQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFzQzFDLGFBQWE7UUFDTCxrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUF5RjFDLENBQUM7SUE1SEcsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQW1CLENBQVU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFPRCxzQkFBVyxtQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBcUIsQ0FBVTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQU9ELHNCQUFXLGtDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJ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QUN4RCxDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsS0FBMEI7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsS0FBMEI7UUFDekMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sb0NBQWEsR0FBckIsVUFBc0IsS0FBMEI7UUFDNUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVztJQUNKLG1DQUFZLEdBQW5CLFVBQW9CLEtBQWdCO0lBQ3BDLENBQUM7SUFwSWdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxSWhDO0lBQUQsbUJBQUM7Q0FySUQsQUFxSUMsQ0FySXlDLCtCQUFjLEdBcUl2RDtrQkFySW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBDb250cm9sQmFzZSB9IGZyb20gXCIuL1VJUENvbnRyb2xCYXNlXCI7XG5cbi8qKiDngrnlh7vkuovku7blm57osIPlrprkuYkgKi9cbnR5cGUgVG91Y2hIYW5kbGVyID0gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCB0YXJnZXQ6IFVJUFRvdWNoQmFzZSkgPT4gdm9pZDtcblxuLyoqIOaLluWKqOeKtuaAgSAqL1xuZXhwb3J0IGVudW0gTW92ZVN0YXRlIHtcbiAgICBub3JtYWwgPSAxLFxuICAgIG1vdmVPdXQgPSAyLFxuICAgIG1vdmVJbiA9IDMsXG4gICAgZGlzYWJsZSA9IDQsXG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQVG91Y2hCYXNlIGV4dGVuZHMgVUlQQ29udHJvbEJhc2Uge1xuXG4gICAgcHJpdmF0ZSBzdGFydEhhbmRsZXI6IFRvdWNoSGFuZGxlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBtb3ZlSGFuZGxlcjogVG91Y2hIYW5kbGVyID0gbnVsbDtcbiAgICBwcml2YXRlIGVuZEhhbmRsZXI6IFRvdWNoSGFuZGxlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYW5jZWxIYW5kZXI6IFRvdWNoSGFuZGxlciA9IG51bGw7XG5cbiAgICAvKiog5piv5ZCm5Y+v5ouW5YqoICovXG4gICAgcHJpdmF0ZSBfY2FuRHJhZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgZ2V0IGNhbkRyYWcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5EcmFnO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNhbkRyYWcodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9jYW5EcmFnID0gdjtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5Y+v5ouW5YWlICovXG4gICAgcHJpdmF0ZSBfY2FuRHJhZ0luOiBib29sZWFuO1xuICAgIHB1YmxpYyBnZXQgY2FuRHJhZ0luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FuRHJhZ0luO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNhbkRyYWdJbih2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2NhbkRyYWdJbiA9IHY7XG4gICAgfVxuXG4gICAgLyoqIOaLluWHuuWMuuWfn+iKgueCuSAqL1xuICAgIHByaXZhdGUgX2RyYWdGcm9tOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBnZXQgZHJhZ0Zyb20oKTogY2MuTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnRnJvbSB8fCB0aGlzLm5vZGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZHJhZ0Zyb20odjogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLl9kcmFnRnJvbSA9IHY7XG4gICAgfVxuXG4gICAgLyoqIOaLluWFpeWMuuWfn+iKgueCuSAqL1xuICAgIHByaXZhdGUgX2RyYWdJbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgZ2V0IGRyYWdJbigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdJbiB8fCB0aGlzLm5vZGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZHJhZ0luKHY6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0luID0gdjtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5Y+R55Sf5ouW5YqoICovXG4gICAgcHJpdmF0ZSBfZGlkRHJhZ01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZ2V0IGRpZERyYWdNb3ZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlkRHJhZ01vdmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGlkRHJhZ01vdmUodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaWREcmFnTW92ZSA9IHY7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1vdmVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW5jZWxIYW5kZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdGcm9tID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnSW4gPSBudWxsO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnm5HlkKzop6bmkbjkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKiDliKTmlq3mmK/lkKbmi5blhaUgKi9cbiAgICBwdWJsaWMgY2hlY2tJc01vdmVJbihwb3NXOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY2FuRHJhZ0luKSB7XG4gICAgICAgICAgICBsZXQgdG9Cb3ggPSB0aGlzLmRyYWdJbi5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgbGV0IGN1clBvc0wgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1cpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdG9Cb3guY29udGFpbnMoY3VyUG9zTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiog5ouW5Yqo5LqL5Lu2ICovXG4gICAgcHVibGljIHNldFRvdWNoSGFuZGxlcihzdGFydEhhbmRsZXI6IFRvdWNoSGFuZGxlciwgbW92ZUhhbmRsZXI6IFRvdWNoSGFuZGxlciwgZW5kSGFuZGxlcjogVG91Y2hIYW5kbGVyLCBjYW5jZWxIYW5kZXI6IFRvdWNoSGFuZGxlcikge1xuICAgICAgICB0aGlzLnN0YXJ0SGFuZGxlciA9IHN0YXJ0SGFuZGxlcjtcbiAgICAgICAgdGhpcy5tb3ZlSGFuZGxlciA9IG1vdmVIYW5kbGVyO1xuICAgICAgICB0aGlzLmVuZEhhbmRsZXIgPSBlbmRIYW5kbGVyO1xuICAgICAgICB0aGlzLmNhbmNlbEhhbmRlciA9IGNhbmNlbEhhbmRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY2FuRHJhZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcm9tQm94ID0gdGhpcy5kcmFnRnJvbS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICBsZXQgY3VyUG9zVyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBjdXJQb3NMID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjdXJQb3NXKTtcbiAgICAgICAgaWYgKCFmcm9tQm94LmNvbnRhaW5zKGN1clBvc0wpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWREcmFnTW92ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0SGFuZGxlciAmJiB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpZERyYWdNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb3ZlSGFuZGxlciAmJiB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbmRIYW5kbGVyICYmIHRoaXMuZW5kSGFuZGxlcihldmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoQ2FuY2VsKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FuY2VsSGFuZGVyICYmIHRoaXMuY2FuY2VsSGFuZGVyKGV2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKiog5ouW5Yqo54q25oCBICovXG4gICAgcHVibGljIHNldERyYWdTdGF0ZShzdGF0ZTogTW92ZVN0YXRlKSB7XG4gICAgfVxufSJdfQ==