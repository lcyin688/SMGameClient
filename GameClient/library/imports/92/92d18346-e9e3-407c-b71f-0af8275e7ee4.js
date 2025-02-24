"use strict";
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