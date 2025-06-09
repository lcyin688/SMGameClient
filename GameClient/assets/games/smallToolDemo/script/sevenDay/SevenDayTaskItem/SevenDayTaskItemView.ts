// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDayTaskItemView.ts .
// If you need add data, please write in SevenDayTaskItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';
import WENodeSizeShrink from "./../../../../../entrance/script/extend/ui/WENodeSizeShrink";
import WESpriteIndex from "./../../../../../entrance/script/extend/ui/WESpriteIndex";
import GradientColor from "./../../../../../c2f-framework/component/common/GradientColor";


const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayTaskItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayTaskItem';

    public title: cc.Node;
    public titleLabel: cc.Label = undefined;
    public titleLabelOutline: cc.LabelOutline = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconWENodeSizeShrink: WENodeSizeShrink = undefined;
    public iconWESpriteIndex: WESpriteIndex = undefined;
    public award: cc.Node;
    public awardLabel: cc.Label = undefined;
    public awardLabelOutline: cc.LabelOutline = undefined;
    public awardGradientColor: GradientColor = undefined;
    public desc: cc.Node;
    public descLabel: cc.Label = undefined;
    public bar: cc.Node;
    public barSprite: cc.Sprite = undefined;
    public barProgressBar: cc.ProgressBar = undefined;
    public labBar: cc.Node;
    public labBarLabel: cc.Label = undefined;
    public labBarLabelOutline: cc.LabelOutline = undefined;
    public get: cc.Node;
    public getSprite: cc.Sprite = undefined;
    public btnGo: cc.Node;
    public btnGoSprite: cc.Sprite = undefined;
    public markOne: cc.Node;
    public markOneSprite: cc.Sprite = undefined;
    public maskTwo: cc.Node;
    public maskTwoSprite: cc.Sprite = undefined;
    public lock: cc.Node;
    public lockSprite: cc.Sprite = undefined;
    public labLock: cc.Node;
    public labLockLabel: cc.Label = undefined;
    public labLockLabelOutline: cc.LabelOutline = undefined;
    

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
        this.title = this.get('_title_');
        this.titleLabel = this.title.getComponent(cc.Label);
        this.titleLabelOutline = this.title.getComponent(cc.LabelOutline);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconWENodeSizeShrink = this.icon.getComponent(WENodeSizeShrink);
        this.iconWESpriteIndex = this.icon.getComponent(WESpriteIndex);
        this.award = this.get('_award_');
        this.awardLabel = this.award.getComponent(cc.Label);
        this.awardLabelOutline = this.award.getComponent(cc.LabelOutline);
        this.awardGradientColor = this.award.getComponent(GradientColor);
        this.desc = this.get('_desc_');
        this.descLabel = this.desc.getComponent(cc.Label);
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
        this.labBar = this.get('_labBar_');
        this.labBarLabel = this.labBar.getComponent(cc.Label);
        this.labBarLabelOutline = this.labBar.getComponent(cc.LabelOutline);
        this.get = this.get('_get_');
        this.getSprite = this.get.getComponent(cc.Sprite);
        this.btnGo = this.get('_btnGo_');
        this.btnGoSprite = this.btnGo.getComponent(cc.Sprite);
        this.markOne = this.get('_markOne_');
        this.markOneSprite = this.markOne.getComponent(cc.Sprite);
        this.maskTwo = this.get('_maskTwo_');
        this.maskTwoSprite = this.maskTwo.getComponent(cc.Sprite);
        this.lock = this.get('_lock_');
        this.lockSprite = this.lock.getComponent(cc.Sprite);
        this.labLock = this.get('_labLock_');
        this.labLockLabel = this.labLock.getComponent(cc.Label);
        this.labLockLabelOutline = this.labLock.getComponent(cc.LabelOutline);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}