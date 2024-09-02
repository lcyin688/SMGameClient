import { PublicData } from "./plrBase/PublicData";
import { RankData } from "./rank/RankData";


/** 玩家数据总领：具体模块数据 */
export class PlayerData {
    static _ins: PlayerData = null;
    static get ins() {
        if (!PlayerData._ins) {
            PlayerData._ins = new PlayerData();
        }
        return PlayerData._ins;
    }

    private beforeLoadCfg: { [key: number]: any };

    /** 配置加载成功 */
    private _cfgLoaded: boolean = false;
    public get cfgLoaded(): boolean {
        return this._cfgLoaded;
    }
    public set cfgLoaded(value: boolean) {
        this._cfgLoaded = value;
        if (value && this.beforeLoadCfg) {
            for (let key in this.beforeLoadCfg) {
                this.dispatchMsg(Number(key), this.beforeLoadCfg[key]);
            }
            this.beforeLoadCfg = null;
        }
    }


    /** 公用数据 */
    private _public: PublicData;
    /** 公用数据 */
    public get public() {
        return this._public;
    }
    /** 排行榜 */
    private _rank: RankData;
    public get rank() {
        return this._rank;
    }



    /** 消息分发列表 */
    private dispatchs: any[];

    constructor() {
        this.dispatchs = [];
    }

    /** 初始化 */
    public initPlayer() {
    }



    /** 清空模块数据 */
    private clearModules() {
        for (let one of this.dispatchs) {
            if (one.reset) {
                one.reset();
            }
            if (one.release) {
                one.release()
            }
        }
        this._public = null;
        this._rank = null;
        this.dispatchs = [];
    }

    /** 分发网络消息 */
    public handleMsg(op: number, data: any) {
        if (this.cfgLoaded) {
            this.dispatchMsg(op, data);
        } else {
            this.beforeLoadCfg = this.beforeLoadCfg || {};
            this.beforeLoadCfg[op] = data;
        }
    }

    private dispatchMsg(op: number, data: any) {

    }

    public initModules() {
        this.dispatchs = [];
        this._public = new PublicData();
        this.dispatchs.push(this._public);
        this._rank = new RankData();
        this.dispatchs.push(this._rank);
    }
}

declare global {
    interface ISZG {
        player: PlayerData;
    }
}

szg.player = PlayerData.ins;
export { };