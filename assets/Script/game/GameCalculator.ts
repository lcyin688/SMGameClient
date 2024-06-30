/** 计算器：
 * 1、约定规则计算
 * 
 */

import { GMConf } from "../config/GMConf";
import { GameConsts } from "./GameConsts";


export class GameCalc {

    /** 获得服务器唯一ID */
    static getServerSeq(areaId: number, svrId: number) {
        return areaId * 10000 + svrId;
    }

    /** 解析出服务器ID和大区ID */
    static getSvrIdAreaBySeq(seq: number) {
        let areaId = Math.floor(seq / 10000);
        let svrId = Math.floor(seq % 10000);
        return { areaId, svrId };
    }

    /** 根据英雄ID和阶位获得唯一ID */
    static getHeroStepKey(heroId: number, step: number) {
        return heroId + `0${step}`;
    }

    /** 根据关卡ID获得章节ID和关卡序号 */
    static getStageChaptionById(flag: string) {
        let subStr = flag.split('|');
        if (subStr.length > 1) {
            return { chap: Number(subStr[0]), stage: Number(subStr[1]) };
        } else {
            return { chap: 0, stage: 0 };
        }
    }

    /** 战斗系统:生成posKey */
    static genPosKey(group: number, pos: number) {
        return group * 100 + pos;
    }

    /** 战斗系统:解析posKey */
    static getGroupPos(posKey: number) {
        let group = Math.floor(posKey / 100);
        let pos = (posKey % 100) % 10;
        return { group, pos };
    }

    //计算英雄实际属性{ [key: 属性ID]: 属性值 }
    static calculatorHeroAttr(props: Map<number, number>) {
        let total: { [key: number]: number } = {};
        let percent: { [key: number]: number } = {};
        //NOTICE:百分比属性id，和表中定义保持一致
        let pctAddieId = [1000, 1100, 1200, 1300];
        props.forEach((v, k) => {
            if (pctAddieId.indexOf(k) < 0) {
                total[k] = v;
            } else {
                percent[k] = v;
            }
        })
        for (let one of pctAddieId) {
            if (!percent[one]) {
                continue;
            }
            let baseKey = one / 100;
            let baseValue = total[baseKey];
            if (!baseValue || baseValue <= 0) {
                continue;
            }
            let pctAddie = baseValue * percent[one] / 10000;
            total[baseKey] = baseValue + pctAddie;
        }
        return total;
    }

    //汇总属性：参数[{id: xx, val: xx}]
    static totalProps(...args: csv.Idn_NN[][]) {
        let total: csv.Idn_NN[] = [];
        let all: csv.Idn_NN[] = [];
        for (let one of args) {
            all = all.concat(one);
        }
        for (let i = 0; i < all.length; i++) {
            let find = total.findIndex((unit) => {
                return unit.id == all[i].id
            });
            if (find >= 0) {
                total[find].n += all[i].n;
            } else {
                total.push({
                    id: all[i].id,
                    n: all[i].n
                });
            }
        }
        return total;
    }

    //融合属性对象: 参数类型{id1:val1, id2:val2}
    static mergePropsObject(obj1: { [key: number]: number }, obj2: { [key: number]: number }) {
        if (!obj1 && !obj2) {
            return obj1 || obj2;
        }
        let obj = {}
        for (let k in obj1) {
            obj[k] = obj1[k]
        }
        for (let k in obj2) {
            if (obj.hasOwnProperty(k)) {
                obj[k] += obj2[k];
            } else {
                obj[k] = obj2[k]
            }
        }
        return obj;
    }

    /** 计数器最大值ID */
    static getCouterMaxId(id: number) {
        let maxId = id + 10000000;
        return maxId;
    }

    /** 星级转换成品质规则：
     * 一星=白色，二星=绿色，三星=蓝色，四星=紫色，五星=橙色，六星—十星=红 
     * */
    static starToQuality(star: number): number {
        let data = star
        if (star > 5) {
            data = 6
        }
        return data
    }

    /**
     * 获得英雄置换ID
     * @param camp 阵营id
     * @param star 星级
     */
    static getHeroChangeId(camp: number, star: number) {
        return camp * 100 + star;
    }

    /** 英雄升星索引ID */
    static getSuperHeroStarId(heroId: number, star: number) {
        return heroId * 100 + star;
    }

    /** 英雄升阶索引ID */
    static getSuperHeroAttId(heroId: number, step: number) {
        return heroId * 100 + step;
    }
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

