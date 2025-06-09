// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDayGiftItemView.ts .
// If you need add data, please write in SevenDayGiftItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';
import LinkPrefab from "./../../../../../c2f-framework/component/common/LinkPrefab";
import SevenDayGiftNode from "./../SevenDayGiftNode/SevenDayGiftNode";


const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayGiftItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayGiftItem';

    public amount: cc.Node;
    public amountLinkPrefab: LinkPrefab = undefined;
    public amountSevenDayGiftNode: SevenDayGiftNode = undefined;
    public award: cc.Node;
    public awardLinkPrefab: LinkPrefab = undefined;
    public awardSevenDayGiftNode: SevenDayGiftNode = undefined;
    

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
        this.amount = this.get('_amount_');
        this.amountLinkPrefab = this.amount.getComponent(LinkPrefab);
        this.amountSevenDayGiftNode = this.amount.getComponent(LinkPrefab).getComponentEx(SevenDayGiftNode);
        this.award = this.get('_award_');
        this.awardLinkPrefab = this.award.getComponent(LinkPrefab);
        this.awardSevenDayGiftNode = this.award.getComponent(LinkPrefab).getComponentEx(SevenDayGiftNode);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}