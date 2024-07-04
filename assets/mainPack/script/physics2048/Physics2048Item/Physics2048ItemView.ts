// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048ItemView.ts .
// If you need add data, please write in Physics2048ItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048ItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';

    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public txtNum: cc.Node;
    public txtNumRichText: cc.RichText = undefined;
    

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
        this.txtNum = this.get('_txtNum_');
        this.txtNumRichText = this.txtNum.getComponent(cc.RichText);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}