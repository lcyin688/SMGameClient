// This script is automatic generation, please do not edit.
// If you need add logic, please write in BasketBallMainView.ts .
// If you need add data, please write in BasketBallMainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BasketBallMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_BasketBallMain';

    public btnMenu: cc.Node;
    public btnMenuSprite: cc.Sprite = undefined;
    public btnMenuButton: cc.Button = undefined;
    public txtCount: cc.Node;
    public txtCountLabel: cc.Label = undefined;
    public left: cc.Node;
    public leftSprite: cc.Sprite = undefined;
    public leftBoxCollider: cc.BoxCollider = undefined;
    public right: cc.Node;
    public rightSprite: cc.Sprite = undefined;
    public rightBoxCollider: cc.BoxCollider = undefined;
    public line: cc.Node;
    public lineSprite: cc.Sprite = undefined;
    public content: cc.Node;
    public contentWidget: cc.Widget = undefined;
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
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.txtCount = this.get('_txtCount_');
        this.txtCountLabel = this.txtCount.getComponent(cc.Label);
        this.left = this.get('_left_');
        this.leftSprite = this.left.getComponent(cc.Sprite);
        this.leftBoxCollider = this.left.getComponent(cc.BoxCollider);
        this.right = this.get('_right_');
        this.rightSprite = this.right.getComponent(cc.Sprite);
        this.rightBoxCollider = this.right.getComponent(cc.BoxCollider);
        this.line = this.get('_line_');
        this.lineSprite = this.line.getComponent(cc.Sprite);
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
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