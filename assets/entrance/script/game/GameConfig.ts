import { GameConsts } from "../../../Script/game/GameConsts";

enum CfgType {
    JSON = 1,
    CSV = 2
}

class GameConfig {
    /** 本地配置 */
    private cfgs: Map<string, any> = null;
    /** 配置文件类型 */
    private type: CfgType = null;
    /** 活动语言表 */
    private actLanguage: Map<number, string> = null;

    constructor() {
        this.cfgs = new Map();
    }

    //单例
    private static _ins: GameConfig = null;
    static get ins() {
        if (!GameConfig._ins) {
            GameConfig._ins = new GameConfig();
        }
        return GameConfig._ins;
    }

    /** 释放 */
    public clear() {
        //this.cfgs.clear();//暂时不释放
    }

    /** 获得某表数据 */
    public getCfgData(tabName: string): any {
        let result: any = null;
        if (this.cfgs) {
            result = this.cfgs.get(tabName);
        }
        return result;
    }

    /** 是否为JSON */
    public isJsonCfg() {
        return this.type == CfgType.JSON;
    }

    /** 设置活动语言表配置 */
    public setActLanguageTab(data: any) {

    }
}

declare global {
    interface ISZG {
        cfg: GameConfig;
    }
}

szg.cfg = GameConfig.ins;
export { };