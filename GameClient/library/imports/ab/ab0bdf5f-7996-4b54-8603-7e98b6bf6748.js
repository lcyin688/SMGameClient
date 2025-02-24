"use strict";
cc._RF.push(module, 'ab0bd9feZZLVIYDfpi2v2dI', 'UITouchPanel');
// c2f-framework/gui/layer/UITouchPanel.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UITouchPanel = void 0;
var UIPTouchBase_1 = require("./UIPTouchBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UITouchPanel = /** @class */ (function () {
    function UITouchPanel() {
        /** 当前正在拖动的对象 */
        this._moving = null;
        /** 拖动的出发点对象 */
        this._moveFrom = null;
        /** 拖动的拖入点对象 */
        this._moveTo = null;
        /** 可拖动对象 */
        this.arrDragObj = [];
    }
    Object.defineProperty(UITouchPanel.prototype, "createDragObj", {
        get: function () {
            return this._createDragObj;
        },
        set: function (v) {
            this._createDragObj = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "exchangeDragObj", {
        get: function () {
            return this._exchangeDragObj;
        },
        set: function (v) {
            this._exchangeDragObj = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moving", {
        get: function () {
            return this._moving;
        },
        set: function (v) {
            this._moving = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moveFrom", {
        get: function () {
            return this._moveFrom;
        },
        set: function (v) {
            this._moveFrom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITouchPanel.prototype, "moveTo", {
        get: function () {
            return this._moveTo;
        },
        set: function (v) {
            this._moveTo = v;
        },
        enumerable: false,
        configurable: true
    });
    UITouchPanel.prototype.onDestroy = function () {
        this.createDragObj = null;
        this.exchangeDragObj = null;
        this.moving = null;
        this.moveFrom = null;
        this.moveTo = null;
        this.arrDragObj = [];
    };
    /** 设置可拖动列表 */
    UITouchPanel.prototype.setDragObjList = function (list) {
        this.arrDragObj = list;
    };
    UITouchPanel.prototype.onVCTouchStart = function (event, touchObj) {
        if (this.moving && this.moving.isValid) {
            this.moving.destroy();
        }
        touchObj.setDragState(UIPTouchBase_1.MoveState.moveOut);
        this.moveFrom = touchObj;
        this.createDragObj && this.createDragObj(event, touchObj);
    };
    UITouchPanel.prototype.onVCTouchMove = function (event, touchObj) {
        if (!this.moving) {
            return;
        }
        var delta = event.touch.getDelta();
        this.moving.node.x += delta.x;
        this.moving.node.y += delta.y;
        //判断是否拖入到某个位置
        var moveInObj = null;
        var posW = event.getLocation();
        for (var _i = 0, _a = this.arrDragObj; _i < _a.length; _i++) {
            var one = _a[_i];
            var isRect = one.checkIsMoveIn(posW);
            if (isRect) {
                moveInObj = one;
                break;
            }
        }
        if (this.moveTo == moveInObj) {
            return;
        }
        if (this.moveFrom == moveInObj) {
            return;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveTo = null;
        }
        if (moveInObj) {
            moveInObj.setDragState(UIPTouchBase_1.MoveState.moveIn);
            this.moveTo = moveInObj;
        }
    };
    UITouchPanel.prototype.onVCTouchEnd = function (event, touchObj) {
        if (!this.moving || !this.moving.isValid) {
            return;
        }
        this.exchangeDragObj && this.exchangeDragObj(event, touchObj);
        this.moving.node.destroy();
        this.moving = null;
        if (this.moveFrom) {
            this.moveFrom.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveFrom = null;
        }
        if (this.moveTo) {
            this.moveTo.setDragState(UIPTouchBase_1.MoveState.normal);
            this.moveTo = null;
        }
    };
    UITouchPanel = __decorate([
        ccclass
    ], UITouchPanel);
    return UITouchPanel;
}());
exports.UITouchPanel = UITouchPanel;

cc._RF.pop();