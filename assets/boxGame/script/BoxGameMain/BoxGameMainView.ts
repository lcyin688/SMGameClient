// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameMainView.ts .
// If you need add data, please write in BoxGameMainViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxGameMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxGameMain';

    public btnClose: cc.Node;
    public btnCloseSprite: cc.Sprite = undefined;
    public btnCloseButton: cc.Button = undefined;
    public btnStart: cc.Node;
    public btnStartButton: cc.Button = undefined;
    public lvPanel: cc.Node;
    public lvPanelSprite: cc.Sprite = undefined;
    public layer1: cc.Node;
    public layer2: cc.Node;
    public layer3: cc.Node;
    public layer4: cc.Node;
    public seleted: cc.Node;
    public seletedSprite: cc.Sprite = undefined;
    

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
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.lvPanel = this.get('_lvPanel_');
        this.lvPanelSprite = this.lvPanel.getComponent(cc.Sprite);
        this.layer1 = this.get('_layer1_');
        this.layer2 = this.get('_layer2_');
        this.layer3 = this.get('_layer3_');
        this.layer4 = this.get('_layer4_');
        this.seleted = this.get('_seleted_');
        this.seletedSprite = this.seleted.getComponent(cc.Sprite);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnStartButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}