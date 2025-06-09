import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import SevenDayMenuItemModel from './SevenDayMenuItemModel';
import SevenDayMenuItemView from './SevenDayMenuItemView';
import VirtualItem from '../../../../../c2f-framework/component/ui/scrollList/VirtualItem';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMenuItem extends VirtualItem {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SevenDayMenuItem';

    public model: SevenDayMenuItemModel = undefined;
    public view: SevenDayMenuItemView = undefined;

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
            case this.view.btnClickButton.name:
                this.CC_onClickbtnClick();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnClick() {
        this.model.data.callBackFun(this.model.data);
    }

    public onRefresh(args: SmallToolDemoUIPa.SevenDayMenuItemArg): void {
        this.model.initData(args);
        this.view.normal.active = !args.state;
        this.view.select.active = args.state;
        this.view.lab_offLabel.string = args.title;
        this.view.lab_onLabel.string = args.title;
        this.view.lab_bonusLabel.string = args.bonus;
        this.view.lab_tipsLabel.string = args.tips;
    }
}
