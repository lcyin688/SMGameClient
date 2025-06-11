import { SmallToolDemoCfg } from '../SmallToolDemoCfg';

class HallJPRollMgr {
    private static _ins: HallJPRollMgr = null;
    public static ins(): HallJPRollMgr {
        if (!this._ins) {
            this._ins = new HallJPRollMgr();
        }
        return this._ins;
    }

    /** 每秒 自增数 */
    public readonly autoAddStep: number = 14;

    /** 自增 JP 定时器 */
    private autoAddTimer: any = null;
    /** JP 数据  SmallToolDemoCfg.GameId */
    private jackPotData: Map<number, number> = new Map<number, number>();
    /** 需要更新 JP 的 UI */
    private rollList: Map<number, any> = new Map<number, any>();

    public init(): void {
        this.rollList.clear();

        // 清理数据请求定时并启用新定时器
        this.clearInterval();

        // 如果 naming 有缓存 JP 数据直接使用，无则使用接口请求
        let data: Map<number, number> = new Map<number, number>();

        Object.entries(SmallToolDemoCfg.GameId).forEach(([k, v]) => {
            data.set(v, 99999999);
        });

        if (!data) {
            // we.common.apiMgr.getJackpot((data: api.JackpotResp) => {
            //     this.updateJPData(data);
            // });
        } else {
            this.updateJPData(data);
        }
    }

    /** 清理定时器 */
    public clearInterval(): void {
        if (this.autoAddTimer != null) {
            clearInterval(this.autoAddTimer);
            this.autoAddTimer = null;
        }
    }

    /**
     * 添加滚动管理队列，便于更新
     * @param gameId
     * @param comp HallJPRollLabel | HallJPRollLabel_v
     */
    public addJPRoll(gameId: number, comp: any): void {
        this.rollList.set(gameId, comp);
    }

    /**
     * 移除不需要维护 JP
     * @param gameId
     */
    public deleteJPRoll(gameId: number): void {
        if (this.rollList.get(gameId)) {
            this.rollList.delete(gameId);
        }
    }

    /**
     * 更新最新 JP 数据
     * @param data
     */
    public updateJPData(jackpotData: Map<number, number>): void {
        if (jackpotData) {
            // let keys = Object.keys(jackpotData || {});
            // keys.forEach((key) => {
            //     this.jackPotData.set(game, data.pot[key]);
            // });
            this.jackPotData = jackpotData;
            if (this.autoAddTimer == null) {
                this.autoAddTimer = setInterval(this.autoAddLogic.bind(this), (1 / this.autoAddStep) * 1000);
            }
        }
    }

    /** JP 自增并更新 UI */
    private autoAddLogic(): void {
        // JP 自增
        this.jackPotData.forEach((value, key) => {
            this.jackPotData.set(key, value + this.autoAddStep);
        });

        // 更新 UI
        this.rollList.forEach((value, key) => {
            if (value && cc.isValid(value)) {
                value.updateJP(key, this.jackPotData.get(key) || 0);
            }
        });
    }

    /**
     * 是否开启 JP
     * @param gameId 游戏 ID
     * @returns
     */
    public isOpenJackPot(gameId: number): boolean {
        return this.jackPotData.has(gameId) ? true : false;
    }
}
export default HallJPRollMgr.ins();
