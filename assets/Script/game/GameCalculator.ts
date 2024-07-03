/** 计算器：
 * 1、约定规则计算
 * 
 */

import { GMConf } from "../config/GMConf";
import { GameConsts } from "./GameConsts";


export class GameCalc {
    /** 先取最多两位小数 在缩写数字 */
    static getShortNumFix(num: number): string {
        return this.getShortNum(Math.floor(num * 100) / 100)
    }
    /** 取整在缩写 */
    static getShortNumInteger(num: number, len: number = 7): string {
        return this.getShortNum(Math.floor(num), len)
    }
    /** 获得缩写数字
     * @param num 目标数字
     * @param len 最大显示位，目标小于该位时显示全写，大于该位时显示简写 
     */
    static getShortNum(num: number, len: number = 6) {
        const rule = GameConsts.ShortNum_CN;
        let dstNum: any = num;
        let maxVal: number = Math.pow(10, len);
        if (dstNum >= 0 && !isNaN(dstNum) && dstNum >= maxVal) {
            let matched = false;
            for (let i = 0; i < rule.length; ++i) {
                let value = rule[i].value;
                if (dstNum >= value) {
                    matched = true;
                    let short = dstNum / value;
                    //整数位数
                    let intCnt = Math.floor(short).toString().length;
                    //小数位数
                    let decimal = rule[i].fixNum - intCnt;
                    //小数值·保留N位小数，小数末尾为舍弃
                    let arrNum = short.toString().split('.');
                    if (arrNum.length > 1) {
                        let decValue = '0.' + arrNum[1].substring(0, decimal);
                        let decVLen = decValue.length;
                        while (decVLen > 0 && decValue[decVLen - 1] == '0') {
                            decValue = decValue.substring(0, decVLen - 1);
                            decVLen = decValue.length;
                        }
                        dstNum = Math.floor(short).toString();
                        if (decValue.length > 2) {
                            dstNum += decValue.substring(1);
                        }
                    } else {
                        dstNum = short;
                    }
                    dstNum = dstNum + c2f.language.words(rule[i].txt);
                }
            }
        }
        return "" + dstNum;
    }
    /**价格(分)转化元 */
    static getFomatPrice(priceNum: number) {
        let num = priceNum / 100;
        return num
    }
}
