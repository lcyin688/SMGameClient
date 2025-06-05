// This script is automatic generation, please do not edit.
// If you need add logic, please write in TurntableRecordItemView.ts .
// If you need add data, please write in TurntableRecordItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableRecordItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_TurntableRecordItem';

    public spr_avatar: cc.Node;
    public spr_avatarSprite: cc.Sprite = undefined;
    public lab_name: cc.Node;
    public lab_nameLabel: cc.Label = undefined;
    public lab_money: cc.Node;
    public lab_moneyLabel: cc.Label = undefined;
    public lab_time: cc.Node;
    public lab_timeLabel: cc.Label = undefined;
    

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
        this.spr_avatar = this.get('_spr_avatar_');
        this.spr_avatarSprite = this.spr_avatar.getComponent(cc.Sprite);
        this.lab_name = this.get('_lab_name_');
        this.lab_nameLabel = this.lab_name.getComponent(cc.Label);
        this.lab_money = this.get('_lab_money_');
        this.lab_moneyLabel = this.lab_money.getComponent(cc.Label);
        this.lab_time = this.get('_lab_time_');
        this.lab_timeLabel = this.lab_time.getComponent(cc.Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}