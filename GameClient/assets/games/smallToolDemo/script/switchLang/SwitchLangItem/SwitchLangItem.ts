import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import SwitchLangItemModel from './SwitchLangItemModel';
import SwitchLangItemView from './SwitchLangItemView';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';
import VirtualItem from '../../../../../c2f-framework/component/ui/scrollList/VirtualItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLangItem extends VirtualItem {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SwitchLangItem';

    public model: SwitchLangItemModel = undefined;
    public view: SwitchLangItemView = undefined;

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
            case this.view.btnAreaButton.name:
                this.CC_onClickbtnArea();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnArea() {
        this.model.data.callBackFun(this.model.data.langCode);
    }

    public onRefresh(data: SmallToolDemoUIPa.SwitchLangItemArg) {
        this.model.initData(data);
        this.view.areaLabel.string = data.name;
    }
}
