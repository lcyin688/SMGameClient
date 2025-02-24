"use strict";
cc._RF.push(module, 'aa4a7b4k2pLYKSrIwYzSAq4', 'GradientColor');
// c2f-framework/component/common/GradientColor.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
/** 渐变方向 */
var GradientDir;
(function (GradientDir) {
    /** 水平 */
    GradientDir[GradientDir["horizontal"] = 1] = "horizontal";
    /** 垂直 */
    GradientDir[GradientDir["vertical"] = 2] = "vertical";
    /** 4围 */
    GradientDir[GradientDir["FourDot"] = 3] = "FourDot";
})(GradientDir || (GradientDir = {}));
var GradientLabel = /** @class */ (function (_super) {
    __extends(GradientLabel, _super);
    function GradientLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._director = GradientDir.horizontal;
        _this._beginColor = cc.Color.WHITE;
        _this._endColor = cc.Color.WHITE;
        _this._verColors = [
            cc.color(255, 255, 255),
            cc.color(255, 255, 255),
            cc.color(255, 255, 255),
            cc.color(255, 255, 255)
        ];
        return _this;
    }
    Object.defineProperty(GradientLabel.prototype, "director", {
        get: function () {
            return this._director;
        },
        set: function (val) {
            this._director = val;
            this.transBEToArr();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GradientLabel.prototype, "beginColor", {
        get: function () {
            return this._beginColor;
        },
        set: function (clr) {
            this._beginColor = clr;
            this.transBEToArr();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GradientLabel.prototype, "endColor", {
        get: function () {
            return this._endColor;
        },
        set: function (clr) {
            this._endColor = clr;
            this.transBEToArr();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GradientLabel.prototype, "verColors", {
        get: function () {
            return this._verColors;
        },
        set: function (vColors) {
            this._verColors = vColors;
            this._updateColors();
        },
        enumerable: false,
        configurable: true
    });
    GradientLabel.prototype.transBEToArr = function () {
        if (this.director == GradientDir.horizontal) {
            this.verColors = [this._beginColor, this.endColor, this._beginColor, this.endColor];
        }
        else if (this.director == GradientDir.vertical) {
            this.verColors = [this.endColor, this.endColor, this._beginColor, this._beginColor];
        }
    };
    GradientLabel.prototype._updateColors = function () {
        var cmp = this.getComponent(cc.RenderComponent);
        if (!cmp)
            return;
        var _assembler = cmp['_assembler'];
        if (!(_assembler instanceof cc['Assembler2D']))
            return;
        var uintVerts = _assembler._renderData.uintVDatas[0];
        if (!uintVerts)
            return;
        var color = this.node.color;
        var floatsPerVert = _assembler.floatsPerVert;
        var colorOffset = _assembler.colorOffset;
        var count = 0;
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = (this.verColors[count++] || color)['_val'];
        }
    };
    GradientLabel.prototype.onEnable = function () {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
    };
    GradientLabel.prototype.onDisable = function () {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
        this.node['_renderFlag'] |= cc['RenderFlow'].FLAG_COLOR;
    };
    __decorate([
        property({ type: cc.Enum(GradientDir), tooltip: "渐变方向" })
    ], GradientLabel.prototype, "_director", void 0);
    __decorate([
        property({ type: cc.Enum(GradientDir), tooltip: "渐变方向" })
    ], GradientLabel.prototype, "director", null);
    __decorate([
        property()
    ], GradientLabel.prototype, "_beginColor", void 0);
    __decorate([
        property({ type: cc.Color, visible: function () { return this.director != GradientDir.FourDot; }, tooltip: "左(上)侧颜色" })
    ], GradientLabel.prototype, "beginColor", null);
    __decorate([
        property()
    ], GradientLabel.prototype, "_endColor", void 0);
    __decorate([
        property({ type: cc.Color, visible: function () { return this.director != GradientDir.FourDot; }, tooltip: "右(下)侧颜色" })
    ], GradientLabel.prototype, "endColor", null);
    __decorate([
        property({ type: cc.Color })
    ], GradientLabel.prototype, "_verColors", void 0);
    __decorate([
        property({ type: cc.Color, visible: function () { return this.director == GradientDir.FourDot; }, tooltip: "四角颜色：0：左下角，1：右下角，2：左上角，3：右上角" })
    ], GradientLabel.prototype, "verColors", null);
    GradientLabel = __decorate([
        ccclass,
        menu('c2f/gui/GradientLabel'),
        executeInEditMode
    ], GradientLabel);
    return GradientLabel;
}(cc.Component));
exports.default = GradientLabel;

cc._RF.pop();