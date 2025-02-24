import { UIModelBase } from './UIModelBase';
import { UIBase } from './UIBase';
import { UIPanelBase } from './UIPanelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export class UIPControlBase extends UIBase {

    //数据对象
    public model: UIModelBase;
    //视图对象
    public view: UIPanelBase;

    protected onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.offAll();
    }

    protected onDestroy(): void {
        this.model = null;
        this.view = null;
        super.onDestroy();
    }
}
