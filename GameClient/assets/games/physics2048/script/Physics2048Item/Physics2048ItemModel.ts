import { UIPa } from '../../../../Script/game/UIParam';
import { Physics2048Cfg } from '../Physics2048Cfg';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048ItemModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';
    public data: Physics2048Cfg.Physics2048ItemArgs;
    public cbFun: Function;
    public initData(data: Physics2048Cfg.Physics2048ItemArgs, callBack: Function) {
        this.data = data;
        this.cbFun = callBack;
    }
}
