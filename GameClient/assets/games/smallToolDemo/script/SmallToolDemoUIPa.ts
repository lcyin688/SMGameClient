import { C2FConst } from '../../../c2f-framework/define/C2FConst';

export namespace SmallToolDemoUIPa {
    export interface SwitchLangItemArg {
        langCode: C2FConst.LanguageKey;
        name: string;
        /** 回调函数 */
        callBackFun: Function;
    }
}
