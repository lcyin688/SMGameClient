import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import BoxGameMainModel from './BoxGameMainModel';
import BoxGameMainView from './BoxGameMainView';
import CountdownLabel from '../../../c2f-framework/component/common/CountdownLabel';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxGameMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxGameMain';

    public model: BoxGameMainModel = undefined;
    public view: BoxGameMainView = undefined;

    protected onViewOpen(param: any) {
        this.model.initData()
        this.loginToGame()


    }

    private loginToGame() {
        c2f.gui.showLoading();
        let url = this.model.baseUrl + '/pddgame/login'
        let data = JSON.stringify({
            ksCode: this.model.accounts[0],
            test: !0
        });
        this.model.sendMsg(url, (dataOut: msgBoxGame.GW_Login) => {
            this.model.playerData = dataOut
            this.reflashView()
            this.model.getWsUrl(dataOut.token, (reason: string) => {
                c2f.gui.hideLoading();
                if (reason === "Connected") {
                    let dataTemp = '{"protocol":"json", "version":1}'
                    this.model.client.tcpSend(dataTemp)
                } else {
                    c2f.gui.notifyTxt('1006');
                    c2f.net.purge();
                }
            })

        }, data, 'POST')
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

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.btnCloseButton.name:
                this.CC_onClickbtnClose();
                break;

            case this.view.btnStartButton.name:
                this.CC_onClickbtnStart();
                break;

            case this.view.boxBtnButton.name:
                this.CC_onClickboxBtn();
                break;


            default:
                break;
        }
    }

    private CC_onClickbtnClose() {
        this.closeView()
    }

    private CC_onClickbtnStart() {
        this.startGame()
    }

    private reflashView() {
        let endTs = this.model.playerData.endTime
        let tsNow = c2f.utils.date.getLocalTick();
        let sec = endTs - tsNow;
        this.setTimeCountDownScore(this.view.txt_timeCountdownLabel, sec)
        this.setNowMoney()
        this.setNowDimond()
        this.setNowCoin()
        this.setNowCash()
        this.setLevel()
        this.setStartCount()
        this.setAdCount()
        this.setGameRet()

    }
    private setGameRet() {
        if (this.model.playerData.gameRet.isOver) {
            this.view.less.active = true
            this.setLessCount()



        }

    }
    private setNowMoney() {
        this.view.txt_1Label.string = this.model.playerData.nowMoney.toString()
    }
    private setNowDimond() {
        this.view.txt_count1Label.string = this.model.playerData.nowDiamond.toString()
    }
    private setNowCoin() {
        this.view.txt_count2Label.string = this.model.playerData.nowCoin.toString()
    }

    private setNowCash() {
        this.view.txt_count3Label.string = this.model.playerData.nowCash.toString()
    }

    private setLevel() {
        this.view.txt_levelLabel.string = this.model.playerData.gameLevel.toString()
    }

    private setAdCount() {
        this.view.txt_adLabel.string = this.model.playerData.boxAdLuckTimes.toString()
    }

    private setStartCount() {
        this.view.txt_startCountLabel.string = this.model.playerData.timeBoxs.toString()
    }

    private setLessCount() {
        this.view.txt_lessLabel.string = this.model.playerData.gameRet.coinNum.toString()
    }
    /**倒计时显示 */
    private setTimeCountDownScore(countdownLabel: CountdownLabel, interval: number) {
        let dayStr = "%{d}" + c2f.language.words(3001) + "%{hh}:%{mm}:%{ss}";
        countdownLabel.startCountdown(interval, {
            S: "%{hh}:%{mm}:%{ss}",
            M: "%{hh}:%{mm}:%{ss}",
            H: "%{hh}:%{mm}:%{ss}",
            D: dayStr
        }, c2f.language.words(3000), null, () => {
        });
    }

    /**点击开宝箱 看广告 */
    private CC_onClickboxBtn() {
        this.clickAd(1)




    }

    private clickAd(typ: number) {
        let url = this.model.baseUrl + '/pddgame/viewad'
        let data = JSON.stringify({
            operType: typ,
        });
        this.model.sendMsg(url, (dataOut: any) => {



        }, data, 'POST')
    }


    private startGame() {
        let url = this.model.baseUrl + '/pddgame/timebox'
        this.model.sendMsg(url, (dataOut: any) => {

        }, null, 'POST')
    }

    private luckGame(typ: number) {
        let url = this.model.baseUrl + '/pddgame/luck'
        let data = JSON.stringify({
            luckType: typ,
        });

        this.model.sendMsg(url, (dataOut: any) => {

        }, data, 'POST')
    }


}