"use strict";
cc._RF.push(module, '838787pJRNN25oWbvaCkfKh', 'LayoutProperty');
// c2f-framework/component/ui/scrollList/LayoutProperty.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutProperty = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayoutProperty = /** @class */ (function () {
    function LayoutProperty() {
        this.type = cc.Layout.Type.VERTICAL;
        this.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        this.spacingX = 0;
        this.spacingY = 0;
        this.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
        this.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
    }
    __decorate([
        property({ type: cc.Enum(cc.Layout.Type), tooltip: CC_DEV && "布局模式" })
    ], LayoutProperty.prototype, "type", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.AxisDirection),
            tooltip: CC_DEV && "GRID布局的起始轴方向\nHORIZONTAL：固定宽度，动态改变高度\nVERTICAL：固定高度，动态改变宽度",
            visible: function () { return this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "startAxis", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "left", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "right", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "top", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "bottom", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "spacingX", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "spacingY", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.VerticalDirection),
            visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "verticalDirection", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.HorizontalDirection),
            visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "horizontalDirection", void 0);
    LayoutProperty = __decorate([
        ccclass("LayoutProperty")
    ], LayoutProperty);
    return LayoutProperty;
}());
exports.LayoutProperty = LayoutProperty;

cc._RF.pop();