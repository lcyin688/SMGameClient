import { C2FConst } from "../define/C2FConst";
import { GlobalConfig } from "./GlobalConfig";
import { WebQueryConfig } from "./WebQueryConfig";

/** 游戏配置静态访问类 */
class C2FConfig {
    /** 游戏配置数据，版本号、支持语种等数据 */
    public game!: GlobalConfig;
    /** 浏览器查询参数 */
    private query!: WebQueryConfig;

    constructor() {
        this.query = new WebQueryConfig();
    }

    public async initCfg() {
        let configUrl = c2f.res.getFullUrl(C2FConst.fwBundleName, 'gameCfg');
        let cfg = await c2f.res.loadOne(configUrl, cc.JsonAsset);
        this.game = new GlobalConfig(cfg);
        c2f.res.release(configUrl, cc.JsonAsset);
        //初始化帧率
        let localRate = c2f.storage.getPlainItem(C2FConst.localFrameSet, this.game.frameRate);
        let realRate = Number(localRate) || this.game.frameRate;
        cc.game.setFrameRate(realRate);
        //初始化加密key
        c2f.storage.init(this.game.localDataKey, this.game.localDataKey);
    }

    /** 静态成员 */
    private static _instance: C2FConfig = null
    public static getInstance(): C2FConfig {
        if (!this._instance) {
            this._instance = new C2FConfig();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        config: C2FConfig;
    }
}

c2f.config = C2FConfig.getInstance();
export { };