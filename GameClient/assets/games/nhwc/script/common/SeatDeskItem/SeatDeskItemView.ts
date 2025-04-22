// This script is automatic generation, please do not edit.
// If you need add logic, please write in SeatDeskItemView.ts .
// If you need add data, please write in SeatDeskItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SeatDeskItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SeatDeskItem';

    public content: cc.Node;
    public genDer: cc.Node;
    public genDerSprite: cc.Sprite = undefined;
    public userName: cc.Node;
    public userNameLabel: cc.Label = undefined;
    public tip: cc.Node;
    public tipLabel: cc.Label = undefined;
    

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
        this.content = this.get('_content_');
        this.genDer = this.get('_genDer_');
        this.genDerSprite = this.genDer.getComponent(cc.Sprite);
        this.userName = this.get('_userName_');
        this.userNameLabel = this.userName.getComponent(cc.Label);
        this.tip = this.get('_tip_');
        this.tipLabel = this.tip.getComponent(cc.Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}