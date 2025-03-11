// This script is automatic generation, please do not edit.
// If you need add logic, please write in NhwcRegisterView.ts .
// If you need add data, please write in NhwcRegisterViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcRegisterView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_NhwcRegister';

    public userName: cc.Node;
    public userNameEditBox: cc.EditBox = undefined;
    public passWord: cc.Node;
    public passWordEditBox: cc.EditBox = undefined;
    public passWordConfirm: cc.Node;
    public passWordConfirmEditBox: cc.EditBox = undefined;
    public btnConfirm: cc.Node;
    public btnConfirmSprite: cc.Sprite = undefined;
    public btnConfirmButton: cc.Button = undefined;
    public btnReturn: cc.Node;
    public btnReturnLabel: cc.Label = undefined;
    public btnReturnButton: cc.Button = undefined;
    public head: cc.Node;
    public headSprite: cc.Sprite = undefined;
    

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
        this.passWordConfirm = this.get('_passWordConfirm_');
        this.passWordConfirmEditBox = this.passWordConfirm.getComponent(cc.EditBox);
        this.btnConfirm = this.get('_btnConfirm_');
        this.btnConfirmSprite = this.btnConfirm.getComponent(cc.Sprite);
        this.btnConfirmButton = this.btnConfirm.getComponent(cc.Button);
        this.btnReturn = this.get('_btnReturn_');
        this.btnReturnLabel = this.btnReturn.getComponent(cc.Label);
        this.btnReturnButton = this.btnReturn.getComponent(cc.Button);
        this.head = this.get('_head_');
        this.headSprite = this.head.getComponent(cc.Sprite);
        
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
        this.passWordConfirmEditBox.node.on('editing-did-began', this.onpassWordConfirmEditBoxEditingBegan, this);
        this.passWordConfirmEditBox.node.on('editing-did-ended', this.onpassWordConfirmEditBoxEditingEnded, this);
        this.passWordConfirmEditBox.node.on('editing-return', this.onpassWordConfirmEditBoxEditingReturn, this);
        this.passWordConfirmEditBox.node.on('text-changed', this.onpassWordConfirmEditBoxTextChanged, this);
        this.btnConfirmButton.node.on('click', this.onbtnConfirmButtonClick, this);
        this.btnReturnButton.node.on('click', this.onbtnReturnButtonClick, this);

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
        this.passWordConfirmEditBox.node.off('editing-did-began', this.onpassWordConfirmEditBoxEditingBegan, this);
        this.passWordConfirmEditBox.node.off('editing-did-ended', this.onpassWordConfirmEditBoxEditingEnded, this);
        this.passWordConfirmEditBox.node.off('editing-return', this.onpassWordConfirmEditBoxEditingReturn, this);
        this.passWordConfirmEditBox.node.off('text-changed', this.onpassWordConfirmEditBoxTextChanged, this);
        this.btnConfirmButton.node.off('click', this.onbtnConfirmButtonClick, this);
        this.btnReturnButton.node.off('click', this.onbtnReturnButtonClick, this);

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

    private onpassWordConfirmEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private onpassWordConfirmEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private onpassWordConfirmEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private onpassWordConfirmEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }

    private onbtnConfirmButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnReturnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}