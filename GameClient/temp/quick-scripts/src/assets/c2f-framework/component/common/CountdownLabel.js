"use strict";
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