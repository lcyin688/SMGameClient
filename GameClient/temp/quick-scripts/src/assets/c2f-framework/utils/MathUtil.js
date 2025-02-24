"use strict";
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