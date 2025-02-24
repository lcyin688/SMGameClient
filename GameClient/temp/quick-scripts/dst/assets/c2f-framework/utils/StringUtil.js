
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/StringUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3a44U9nSZJE5AFexxfGCma', 'StringUtil');
// c2f-framework/utils/StringUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 字符串工具 */
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    /** 获取一个唯一标识的字符串 */
    StringUtil.guid = function () {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
    };
    /**
     * 转美式计数字符串
     * @param value 数字
     * @example
     * 123456789 = 123,456,789
     */
    StringUtil.numberTotPermil = function (value) {
        return value.toLocaleString();
    };
    /**
     * 转英文单位计数
     * @param value 数字
     * @param fixed 保留小数位数
     * @example
     * 12345 = 12.35K
     */
    StringUtil.numberToThousand = function (value, fixed) {
        if (fixed === void 0) { fixed = 2; }
        var k = 1000;
        var sizes = ['', 'K', 'M', 'G'];
        if (value < k) {
            return value.toString();
        }
        else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            var r = ((value / Math.pow(k, i)));
            return r.toFixed(fixed) + sizes[i];
        }
    };
    /**
     * 转中文单位计数
     * @param value 数字
     * @param fixed 保留小数位数
     * @example
     * 12345 = 1.23万
     */
    StringUtil.numberToTenThousand = function (value, fixed) {
        if (fixed === void 0) { fixed = 2; }
        var k = 10000;
        var sizes = ['', '万', '亿', '万亿'];
        if (value < k) {
            return value.toString();
        }
        else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            return ((value / Math.pow(k, i))).toFixed(fixed) + sizes[i];
        }
    };
    /**
     * "," 分割字符串成数组
     * @param str 字符串
     */
    StringUtil.stringToArray1 = function (str) {
        if (str == "") {
            return [];
        }
        return str.split(",");
    };
    /**
     * "|" 分割字符串成数组
     * @param str 字符串
     */
    StringUtil.stringToArray2 = function (str) {
        if (str == "") {
            return [];
        }
        return str.split("|");
    };
    /**
     * ":" 分割字符串成数组
     * @param str 字符串
     */
    StringUtil.stringToArray3 = function (str) {
        if (str == "") {
            return [];
        }
        return str.split(":");
    };
    /**
     * ";" 分割字符串成数组
     * @param str 字符串
     */
    StringUtil.stringToArray4 = function (str) {
        if (str == "") {
            return [];
        }
        return str.split(";");
    };
    /**
     * 字符串截取
     * @param str     字符串
     * @param n       截取长度
     * @param showdot 是否把截取的部分用省略号代替
     */
    StringUtil.sub = function (str, n, showdot) {
        if (showdot === void 0) { showdot = false; }
        var r = /[^\x00-\xff]/g;
        if (str.replace(r, "mm").length <= n) {
            return str;
        }
        var m = Math.floor(n / 2);
        for (var i = m; i < str.length; i++) {
            if (str.substring(0, i).replace(r, "mm").length >= n) {
                if (showdot) {
                    return str.substring(0, i) + "...";
                }
                else {
                    return str.substring(0, i);
                }
            }
        }
        return str;
    };
    /**
     * 计算字符串长度，中文算两个字节
     * @param str 字符串
     */
    StringUtil.stringLen = function (str) {
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    };
    /**
     * 字符串格式化：xx{0}yy{1}zz中的占位用后面的参数替换
     * @param str 字符串
     */
    StringUtil.formatWords = function (str, params) {
        if (!params || params.length <= 0) {
            return str;
        }
        var fromUI = params == 'UIV_Null' ? true : false;
        var arrPa = this.stringToArray2(params);
        var result = str.replace(/\{(\w+)\}/g, function (s, i) {
            return fromUI ? "" : arrPa[i];
        });
        return result;
    };
    /**
         * 根据参数返回格式化字符串
         * @param text 源字符串
         * @param option 用于格式化源字符串的数据，可以是键值对，也可以按顺序传参
         * @example
         * // 可使用以下两种调用方式，返回结果都是"测试字符串111--abc..."
         * c2f.utils.date.formatWithObj("测试字符串%{a1}--%{a2}...", {a1: 111, a2: "abc"});
         * c2f.utils.date.formatWithObj("测试字符串%{a1}--%{a2}...", 111, "abc");
         */
    StringUtil.formatWithObj = function (text) {
        var option = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            option[_i - 1] = arguments[_i];
        }
        var result = text;
        if (option.length === 1 && Object.prototype.toString.call(option[0]) === "[object Object]") {
            // 参数为键值对
            for (var arg in option[0]) {
                if (option[0].hasOwnProperty(arg)) {
                    var reg = new RegExp("%{" + arg + "}", "g");
                    result = result.replace(reg, "" + option[0][arg]);
                }
            }
        }
        else {
            // 参数为数组
            option.forEach(function (value) {
                result = result.replace(/%\{.*?\}/, "" + value);
            });
        }
        return result;
    };
    /** 首字母大写 */
    StringUtil.uppercaseFirstLetter = function (text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    };
    /** 首字母小写 */
    StringUtil.lowercaseFirstLetter = function (text) {
        return text.substring(0, 1).toLowerCase() + text.substring(1);
    };
    /** 判断是否都是数字 */
    StringUtil.isAllDigits = function (str) {
        var regex = /^\d+$/;
        return regex.test(str);
    };
    return StringUtil;
}());
c2f.utils.str = StringUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL1N0cmluZ1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ1o7SUFBQTtJQTRNQSxDQUFDO0lBM01HLG1CQUFtQjtJQUNaLGVBQUksR0FBWDtRQUNJLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFHLENBQUM7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwwQkFBZSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSwyQkFBZ0IsR0FBdkIsVUFBd0IsS0FBYSxFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFDcEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxPQUFPLEtB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Q0FBQyxVQUFDLEtBQVU7Z0JBQ3RCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFHLEtBQU8sQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWTtJQUNMLCtCQUFvQixHQUEzQixVQUE0QixJQUFZO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsWUFBWTtJQUNMLCtCQUFvQixHQUEzQixVQUE0QixJQUFZO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsZUFBZTtJQUNSLHNCQUFXLEdBQWxCLFVBQW1CLEdBQVc7UUFDMUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQTVNQSxBQTRNQyxJQUFBO0FBT0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOWtl+espuS4suW3peWFtyAqL1xuY2xhc3MgU3RyaW5nVXRpbCB7XG4gICAgLyoqIOiOt+WPluS4gOS4quWUr+S4gOagh+ivhueahOWtl+espuS4siAqL1xuICAgIHN0YXRpYyBndWlkKCkge1xuICAgICAgICBsZXQgZ3VpZDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzI7IGkrKykge1xuICAgICAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNi4wKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICBndWlkICs9IG47XG4gICAgICAgICAgICBpZiAoKGkgPT0gOCkgfHwgKGkgPT0gMTIpIHx8IChpID09IDE2KSB8fCAoaSA9PSAyMCkpXG4gICAgICAgICAgICAgICAgZ3VpZCArPSBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3VpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovaznvo7lvI/orqHmlbDlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5pWw5a2XXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAxMjM0NTY3ODkgPSAxMjMsNDU2LDc4OVxuICAgICAqL1xuICAgIHN0YXRpYyBudW1iZXJUb3RQZXJtaWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZygpO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiDovazoi7HmlofljZXkvY3orqHmlbBcbiAgICAgKiBAcGFyYW0gdmFsdWUg5pWw5a2XXG4gICAgICogQHBhcmFtIGZpeGVkIOS/neeVmeWwj+aVsOS9jeaVsFxuICAgICAqIEBleGFtcGxlXG4gICAgICogMTIzNDUgPSAxMi4zNUtcbiAgICAgKi9cbiAgICBzdGF0aWMgbnVtYmVyVG9UaG91c2FuZCh2YWx1ZTogbnVtYmVyLCBmaXhlZDogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIHZhciBrID0gMTAwMDtcbiAgICAgICAgdmFyIHNpemVzID0gWycnLCAnSycsICdNJywgJ0cnXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgaykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5sb2coaykpO1xuICAgICAgICAgICAgdmFyIHIgPSAoKHZhbHVlIC8gTWF0aC5wb3coaywgaSkpKTtcbiAgICAgICAgICAgIHJldHVybiByLnRvRml4ZWQoZml4ZWQpICsgc2l6ZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICog6L2s5Lit5paH5Y2V5L2N6K6h5pWwXG4gICAgICogQHBhcmFtIHZhbHVlIOaVsOWtl1xuICAgICAqIEBwYXJhbSBmaXhlZCDkv53nlZnlsI/mlbDkvY3mlbBcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDEyMzQ1ID0gMS4yM+S4h1xuICAgICAqL1xuICAgIHN0YXRpYyBudW1iZXJUb1RlblRob3VzYW5kKHZhbHVlOiBudW1iZXIsIGZpeGVkOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGsgPSAxMDAwMDtcbiAgICAgICAgdmFyIHNpemVzID0gWycnLCAn5LiHJywgJ+S6vycsICfkuIfkur8nXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgaykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5sb2coaykpO1xuICAgICAgICAgICAgcmV0dXJuICgodmFsdWUgLyBNYXRoLnBvdyhrLCBpKSkpLnRvRml4ZWQoZml4ZWQpICsgc2l6ZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcIixcIiDliIblibLlrZfnrKbkuLLmiJDmlbDnu4RcbiAgICAgKiBAcGFyYW0gc3RyIOWtl+espuS4slxuICAgICAqL1xuICAgIHN0YXRpYyBzdHJpbmdUb0FycmF5MShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KFwiLFwiKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogXCJ8XCIg5YiG5Ymy5a2X56ym5Liy5oiQ5pWw57uEIFxuICAgICAqIEBwYXJhbSBzdHIg5a2X56ym5LiyXG4gICAgICovXG4gICAgc3RhdGljIHN0cmluZ1RvQXJyYXkyKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzdHIgPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCJ8XCIpO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBcIjpcIiDliIblibLlrZfnrKbkuLLmiJDmlbDnu4RcbiAgICAgKiBAcGFyYW0gc3RyIOWtl+espuS4slxuICAgICAqL1xuICAgIHN0YXRpYyBzdHJpbmdUb0FycmF5MyhzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KFwiOlwiKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogXCI7XCIg5YiG5Ymy5a2X56ym5Liy5oiQ5pWw57uEIFxuICAgICAqIEBwYXJhbSBzdHIg5a2X56ym5LiyXG4gICAgICovXG4gICAgc3RhdGljIHN0cmluZ1RvQXJyYXk0KHN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzdHIgPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCI7XCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWtl+espuS4suaIquWPllxuICAgICAqIEBwYXJhbSBzdHIgICAgIOWtl+espuS4slxuICAgICAqIEBwYXJhbSBuICAgICAgIOaIquWPlumVv+W6plxuICAgICAqIEBwYXJhbSBzaG93ZG90IOaYr+WQpuaKiuaIquWPlueahOmDqOWIhueUqOecgeeVpeWPt+S7o+abv1xuICAgICAqL1xuICAgIHN0YXRpYyBzdWIoc3RyOiBzdHJpbmcsIG46IG51bWJlciwgc2hvd2RvdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHZhciByID0gL1teXFx4MDAtXFx4ZmZdL2c7XG4gICAgICAgIGlmIChzdHIucmVwbGFjZShyLCBcIm1tXCIpLmxlbmd0aCA8PSBuKSB7IHJldHVybiBzdHI7IH1cbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKG4gLyAyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IG07IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdHIuc3Vic3RyaW5nKDAsIGkpLnJlcGxhY2UociwgXCJtbVwiKS5sZW5ndGggPj0gbikge1xuICAgICAgICAgICAgICAgIGlmIChzaG93ZG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGkpICsgXCIuLi5cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpflrZfnrKbkuLLplb/luqbvvIzkuK3mlofnrpfkuKTkuKrlrZfoioJcbiAgICAgKiBAcGFyYW0gc3RyIOWtl+espuS4slxuICAgICAqL1xuICAgIHN0YXRpYyBzdHJpbmdMZW4oc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlYWxMZW5ndGggPSAwLCBsZW4gPSBzdHIubGVuZ3RoLCBjaGFyQ29kZSA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KVxuICAgICAgICAgICAgICAgIHJlYWxMZW5ndGggKz0gMTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWFsTGVuZ3RoICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWxMZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2X56ym5Liy5qC85byP5YyW77yaeHh7MH15eXsxfXp65Lit55qE5Y2g5L2N55So5ZCO6Z2i55qE5Y+C5pWw5pu/5o2iXG4gICAgICogQHBhcmFtIHN0ciDlrZfnrKbkuLJcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0V29yZHMoc3RyOiBzdHJpbmcsIHBhcmFtczogc3RyaW5nKSB7XG4gICAgICAgIGlmICghcGFyYW1zIHx8IHBhcmFtcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJvbVVJID0gcGFyYW1zID09ICdVSVZfTnVsbCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGxldCBhcnJQYSA9IHRoaXMuc3RyaW5nVG9BcnJheTIocGFyYW1zKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN0ci5yZXBsYWNlKC9cXHsoXFx3KylcXH0vZywgZnVuY3Rpb24gKHMsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tVUkgPyBcIlwiIDogYXJyUGFbaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICAgKiDmoLnmja7lj4LmlbDov5Tlm57moLzlvI/ljJblrZfnrKbkuLJcbiAgICAgICAgICogQHBhcmFtIHRleHQg5rqQ5a2X56ym5LiyXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb24g55So5LqO5qC85byP5YyW5rqQ5a2X56ym5Liy55qE5pWw5o2u77yM5Y+v5Lul5piv6ZSu5YC85a+577yM5Lmf5Y+v5Lul5oyJ6aG65bqP5Lyg5Y+CXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIC8vIOWPr+S9v+eUqOS7peS4i+S4pOenjeiwg+eUqOaWueW8j++8jOi/lOWbnue7k+aenOmDveaYr1wi5rWL6K+V5a2X56ym5LiyMTExLS1hYmMuLi5cIlxuICAgICAgICAgKiBjMmYudXRpbHMuZGF0ZS5mb3JtYXRXaXRoT2JqKFwi5rWL6K+V5a2X56ym5LiyJXthMX0tLSV7YTJ9Li4uXCIsIHthMTogMTExLCBhMjogXCJhYmNcIn0pO1xuICAgICAgICAgKiBjMmYudXRpbHMuZGF0ZS5mb3JtYXRXaXRoT2JqKFwi5rWL6K+V5a2X56ym5LiyJXthMX0tLSV7YTJ9Li4uXCIsIDExMSwgXCJhYmNcIik7XG4gICAgICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRXaXRoT2JqKHRleHQ6IHN0cmluZywgLi4ub3B0aW9uOiBbUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPl0gfCBBcnJheTxzdHJpbmcgfCBudW1iZXI+KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRleHQ7XG4gICAgICAgIGlmIChvcHRpb24ubGVuZ3RoID09PSAxICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcHRpb25bMF0pID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgICAvLyDlj4LmlbDkuLrplK7lgLzlr7lcbiAgICAgICAgICAgIGZvciAobGV0IGFyZyBpbiAob3B0aW9uWzBdIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvblswXS5oYXNPd25Qcm9wZXJ0eShhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKGAleyR7YXJnfX1gLCBcImdcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJlZywgYCR7b3B0aW9uWzBdW2FyZ119YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5Y+C5pWw5Li65pWw57uEXG4gICAgICAgICAgICBvcHRpb24uZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC8lXFx7Lio/XFx9LywgYCR7dmFsdWV9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiDpppblrZfmr43lpKflhpkgKi9cbiAgICBzdGF0aWMgdXBwZXJjYXNlRmlyc3RMZXR0ZXIodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgLyoqIOmmluWtl+avjeWwj+WGmSAqL1xuICAgIHN0YXRpYyBsb3dlcmNhc2VGaXJzdExldHRlcih0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxKTtcbiAgICB9XG5cbiAgICAvKiog5Yik5pat5piv5ZCm6YO95piv5pWw5a2XICovXG4gICAgc3RhdGljIGlzQWxsRGlnaXRzKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL15cXGQrJC87XG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cik7XG4gICAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVV0aWwge1xuICAgICAgICBzdHI6IHR5cGVvZiBTdHJpbmdVdGlsO1xuICAgIH1cbn1cbmMyZi51dGlscy5zdHIgPSBTdHJpbmdVdGlsO1xuZXhwb3J0IHsgfTsiXX0=