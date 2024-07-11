// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048ItemView.ts .
// If you need add data, please write in Physics2048ItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048ItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';

    

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
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}