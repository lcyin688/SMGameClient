// This script is automatic generation, please do not edit.
// If you need add logic, please write in YngyItemView.ts .
// If you need add data, please write in YngyItemViewModel.ts .

import { UIPanelBase } from './../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_YngyItem';

    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconButton: cc.Button = undefined;
    

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
        this.iconButton = this.icon.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.iconButton.node.on('click', this.oniconButtonClick, this);

    }

    private removeEvent() {
        this.iconButton.node.off('click', this.oniconButtonClick, this);

    }

    private oniconButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}