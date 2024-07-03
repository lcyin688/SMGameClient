import { UIPa } from '../../../../Script/game/UIParam';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048ItemModel extends UIModelBase {

    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';
    public data: UIPa.Physics2048ItemArgs
    public initData(data: UIPa.Physics2048ItemArgs) {
        this.data = data

    }
}