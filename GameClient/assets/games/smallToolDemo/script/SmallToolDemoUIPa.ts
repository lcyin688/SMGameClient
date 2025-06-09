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
}
