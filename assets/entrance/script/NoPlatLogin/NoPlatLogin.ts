import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import NoPlatLoginModel from './NoPlatLoginModel';
import NoPlatLoginView from './NoPlatLoginView';
import { EntranceUI } from '../EntranceView';

interface InputData {
    loginCb: Function;
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class NoPlatLogin extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'NoPlatLogin';

    public model: NoPlatLoginModel = undefined;
    public view: NoPlatLoginView = undefined;

    private inputDt: InputData = null;

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }
    onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.loginButton.name:
                this.CC_onClicklogin();
                break;

            default:
                break;
        }
    }

    private CC_onClicklogin() {
        let accId = this.view.userIdEditBox.string.trim();
        if (accId.length <= 0) {
            c2f.gui.notifyTxt('account id is empty!');
            return;
        }
        this.model.accountId = accId;
        this.model.sdkFlag = this.view.platFlagEditBox.string.trim();
        this.model.payFlag = this.view.payFlagEditBox.string.trim();

        this.model.saveLoginInfo();
        if (this.inputDt) {
            this.inputDt.loginCb && this.inputDt.loginCb(this.model.accountId, this.model.sdkFlag, this.model.payFlag)
        }

        c2f.gui.remove(EntranceUI.NoPlatLogin);
    }

    protected onViewOpen(param: any) {
        this.model.loadLastAccId();
        this.inputDt = param;
    }
}