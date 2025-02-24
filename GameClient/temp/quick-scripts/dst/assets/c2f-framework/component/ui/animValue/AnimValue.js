
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/animValue/AnimValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfe49J1R7JHxIqVge927Yqj', 'AnimValue');
// c2f-framework/component/ui/animValue/AnimValue.ts

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
var C2FTween_1 = require("../../../core/timer/C2FTween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
/**
 * 数值变化类型
 */
var AnimType;
(function (AnimType) {
    /** 以速度计算变化时长 */
    AnimType[AnimType["SPEED"] = 0] = "SPEED";
    /** 固定时长 */
    AnimType[AnimType["DURATION"] = 1] = "DURATION";
})(AnimType || (AnimType = {}));
/**
 * 固定时长时的缓动类型
 */
var EasingType;
(function (EasingType) {
    EasingType[EasingType["NONE"] = 0] = "NONE";
    EasingType[EasingType["IN"] = 1] = "IN";
    EasingType[EasingType["OUT"] = 2] = "OUT";
    EasingType[EasingType["IN_OUT"] = 3] = "IN_OUT";
})(EasingType || (EasingType = {}));
/**
 * 数值渐变组件基类，可根据此组件拓展各种数值渐变的组件
 */
var AnimValue = /** @class */ (function (_super) {
    __extends(AnimValue, _super);
    function AnimValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._endValue = 0;
        _this._curValue = 0;
        _this.animType = AnimType.SPEED;
        _this.speed = 1;
        _this.duration = 1;
        _this.easingType = EasingType.NONE;
        _this.timeScale = false;
        _this._tween = null;
        _this._isAdd = false;
        return _this;
    }
    Object.defineProperty(AnimValue.prototype, "initValue", {
        get: function () { return this._endValue; },
        set: function (v) {
            this._curValue = v;
            this._endValue = v;
            this.setValueImmediately(this._endValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimValue.prototype, "isAdd", {
        /** 当前是否为增量变化 */
        get: function () { return this._isAdd; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimValue.prototype, "endValue", {
        /** 变化的目标值 */
        get: function () { return this._endValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimValue.prototype, "curValue", {
        /** 变化过程的当前值 */
        get: function () { return this._curValue; },
        enumerable: false,
        configurable: true
    });
    /**
     * @virtual
     */
    AnimValue.prototype.onAnimStart = function () {
    };
    /**
     * @virtual
     */
    AnimValue.prototype.onAnimUpdate = function () {
    };
    /**
     * @virtual
     */
    AnimValue.prototype.onAnimComplete = function () {
        if (this._animResolve) {
            this._animResolve();
            this._animResolve = null;
        }
        if (this._tween) {
            this._tween.stop();
            this._tween = null;
        }
    };
    /**
     * 立即设置value，不执行动画
     * @virtual
     */
    AnimValue.prototype.setValueImmediately = function (end) {
        this._isAdd = this._endValue - this._curValue > 0;
        this._endValue = end;
        this._curValue = end;
        this.onAnimStart();
        this.onAnimUpdate();
        this.onAnimComplete();
    };
    /**
     * 设置进度值。进度动画结束后resolve
     * @virtual
     * @param end 目标进度值
     * @param anim 是否执行动画，默认true
     */
    AnimValue.prototype.setValue = function (end, anim) {
        var _this = this;
        if (anim === void 0) { anim = true; }
        return new Promise(function (resolve, reject) {
            var _a;
            if (!anim) {
                _this.setValueImmediately(end);
                resolve();
                return;
            }
            _this._animResolve = resolve;
            _this._endValue = end;
            _this._isAdd = _this._endValue - _this._curValue > 0;
            (_a = _this._tween) === null || _a === void 0 ? void 0 : _a.stop();
            _this._tween = _this.timeScale ? new C2FTween_1.C2FTween(_this, C2FTween_1.SCALE_TWEEN) : new C2FTween_1.C2FTween(_this);
            var duration = _this.animType === AnimType.DURATION ? _this.duration : Math.abs(_this._endValue - _this._curValue) / _this.speed;
            switch (_this.easingType) {
                case EasingType.IN:
                    _this._tween.easing(C2FTween_1.Easing.Quadratic.In);
                    break;
                case EasingType.OUT:
                    _this._tween.easing(C2FTween_1.Easing.Quadratic.Out);
                    break;
                case EasingType.IN_OUT:
                    _this._tween.easing(C2FTween_1.Easing.Quadratic.InOut);
                    break;
                default:
                    break;
            }
            _this._tween.to({ _curValue: _this._endValue }, duration * 1000)
                .onStart(function () {
                _this.onAnimStart();
            })
                .onUpdate(function () {
                _this.onAnimUpdate();
            })
                .onComplete(function () {
                _this.onAnimComplete();
            })
                .start();
        });
    };
    /**
     * 停止动画，并中止之前未结束的Promise
     * @virtual
     */
    AnimValue.prototype.stop = function () {
        if (this._animResolve) {
            this._animResolve = null;
        }
        if (this._tween) {
            this._tween.stop();
            this._tween = null;
        }
    };
    __decorate([
        property
    ], AnimValue.prototype, "_endValue", void 0);
    __decorate([
        property
    ], AnimValue.prototype, "_curValue", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "初始值"
        })
    ], AnimValue.prototype, "initValue", null);
    __decorate([
        property({
            type: cc.Enum(AnimType),
            tooltip: CC_DEV && "数值变化类型\nSPEED：以速度计算变化时长\nDURATION：固定时长"
        })
    ], AnimValue.prototype, "animType", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "每秒数值变化速度",
            visible: function () { return this.animType === AnimType.SPEED; }
        })
    ], AnimValue.prototype, "speed", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "数值变化的总时长",
            visible: function () { return this.animType === AnimType.DURATION; }
        })
    ], AnimValue.prototype, "duration", void 0);
    __decorate([
        property({
            type: cc.Enum(EasingType),
            tooltip: CC_DEV && "变化的缓动类型"
        })
    ], AnimValue.prototype, "easingType", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && "变化速度是否受到timeScale的影响"
        })
    ], AnimValue.prototype, "timeScale", void 0);
    AnimValue = __decorate([
        ccclass,
        executeInEditMode,
        menu("c2f/UI/AnimValue")
    ], AnimValue);
    return AnimValue;
}(cc.Component));
exports.default = AnimValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hbmltVmFsdWUvQW5pbVZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUE2RTtBQUV2RSxJQUFBLEtBQWlELEVBQUUsQ0FBQyxVQUFVLEVBQTVELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUVyRTs7R0FFRztBQUNILElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULGdCQUFnQjtJQUNoQix5Q0FBSyxDQUFBO0lBQ0wsV0FBVztJQUNYLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQUVEOztHQUVHO0FBQ0gsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLHVDQUFFLENBQUE7SUFDRix5Q0FBRyxDQUFBO0lBQ0gsK0NBQU0sQ0FBQTtBQUNWLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBRUQ7O0dBRUc7QUFJSDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBKQztRQXpKcUIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBZ0JqQyxjQUFRLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQztRQU1wQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBTWxCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFNckIsZ0JBQVUsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBS3pDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFJMUIsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFDOUIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE0R3BDLENBQUM7SUFuSkcsc0JBQVcsZ0NBQVM7YUFBcEIsY0FBaUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFD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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNpbmcsIFNDQUxFX1RXRUVOLCBDMkZUd2VlbiB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3RpbWVyL0MyRlR3ZWVuXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOaVsOWAvOWPmOWMluexu+Wei1xuICovXG5lbnVtIEFuaW1UeXBlIHtcbiAgICAvKiog5Lul6YCf5bqm6K6h566X5Y+Y5YyW5pe26ZW/ICovXG4gICAgU1BFRUQsXG4gICAgLyoqIOWbuuWumuaXtumVvyAqL1xuICAgIERVUkFUSU9OLFxufVxuXG4vKipcbiAqIOWbuuWumuaXtumVv+aXtueahOe8k+WKqOexu+Wei1xuICovXG5lbnVtIEVhc2luZ1R5cGUge1xuICAgIE5PTkUsXG4gICAgSU4sXG4gICAgT1VULFxuICAgIElOX09VVCxcbn1cblxuLyoqXG4gKiDmlbDlgLzmuJDlj5jnu4Tku7bln7rnsbvvvIzlj6/moLnmja7mraTnu4Tku7bmi5PlsZXlkITnp43mlbDlgLzmuJDlj5jnmoTnu4Tku7ZcbiAqL1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQG1lbnUoXCJjMmYvVUkvQW5pbVZhbHVlXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltVmFsdWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSBwcml2YXRlIF9lbmRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkgcHJpdmF0ZSBfY3VyVmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLliJ3lp4vlgLxcIlxuICAgIH0pXG4gICAgcHVibGljIGdldCBpbml0VmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2VuZFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBpbml0VmFsdWUodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2N1clZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5fZW5kVmFsdWUgPSB2O1xuICAgICAgICB0aGlzLnNldFZhbHVlSW1tZWRpYXRlbHkodGhpcy5fZW5kVmFsdWUpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oQW5pbVR5cGUpLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLmlbDlgLzlj5jljJbnsbvlnotcXG5TUEVFRO+8muS7pemAn+W6puiuoeeul+WPmOWMluaXtumVv1xcbkRVUkFUSU9O77ya5Zu65a6a5pe26ZW/XCJcbiAgICB9KVxuICAgIHB1YmxpYyBhbmltVHlwZTogQW5pbVR5cGUgPSBBbmltVHlwZS5TUEVFRDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuavj+enkuaVsOWAvOWPmOWMlumAn+W6plwiLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5hbmltVHlwZSA9PT0gQW5pbVR5cGUuU1BFRUQ7IH1cbiAgICB9KVxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuaVsOWAvOWPmOWMlueahOaAu+aXtumVv1wiLFxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5hbmltVHlwZSA9PT0gQW5pbVR5cGUuRFVSQVRJT047IH1cbiAgICB9KVxuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oRWFzaW5nVHlwZSksXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWPmOWMlueahOe8k+WKqOexu+Wei1wiXG4gICAgfSlcbiAgICBwdWJsaWMgZWFzaW5nVHlwZTogRWFzaW5nVHlwZSA9IEVhc2luZ1R5cGUuTk9ORTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWPmOWMlumAn+W6puaYr+WQpuWPl+WIsHRpbWVTY2FsZeeahOW9seWTjVwiXG4gICAgfSlcbiAgICBwdWJsaWMgdGltZVNjYWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiog57yT5a2Y5Yqo55S755qEcmVzb2x2ZSAqL1xuICAgIHByaXZhdGUgX2FuaW1SZXNvbHZlOiAodmFsdWU6IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPikgPT4gdm9pZDtcbiAgICBwcml2YXRlIF90d2VlbjogQzJGVHdlZW48dGhpcz4gPSBudWxsO1xuICAgIHByaXZhdGUgX2lzQWRkOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOW9k+WJjeaYr+WQpuS4uuWinumHj+WPmOWMliAqL1xuICAgIHB1YmxpYyBnZXQgaXNBZGQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc0FkZDsgfVxuXG4gICAgLyoqIOWPmOWMlueahOebruagh+WAvCAqL1xuICAgIHB1YmxpYyBnZXQgZW5kVmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2VuZFZhbHVlOyB9XG4gICAgLyoqIOWPmOWMlui/h+eoi+eahOW9k+WJjeWAvCAqL1xuICAgIHB1YmxpYyBnZXQgY3VyVmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2N1clZhbHVlOyB9XG5cbiAgICAvKipcbiAgICAgKiBAdmlydHVhbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkFuaW1TdGFydCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdmlydHVhbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkFuaW1VcGRhdGUoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHZpcnR1YWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25BbmltQ29tcGxldGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbmltUmVzb2x2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYW5pbVJlc29sdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1SZXNvbHZlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdHdlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeri+WNs+iuvue9rnZhbHVl77yM5LiN5omn6KGM5Yqo55S7XG4gICAgICogQHZpcnR1YWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWVJbW1lZGlhdGVseShlbmQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0FkZCA9IHRoaXMuX2VuZFZhbHVlIC0gdGhpcy5fY3VyVmFsdWUgPiAwO1xuICAgICAgICB0aGlzLl9lbmRWYWx1ZSA9IGVuZDtcbiAgICAgICAgdGhpcy5fY3VyVmFsdWUgPSBlbmQ7XG4gICAgICAgIHRoaXMub25BbmltU3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkFuaW1VcGRhdGUoKTtcbiAgICAgICAgdGhpcy5vbkFuaW1Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rui/m+W6puWAvOOAgui/m+W6puWKqOeUu+e7k+adn+WQjnJlc29sdmVcbiAgICAgKiBAdmlydHVhbFxuICAgICAqIEBwYXJhbSBlbmQg55uu5qCH6L+b5bqm5YC8XG4gICAgICogQHBhcmFtIGFuaW0g5piv5ZCm5omn6KGM5Yqo55S777yM6buY6K6kdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRWYWx1ZShlbmQ6IG51bWJlciwgYW5pbTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghYW5pbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVJbW1lZGlhdGVseShlbmQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FuaW1SZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX2VuZFZhbHVlID0gZW5kO1xuICAgICAgICAgICAgdGhpcy5faXNBZGQgPSB0aGlzLl9lbmRWYWx1ZSAtIHRoaXMuX2N1clZhbHVlID4gMDtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuPy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLl90d2VlbiA9IHRoaXMudGltZVNjYWxlID8gbmV3IEMyRlR3ZWVuKHRoaXMsIFNDQUxFX1RXRUVOKSA6IG5ldyBDMkZUd2Vlbih0aGlzKTtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMuYW5pbVR5cGUgPT09IEFuaW1UeXBlLkRVUkFUSU9OID8gdGhpcy5kdXJhdGlvbiA6IE1hdGguYWJzKHRoaXMuX2VuZFZhbHVlIC0gdGhpcy5fY3VyVmFsdWUpIC8gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5lYXNpbmdUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBFYXNpbmdUeXBlLklOOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90d2Vlbi5lYXNpbmcoRWFzaW5nLlF1YWRyYXRpYy5Jbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRWFzaW5nVHlwZS5PVVQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R3ZWVuLmVhc2luZyhFYXNpbmcuUXVhZHJhdGljLk91dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRWFzaW5nVHlwZS5JTl9PVVQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R3ZWVuLmVhc2luZyhFYXNpbmcuUXVhZHJhdGljLkluT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90d2Vlbi50byh7IF9jdXJWYWx1ZTogdGhpcy5fZW5kVmFsdWUgfSwgZHVyYXRpb24gKiAxMDAwKVxuICAgICAgICAgICAgICAgIC5vblN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1TdGFydCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1VcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatouWKqOeUu++8jOW5tuS4reatouS5i+WJjeacque7k+adn+eahFByb21pc2VcbiAgICAgKiBAdmlydHVhbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYW5pbVJlc29sdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1SZXNvbHZlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdHdlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==