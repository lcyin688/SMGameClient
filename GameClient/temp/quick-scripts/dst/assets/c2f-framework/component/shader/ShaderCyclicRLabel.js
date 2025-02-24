
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderCyclicRLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyQ3ljbGljUkxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUUzQyxJQUFBLEtBQWdELEVBQUUsQ0FBQyxVQUFVLEVBQTNELE9BQU8sYUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUlwRTtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWtLQztRQS9KRyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFRNUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBUXpCLGFBQU8sR0FBYyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQUksbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBSSxDQUFDO1FBRTFFLE1BQU07UUFDRSxjQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEVBQUU7UUFDTSxZQUFNLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFDM0Isa0JBQVksR0FBdUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRTNELGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUE0SHZDLENBQUM7SUExSEcsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJ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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGQ29uc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCByZXF1aXJlQ29tcG9uZW50LCBtZW51LCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AbWVudSgnYzJmL3NoYWRlci9TaGFkZXJDeWNsaWNSTGFiZWwnKVxuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJDeWNsaWNSTGFiZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmlofmnKzmmL7npLrnmoTlrr3luqbpmIjlgLxcIiB9KVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmu5HliqjmmL7npLpcIiB9KVxuICAgIG1vdmVUeHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLnvKnmlL7ljLnphY1cIiB9KVxuICAgIHNjYWxlTWF0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IFwi5ruR5Yqo5pi+56S656e75Yqo6YCf5bqmXCIsXG4gICAgICAgIHZpc2libGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVHh0O1xuICAgICAgICB9XG4gICAgfSlcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5bCG5Y2V5a2X5Y2V6KGM5pi+56S66L2s5Li656uW55u05rC05bmz55qE6K+t6KiA56eN57G777yM5LulfOWIhumalFwiIH0pXG4gICAgdlRyYW5zSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogXCLovazkuLrnq5bnm7TmsLTlubPnmoTor63oqIDnp43nsbvvvIzku6V85YiG6ZqUXCIsXG4gICAgICAgIHZpc2libGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52VHJhbnNIO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB0cmFuc0xHOiBzdHJpbmcgPSBgJHtDMkZDb25zdC5MYW5ndWFnZUtleS5lbn18JHtDMkZDb25zdC5MYW5ndWFnZUtleS50aH1gO1xuXG4gICAgLy/ljp/lp4vnvKnmlL5cbiAgICBwcml2YXRlIG9yaVNjYWxlID0gMS4wO1xuICAgIC8vXG4gICAgcHJpdmF0ZSBvcmlQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG4gICAgcHJpdmF0ZSBvcmlNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBwcml2YXRlIG9yaUNhY2hlTW9kZTogY2MuTGFiZWwuQ2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLk5PTkU7XG5cbiAgICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdXNlU2hhZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgICAgICB0aGlzLm9yaVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLm9yaVNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLm9uTGFiZWxTaXplQ2hhbmdlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGxhYmVsQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLm9yaUNhY2hlTW9kZSA9IGxhYmVsQ29tcC5jYWNoZU1vZGU7XG4gICAgICAgIHRoaXMub3JpTWF0ID0gbGFiZWxDb21wLmdldE1hdGVyaWFsKDApO1xuXG4gICAgICAgIHRoaXMub25MYWJlbFNpemVDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuaKiuerluaOkuaUueS4uuaXi+i9rDkw5qiq5o6SICovXG4gICAgcHJpdmF0ZSBpc05lZWRUcmFuc1ZIKCkge1xuICAgICAgICBsZXQgbmVlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52VHJhbnNIKSB7XG4gICAgICAgICAgICBsZXQgbGdzID0gdGhpcy50cmFuc0xHLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICBpZiAobGdzLmxlbmd0aCA+IDAgJiYgbGdzLmluZGV4T2YoYzJmLmxhbmd1YWdlLmN1cnJlbnQpID49IDApIHtcbiAgICAgICAgICAgICAgICBuZWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVlZDtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm6ZyA6KaB5rua5YqoICovXG4gICAgcHJpdmF0ZSBpc05lZWRTY3JvbGwoKSB7XG4gICAgICAgIGxldCBub2RlU2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBpZiAobm9kZVNpemUud2lkdGggPiB0aGlzLm1heFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxhYmVsU2l6ZUNoYW5nZWQoKSB7XG4gICAgICAgIGNjLmxvZyhgbGFiZWwgc2l6ZTogdzoke3RoaXMubm9kZS53aWR0aH0gaDoke3RoaXMubm9kZS5oZWlnaHR9YCk7XG4gICAgICAgIGlmICh0aGlzLmlzTmVlZFRyYW5zVkgoKSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2ZlclYySCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVUeHQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW92ZVNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2FsZU1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBNYXRoLm1pbih0aGlzLm9yaVNjYWxlLCB0aGlzLm1heFdpZHRoIC8gTWF0aC5tYXgoMSwgdGhpcy5ub2RlLndpZHRoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVMYWJlbFdpdGhTaGFkZXIoKSB7XG4gICAgICAgIGxldCB0eHRMYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAodHh0TGFiZWwuY2FjaGVNb2RlICE9IGNjLkxhYmVsLkNhY2hlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICB0eHRMYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzVXJsID0gJ2NvbW1vblJlcy9zaGFkZXIvbWF0ZXJpYWxzL2N5Y2xpY1JvbGxpbmdUeHQnO1xuICAgICAgICBjMmYucmVzLmxvYWQoQzJGQ29uc3QuZndCdW5kbGVOYW1lLCByZXNVcmwsIGNjLk1hdGVyaWFsLCBudWxsLCAoZXJyOiBFcnJvciB8IG51bGwsIHJlczogY2MuTWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eHRMYWJlbCAmJiB0eHRMYWJlbC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnQxID0gdHh0TGFiZWwuc2V0TWF0ZXJpYWwoMCwgcmVzKTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDEuc2V0UHJvcGVydHkoJ2FuY2hvclgnLCB0aGlzLm5vZGUuYW5jaG9yWCk7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQxLnNldFByb3BlcnR5KCdzaG93V2lkdGgnLCB0aGlzLm1heFdpZHRoIC8gdGhpcy5ub2RlLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDEuc2V0UHJvcGVydHkoJ21vdmVTcGVlZCcsIE1hdGgubWF4KDEuMCwgKHRoaXMubm9kZS53aWR0aCAtIHRoaXMubWF4V2lkdGgpIC8gKHRoaXMubW92ZVNwZWVkIHx8IDEwMCkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy/ph43nva7nirbmgIFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlU2hhZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTW92ZVNob3coKSB7XG4gICAgICAgIC8v6YeN572uc2hhZGVy5L2/55So54q25oCBXG4gICAgICAgIHRoaXMudXNlU2hhZGVyID0gZmFsc2U7XG4gICAgICAgIC8v5Y+q5pyJ5pmu6YCa5qih5byP5omN5pSv5oyB5ruR5Yqo5pi+56S6XG4gICAgICAgIGxldCB0eHRMYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAodHh0TGFiZWwub3ZlcmZsb3cgIT0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc05lZWRTY3JvbGwoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JpTWF0KSB7XG4gICAgICAgICAgICAgICAgdHh0TGFiZWwuc2V0TWF0ZXJpYWwoMCwgdGhpcy5vcmlNYXQpO1xuICAgICAgICAgICAgICAgIHR4dExhYmVsLmNhY2hlTW9kZSA9IHRoaXMub3JpQ2FjaGVNb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5q2j56Gu6K6+572u5a695bqm5omN5pSv5oyBXG4gICAgICAgIGlmICh0aGlzLm1heFdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVMYWJlbFdpdGhTaGFkZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZmVyVjJIKCkge1xuICAgICAgICBpZiAoIXRoaXMudlRyYW5zSCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eHRMYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAodHh0TGFiZWwub3ZlcmZsb3cgIT0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5pqC5pe25LiN6ZyA6KaB57yT5a2Y5Y6f5aeL5L+h5oGvXG4gICAgICAgIHR4dExhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORTtcbiAgICAgICAgdHh0TGFiZWwubm9kZS5hbmdsZSA9IDkwO1xuICAgICAgICBsZXQgb3JpQW5jaG9yID0gdHh0TGFiZWwubm9kZS5nZXRBbmNob3JQb2ludCgpO1xuICAgICAgICB0eHRMYWJlbC5ub2RlLmFuY2hvclggPSBvcmlBbmNob3IueTtcbiAgICAgICAgdHh0TGFiZWwubm9kZS5hbmNob3JZID0gb3JpQW5jaG9yLng7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZVNoYWRlcikge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiArPSBkdDtcbiAgICAgICAgICAgIGxldCB0eHRMYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGV0IHZhcmlhbnQxID0gdHh0TGFiZWwuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICBpZiAodmFyaWFudDEpIHtcbiAgICAgICAgICAgICAgICB2YXJpYW50MS5zZXRQcm9wZXJ0eSgnY3VyVGljaycsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==