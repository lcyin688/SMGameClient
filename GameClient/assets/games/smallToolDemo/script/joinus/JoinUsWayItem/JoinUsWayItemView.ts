// This script is automatic generation, please do not edit.
// If you need add logic, please write in JoinUsWayItemView.ts .
// If you need add data, please write in JoinUsWayItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class JoinUsWayItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_JoinUsWayItem';

    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public notice: cc.Node;
    

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
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.notice = this.get('_notice_');
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}