import { GameConsts } from '../../../Script/game/GameConsts';

export namespace Physics2048Cfg {
    export const Physics2048TagCfg = {
        /** 默认 */
        Group0: 'default',
        /** 食物 */
        Group1: 'Food',
        /** 墙 */
        Group2: 'Wall',
        /**UI */
        Group3: 'UI',
        /**AI */
        Group4: 'AI',
        /**玩家 */
        Group5: 'Player',
        /**道具 */
        Group6: 'Prop',

        /**物理2048用 */
        Group7: 'Fruit',
    };

    export interface Physics2048ItemArgs {
        colorNum: string;
        score: number;
        url: string;
        radius: number;
        tag: number;
    }
    /** 道具品质颜色 */
    export const Physics2048ItemData = {
        [0]: { tag: 1, colorNum: '<color=#FFFFFF>2</color>', score: 2, url: GameConsts.ResUrl.physics2048 + 'circle_2', radius: 30 },
        [1]: { tag: 2, colorNum: '<color=#FFFFFF>4</color>', score: 4, url: GameConsts.ResUrl.physics2048 + 'circle_4', radius: 40 },
        [2]: { tag: 3, colorNum: '<color=#FFFFFF>8</color>', score: 8, url: GameConsts.ResUrl.physics2048 + 'circle_8', radius: 45 },
        [3]: { tag: 4, colorNum: '<color=#FFFFFF>16</color>', score: 16, url: GameConsts.ResUrl.physics2048 + 'circle_16', radius: 50 },
        [4]: { tag: 5, colorNum: '<color=#FFFFFF>32</color>', score: 32, url: GameConsts.ResUrl.physics2048 + 'circle_32', radius: 60 },
        [5]: { tag: 6, colorNum: '<color=#FFFFFF>64</color>', score: 64, url: GameConsts.ResUrl.physics2048 + 'circle_64', radius: 70 },
        [6]: { tag: 7, colorNum: '<color=#FFFFFF>128</color>', score: 128, url: GameConsts.ResUrl.physics2048 + 'circle_128', radius: 80 },
        [7]: { tag: 8, colorNum: '<color=#FFFFFF>256</color>', score: 256, url: GameConsts.ResUrl.physics2048 + 'circle_256', radius: 100 },
        [8]: { tag: 9, colorNum: '<color=#FFFFFF>512</color>', score: 512, url: GameConsts.ResUrl.physics2048 + 'circle_512', radius: 120 },
        [9]: { tag: 10, colorNum: '<color=#FFFFFF>1024</color>', score: 1024, url: GameConsts.ResUrl.physics2048 + 'circle_1024', radius: 130 },
        [10]: { tag: 11, colorNum: '<color=#FFFFFF>2048</color>', score: 2048, url: GameConsts.ResUrl.physics2048 + 'circle_2048', radius: 150 },
    };

    export const PhysicsTag = {
        wall: 0,
        block_2: 1,
        block_4: 2,
        block_8: 3,
        block_16: 4,
        block_32: 5,
        block_64: 6,
        block_128: 7,
        block_256: 8,
        block_512: 9,
        block_1024: 10,
        block_2048: 11,
    };

    /** 常用预制体 */
    export enum CmmPrefab {
        physics2048Item = 'ab:physics2048/prefab/P_Physics2048Item',
        boomItem = 'ab:physics2048/prefab/P_BoomItem',
    }
}
