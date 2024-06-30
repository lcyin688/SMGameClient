/** 游戏缓存数据 */

import { CacheData } from "./base/CacheData";

export class GameCaches {
    private static _ins: GameCaches = null;

    /** 配置缓存：退出登录后需重置 */
    private csvs: CacheData<any>[];

    private constructor() {
        this.csvs = [];
    }

    public static get ins() {
        if (!GameCaches._ins) {
            GameCaches._ins = new GameCaches();
        }
        return GameCaches._ins;
    }

    /** 添加配置缓存 */
    public addCsvCache(one: CacheData<any>) {
        this.csvs.push(one);
    }

    /** 清空配置缓存 */
    public clearCsvCache() {
        for (let one of this.csvs) {
            one.clear()
        }
        this.csvs = [];
    }

    /** 清空所有缓存 */
    public clearAllCache() {
        this.clearCsvCache();
    }

}