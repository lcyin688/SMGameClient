import { GameConsts } from './GameConsts';

/**
 * UI界面定义的需导出参数，统一定义到此，便于导入
 */
export namespace UIPa {
    export interface MoveConfig {
        startPos: cc.Vec3;
        endPos: cc.Vec3;
        controlPoint?: cc.Vec3[];
    }
    export const DesStarGameArgs = {
        width: 66,
        heigh: 66,
        count: 10,
    };
    export interface DesStarItemArgs extends DesStarItemBase {
        column: number;
        row: number;
        /**回调 */
        cbFun: Function;
    }
    export interface DesStarItemBase {
        /**类型 */
        typ: number;
        score: number;
        url: string;
    }

    export interface DesStarBase {
        /**横行 */
        row: number;
        /**数列 */
        column: number;
    }

    export interface MoveData {
        fromRow: number;
        fromCol: number;
        toRow: number;
        toCol: number;
    }

    /** 道具品质颜色 */
    export const StarItemData = {
        [0]: { score: 1, url: GameConsts.ResUrl.desStar + 'block_0' },
        [1]: { score: 2, url: GameConsts.ResUrl.desStar + 'block_1' },
        [2]: { score: 5, url: GameConsts.ResUrl.desStar + 'block_2' },
        [3]: { score: 5, url: GameConsts.ResUrl.desStar + 'block_3' },
        [4]: { score: 10, url: GameConsts.ResUrl.desStar + 'block_4' },
        [5]: { score: 10, url: GameConsts.ResUrl.desStar + 'block_5' },
        [6]: { score: 20, url: GameConsts.ResUrl.desStar + 'block_6' },
        [7]: { score: 20, url: GameConsts.ResUrl.desStar + 'block_7' },
    };

    export enum YngyItemArgsStates {
        Alive,
        Dead,
    }
    /**羊那个羊单个数据 */
    export interface YngyItemArgs {
        cengIndex: number;
        xIndex: number;
        YIndex: number;
        typ: number;
        state: YngyItemArgsStates;
        /** 是否隐藏*/
        hideState: boolean;
        clickFun: Function;
        pos: cc.Vec2;
    }
}
