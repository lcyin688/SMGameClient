
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/MathUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab2f7oq0NhEo7EYxM9ESNrA', 'MathUtil');
// c2f-framework/utils/MathUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 数学工具 */
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    /**
     * 获得随机方向
     * @param x -1为左，1为右
     * @returns
     */
    MathUtil.sign = function (x) {
        if (x > 0) {
            return 1;
        }
        if (x < 0) {
            return -1;
        }
        return 0;
    };
    /**
     * 随时间变化进度值
     * @param start 初始值
     * @param end   结束值
     * @param t     时间
     */
    MathUtil.progress = function (start, end, t) {
        return start + (end - start) * t;
    };
    /**
     * 插值
     * @param numStart 开始数值
     * @param numEnd   结束数值
     * @param t        时间
     */
    MathUtil.lerp = function (numStart, numEnd, t) {
        if (t > 1) {
            t = 1;
        }
        else if (t < 0) {
            t = 0;
        }
        return numStart * (1 - t) + (numEnd * t);
    };
    /**
     * 角度插值
     * @param angle1 角度1
     * @param angle2 角度2
     * @param t      时间
     */
    MathUtil.lerpAngle = function (current, target, t) {
        current %= 360;
        target %= 360;
        var dAngle = target - current;
        if (dAngle > 180) {
            target = current - (360 - dAngle);
        }
        else if (dAngle < -180) {
            target = current + (360 + dAngle);
        }
        return (MathUtil.lerp(current, target, t) % 360 + 360) % 360;
    };
    /**
     * 按一定的速度从一个角度转向令一个角度
     * @param current 当前角度
     * @param target  目标角度
     * @param speed   速度
     */
    MathUtil.angleTowards = function (current, target, speed) {
        current %= 360;
        target %= 360;
        var dAngle = target - current;
        if (dAngle > 180) {
            target = current - (360 - dAngle);
        }
        else if (dAngle < -180) {
            target = current + (360 + dAngle);
        }
        var dir = target - current;
        if (speed > Math.abs(dir)) {
            return target;
        }
        return ((current + speed * Math.sign(dir)) % 360 + 360) % 360;
    };
    /**
     * 获取方位内值，超过时获取对应边界值
     * @param value     值
     * @param minLimit  最小值
     * @param maxLimit  最大值
     */
    MathUtil.clamp = function (value, minLimit, maxLimit) {
        if (value < minLimit) {
            return minLimit;
        }
        if (value > maxLimit) {
            return maxLimit;
        }
        return value;
    };
    /**
     * 获得一个值的概率
     * @param value 值
     */
    MathUtil.probability = function (value) {
        return Math.random() < value;
    };
    /**
     * 在范围内随机一个数
     * @param value 值
     */
    MathUtil.randRect = function (min, max) {
        var value = Math.random() * (max - min) + min;
        return value;
    };
    /**
     * 在范围内随机一个整数
     * @param value 值
     */
    MathUtil.randRectInt = function (min, max) {
        var value = Math.random() * (max - min) + min;
        return value < 0 ? Math.ceil(value) : Math.floor(value);
    };
    /**
     * 获取区间[min, max)的浮点数，传入1个参数则区间为[0, min)
     */
    MathUtil.randFloat = function (min, max) {
        if (max === void 0) { max = undefined; }
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    };
    /**
     * 根据权重数组进行随机，返回结果下标
     * @param weightArr 权重数组
     * @returns 随机到的权重数组下标
     */
    MathUtil.randWeightIdx = function (weightArr) {
        var sum = 0;
        for (var i = 0; i < weightArr.length; i++) {
            sum += weightArr[i];
        }
        var randNum = this.randFloat(0, sum);
        var curValue = 0;
        for (var i = 0; i < weightArr.length; i++) {
            curValue += weightArr[i];
            if (randNum < curValue) {
                return i;
            }
        }
        return weightArr.length - 1;
    };
    //%02d：
    MathUtil.prefixInteger = function (num, length) {
        if (num < 10) {
            return (Array(length).join('0') + num).slice(-length);
        }
        else {
            return num;
        }
    };
    /**
     * 将角度约束在 [0,360) 区间内
     */
    MathUtil.normalizeDegree = function (degree) {
        var result = degree % 360;
        if (result < 0) {
            result += 360;
        }
        return result;
    };
    /**
     * 返回value是否在 [min, max] 区间内
     * @param min
     * @param max
     * @param value
     * @param includeEdge true(默认值): [min, max]; false: (min, max)
     */
    MathUtil.inRange = function (min, max, value, includeEdge) {
        if (includeEdge === void 0) { includeEdge = true; }
        return includeEdge ? value >= min && value <= max : value > min && value < max;
    };
    /**
     * 角度转弧度
     */
    MathUtil.deg2Rad = Math.PI / 180;
    /**
     * 弧度转角度
     */
    MathUtil.rad2Deg = 180 / Math.PI;
    return MathUtil;
}());
c2f.utils.math = MathUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL01hdGhVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVztBQUNYO0lBQUE7SUFpTkEsQ0FBQztJQXRNRzs7OztPQUlHO0lBQ0ksYUFBSSxHQUFYLFVBQVksQ0FBUztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxpQkFBUSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxHQUFXLEVBQUUsQ0FBUztRQUNqRCxPQUFPLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBSSxHQUFYLFVBQVksUUFBZ0IsRUFBRSxNQUFjLEVBQUUsQ0FBUztRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ1I7UUFFRCxPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQkFBUyxHQUFoQixVQUFpQixPQUFlLEVBQUUsTUFBYyxFQUFFLENBQVM7UUFDdkQsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNmLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFFZCxJQUFJLE1BQU0sR0FBVyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRDLElBQUksTUFBTSxHQUFH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QUcsQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDWixNQUFNLElBQUksR0FBRyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLGdCQUFPLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLFdBQTJCO1FBQTNCLDRCQUFBLEVBQUEsa0JBQTJCO1FBQ3RGLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuRixDQUFDO0lBL01EOztPQUVHO0lBQ0ksZ0JBQU8sR0FBVyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUV2Qzs7T0FFRztJQUNJLGdCQUFPLEdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUF3TTNDLGVBQUM7Q0FqTkQsQUFpTkMsSUFBQTtBQU9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmlbDlrablt6XlhbcgKi9cbmNsYXNzIE1hdGhVdGlsIHtcbiAgICAvKipcbiAgICAgKiDop5LluqbovazlvKfluqZcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVnMlJhZDogbnVtYmVyID0gTWF0aC5QSSAvIDE4MDtcblxuICAgIC8qKlxuICAgICAqIOW8p+W6pui9rOinkuW6plxuICAgICAqL1xuICAgIHN0YXRpYyByYWQyRGVnOiBudW1iZXIgPSAxODAgLyBNYXRoLlBJO1xuXG4gICAgLyoqXG4gICAgICog6I635b6X6ZqP5py65pa55ZCRXG4gICAgICogQHBhcmFtIHggLTHkuLrlt6bvvIwx5Li65Y+zXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIHNpZ24oeDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZqP5pe26Ze05Y+Y5YyW6L+b5bqm5YC8XG4gICAgICogQHBhcmFtIHN0YXJ0IOWIneWni+WAvFxuICAgICAqIEBwYXJhbSBlbmQgICDnu5PmnZ/lgLxcbiAgICAgKiBAcGFyYW0gdCAgICAg5pe26Ze0XG4gICAgICovXG4gICAgc3RhdGljIHByb2dyZXNzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5o+S5YC8XG4gICAgICogQHBhcmFtIG51bVN0YXJ0IOW8gOWni+aVsOWAvFxuICAgICAqIEBwYXJhbSBudW1FbmQgICDnu5PmnZ/mlbDlgLxcbiAgICAgKiBAcGFyYW0gdCAgICAgICAg5pe26Ze0XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAobnVtU3RhcnQ6IG51bWJlciwgbnVtRW5kOiBudW1iZXIsIHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0ID4gMSkge1xuICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodCA8IDApIHtcbiAgICAgICAgICAgIHQgPSAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtU3RhcnQgKiAoMSAtIHQpICsgKG51bUVuZCAqIHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOinkuW6puaPkuWAvFxuICAgICAqIEBwYXJhbSBhbmdsZTEg6KeS5bqmMVxuICAgICAqIEBwYXJhbSBhbmdsZTIg6KeS5bqmMlxuICAgICAqIEBwYXJhbSB0ICAgICAg5pe26Ze0XG4gICAgICovXG4gICAgc3RhdGljIGxlcnBBbmdsZShjdXJyZW50OiBudW1iZXIsIHRhcmdldDogbnVtYmVyLCB0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjdXJyZW50ICU9IDM2MDtcbiAgICAgICAgdGFyZ2V0ICU9IDM2MDtcblxuICAgICAgICB2YXIgZEFuZ2xlOiBudW1iZXIgPSB0YXJnZXQgLSBjdXJyZW50O1xuXG4gICAgICAgIGlmIChkQW5nbGUgPiAxODApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGN1cnJlbnQgLSAoMzYwIC0gZEFuZ2xlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkQW5nbGUgPCAtMTgwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBjdXJyZW50ICsgKDM2MCArIGRBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKE1hdGhVdGlsLmxlcnAoY3VycmVudCwgdGFyZ2V0LCB0KSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oyJ5LiA5a6a55qE6YCf5bqm5LuO5LiA5Liq6KeS5bqm6L2s5ZCR5Luk5LiA5Liq6KeS5bqmXG4gICAgICogQHBhcmFtIGN1cnJlbnQg5b2T5YmN6KeS5bqmXG4gICAgICogQHBhcmFtIHRhcmdldCAg55uu5qCH6KeS5bqmXG4gICAgICogQHBhcmFtIHNwZWVkICAg6YCf5bqmXG4gICAgICovXG4gICAgc3RhdGljIGFuZ2xlVG93YXJkcyhjdXJyZW50OiBudW1iZXIsIHRhcmdldDogbnVtYmVyLCBzcGVlZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY3VycmVudCAlPSAzNjA7XG4gICAgICAgIHRhcmdldCAlPSAzNjA7XG5cbiAgICAgICAgdmFyIGRBbmdsZTogbnVtYmVyID0gdGFyZ2V0IC0gY3VycmVudDtcblxuICAgICAgICBpZiAoZEFuZ2xlID4gMTgwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBjdXJyZW50IC0gKDM2MCAtIGRBbmdsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZEFuZ2xlIDwgLTE4MCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY3VycmVudCArICgzNjAgKyBkQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpciA9IHRhcmdldCAtIGN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHNwZWVkID4gTWF0aC5hYnMoZGlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKGN1cnJlbnQgKyBzcGVlZCAqIE1hdGguc2lnbihkaXIpKSAlIDM2MCArIDM2MCkgJSAzNjA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5pa55L2N5YaF5YC877yM6LaF6L+H5pe26I635Y+W5a+55bqU6L6555WM5YC8XG4gICAgICogQHBhcmFtIHZhbHVlICAgICDlgLxcbiAgICAgKiBAcGFyYW0gbWluTGltaXQgIOacgOWwj+WAvFxuICAgICAqIEBwYXJhbSBtYXhMaW1pdCAg5pyA5aSn5YC8XG4gICAgICovXG4gICAgc3RhdGljIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbkxpbWl0OiBudW1iZXIsIG1heExpbWl0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluTGltaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBtaW5MaW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA+IG1heExpbWl0KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4TGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635b6X5LiA5Liq5YC855qE5qaC546HXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgICAqL1xuICAgIHN0YXRpYyBwcm9iYWJpbGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zyo6IyD5Zu05YaF6ZqP5py65LiA5Liq5pWwXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgICAqL1xuICAgIHN0YXRpYyByYW5kUmVjdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zyo6IyD5Zu05YaF6ZqP5py65LiA5Liq5pW05pWwXG4gICAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgICAqL1xuICAgIHN0YXRpYyByYW5kUmVjdEludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWMuumXtFttaW4sIG1heCnnmoTmta7ngrnmlbDvvIzkvKDlhaUx5Liq5Y+C5pWw5YiZ5Yy66Ze05Li6WzAsIG1pbilcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZEZsb2F0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciA9IHVuZGVmaW5lZCk6IG51bWJlciB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWF4ID0gbWluO1xuICAgICAgICAgICAgbWluID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNruadg+mHjeaVsOe7hOi/m+ihjOmaj+acuu+8jOi/lOWbnue7k+aenOS4i+agh1xuICAgICAqIEBwYXJhbSB3ZWlnaHRBcnIg5p2D6YeN5pWw57uEXG4gICAgICogQHJldHVybnMg6ZqP5py65Yiw55qE5p2D6YeN5pWw57uE5LiL5qCHXG4gICAgICovXG4gICAgc3RhdGljIHJhbmRXZWlnaHRJZHgod2VpZ2h0QXJyOiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWlnaHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB3ZWlnaHRBcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmROdW0gPSB0aGlzLnJhbmRGbG9hdCgwLCBzdW0pO1xuICAgICAgICBsZXQgY3VyVmFsdWUgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VpZ2h0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJWYWx1ZSArPSB3ZWlnaHRBcnJbaV07XG4gICAgICAgICAgICBpZiAocmFuZE51bSA8IGN1clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdlaWdodEFyci5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vJTAyZO+8mlxuICAgIHN0YXRpYyBwcmVmaXhJbnRlZ2VyKG51bTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xuICAgICAgICBpZiAobnVtIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiAoQXJyYXkobGVuZ3RoKS5qb2luKCcwJykgKyBudW0pLnNsaWNlKC1sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuinkuW6pue6puadn+WcqCBbMCwzNjApIOWMuumXtOWGhVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbm9ybWFsaXplRGVncmVlKGRlZ3JlZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlZ3JlZSAlIDM2MDtcbiAgICAgICAgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm552YWx1ZeaYr+WQpuWcqCBbbWluLCBtYXhdIOWMuumXtOWGhVxuICAgICAqIEBwYXJhbSBtaW4gXG4gICAgICogQHBhcmFtIG1heCBcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gaW5jbHVkZUVkZ2UgdHJ1ZSjpu5jorqTlgLwpOiBbbWluLCBtYXhdOyBmYWxzZTogKG1pbiwgbWF4KVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5SYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIGluY2x1ZGVFZGdlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaW5jbHVkZUVkZ2UgPyB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4IDogdmFsdWUgPiBtaW4gJiYgdmFsdWUgPCBtYXg7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElVdGlsIHtcbiAgICAgICAgbWF0aDogdHlwZW9mIE1hdGhVdGlsO1xuICAgIH1cbn1cbmMyZi51dGlscy5tYXRoID0gTWF0aFV0aWw7XG5leHBvcnQgeyB9OyJdfQ==