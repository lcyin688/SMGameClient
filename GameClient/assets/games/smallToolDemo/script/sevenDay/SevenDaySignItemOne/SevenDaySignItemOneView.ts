// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDaySignItemOneView.ts .
// If you need add data, please write in SevenDaySignItemOneViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';
import WENodeSizeShrink from "./../../../../../entrance/script/extend/ui/WENodeSizeShrink";


const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDaySignItemOneView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'SevenDaySignItemOne';

    public bg: cc.Node;
    public bgSprite: cc.Sprite = undefined;
    public current: cc.Node;
    public currentSprite: cc.Sprite = undefined;
    public lab_title: cc.Node;
    public lab_titleLabel: cc.Label = undefined;
    public lab_titleLabelOutline: cc.LabelOutline = undefined;
    public lab_award: cc.Node;
    public lab_awardLabel: cc.Label = undefined;
    public lab_awardLabelShadow: cc.LabelShadow = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconWENodeSizeShrink: WENodeSizeShrink = undefined;
    public mask: cc.Node;
    public maskSprite: cc.Sprite = undefined;
    

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
        this.bg = this.get('_bg_');
        this.bgSprite = this.bg.getComponent(cc.Sprite);
        this.current = this.get('_current_');
        this.currentSprite = this.current.getComponent(cc.Sprite);
        this.lab_title = this.get('_lab_title_');
        this.lab_titleLabel = this.lab_title.getComponent(cc.Label);
        this.lab_titleLabelOutline = this.lab_title.getComponent(cc.LabelOutline);
        this.lab_award = this.get('_lab_award_');
        this.lab_awardLabel = this.lab_award.getComponent(cc.Label);
        this.lab_awardLabelShadow = this.lab_award.getComponent(cc.LabelShadow);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconWENodeSizeShrink = this.icon.getComponent(WENodeSizeShrink);
        this.mask = this.get('_mask_');
        this.maskSprite = this.mask.getComponent(cc.Sprite);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}