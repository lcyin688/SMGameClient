// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyMainView.ts .
// If you need add data, please write in YngyMainViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_YngyMain';

    public btnMenu: cc.Node;
    public btnMenuSprite: cc.Sprite = undefined;
    public btnMenuButton: cc.Button = undefined;
    public lvPanel: cc.Node;
    public lvPanelSprite: cc.Sprite = undefined;
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
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.lvPanel = this.get('_lvPanel_');
        this.lvPanelSprite = this.lvPanel.getComponent(cc.Sprite);
        this.seleted = this.get('_seleted_');
        this.seletedSprite = this.seleted.getComponent(cc.Sprite);
        
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