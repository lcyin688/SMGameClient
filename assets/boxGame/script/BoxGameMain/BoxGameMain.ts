import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import BoxGameMainModel from './BoxGameMainModel';
import BoxGameMainView from './BoxGameMainView';

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
        let url = this.model.baseUrl + '/pddgame/login'
        let data = JSON.stringify({
            ksCode: this.model.accounts[0],
            test: !0
        });
        this.model.sendMsg(url, () => {

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

            default:
                break;
        }
    }

    private CC_onClickbtnClose() {

    }

    private CC_onClickbtnStart() {

    }


}