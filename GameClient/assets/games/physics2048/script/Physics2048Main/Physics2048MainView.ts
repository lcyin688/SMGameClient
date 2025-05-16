// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048MainView.ts .
// If you need add data, please write in Physics2048MainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048MainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';

    public ske: cc.Node;
    public skeSkeleton: sp.Skeleton = undefined;
    public btnMenu: cc.Node;
    public btnMenuSprite: cc.Sprite = undefined;
    public btnMenuButton: cc.Button = undefined;
    public iconMax: cc.Node;
    public iconMaxSprite: cc.Sprite = undefined;
    public txtCurScore: cc.Node;
    public txtCurScoreLabel: cc.Label = undefined;
    public initPos: cc.Node;
    public content: cc.Node;
    public contentWidget: cc.Widget = undefined;
    public effect: cc.Node;
    public effectWidget: cc.Widget = undefined;
    public txtTotalScore: cc.Node;
    public txtTotalScoreLabel: cc.Label = undefined;
    public icon: cc.Node;
    public iconSprite: cc.Sprite = undefined;
    public iconRigidBody: cc.RigidBody = undefined;
    public iconPhysicsCircleCollider: cc.PhysicsCircleCollider = undefined;
    

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
        this.ske = this.get('_ske_');
        this.skeSkeleton = this.ske.getComponent(sp.Skeleton);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.iconMax = this.get('_iconMax_');
        this.iconMaxSprite = this.iconMax.getComponent(cc.Sprite);
        this.txtCurScore = this.get('_txtCurScore_');
        this.txtCurScoreLabel = this.txtCurScore.getComponent(cc.Label);
        this.initPos = this.get('_initPos_');
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
        this.effect = this.get('_effect_');
        this.effectWidget = this.effect.getComponent(cc.Widget);
        this.txtTotalScore = this.get('_txtTotalScore_');
        this.txtTotalScoreLabel = this.txtTotalScore.getComponent(cc.Label);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconRigidBody = this.icon.getComponent(cc.RigidBody);
        this.iconPhysicsCircleCollider = this.icon.getComponent(cc.PhysicsCircleCollider);
        
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