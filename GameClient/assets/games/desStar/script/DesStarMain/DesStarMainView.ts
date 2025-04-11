// This script is automatic generation, please do not edit.
// If you need add logic, please write in DesStarMainView.ts .
// If you need add data, please write in DesStarMainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class DesStarMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_DesStarMain';

    public bar: cc.Node;
    public barSprite: cc.Sprite = undefined;
    public barProgressBar: cc.ProgressBar = undefined;
    public txtLv: cc.Node;
    public txtLvLabel: cc.Label = undefined;
    public txtLvLabelOutline: cc.LabelOutline = undefined;
    public txtScore: cc.Node;
    public txtScoreLabel: cc.Label = undefined;
    public txtScoreLabelOutline: cc.LabelOutline = undefined;
    public endPos: cc.Node;
    public content: cc.Node;
    public reward: cc.Node;
    public rewardSprite: cc.Sprite = undefined;
    public btnMenu: cc.Node;
    public btnMenuSprite: cc.Sprite = undefined;
    public btnMenuButton: cc.Button = undefined;
    public gameWin: cc.Node;
    public winAni: cc.Node;
    public winAniVideoPlayer: cc.VideoPlayer = undefined;
    

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
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
        this.txtLv = this.get('_txtLv_');
        this.txtLvLabel = this.txtLv.getComponent(cc.Label);
        this.txtLvLabelOutline = this.txtLv.getComponent(cc.LabelOutline);
        this.txtScore = this.get('_txtScore_');
        this.txtScoreLabel = this.txtScore.getComponent(cc.Label);
        this.txtScoreLabelOutline = this.txtScore.getComponent(cc.LabelOutline);
        this.endPos = this.get('_endPos_');
        this.content = this.get('_content_');
        this.reward = this.get('_reward_');
        this.rewardSprite = this.reward.getComponent(cc.Sprite);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.gameWin = this.get('_gameWin_');
        this.winAni = this.get('_winAni_');
        this.winAniVideoPlayer = this.winAni.getComponent(cc.VideoPlayer);
        
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