"use strict";
cc._RF.push(module, '6f847evt3hBnL1dwEZ/qeGz', 'ShaderCyclicRLabel');
// c2f-framework/component/shader/ShaderCyclicRLabel.ts

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
var C2FConst_1 = require("../../define/C2FConst");
var _a = cc._decorator, ccclass = _a.ccclass, requireComponent = _a.requireComponent, menu = _a.menu, property = _a.property;
var ShaderCyclicRLabel = /** @class */ (function (_super) {
    __extends(ShaderCyclicRLabel, _super);
    function ShaderCyclicRLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxWidth = 0;
        _this.moveTxt = true;
        _this.scaleMatch = false;
        _this.moveSpeed = 100;
        _this.vTransH = false;
        _this.transLG = C2FConst_1.C2FConst.LanguageKey.en + "|" + C2FConst_1.C2FConst.LanguageKey.th;
        //原始缩放
        _this.oriScale = 1.0;
        //
        _this.oriPos = cc.Vec2.ZERO;
        _this.oriMat = null;
        _this.oriCacheMode = cc.Label.CacheMode.NONE;
        _this.duration = 0;
        _this.useShader = false;
        return _this;
    }
    ShaderCyclicRLabel.prototype.onLoad = function () {
        this.duration = 0;
        this.oriPos = this.node.getPosition();
        this.oriScale = this.node.scale;
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onLabelSizeChanged.bind(this));
    };
    ShaderCyclicRLabel.prototype.start = function () {
        var labelComp = this.node.getComponent(cc.Label);
        this.oriCacheMode = labelComp.cacheMode;
        this.oriMat = labelComp.getMaterial(0);
        this.onLabelSizeChanged();
    };
    /** 是否把竖排改为旋转90横排 */
    ShaderCyclicRLabel.prototype.isNeedTransVH = function () {
        var need = false;
        if (this.vTransH) {
            var lgs = this.transLG.split('|');
            if (lgs.length > 0 && lgs.indexOf(c2f.language.current) >= 0) {
                need = true;
            }
        }
        return need;
    };
    /** 是否需要滚动 */
    ShaderCyclicRLabel.prototype.isNeedScroll = function () {
        var nodeSize = this.node.getContentSize();
        if (nodeSize.width > this.maxWidth) {
            return true;
        }
        return false;
    };
    ShaderCyclicRLabel.prototype.onLabelSizeChanged = function () {
        cc.log("label size: w:" + this.node.width + " h:" + this.node.height);
        if (this.isNeedTransVH()) {
            this.transferV2H();
        }
        if (this.moveTxt) {
            this.updateMoveShow();
        }
        if (this.scaleMatch) {
            this.node.scale = Math.min(this.oriScale, this.maxWidth / Math.max(1, this.node.width));
        }
    };
    ShaderCyclicRLabel.prototype.moveLabelWithShader = function () {
        var _this = this;
        var txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.cacheMode != cc.Label.CacheMode.NONE) {
            txtLabel.cacheMode = cc.Label.CacheMode.NONE;
        }
        var resUrl = 'commonRes/shader/materials/cyclicRollingTxt';
        c2f.res.load(C2FConst_1.C2FConst.fwBundleName, resUrl, cc.Material, null, function (err, res) {
            if (err) {
                cc.error(err);
                return;
            }
            if (txtLabel && txtLabel.isValid) {
                var variant1 = txtLabel.setMaterial(0, res);
                if (variant1) {
                    variant1.setProperty('anchorX', _this.node.anchorX);
                    variant1.setProperty('showWidth', _this.maxWidth / _this.node.width);
                    variant1.setProperty('moveSpeed', Math.max(1.0, (_this.node.width - _this.maxWidth) / (_this.moveSpeed || 100)));
                    //重置状态
                    _this.duration = 0;
                    _this.useShader = true;
                }
            }
        });
    };
    ShaderCyclicRLabel.prototype.updateMoveShow = function () {
        //重置shader使用状态
        this.useShader = false;
        //只有普通模式才支持滑动显示
        var txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.overflow != cc.Label.Overflow.NONE) {
            return;
        }
        if (!this.isNeedScroll()) {
            if (this.oriMat) {
                txtLabel.setMaterial(0, this.oriMat);
                txtLabel.cacheMode = this.oriCacheMode;
            }
            return;
        }
        //正确设置宽度才支持
        if (this.maxWidth <= 0) {
            return;
        }
        this.moveLabelWithShader();
    };
    ShaderCyclicRLabel.prototype.transferV2H = function () {
        if (!this.vTransH) {
            return;
        }
        var txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.overflow != cc.Label.Overflow.RESIZE_HEIGHT) {
            return;
        }
        //暂时不需要缓存原始信息
        txtLabel.overflow = cc.Label.Overflow.NONE;
        txtLabel.node.angle = 90;
        var oriAnchor = txtLabel.node.getAnchorPoint();
        txtLabel.node.anchorX = oriAnchor.y;
        txtLabel.node.anchorY = oriAnchor.x;
    };
    ShaderCyclicRLabel.prototype.update = function (dt) {
        if (this.useShader) {
            this.duration += dt;
            var txtLabel = this.node.getComponent(cc.Label);
            var variant1 = txtLabel.getMaterial(0);
            if (variant1) {
                variant1.setProperty('curTick', this.duration);
            }
        }
    };
    __decorate([
        property({ tooltip: "文本显示的宽度阈值" })
    ], ShaderCyclicRLabel.prototype, "maxWidth", void 0);
    __decorate([
        property({ tooltip: "滑动显示" })
    ], ShaderCyclicRLabel.prototype, "moveTxt", void 0);
    __decorate([
        property({ tooltip: "缩放匹配" })
    ], ShaderCyclicRLabel.prototype, "scaleMatch", void 0);
    __decorate([
        property({
            tooltip: "滑动显示移动速度",
            visible: function () {
                return this.moveTxt;
            }
        })
    ], ShaderCyclicRLabel.prototype, "moveSpeed", void 0);
    __decorate([
        property({ tooltip: "将单字单行显示转为竖直水平的语言种类，以|分隔" })
    ], ShaderCyclicRLabel.prototype, "vTransH", void 0);
    __decorate([
        property({
            tooltip: "转为竖直水平的语言种类，以|分隔",
            visible: function () {
                return this.vTransH;
            }
        })
    ], ShaderCyclicRLabel.prototype, "transLG", void 0);
    ShaderCyclicRLabel = __decorate([
        ccclass,
        menu('c2f/shader/ShaderCyclicRLabel'),
        requireComponent(cc.Label)
    ], ShaderCyclicRLabel);
    return ShaderCyclicRLabel;
}(cc.Component));
exports.default = ShaderCyclicRLabel;

cc._RF.pop();