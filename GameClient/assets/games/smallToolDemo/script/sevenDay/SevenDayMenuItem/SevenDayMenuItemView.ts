// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDayMenuItemView.ts .
// If you need add data, please write in SevenDayMenuItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMenuItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayMenuItem';

    public normal: cc.Node;
    public normalSprite: cc.Sprite = undefined;
    public lab_off: cc.Node;
    public lab_offLabel: cc.Label = undefined;
    public lab_offLabelOutline: cc.LabelOutline = undefined;
    public select: cc.Node;
    public selectSprite: cc.Sprite = undefined;
    public lab_on: cc.Node;
    public lab_onLabel: cc.Label = undefined;
    public lab_onLabelOutline: cc.LabelOutline = undefined;
    public tips: cc.Node;
    public tipsSprite: cc.Sprite = undefined;
    public tipsWidget: cc.Widget = undefined;
    public lab_tips: cc.Node;
    public lab_tipsLabel: cc.Label = undefined;
    public lab_tipsLabelOutline: cc.LabelOutline = undefined;
    public bonus: cc.Node;
    public bonusSprite: cc.Sprite = undefined;
    public bonusWidget: cc.Widget = undefined;
    public lab_bonus: cc.Node;
    public lab_bonusLabel: cc.Label = undefined;
    public lab_bonusLabelOutline: cc.LabelOutline = undefined;
    public btnClick: cc.Node;
    public btnClickButton: cc.Button = undefined;
    

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
        this.normal = this.get('_normal_');
        this.normalSprite = this.normal.getComponent(cc.Sprite);
        this.lab_off = this.get('_lab_off_');
        this.lab_offLabel = this.lab_off.getComponent(cc.Label);
        this.lab_offLabelOutline = this.lab_off.getComponent(cc.LabelOutline);
        this.select = this.get('_select_');
        this.selectSprite = this.select.getComponent(cc.Sprite);
        this.lab_on = this.get('_lab_on_');
        this.lab_onLabel = this.lab_on.getComponent(cc.Label);
        this.lab_onLabelOutline = this.lab_on.getComponent(cc.LabelOutline);
        this.tips = this.get('_tips_');
        this.tipsSprite = this.tips.getComponent(cc.Sprite);
        this.tipsWidget = this.tips.getComponent(cc.Widget);
        this.lab_tips = this.get('_lab_tips_');
        this.lab_tipsLabel = this.lab_tips.getComponent(cc.Label);
        this.lab_tipsLabelOutline = this.lab_tips.getComponent(cc.LabelOutline);
        this.bonus = this.get('_bonus_');
        this.bonusSprite = this.bonus.getComponent(cc.Sprite);
        this.bonusWidget = this.bonus.getComponent(cc.Widget);
        this.lab_bonus = this.get('_lab_bonus_');
        this.lab_bonusLabel = this.lab_bonus.getComponent(cc.Label);
        this.lab_bonusLabelOutline = this.lab_bonus.getComponent(cc.LabelOutline);
        this.btnClick = this.get('_btnClick_');
        this.btnClickButton = this.btnClick.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnClickButton.node.on('click', this.onbtnClickButtonClick, this);

    }

    private removeEvent() {
        this.btnClickButton.node.off('click', this.onbtnClickButtonClick, this);

    }

    private onbtnClickButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}