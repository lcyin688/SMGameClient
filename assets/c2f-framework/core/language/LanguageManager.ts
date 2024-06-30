import { C2FConst } from "../../define/C2FConst";
import { EventDispatcher } from "../event/EventDispatcher";
import { LanguageData } from "./LanguageData";
import { words } from "../../game/words";

export enum LanguageEvent {
    /** 语种变化事件 */
    CHANGE = 'LanguageEvent.CHANGE',
    /** 语种资源释放事件 */
    RELEASE_RES = "LanguageEvent.RELEASE_RES"
}


class LanguageManager extends EventDispatcher {

    /** 多语言配置 */
    private mulLGRes: any;

    constructor() {
        super();
        this.mulLGRes = {};
    }

    /** 获取当前语种 */
    public get current(): string {
        return LanguageData.current;
    }

    /** 获取支持的多语种数组 */
    public get languages(): string[] {
        if (c2f.config.game) {
            return c2f.config.game.languageList;
        } else {
            return [];
        }
    }

    /** 当前语言是否存在 */
    public isExist(lang: string): boolean {
        return this.languages.indexOf(lang) > -1;
    }

    /**
     * 根据data获取对应语种的字符
     * @param labId 
     * @param arr 
     */
    public getLangByID(labId: number, param: string = ''): string {
        let value = LanguageData.getLangByID(labId, param);
        return value;
    }

    /**
     * 根据data获取对应语种的字符
     * @param labId 
     * @param arr 
     */
    public words(id: number, ...params): string {
        let strParam = '';
        for (let one of params) {
            if (strParam.length <= 0) {
                strParam = '' + one;
            } else {
                strParam += '|' + one;
            }
        }
        return LanguageData.getLangByID(id, strParam);
    }

    /** 初始化语言设置 */
    public async initLanguage(endCb: Function) {
        if (this.languages.length > 0) {
            let lgSet = c2f.storage.getPlainItem(C2FConst.localLGSet, null);
            if (lgSet) {
                LanguageData.current = lgSet;
            } else {
                LanguageData.current = c2f.config.game.languageDefault;
            }
            await this.resetCurWords();
            this.loadLGResJson(endCb);
        } else {
            endCb && endCb();
        }
    }

    /** 加载多语言配置文件 */
    public loadLGResJson(endCb: Function) {
        let url = 'statistic/' + c2f.config.game.languageCfgFile;
        c2f.res.load(cc.resources.name, url, cc.JsonAsset, (err: Error | null, asset: cc.JsonAsset) => {
            if (err) {
                cc.error(err.message);
            } else {
                this.mulLGRes = asset.json;
            }
            c2f.res.release(url, cc.JsonAsset, cc.resources.name);
            endCb && endCb();
        });
    }

    /** 根据uuid获得多语言对应ID */
    public getLGResUuid(uuid: string) {
        let retUuid = null;
        if (this.languages.length > 0) {
            let find = this.mulLGRes[uuid];
            if (find && find[this.current]) {
                retUuid = find[this.current];
            }
        }
        return retUuid;
    }

    /** 重置程序文本 */
    public async resetCurWords() {
        if (this.current == C2FConst.LanguageKey.zh) {
            LanguageData.data = words;
        } else {
            let bundleName = C2FConst.mulBundlePre + this.current;
            let url = `ab:${bundleName}/words`;
            let assetRes: cc.TextAsset = await c2f.res.loadOne(url, cc.TextAsset);
            if (assetRes && assetRes.text) {
                LanguageData.data = eval(assetRes.text);
            }
            c2f.res.release(url, cc.TextAsset);
        }
    }

    /** 静态成员 */
    private static _instance: LanguageManager = null
    public static getInstance(): LanguageManager {
        if (!this._instance) {
            this._instance = new LanguageManager();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        language: LanguageManager;
    }
}

c2f.language = LanguageManager.getInstance();
export { };