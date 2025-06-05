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

    /** 转盘记录Item */
    export interface RodaHistory {
        /** 玩家名称 */
        name: string;

        /** 头像 */
        avatar: string;

        /** 性别 */
        gender: number;

        /** 获奖金额 */
        award: number;

        /** 获奖时间 */
        time: number;

        /** 获奖金额 */
        award_64: number;

        /** 获奖时间 */
        time_64: number;
    }

    /** 三方分享链接配置 */
    export interface ThirdLinkConf {
        linkIconArr: string[];
        /** 标识当前配置 */
        name: string;
    }

    /** banner */
    export interface BannerConf {
        /** 多语言banner图 */
        banner: string;
    }

    /** 转盘配置数据 */
    export interface RodaConf {
        /** 配置ID */
        id: number;
        /** 奖励金额 */
        award: number;
    }

    export interface RodaActivityAwardResp {
        /** 状态码 */
        status: number;

        /** 转到的转盘块ID */
        awardId: number;

        /** 领取奖励金额 */
        awardNum: number;

        /** 剩余可用次数 */
        remainNum: number;

        /** 领取奖励金额 */
        awardNum_64: number;
    }
}
