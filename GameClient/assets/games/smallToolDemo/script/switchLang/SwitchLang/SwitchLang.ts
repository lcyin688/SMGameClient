import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import SwitchLangModel from './SwitchLangModel';
import SwitchLangView from './SwitchLangView';
import { C2FConst } from '../../../../../c2f-framework/define/C2FConst';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLang extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SwitchLang';

    public model: SwitchLangModel = undefined;
    public view: SwitchLangView = undefined;

    protected onViewOpen(param: any) {
        this.model.initData(this.clickSwitchLangItem.bind(this));
        this.initView();
    }
    private initView() {
        this.view.listVirtualList.refreshAllWithData(this.model.arr);
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

    private clickSwitchLangItem(langCode: C2FConst.LanguageKey) {
        c2f.language.switchLang(langCode);
    }
}
