// This script is automatic generation, please do not edit.
// If you need add logic, please write in SnakLoadingView.ts .
// If you need add data, please write in SnakLoadingViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakLoadingView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_SnakLoading';

    public progressBar: cc.Node;
    public progressBarSprite: cc.Sprite = undefined;
    public progressBarProgressBar: cc.ProgressBar = undefined;
    public btnPlay: cc.Node;
    public btnPlaySprite: cc.Sprite = undefined;
    public btnPlayButton: cc.Button = undefined;
    

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
        this.progressBar = this.get('_progressBar_');
        this.progressBarSprite = this.progressBar.getComponent(cc.Sprite);
        this.progressBarProgressBar = this.progressBar.getComponent(cc.ProgressBar);
        this.btnPlay = this.get('_btnPlay_');
        this.btnPlaySprite = this.btnPlay.getComponent(cc.Sprite);
        this.btnPlayButton = this.btnPlay.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnPlayButton.node.on('click', this.onbtnPlayButtonClick, this);

    }

    private removeEvent() {
        this.btnPlayButton.node.off('click', this.onbtnPlayButtonClick, this);

    }

    private onbtnPlayButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}