import { UIPa } from '../../../../Script/game/UIParam';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MapCreatItemModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_MapCreatItem';
    public data: UIPa.DesStarItemArgs;
    public initData(data: UIPa.DesStarItemArgs) {
        this.data = data
    }
}