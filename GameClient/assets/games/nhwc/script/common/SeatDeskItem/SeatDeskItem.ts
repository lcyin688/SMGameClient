import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SeatDeskItemModel from './SeatDeskItemModel';
import  SeatDeskItemView from './SeatDeskItemView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SeatDeskItem extends UIPControlBase {



    /** 预制名 给实例调用 */
    public prefabName = 'P_SeatDeskItem';

    public model: SeatDeskItemModel = undefined;
    public view: SeatDeskItemView = undefined;

    public reflash(data: msg.GameUserItem) {
        if (data) {
            this.view.content.active =true
            this.view.userNameLabel.string =data.plyer.nickName
            //答对了还需要个状态
            this.view.tip.active =false
        }else{
            this.view.content.active =false
        }
    }

    public hideTip() {
        this.view.tip.active =false
    }

    public showTip(str: string) {
        this.view.tip.active =true
        this.view.tipLabel.string =str
    }


}