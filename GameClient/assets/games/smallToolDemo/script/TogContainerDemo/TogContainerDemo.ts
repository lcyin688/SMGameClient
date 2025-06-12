import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import TogContainerDemoModel from './TogContainerDemoModel';
import TogContainerDemoView from './TogContainerDemoView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class TogContainerDemo extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_TogContainerDemo';

    public model: TogContainerDemoModel = undefined;
    public view: TogContainerDemoView = undefined;

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
    protected onLoad(): void {
        // ToggleContainer 案例
        this.view.togContainerToggleGroupWrapper.addToggleListener((idx, checked) => {
            if (checked) {
                this._handleSelection(idx);
            }
        });
    }

    private _handleSelection(index: number) {
        cc.log('选择了第', index);
    }
}
