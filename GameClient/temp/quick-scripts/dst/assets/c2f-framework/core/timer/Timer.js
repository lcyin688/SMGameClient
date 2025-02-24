
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/timer/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvdGltZXIvVGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUF1QkksZUFBWSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLFFBQWdCO1FBdEI1QixhQUFRLEdBQW9CLElBQUksQ0FBQztRQUV6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQU16QixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFldkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQXBCRCxzQkFBSSw4QkFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksdUJBQUk7UUFEUixnQkFBZ0I7YUFDaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQVMsSUFBWTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFxQixTQUFTO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQWlCLE9BQU87UUFDbEQsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBTSxHQUFOLFVBQU8sRUFBVTs7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRWpDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lciB7XG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9lbGFwc2VkVGltZTogbnVtYmVyID0gMDtcblxuICAgIGdldCBlbGFwc2VkVGltZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyID0gLTE7XG4gICAgLyoqIOinpuWPkemXtOmalOaXtumXtO+8iOenku+8iSAqL1xuICAgIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICAgIH1cbiAgICBzZXQgc3RlcChzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7ICAgICAgICAgICAgICAgICAgICAgLy8g5q+P5qyh5L+u5pS55pe26Ze0XG4gICAgICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gMDsgICAgICAgICAgICAgICAgIC8vIOmAneWOu+aXtumXtFxuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWUgLyB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHN0ZXA6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5zdGVwIDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9lbGFwc2VkVGltZSArPSBkdDtcblxuICAgICAgICBpZiAodGhpcy5fZWxhcHNlZFRpbWUgPj0gdGhpcy5fc3RlcCkge1xuICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUgLT0gdGhpcy5fc3RlcDtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2s/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gMDtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLl9lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuc3RlcCA9IC0xO1xuICAgIH1cbn0iXX0=