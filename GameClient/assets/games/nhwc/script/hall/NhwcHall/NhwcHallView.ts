// This script is automatic generation, please do not edit.
// If you need add logic, please write in NhwcHallView.ts .
// If you need add data, please write in NhwcHallViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcHallView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcHall';

    public usernameLabel: cc.Node;
    public usernameLabelLabel: cc.Label = undefined;
    public usernameLabelWidget: cc.Widget = undefined;
    public head: cc.Node;
    public headSprite: cc.Sprite = undefined;
    public matchBtn: cc.Node;
    public matchBtnSprite: cc.Sprite = undefined;
    public matchBtnButton: cc.Button = undefined;
    public createBtn: cc.Node;
    public createBtnSprite: cc.Sprite = undefined;
    public createBtnButton: cc.Button = undefined;
    public joinBtn: cc.Node;
    public joinBtnSprite: cc.Sprite = undefined;
    public joinBtnButton: cc.Button = undefined;
    

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
        this.usernameLabel = this.get('_usernameLabel_');
        this.usernameLabelLabel = this.usernameLabel.getComponent(cc.Label);
        this.usernameLabelWidget = this.usernameLabel.getComponent(cc.Widget);
        this.head = this.get('_head_');
        this.headSprite = this.head.getComponent(cc.Sprite);
        this.matchBtn = this.get('_matchBtn_');
        this.matchBtnSprite = this.matchBtn.getComponent(cc.Sprite);
        this.matchBtnButton = this.matchBtn.getComponent(cc.Button);
        this.createBtn = this.get('_createBtn_');
        this.createBtnSprite = this.createBtn.getComponent(cc.Sprite);
        this.createBtnButton = this.createBtn.getComponent(cc.Button);
        this.joinBtn = this.get('_joinBtn_');
        this.joinBtnSprite = this.joinBtn.getComponent(cc.Sprite);
        this.joinBtnButton = this.joinBtn.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.matchBtnButton.node.on('click', this.onmatchBtnButtonClick, this);
        this.createBtnButton.node.on('click', this.oncreateBtnButtonClick, this);
        this.joinBtnButton.node.on('click', this.onjoinBtnButtonClick, this);

    }

    private removeEvent() {
        this.matchBtnButton.node.off('click', this.onmatchBtnButtonClick, this);
        this.createBtnButton.node.off('click', this.oncreateBtnButtonClick, this);
        this.joinBtnButton.node.off('click', this.onjoinBtnButtonClick, this);

    }

    private onmatchBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private oncreateBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onjoinBtnButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}