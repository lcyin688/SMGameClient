import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import GameLoginModel from './GameLoginModel';
import GameLoginView from './GameLoginView';
import { GameHelper } from '../../../Script/game/GameHelper';
import { GameConsts } from '../../../Script/game/GameConsts';
import { UIHelper } from '../../../Script/game/UIHelper';
import { MainPackUI } from '../../../mainPack/script/MainPackView';
import { UINetwork } from '../../../Script/game/UINetwork';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLogin extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLogin';

    public model: GameLoginModel = undefined;
    public view: GameLoginView = undefined;

    protected onViewOpen(param: any) {
        // this.connetToServer()
    }

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }
    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    protected onLoad(): void {
        if (super.onLoad) {
            super.onLoad();
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
    }

    protected onDestroy(): void {
        if (super.onDestroy) {
            super.onDestroy();
        }
    }

    protected start(): void {
        UIHelper.playMusic('backMusic');
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {
            case this.view.btnStartButton.name:
                this.CC_onClickbtnStart();
                break;

            case this.view.btnBasketBallButton.name:
                this.CC_onClickbtnBasketBall();
                break;

            case this.view.btnLoginButton.name:
                this.CC_onClickbtnLogin();
                break;

            case this.view.btnSnak2048Button.name:
                this.CC_onClickbtnSnak2048();
                break;

            case this.view.btnSnakNhwcButton.name:
                this.CC_onClickbtnSnakNhwc();
                break;

            case this.view.btnWheelListButton.name:
                this.CC_onClickbtnWheelList();
                break;

            case this.view.btn2048Button.name:
                this.CC_onClickbtn2048();
                break;

            case this.view.btnCreateMapButton.name:
                this.CC_onClickbtnCreateMap();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnSnakNhwc() {
        GameHelper.loadBundle(GameConsts.Bundle.nhwc).then((UIID) => {
            c2f.gui.open(UIID.NhwcLogin);
        });
    }

    private CC_onClickbtnStart() {
        GameHelper.loadBundle(GameConsts.Bundle.desStar).then((UIID) => {
            c2f.gui.open(UIID.DesStarMain);
        });
    }

    private CC_onClickbtn2048() {
        GameHelper.loadBundle(GameConsts.Bundle.physics2048).then((UIID) => {
            c2f.gui.open(UIID.Physics2048Main);
        });
    }

    private CC_onClickbtnSnak2048() {
        GameHelper.loadBundle(GameConsts.Bundle.snake2048).then((UIID) => {
            c2f.gui.open(UIID.SnakLoading);
        });
    }

    private CC_onClickbtnCreateMap() {
        GameHelper.loadBundle(GameConsts.Bundle.mainPack).then((UIID) => {
            c2f.gui.open(UIID.MapCreateMain);
        });
    }

    private CC_onClickbtnBasketBall() {
        GameHelper.loadBundle(GameConsts.Bundle.mainPack).then((UIID) => {
            c2f.gui.open(UIID.BasketBallMain);
        });
    }

    /** 连接服务器 */
    private connetToServer() {
        if (!c2f.net.toUI) {
            c2f.net.toUI = new UINetwork();
        }
        let url = 'ws://127.0.0.1:9000';
        c2f.gui.showLoading();
        c2f.net.initService().then(() => {
            c2f.net.connect(url, (reason: string) => {
                c2f.gui.hideLoading();
                cc.log('connetToServer  reason  ==  ' + reason);
                if (reason === 'Connected') {
                    this.loginToGame();
                } else {
                    c2f.gui.notifyTxt('1006');
                    8;
                    c2f.net.purge();
                }
            });
        });
    }
    private loginToGame() {
        c2f.gui.notifyTxt('513');
        //发个消息给服务器
        // szg.player.login.reqLogin("lcy", "gogogo")
    }

    private CC_onClickbtnLogin() {
        console.error('CC_onClickbtnLogin test 004');
        this.connetToServer();

        // let url = "ws://127.0.0.1:8999";
        // c2f.webSocket.connect(url)
        // 创建玩家登录信息
        // const playerInfo: msg.CS_Ping = {

        // };
        // console.error('CC_onClickbtnLogin playerInfo  ',playerInfo);

        // c2f.webSocket.send(playerInfo)
    }
    private CC_onClickbtnWheelList() {
        // this.closeView();
        GameHelper.loadBundle(GameConsts.Bundle.smallToolDemo).then((UIID) => {
            c2f.gui.open(UIID.WheelGame);
        });
    }
}
