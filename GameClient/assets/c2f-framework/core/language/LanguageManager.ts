import { GameConsts } from '../../../Script/game/GameConsts';
import { GameHelper } from '../../../Script/game/GameHelper';
import { C2FConst } from '../../define/C2FConst';
import { EventDispatcher } from '../event/EventDispatcher';
import { LanguageData } from './LanguageData';

export enum LanguageEvent {
    /** 语种变化事件 */
    CHANGE = 'LanguageEvent.CHANGE',
    /** 语种资源释放事件 */
    RELEASE_RES = 'LanguageEvent.RELEASE_RES',
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
    public getDefaultLangCode() {
        return C2FConst.LanguageKey.zh;
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
    public getLangByID(labId: string, param: string = ''): string {
        let value = LanguageData.getLangByID(labId, param);
        return value;
    }

    /**
     * 根据data获取对应语种的字符
     * @param labId
     * @param arr
     */
    public words(id: string, ...params): string {
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

    /**
     * 切换语言
     * @param langCode 语言代码
     */
    public async switchLang(langCode: C2FConst.LanguageKey): Promise<void> {
        if (LanguageData.current == langCode) {
            return;
        }
        this.setLangCode(langCode);
        //重新加载所有语言模块
        await this.loadLangJsonModule();
        //重新切到大厅刷新
        GameHelper.loadBundle(GameConsts.Bundle.entrance).then((UIID) => {
            c2f.gui.open(UIID.GameLogo);
        });
    }
    /**
     * 设置语言代码
     * @param langCode 不传则使用上次缓存或预设语言
     */
    public setLangCode(langCode?: C2FConst.LanguageKey, isSave = true): void {
        c2f.log.log(`LangManager setLangCode, cc.sys.languageCode: ${cc.sys.languageCode}, langCode: ${langCode}`);
        if (langCode) {
            LanguageData.current = langCode;
        } else {
            let lgSet = c2f.storage.getPlainItem(C2FConst.localLGSet, null);
            if (lgSet) {
                //如果不存在就走默认
                if (lgSet in C2FConst.LanguageKey) {
                    LanguageData.current = lgSet;
                } else {
                    lgSet = this.getDefaultLangCode();
                }
            } else {
                LanguageData.current = c2f.config.game.languageDefault;
            }
        }
        if (isSave) {
            c2f.storage.setPlainItem(C2FConst.localLGSet, LanguageData.current);
        }
    }
    /** 初始化语言设置 */
    public async initLanguage(endCb: Function) {
        if (this.languages.length > 0) {
            this.setLangCode();
            await this.loadLangJsonModule();
            endCb && endCb();
            // this.loadLGResJson(endCb);
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

    /** 加载多语言Json */
    public async loadLangJsonModule(bundleName: string = GameConsts.Bundle.framework) {
        let url = `ab:${bundleName}/config/lang/${this.current}/words`;
        const asset: cc.JsonAsset = await c2f.res.loadOne(url, cc.JsonAsset);
        if (asset && asset.json) {
            const langJson: Object = asset.json;
            const langMap = new Map<string, string>();
            for (const key in langJson) {
                langMap.set(key, langJson[key]);
            }
            LanguageData.data = langMap;
        } else {
            const errMsg = `LangManager loadModule, loadAsset err, url: ${url}`;
            cc.error(errMsg);
            throw new Error(errMsg);
        }
    }

    /** 静态成员 */
    private static _instance: LanguageManager = null;
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
export {};
