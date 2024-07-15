// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoomItemView.ts .
// If you need add data, please write in BoomItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoomItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_BoomItem';

    public boom4: cc.Node;
    public boom4Sprite: cc.Sprite = undefined;
    public move1: cc.Node;
    public move1Sprite: cc.Sprite = undefined;
    

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
        this.boom4 = this.get('_boom4_');
        this.boom4Sprite = this.boom4.getComponent(cc.Sprite);
        this.move1 = this.get('_move1_');
        this.move1Sprite = this.move1.getComponent(cc.Sprite);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}