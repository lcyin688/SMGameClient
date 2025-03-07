/** 游戏全域级工具类·不可引入子包文件 */

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

    /**设置物理引擎状态 */
    static setPhysics(state: boolean) {
        // let physicsManager = cc.director.getPhysicsManager();
        // physicsManager.enabled = state;
        // physicsManager.debugDrawFlags = 0;
        // cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
        // physicsManager.enabledAccumulator = true

        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;


        cc.director.getPhysicsManager().enabled = state;  
        cc.director.getCollisionManager().enabled = state;


    }





}
