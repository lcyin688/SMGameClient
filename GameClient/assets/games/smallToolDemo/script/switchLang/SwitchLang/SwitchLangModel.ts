import { C2FConst } from '../../../../../c2f-framework/define/C2FConst';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLangModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SwitchLang';
    public arr: SmallToolDemoUIPa.SwitchLangItemArg[] = [];
    public initData(callBackFun: Function) {
        this.arr = [];
        for (let i = 0; i < 100; i++) {
            let item: SmallToolDemoUIPa.SwitchLangItemArg = {
                langCode: C2FConst.LanguageKey.zh,
                name: '',
                callBackFun,
            };
            if (i % 3 == 0) {
                item.langCode = C2FConst.LanguageKey.zh;
                item.name = c2f.language.getLangByID('7100');
            } else if (i % 3 == 1) {
                item.langCode = C2FConst.LanguageKey.en;
                item.name = c2f.language.getLangByID('7101');
            } else {
                item.langCode = C2FConst.LanguageKey.tw;
                item.name = c2f.language.getLangByID('7102');
            }
            this.arr.push(item);
        }
    }
}
