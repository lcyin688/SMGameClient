import SeatDeskItem from '../SeatDeskItem/SeatDeskItem';
import SeatPrepareItem from '../SeatPrepareItem/SeatPrepareItem';
import Sketchpad from '../Sketchpad/Sketchpad';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';
    public seatPrepareItem: cc.Prefab;
    public seatPrepareItemArr: SeatPrepareItem [] = null;
    public seatCount = 6;

    public seatDeskItem: cc.Prefab;
    public SeatDeskItemArr: SeatDeskItem [] = null;

    public sketchpad:Sketchpad  = null;


}