import { UIPa } from '../../../Script/game/UIParam';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyItemModel extends UIModelBase {

    /** 预制名 给实例调用 */
    public prefabName = 'P_YngyItem';
    public data: UIPa.YngyItemArgs
    public initData(data: UIPa.YngyItemArgs) {
        this.data = data
    }
}