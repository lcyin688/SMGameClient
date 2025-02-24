
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/CountdownLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba435qQpBZKg4vyZKQezq5r', 'CountdownLabel');
// c2f-framework/component/common/CountdownLabel.ts

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
var C2FTween_1 = require("../../core/timer/C2FTween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
/**
 * 倒计时显示组件
 */
var CountdownLabel = /** @class */ (function (_super) {
    __extends(CountdownLabel, _super);
    function CountdownLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeScale = false;
        _this._tween = null;
        _this._updateCall = null;
        _this._completeCall = null;
        /** 格式化参数，详见`Tool.formatTimeString` */
        _this._format = "%{hh}:%{mm}:%{ss}";
        /** 文本显示格式化 */
        _this._txtFormat = null;
        /** 剩余秒数 */
        _this._leftSec = 0;
        _this._leftFloorSec = 0;
        _this.curSverTime = 0;
        _this.totalTime = 0;
        _this._label = null;
        return _this;
    }
    Object.defineProperty(CountdownLabel.prototype, "leftSec", {
        get: function () { return this._leftSec; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountdownLabel.prototype, "label", {
        get: function () {
            var _a;
            if (!this._label) {
                this._label = (_a = this.getComponent(cc.Label)) !== null && _a !== void 0 ? _a : this.getComponent(cc.RichText);
            }
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    CountdownLabel.prototype.startCountdown = function (sec, format, txtFormat, updateCall, completeCall) {
        var _this = this;
        var _a;
        if (format === void 0) { format = "%{hh}:%{mm}:%{ss}"; }
        if (txtFormat === void 0) { txtFormat = null; }
        if (updateCall === void 0) { updateCall = null; }
        if (completeCall === void 0) { completeCall = null; }
        this.curSverTime = c2f.utils.date.getSerVerTime();
        this.totalTime = sec;
        this._leftSec = sec;
        this._leftFloorSec = Math.floor(sec);
        this._format = format;
        this._txtFormat = txtFormat;
        this._updateCall = updateCall;
        this._completeCall = completeCall;
        (_a = this._tween) === null || _a === void 0 ? void 0 : _a.stop();
        this.unscheduleAllCallbacks();
        this._tween = this.timeScale ? new C2FTween_1.C2FTween(this, C2FTween_1.SCALE_TWEEN) : new C2FTween_1.C2FTween(this);
        if (!this.timeScale) {
            this.onUpdateTime();
        }
        else {
            this._tween.to({ _leftSec: 0 }, sec * 1000)
                .onUpdate(function () {
                _this.onUpdate();
            })
                .onComplete(function () {
                _this.onComplete();
            })
                .start();
        }
    };
    CountdownLabel.prototype.onUpdateTime = function () {
        var _this = this;
        var _a;
        var floorSec = Math.floor(this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime));
        this._leftSec = floorSec;
        if (this.label) {
            var txtTime = c2f.utils.date.formatTimeString(floorSec, this._format);
            if (this._txtFormat) {
                txtTime = this._txtFormat.format(txtTime);
            }
            this.label.string = txtTime;
        }
        // 更新回调
        (_a = this._updateCall) === null || _a === void 0 ? void 0 : _a.call(this);
        if (floorSec <= 0) { //回调
            this.scheduleOnce(function () {
                _this.onComplete();
            });
        }
        else {
            this.scheduleOnce(function () {
                _this.onUpdateTime();
            }, 1);
        }
    };
    CountdownLabel.prototype.onUpdate = function () {
        var _a;
        // 每隔1s更新一次
        var floorSec = Math.floor(this._leftSec);
        if (floorSec === this._leftFloorSec) {
            return;
        }
        // 更新文本显示
        this._leftFloorSec = floorSec;
        if (this.label) {
            var txtTime = c2f.utils.date.formatTimeString(this._leftFloorSec, this._format);
            if (this._txtFormat) {
                txtTime = this._txtFormat.format(txtTime);
            }
            this.label.string = txtTime;
        }
        // 更新回调
        (_a = this._updateCall) === null || _a === void 0 ? void 0 : _a.call(this);
    };
    CountdownLabel.prototype.onComplete = function () {
        var _a;
        this.curSverTime = 0;
        (_a = this._completeCall) === null || _a === void 0 ? void 0 : _a.call(this);
    };
    CountdownLabel.prototype.stopCountdown = function () {
        var _a;
        this.curSverTime = 0;
        (_a = this._tween) === null || _a === void 0 ? void 0 : _a.stop();
        this.unscheduleAllCallbacks();
    };
    CountdownLabel.prototype.onEnable = function () {
        if (this.curSverTime > 0) {
            var sec = this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime);
            sec = sec < 0 ? 0 : sec;
            this.startCountdown(sec, this._format, this._txtFormat, this._updateCall, this._completeCall);
        }
    };
    __decorate([
        property({
            tooltip: CC_DEV && "倒计时是否受到timeScale的影响"
        })
    ], CountdownLabel.prototype, "timeScale", void 0);
    CountdownLabel = __decorate([
        ccclass,
        menu("c2f/UI/CountdownLabel")
    ], CountdownLabel);
    return CountdownLabel;
}(cc.Component));
exports.default = CountdownLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vQ291bnRkb3duTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWtFO0FBRTVELElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSWxEOztHQUVHO0FBR0g7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFxSEM7UUFqSFUsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUM5QixpQkFBVyxHQUFlLElBQUksQ0FBQztRQUMvQixtQkFBYSxHQUFlLElBQUksQ0FBQztRQUV6QyxzQ0FBc0M7UUFDOUIsYUFBTyxHQUFvQixtQkFBbUIsQ0FBQztRQUN2RCxjQUFjO1FBQ04sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFDbEMsV0FBVztRQUNILGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixZQUFNLEdBQTJCLElBQUksQ0FBQzs7SUFnR2xELENBQUM7SUFyR0csc0JBQVcsbUNBQU87YUFBbEIsY0FBK0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFNdEQsc0JBQVcsaUNBQUs7YUFBaEI7O1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sU0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0U7WUFDRCxPQUFPLElBQUksQ0FB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QUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0UsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRztJQUNMLENBQUM7SUFoSEQ7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsTUFBTSxJQUFJLHFCQUFxQjtTQUMzQyxDQUFDO3FEQUNnQztJQUpqQixjQUFjO1FBRmxDLE9BQU87UUFDUCxJQUFJLENBQUMsdUJBQXVCLENBQUM7T0FDVCxjQUFjLENBcUhsQztJQUFELHFCQUFDO0NBckhELEFBcUhDLENBckgyQyxFQUFFLENBQUMsU0FBUyxHQXFIdkQ7a0JBckhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0NBTEVfVFdFRU4sIEMyRlR3ZWVuIH0gZnJvbSBcIi4uLy4uL2NvcmUvdGltZXIvQzJGVHdlZW5cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxudHlwZSBDb3VudGRvd25Gb3JtYXQgPSBzdHJpbmcgfCB7IFwiU1wiOiBzdHJpbmc7IFwiTVwiOiBzdHJpbmc7IFwiSFwiOiBzdHJpbmc7IFwiRFwiOiBzdHJpbmcgfTtcblxuLyoqXG4gKiDlgJLorqHml7bmmL7npLrnu4Tku7ZcbiAqL1xuQGNjY2xhc3NcbkBtZW51KFwiYzJmL1VJL0NvdW50ZG93bkxhYmVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGRvd25MYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YCS6K6h5pe25piv5ZCm5Y+X5YiwdGltZVNjYWxl55qE5b2x5ZONXCJcbiAgICB9KVxuICAgIHB1YmxpYyB0aW1lU2NhbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3R3ZWVuOiBDMkZUd2Vlbjx0aGlzPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdXBkYXRlQ2FsbDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY29tcGxldGVDYWxsOiAoKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIC8qKiDmoLzlvI/ljJblj4LmlbDvvIzor6bop4FgVG9vbC5mb3JtYXRUaW1lU3RyaW5nYCAqL1xuICAgIHByaXZhdGUgX2Zvcm1hdDogQ291bnRkb3duRm9ybWF0ID0gXCIle2hofTole21tfTole3NzfVwiO1xuICAgIC8qKiDmlofmnKzmmL7npLrmoLzlvI/ljJYgKi9cbiAgICBwcml2YXRlIF90eHRGb3JtYXQ6IHN0cmluZyA9IG51bGw7XG4gICAgLyoqIOWJqeS9meenkuaVsCAqL1xuICAgIHByaXZhdGUgX2xlZnRTZWM6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGdldCBsZWZ0U2VjKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9sZWZ0U2VjOyB9XG4gICAgcHJpdmF0ZSBfbGVmdEZsb29yU2VjOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VyU3ZlclRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9sYWJlbDogY2MuTGFiZWwgfCBjYy5SaWNoVGV4dCA9IG51bGw7XG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBjYy5MYWJlbCB8IGNjLlJpY2hUZXh0IHtcbiAgICAgICAgaWYgKCF0aGlzLl9sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCkgPz8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRDb3VudGRvd24oc2VjOiBudW1iZXIsIGZvcm1hdDogQ291bnRkb3duRm9ybWF0ID0gXCIle2hofTole21tfTole3NzfVwiLCB0eHRGb3JtYXQ6IHN0cmluZyA9IG51bGwsIHVwZGF0ZUNhbGw6ICgpID0+IHZvaWQgPSBudWxsLCBjb21wbGV0ZUNhbGw6ICgpID0+IHZvaWQgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VyU3ZlclRpbWUgPSBjMmYudXRpbHMuZGF0ZS5nZXRTZXJWZXJUaW1lKClcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSBzZWM7XG4gICAgICAgIHRoaXMuX2xlZnRTZWMgPSBzZWM7XG4gICAgICAgIHRoaXMuX2xlZnRGbG9vclNlYyA9IE1hdGguZmxvb3Ioc2VjKTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLl90eHRGb3JtYXQgPSB0eHRGb3JtYXQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNhbGwgPSB1cGRhdGVDYWxsO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZUNhbGwgPSBjb21wbGV0ZUNhbGw7XG4gICAgICAgIHRoaXMuX3R3ZWVuPy5zdG9wKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuXG4gICAgICAgIHRoaXMuX3R3ZWVuID0gdGhpcy50aW1lU2NhbGUgPyBuZXcgQzJGVHdlZW4odGhpcywgU0NBTEVfVFdFRU4pIDogbmV3IEMyRlR3ZWVuKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMudGltZVNjYWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlVGltZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90d2Vlbi50byh7IF9sZWZ0U2VjOiAwIH0sIHNlYyAqIDEwMDApXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblVwZGF0ZVRpbWUoKTogdm9pZCB7XG4gICAgICAgIGxldCBmbG9vclNlYyA9IE1hdGguZmxvb3IodGhpcy50b3RhbFRpbWUgLSAoYzJmLnV0aWxzLmRhdGUuZ2V0U2VyVmVyVGltZSgpIC0gdGhpcy5jdXJTdmVyVGltZSkpXG4gICAgICAgIHRoaXMuX2xlZnRTZWMgPSBmbG9vclNlY1xuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgbGV0IHR4dFRpbWUgPSBjMmYudXRpbHMuZGF0ZS5mb3JtYXRUaW1lU3RyaW5nKGZsb29yU2VjLCB0aGlzLl9mb3JtYXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3R4dEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHR4dFRpbWUgPSB0aGlzLl90eHRGb3JtYXQuZm9ybWF0KHR4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0eHRUaW1lO1xuICAgICAgICB9XG4gICAgICAgIC8vIOabtOaWsOWbnuiwg1xuICAgICAgICB0aGlzLl91cGRhdGVDYWxsPy4oKTtcbiAgICAgICAgaWYgKGZsb29yU2VjIDw9IDApIHsgLy/lm57osINcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZVRpbWUoKTtcbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyDmr4/pmpQxc+abtOaWsOS4gOasoVxuICAgICAgICBsZXQgZmxvb3JTZWMgPSBNYXRoLmZsb29yKHRoaXMuX2xlZnRTZWMpO1xuICAgICAgICBpZiAoZmxvb3JTZWMgPT09IHRoaXMuX2xlZnRGbG9vclNlYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOabtOaWsOaWh+acrOaYvuekulxuICAgICAgICB0aGlzLl9sZWZ0Rmxvb3JTZWMgPSBmbG9vclNlYztcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgIGxldCB0eHRUaW1lID0gYzJmLnV0aWxzLmRhdGUuZm9ybWF0VGltZVN0cmluZyh0aGlzLl9sZWZ0Rmxvb3JTZWMsIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHh0Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdHh0VGltZSA9IHRoaXMuX3R4dEZvcm1hdC5mb3JtYXQodHh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHR4dFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDlm57osINcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2FsbD8uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbXBsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1clN2ZXJUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY29tcGxldGVDYWxsPy4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcENvdW50ZG93bigpIHtcbiAgICAgICAgdGhpcy5jdXJTdmVyVGltZSA9IDA7XG4gICAgICAgIHRoaXMuX3R3ZWVuPy5zdG9wKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VyU3ZlclRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2VjID0gdGhpcy50b3RhbFRpbWUgLSAoYzJmLnV0aWxzLmRhdGUuZ2V0U2VyVmVyVGltZSgpIC0gdGhpcy5jdXJTdmVyVGltZSk7XG4gICAgICAgICAgICBzZWMgPSBzZWMgPCAwID8gMCA6IHNlYztcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudGRvd24oc2VjLCB0aGlzLl9mb3JtYXQsIHRoaXMuX3R4dEZvcm1hdCwgdGhpcy5fdXBkYXRlQ2FsbCwgdGhpcy5fY29tcGxldGVDYWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==