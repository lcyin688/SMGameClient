"use strict";
cc._RF.push(module, 'd37e8d8sltP/7TNA7NzgqdS', 'ToScaleScreen');
// c2f-framework/component/common/ToScaleScreen.ts

"use strict";
/** 等比缩放节点 */
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
/** 适配类型 */
var FixedType;
(function (FixedType) {
    FixedType[FixedType["full"] = 0] = "full";
    FixedType[FixedType["width"] = 1] = "width";
    FixedType[FixedType["height"] = 2] = "height";
    FixedType[FixedType["amdFull"] = 3] = "amdFull";
})(FixedType || (FixedType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ToScaleScreen = /** @class */ (function (_super) {
    __extends(ToScaleScreen, _super);
    function ToScaleScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fixedType = FixedType.full;
        _this._target = null;
        _this._offset = 0;
        _this._fixedCenter = false;
        _this.oriPos = cc.Vec2.ZERO;
        return _this;
    }
    Object.defineProperty(ToScaleScreen.prototype, "fixedType", {
        get: function () {
            return this._fixedType;
        },
        set: function (v) {
            if (this._fixedType === v) {
                return;
            }
            this._fixedType = v;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (v) {
            this._target = v;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToScaleScreen.prototype, "fixedCenter", {
        get: function () {
            return this._fixedCenter;
        },
        set: function (value) {
            this._fixedCenter = value;
            this.autoScale();
        },
        enumerable: false,
        configurable: true
    });
    ToScaleScreen.prototype.onLoad = function () {
        if (this.target) {
            this.target.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        this.node.getPosition(this.oriPos);
        this.autoScale();
    };
    ToScaleScreen.prototype.onDestroy = function () {
        this.oriPos = null;
        if (this.target) {
            this.target.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
    };
    ToScaleScreen.prototype.autoScale = function () {
        var szView = cc.view.getVisibleSize();
        if (this.target) {
            szView = this.target.getContentSize();
        }
        else {
            if (CC_EDITOR) {
                //此尺寸为设计分辨率
                szView = cc.size(1080, 1920);
            }
        }
        var scaleX = szView.width / this.node.width;
        var scaleY = szView.height / this.node.height;
        var retScale = 1;
        switch (this.fixedType) {
            case FixedType.full:
                retScale = Math.max(scaleX, scaleY) + this.offset;
                break;
            case FixedType.width:
                retScale = scaleX;
                break;
            case FixedType.height:
                retScale = scaleY;
                break;
            case FixedType.amdFull:
                //修正宽度·特别宽的屏会把宽拉很宽，画面严重失真
                var maxWHB = szView.height * 1080 / 1920;
                var amdScX = maxWHB / this.node.width;
                retScale = Math.max(amdScX, scaleY) + this.offset;
                break;
        }
        this.node.setScale(retScale);
        this.resetPosition(retScale);
    };
    ToScaleScreen.prototype.resetPosition = function (retScale) {
        //位置居中
        if (this.fixedCenter) {
            var posX = retScale * (this.node.anchorX - 0.5) * this.node.width;
            var posY = retScale * (this.node.anchorY - 0.5) * this.node.height;
            this.node.setPosition(posX, posY);
        }
        else {
            this.node.setPosition(this.oriPos);
        }
    };
    __decorate([
        property({ type: cc.Enum(FixedType) })
    ], ToScaleScreen.prototype, "_fixedType", void 0);
    __decorate([
        property({ type: cc.Enum(FixedType), tooltip: CC_DEV && "缩放方式" })
    ], ToScaleScreen.prototype, "fixedType", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_target", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: CC_DEV && "目标节点,不设置目标节点时表示已屏幕为参考" })
    ], ToScaleScreen.prototype, "target", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_offset", void 0);
    __decorate([
        property({ tooltip: "缩放偏移：在等比铺满屏幕的情况下缩放偏移值(百分比)" })
    ], ToScaleScreen.prototype, "offset", null);
    __decorate([
        property()
    ], ToScaleScreen.prototype, "_fixedCenter", void 0);
    __decorate([
        property({ tooltip: "固定节点始终保持相对屏幕居中" })
    ], ToScaleScreen.prototype, "fixedCenter", null);
    ToScaleScreen = __decorate([
        ccclass,
        menu('c2f/common/ToScaleScreen')
    ], ToScaleScreen);
    return ToScaleScreen;
}(cc.Component));
exports.default = ToScaleScreen;

cc._RF.pop();