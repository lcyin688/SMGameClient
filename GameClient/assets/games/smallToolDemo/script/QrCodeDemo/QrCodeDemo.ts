import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import QrCodeDemoModel from './QrCodeDemoModel';
import QrCodeDemoView from './QrCodeDemoView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class QrCodeDemo extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_QrCodeDemo';

    public model: QrCodeDemoModel = undefined;
    public view: QrCodeDemoView = undefined;

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
            case this.view.btnSaveButton.name:
                this.CC_onClickbtnSave();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnSave() {
        this.closeView();
    }

    protected onViewOpen(param: any) {
        let linkContent = 'https://www.baidu.com';
        c2f.utils.commonUtils.generateQrCode(this.view.qrCode, linkContent);
    }
}
