// This script is automatic generation, please do not edit.
// If you need add logic, please write in VipItemView.ts .
// If you need add data, please write in VipItemViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipItemView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_VipItem';

    public vipIcon: cc.Node;
    public vipIconSprite: cc.Sprite = undefined;
    public vipLevel: cc.Node;
    public vipLevelLabel: cc.Label = undefined;
    public btnItem: cc.Node;
    public btnItemButton: cc.Button = undefined;
    

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
        this.vipIcon = this.get('_vipIcon_');
        this.vipIconSprite = this.vipIcon.getComponent(cc.Sprite);
        this.vipLevel = this.get('_vipLevel_');
        this.vipLevelLabel = this.vipLevel.getComponent(cc.Label);
        this.btnItem = this.get('_btnItem_');
        this.btnItemButton = this.btnItem.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnItemButton.node.on('click', this.onbtnItemButtonClick, this);

    }

    private removeEvent() {
        this.btnItemButton.node.off('click', this.onbtnItemButtonClick, this);

    }

    private onbtnItemButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}