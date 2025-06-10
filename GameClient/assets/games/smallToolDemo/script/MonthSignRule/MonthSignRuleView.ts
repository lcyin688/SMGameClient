// This script is automatic generation, please do not edit.
// If you need add logic, please write in MonthSignRuleView.ts .
// If you need add data, please write in MonthSignRuleViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MonthSignRuleView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_MonthSignRule';

    public close: cc.Node;
    public closeButton: cc.Button = undefined;
    

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
        this.close = this.get('_close_');
        this.closeButton = this.close.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.closeButton.node.on('click', this.oncloseButtonClick, this);

    }

    private removeEvent() {
        this.closeButton.node.off('click', this.oncloseButtonClick, this);

    }

    private oncloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}