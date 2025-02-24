
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/GameCalculator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0818ayrx+ZDO4276pJ48huD', 'GameCalculator');
// Script/game/GameCalculator.ts

"use strict";
/** 计算器：
 * 1、约定规则计算
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCalc = void 0;
var GameConsts_1 = require("./GameConsts");
var GameCalc = /** @class */ (function () {
    function GameCalc() {
    }
    /** 先取最多两位小数 在缩写数字 */
    GameCalc.getShortNumFix = function (num) {
        return this.getShortNum(Math.floor(num * 100) / 100);
    };
    /** 取整在缩写 */
    GameCalc.getShortNumInteger = function (num, len) {
        if (len === void 0) { len = 7; }
        return this.getShortNum(Math.floor(num), len);
    };
    /** 获得缩写数字
     * @param num 目标数字
     * @param len 最大显示位，目标小于该位时显示全写，大于该位时显示简写
     */
    GameCalc.getShortNum = function (num, len) {
        if (len === void 0) { len = 6; }
        var rule = GameConsts_1.GameConsts.ShortNum_CN;
        var dstNum = num;
        var maxVal = Math.pow(10, len);
        if (dstNum >= 0 && !isNaN(dstNum) && dstNum >= maxVal) {
            var matched = false;
            for (var i = 0; i < rule.length; ++i) {
                var value = rule[i].value;
                if (dstNum >= value) {
                    matched = true;
                    var short = dstNum / value;
                    //整数位数
                    var intCnt = Math.floor(short).toString().length;
                    //小数位数
                    var decimal = rule[i].fixNum - intCnt;
                    //小数值·保留N位小数，小数末尾为舍弃
                    var arrNum = short.toString().split('.');
                    if (arrNum.length > 1) {
                        var decValue = '0.' + arrNum[1].substring(0, decimal);
                        var decVLen = decValue.length;
                        while (decVLen > 0 && decValue[decVLen - 1] == '0') {
                            decValue = decValue.substring(0, decVLen - 1);
                            decVLen = decValue.length;
                        }
                        dstNum = Math.floor(short).toString();
                        if (decValue.length > 2) {
                            dstNum += decValue.substring(1);
                        }
                    }
                    else {
                        dstNum = short;
                    }
                    dstNum = dstNum + c2f.language.words(rule[i].txt);
                }
            }
        }
        return "" + dstNum;
    };
    /**价格(分)转化元 */
    GameCalc.getFomatPrice = function (priceNum) {
        var num = priceNum / 100;
        return num;
    };
    return GameCalc;
}());
exports.GameCalc = GameCalc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9HYW1lQ2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHOzs7QUFFSCwyQ0FBMEM7QUFHMUM7SUFBQTtJQXVEQSxDQUFDO0lBdERHLHFCQUFxQjtJQUNkLHVCQUFjLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCxZQUFZO0lBQ0wsMkJBQWtCLEdBQXpCLFVBQTBCLEdBQVcsRUFBRSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxPQUFlO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZTtRQUFmLG9CQUFBLEVBQUEsT0FBZTtRQUMzQyxJQUFNLElBQUksR0FBRyx1QkFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBUSxHQUFHLENBQUM7UUFDdEIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDbkQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMxQixJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7b0JBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsTUFBTTtvQkFDTixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDakQsTUFBTTtvQkFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDdEMsb0JBQW9CO29CQUNwQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3RELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQzlCLE9BQU8sT0FBTyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTs0QkFDaEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7eUJBQzdCO3dCQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN0QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNyQixNQUFNLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDbkM7cUJBQ0o7eUJBQU07d0JBQ0gsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JEO2FBQ0o7U0FDSjtRQUNELE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0QsY0FBYztJQUNQLHNCQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ2pDLElBQUksR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDekIsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBQ0wsZUFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog6K6h566X5Zmo77yaXG4gKiAx44CB57qm5a6a6KeE5YiZ6K6h566XXG4gKiBcbiAqL1xuXG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4vR2FtZUNvbnN0c1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2FsYyB7XG4gICAgLyoqIOWFiOWPluacgOWkmuS4pOS9jeWwj+aVsCDlnKjnvKnlhpnmlbDlrZcgKi9cbiAgICBzdGF0aWMgZ2V0U2hvcnROdW1GaXgobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaG9ydE51bShNYXRoLmZsb29yKG51bSAqIDEwMCkgLyAxMDApXG4gICAgfVxuICAgIC8qKiDlj5bmlbTlnKjnvKnlhpkgKi9cbiAgICBzdGF0aWMgZ2V0U2hvcnROdW1JbnRlZ2VyKG51bTogbnVtYmVyLCBsZW46IG51bWJlciA9IDcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaG9ydE51bShNYXRoLmZsb29yKG51bSksIGxlbilcbiAgICB9XG4gICAgLyoqIOiOt+W+l+e8qeWGmeaVsOWtl1xuICAgICAqIEBwYXJhbSBudW0g55uu5qCH5pWw5a2XXG4gICAgICogQHBhcmFtIGxlbiDmnIDlpKfmmL7npLrkvY3vvIznm67moIflsI/kuo7or6XkvY3ml7bmmL7npLrlhajlhpnvvIzlpKfkuo7or6XkvY3ml7bmmL7npLrnroDlhpkgXG4gICAgICovXG4gICAgc3RhdGljIGdldFNob3J0TnVtKG51bTogbnVtYmVyLCBsZW46IG51bWJlciA9IDYpIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IEdhbWVDb25zdHMuU2hvcnROdW1fQ047XG4gICAgICAgIGxldCBkc3ROdW06IGFueSA9IG51bTtcbiAgICAgICAgbGV0IG1heFZhbDogbnVtYmVyID0gTWF0aC5wb3coMTAsIGxlbik7XG4gICAgICAgIGlmIChkc3ROdW0gPj0gMCAmJiAhaXNOYU4oZHN0TnVtKSAmJiBkc3ROdW0gPj0gbWF4VmFsKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcnVsZVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZHN0TnVtID49IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBkc3ROdW0gLyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy/mlbTmlbDkvY3mlbBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludENudCA9IE1hdGguZmxvb3Ioc2hvcnQpLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAvL+Wwj+aVsOS9jeaVsFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHJ1bGVbaV0uZml4TnVtIC0gaW50Q250O1xuICAgICAgICAgICAgICAgICAgICAvL+Wwj+aVsOWAvMK35L+d55WZTuS9jeWwj+aVsO+8jOWwj+aVsOacq+WwvuS4uuiIjeW8g1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyTnVtID0gc2hvcnQudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTnVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWNWYWx1ZSA9ICcwLicgKyBhcnJOdW1bMV0uc3Vic3RyaW5nKDAsIGRlY2ltYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlY1ZMZW4gPSBkZWNWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZGVjVkxlbiA+IDAgJiYgZGVjVmFsdWVbZGVjVkxlbiAtIDFdID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY1ZhbHVlID0gZGVjVmFsdWUuc3Vic3RyaW5nKDAsIGRlY1ZMZW4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNWTGVuID0gZGVjVmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0TnVtID0gTWF0aC5mbG9vcihzaG9ydCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWNWYWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0TnVtICs9IGRlY1ZhbHVlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRzdE51bSA9IHNob3J0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRzdE51bSA9IGRzdE51bSArIGMyZi5sYW5ndWFnZS53b3JkcyhydWxlW2ldLnR4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiICsgZHN0TnVtO1xuICAgIH1cbiAgICAvKirku7fmoLwo5YiGKei9rOWMluWFgyAqL1xuICAgIHN0YXRpYyBnZXRGb21hdFByaWNlKHByaWNlTnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG51bSA9IHByaWNlTnVtIC8gMTAwO1xuICAgICAgICByZXR1cm4gbnVtXG4gICAgfVxufVxuIl19