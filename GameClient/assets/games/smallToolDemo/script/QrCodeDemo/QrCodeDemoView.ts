// This script is automatic generation, please do not edit.
// If you need add logic, please write in QrCodeDemoView.ts .
// If you need add data, please write in QrCodeDemoViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class QrCodeDemoView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_QrCodeDemo';

    public qrCode: cc.Node;
    public btnSave: cc.Node;
    public btnSaveSprite: cc.Sprite = undefined;
    public btnSaveButton: cc.Button = undefined;
    

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
        this.qrCode = this.get('_qrCode_');
        this.btnSave = this.get('_btnSave_');
        this.btnSaveSprite = this.btnSave.getComponent(cc.Sprite);
        this.btnSaveButton = this.btnSave.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnSaveButton.node.on('click', this.onbtnSaveButtonClick, this);

    }

    private removeEvent() {
        this.btnSaveButton.node.off('click', this.onbtnSaveButtonClick, this);

    }

    private onbtnSaveButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}