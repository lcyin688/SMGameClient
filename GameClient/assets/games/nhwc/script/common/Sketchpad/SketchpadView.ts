// This script is automatic generation, please do not edit.
// If you need add logic, please write in SketchpadView.ts .
// If you need add data, please write in SketchpadViewModel.ts .

import { UIPanelBase } from './../../../../../c2f-framework/gui/layer/UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SketchpadView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Sketchpad';

    public penImg: cc.Node;
    public penImgSprite: cc.Sprite = undefined;
    public pen: cc.Node;
    public penGraphics: cc.Graphics = undefined;
    

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
        this.penImg = this.get('_penImg_');
        this.penImgSprite = this.penImg.getComponent(cc.Sprite);
        this.pen = this.get('_pen_');
        this.penGraphics = this.pen.getComponent(cc.Graphics);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}