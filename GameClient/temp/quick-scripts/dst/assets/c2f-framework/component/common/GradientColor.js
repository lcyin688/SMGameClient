
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/GradientColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vR3JhZGllbnRDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQW1FLEVBQUUsQ0FBQyxVQUFVLEVBQTlFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUV2RixXQUFXO0FBQ1gsSUFBSyxXQU9KO0FBUEQsV0FBSyxXQUFXO0lBQ1osU0FBUztJQUNULHlEQUFjLENBQUE7SUFDZCxTQUFTO0lBQ1QscURBQVksQ0FBQTtJQUNaLFNBQVM7SUFDVCxtREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQVBJLFdBQVcsS0FBWCxXQUFXLFFBT2Y7QUFNRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQW1GQztRQWhGRyxlQUFTLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQVduQyxpQkFBVyxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBV3ZDLGVBQVMsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQVdyQyxnQkFBVSxHQUFlO1lBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDMUIsQ0FBQzs7SUEwQ04sQ0FBQztJQTlFRyxzQkFBSSxtQ0FBUTthQUlaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFC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RSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDO2tEQUk1STtJQTlDZ0IsYUFBYTtRQUhqQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzdCLGlCQUFpQjtPQUNHLGFBQWEsQ0FtRmpDO0lBQUQsb0JBQUM7Q0FuRkQsQUFtRkMsQ0FuRjBDLEVBQUUsQ0FBQyxTQUFTLEdBbUZ0RDtrQkFuRm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIHJlcXVpcmVDb21wb25lbnQsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiog5riQ5Y+Y5pa55ZCRICovXG5lbnVtIEdyYWRpZW50RGlyIHtcbiAgICAvKiog5rC05bmzICovXG4gICAgaG9yaXpvbnRhbCA9IDEsXG4gICAgLyoqIOWeguebtCAqL1xuICAgIHZlcnRpY2FsID0gMixcbiAgICAvKiogNOWbtCAqL1xuICAgIEZvdXJEb3QgPSAzLFxufVxuXG5cbkBjY2NsYXNzXG5AbWVudSgnYzJmL2d1aS9HcmFkaWVudExhYmVsJylcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhZGllbnRMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEdyYWRpZW50RGlyKSwgdG9vbHRpcDogXCLmuJDlj5jmlrnlkJFcIiB9KVxuICAgIF9kaXJlY3RvciA9IEdyYWRpZW50RGlyLmhvcml6b250YWw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShHcmFkaWVudERpciksIHRvb2x0aXA6IFwi5riQ5Y+Y5pa55ZCRXCIgfSlcbiAgICBzZXQgZGlyZWN0b3IodmFsOiBHcmFkaWVudERpcikge1xuICAgICAgICB0aGlzLl9kaXJlY3RvciA9IHZhbDtcbiAgICAgICAgdGhpcy50cmFuc0JFVG9BcnIoKTtcbiAgICB9XG4gICAgZ2V0IGRpcmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0b3I7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KClcbiAgICBfYmVnaW5Db2xvcjogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Db2xvciwgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RvciAhPSBHcmFkaWVudERpci5Gb3VyRG90OyB9LCB0b29sdGlwOiBcIuW3pijkuIop5L6n6aKc6ImyXCIgfSlcbiAgICBzZXQgYmVnaW5Db2xvcihjbHI6IGNjLkNvbG9yKSB7XG4gICAgICAgIHRoaXMuX2JlZ2luQ29sb3IgPSBjbHI7XG4gICAgICAgIHRoaXMudHJhbnNCRVRvQXJyKCk7XG4gICAgfVxuICAgIGdldCBiZWdpbkNvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmVnaW5Db2xvcjtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF9lbmRDb2xvcjogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Db2xvciwgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RvciAhPSBHcmFkaWVudERpci5Gb3VyRG90OyB9LCB0b29sdGlwOiBcIuWPsyjkuIsp5L6n6aKc6ImyXCIgfSlcbiAgICBzZXQgZW5kQ29sb3IoY2xyOiBjYy5Db2xvcikge1xuICAgICAgICB0aGlzLl9lbmRDb2xvciA9IGNscjtcbiAgICAgICAgdGhpcy50cmFuc0JFVG9BcnIoKTtcbiAgICB9XG4gICAgZ2V0IGVuZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kQ29sb3I7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQ29sb3IgfSlcbiAgICBfdmVyQ29sb3JzOiBjYy5Db2xvcltdID0gW1xuICAgICAgICBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KSxcbiAgICAgICAgY2MuY29sb3IoMjU1LCAyNTUsIDI1NSksXG4gICAgICAgIGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpLFxuICAgICAgICBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KVxuICAgIF07XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQ29sb3IsIHZpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGlyZWN0b3IgPT0gR3JhZGllbnREaXIuRm91ckRvdDsgfSwgdG9vbHRpcDogXCLlm5vop5LpopzoibLvvJow77ya5bem5LiL6KeS77yMMe+8muWPs+S4i+inku+8jDLvvJrlt6bkuIrop5LvvIwz77ya5Y+z5LiK6KeSXCIgfSlcbiAgICBzZXQgdmVyQ29sb3JzKHZDb2xvcnM6IGNjLkNvbG9yW10pIHtcbiAgICAgICAgdGhpcy5fdmVyQ29sb3JzID0gdkNvbG9ycztcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3JzKCk7XG4gICAgfVxuICAgIGdldCB2ZXJDb2xvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJDb2xvcnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc0JFVG9BcnIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdG9yID09IEdyYWRpZW50RGlyLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMudmVyQ29sb3JzID0gW3RoaXMuX2JlZ2luQ29sb3IsIHRoaXMuZW5kQ29sb3IsIHRoaXMuX2JlZ2luQ29sb3IsIHRoaXMuZW5kQ29sb3JdO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0b3IgPT0gR3JhZGllbnREaXIudmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMudmVyQ29sb3JzID0gW3RoaXMuZW5kQ29sb3IsIHRoaXMuZW5kQ29sb3IsIHRoaXMuX2JlZ2luQ29sb3IsIHRoaXMuX2JlZ2luQ29sb3JdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZUNvbG9ycygpIHtcbiAgICAgICAgY29uc3QgY21wID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFjbXApIHJldHVybjtcbiAgICAgICAgY29uc3QgX2Fzc2VtYmxlciA9IGNtcFsnX2Fzc2VtYmxlciddO1xuICAgICAgICBpZiAoIShfYXNzZW1ibGVyIGluc3RhbmNlb2YgY2NbJ0Fzc2VtYmxlcjJEJ10pKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHVpbnRWZXJ0cyA9IF9hc3NlbWJsZXIuX3JlbmRlckRhdGEudWludFZEYXRhc1swXTtcbiAgICAgICAgaWYgKCF1aW50VmVydHMpIHJldHVybjtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm5vZGUuY29sb3I7XG4gICAgICAgIGNvbnN0IGZsb2F0c1BlclZlcnQgPSBfYXNzZW1ibGVyLmZsb2F0c1BlclZlcnQ7XG4gICAgICAgIGNvbnN0IGNvbG9yT2Zmc2V0ID0gX2Fzc2VtYmxlci5jb2xvck9mZnNldDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbG9yT2Zmc2V0LCBsID0gdWludFZlcnRzLmxlbmd0aDsgaSA8IGw7IGkgKz0gZmxvYXRzUGVyVmVydCkge1xuICAgICAgICAgICAgdWludFZlcnRzW2ldID0gKHRoaXMudmVyQ29sb3JzW2NvdW50KytdIHx8IGNvbG9yKVsnX3ZhbCddO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9uY2UoY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfRFJBVywgdGhpcy5fdXBkYXRlQ29sb3JzLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihjYy5EaXJlY3Rvci5FVkVOVF9BRlRFUl9EUkFXLCB0aGlzLl91cGRhdGVDb2xvcnMsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVbJ19yZW5kZXJGbGFnJ10gfD0gY2NbJ1JlbmRlckZsb3cnXS5GTEFHX0NPTE9SO1xuICAgIH1cbn1cbiJdfQ==