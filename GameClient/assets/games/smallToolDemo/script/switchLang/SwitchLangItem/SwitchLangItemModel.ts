import { SmallToolDemoUIPa } from '../../SmallToolDemoUIParam';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLangItemModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SwitchLangItem';
    public data: SmallToolDemoUIPa.SwitchLangItemArg;
    public initData(data: SmallToolDemoUIPa.SwitchLangItemArg) {
        this.data = data;
    }
}
