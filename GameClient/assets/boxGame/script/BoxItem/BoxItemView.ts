// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxItemView.ts .
// If you need add data, please write in BoxItemViewModel.ts .

import { UIPanelBase } from './../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_BoxItem';

    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconAnimation: cc.Animation = undefined;
    

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
        this.iconAnimation = this.icon.getComponent(cc.Animation);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}