"use strict";
cc._RF.push(module, '8f37fZiP8JIXZ1UaDOdnLP/', 'ArrayUtil');
// c2f-framework/utils/ArrayUtil.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** 数组工具 */
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    /**
     * 数组去重，并创建一个新数组返回
     * @param arr  源数组
     */
    ArrayUtil.noRepeated = function (arr) {
        if (arr && arr.length > 0) {
            var res = [arr[0]];
            for (var i = 1; i < arr.length; i++) {
                var repeat = false;
                for (var j = 0; j < res.length; j++) {
                    if (arr[i] == res[j]) {
                        repeat = true;
                        break;
                    }
                }
                if (!repeat) {
                    res.push(arr[i]);
                }
            }
            return res;
        }
        else {
            return arr;
        }
    };
    /**
     * 复制二维数组
     * @param array 目标数组
     */
    ArrayUtil.copy2DArray = function (array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push(array[i].concat());
        }
        return newArray;
    };
    /**
     * Fisher-Yates Shuffle 随机置乱算法
     * @param array 目标数组
     */
    ArrayUtil.fisherYatesShuffle = function (array) {
        var count = array.length;
        while (count) {
            var index = Math.floor(Math.random() * count--);
            var temp = array[count];
            array[count] = array[index];
            array[index] = temp;
        }
        return array;
    };
    /**
     * 混淆数组
     * @param array 目标数组
     */
    ArrayUtil.confound = function (array) {
        var result = array.slice().sort(function () { return Math.random() - .5; });
        return result;
    };
    /**
     * 数组扁平化
     * @param array 目标数组
     */
    ArrayUtil.flattening = function (array) {
        for (; array.some(function (v) { return Array.isArray(v); });) { // 判断 array 中是否有数组
            array = [].concat.apply([], array); // 压扁数组
        }
        return array;
    };
    /** 删除数组中指定项 */
    ArrayUtil.removeItem = function (array, item) {
        var temp = array.concat();
        for (var i = 0; i < temp.length;) {
            var value = temp[i];
            if (item == value) {
                temp.splice(i, 1);
            }
            else {
                i++;
            }
        }
        return temp;
    };
    /**
     * 合并数组
     * @param array1 目标数组1
     * @param array2 目标数组2
     */
    ArrayUtil.combineArrays = function (array1, array2) {
        var newArray = __spreadArrays(array1, array2);
        return newArray;
    };
    /**
     * 获取随机数组成员
     * @param array 目标数组
     */
    ArrayUtil.getRandomValueInArray = function (array) {
        var newArray = array[Math.floor(Math.random() * array.length)];
        return newArray;
    };
    /**
     * 将array中存在于match中的成员移除
     * @param array
     * @param match
     */
    ArrayUtil.removeByArray = function (array, match) {
        var temp = array.concat();
        for (var i = 0; i < temp.length;) {
            var value = temp[i];
            if (match.indexOf(value) >= 0) {
                temp.splice(i, 1);
            }
            else {
                i++;
            }
        }
        return temp;
    };
    /**
     * 移除指定索引位置的数组元素。 此函数十分高效，但会改变数组的元素次序。
     * @param array 数组。
     * @param value 待移除元素。
     */
    ArrayUtil.fastRemoveAt = function (array, index) {
        var length = array.length;
        if (index < 0 || index >= length) {
            return;
        }
        array[index] = array[length - 1];
        array.length = length - 1;
    };
    /**
     * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。 此函数十分高效，但会改变数组的元素次序。
     * @param array 数组。
     * @param item 待移除元素。
     */
    ArrayUtil.fastRemove = function (array, item) {
        var length = array.length;
        var index = array.indexOf(item);
        if (index >= 0) {
            array[index] = array[length - 1];
            array.length = length - 1;
        }
    };
    /** 判断两数字数组是否相同 */
    ArrayUtil.numArrIsEqual = function (arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        arr1.sort(function (a, b) { return a - b; });
        arr2.sort(function (a, b) { return a - b; });
        return arr1.every(function (value, index) { return value === arr2[index]; });
    };
    return ArrayUtil;
}());
c2f.utils.arr = ArrayUtil;

cc._RF.pop();