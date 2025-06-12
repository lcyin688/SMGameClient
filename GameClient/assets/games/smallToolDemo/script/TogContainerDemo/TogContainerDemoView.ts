// This script is automatic generation, please do not edit.
// If you need add logic, please write in TogContainerDemoView.ts .
// If you need add data, please write in TogContainerDemoViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';
import ToggleGroupWrapper from "./../../../../entrance/script/extend/ui/ToggleGroupWrapper";


const { ccclass, property } = cc._decorator;
@ccclass
export default class TogContainerDemoView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_TogContainerDemo';

    public togContainer: cc.Node;
    public togContainerToggleContainer: cc.ToggleContainer = undefined;
    public togContainerToggleGroupWrapper: ToggleGroupWrapper = undefined;
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
        this.togContainer = this.get('_togContainer_');
        this.togContainerToggleContainer = this.togContainer.getComponent(cc.ToggleContainer);
        this.togContainerToggleGroupWrapper = this.togContainer.getComponent(ToggleGroupWrapper);
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