"use strict";
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