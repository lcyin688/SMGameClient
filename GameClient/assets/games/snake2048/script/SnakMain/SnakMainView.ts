// This script is automatic generation, please do not edit.
// If you need add logic, please write in SnakMainView.ts .
// If you need add data, please write in SnakMainViewModel.ts .

import { UIViewBase } from './../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SnakMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'F_SnakMain';

    public viewArea: cc.Node;
    public snake: cc.Node;
    public snakeWidget: cc.Widget = undefined;
    public snakeAI: cc.Node;
    public snakeAIWidget: cc.Widget = undefined;
    public menu: cc.Node;
    public menuWidget: cc.Widget = undefined;
    public btnSound: cc.Node;
    public btnSoundWidget: cc.Widget = undefined;
    public btnSoundButton: cc.Button = undefined;
    public btnBack: cc.Node;
    public btnBackSprite: cc.Sprite = undefined;
    public btnBackButton: cc.Button = undefined;
    public btnBackWidget: cc.Widget = undefined;
    public rankList: cc.Node;
    public rankListWidget: cc.Widget = undefined;
    public Joystick: cc.Node;
    public JoystickWidget: cc.Widget = undefined;
    public JoystickSprite: cc.Sprite = undefined;
    public btnSpeed: cc.Node;
    public btnSpeedSprite: cc.Sprite = undefined;
    public btnSpeedWidget: cc.Widget = undefined;
    public overCount: cc.Node;
    public overCountLabel: cc.Label = undefined;
    public overCountLabelOutline: cc.LabelOutline = undefined;
    public gameOver: cc.Node;
    public gameOverWidget: cc.Widget = undefined;
    public gameOverBlockInputEvents: cc.BlockInputEvents = undefined;
    public overFinal: cc.Node;
    public overFinalWidget: cc.Widget = undefined;
    public rankFinalSelf: cc.Node;
    public rankFinalSelfLabel: cc.Label = undefined;
    public rankFinalSelfLabelOutline: cc.LabelOutline = undefined;
    public finalScro: cc.Node;
    public finalScroSprite: cc.Sprite = undefined;
    public finalScroScrollView: cc.ScrollView = undefined;
    public btnFinalRestart: cc.Node;
    public btnFinalRestartSprite: cc.Sprite = undefined;
    public btnFinalRestartButton: cc.Button = undefined;
    public overLose: cc.Node;
    public overLoseWidget: cc.Widget = undefined;
    public btnRelogin: cc.Node;
    public btnReloginSprite: cc.Sprite = undefined;
    public btnReloginButton: cc.Button = undefined;
    public btnLoseRestart: cc.Node;
    public btnLoseRestartSprite: cc.Sprite = undefined;
    public btnLoseRestartButton: cc.Button = undefined;
    public loseTimeCount: cc.Node;
    public loseTimeCountLabel: cc.Label = undefined;
    public loseTimeCountLabelOutline: cc.LabelOutline = undefined;
    

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
        this.viewArea = this.get('_viewArea_');
        this.snake = this.get('_snake_');
        this.snakeWidget = this.snake.getComponent(cc.Widget);
        this.snakeAI = this.get('_snakeAI_');
        this.snakeAIWidget = this.snakeAI.getComponent(cc.Widget);
        this.menu = this.get('_menu_');
        this.menuWidget = this.menu.getComponent(cc.Widget);
        this.btnSound = this.get('_btnSound_');
        this.btnSoundWidget = this.btnSound.getComponent(cc.Widget);
        this.btnSoundButton = this.btnSound.getComponent(cc.Button);
        this.btnBack = this.get('_btnBack_');
        this.btnBackSprite = this.btnBack.getComponent(cc.Sprite);
        this.btnBackButton = this.btnBack.getComponent(cc.Button);
        this.btnBackWidget = this.btnBack.getComponent(cc.Widget);
        this.rankList = this.get('_rankList_');
        this.rankListWidget = this.rankList.getComponent(cc.Widget);
        this.Joystick = this.get('_Joystick_');
        this.JoystickWidget = this.Joystick.getComponent(cc.Widget);
        this.JoystickSprite = this.Joystick.getComponent(cc.Sprite);
        this.btnSpeed = this.get('_btnSpeed_');
        this.btnSpeedSprite = this.btnSpeed.getComponent(cc.Sprite);
        this.btnSpeedWidget = this.btnSpeed.getComponent(cc.Widget);
        this.overCount = this.get('_overCount_');
        this.overCountLabel = this.overCount.getComponent(cc.Label);
        this.overCountLabelOutline = this.overCount.getComponent(cc.LabelOutline);
        this.gameOver = this.get('_gameOver_');
        this.gameOverWidget = this.gameOver.getComponent(cc.Widget);
        this.gameOverBlockInputEvents = this.gameOver.getComponent(cc.BlockInputEvents);
        this.overFinal = this.get('_overFinal_');
        this.overFinalWidget = this.overFinal.getComponent(cc.Widget);
        this.rankFinalSelf = this.get('_rankFinalSelf_');
        this.rankFinalSelfLabel = this.rankFinalSelf.getComponent(cc.Label);
        this.rankFinalSelfLabelOutline = this.rankFinalSelf.getComponent(cc.LabelOutline);
        this.finalScro = this.get('_finalScro_');
        this.finalScroSprite = this.finalScro.getComponent(cc.Sprite);
        this.finalScroScrollView = this.finalScro.getComponent(cc.ScrollView);
        this.btnFinalRestart = this.get('_btnFinalRestart_');
        this.btnFinalRestartSprite = this.btnFinalRestart.getComponent(cc.Sprite);
        this.btnFinalRestartButton = this.btnFinalRestart.getComponent(cc.Button);
        this.overLose = this.get('_overLose_');
        this.overLoseWidget = this.overLose.getComponent(cc.Widget);
        this.btnRelogin = this.get('_btnRelogin_');
        this.btnReloginSprite = this.btnRelogin.getComponent(cc.Sprite);
        this.btnReloginButton = this.btnRelogin.getComponent(cc.Button);
        this.btnLoseRestart = this.get('_btnLoseRestart_');
        this.btnLoseRestartSprite = this.btnLoseRestart.getComponent(cc.Sprite);
        this.btnLoseRestartButton = this.btnLoseRestart.getComponent(cc.Button);
        this.loseTimeCount = this.get('_loseTimeCount_');
        this.loseTimeCountLabel = this.loseTimeCount.getComponent(cc.Label);
        this.loseTimeCountLabelOutline = this.loseTimeCount.getComponent(cc.LabelOutline);
        
    }

    private addEvent() {
        this.btnSoundButton.node.on('click', this.onbtnSoundButtonClick, this);
        this.btnBackButton.node.on('click', this.onbtnBackButtonClick, this);
        this.finalScroScrollView.node.on('scroll-to-top', this.onfinalScroScrollViewScrollToTop, this);
        this.finalScroScrollView.node.on('scroll-to-bottom', this.onfinalScroScrollViewScrollToBottom, this);
        this.finalScroScrollView.node.on('scroll-to-left', this.onfinalScroScrollViewScrollToLeft, this);
        this.finalScroScrollView.node.on('scroll-to-right', this.onfinalScroScrollViewScrollToRight, this);
        this.finalScroScrollView.node.on('scrolling', this.onfinalScroScrollViewScrolling, this);
        this.finalScroScrollView.node.on('bounce-bottom', this.onfinalScroScrollViewBounceBottom, this);
        this.finalScroScrollView.node.on('bounce-top', this.onfinalScroScrollViewBounceTop, this);
        this.finalScroScrollView.node.on('bounce-left', this.onfinalScroScrollViewBounceLeft, this);
        this.finalScroScrollView.node.on('bounce-right', this.onfinalScroScrollViewBounceRight, this);
        this.finalScroScrollView.node.on('scroll-ended', this.onfinalScroScrollViewScrollEnded, this);
        this.finalScroScrollView.node.on('touch-up', this.onfinalScroScrollViewTouchUp, this);
        this.finalScroScrollView.node.on('scroll-began', this.onfinalScroScrollViewScrollBegan, this);
        this.btnFinalRestartButton.node.on('click', this.onbtnFinalRestartButtonClick, this);
        this.btnReloginButton.node.on('click', this.onbtnReloginButtonClick, this);
        this.btnLoseRestartButton.node.on('click', this.onbtnLoseRestartButtonClick, this);

    }

    private removeEvent() {
        this.btnSoundButton.node.off('click', this.onbtnSoundButtonClick, this);
        this.btnBackButton.node.off('click', this.onbtnBackButtonClick, this);
        this.finalScroScrollView.node.off('scroll-to-top', this.onfinalScroScrollViewScrollToTop, this);
        this.finalScroScrollView.node.off('scroll-to-bottom', this.onfinalScroScrollViewScrollToBottom, this);
        this.finalScroScrollView.node.off('scroll-to-left', this.onfinalScroScrollViewScrollToLeft, this);
        this.finalScroScrollView.node.off('scroll-to-right', this.onfinalScroScrollViewScrollToRight, this);
        this.finalScroScrollView.node.off('scrolling', this.onfinalScroScrollViewScrolling, this);
        this.finalScroScrollView.node.off('bounce-bottom', this.onfinalScroScrollViewBounceBottom, this);
        this.finalScroScrollView.node.off('bounce-top', this.onfinalScroScrollViewBounceTop, this);
        this.finalScroScrollView.node.off('bounce-left', this.onfinalScroScrollViewBounceLeft, this);
        this.finalScroScrollView.node.off('bounce-right', this.onfinalScroScrollViewBounceRight, this);
        this.finalScroScrollView.node.off('scroll-ended', this.onfinalScroScrollViewScrollEnded, this);
        this.finalScroScrollView.node.off('touch-up', this.onfinalScroScrollViewTouchUp, this);
        this.finalScroScrollView.node.off('scroll-began', this.onfinalScroScrollViewScrollBegan, this);
        this.btnFinalRestartButton.node.off('click', this.onbtnFinalRestartButtonClick, this);
        this.btnReloginButton.node.off('click', this.onbtnReloginButtonClick, this);
        this.btnLoseRestartButton.node.off('click', this.onbtnLoseRestartButtonClick, this);

    }

    private onbtnSoundButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnBackButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onfinalScroScrollViewScrollToTop(component: cc.ScrollView) {
        this.emit('scroll-to-top', component);
    }

    private onfinalScroScrollViewScrollToBottom(component: cc.ScrollView) {
        this.emit('scroll-to-bottom', component);
    }

    private onfinalScroScrollViewScrollToLeft(component: cc.ScrollView) {
        this.emit('scroll-to-left', component);
    }

    private onfinalScroScrollViewScrollToRight(component: cc.ScrollView) {
        this.emit('scroll-to-right', component);
    }

    private onfinalScroScrollViewScrolling(component: cc.ScrollView) {
        this.emit('scrolling', component);
    }

    private onfinalScroScrollViewBounceBottom(component: cc.ScrollView) {
        this.emit('bounce-bottom', component);
    }

    private onfinalScroScrollViewBounceTop(component: cc.ScrollView) {
        this.emit('bounce-top', component);
    }

    private onfinalScroScrollViewBounceLeft(component: cc.ScrollView) {
        this.emit('bounce-left', component);
    }

    private onfinalScroScrollViewBounceRight(component: cc.ScrollView) {
        this.emit('bounce-right', component);
    }

    private onfinalScroScrollViewScrollEnded(component: cc.ScrollView) {
        this.emit('scroll-ended', component);
    }

    private onfinalScroScrollViewTouchUp(component: cc.ScrollView) {
        this.emit('touch-up', component);
    }

    private onfinalScroScrollViewScrollBegan(component: cc.ScrollView) {
        this.emit('scroll-began', component);
    }

    private onbtnFinalRestartButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnReloginButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnLoseRestartButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}