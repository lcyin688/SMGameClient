// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxTimeView.ts .
// If you need add data, please write in BoxTimeViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxTimeView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxTime';

    public btnClose: cc.Node;
    public btnCloseSprite: cc.Sprite = undefined;
    public btnCloseButton: cc.Button = undefined;
    public txt_bet: cc.Node;
    public txt_betLabel: cc.Label = undefined;
    public btm_double: cc.Node;
    public btm_doubleSprite: cc.Sprite = undefined;
    public btm_doubleButton: cc.Button = undefined;
    

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
        this.txt_bet = this.get('_txt_bet_');
        this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
        this.btm_double = this.get('_btm_double_');
        this.btm_doubleSprite = this.btm_double.getComponent(cc.Sprite);
        this.btm_doubleButton = this.btm_double.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.on('click', this.onbtm_doubleButtonClick, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.off('click', this.onbtm_doubleButtonClick, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtm_doubleButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}