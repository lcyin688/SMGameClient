// This script is automatic generation, please do not edit.
// If you need add logic, please write in ListCircularMoveView.ts .
// If you need add data, please write in ListCircularMoveViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class ListCircularMoveView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_ListCircularMove';

    public recordList: cc.Node;
    public recordListMask: cc.Mask = undefined;
    

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
        this.recordList = this.get('_recordList_');
        this.recordListMask = this.recordList.getComponent(cc.Mask);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}