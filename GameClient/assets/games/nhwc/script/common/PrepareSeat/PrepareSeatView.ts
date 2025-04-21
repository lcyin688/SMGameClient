// This script is automatic generation, please do not edit.
// If you need add logic, please write in PrepareSeatView.ts .
// If you need add data, please write in PrepareSeatViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';
import CountdownLabel from "./../../../../../c2f-framework/component/common/CountdownLabel";


const { ccclass, property } = cc._decorator;
@ccclass
export default class PrepareSeatView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_PrepareSeat';

    public head: cc.Node;
    public headSprite: cc.Sprite = undefined;
    public state: cc.Node;
    public stateSprite: cc.Sprite = undefined;
    public  userName: cc.Node;
    public  userNameLabel: cc.Label = undefined;
    public time: cc.Node;
    public timeLabel: cc.Label = undefined;
    public timeCountdownLabel: CountdownLabel = undefined;
    

    public onLoad() {
        super.onLoad();
    }

    public onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.addEvent();
    }

    public onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.removeEvent();
    } 

    protected initProperty() {
        super.initProperty();
        this.head = this.get('_head_');
        this.headSprite = this.head.getComponent(cc.Sprite);
        this.state = this.get('_state_');
        this.stateSprite = this.state.getComponent(cc.Sprite);
        this. userName = this.get('_ userName_');
        this. userNameLabel = this. userName.getComponent(cc.Label);
        this.time = this.get('_time_');
        this.timeLabel = this.time.getComponent(cc.Label);
        this.timeCountdownLabel = this.time.getComponent(CountdownLabel);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}