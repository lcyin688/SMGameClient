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
    public btnLogin: cc.Node;
    public btnLoginButton: cc.Button = undefined;
    public btnSnak2048: cc.Node;
    public btnSnak2048Button: cc.Button = undefined;
    public btnSnakNhwc: cc.Node;
    public btnSnakNhwcButton: cc.Button = undefined;
    public btnWheelList: cc.Node;
    public btnWheelListButton: cc.Button = undefined;
    

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
        this.btnLogin = this.get('_btnLogin_');
        this.btnLoginButton = this.btnLogin.getComponent(cc.Button);
        this.btnSnak2048 = this.get('_btnSnak2048_');
        this.btnSnak2048Button = this.btnSnak2048.getComponent(cc.Button);
        this.btnSnakNhwc = this.get('_btnSnakNhwc_');
        this.btnSnakNhwcButton = this.btnSnakNhwc.getComponent(cc.Button);
        this.btnWheelList = this.get('_btnWheelList_');
        this.btnWheelListButton = this.btnWheelList.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btn2048Button.node.on('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.on('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.on('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.on('click', this.onbtnLoginButtonClick, this);
        this.btnSnak2048Button.node.on('click', this.onbtnSnak2048ButtonClick, this);
        this.btnSnakNhwcButton.node.on('click', this.onbtnSnakNhwcButtonClick, this);
        this.btnWheelListButton.node.on('click', this.onbtnWheelListButtonClick, this);

    }

    private removeEvent() {
        this.btn2048Button.node.off('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.off('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.off('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.off('click', this.onbtnLoginButtonClick, this);
        this.btnSnak2048Button.node.off('click', this.onbtnSnak2048ButtonClick, this);
        this.btnSnakNhwcButton.node.off('click', this.onbtnSnakNhwcButtonClick, this);
        this.btnWheelListButton.node.off('click', this.onbtnWheelListButtonClick, this);

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

    private onbtnLoginButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnSnak2048ButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnSnakNhwcButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnWheelListButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}