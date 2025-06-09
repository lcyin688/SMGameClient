// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDayGiftNodeView.ts .
// If you need add data, please write in SevenDayGiftNodeViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';
import WESpriteIndex from "./../../../../../entrance/script/extend/ui/WESpriteIndex";
import WENodeSizeShrink from "./../../../../../entrance/script/extend/ui/WENodeSizeShrink";


const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayGiftNodeView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayGiftNode';

    public bonus: cc.Node;
    public bonusSprite: cc.Sprite = undefined;
    public lab_bonus: cc.Node;
    public lab_bonusLabel: cc.Label = undefined;
    public lab_bonusLabelOutline: cc.LabelOutline = undefined;
    public lab_title: cc.Node;
    public lab_titleLabel: cc.Label = undefined;
    public lab_titleLabelOutline: cc.LabelOutline = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconWESpriteIndex: WESpriteIndex = undefined;
    public iconWENodeSizeShrink: WENodeSizeShrink = undefined;
    public lab_award: cc.Node;
    public lab_awardLabel: cc.Label = undefined;
    

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
        this.bonus = this.get('_bonus_');
        this.bonusSprite = this.bonus.getComponent(cc.Sprite);
        this.lab_bonus = this.get('_lab_bonus_');
        this.lab_bonusLabel = this.lab_bonus.getComponent(cc.Label);
        this.lab_bonusLabelOutline = this.lab_bonus.getComponent(cc.LabelOutline);
        this.lab_title = this.get('_lab_title_');
        this.lab_titleLabel = this.lab_title.getComponent(cc.Label);
        this.lab_titleLabelOutline = this.lab_title.getComponent(cc.LabelOutline);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconWESpriteIndex = this.icon.getComponent(WESpriteIndex);
        this.iconWENodeSizeShrink = this.icon.getComponent(WENodeSizeShrink);
        this.lab_award = this.get('_lab_award_');
        this.lab_awardLabel = this.lab_award.getComponent(cc.Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}