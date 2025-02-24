// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLogoView.ts .
// If you need add data, please write in GameLogoViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLogoView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'GameLogo';

    public bar: cc.Node;
    public barSprite: cc.Sprite = undefined;
    public barProgressBar: cc.ProgressBar = undefined;
    

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
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}