import PrepareSeat from '../PrepareSeat/PrepareSeat';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';
    public seatItem: cc.Prefab;
    public prepareSeatArr: PrepareSeat [] = null;
    public seatCount = 6;


}