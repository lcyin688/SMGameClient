// This script is automatic generation, please do not edit.
// If you need add logic, please write in MapCreateMainView.ts .
// If you need add data, please write in MapCreateMainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';
import TabPage from "./../../../../c2f-framework/component/common/TabPage";


const { ccclass, property } = cc._decorator;
@ccclass
export default class MapCreateMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_MapCreateMain';

    public content: cc.Node;
    public btnSave: cc.Node;
    public btnSaveSprite: cc.Sprite = undefined;
    public btnSaveButton: cc.Button = undefined;
    public btnNew: cc.Node;
    public btnNewSprite: cc.Sprite = undefined;
    public btnNewButton: cc.Button = undefined;
    public tabGroup: cc.Node;
    public tabGroupLayout: cc.Layout = undefined;
    public tabGroupTabPage: TabPage = undefined;
    public tabGroupToggleContainer: cc.ToggleContainer = undefined;
    public editBox: cc.Node;
    public editBoxEditBox: cc.EditBox = undefined;
    

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
        this.content = this.get('_content_');
        this.btnSave = this.get('_btnSave_');
        this.btnSaveSprite = this.btnSave.getComponent(cc.Sprite);
        this.btnSaveButton = this.btnSave.getComponent(cc.Button);
        this.btnNew = this.get('_btnNew_');
        this.btnNewSprite = this.btnNew.getComponent(cc.Sprite);
        this.btnNewButton = this.btnNew.getComponent(cc.Button);
        this.tabGroup = this.get('_tabGroup_');
        this.tabGroupLayout = this.tabGroup.getComponent(cc.Layout);
        this.tabGroupTabPage = this.tabGroup.getComponent(TabPage);
        this.tabGroupToggleContainer = this.tabGroup.getComponent(cc.ToggleContainer);
        this.editBox = this.get('_editBox_');
        this.editBoxEditBox = this.editBox.getComponent(cc.EditBox);
        
    }

    private addEvent() {
        this.btnSaveButton.node.on('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.on('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.on('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.on('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.on('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.on('text-changed', this.oneditBoxEditBoxTextChanged, this);

    }

    private removeEvent() {
        this.btnSaveButton.node.off('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.off('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.off('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.off('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.off('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.off('text-changed', this.oneditBoxEditBoxTextChanged, this);

    }

    private onbtnSaveButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnNewButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private oneditBoxEditBoxEditingBegan(component: cc.EditBox) {
        this.emit('editing-did-began', component);
    }

    private oneditBoxEditBoxEditingEnded(component: cc.EditBox) {
        this.emit('editing-did-ended', component);
    }

    private oneditBoxEditBoxEditingReturn(component: cc.EditBox) {
        this.emit('editing-return', component);
    }

    private oneditBoxEditBoxTextChanged(component: cc.EditBox) {
        this.emit('text-changed', component);
    }


}