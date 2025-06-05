// This script is automatic generation, please do not edit.
// If you need add logic, please write in TurntableItemView.ts .
// If you need add data, please write in TurntableItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_TurntableItem';

    public border: cc.Node;
    public borderSprite: cc.Sprite = undefined;
    public lab_money: cc.Node;
    public lab_moneyLabel: cc.Label = undefined;
    public lab_moneyLabelOutline: cc.LabelOutline = undefined;
    public selectAnim: cc.Node;
    public selectAnimSkeleton: sp.Skeleton = undefined;
    

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
        this.border = this.get('_border_');
        this.borderSprite = this.border.getComponent(cc.Sprite);
        this.lab_money = this.get('_lab_money_');
        this.lab_moneyLabel = this.lab_money.getComponent(cc.Label);
        this.lab_moneyLabelOutline = this.lab_money.getComponent(cc.LabelOutline);
        this.selectAnim = this.get('_selectAnim_');
        this.selectAnimSkeleton = this.selectAnim.getComponent(sp.Skeleton);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}