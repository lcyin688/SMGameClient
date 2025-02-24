"use strict";
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