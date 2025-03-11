// This script is automatic generation, please do not edit.
// If you need add logic, please write in NhwcLoginView.ts .
// If you need add data, please write in NhwcLoginViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcLoginView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcLogin';

    public userName: cc.Node;
    public userNameEditBox: cc.EditBox = undefined;
    public passWord: cc.Node;
    public passWordEditBox: cc.EditBox = undefined;
    public btnLogin: cc.Node;
    public btnLoginSprite: cc.Sprite = undefined;
    public btnLoginButton: cc.Button = undefined;
    public btnRegister: cc.Node;
    public btnRegisterLabel: cc.Label = undefined;
    public btnRegisterButton: cc.Button = undefined;
    

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
        this.userName = this.get('_userName_');
        this.userNameEditBox = this.userName.getComponent(cc.EditBox);
        this.passWord = this.get('_passWord_');
        this.passWordEditBox = this.passWord.getComponent(cc.EditBox);
        this.btnLogin = this.get('_btnLogin_');
        this.btnLoginSprite = this.btnLogin.getComponent(cc.Sprite);
        this.btnLoginButton = this.btnLogin.getComponent(cc.Button);
        this.btnRegister = this.get('_btnRegister_');
        this.btnRegisterLabel = this.btnRegister.getComponent(cc.Label);
        this.btnRegisterButton = this.btnRegister.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.userNameEditBox.node.on('editing-did-began', this.onuserNameEditBoxEditingBegan, this);
        this.userNameEditBox.node.on('editing-did-ended', this.onuserNameEditBoxEditingEnded, this);
        this.userNameEditBox.node.on('editing-return', this.onuserNameEditBoxEditingReturn, this);
        this.userNameEditBox.node.on('text-changed', this.onuserNameEditBoxTextChanged, this);
        this.passWordEditBox.node.on('editing-did-began', this.onpassWordEditBoxEditingBegan, this);
        this.passWordEditBox.node.on('editing-did-ended', this.onpassWordEditBoxEditingEnded, this);
        this.passWordEditBox.node.on('editing-return', this.onpassWordEditBoxEditingReturn, this);
        this.passWordEditBox.node.on('text-changed', this.onpassWordEditBoxTextChanged, this);
        this.btnLoginButton.node.on('click', this.onbtnLoginButtonClick, this);
        this.btnRegisterButton.node.on('click', this.onbtnRegisterButtonClick, this);

    }

    private removeEvent() {
        this.userNameEditBox.node.off('editing-did-began', this.onuserNameEditBoxEditingBegan, this);
        this.userNameEditBox.node.off('editing-did-ended', this.onuserNameEditBoxEditingEnded, this);
        this.userNameEditBox.node.off('editing-return', this.onuserNameEditBoxEditingReturn, this);
        this.userNameEditBox.node.off('text-changed', this.onuserNameEditBoxTextChanged, this);
        this.passWordEditBox.node.off('editing-did-began', this.onpassWordEditBoxEditingBegan, this);
        this.passWordEditBox.node.off('editing-did-ended', this.onpassWordEditBoxEditingEnded, this);
        this.passWordEditBox.node.off('editing-return', this.onpassWordEditBoxEditingReturn, this);
        this.passWordEditBox.node.off('text-changed', this.onpassWordEditBoxTextChanged, this);
        this.btnLoginButton.node.off('click', this.onbtnLoginButtonClick, this);
        this.btnRegisterButton.node.off('click', this.onbtnRegisterButtonClick, this);

    }

    private onuserNameEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onuserNameEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onuserNameEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onuserNameEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onpassWordEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onpassWordEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onpassWordEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onpassWordEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onbtnLoginButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnRegisterButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}