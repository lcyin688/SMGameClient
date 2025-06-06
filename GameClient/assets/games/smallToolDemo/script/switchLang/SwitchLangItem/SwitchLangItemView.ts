// This script is automatic generation, please do not edit.
// If you need add logic, please write in SwitchLangItemView.ts .
// If you need add data, please write in SwitchLangItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLangItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SwitchLangItem';

    public btnArea: cc.Node;
    public btnAreaButton: cc.Button = undefined;
    public area: cc.Node;
    public areaLabel: cc.Label = undefined;
    

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
        this.btnArea = this.get('_btnArea_');
        this.btnAreaButton = this.btnArea.getComponent(cc.Button);
        this.area = this.get('_area_');
        this.areaLabel = this.area.getComponent(cc.Label);
        
    }

    private addEvent() {
        this.btnAreaButton.node.on('click', this.onbtnAreaButtonClick, this);

    }

    private removeEvent() {
        this.btnAreaButton.node.off('click', this.onbtnAreaButtonClick, this);

    }

    private onbtnAreaButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}