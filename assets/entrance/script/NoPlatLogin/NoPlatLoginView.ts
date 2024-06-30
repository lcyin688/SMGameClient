// This script is automatic generation, please do not edit.
// If you need add logic, please write in NoPlatLoginView.ts .
// If you need add data, please write in NoPlatLoginViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';
import LinkPrefab from "./../../../c2f-framework/component/common/LinkPrefab";
import PopDlgPanel from "./../controls/entity/PopDlgPanel";


const { ccclass, property } = cc._decorator;
@ccclass
export default class NoPlatLoginView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'NoPlatLogin';

    public dlgPanel: cc.Node;
    public dlgPanelLinkPrefab: LinkPrefab = undefined;
    public dlgPanelPopDlgPanel: PopDlgPanel = undefined;
    public userId: cc.Node;
    public userIdEditBox: cc.EditBox = undefined;
    public platFlag: cc.Node;
    public platFlagEditBox: cc.EditBox = undefined;
    public payFlag: cc.Node;
    public payFlagEditBox: cc.EditBox = undefined;
    public login: cc.Node;
    public loginButton: cc.Button = undefined;
    

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
        this.dlgPanel = this.get('_dlgPanel_');
        this.dlgPanelLinkPrefab = this.dlgPanel.getComponent(LinkPrefab);
        this.dlgPanelPopDlgPanel = this.dlgPanel.getComponent(LinkPrefab).getComponentEx(PopDlgPanel);
        this.userId = this.get('_userId_');
        this.userIdEditBox = this.userId.getComponent(cc.EditBox);
        this.platFlag = this.get('_platFlag_');
        this.platFlagEditBox = this.platFlag.getComponent(cc.EditBox);
        this.payFlag = this.get('_payFlag_');
        this.payFlagEditBox = this.payFlag.getComponent(cc.EditBox);
        this.login = this.get('_login_');
        this.loginButton = this.login.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.userIdEditBox.node.on('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.on('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.on('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.on('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.on('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.on('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.on('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.on('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.on('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.on('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.on('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.on('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.on('click', this.onloginButtonClick, this);

    }

    private removeEvent() {
        this.userIdEditBox.node.off('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.off('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.off('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.off('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.off('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.off('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.off('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.off('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.off('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.off('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.off('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.off('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.off('click', this.onloginButtonClick, this);

    }

    private onuserIdEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onuserIdEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onuserIdEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onuserIdEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onplatFlagEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onplatFlagEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onplatFlagEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onplatFlagEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onpayFlagEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onpayFlagEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onpayFlagEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onpayFlagEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onloginButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}