// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048ItemView.ts .
// If you need add data, please write in Physics2048ItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048ItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';

    public weiBa: cc.Node;
    public weiBaSprite: cc.Sprite = undefined;
    public weiBaAnimation: cc.Animation = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    

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
        this.weiBa = this.get('_weiBa_');
        this.weiBaSprite = this.weiBa.getComponent(cc.Sprite);
        this.weiBaAnimation = this.weiBa.getComponent(cc.Animation);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}