// This script is automatic generation, please do not edit.
// If you need add logic, please write in PrepareSeatView.ts .
// If you need add data, please write in PrepareSeatViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class PrepareSeatView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_PrepareSeat';

    public headIcon: cc.Node;
    public headIconSprite: cc.Sprite = undefined;
    public  userName: cc.Node;
    public  userNameLabel: cc.Label = undefined;
    

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
        this.headIcon = this.get('_headIcon_');
        this.headIconSprite = this.headIcon.getComponent(cc.Sprite);
        this. userName = this.get('_ userName_');
        this. userNameLabel = this. userName.getComponent(cc.Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}