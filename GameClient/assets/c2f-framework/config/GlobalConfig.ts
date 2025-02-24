import { C2FConst } from "../define/C2FConst";

interface GGCfg {
    version: string;
    package: string;
    localDataKey: string;
    localDataIv: string;
    httpServer: string;
    httpTimeout: number;
    frameRate: number;
}
interface GLgCfg {
    file: string;
    type: string[];
    base: string;
    default: string;
}
interface GGCDef {
    config: GGCfg;
    language: GLgCfg;
}


/* 游戏配置解析，对应 framework/gameConfig.json 配置 */
export class GlobalConfig {
    /** 客户端版本号配置 */
    get version(): string {
        return this._data["config"]["version"];
    }
    /** 包名 */
    get package(): string {
        return this._data["config"]["package"];
    }
    /** 游戏每秒传输帧数 */
    get frameRate(): number {
        return this._data.config.frameRate;
    }
    /** 本地存储内容加密 key */
    get localDataKey(): string {
        return this._data.config.localDataKey;
    }
    /** 本地存储内容加密 iv */
    get localDataIv(): string {
        return this._data.config.localDataIv;
    }
    /** Http 服务器地址 */
    get httpServer(): string {
        return this._data.config.httpServer;
    }
    /** Http 请求超时时间 */
    get httpTimeout(): number {
        return this._data.config.httpTimeout;
    }

    /** 获取当前客户端支持的语言类型 */
    get language(): GLgCfg {
        return this._data.language;
    }
    /** 获取当前客户端支持的语言配置文件 */
    get languageCfgFile(): string {
        return this._data.language.file || "languageRes";
    }
    /** 获取当前客户端支持的语言列表 */
    get languageList(): string[] {
        return this._data.language.type || [];
    }
    /** 获取当前客户端支持的语言配置文件 */
    get languageDefault(): string {
        let defLG = this._data.language.default || C2FConst.LanguageKey.zh;
        if (defLG.length <= 0) {
            let code = cc.sys.languageCode;
            if (code.indexOf('zh_') >= 0 || code.indexOf('zh-') >= 0) {
                defLG = code.indexOf('tw') >= 0 ? C2FConst.LanguageKey.tw : C2FConst.LanguageKey.zh;
            } else {
                //TODO: 其他默认语言适配
                defLG = C2FConst.LanguageKey.zh;
            }
        }
        return defLG;
    }

    /** 获取当前客户端编辑模式下所用语言 */
    get lanuageBase(): string {
        let base = this._data.language.base || C2FConst.LanguageKey.zh;
        return base;
    }

    /** 游戏配置数据 */
    private _data: GGCDef = null;
    public get data(): any {
        return this._data;
    }

    constructor(config: any) {
        let data = config.json;
        this._data = Object.freeze(data);

        c2f.log.logConfig(this._data, "游戏配置");
    }
}