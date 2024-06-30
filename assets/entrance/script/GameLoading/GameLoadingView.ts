// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoadingView.ts .
// If you need add data, please write in GameLoadingViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLoadingView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'GameLoading';

    public barLoading: cc.Node;
    public barLoadingSprite: cc.Sprite = undefined;
    public barLoadingProgressBar: cc.ProgressBar = undefined;
    public noticeTop: cc.Node;
    public noticeTopLabel: cc.Label = undefined;
    public noticeTopLabelOutline: cc.LabelOutline = undefined;
    public noticeBot: cc.Node;
    public noticeBotLabel: cc.Label = undefined;
    public noticeBotLabelOutline: cc.LabelOutline = undefined;
    public progress: cc.Node;
    public progressLabel: cc.Label = undefined;
    public progressLabelOutline: cc.LabelOutline = undefined;
    public loadIcon: cc.Node;
    public loadIconSprite: cc.Sprite = undefined;
    

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
        this.barLoading = this.get('_barLoading_');
        this.barLoadingSprite = this.barLoading.getComponent(cc.Sprite);
        this.barLoadingProgressBar = this.barLoading.getComponent(cc.ProgressBar);
        this.noticeTop = this.get('_noticeTop_');
        this.noticeTopLabel = this.noticeTop.getComponent(cc.Label);
        this.noticeTopLabelOutline = this.noticeTop.getComponent(cc.LabelOutline);
        this.noticeBot = this.get('_noticeBot_');
        this.noticeBotLabel = this.noticeBot.getComponent(cc.Label);
        this.noticeBotLabelOutline = this.noticeBot.getComponent(cc.LabelOutline);
        this.progress = this.get('_progress_');
        this.progressLabel = this.progress.getComponent(cc.Label);
        this.progressLabelOutline = this.progress.getComponent(cc.LabelOutline);
        this.loadIcon = this.get('_loadIcon_');
        this.loadIconSprite = this.loadIcon.getComponent(cc.Sprite);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}