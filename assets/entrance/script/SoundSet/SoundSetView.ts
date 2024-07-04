// This script is automatic generation, please do not edit.
// If you need add logic, please write in SoundSetView.ts .
// If you need add data, please write in SoundSetViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SoundSetView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_SoundSet';

    public soundBg: cc.Node;
    public soundBgSprite: cc.Sprite = undefined;
    public soundBgButton: cc.Button = undefined;
    public soundEff: cc.Node;
    public soundEffSprite: cc.Sprite = undefined;
    public soundEffButton: cc.Button = undefined;
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
        this.soundBg = this.get('_soundBg_');
        this.soundBgSprite = this.soundBg.getComponent(cc.Sprite);
        this.soundBgButton = this.soundBg.getComponent(cc.Button);
        this.soundEff = this.get('_soundEff_');
        this.soundEffSprite = this.soundEff.getComponent(cc.Sprite);
        this.soundEffButton = this.soundEff.getComponent(cc.Button);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.soundBgButton.node.on('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.on('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);

    }

    private removeEvent() {
        this.soundBgButton.node.off('click', this.onsoundBgButtonClick, this);
        this.soundEffButton.node.off('click', this.onsoundEffButtonClick, this);
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);

    }

    private onsoundBgButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onsoundEffButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}