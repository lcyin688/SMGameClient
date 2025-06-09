import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import SevenDayMainModel from './SevenDayMainModel';
import SevenDayMainView from './SevenDayMainView';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SevenDayMain';

    public model: SevenDayMainModel = undefined;
    public view: SevenDayMainView = undefined;

    protected onViewOpen(param: any) {
        this.model.initData(this.clickMenuItem.bind(this));
        this.initView();
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

            default:
                break;
        }
    }

    private CC_onClickbtnClose() {
        this.closeView();
    }

    private initView() {
        this.view.listVirtualList.refreshAllWithData(this.model.meneListArr);
    }

    private clickMenuItem(data: SmallToolDemoUIPa.SevenDayMenuItemArg) {
        cc.log('点击了    ', data.title);
        this.model.selectOneReflashMenuDate(data.index);
        this.view.listVirtualList.refreshAllWithData(this.model.meneListArr);
        this.view.listContentWESwitchMenu.onSwitchMenu(data.index);
    }
}
