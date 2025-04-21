import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  PrepareSeatModel from './PrepareSeatModel';
import  PrepareSeatView from './PrepareSeatView';
import { NHWCConsts } from '../../NHWCConsts';
import { HHWCParam } from '../../HHWCParam';

const { ccclass, property } = cc._decorator;
@ccclass
export default class PrepareSeat extends UIPControlBase {

    /** 预制名 给实例调用 */
    public prefabName = 'P_PrepareSeat';

    public model: PrepareSeatModel = undefined;
    public view: PrepareSeatView = undefined;

    public  reflash(data:msg.GameUserItem) {
        if (!data) {
            this.view.headIcon.active =false
            // this.view.re.active =false
            this.view.userName.active =false
        }else{
            

        }
    }

}