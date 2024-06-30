/** 游戏全域级工具类·不可引入子包文件 */

import { GMConf } from "../config/GMConf";
import { GameCalc } from "./GameCalculator";
import { GameConsts } from "./GameConsts";
import { UIPa } from "./UIParam";

export class GameHelper {



    /** 加载子包，并且将子包中的UI配置加入界面管理配置中 */
    static async loadBundle(bundle: GameConsts.Bundle | string) {
        await c2f.res.loadBundle(bundle);
        let fileName = c2f.utils.str.uppercaseFirstLetter(bundle);
        let viewDt = {};
        viewDt[`${fileName}UI`] = null;
        viewDt[`${fileName}View`] = null;
        viewDt = require(`${fileName}View`);
        c2f.gui.addViewList(viewDt[`${fileName}View`]);
        return viewDt[`${fileName}UI`];
    }

    /** 版本比较:verA - verB
     * = 0: 版本号相同
     * > 0: verA版本更高
     * < 0: verB版本更高
     */
    static compareVersion(verA: string, verB: string) {
        let vA = verA.split('.');
        let vB = verB.split('.');
        for (let i = 0; i < vA.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i] || '0');
            if (a === b) {
                continue;
            } else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        } else {
            return 0;
        }
    }

    /** 是否为H5游戏 */
    static isH5Game() {
        let isH5 = false;
        if (CC_BUILD) {
            switch (cc.sys.platform) {
                case cc.sys.MOBILE_BROWSER:
                case cc.sys.DESKTOP_BROWSER:
                    isH5 = true;
                    break;
            }
        } else {
            isH5 = false;
        }
        return isH5;
    }

    /**一星=白色，二星=绿色，三星=蓝色，四星=紫色，五星=橙色，六星—十星=红 */
    static starConversionQuality(star: number): number {
        let data = star
        if (star > 5) {
            data = 6
        }
        return data
    }
    /** map to object */
    static protoMapToObject(map: Map<any, any>) {
        if (map == null) {
            return {}
        }
        if (map.forEach == null) {
            return map
        }
        let obj = {};
        if (map.forEach) {
            map.forEach(function (val, id) {
                obj[id] = val;
            });
        }
        return obj;
    }

    // array To Object
    static protoArrayToObject(array: number[]) {
        let obj = {};
        if (array != null && array.length > 0) {
            for (let i = 0; i < array.length; ++i) {
                obj[array[i]] = true;
            }
        }
        return obj;
    }

    /**根据服务器返回组装成GetRewar（获得奖励）界面需要的数据 */
    static getRewardData(rewards: msg.Rewards, isMerge: boolean = true) {
        let dataArr = [];
        if (!rewards) {
            return dataArr;
        }
        let dataMap: Map<number, UIPa.AnyItemPa> = new Map();
        if (rewards.Items && rewards.Items.length > 0) {//道具
            for (let i = 0; i < rewards.Items.length; i++) {
                let item = rewards.Items[i];
                if (isMerge) {
                    if (dataMap.get(item.Id)) {
                        let num = dataMap.get(item.Id).n + item.Num;
                        dataMap.get(item.Id).n = num;
                    } else {
                        dataMap.set(item.Id, { id: item.Id, n: item.Num });
                    }

                } else {
                    dataArr.push({ id: item.Id, n: item.Num });
                }
            }
        }
        if (rewards.Seqs && rewards.Seqs.length > 0) {//装备
            for (let i = 0; i < rewards.Seqs.length; i++) {
                let euqip = rewards.Seqs[i];
                dataMap.set(euqip.Seq, { id: euqip.Id, n: 1, seq: euqip.Seq });
                dataArr.push({ id: euqip.Id, n: 1, seq: euqip.Seq });
            }
        }
        // 按id排序
        if (isMerge) {
            dataArr = Array.from(dataMap.values());
            dataArr.sort((a, b) => {
                return a.id - b.id
            })
        }
        return dataArr;
    }

    /** IDN->idn */
    static convertIdNToidn(arrIdN: { Id?: number, N?: number }[]) {
        let ret: csv.Idn_NN[] = [];
        for (let one of arrIdN) {
            ret.push({ id: one.Id, n: one.N });
        }
        return ret;
    }
    /** IdNum->idn */
    static convertIdNumToidn(arrIdNum: { Id?: number, Num?: number }[]) {
        let ret: csv.Idn_NN[] = [];
        for (let one of arrIdNum) {
            ret.push({ id: one.Id, n: one.Num });
        }
        return ret;
    }


    /** 数字转大写 */
    static conversionUppercase(num: number): string {
        return c2f.language.words(2400 + num)
    }

    /** 周几数字转大写 */
    static conversionUppercaseWeek(num: number): string {
        let str = ""
        if (num <= 6) {
            str = c2f.language.words(2400 + num)
        } else {
            str = c2f.language.words(30040)
        }
        return str
    }

    /**根据解锁条件按转化为文本 */
    static getStatusWords(startId: number, val: number) {
        let str: string = "";
        switch (startId) {
            case GameConsts.OPenStatus.clearanceNum:
                str = c2f.language.words(10019).format(val);
                break;
            case GameConsts.OPenStatus.totalCharge:

                break;
            case GameConsts.OPenStatus.openDay:

                break;
            case GameConsts.OPenStatus.playerLv:
                str = c2f.language.words(10018).format(val);
                break;

            default:
                break;
        }
        return str;
    }
    /**属性数组获取到文本 */
    static getAttributeStrByArr(data: csv.Idn_NN[], isShort: boolean = true) {
        let str = ""
        for (let c = 0; c < data.length; c++) {
            let item = data[c]
            let cfgItem = GMConf.attributeConfData(item.id)
            let strOne = GameHelper.getAttributeStr(item.id, item.n, isShort)
            let strItem = cfgItem.name + "<color=#42D295>+" + strOne + "</color>"
            str += str == "" ? strItem : " " + strItem
        }
        return str
    }


    /** 属性不一样需求的文字表现可能不同 */
    static getAttributeStr(attrId: number, outValue: number, isShort: boolean = true): string {
        let cfgItem = GMConf.attributeConfData(attrId)
        let vType = cfgItem.valueType
        if (vType == GameConsts.numValueType.integer) {
            return isShort ? GameCalc.getShortNumInteger(outValue) : Math.floor(outValue).toString()
        } else if (vType == GameConsts.numValueType.percentage) {
            return GameCalc.convPercentage(outValue / 10000)
        } else {
            return isShort ? GameCalc.getShortNumFix(outValue) : Math.floor(outValue).toString()
        }
    }

    /** 服务器名称 */
    static getServerStr(svrId: number): string {
        let svrInfo = szg.entrance.getServerUnitById(svrId);
        let str = ""
        if (svrInfo) {
            str = c2f.language.words(25007).format(svrInfo.text);
        } else {
            str = c2f.language.words(25007).format(`S${svrId}`)
        }
        return str
    }
    /**获取数组里边有几个相同的数字 */
    static getArrHaveCount(arr: number[], num: number) {
        let count = 0
        arr.forEach(v => {
            if (v == num) {
                count++
            }
        });
        return count
    }




}
