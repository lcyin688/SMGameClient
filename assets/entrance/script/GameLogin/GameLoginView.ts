// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoginView.ts .
// If you need add data, please write in GameLoginViewModel.ts .

import { UIViewBase } from './../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLoginView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'GameLogin';

    public btn2048: cc.Node;
    public btn2048Button: cc.Button = undefined;
    public btnCreateMap: cc.Node;
    public btnCreateMapButton: cc.Button = undefined;
    public btnStart: cc.Node;
    public btnStartButton: cc.Button = undefined;
    public btnBasketBall: cc.Node;
    public btnBasketBallButton: cc.Button = undefined;
    

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
        this.btn2048 = this.get('_btn2048_');
        this.btn2048Button = this.btn2048.getComponent(cc.Button);
        this.btnCreateMap = this.get('_btnCreateMap_');
        this.btnCreateMapButton = this.btnCreateMap.getComponent(cc.Button);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.btnBasketBall = this.get('_btnBasketBall_');
        this.btnBasketBallButton = this.btnBasketBall.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btn2048Button.node.on('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.on('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.on('click', this.onbtnBasketBallButtonClick, this);

    }

    private removeEvent() {
        this.btn2048Button.node.off('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.off('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.off('click', this.onbtnBasketBallButtonClick, this);

    }

    private onbtn2048ButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnCreateMapButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnStartButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnBasketBallButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}