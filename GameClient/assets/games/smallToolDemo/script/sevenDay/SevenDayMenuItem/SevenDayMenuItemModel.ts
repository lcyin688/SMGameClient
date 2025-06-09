import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMenuItemModel extends UIModelBase {
    public data: SmallToolDemoUIPa.SevenDayMenuItemArg;
    public initData(args: SmallToolDemoUIPa.SevenDayMenuItemArg) {
        this.data = args;
    }
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayMenuItem';
}
