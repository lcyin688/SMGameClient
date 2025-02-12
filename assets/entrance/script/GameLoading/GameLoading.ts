import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import GameLoadingModel from './GameLoadingModel';
import GameLoadingView from './GameLoadingView';


const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLoading extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLoading';

    public model: GameLoadingModel = undefined;
    public view: GameLoadingView = undefined;

    protected onViewOpen(param: any) {
        this.model.input = param;
    }

    protected start(): void {
        this.view.progressLabel.string = '';
        this.view.barLoadingProgressBar.progress = 0;

        //进度界面显示后再慢慢加载
        this.scheduleOnce(() => {
            this.model.loadTask();
        }, 0.1);

        this.updateAuditProg();
    }

    private updateAuditProg() {
        if (!szg.plat.isAudit) {
            return;
        }
        // cc.Tween.stopAllByTarget(this.view.loadIcon);
        // cc.tween(this.view.loadIcon)
        //     .by(1, { angle: -360 })
        //     .repeatForever()
        //     .start();
    }
}