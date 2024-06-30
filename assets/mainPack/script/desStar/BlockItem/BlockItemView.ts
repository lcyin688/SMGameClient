// This script is automatic generation, please do not edit.
// If you need add logic, please write in BlockItemView.ts .
// If you need add data, please write in BlockItemViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BlockItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_BlockItem';

    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public btn: cc.Node;
    public btnButton: cc.Button = undefined;
    

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
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.btn = this.get('_btn_');
        this.btnButton = this.btn.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnButton.node.on('click', this.onbtnButtonClick, this);

    }

    private removeEvent() {
        this.btnButton.node.off('click', this.onbtnButtonClick, this);

    }

    private onbtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}