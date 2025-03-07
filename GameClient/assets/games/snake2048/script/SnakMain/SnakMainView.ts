// This script is automatic generation, please do not edit.
// If you need add logic, please write in SnakMainView.ts .
// If you need add data, please write in SnakMainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_SnakMain';

    

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