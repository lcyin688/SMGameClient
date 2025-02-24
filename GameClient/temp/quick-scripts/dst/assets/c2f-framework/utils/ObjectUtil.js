
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/ObjectUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d18NG6eNAfLcfCvgnXn7k', 'ObjectUtil');
// c2f-framework/utils/ObjectUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 对象工具 */
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    /**
     * 判断指定的值是否为对象
     * @param value 值
     */
    ObjectUtil.isObject = function (value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    };
    /**
     * 深拷贝
     * @param target 目标
     */
    ObjectUtil.deepCopy = function (target) {
        if (target == null || typeof target !== 'object') {
            return target;
        }
        var result = null;
        if (target instanceof Date) {
            result = new Date();
            result.setTime(target.getTime());
            return result;
        }
        if (target instanceof Array) {
            result = [];
            for (var i = 0, length = target.length; i < length; i++) {
                result[i] = this.deepCopy(target[i]);
            }
            return result;
        }
        if (target instanceof Object) {
            result = {};
            for (var key in target) {
                if (target.hasOwnProperty(key)) {
                    result[key] = this.deepCopy(target[key]);
                }
            }
            return result;
        }
        console.warn("\u4E0D\u652F\u6301\u7684\u7C7B\u578B\uFF1A" + result);
    };
    /**
     * 防止json循环引用 深拷贝
     * @param target 目标
     */
    ObjectUtil.deepCopyOne = function (target) {
        function replacer(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.includes(value)) {
                    // If circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }
        target.self = target;
        var cache = [];
        return JSON.parse(JSON.stringify(target, replacer));
    };
    /**
     * 拷贝对象
     * @param target 目标
     */
    ObjectUtil.copy = function (target) {
        return JSON.parse(JSON.stringify(target));
    };
    /** 修改小写 */
    ObjectUtil.modifyKeysLowercase = function (target) {
        if (target == null || typeof target !== 'object') {
            return target;
        }
        if (target instanceof Array) {
            var retArr = [];
            for (var i = 0, length = target.length; i < length; i++) {
                retArr[i] = this.modifyKeysLowercase(target[i]);
            }
            return retArr;
        }
        if (target instanceof Object) {
            var retObj = {};
            for (var key in target) {
                if (target.hasOwnProperty(key)) {
                    var lcKey = c2f.utils.str.lowercaseFirstLetter(key);
                    retObj[lcKey] = this.modifyKeysLowercase(target[key]);
                }
            }
            return retObj;
        }
    };
    return ObjectUtil;
}());
c2f.utils.obj = ObjectUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL09iamVjdFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ1g7SUFBQTtJQXFHQSxDQUFDO0lBcEdHOzs7T0FHRztJQUNJLG1CQUFRLEdBQWYsVUFBZ0IsS0FBVTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUJBQVEsR0FBZixVQUFnQixNQUFXO1FBQ3ZCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUMsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFFdkIsSUFBSSxNQUFNLFlBQVksSUFBSSxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDakMsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDekIsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxJQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7WUFDMUIsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLCtDQUFVLE1BQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFJRDs7O09BR0c7SUFDSSxzQkFBVyxHQUFsQixVQUFtQixNQUFXO1FBQzFCLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ3hCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQzdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkIsMkNBQTJDO29CQUMzQyxPQUFPO2lCQUNWO2dCQUNELGdDQUFnQztnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZUFBSSxHQUFYLFVBQVksTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO0lBQ0osOEJBQW1CLEdBQTFCLFVBQTJCLE1BQVc7UUFDbEMsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QyxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN6QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxNQUFNLFlBQVksTUFBTSxFQUFFO1lBQzFCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyR0EsQUFxR0MsSUFBQTtBQU9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDlr7nosaHlt6XlhbcgKi9cbmNsYXNzIE9iamVjdFV0aWwge1xuICAgIC8qKlxuICAgICAqIOWIpOaWreaMh+WumueahOWAvOaYr+WQpuS4uuWvueixoVxuICAgICAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rex5ou36LSdXG4gICAgICogQHBhcmFtIHRhcmdldCDnm67moIdcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVlcENvcHkodGFyZ2V0OiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBudWxsO1xuXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcmVzdWx0LnNldFRpbWUodGFyZ2V0LmdldFRpbWUoKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0YXJnZXQubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSB0aGlzLmRlZXBDb3B5KHRhcmdldFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLmRlZXBDb3B5KHRhcmdldFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS53YXJuKGDkuI3mlK/mjIHnmoTnsbvlnovvvJoke3Jlc3VsdH1gKTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICog6Ziy5q2ianNvbuW+queOr+W8leeUqCDmt7Hmi7fotJ1cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebruagh1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWVwQ29weU9uZSh0YXJnZXQ6IGFueSk6IG9iamVjdCB7XG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWUgaW4gb3VyIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuc2VsZiA9IHRhcmdldDtcbiAgICAgICAgbGV0IGNhY2hlID0gW107XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRhcmdldCwgcmVwbGFjZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmi7fotJ3lr7nosaFcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebruagh1xuICAgICAqL1xuICAgIHN0YXRpYyBjb3B5KHRhcmdldDogb2JqZWN0KTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGFyZ2V0KSk7XG4gICAgfVxuXG4gICAgLyoqIOS/ruaUueWwj+WGmSAqL1xuICAgIHN0YXRpYyBtb2RpZnlLZXlzTG93ZXJjYXNlKHRhcmdldDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsIHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgbGV0IHJldEFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRhcmdldC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJldEFycltpXSA9IHRoaXMubW9kaWZ5S2V5c0xvd2VyY2FzZSh0YXJnZXRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldEFycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcmV0T2JqID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxjS2V5ID0gYzJmLnV0aWxzLnN0ci5sb3dlcmNhc2VGaXJzdExldHRlcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXRPYmpbbGNLZXldID0gdGhpcy5tb2RpZnlLZXlzTG93ZXJjYXNlKHRhcmdldFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0T2JqO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElVdGlsIHtcbiAgICAgICAgb2JqOiB0eXBlb2YgT2JqZWN0VXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMub2JqID0gT2JqZWN0VXRpbDtcbmV4cG9ydCB7IH07XG4iXX0=