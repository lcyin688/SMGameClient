import { GameConsts } from "./GameConsts"

/** 
 * UI界面定义的需导出参数，统一定义到此，便于导入
 */
export namespace UIPa {

    export interface MoveConfig {
        startPos: cc.Vec3,
        endPos: cc.Vec3,
        controlPoint?: cc.Vec3[],
    }
    export const DesStarGameArgs = {
        width: 80,
        heigh: 80,
        count: 10,
    }
    export interface DesStarItemArgs {
        /**类型 */
        typ: number,
        column: number,
        row: number,
        /**回调 */
        cbFun: Function
    }

    export interface DesStarBase {
        /**横行 */
        row: number,
        /**数列 */
        column: number
    }

    export interface MoveData {
        fromRow: number,
        fromCol: number,
        toRow: number,
        toCol: number
    }



    export interface Physics2048ItemArgs {
        colorNum: string,
        score: number,
        url: string,
        radius: number,
        /**回调 */
        cbFun: Function
    }
    /** 道具品质颜色 */
    export const Physics2048ItemData = {
        [0]: { color: "<color=#FFFFFF>2</color>", score: 2, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 20 },
        [1]: { color: "<color=#FFFFFF>4</color>", score: 4, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 30 },
        [2]: { color: "<color=#FFFFFF>8</color>", score: 8, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 40 },
        [3]: { color: "<color=#FFFFFF>16</color>", score: 16, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 50 },
        [4]: { color: "<color=#FFFFFF>32</color>", score: 32, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 60 },
        [5]: { color: "<color=#FFFFFF>64</color>", score: 64, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 80 },
        [6]: { color: "<color=#FFFFFF>128</color>", score: 128, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 100 },
        [7]: { color: "<color=#FFFFFF>256</color>", score: 256, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 140 },
        [8]: { color: "<color=#FFFFFF>512</color>", score: 512, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 180 },
        [9]: { color: "<color=#FFFFFF>1024</color>", score: 1024, url: GameConsts.ResUrl.physics2048 + "block_0", radius: 300 },
    }
}