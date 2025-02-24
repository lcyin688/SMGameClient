
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/ArrayUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0FycmF5VXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxXQUFXO0FBQ1g7SUFBQTtJQWlLQSxDQUFDO0lBaEtHOzs7T0FHRztJQUNJLG9CQUFVLEdBQWpCLFVBQWtCLEdBQVU7UUFDeEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNkLE1BQU07cUJBQ1Q7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDVCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxQkFBVyxHQUFsQixVQUFtQixLQUFjO1FBQzdCLElBQUksUUFBUSxHQUFZLEVBQUUsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFD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QUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FqS0EsQUFpS0MsSUFBQTtBQU9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIOaVsOe7hOW3peWFtyAqL1xuY2xhc3MgQXJyYXlVdGlsIHtcbiAgICAvKipcbiAgICAgKiDmlbDnu4Tljrvph43vvIzlubbliJvlu7rkuIDkuKrmlrDmlbDnu4Tov5Tlm55cbiAgICAgKiBAcGFyYW0gYXJyICDmupDmlbDnu4RcbiAgICAgKi9cbiAgICBzdGF0aWMgbm9SZXBlYXRlZChhcnI6IGFueVtdKSB7XG4gICAgICAgIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBbYXJyWzBdXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPT0gcmVzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWkjeWItuS6jOe7tOaVsOe7hFxuICAgICAqIEBwYXJhbSBhcnJheSDnm67moIfmlbDnu4QgXG4gICAgICovXG4gICAgc3RhdGljIGNvcHkyREFycmF5KGFycmF5OiBhbnlbXVtdKTogYW55W11bXSB7XG4gICAgICAgIGxldCBuZXdBcnJheTogYW55W11bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5W2ldLmNvbmNhdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlzaGVyLVlhdGVzIFNodWZmbGUg6ZqP5py6572u5Lmx566X5rOVXG4gICAgICogQHBhcmFtIGFycmF5IOebruagh+aVsOe7hFxuICAgICAqL1xuICAgIHN0YXRpYyBmaXNoZXJZYXRlc1NodWZmbGUoYXJyYXk6IGFueVtdKTogYW55W10ge1xuICAgICAgICBsZXQgY291bnQgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChjb3VudCkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY291bnQtLSk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IGFycmF5W2NvdW50XTtcbiAgICAgICAgICAgIGFycmF5W2NvdW50XSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgICAgIGFycmF5W2luZGV4XSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3t+a3huaVsOe7hFxuICAgICAqIEBwYXJhbSBhcnJheSDnm67moIfmlbDnu4RcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZm91bmQoYXJyYXk6IFtdKTogYW55W10ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXJyYXkuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAuNSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw57uE5omB5bmz5YyWXG4gICAgICogQHBhcmFtIGFycmF5IOebruagh+aVsOe7hFxuICAgICAqL1xuICAgIHN0YXRpYyBmbGF0dGVuaW5nKGFycmF5OiBhbnlbXSkge1xuICAgICAgICBmb3IgKDsgYXJyYXkuc29tZSh2ID0+IEFycmF5LmlzQXJyYXkodikpOykgeyAgICAvLyDliKTmlq0gYXJyYXkg5Lit5piv5ZCm5pyJ5pWw57uEXG4gICAgICAgICAgICBhcnJheSA9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpOyAvLyDljovmiYHmlbDnu4RcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqIOWIoOmZpOaVsOe7hOS4reaMh+WumumhuSAqL1xuICAgIHN0YXRpYyByZW1vdmVJdGVtKGFycmF5OiBhbnlbXSwgaXRlbTogYW55KSB7XG4gICAgICAgIGxldCB0ZW1wID0gYXJyYXkuY29uY2F0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCI5bm25pWw57uEXG4gICAgICogQHBhcmFtIGFycmF5MSDnm67moIfmlbDnu4QxXG4gICAgICogQHBhcmFtIGFycmF5MiDnm67moIfmlbDnu4QyXG4gICAgICovXG4gICAgc3RhdGljIGNvbWJpbmVBcnJheXMoYXJyYXkxOiBhbnlbXSwgYXJyYXkyOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gWy4uLmFycmF5MSwgLi4uYXJyYXkyXTtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlumaj+acuuaVsOe7hOaIkOWRmFxuICAgICAqIEBwYXJhbSBhcnJheSDnm67moIfmlbDnu4RcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tVmFsdWVJbkFycmF5KGFycmF5OiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGxldCBuZXdBcnJheSA9IGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCGYXJyYXnkuK3lrZjlnKjkuo5tYXRjaOS4reeahOaIkOWRmOenu+mZpFxuICAgICAqIEBwYXJhbSBhcnJheSBcbiAgICAgKiBAcGFyYW0gbWF0Y2ggXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUJ5QXJyYXkoYXJyYXk6IGFueVtdLCBtYXRjaDogYW55W10pIHtcbiAgICAgICAgbGV0IHRlbXAgPSBhcnJheS5jb25jYXQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDspIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgICAgICBpZiAobWF0Y2guaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5oyH5a6a57Si5byV5L2N572u55qE5pWw57uE5YWD57Sg44CCIOatpOWHveaVsOWNgeWIhumrmOaViO+8jOS9huS8muaUueWPmOaVsOe7hOeahOWFg+e0oOasoeW6j+OAglxuICAgICAqIEBwYXJhbSBhcnJheSDmlbDnu4TjgIJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5b6F56e76Zmk5YWD57Sg44CCXG4gICAgICovXG4gICAgc3RhdGljIGZhc3RSZW1vdmVBdDxUPihhcnJheTogVFtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhcnJheVtpbmRleF0gPSBhcnJheVtsZW5ndGggLSAxXTtcbiAgICAgICAgYXJyYXkubGVuZ3RoID0gbGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTpppbkuKrmjIflrprnmoTmlbDnu4TlhYPntKDjgILliKTlrprlhYPntKDnm7jnrYnml7bnm7jlvZPkuo7kuo7kvb/nlKjkuoYgYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYOOAgiDmraTlh73mlbDljYHliIbpq5jmlYjvvIzkvYbkvJrmlLnlj5jmlbDnu4TnmoTlhYPntKDmrKHluo/jgIJcbiAgICAgKiBAcGFyYW0gYXJyYXkg5pWw57uE44CCXG4gICAgICogQHBhcmFtIGl0ZW0g5b6F56e76Zmk5YWD57Sg44CCXG4gICAgICovXG4gICAgc3RhdGljIGZhc3RSZW1vdmU8VD4oYXJyYXk6IFRbXSwgaXRlbTogVCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBhcnJheVtpbmRleF0gPSBhcnJheVtsZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGFycmF5Lmxlbmd0aCA9IGxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Yik5pat5Lik5pWw5a2X5pWw57uE5piv5ZCm55u45ZCMICovXG4gICAgc3RhdGljIG51bUFycklzRXF1YWwoYXJyMTogbnVtYmVyW10sIGFycjI6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBhcnIxLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xuICAgICAgICBhcnIyLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xuICAgICAgICByZXR1cm4gYXJyMS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYXJyMltpbmRleF0pO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVXRpbCB7XG4gICAgICAgIGFycjogdHlwZW9mIEFycmF5VXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMuYXJyID0gQXJyYXlVdGlsO1xuZXhwb3J0IHsgfTtcbiJdfQ==