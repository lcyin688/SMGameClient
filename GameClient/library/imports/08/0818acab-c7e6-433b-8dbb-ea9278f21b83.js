"use strict";
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