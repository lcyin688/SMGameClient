import { SmallToolDemoUIPa } from '../SmallToolDemoUIPa';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallGameItemModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallGameItem';

    conf: SmallToolDemoUIPa.GameEntryConf;
    initData(conf: SmallToolDemoUIPa.GameEntryConf) {
        this.conf = conf;
    }
}
