
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderArtLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da773g07NRC0LX5g8OCKdzR', 'ShaderArtLabel');
// c2f-framework/component/shader/ShaderArtLabel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, disallowMultiple = _a.disallowMultiple, executeInEditMode = _a.executeInEditMode;
var Gradient = cc.Enum({
    None: 0,
    OneColor: 1,
    TwoColor: 2,
    TriColor: 3,
});
var GlowLevel = cc.Enum({
    None: 0,
    Lowp: 1,
    Mediump: 2,
    Highp: 3,
});
/**
 * 字体效果
 * - 阴影
 * - 描边
 * - 描边阴影
 * - 颜色渐变
 * - 扫光效果
 * - 外发光
 */
var ShaderArtLabel = /** @class */ (function (_super) {
    __extends(ShaderArtLabel, _super);
    function ShaderArtLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //-----------------------阴影
        _this.shadowUse = false;
        _this.shadowOffset = cc.v2(1, 1);
        _this.shadowColor = cc.color(0, 0, 0, 150);
        //-----------------------描边
        _this.outlineUse = false;
        _this.outlineWidth = 1;
        _this.outlineColor = cc.color(0, 0, 0, 255);
        //-----------------------描边阴影
        _this.olShadowUse = false;
        _this.olShadowOffset = cc.v2(1, 1);
        _this.olShadowColor = cc.color(0, 0, 0, 150);
        //-----------------------扫光
        _this.flowLightUse = false;
        _this.flSpeed = 1;
        _this.flRot = 0;
        _this.flWidth = 15;
        _this.flColor = cc.color(255, 255, 255, 255);
        //-----------------------文字颜色、渐变
        _this.gradient = Gradient.None;
        _this.color1 = cc.color(255, 0, 0, 255);
        _this.color2 = cc.color(0, 255, 0, 255);
        _this.color3 = cc.color(0, 0, 255, 255);
        //-----------------------外发光
        _this.glow = GlowLevel.None;
        _this.glowWidth = 10;
        _this.glowDepth = 2;
        _this.glowColor = cc.color(255, 255, 255, 255);
        _this._mtl = null;
        _this._time = 0;
        return _this;
    }
    ShaderArtLabel.prototype.onLoad = function () {
        this.initMat();
    };
    ShaderArtLabel.prototype.onDestroy = function () {
        this._mtl = null;
    };
    ShaderArtLabel.prototype.initMat = function () {
        this._mtl = this.node.getComponent(cc.Label).getMaterial(0);
        this._mtl.define('USE_TEXTURE', true, 0);
        this.node.getComponent(cc.Label).setMaterial(0, this._mtl);
        this.use();
    };
    ShaderArtLabel.prototype.use = function () {
        if (!this._mtl)
            return;
        this._mtl.setProperty('i_resolution', [this.node.width, this.node.height]);
        this._mtl.setProperty('i_shadow', this.shadowUse ? 1 : 0);
        this._mtl.setProperty('i_shadowOffset', [-this.shadowOffset.x / this.node.width, -this.shadowOffset.y / this.node.height]);
        this._mtl.setProperty('i_shadowColor', [this.shadowColor.r / 255, this.shadowColor.g / 255, this.shadowColor.b / 255, this.shadowColor.a / 255]);
        this._mtl.setProperty('i_outline', this.outlineUse ? 1 : 0);
        this._mtl.setProperty('i_outlineWidth', [this.outlineWidth / this.node.width, this.outlineWidth / this.node.height]);
        this._mtl.setProperty('i_outlineColor', [this.outlineColor.r / 255, this.outlineColor.g / 255, this.outlineColor.b / 255, this.outlineColor.a / 255]);
        this._mtl.setProperty('i_olShadow', this.olShadowUse ? 1 : 0);
        this._mtl.setProperty('i_olShadowOffset', [-this.olShadowOffset.x / this.node.width, -this.olShadowOffset.y / this.node.height]);
        this._mtl.setProperty('i_olShadowColor', [this.olShadowColor.r / 255, this.olShadowColor.g / 255, this.olShadowColor.b / 255, this.olShadowColor.a / 255]);
        this._mtl.setProperty('i_gradient', this.gradient - 1);
        switch (this.gradient) {
            case Gradient.None:
                this._mtl.setProperty('i_color1', [this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255]);
                break;
            case Gradient.OneColor:
            case Gradient.TwoColor:
            case Gradient.TriColor:
                this._mtl.setProperty('i_color1', [this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255]);
                this._mtl.setProperty('i_color1', [this.color1.r / 255, this.color1.g / 255, this.color1.b / 255, this.color1.a / 255]);
                this._mtl.setProperty('i_color2', [this.color2.r / 255, this.color2.g / 255, this.color2.b / 255, this.color2.a / 255]);
                this._mtl.setProperty('i_color3', [this.color3.r / 255, this.color3.g / 255, this.color3.b / 255, this.color3.a / 255]);
                break;
        }
        this._mtl.setProperty('i_flowLight', this.flowLightUse ? 1 : 0);
        this._mtl.setProperty('i_flTime', this.flSpeed * this._time * 60 / this.node.width);
        this._mtl.setProperty('i_flRot', Math.atan(Math.tan(Math.PI * this.flRot / 180.) * this.node.height / this.node.width) * 180. / Math.PI);
        this._mtl.setProperty('i_flWidth', this.flWidth / this.node.width);
        this._mtl.setProperty('i_flColor', [this.flColor.r / 255, this.flColor.g / 255, this.flColor.b / 255, this.flColor.a / 255]);
        this._mtl.setProperty('i_glow', this.glow);
        this._mtl.setProperty('i_glowWidth', [this.glowWidth / this.node.width, this.glowWidth / this.node.height]);
        this._mtl.setProperty('i_glowDepth', this.glowDepth);
        this._mtl.setProperty('i_glowColor', [this.glowColor.r / 255, this.glowColor.g / 255, this.glowColor.b / 255, this.glowColor.a / 255]);
    };
    ShaderArtLabel.prototype.update = function (dt) {
        this._time += dt;
        // this.use();
    };
    __decorate([
        property({
            tooltip: '是否使用阴影',
        })
    ], ShaderArtLabel.prototype, "shadowUse", void 0);
    __decorate([
        property({
            tooltip: '阴影偏移（像素）',
            visible: function () {
                return this.shadowUse;
            }
        })
    ], ShaderArtLabel.prototype, "shadowOffset", void 0);
    __decorate([
        property({
            tooltip: '阴影颜色',
            visible: function () {
                return this.shadowUse;
            }
        })
    ], ShaderArtLabel.prototype, "shadowColor", void 0);
    __decorate([
        property({
            tooltip: '是否使用描边',
        })
    ], ShaderArtLabel.prototype, "outlineUse", void 0);
    __decorate([
        property({
            tooltip: '描边宽度（像素）',
            min: 1,
            visible: function () {
                return this.outlineUse;
            }
        })
    ], ShaderArtLabel.prototype, "outlineWidth", void 0);
    __decorate([
        property({
            tooltip: '描边颜色',
            visible: function () {
                return this.outlineUse;
            }
        })
    ], ShaderArtLabel.prototype, "outlineColor", void 0);
    __decorate([
        property({
            tooltip: '是否使用描边阴影',
            visible: function () {
                return this.outlineUse;
            }
        })
    ], ShaderArtLabel.prototype, "olShadowUse", void 0);
    __decorate([
        property({
            tooltip: '描边阴影偏移（像素）',
            visible: function () {
                return this.outlineUse && this.olShadowUse;
            }
        })
    ], ShaderArtLabel.prototype, "olShadowOffset", void 0);
    __decorate([
        property({
            tooltip: '描边阴影颜色',
            visible: function () {
                return this.outlineUse && this.olShadowUse;
            }
        })
    ], ShaderArtLabel.prototype, "olShadowColor", void 0);
    __decorate([
        property({
            tooltip: '是否使用扫光动效',
        })
    ], ShaderArtLabel.prototype, "flowLightUse", void 0);
    __decorate([
        property({
            tooltip: '扫光动效速度（像素）',
            visible: function () {
                return this.flowLightUse;
            }
        })
    ], ShaderArtLabel.prototype, "flSpeed", void 0);
    __decorate([
        property({
            tooltip: '扫光动效旋转角度',
            visible: function () {
                return this.flowLightUse;
            }
        })
    ], ShaderArtLabel.prototype, "flRot", void 0);
    __decorate([
        property({
            tooltip: '扫光动效宽度（像素）',
            min: 1,
            visible: function () {
                return this.flowLightUse;
            }
        })
    ], ShaderArtLabel.prototype, "flWidth", void 0);
    __decorate([
        property({
            tooltip: '扫光效果颜色',
            visible: function () {
                return this.flowLightUse;
            }
        })
    ], ShaderArtLabel.prototype, "flColor", void 0);
    __decorate([
        property({
            tooltip: '文字颜色\nNone 0：单色，使用节点color\nOneColor 1：单色，使用color1\nTwoColor 2：渐变色-双色\nTriColor 3：渐变色-三色',
            type: cc.Enum(Gradient),
        })
    ], ShaderArtLabel.prototype, "gradient", void 0);
    __decorate([
        property({
            visible: function () {
                return this.gradient > Gradient.None;
            }
        })
    ], ShaderArtLabel.prototype, "color1", void 0);
    __decorate([
        property({
            visible: function () {
                return this.gradient > Gradient.OneColor;
            }
        })
    ], ShaderArtLabel.prototype, "color2", void 0);
    __decorate([
        property({
            visible: function () {
                return this.gradient > Gradient.TwoColor;
            }
        })
    ], ShaderArtLabel.prototype, "color3", void 0);
    __decorate([
        property({
            tooltip: '外发光，外发光较耗性能\nNone 0：不使用\nLowp 1：低精度（建议）\nMediump 2: 中等精度\nHighp 3：高精度',
            type: cc.Enum(GlowLevel),
        })
    ], ShaderArtLabel.prototype, "glow", void 0);
    __decorate([
        property({
            tooltip: '外发光宽度（像素）',
            min: 1,
            visible: function () {
                return this.glow > GlowLevel.None;
            }
        })
    ], ShaderArtLabel.prototype, "glowWidth", void 0);
    __decorate([
        property({
            tooltip: '外发光颜色深度',
            min: 1,
            max: 32,
            visible: function () {
                return this.glow > GlowLevel.None;
            }
        })
    ], ShaderArtLabel.prototype, "glowDepth", void 0);
    __decorate([
        property({
            tooltip: '外发光颜色',
            visible: function () {
                return this.glow > GlowLevel.None;
            }
        })
    ], ShaderArtLabel.prototype, "glowColor", void 0);
    ShaderArtLabel = __decorate([
        ccclass,
        menu('c2f/gui/ShaderArtLabel'),
        requireComponent(cc.Label),
        disallowMultiple(),
        executeInEditMode()
    ], ShaderArtLabel);
    return ShaderArtLabel;
}(cc.Component));
exports.default = ShaderArtLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyQXJ0TGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxRixFQUFFLENBQUMsVUFBVSxFQUFoRyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFFekcsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNyQixJQUFJLEVBQUUsQ0FBQztJQUNQLFFBQVEsRUFBRSxDQUFDO0lBQ1gsUUFBUSxFQUFFLENBQUM7SUFDWCxRQUFRLEVBQUUsQ0FBQztDQUNkLENBQUMsQ0FBQTtBQUNGLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEIsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ1YsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFDLENBQUE7QUFFRjs7Ozs7Ozs7R0FRRztBQU1IO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd05DO1FBdE5HLDJCQUEyQjtRQUkzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBTzNCLGtCQUFZLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFPcEMsaUJBQVcsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLDJCQUEyQjtRQUkzQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQVE1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQU96QixrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFF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Q0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakosSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0SixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4SSxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFD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SUFRdEI7UUFQQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsV0FBVztZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN0QyxDQUFDO1NBQ0osQ0FBQztxREFDcUI7SUFTdkI7UUFSQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsU0FBUztZQUNsQixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFO2dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3RDLENBQUM7U0FDSixDQUFDO3FEQUNvQjtJQU90QjtRQU5DLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRTtnQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN0QyxDQUFDO1NBQ0osQ0FBQztxREFDaUQ7SUEzSmxDLGNBQWM7UUFMbEMsT0FBTztRQUNQLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUM5QixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzFCLGdCQUFnQixFQUFFO1FBQ2xCLGlCQUFpQixFQUFFO09BQ0MsY0FBYyxDQXdObEM7SUFBRCxxQkFBQztDQXhORCxBQXdOQyxDQXhOMkMsRUFBRSxDQUFDLFNBQVMsR0F3TnZEO2tCQXhOb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIHJlcXVpcmVDb21wb25lbnQsIGRpc2FsbG93TXVsdGlwbGUsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBHcmFkaWVudCA9IGNjLkVudW0oe1xuICAgIE5vbmU6IDAsXG4gICAgT25lQ29sb3I6IDEsXG4gICAgVHdvQ29sb3I6IDIsXG4gICAgVHJpQ29sb3I6IDMsXG59KVxuY29uc3QgR2xvd0xldmVsID0gY2MuRW51bSh7XG4gICAgTm9uZTogMCxcbiAgICBMb3dwOiAxLFxuICAgIE1lZGl1bXA6IDIsXG4gICAgSGlnaHA6IDMsXG59KVxuXG4vKipcbiAqIOWtl+S9k+aViOaenFxuICogLSDpmLTlvbFcbiAqIC0g5o+P6L65XG4gKiAtIOaPj+i+uemYtOW9sVxuICogLSDpopzoibLmuJDlj5hcbiAqIC0g5omr5YWJ5pWI5p6cXG4gKiAtIOWkluWPkeWFiVxuICovXG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9ndWkvU2hhZGVyQXJ0TGFiZWwnKVxuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXG5AZGlzYWxsb3dNdWx0aXBsZSgpXG5AZXhlY3V0ZUluRWRpdE1vZGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyQXJ0TGFiZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLemYtOW9sVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmmK/lkKbkvb/nlKjpmLTlvbEnLFxuICAgIH0pXG4gICAgc2hhZG93VXNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+mYtOW9seWBj+enu++8iOWDj+e0oO+8iScsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWRvd1VzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc2hhZG93T2Zmc2V0OiBjYy5WZWMyID0gY2MudjIoMSwgMSk7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+mYtOW9seminOiJsicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWRvd1VzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc2hhZG93Q29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCwgMTUwKTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mj4/ovrlcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5piv5ZCm5L2/55So5o+P6L65JyxcbiAgICB9KVxuICAgIG91dGxpbmVVc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5o+P6L655a695bqm77yI5YOP57Sg77yJJyxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRsaW5lVXNlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBvdXRsaW5lV2lkdGg6IG51bWJlciA9IDE7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+aPj+i+ueminOiJsicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGxpbmVVc2U7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIG91dGxpbmVDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaPj+i+uemYtOW9sVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmmK/lkKbkvb/nlKjmj4/ovrnpmLTlvbEnLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRsaW5lVXNlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBvbFNoYWRvd1VzZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmj4/ovrnpmLTlvbHlgY/np7vvvIjlg4/ntKDvvIknLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRsaW5lVXNlICYmIHRoaXMub2xTaGFkb3dVc2U7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIG9sU2hhZG93T2Zmc2V0OiBjYy5WZWMyID0gY2MudjIoMSwgMSk7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+aPj+i+uemYtOW9seminOiJsicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGxpbmVVc2UgJiYgdGhpcy5vbFNoYWRvd1VzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgb2xTaGFkb3dDb2xvcjogY2MuQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAxNTApO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaJq+WFiVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmmK/lkKbkvb/nlKjmiavlhYnliqjmlYgnLFxuICAgIH0pXG4gICAgZmxvd0xpZ2h0VXNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+aJq+WFieWKqOaViOmAn+W6pu+8iOWDj+e0oO+8iScsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZsb3dMaWdodFVzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZmxTcGVlZDogbnVtYmVyID0gMTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5omr5YWJ5Yqo5pWI5peL6L2s6KeS5bqmJyxcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmxvd0xpZ2h0VXNlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBmbFJvdDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5omr5YWJ5Yqo5pWI5a695bqm77yI5YOP57Sg77yJJyxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mbG93TGlnaHRVc2U7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGZsV2lkdGg6IG51bWJlciA9IDE1O1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmiavlhYnmlYjmnpzpopzoibInLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mbG93TGlnaHRVc2U7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGZsQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mloflrZfpopzoibLjgIHmuJDlj5hcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5paH5a2X6aKc6ImyXFxuTm9uZSAw77ya5Y2V6Imy77yM5L2/55So6IqC54K5Y29sb3JcXG5PbmVDb2xvciAx77ya5Y2V6Imy77yM5L2/55SoY29sb3IxXFxuVHdvQ29sb3IgMu+8mua4kOWPmOiJsi3lj4zoibJcXG5UcmlDb2xvciAz77ya5riQ5Y+Y6ImyLeS4ieiJsicsXG4gICAgICAgIHR5cGU6IGNjLkVudW0oR3JhZGllbnQpLFxuICAgIH0pXG4gICAgZ3JhZGllbnQgPSBHcmFkaWVudC5Ob25lO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYWRpZW50ID4gR3JhZGllbnQuTm9uZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29sb3IxOiBjYy5Db2xvciA9IGNjLmNvbG9yKDI1NSwgMCwgMCwgMjU1KTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFkaWVudCA+IEdyYWRpZW50Lk9uZUNvbG9yO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjb2xvcjI6IGNjLkNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwLCAyNTUpO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYWRpZW50ID4gR3JhZGllbnQuVHdvQ29sb3I7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbG9yMzogY2MuQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAyNTUsIDI1NSk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5aSW5Y+R5YWJXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+WkluWPkeWFie+8jOWkluWPkeWFiei+g+iAl+aAp+iDvVxcbk5vbmUgMO+8muS4jeS9v+eUqFxcbkxvd3AgMe+8muS9jueyvuW6pu+8iOW7uuiuru+8iVxcbk1lZGl1bXAgMjog5Lit562J57K+5bqmXFxuSGlnaHAgM++8mumrmOeyvuW6picsXG4gICAgICAgIHR5cGU6IGNjLkVudW0oR2xvd0xldmVsKSxcbiAgICB9KVxuICAgIGdsb3cgPSBHbG93TGV2ZWwuTm9uZTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5aSW5Y+R5YWJ5a695bqm77yI5YOP57Sg77yJJyxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nbG93ID4gR2xvd0xldmVsLk5vbmU7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGdsb3dXaWR0aDogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+WkluWPkeWFieminOiJsua3seW6picsXG4gICAgICAgIG1pbjogMSxcbiAgICAgICAgbWF4OiAzMixcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2xvdyA+IEdsb3dMZXZlbC5Ob25lO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBnbG93RGVwdGg6IG51bWJlciA9IDI7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+WkluWPkeWFieminOiJsicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb3cgPiBHbG93TGV2ZWwuTm9uZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZ2xvd0NvbG9yOiBjYy5Db2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG5cbiAgICBwcml2YXRlIF9tdGw6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBwcml2YXRlIF90aW1lOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRNYXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tdGwgPSBudWxsO1xuICAgIH1cblxuICAgIGluaXRNYXQoKSB7XG4gICAgICAgIHRoaXMuX210bCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmdldE1hdGVyaWFsKDApO1xuICAgICAgICB0aGlzLl9tdGwuZGVmaW5lKCdVU0VfVEVYVFVSRScsIHRydWUsIDApO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zZXRNYXRlcmlhbCgwLCB0aGlzLl9tdGwpO1xuICAgICAgICB0aGlzLnVzZSgpO1xuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tdGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX3Jlc29sdXRpb24nLCBbdGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9zaGFkb3cnLCB0aGlzLnNoYWRvd1VzZSA/IDEgOiAwKTtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX3NoYWRvd09mZnNldCcsIFstdGhpcy5zaGFkb3dPZmZzZXQueCAvIHRoaXMubm9kZS53aWR0aCwgLXRoaXMuc2hhZG93T2Zmc2V0LnkgLyB0aGlzLm5vZGUuaGVpZ2h0XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9zaGFkb3dDb2xvcicsIFt0aGlzLnNoYWRvd0NvbG9yLnIgLyAyNTUsIHRoaXMuc2hhZG93Q29sb3IuZyAvIDI1NSwgdGhpcy5zaGFkb3dDb2xvci5iIC8gMjU1LCB0aGlzLnNoYWRvd0NvbG9yLmEgLyAyNTVdKTtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX291dGxpbmUnLCB0aGlzLm91dGxpbmVVc2UgPyAxIDogMCk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9vdXRsaW5lV2lkdGgnLCBbdGhpcy5vdXRsaW5lV2lkdGggLyB0aGlzLm5vZGUud2lkdGgsIHRoaXMub3V0bGluZVdpZHRoIC8gdGhpcy5ub2RlLmhlaWdodF0pO1xuICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfb3V0bGluZUNvbG9yJywgW3RoaXMub3V0bGluZUNvbG9yLnIgLyAyNTUsIHRoaXMub3V0bGluZUNvbG9yLmcgLyAyNTUsIHRoaXMub3V0bGluZUNvbG9yLmIgLyAyNTUsIHRoaXMub3V0bGluZUNvbG9yLmEgLyAyNTVdKTtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX29sU2hhZG93JywgdGhpcy5vbFNoYWRvd1VzZSA/IDEgOiAwKTtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX29sU2hhZG93T2Zmc2V0JywgWy10aGlzLm9sU2hhZG93T2Zmc2V0LnggLyB0aGlzLm5vZGUud2lkdGgsIC10aGlzLm9sU2hhZG93T2Zmc2V0LnkgLyB0aGlzLm5vZGUuaGVpZ2h0XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9vbFNoYWRvd0NvbG9yJywgW3RoaXMub2xTaGFkb3dDb2xvci5yIC8gMjU1LCB0aGlzLm9sU2hhZG93Q29sb3IuZyAvIDI1NSwgdGhpcy5vbFNoYWRvd0NvbG9yLmIgLyAyNTUsIHRoaXMub2xTaGFkb3dDb2xvci5hIC8gMjU1XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9ncmFkaWVudCcsIHRoaXMuZ3JhZGllbnQgLSAxKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmdyYWRpZW50KSB7XG4gICAgICAgICAgICBjYXNlIEdyYWRpZW50Lk5vbmU6XG4gICAgICAgICAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX2NvbG9yMScsIFt0aGlzLm5vZGUuY29sb3IuciAvIDI1NSwgdGhpcy5ub2RlLmNvbG9yLmcgLyAyNTUsIHRoaXMubm9kZS5jb2xvci5iIC8gMjU1LCB0aGlzLm5vZGUuY29sb3IuYSAvIDI1NV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHcmFkaWVudC5PbmVDb2xvcjpcbiAgICAgICAgICAgIGNhc2UgR3JhZGllbnQuVHdvQ29sb3I6XG4gICAgICAgICAgICBjYXNlIEdyYWRpZW50LlRyaUNvbG9yOlxuICAgICAgICAgICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9jb2xvcjEnLCBbdGhpcy5ub2RlLmNvbG9yLnIgLyAyNTUsIHRoaXMubm9kZS5jb2xvci5nIC8gMjU1LCB0aGlzLm5vZGUuY29sb3IuYiAvIDI1NSwgdGhpcy5ub2RlLmNvbG9yLmEgLyAyNTVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfY29sb3IxJywgW3RoaXMuY29sb3IxLnIgLyAyNTUsIHRoaXMuY29sb3IxLmcgLyAyNTUsIHRoaXMuY29sb3IxLmIgLyAyNTUsIHRoaXMuY29sb3IxLmEgLyAyNTVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfY29sb3IyJywgW3RoaXMuY29sb3IyLnIgLyAyNTUsIHRoaXMuY29sb3IyLmcgLyAyNTUsIHRoaXMuY29sb3IyLmIgLyAyNTUsIHRoaXMuY29sb3IyLmEgLyAyNTVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfY29sb3IzJywgW3RoaXMuY29sb3IzLnIgLyAyNTUsIHRoaXMuY29sb3IzLmcgLyAyNTUsIHRoaXMuY29sb3IzLmIgLyAyNTUsIHRoaXMuY29sb3IzLmEgLyAyNTVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfZmxvd0xpZ2h0JywgdGhpcy5mbG93TGlnaHRVc2UgPyAxIDogMCk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9mbFRpbWUnLCB0aGlzLmZsU3BlZWQgKiB0aGlzLl90aW1lICogNjAgLyB0aGlzLm5vZGUud2lkdGgpO1xuICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfZmxSb3QnLCBNYXRoLmF0YW4oTWF0aC50YW4oTWF0aC5QSSAqIHRoaXMuZmxSb3QgLyAxODAuKSAqIHRoaXMubm9kZS5oZWlnaHQgLyB0aGlzLm5vZGUud2lkdGgpICogMTgwLiAvIE1hdGguUEkpO1xuICAgICAgICB0aGlzLl9tdGwuc2V0UHJvcGVydHkoJ2lfZmxXaWR0aCcsIHRoaXMuZmxXaWR0aCAvIHRoaXMubm9kZS53aWR0aCk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9mbENvbG9yJywgW3RoaXMuZmxDb2xvci5yIC8gMjU1LCB0aGlzLmZsQ29sb3IuZyAvIDI1NSwgdGhpcy5mbENvbG9yLmIgLyAyNTUsIHRoaXMuZmxDb2xvci5hIC8gMjU1XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9nbG93JywgdGhpcy5nbG93KTtcbiAgICAgICAgdGhpcy5fbXRsLnNldFByb3BlcnR5KCdpX2dsb3dXaWR0aCcsIFt0aGlzLmdsb3dXaWR0aCAvIHRoaXMubm9kZS53aWR0aCwgdGhpcy5nbG93V2lkdGggLyB0aGlzLm5vZGUuaGVpZ2h0XSk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9nbG93RGVwdGgnLCB0aGlzLmdsb3dEZXB0aCk7XG4gICAgICAgIHRoaXMuX210bC5zZXRQcm9wZXJ0eSgnaV9nbG93Q29sb3InLCBbdGhpcy5nbG93Q29sb3IuciAvIDI1NSwgdGhpcy5nbG93Q29sb3IuZyAvIDI1NSwgdGhpcy5nbG93Q29sb3IuYiAvIDI1NSwgdGhpcy5nbG93Q29sb3IuYSAvIDI1NV0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWUgKz0gZHQ7XG4gICAgICAgIC8vIHRoaXMudXNlKCk7XG4gICAgfVxufSJdfQ==