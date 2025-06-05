import { UIModelBase } from './UIModelBase';
import { UIBase } from './UIBase';
import { UIViewBase } from './UIViewBase';
import { C2FEnum } from '../../define/C2FEnum';

const { ccclass, property } = cc._decorator;
@ccclass
export class UIVControlBase extends UIBase {
    //数据对象
    public model: UIModelBase;
    //视图对象
    public view: UIViewBase;

    protected onEnable(): void {
        this.on(C2FEnum.Event.PopViewInAnimaCmpl, this.onInAnimaComplete, this);
    }

    protected onDisable(): void {
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

    /** 关闭本窗口 */
    public closeView(releaseAll: boolean = false) {
        c2f.gui.removeByNode(this.node);
        if (releaseAll) {
            c2f.res.delayReleaseAll();
        }
    }

    /** 入场动画完成 */
    public onInAnimaComplete() {}
}
