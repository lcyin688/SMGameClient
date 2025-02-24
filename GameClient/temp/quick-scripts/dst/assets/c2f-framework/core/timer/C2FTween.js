
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/timer/C2FTween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbd48/0U25E4oggoDgrAf9y', 'C2FTween');
// c2f-framework/core/timer/C2FTween.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCALE_TWEEN = exports.TWEEN = exports.VERSION = exports.C2FTween = exports.Sequence = exports.Interpolation = exports.Group = exports.Easing = void 0;
var GameTimer_1 = require("./GameTimer");
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
exports.Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - exports.Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return exports.Easing.Bounce.In(amount * 2) * 0.5;
            }
            return exports.Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};
var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
// if (typeof self === "undefined" && typeof process !== "undefined" && process.hrtime) {
//     now = function () {
//         // eslint-disable-next-line
//         // @ts-ignore
//         var time = process.hrtime();
//         // Convert [seconds, nanoseconds] to milliseconds.
//         return time[0] * 1000 + time[1] / 1000000;
//     };
// }
// // In a browser, use self.performance.now if it is available.
// else 
if (typeof self !== "undefined" && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use "new Date().getTime()".
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.removeByCCObject = function (target) {
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return;
        }
        for (var i = 0; i < tweenIds.length; i++) {
            var tween = this._tweens[tweenIds[i]];
            if (tween && tween.ccObject === target) {
                tween.stop();
            }
        }
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) {
            time = now$1();
        }
        if (preserve === void 0) {
            preserve = false;
        }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // 检测tween绑定的cc.Object是否已经销毁，对应的tween也需销毁
        for (var i = 0; i < tweenIds.length; i++) {
            var tween = this._tweens[tweenIds[i]];
            if (tween && !tween.isCCObjectValid()) {
                tween.stop();
            }
        }
        tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());
exports.Group = Group;
/**
 * C2FTween.to中参数使用数组时应用
 */
exports.Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = exports.Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = exports.Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = exports.Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = exports.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};
/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());
exports.Sequence = Sequence;
var mainGroup = new Group();
/** 基于Timer.timeScale缩放速度 */
var scaleGroup = new Group();
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you"re awesome!
 */
