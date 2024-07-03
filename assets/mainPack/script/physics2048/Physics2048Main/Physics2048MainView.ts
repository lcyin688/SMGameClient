// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048MainView.ts .
// If you need add data, please write in Physics2048MainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048MainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';

    public content: cc.Node;
    public contentSprite: cc.Sprite = undefined;
    public btnMenu: cc.Node;
    public btnMenuSprite: cc.Sprite = undefined;
    public btnMenuButton: cc.Button = undefined;
    public txtLv: cc.Node;
    public txtLvLabel: cc.Label = undefined;
    public initPos: cc.Node;
    

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
        this.contentSprite = this.content.getComponent(cc.Sprite);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.txtLv = this.get('_txtLv_');
        this.txtLvLabel = this.txtLv.getComponent(cc.Label);
        this.initPos = this.get('_initPos_');
        
    }

    private addEvent() {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);

    }

    private removeEvent() {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);

    }

    private onbtnMenuButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}