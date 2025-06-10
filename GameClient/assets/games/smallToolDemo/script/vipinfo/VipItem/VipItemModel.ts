import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipItemModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_VipItem';
    public data: SmallToolDemoUIPa.VipItemArg;
    public initData(args: SmallToolDemoUIPa.VipItemArg) {
        this.data = args;
    }
}
