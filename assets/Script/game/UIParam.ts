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
        width: 66,
        heigh: 66,
        count: 10,
    }
    export interface DesStarItemArgs extends DesStarItemBase {

        column: number,
        row: number,
        /**回调 */
        cbFun: Function
    }
    export interface DesStarItemBase {
        /**类型 */
        typ: number,
        score: number,
        url: string
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


    /** 道具品质颜色 */
    export const StarItemData = {
        [0]: { score: 1, url: GameConsts.ResUrl.desStar + "block_0" },
        [1]: { score: 2, url: GameConsts.ResUrl.desStar + "block_1" },
        [2]: { score: 5, url: GameConsts.ResUrl.desStar + "block_2" },
        [3]: { score: 5, url: GameConsts.ResUrl.desStar + "block_3" },
        [4]: { score: 10, url: GameConsts.ResUrl.desStar + "block_4" },
        [5]: { score: 10, url: GameConsts.ResUrl.desStar + "block_5" },
        [6]: { score: 20, url: GameConsts.ResUrl.desStar + "block_6" },
        [7]: { score: 20, url: GameConsts.ResUrl.desStar + "block_7" },
    }




    export interface Physics2048ItemArgs {
        colorNum: string,
        score: number,
        url: string,
        radius: number,
        tag: number,
    }
    /** 道具品质颜色 */
    export const Physics2048ItemData = {
        [0]: { tag: 1, colorNum: "<color=#FFFFFF>2</color>", score: 2, url: GameConsts.ResUrl.physics2048 + "circle_2", radius: 30 },
        [1]: { tag: 2, colorNum: "<color=#FFFFFF>4</color>", score: 4, url: GameConsts.ResUrl.physics2048 + "circle_4", radius: 40 },
        [2]: { tag: 3, colorNum: "<color=#FFFFFF>8</color>", score: 8, url: GameConsts.ResUrl.physics2048 + "circle_8", radius: 45 },
        [3]: { tag: 4, colorNum: "<color=#FFFFFF>16</color>", score: 16, url: GameConsts.ResUrl.physics2048 + "circle_16", radius: 50 },
        [4]: { tag: 5, colorNum: "<color=#FFFFFF>32</color>", score: 32, url: GameConsts.ResUrl.physics2048 + "circle_32", radius: 60 },
        [5]: { tag: 6, colorNum: "<color=#FFFFFF>64</color>", score: 64, url: GameConsts.ResUrl.physics2048 + "circle_64", radius: 70 },
        [6]: { tag: 7, colorNum: "<color=#FFFFFF>128</color>", score: 128, url: GameConsts.ResUrl.physics2048 + "circle_128", radius: 80 },
        [7]: { tag: 8, colorNum: "<color=#FFFFFF>256</color>", score: 256, url: GameConsts.ResUrl.physics2048 + "circle_256", radius: 100 },
        [8]: { tag: 9, colorNum: "<color=#FFFFFF>512</color>", score: 512, url: GameConsts.ResUrl.physics2048 + "circle_512", radius: 120 },
        [9]: { tag: 10, colorNum: "<color=#FFFFFF>1024</color>", score: 1024, url: GameConsts.ResUrl.physics2048 + "circle_1024", radius: 130 },
        [10]: { tag: 11, colorNum: "<color=#FFFFFF>2048</color>", score: 2048, url: GameConsts.ResUrl.physics2048 + "circle_2048", radius: 150 },
    }

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
    }
    export enum YngyItemArgsStates {
        Alive,
        Dead
    }
    /**羊那个羊单个数据 */
    export interface YngyItemArgs {
        cengIndex: number,
        xIndex: number,
        YIndex: number,
        typ: number,
        state: YngyItemArgsStates,
        /** 是否隐藏*/
        hideState: boolean,
        clickFun: Function
    }







}
