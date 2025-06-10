import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import MonthSignRuleModel from './MonthSignRuleModel';
import MonthSignRuleView from './MonthSignRuleView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class MonthSignRule extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_MonthSignRule';

    public model: MonthSignRuleModel = undefined;
    public view: MonthSignRuleView = undefined;

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
            case this.view.closeButton.name:
                this.CC_onClickclose();
                break;

            default:
                break;
        }
    }

    private CC_onClickclose() {
        this.closeView();
    }

    protected onViewOpen(param: any) {}
}
