"use strict";
cc._RF.push(module, '6021fct1uhJsImEuhdFWC0f', 'Timer');
// c2f-framework/core/timer/Timer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer(step) {
        if (step === void 0) { step = 0; }
        this.callback = null;
        this._elapsedTime = 0;
        this._step = -1;
        this.step = step;
    }
    Object.defineProperty(Timer.prototype, "elapsedTime", {
        get: function () {
            return this._elapsedTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "step", {
        /** 触发间隔时间（秒） */
        get: function () {
            return this._step;
        },
        set: function (step) {
            this._step = step; // 每次修改时间
            this._elapsedTime = 0; // 逝去时间
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "progress", {
        get: function () {
            return this._elapsedTime / this._step;
        },
        enumerable: false,
        configurable: true
    });
    Timer.prototype.update = function (dt) {
        var _a;
        if (this.step <= 0)
            return false;
        this._elapsedTime += dt;
        if (this._elapsedTime >= this._step) {
            this._elapsedTime -= this._step;
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this);
            return true;
        }
        return false;
    };
    Timer.prototype.reset = function () {
        this._elapsedTime = 0;
    };
    Timer.prototype.stop = function () {
        this._elapsedTime = 0;
        this.step = -1;
    };
    return Timer;
}());
exports.Timer = Timer;

cc._RF.pop();