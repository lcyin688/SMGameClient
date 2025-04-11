// This script is automatic generation, please do not edit.
// If you need add logic, please write in StartItemView.ts .
// If you need add data, please write in StartItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StartItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_StartItem';

    public ske: cc.Node;
    public skeSkeleton: sp.Skeleton = undefined;
    

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
        this.ske = this.get('_ske_');
        this.skeSkeleton = this.ske.getComponent(sp.Skeleton);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}