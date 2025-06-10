import { C2FConst } from '../../../c2f-framework/define/C2FConst';

export namespace SmallToolDemoUIPa {
    export interface SwitchLangItemArg {
        langCode: C2FConst.LanguageKey;
        name: string;
        /** 回调函数 */
        callBackFun: Function;
    }

    export interface SevenDayMenuItemArg {
        /** 是否激活 */
        active: boolean;
        /**  标题 */
        title: string;
        /** 描述 */
        tips?: string;
        /** 奖励 */
        bonus?: string;
        index: number;
        /** 回调函数 */
        callBackFun: Function;
        /**是否处于选中状态 */
        state: boolean;
    }

    export interface VipItemArg {
        vipLevel: number;
        vipIcon: string;
        index: number;
        /**是否选中了当前 */
        state: boolean;
        /** 回调函数 */
        callBackFun: Function;
    }

    export interface GameEntryConf {
        /** game */
        gameId: number;
        /** 入口动画上层目录名 */
        animFilesName: string;
        /** 是大图标 */
        isBigIcon: boolean;
        /** 是未开放 */
        isLock: boolean;
        /** 是否有引导标识 */
        isGuide: boolean;
        /** 热门标签 */
        isHot: boolean;
        /** 新游戏标签 */
        isNew: boolean;
        /** 游戏厂商名 */
        vendorName: string;
        /** 游戏厂商图标 */
        vendorIcon: string;
        /** 即将开启标识 */
        comingsoonStart: boolean;
        /** 维护标识 */
        safeguard: boolean;
        /** 回调函数 */
        callBackFun: Function;
    }
}