    /** 合并对象 
     * @param arr1 对象数组1
     * @param arr2 对象数组2
     * @param cKey 比较key
     * @param vKey 叠加key
    */
    static mergeArrObj(arr1: any[], arr2: any[], cKey: string, vKey: string) {
        let total = Object.copyDepth(arr1);
        for (let one of arr2) {
            let find = total.find((a) => { return a[cKey] == one[cKey] });
            if (find) {
                find[vKey] += one[vKey];
            } else {
                total.push(one);
            }
        }
        return total;
    }

    /** 对象值倍数放大  
     * @param arr1 对象数组1
     * @param arr2 对象数组2
     * @param cKey 比较key
     * @param vKey 叠加key
    */
    static multipleArrObj(arr: any[], rate: number, vKey: string) {
        let result = Object.copyDepth(arr);
        for (let one of result) {
            if (one.hasOwnProperty(vKey)) {
                one[vKey] = one[vKey] * rate;
            }
        }
        return result;
    }

    /** 合并IDN */
    static mergeArrIDN<T>(arr1: T[], arr2: T[]): T[] {
        return this.mergeArrObj(arr1, arr2, 'id', 'n');
    }

    /** 属性倍数 */
    static multipleArrIDN<T>(arrIDN: T[], rate: number): T[] {
        return this.multipleArrObj(arrIDN, rate, 'n');
    }

    /**根据塔的类型以及层数获得ID */
    static getTowerId(type: number, storey: number) {
        return type * 100000 + storey;
    }

    /**根据塔的类型以及ID获得层数 */
    static getTowerNum(type: number, id: number) {
        return id % 100000;
    }

    /** 英雄回退最小星级 */
    static heroBackMinStar() {
        return 6;
    }

    /** 法宝升级消耗ID */
    static treasureLvCostID(lv: number, color: number) {
        return color * 1000 + lv;
    }

    /**是否是英雄 */
    static isHero(id: number) {
        return Math.floor(id / 100000) == 2;
    }

    /** 是否是神兽 */
    static isDBeast(id: number) {
        return Math.floor(id / 100000) == 6;
    }

    /** 是否为替身娃娃 */
    static isSubstitute(id: number) {
        let ret = false;
        const itemConf: csv.ItemDef = GMConf.itemConfData(id);
        if (itemConf) {
            ret = Math.floor(itemConf.type / 1000) == 3;
        }
        return ret;
    }

    /**转换成% 比展示 */
    static convPercentage(num: number) {
        if (num > 0) {
            let numTemp = Math.round(num * 10000) / 100
            return numTemp + "%"
        } else {
            return "0%"
        }
        // return num > 0 ? (num * 100).toFixed(count) + "%" : "0%"
    }

    /** 通过道具类型获得其所属阵营和星级 */
    static getCampStarByType(type: number) {
        let value = type % 100;
        let camp = Math.floor(value / 10);
        let star = value % 10;
        return { camp, star };
    }

    /**当前物品类型
     * id:物品ID 自己按照需要添加
     */
    static getItemType(id: number): GameConsts.ItemLabel {
        const itemConf: csv.ItemDef = GMConf.itemConfData(id);
        if (!itemConf) {
            cc.warn("don't find item in table: id:", id);
            return;
        }
        let typ = itemConf.type
        if ([100, 101, 102, 103, 108].includes(typ)) {
            return GameConsts.ItemLabel.item
        } else if ([104, 105, 106, 107].includes(typ)) {
            return GameConsts.ItemLabel.drawing
        } else if ([4000, 4001, 4002, 4003].includes(typ)) {
            return GameConsts.ItemLabel.equip
        } else if ([4007].includes(typ)) {
            return GameConsts.ItemLabel.talisman
        }
    }

    /**根据fb的类型以及层数获得ID(资源副本) */
    static getDailyId(type: number, storey: number) {
        return type * 1000 + storey;
    }

    /** 神器的培养ID */
    static getArtifactGrowId(heroId: number, lv: number) {
        return heroId * 100 + lv;
    }

    /** 神兽升星ID */
    static getDBeastStarId(id: number, star: number) {
        return id * 100 + star;
    }
    /**配置表万分比数据转化 */
    static getPercnetNum(value: number) {
        let num = value / 10000;
        return num
    }
    /**价格(分)转化仙缘 */
    static getXianYuanByPrice(priceNum: number) {
        let num = priceNum / 10;
        return num
    }
    /**价格(分)转化元 */
    static getFomatPrice(priceNum: number) {
        let num = priceNum / 100;
        return num
    }
}
