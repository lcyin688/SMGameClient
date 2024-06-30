// This script is automatic generation, please do not edit.
// If you need add logic, please write in SoundSetView.ts .
// If you need add data, please write in SoundSetViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SoundSetView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_SoundSet';

    public soundEff: cc.Node;
    public soundEffToggle: cc.Toggle = undefined;
    public soundBg: cc.Node;
    public soundBgToggle: cc.Toggle = undefined;
    public btnClose: cc.Node;
    public btnCloseSprite: cc.Sprite = undefined;
    public btnCloseButton: cc.Button = undefined;
    

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
        this.soundEff = this.get('_soundEff_');
        this.soundEffToggle = this.soundEff.getComponent(cc.Toggle);
        this.soundBg = this.get('_soundBg_');
        this.soundBgToggle = this.soundBg.getComponent(cc.Toggle);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.soundEffToggle.node.on('toggle', this.onsoundEffToggleToggle, this);
        this.soundBgToggle.node.on('toggle', this.onsoundBgToggleToggle, this);
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);

    }

    private removeEvent() {
        this.soundEffToggle.node.off('toggle', this.onsoundEffToggleToggle, this);
        this.soundBgToggle.node.off('toggle', this.onsoundBgToggleToggle, this);
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);

    }

    private onsoundEffToggleToggle(component: cc.Toggle) {
        this.emit('toggle', component);
    }

    private onsoundBgToggleToggle(component: cc.Toggle) {
        this.emit('toggle', component);
    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}