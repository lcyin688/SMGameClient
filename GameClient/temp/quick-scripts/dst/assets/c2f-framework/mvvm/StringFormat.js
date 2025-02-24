
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/StringFormat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8bb4MgWCBL4oy3iwr0Eayv', 'StringFormat');
// c2f-framework/mvvm/StringFormat.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFormatFunction = void 0;
var C2FConst_1 = require("../define/C2FConst");
/**
 * 数值格式化函数, 通过语义解析自动设置值的范围
 *     //整数
 * 1:def(0)//显示一个默认值
 */
var StringFormat = /** @class */ (function () {
    function StringFormat() {
    }
    StringFormat.prototype.deal = function (value, format) {
        if (format === '')
            return value;
        format = format.toLowerCase().trim(); //不区分大小
        var match_func = format.match(/^[a-z|A-Z]+/gi); //匹配到 format 中的 函数名
        var match_num = format.match(/\d+$/gi); //匹配到 format 中的参数
        var func = '';
        var num;
        var res = '';
        if (match_func)
            func = match_func[0];
        if (match_num)
            num = parseInt(match_num[0]);
        if (typeof value == 'number') {
            switch (func) {
                case 'int':
                    res = this.int(value);
                    break;
                case 'fix':
                    res = this.fix(value, num);
                    break;
                case 'kmbt':
                    res = this.KMBT(value);
                    break;
                case 'per':
                    res = this.per(value, num);
                    break;
                case 'sep':
                    res = this.sep(value);
                    break;
                default:
                    break;
            }
        }
        else {
            switch (func) {
                case 'limit':
                    res = this.limit(value, num);
                    break;
                default:
                    break;
            }
            res = value;
        }
        return res;
    };
    //将数字按分号显示
    StringFormat.prototype.sep = function (value) {
        var num = Math.round(value).toString();
        return num.replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
    };
    //将数字按分显示 00:00 显示 （ms制）
    StringFormat.prototype.time_m = function (value) {
        //todo
    };
    //将数字按秒显示 00:00:00 显示 （ms制）
    StringFormat.prototype.time_s = function (value) {
        //todo
    };
    //将数字按 0:00:00:000 显示 （ms制）
    StringFormat.prototype.time_ms = function (value) {
        //todo
    };
    //将时间戳显示为详细的内容
    StringFormat.prototype.timeStamp = function (value) {
        //todo
        return new Date(value).toString();
    };
    /** [value:int] 将取值0~1 变成 1~100,可以指定修饰的小数位数 */
    StringFormat.prototype.per = function (value, fd) {
        return Math.round(value * 100).toFixed(fd);
    };
    /** [value:int] 将取值变成整数 */
    StringFormat.prototype.int = function (value) {
        return Math.round(value);
    };
    /** [value:fix2]数值转换为小数*/
    StringFormat.prototype.fix = function (value, fd) {
        return value.toFixed(fd);
    };
    /** [value:limit3]字符串长度限制 */
    StringFormat.prototype.limit = function (value, count) {
        return value.substring(0, count);
    };
    /** 将数字缩短显示为KMBT单位 大写,目前只支持英文 */
    StringFormat.prototype.KMBT = function (value, lang) {
        if (lang === void 0) { lang = 'en'; }
        //10^4=万, 10^8=亿,10^12=兆,10^16=京，
        var counts = [1000, 1000000, 1000000000, 1000000000000];
        var units = ['', 'K', 'M', 'B', 'T'];
        switch (lang) {
            case C2FConst_1.C2FConst.LanguageKey.zh:
                //10^4=万, 10^8=亿,10^12=兆,10^16=京，
                var counts_1 = [10000, 100000000, 1000000000000, 10000000000000000];
                var units_1 = ['', '万', '亿', '兆', '京'];
                break;
            default:
                break;
        }
        return this.compressUnit(value, counts, units, 2);
    };
    //压缩任意单位的数字，后缀加上单位文字
    StringFormat.prototype.compressUnit = function (value, valueArr, unitArr, fixNum) {
        if (fixNum === void 0) { fixNum = 2; }
        var counts = valueArr;
        var units = unitArr;
        var res;
        var index;
        for (index = 0; index < counts.length; index++) {
            var e = counts[index];
            if (value < e) {
                if (index > 0) {
                    res = (value / counts[index - 1]).toFixed(fixNum);
                }
                else {
                    res = value.toFixed(0);
                }
                break;
            }
        }
        return res + units[index];
    };
    return StringFormat;
}());
/**格式化处理函数 */
exports.StringFormatFunction = new StringFormat();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vU3RyaW5nRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUU5Qzs7OztHQUlHO0FBQ0g7SUFBQTtJQXNJQSxDQUFDO0lBbklHLDJCQUFJLEdBQUosVUFBSyxLQUFzQixFQUFFLE1BQWM7UUFDdkMsSUFBSSxNQUFNLEtBQUssRUFBRTtZQUFFLE9BQU8sS0FBZSxDQUFDO1FBRTFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxPQUFPO1FBQzVDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQSxtQkFBbUI7UUFDbEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLGlCQUFpQjtRQUMzRCxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQW9CLEVBQUUsQ0FBQztRQUU5QixJQUFJLFVBQVU7WUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksU0FBUztZQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUMsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDMUIsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSyxLQUFLO29CQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUFDLE1BQU07Z0JBQ3pDLEtBQUssS0FBSztvQkFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQUMsTUFBTTtnQkFDOUMsS0FBSyxNQUFNO29CQUFF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RSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG5cbi8qKlxuICog5pWw5YC85qC85byP5YyW5Ye95pWwLCDpgJrov4for63kuYnop6PmnpDoh6rliqjorr7nva7lgLznmoTojIPlm7RcbiAqICAgICAvL+aVtOaVsFxuICogMTpkZWYoMCkvL+aYvuekuuS4gOS4qum7mOiupOWAvFxuICovXG5jbGFzcyBTdHJpbmdGb3JtYXQge1xuXG5cbiAgICBkZWFsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJycpIHJldHVybiB2YWx1ZSBhcyBzdHJpbmc7XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnRvTG93ZXJDYXNlKCkudHJpbSgpOy8v5LiN5Yy65YiG5aSn5bCPXG4gICAgICAgIGxldCBtYXRjaF9mdW5jID0gZm9ybWF0Lm1hdGNoKC9eW2EtenxBLVpdKy9naSk7Ly/ljLnphY3liLAgZm9ybWF0IOS4reeahCDlh73mlbDlkI1cbiAgICAgICAgbGV0IG1hdGNoX251bSA9IGZvcm1hdC5tYXRjaCgvXFxkKyQvZ2kpOyAgIC8v5Yy56YWN5YiwIGZvcm1hdCDkuK3nmoTlj4LmlbBcbiAgICAgICAgbGV0IGZ1bmM6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgbnVtOiBudW1iZXI7XG4gICAgICAgIGxldCByZXM6IG51bWJlciB8IHN0cmluZyA9ICcnO1xuXG4gICAgICAgIGlmIChtYXRjaF9mdW5jKSBmdW5jID0gbWF0Y2hfZnVuY1swXTtcbiAgICAgICAgaWYgKG1hdGNoX251bSkgbnVtID0gcGFyc2VJbnQobWF0Y2hfbnVtWzBdKTtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbnQnOiByZXMgPSB0aGlzLmludCh2YWx1ZSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpeCc6IHJlcyA9IHRoaXMuZml4KHZhbHVlLCBudW0pOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdrbWJ0JzogcmVzID0gdGhpcy5LTUJUKHZhbHVlKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGVyJzogcmVzID0gdGhpcy5wZXIodmFsdWUsIG51bSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlcCc6IHJlcyA9IHRoaXMuc2VwKHZhbHVlKTsgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGltaXQnOiByZXMgPSB0aGlzLmxpbWl0KHZhbHVlLCBudW0pOyBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzIGFzIHN0cmluZztcblxuXG4gICAgfVxuXG4gICAgLy/lsIbmlbDlrZfmjInliIblj7fmmL7npLpcbiAgICBwcml2YXRlIHNlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJvdW5kKHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gbnVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFxcXFxkKSg/PShcXFxcZHszfSkrJCknLCAnaWcnKSwgXCIkMSxcIik7XG4gICAgfVxuXG4gICAgLy/lsIbmlbDlrZfmjInliIbmmL7npLogMDA6MDAg5pi+56S6IO+8iG1z5Yi277yJXG4gICAgcHJpdmF0ZSB0aW1lX20odmFsdWU6IG51bWJlcikge1xuICAgICAgICAvL3RvZG9cbiAgICB9XG5cbiAgICAvL+WwhuaVsOWtl+aMieenkuaYvuekuiAwMDowMDowMCDmmL7npLog77yIbXPliLbvvIlcbiAgICBwcml2YXRlIHRpbWVfcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vdG9kb1xuICAgIH1cblxuICAgIC8v5bCG5pWw5a2X5oyJIDA6MDA6MDA6MDAwIOaYvuekuiDvvIhtc+WItu+8iVxuICAgIHByaXZhdGUgdGltZV9tcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vdG9kb1xuICAgIH1cblxuICAgIC8v5bCG5pe26Ze05oiz5pi+56S65Li66K+m57uG55qE5YaF5a65XG4gICAgcHJpdmF0ZSB0aW1lU3RhbXAodmFsdWU6IG51bWJlcikge1xuICAgICAgICAvL3RvZG9cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgLyoqIFt2YWx1ZTppbnRdIOWwhuWPluWAvDB+MSDlj5jmiJAgMX4xMDAs5Y+v5Lul5oyH5a6a5L+u6aWw55qE5bCP5pWw5L2N5pWwICovXG4gICAgcHJpdmF0ZSBwZXIodmFsdWU6IG51bWJlciwgZmQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9GaXhlZChmZCk7XG4gICAgfVxuXG4gICAgLyoqIFt2YWx1ZTppbnRdIOWwhuWPluWAvOWPmOaIkOaVtOaVsCAqL1xuICAgIHByaXZhdGUgaW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBbdmFsdWU6Zml4Ml3mlbDlgLzovazmjaLkuLrlsI/mlbAqL1xuICAgIHByaXZhdGUgZml4KHZhbHVlOiBudW1iZXIsIGZkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoZmQpXG4gICAgfVxuXG4gICAgLyoqIFt2YWx1ZTpsaW1pdDNd5a2X56ym5Liy6ZW/5bqm6ZmQ5Yi2ICovXG4gICAgcHJpdmF0ZSBsaW1pdCh2YWx1ZTogc3RyaW5nLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgY291bnQpO1xuICAgIH1cblxuICAgIC8qKiDlsIbmlbDlrZfnvKnnn63mmL7npLrkuLpLTUJU5Y2V5L2NIOWkp+WGmSznm67liY3lj6rmlK/mjIHoi7HmlocgKi9cbiAgICBwcml2YXRlIEtNQlQodmFsdWU6IG51bWJlciwgbGFuZzogc3RyaW5nID0gJ2VuJykge1xuICAgICAgICAvLzEwXjQ95LiHLCAxMF44PeS6vywxMF4xMj3lhYYsMTBeMTY95Lqs77yMXG4gICAgICAgIGxldCBjb3VudHMgPSBbMTAwMCwgMTAwMDAwMCwgMTAwMDAwMDAwMCwgMTAwMDAwMDAwMDAwMF07XG4gICAgICAgIGxldCB1bml0cyA9IFsnJywgJ0snLCAnTScsICdCJywgJ1QnXTtcblxuICAgICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgICAgIGNhc2UgQzJGQ29uc3QuTGFuZ3VhZ2VLZXkuemg6XG4gICAgICAgICAgICAgICAgLy8xMF40PeS4hywgMTBeOD3kur8sMTBeMTI95YWGLDEwXjE2PeS6rO+8jFxuICAgICAgICAgICAgICAgIGxldCBjb3VudHMgPSBbMTAwMDAsIDEwMDAwMDAwMCwgMTAwMDAwMDAwMDAwMCwgMTAwMDAwMDAwMDAwMDAwMDBdO1xuICAgICAgICAgICAgICAgIGxldCB1bml0cyA9IFsnJywgJ+S4hycsICfkur8nLCAn5YWGJywgJ+S6rCddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3NVbml0KHZhbHVlLCBjb3VudHMsIHVuaXRzLCAyKTtcbiAgICB9XG5cblxuICAgIC8v5Y6L57yp5Lu75oSP5Y2V5L2N55qE5pWw5a2X77yM5ZCO57yA5Yqg5LiK5Y2V5L2N5paH5a2XXG4gICAgcHJpdmF0ZSBjb21wcmVzc1VuaXQodmFsdWUsIHZhbHVlQXJyOiBudW1iZXJbXSwgdW5pdEFycjogc3RyaW5nW10sIGZpeE51bTogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgICAgIGxldCBjb3VudHMgPSB2YWx1ZUFycjtcbiAgICAgICAgbGV0IHVuaXRzID0gdW5pdEFycjtcbiAgICAgICAgbGV0IHJlczogc3RyaW5nO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGNvdW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBjb3VudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gKHZhbHVlIC8gY291bnRzW2luZGV4IC0gMV0pLnRvRml4ZWQoZml4TnVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMgKyB1bml0c1tpbmRleF07XG4gICAgfVxuXG5cblxufVxuXG4vKirmoLzlvI/ljJblpITnkIblh73mlbAgKi9cbmV4cG9ydCBsZXQgU3RyaW5nRm9ybWF0RnVuY3Rpb24gPSBuZXcgU3RyaW5nRm9ybWF0KCk7Il19