var C2FTween = /** @class */ (function () {
    function C2FTween(_object, _group) {
        if (_group === void 0) {
            _group = mainGroup;
        }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = exports.Easing.Linear.None;
        this._interpolationFunction = exports.Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Object.defineProperty(C2FTween.prototype, "ccObject", {
        get: function () { return this._ccObject; },
        enumerable: false,
        configurable: true
    });
    /**
     * 绑定cc.Object，则cc.Object销毁时，tween也会销毁
     */
    C2FTween.prototype.bindCCObject = function (obj) {
        this._ccObject = obj;
        return this;
    };
    /**
     * - 返回tween绑定的cc.Object是否可用
     * - 如果绑定了cc.Object，则检测tween绑定的cc.Object是否已经销毁，对应的tween也需销毁
     * - 如果没绑定则返回true
     */
    C2FTween.prototype.isCCObjectValid = function () {
        if (this._object instanceof cc.Object && !cc.isValid(this._object, true)) {
            return false;
        }
        if (this._ccObject instanceof cc.Object && !cc.isValid(this._ccObject, true)) {
            return false;
        }
        return true;
    };
    C2FTween.prototype.getId = function () {
        return this._id;
    };
    C2FTween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    C2FTween.prototype.isPaused = function () {
        return this._isPaused;
    };
    /**
     * @param properties
     * @param duration ms
     */
    C2FTween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween"s to on each update. That way the behavior is opt-in (there"s
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    C2FTween.prototype.duration = function (d) {
        this._duration = d;
        return this;
    };
    /**
     * @param time ms
     */
    C2FTween.prototype.start = function (time) {
        if (this._isPlaying) {
            return this;
        }
        // 对不同分组应用不同的默认参数
        if (time === void 0) {
            if (this._group === mainGroup) {
                time = GameTimer_1.GameTimer.gameMs;
            }
            else if (this._group === scaleGroup) {
                time = GameTimer_1.GameTimer.scaleGameMs;
            }
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== undefined ? (typeof time === "string" ? now$1() + parseFloat(time) : time) : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    C2FTween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? "array" : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn"t exist in the source object,
            // we should not set that property in the object
            if (propType === "undefined" || propType === "function") {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === "undefined") {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we"re using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    C2FTween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    C2FTween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    C2FTween.prototype.pause = function (time) {
        if (time === void 0) {
            time = now$1();
        }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    C2FTween.prototype.resume = function (time) {
        if (time === void 0) {
            time = now$1();
        }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    C2FTween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    C2FTween.prototype.group = function (group) {
        this._group = group;
        return this;
    };
    C2FTween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    /**
     * tween结束之后额外的重复次数
     */
    C2FTween.prototype.repeat = function (times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    C2FTween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    C2FTween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    C2FTween.prototype.easing = function (easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    };
    C2FTween.prototype.interpolation = function (interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    C2FTween.prototype.chain = function () {
        var tweens = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            tweens[_a] = arguments[_a];
        }
        //@ts-ignore
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    C2FTween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    C2FTween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    C2FTween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    C2FTween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    C2FTween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    C2FTween.prototype.update = function (time, autoStart) {
        if (time === void 0) {
            time = now$1();
        }
        if (autoStart === void 0) {
            autoStart = true;
        }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    C2FTween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don"t update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === "object" && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === "number") {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    C2FTween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== "string") {
            return end;
        }
        if (end.charAt(0) === "+" || end.charAt(0) === "-") {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    C2FTween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === "string") {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return C2FTween;
}());
exports.C2FTween = C2FTween;
exports.VERSION = "18.6.4";
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
exports.TWEEN = mainGroup;
/**
 * 基于Timer.timeScale缩放速度的group
 */
exports.SCALE_TWEEN = scaleGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvdGltZXIvQzJGVHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBS3hDOztHQUVHO0FBQ1EsUUFBQSxNQUFNLEdBQUc7SUFDaEIsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLFVBQVUsTUFBTTtZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxFQUFFLEVBQUUsVUFBVSxNQUFNO1lBQ2hCLE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDO1FBQ0QsR0FBRyxFQUFFLFVBQVUsTUFBTTtZQUNqQixPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsS0FBSyxFQUFFLFVBQVUsTUFBTTtZQUNuQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUNoQztZQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQ0o7SUFDRCxLQUFLLEVBQUU7UUFDSCxFQUFFLEVBQUUsVUFBVSxNQUFNO1lBQ2hCLE9BQU8sTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEMsQ0FBQztRQUNELEdBQUcsRUFBRSxVQUFVLE1BQU07WUFDakIsT0FBTyxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsS0FBSyxFQUFFLFVBQVUsTUFBTTtZQUNuQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIs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QUM7U0FDdEQ7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLEVBQUUsR0FBRyxxQkFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckM7WUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5RTthQUNJO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENB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Q0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFDRCw0Q0FBeUIsR0FBekIsVUFBMEIsUUFBUTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRzthQUNJO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBdmNBLEFBdWNDLElBQUE7QUF2Y1ksNEJBQVE7QUF5Y1YsUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBRTlCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDN0I7Ozs7O0dBS0c7QUFDUSxRQUFBLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDN0I7O0dBRUc7QUFDUSxRQUFBLFdBQVcsR0FBRyxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lVGltZXIgfSBmcm9tIFwiLi9HYW1lVGltZXJcIjtcblxuZGVjbGFyZSB0eXBlIEVhc2luZ0Z1bmN0aW9uID0gKGFtb3VudDogbnVtYmVyKSA9PiBudW1iZXI7XG5kZWNsYXJlIHR5cGUgSW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gKHY6IG51bWJlcltdLCBrOiBudW1iZXIpID0+IG51bWJlcjtcblxuLyoqXG4gKiBUaGUgRWFzZSBjbGFzcyBwcm92aWRlcyBhIGNvbGxlY3Rpb24gb2YgZWFzaW5nIGZ1bmN0aW9ucyBmb3IgdXNlIHdpdGggdHdlZW4uanMuXG4gKi9cbmV4cG9ydCB2YXIgRWFzaW5nID0ge1xuICAgIExpbmVhcjoge1xuICAgICAgICBOb25lOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgUXVhZHJhdGljOiB7XG4gICAgICAgIEluOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50ICogYW1vdW50O1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbW91bnQgKiAoMiAtIGFtb3VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIEluT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAoKGFtb3VudCAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogYW1vdW50ICogYW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS1hbW91bnQgKiAoYW1vdW50IC0gMikgLSAxKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIEN1YmljOiB7XG4gICAgICAgIEluOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50ICogYW1vdW50ICogYW1vdW50O1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiAtLWFtb3VudCAqIGFtb3VudCAqIGFtb3VudCArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIEluT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAoKGFtb3VudCAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogYW1vdW50ICogYW1vdW50ICogYW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoYW1vdW50IC09IDIpICogYW1vdW50ICogYW1vdW50ICsgMik7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBRdWFydGljOiB7XG4gICAgICAgIEluOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50ICogYW1vdW50ICogYW1vdW50ICogYW1vdW50O1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS1hbW91bnQgKiBhbW91bnQgKiBhbW91bnQgKiBhbW91bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIEluT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAoKGFtb3VudCAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogYW1vdW50ICogYW1vdW50ICogYW1vdW50ICogYW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoKGFtb3VudCAtPSAyKSAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAtIDIpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgUXVpbnRpYzoge1xuICAgICAgICBJbjogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1hbW91bnQgKiBhbW91bnQgKiBhbW91bnQgKiBhbW91bnQgKiBhbW91bnQgKyAxO1xuICAgICAgICB9LFxuICAgICAgICBJbk91dDogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKChhbW91bnQgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGFtb3VudCAtPSAyKSAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCAqIGFtb3VudCArIDIpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgU2ludXNvaWRhbDoge1xuICAgICAgICBJbjogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcygoYW1vdW50ICogTWF0aC5QSSkgLyAyKTtcbiAgICAgICAgfSxcbiAgICAgICAgT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oKGFtb3VudCAqIE1hdGguUEkpIC8gMik7XG4gICAgICAgIH0sXG4gICAgICAgIEluT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogYW1vdW50KSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBFeHBvbmVudGlhbDoge1xuICAgICAgICBJbjogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGFtb3VudCA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBhbW91bnQgLSAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50ID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBhbW91bnQpO1xuICAgICAgICB9LFxuICAgICAgICBJbk91dDogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChhbW91bnQgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGFtb3VudCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKGFtb3VudCAtIDEpKSArIDIpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgQ2lyY3VsYXI6IHtcbiAgICAgICAgSW46IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBhbW91bnQgKiBhbW91bnQpO1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tYW1vdW50ICogYW1vdW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgSW5PdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIGlmICgoYW1vdW50ICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gYW1vdW50ICogYW1vdW50KSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChhbW91bnQgLT0gMikgKiBhbW91bnQpICsgMSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBFbGFzdGljOiB7XG4gICAgICAgIEluOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAoYW1vdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW1vdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKGFtb3VudCAtIDEpKSAqIE1hdGguc2luKChhbW91bnQgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIGlmIChhbW91bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbW91bnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiBhbW91bnQpICogTWF0aC5zaW4oKGFtb3VudCAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgICAgICB9LFxuICAgICAgICBJbk91dDogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW1vdW50ICo9IDI7XG4gICAgICAgICAgICBpZiAoYW1vdW50IDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAoYW1vdW50IC0gMSkpICogTWF0aC5zaW4oKGFtb3VudCAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKGFtb3VudCAtIDEpKSAqIE1hdGguc2luKChhbW91bnQgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIEJhY2s6IHtcbiAgICAgICAgSW46IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIHJldHVybiBhbW91bnQgKiBhbW91bnQgKiAoKHMgKyAxKSAqIGFtb3VudCAtIHMpO1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIHJldHVybiAtLWFtb3VudCAqIGFtb3VudCAqICgocyArIDEpICogYW1vdW50ICsgcykgKyAxO1xuICAgICAgICB9LFxuICAgICAgICBJbk91dDogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgICAgICBpZiAoKGFtb3VudCAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogKGFtb3VudCAqIGFtb3VudCAqICgocyArIDEpICogYW1vdW50IC0gcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoYW1vdW50IC09IDIpICogYW1vdW50ICogKChzICsgMSkgKiBhbW91bnQgKyBzKSArIDIpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgQm91bmNlOiB7XG4gICAgICAgIEluOiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIEVhc2luZy5Cb3VuY2UuT3V0KDEgLSBhbW91bnQpO1xuICAgICAgICB9LFxuICAgICAgICBPdXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIGlmIChhbW91bnQgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiBhbW91bnQgKiBhbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhbW91bnQgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoYW1vdW50IC09IDEuNSAvIDIuNzUpICogYW1vdW50ICsgMC43NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFtb3VudCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGFtb3VudCAtPSAyLjI1IC8gMi43NSkgKiBhbW91bnQgKyAwLjkzNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGFtb3VudCAtPSAyLjYyNSAvIDIuNzUpICogYW1vdW50ICsgMC45ODQzNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEluT3V0OiBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgICAgICBpZiAoYW1vdW50IDwgMC41KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVhc2luZy5Cb3VuY2UuSW4oYW1vdW50ICogMikgKiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gRWFzaW5nLkJvdW5jZS5PdXQoYW1vdW50ICogMiAtIDEpICogMC41ICsgMC41O1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG52YXIgbm93O1xuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbC5cbi8vIEluIG5vZGUuanMsIHVzZSBwcm9jZXNzLmhydGltZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gQHRzLWlnbm9yZVxuLy8gaWYgKHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4vLyAgICAgbm93ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vICAgICAgICAgLy8gQHRzLWlnbm9yZVxuLy8gICAgICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4vLyAgICAgICAgIC8vIENvbnZlcnQgW3NlY29uZHMsIG5hbm9zZWNvbmRzXSB0byBtaWxsaXNlY29uZHMuXG4vLyAgICAgICAgIHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuLy8gICAgIH07XG4vLyB9XG4vLyAvLyBJbiBhIGJyb3dzZXIsIHVzZSBzZWxmLnBlcmZvcm1hbmNlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG4vLyBlbHNlIFxuaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJiBzZWxmLnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVGhpcyBtdXN0IGJlIGJvdW5kLCBiZWNhdXNlIGRpcmVjdGx5IGFzc2lnbmluZyB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gbGVhZHMgdG8gYW4gaW52b2NhdGlvbiBleGNlcHRpb24gaW4gQ2hyb21lLlxuICAgIG5vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuICAgIG5vdyA9IERhdGUubm93O1xufVxuLy8gT3RoZXJ3aXNlLCB1c2UgXCJuZXcgRGF0ZSgpLmdldFRpbWUoKVwiLlxuZWxzZSB7XG4gICAgbm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfTtcbn1cbnZhciBub3ckMSA9IG5vdztcblxuZGVjbGFyZSB0eXBlIFVua25vd25Qcm9wcyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG4vKipcbiAqIENvbnRyb2xsaW5nIGdyb3VwcyBvZiB0d2VlbnNcbiAqXG4gKiBVc2luZyB0aGUgVFdFRU4gc2luZ2xldG9uIHRvIG1hbmFnZSB5b3VyIHR3ZWVucyBjYW4gY2F1c2UgaXNzdWVzIGluIGxhcmdlIGFwcHMgd2l0aCBtYW55IGNvbXBvbmVudHMuXG4gKiBJbiB0aGVzZSBjYXNlcywgeW91IG1heSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBzbWFsbGVyIGdyb3VwcyBvZiB0d2VlblxuICovXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICAgIHByaXZhdGUgX3R3ZWVucyA9IHt9O1xuICAgIHByaXZhdGUgX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG5cbiAgICBnZXRBbGwoKTogQXJyYXk8QzJGVHdlZW48VW5rbm93blByb3BzPj4ge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKS5tYXAoZnVuY3Rpb24gKHR3ZWVuSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fdHdlZW5zW3R3ZWVuSWRdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl90d2VlbnMgPSB7fTtcbiAgICB9XG4gICAgYWRkKHR3ZWVuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuICAgICAgICB0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuICAgIH1cbiAgICByZW1vdmUodHdlZW4pIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlW3R3ZWVuLmdldElkKCldO1xuICAgIH1cbiAgICByZW1vdmVCeUNDT2JqZWN0KHRhcmdldDogY2MuT2JqZWN0KSB7XG4gICAgICAgIGxldCB0d2VlbklkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVucyk7XG4gICAgICAgIGlmICh0d2Vlbklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHdlZW5JZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0d2VlbjogQzJGVHdlZW48YW55PiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG4gICAgICAgICAgICBpZiAodHdlZW4gJiYgdHdlZW4uY2NPYmplY3QgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUodGltZT86IG51bWJlciwgcHJlc2VydmU/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IG5vdyQxKCk7IH1cbiAgICAgICAgaWYgKHByZXNlcnZlID09PSB2b2lkIDApIHsgcHJlc2VydmUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuICAgICAgICBpZiAodHdlZW5JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4DmtYt0d2Vlbue7keWumueahGNjLk9iamVjdOaYr+WQpuW3sue7j+mUgOavge+8jOWvueW6lOeahHR3ZWVu5Lmf6ZyA6ZSA5q+BXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHdlZW5JZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0d2VlbjogQzJGVHdlZW48YW55PiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG4gICAgICAgICAgICBpZiAodHdlZW4gJiYgIXR3ZWVuLmlzQ0NPYmplY3RWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgdHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuICAgICAgICBpZiAodHdlZW5JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUd2VlbnMgYXJlIHVwZGF0ZWQgaW4gXCJiYXRjaGVzXCIuIElmIHlvdSBhZGQgYSBuZXcgdHdlZW4gZHVyaW5nIGFuXG4gICAgICAgIC8vIHVwZGF0ZSwgdGhlbiB0aGUgbmV3IHR3ZWVuIHdpbGwgYmUgdXBkYXRlZCBpbiB0aGUgbmV4dCBiYXRjaC5cbiAgICAgICAgLy8gSWYgeW91IHJlbW92ZSBhIHR3ZWVuIGR1cmluZyBhbiB1cGRhdGUsIGl0IG1heSBvciBtYXkgbm90IGJlIHVwZGF0ZWQuXG4gICAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSByZW1vdmVkIHR3ZWVuIHdhcyBhZGRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgYmF0Y2gsXG4gICAgICAgIC8vIHRoZW4gaXQgd2lsbCBub3QgYmUgdXBkYXRlZC5cbiAgICAgICAgd2hpbGUgKHR3ZWVuSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR3ZWVuSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR3ZWVuID0gdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcbiAgICAgICAgICAgICAgICB2YXIgYXV0b1N0YXJ0ID0gIXByZXNlcnZlO1xuICAgICAgICAgICAgICAgIGlmICh0d2VlbiAmJiB0d2Vlbi51cGRhdGUodGltZSwgYXV0b1N0YXJ0KSA9PT0gZmFsc2UgJiYgIXByZXNlcnZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90d2VlbnNbdHdlZW5JZHNbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR3ZWVuSWRzID0gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDMkZUd2Vlbi50b+S4reWPguaVsOS9v+eUqOaVsOe7hOaXtuW6lOeUqFxuICovXG5leHBvcnQgdmFyIEludGVycG9sYXRpb24gPSB7XG4gICAgTGluZWFyOiBmdW5jdGlvbiAodiwgaykge1xuICAgICAgICB2YXIgbSA9IHYubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGYgPSBtICogaztcbiAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuICAgICAgICB2YXIgZm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcbiAgICAgICAgaWYgKGsgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odlswXSwgdlsxXSwgZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGsgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odlttXSwgdlttIC0gMV0sIG0gLSBmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XG4gICAgfSxcbiAgICBCZXppZXI6IGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHZhciBiID0gMDtcbiAgICAgICAgdmFyIG4gPSB2Lmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBwdyA9IE1hdGgucG93O1xuICAgICAgICB2YXIgYm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICBiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9LFxuICAgIENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHZhciBtID0gdi5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgZiA9IG0gKiBrO1xuICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoZik7XG4gICAgICAgIHZhciBmbiA9IEludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcbiAgICAgICAgaWYgKHZbMF0gPT09IHZbbV0pIHtcbiAgICAgICAgICAgIGlmIChrIDwgMCkge1xuICAgICAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKChmID0gbSAqICgxICsgaykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGsgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFV0aWxzOiB7XG4gICAgICAgIExpbmVhcjogZnVuY3Rpb24gKHAwLCBwMSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcbiAgICAgICAgfSxcbiAgICAgICAgQmVybnN0ZWluOiBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgdmFyIGZjID0gSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG4gICAgICAgICAgICByZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcbiAgICAgICAgfSxcbiAgICAgICAgRmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGEgPSBbMV07XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGFbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKj0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYVtuXSA9IHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuICAgICAgICBDYXRtdWxsUm9tOiBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcbiAgICAgICAgICAgIHZhciB2MCA9IChwMiAtIHAwKSAqIDAuNTtcbiAgICAgICAgICAgIHZhciB2MSA9IChwMyAtIHAxKSAqIDAuNTtcbiAgICAgICAgICAgIHZhciB0MiA9IHQgKiB0O1xuICAgICAgICAgICAgdmFyIHQzID0gdCAqIHQyO1xuICAgICAgICAgICAgcmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0zICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSkgKiB0MiArIHYwICogdCArIHAxO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXF1ZW5jZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX25leHRJZCA9IDA7XG4gICAgc3RhdGljIG5leHRJZCgpIHtcbiAgICAgICAgcmV0dXJuIFNlcXVlbmNlLl9uZXh0SWQrKztcbiAgICB9XG59XG5cbnZhciBtYWluR3JvdXAgPSBuZXcgR3JvdXAoKTtcbi8qKiDln7rkuo5UaW1lci50aW1lU2NhbGXnvKnmlL7pgJ/luqYgKi9cbnZhciBzY2FsZUdyb3VwID0gbmV3IEdyb3VwKCk7XG5cbi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91XCJyZSBhd2Vzb21lIVxuICovXG5leHBvcnQgY2xhc3MgQzJGVHdlZW48VCBleHRlbmRzIFVua25vd25Qcm9wcz4ge1xuICAgIC8qKiDnu5HlrprnmoRjYy5PYmplY3QgKi9cbiAgICBwcml2YXRlIF9jY09iamVjdDtcbiAgICBwdWJsaWMgZ2V0IGNjT2JqZWN0KCkgeyByZXR1cm4gdGhpcy5fY2NPYmplY3Q7IH1cblxuICAgIHByaXZhdGUgX29iamVjdDtcbiAgICBwcml2YXRlIF9ncm91cDtcbiAgICBwcml2YXRlIF9pc1BhdXNlZDtcbiAgICBwcml2YXRlIF9wYXVzZVN0YXJ0O1xuICAgIHByaXZhdGUgX3ZhbHVlc1N0YXJ0O1xuICAgIHByaXZhdGUgX3ZhbHVlc0VuZDtcbiAgICBwcml2YXRlIF92YWx1ZXNTdGFydFJlcGVhdDtcbiAgICBwcml2YXRlIF9kdXJhdGlvbjtcbiAgICBwcml2YXRlIF9pbml0aWFsUmVwZWF0O1xuICAgIHByaXZhdGUgX3JlcGVhdDtcbiAgICBwcml2YXRlIF9yZXBlYXREZWxheVRpbWU/O1xuICAgIHByaXZhdGUgX3lveW87XG4gICAgcHJpdmF0ZSBfaXNQbGF5aW5nO1xuICAgIHByaXZhdGUgX3JldmVyc2VkO1xuICAgIHByaXZhdGUgX2RlbGF5VGltZTtcbiAgICBwcml2YXRlIF9zdGFydFRpbWU7XG4gICAgcHJpdmF0ZSBfZWFzaW5nRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX2NoYWluZWRUd2VlbnM7XG4gICAgcHJpdmF0ZSBfb25TdGFydENhbGxiYWNrPztcbiAgICBwcml2YXRlIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZDtcbiAgICBwcml2YXRlIF9vblVwZGF0ZUNhbGxiYWNrPztcbiAgICBwcml2YXRlIF9vblJlcGVhdENhbGxiYWNrPztcbiAgICBwcml2YXRlIF9vbkNvbXBsZXRlQ2FsbGJhY2s/O1xuICAgIHByaXZhdGUgX29uU3RvcENhbGxiYWNrPztcbiAgICBwcml2YXRlIF9pZDtcbiAgICBwcml2YXRlIF9pc0NoYWluU3RvcHBlZDtcbiAgICBwcml2YXRlIF9nb1RvRW5kO1xuXG4gICAgY29uc3RydWN0b3IoX29iamVjdDogVCwgX2dyb3VwPzogR3JvdXAgfCBmYWxzZSkge1xuICAgICAgICBpZiAoX2dyb3VwID09PSB2b2lkIDApIHsgX2dyb3VwID0gbWFpbkdyb3VwOyB9XG4gICAgICAgIHRoaXMuX29iamVjdCA9IF9vYmplY3Q7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gX2dyb3VwO1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXVzZVN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnQgPSB7fTtcbiAgICAgICAgdGhpcy5fdmFsdWVzRW5kID0ge307XG4gICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMTAwMDtcbiAgICAgICAgdGhpcy5faW5pdGlhbFJlcGVhdCA9IDA7XG4gICAgICAgIHRoaXMuX3JlcGVhdCA9IDA7XG4gICAgICAgIHRoaXMuX3lveW8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JldmVyc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RlbGF5VGltZSA9IDA7XG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gRWFzaW5nLkxpbmVhci5Ob25lO1xuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBJbnRlcnBvbGF0aW9uLkxpbmVhcjtcbiAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVucyA9IFtdO1xuICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pZCA9IFNlcXVlbmNlLm5leHRJZCgpO1xuICAgICAgICB0aGlzLl9pc0NoYWluU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9nb1RvRW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uR5a6aY2MuT2JqZWN077yM5YiZY2MuT2JqZWN06ZSA5q+B5pe277yMdHdlZW7kuZ/kvJrplIDmr4FcbiAgICAgKi9cbiAgICBiaW5kQ0NPYmplY3Qob2JqOiBjYy5PYmplY3QpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5fY2NPYmplY3QgPSBvYmo7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0g6L+U5ZuedHdlZW7nu5HlrprnmoRjYy5PYmplY3TmmK/lkKblj6/nlKhcbiAgICAgKiAtIOWmguaenOe7keWumuS6hmNjLk9iamVjdO+8jOWImeajgOa1i3R3ZWVu57uR5a6a55qEY2MuT2JqZWN05piv5ZCm5bey57uP6ZSA5q+B77yM5a+55bqU55qEdHdlZW7kuZ/pnIDplIDmr4FcbiAgICAgKiAtIOWmguaenOayoee7keWumuWImei/lOWbnnRydWVcbiAgICAgKi9cbiAgICBpc0NDT2JqZWN0VmFsaWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vYmplY3QgaW5zdGFuY2VvZiBjYy5PYmplY3QgJiYgIWNjLmlzVmFsaWQodGhpcy5fb2JqZWN0LCB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jY09iamVjdCBpbnN0YW5jZW9mIGNjLk9iamVjdCAmJiAhY2MuaXNWYWxpZCh0aGlzLl9jY09iamVjdCwgdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRJZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGlzUGxheWluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGxheWluZztcbiAgICB9XG4gICAgaXNQYXVzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1BhdXNlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnRpZXMgXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIG1zXG4gICAgICovXG4gICAgdG8ocHJvcGVydGllczogVW5rbm93blByb3BzLCBkdXJhdGlvbj86IG51bWJlcik6IHRoaXMge1xuICAgICAgICAvLyBUT0RPPyByZXN0b3JlIHRoaXMsIHRoZW4gdXBkYXRlIHRoZSAwN19keW5hbWljX3RvIGV4YW1wbGUgdG8gc2V0IGZveFxuICAgICAgICAvLyB0d2VlblwicyB0byBvbiBlYWNoIHVwZGF0ZS4gVGhhdCB3YXkgdGhlIGJlaGF2aW9yIGlzIG9wdC1pbiAodGhlcmVcInNcbiAgICAgICAgLy8gY3VycmVudGx5IG5vIG9wdC1vdXQpLlxuICAgICAgICAvLyBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcGVydGllcykgdGhpcy5fdmFsdWVzRW5kW3Byb3BdID0gcHJvcGVydGllc1twcm9wXVxuICAgICAgICB0aGlzLl92YWx1ZXNFbmQgPSBPYmplY3QuY3JlYXRlKHByb3BlcnRpZXMpO1xuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHVyYXRpb24oZDogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0aW1lIG1zXG4gICAgICovXG4gICAgc3RhcnQodGltZT86IG51bWJlcik6IHRoaXMge1xuICAgICAgICBpZiAodGhpcy5faXNQbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWvueS4jeWQjOWIhue7hOW6lOeUqOS4jeWQjOeahOm7mOiupOWPguaVsFxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZ3JvdXAgPT09IG1haW5Hcm91cCkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBHYW1lVGltZXIuZ2FtZU1zO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ncm91cCA9PT0gc2NhbGVHcm91cCkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBHYW1lVGltZXIuc2NhbGVHYW1lTXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhpcy5fZ3JvdXAgJiYgdGhpcy5fZ3JvdXAuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLl9yZXBlYXQgPSB0aGlzLl9pbml0aWFsUmVwZWF0O1xuICAgICAgICBpZiAodGhpcy5fcmV2ZXJzZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgcmV2ZXJzZWQgKGYuZS4gdXNpbmcgdGhlIHlveW8gZmVhdHVyZSkgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyBmbGlwIHRoZSB0d2VlbiBkaXJlY3Rpb24gYmFjayB0byBmb3J3YXJkLlxuICAgICAgICAgICAgdGhpcy5fcmV2ZXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3dhcEVuZFN0YXJ0UmVwZWF0VmFsdWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDaGFpblN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiID8gbm93JDEoKSArIHBhcnNlRmxvYXQodGltZSkgOiB0aW1lKSA6IG5vdyQxKCk7XG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XG4gICAgICAgIHRoaXMuX3NldHVwUHJvcGVydGllcyh0aGlzLl9vYmplY3QsIHRoaXMuX3ZhbHVlc1N0YXJ0LCB0aGlzLl92YWx1ZXNFbmQsIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9zZXR1cFByb3BlcnRpZXMoX29iamVjdCwgX3ZhbHVlc1N0YXJ0LCBfdmFsdWVzRW5kLCBfdmFsdWVzU3RhcnRSZXBlYXQpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBfb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIHZhciBzdGFydFZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBzdGFydFZhbHVlSXNBcnJheSA/IFwiYXJyYXlcIiA6IHR5cGVvZiBzdGFydFZhbHVlO1xuICAgICAgICAgICAgdmFyIGlzSW50ZXJwb2xhdGlvbkxpc3QgPSAhc3RhcnRWYWx1ZUlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShfdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAvLyBJZiBgdG8oKWAgc3BlY2lmaWVzIGEgcHJvcGVydHkgdGhhdCBkb2VzblwidCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcbiAgICAgICAgICAgIC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuICAgICAgICAgICAgaWYgKHByb3BUeXBlID09PSBcInVuZGVmaW5lZFwiIHx8IHByb3BUeXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuICAgICAgICAgICAgaWYgKGlzSW50ZXJwb2xhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWVzID0gX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgaWYgKGVuZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBhbiBhcnJheSBvZiByZWxhdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZXMgPSBlbmRWYWx1ZXMubWFwKHRoaXMuX2hhbmRsZVJlbGF0aXZlVmFsdWUuYmluZCh0aGlzLCBzdGFydFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XG4gICAgICAgICAgICAgICAgX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbc3RhcnRWYWx1ZV0uY29uY2F0KGVuZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGRlZXBuZXNzIG9mIHRoZSB2YWx1ZXNcbiAgICAgICAgICAgIGlmICgocHJvcFR5cGUgPT09IFwib2JqZWN0XCIgfHwgc3RhcnRWYWx1ZUlzQXJyYXkpICYmIHN0YXJ0VmFsdWUgJiYgIWlzSW50ZXJwb2xhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBfdmFsdWVzU3RhcnRbcHJvcGVydHldID0gc3RhcnRWYWx1ZUlzQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBGSVhNRT9cbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XVtwcm9wXSA9IHN0YXJ0VmFsdWVbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBzdGFydFZhbHVlSXNBcnJheSA/IFtdIDoge307IC8vIFRPRE8/IHJlcGVhdCBuZXN0ZWQgdmFsdWVzPyBBbmQgeW95bz8gQW5kIGFycmF5IHZhbHVlcz9cbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIEZJWE1FP1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldHVwUHJvcGVydGllcyhzdGFydFZhbHVlLCBfdmFsdWVzU3RhcnRbcHJvcGVydHldLCBfdmFsdWVzRW5kW3Byb3BlcnR5XSwgX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBzdGFydGluZyB2YWx1ZSwgYnV0IG9ubHkgb25jZS5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3RhcnRWYWx1ZUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgRklYTUU/XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlXCJyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBGSVhNRT9cbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IF92YWx1ZXNFbmRbcHJvcGVydHldLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcCgpOiB0aGlzIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NoYWluU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNDaGFpblN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXNQbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhpcy5fZ3JvdXAgJiYgdGhpcy5fZ3JvdXAucmVtb3ZlKHRoaXMpO1xuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3BDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlbmQoKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2dvVG9FbmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZShJbmZpbml0eSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwYXVzZSh0aW1lPzogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IG5vdyQxKCk7IH1cbiAgICAgICAgaWYgKHRoaXMuX2lzUGF1c2VkIHx8ICF0aGlzLl9pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGF1c2VTdGFydCA9IHRpbWU7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGlzLl9ncm91cCAmJiB0aGlzLl9ncm91cC5yZW1vdmUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXN1bWUodGltZT86IG51bWJlcik6IHRoaXMge1xuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSBub3ckMSgpOyB9XG4gICAgICAgIGlmICghdGhpcy5faXNQYXVzZWQgfHwgIXRoaXMuX2lzUGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lICs9IHRpbWUgLSB0aGlzLl9wYXVzZVN0YXJ0O1xuICAgICAgICB0aGlzLl9wYXVzZVN0YXJ0ID0gMDtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHRoaXMuX2dyb3VwICYmIHRoaXMuX2dyb3VwLmFkZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0b3BDaGFpbmVkVHdlZW5zKCk6IHRoaXMge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ3JvdXAoZ3JvdXA6IEdyb3VwKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxheShhbW91bnQ6IG51bWJlcik6IHRoaXMge1xuICAgICAgICB0aGlzLl9kZWxheVRpbWUgPSBhbW91bnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB0d2Vlbue7k+adn+S5i+WQjumineWklueahOmHjeWkjeasoeaVsFxuICAgICAqL1xuICAgIHJlcGVhdCh0aW1lczogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxSZXBlYXQgPSB0aW1lcztcbiAgICAgICAgdGhpcy5fcmVwZWF0ID0gdGltZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXBlYXREZWxheShhbW91bnQ6IG51bWJlcik6IHRoaXMge1xuICAgICAgICB0aGlzLl9yZXBlYXREZWxheVRpbWUgPSBhbW91bnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB5b3lvKHlveW86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy5feW95byA9IHlveW87XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlYXNpbmcoZWFzaW5nRnVuY3Rpb246IEVhc2luZ0Z1bmN0aW9uKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0aW9uKGludGVycG9sYXRpb25GdW5jdGlvbjogSW50ZXJwb2xhdGlvbkZ1bmN0aW9uKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb25GdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNoYWluKC4uLnR3ZWVuczogQXJyYXk8QzJGVHdlZW48VW5rbm93blByb3BzPj4pOiB0aGlzIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHZhciB0d2VlbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHR3ZWVuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnMgPSB0d2VlbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvblN0YXJ0KGNhbGxiYWNrOiAob2JqZWN0OiBUKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25VcGRhdGUoY2FsbGJhY2s6IChvYmplY3Q6IFQsIGVsYXBzZWQ6IG51bWJlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvblJlcGVhdChjYWxsYmFjazogKG9iamVjdDogVCkgPT4gdm9pZCk6IHRoaXMge1xuICAgICAgICB0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvbkNvbXBsZXRlKGNhbGxiYWNrOiAob2JqZWN0OiBUKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25TdG9wKGNhbGxiYWNrOiAob2JqZWN0OiBUKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSB0d2VlbiBpcyBzdGlsbCBwbGF5aW5nIGFmdGVyIHRoZSB1cGRhdGUsIGZhbHNlXG4gICAgICogb3RoZXJ3aXNlIChjYWxsaW5nIHVwZGF0ZSBvbiBhIHBhdXNlZCB0d2VlbiBzdGlsbCByZXR1cm5zIHRydWUgYmVjYXVzZVxuICAgICAqIGl0IGlzIHN0aWxsIHBsYXlpbmcsIGp1c3QgcGF1c2VkKS5cbiAgICAgKi9cbiAgICB1cGRhdGUodGltZT86IG51bWJlciwgYXV0b1N0YXJ0PzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSBub3ckMSgpOyB9XG4gICAgICAgIGlmIChhdXRvU3RhcnQgPT09IHZvaWQgMCkgeyBhdXRvU3RhcnQgPSB0cnVlOyB9XG4gICAgICAgIGlmICh0aGlzLl9pc1BhdXNlZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgcHJvcGVydHk7XG4gICAgICAgIHZhciBlbGFwc2VkO1xuICAgICAgICB2YXIgZW5kVGltZSA9IHRoaXMuX3N0YXJ0VGltZSArIHRoaXMuX2R1cmF0aW9uO1xuICAgICAgICBpZiAoIXRoaXMuX2dvVG9FbmQgJiYgIXRoaXMuX2lzUGxheWluZykge1xuICAgICAgICAgICAgaWYgKHRpbWUgPiBlbmRUaW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChhdXRvU3RhcnQpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nb1RvRW5kID0gZmFsc2U7XG4gICAgICAgIGlmICh0aW1lIDwgdGhpcy5fc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25TdGFydENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxhcHNlZCA9ICh0aW1lIC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX2R1cmF0aW9uO1xuICAgICAgICBlbGFwc2VkID0gdGhpcy5fZHVyYXRpb24gPT09IDAgfHwgZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XG4gICAgICAgIC8vIHByb3BlcnRpZXMgdHJhbnNmb3JtYXRpb25zXG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb3BlcnRpZXModGhpcy5fb2JqZWN0LCB0aGlzLl92YWx1ZXNTdGFydCwgdGhpcy5fdmFsdWVzRW5kLCB2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCwgZWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsYXBzZWQgPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmluaXRlKHRoaXMuX3JlcGVhdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVwZWF0LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG4gICAgICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3lveW8gJiYgdHlwZW9mIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBGSVhNRT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl95b3lvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRW5kU3RhcnRSZXBlYXRWYWx1ZXMocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3lveW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXBlYXREZWxheVRpbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fcmVwZWF0RGVsYXlUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX2RlbGF5VGltZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uUmVwZWF0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZXBlYXRDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSB0aGUgY2hhaW5lZCB0d2VlbnMgc3RhcnQgZXhhY3RseSBhdCB0aGUgdGltZSB0aGV5IHNob3VsZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGUgYHVwZGF0ZSgpYCBtZXRob2Qgd2FzIGNhbGxlZCB3YXkgcGFzdCB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RhcnQodGhpcy5fc3RhcnRUaW1lICsgdGhpcy5fZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF91cGRhdGVQcm9wZXJ0aWVzKF9vYmplY3QsIF92YWx1ZXNTdGFydCwgX3ZhbHVlc0VuZCwgdmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCkge1xuICAgICAgICAgICAgLy8gRG9uXCJ0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG4gICAgICAgICAgICBpZiAoX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBfdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG4gICAgICAgICAgICB2YXIgZW5kID0gX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG4gICAgICAgICAgICB2YXIgc3RhcnRJc0FycmF5ID0gQXJyYXkuaXNBcnJheShfb2JqZWN0W3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB2YXIgZW5kSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoZW5kKTtcbiAgICAgICAgICAgIHZhciBpc0ludGVycG9sYXRpb25MaXN0ID0gIXN0YXJ0SXNBcnJheSAmJiBlbmRJc0FycmF5O1xuICAgICAgICAgICAgaWYgKGlzSW50ZXJwb2xhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBfb2JqZWN0W3Byb3BlcnR5XSA9IHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09IFwib2JqZWN0XCIgJiYgZW5kKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBGSVhNRT9cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9wZXJ0aWVzKF9vYmplY3RbcHJvcGVydHldLCBzdGFydCwgZW5kLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5faGFuZGxlUmVsYXRpdmVWYWx1ZShzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICAvLyBQcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBGSVhNRT9cbiAgICAgICAgICAgICAgICAgICAgX29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZVJlbGF0aXZlVmFsdWUoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAodHlwZW9mIGVuZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGVuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kLmNoYXJBdCgwKSA9PT0gXCIrXCIgfHwgZW5kLmNoYXJBdCgwKSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydCArIHBhcnNlRmxvYXQoZW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGVuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3N3YXBFbmRTdGFydFJlcGVhdFZhbHVlcyhwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuICAgICAgICB2YXIgZW5kVmFsdWUgPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuICAgICAgICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9IFwiMTguNi40XCI7XG5cbnZhciBuZXh0SWQgPSBTZXF1ZW5jZS5uZXh0SWQ7XG4vKipcbiAqIENvbnRyb2xsaW5nIGdyb3VwcyBvZiB0d2VlbnNcbiAqXG4gKiBVc2luZyB0aGUgVFdFRU4gc2luZ2xldG9uIHRvIG1hbmFnZSB5b3VyIHR3ZWVucyBjYW4gY2F1c2UgaXNzdWVzIGluIGxhcmdlIGFwcHMgd2l0aCBtYW55IGNvbXBvbmVudHMuXG4gKiBJbiB0aGVzZSBjYXNlcywgeW91IG1heSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBzbWFsbGVyIGdyb3VwcyBvZiB0d2VlbnMuXG4gKi9cbmV4cG9ydCB2YXIgVFdFRU4gPSBtYWluR3JvdXA7XG4vKiogXG4gKiDln7rkuo5UaW1lci50aW1lU2NhbGXnvKnmlL7pgJ/luqbnmoRncm91cFxuICovXG5leHBvcnQgdmFyIFNDQUxFX1RXRUVOID0gc2NhbGVHcm91cDtcbiJdfQ==