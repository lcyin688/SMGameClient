const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('c2f/common/ProgressAdd')
export class ProgressAdd extends cc.Component {

    @property({ serializable: true })
    private onceDur: number = 1;

    /** 进度控件 */
    private curBar: cc.ProgressBar = null;
    /** 真实进度 */
    private realValue: number = null;

    onLoad() {
        this.curBar = this.node.getComponent(cc.ProgressBar);
    }

    private stopAnima() {
        cc.Tween.stopAllByTarget(this.node);
        if (!isNaN(this.realValue)) {
            this.curBar.progress = this.realValue;
        }
    }

    public setProgress(value: number, fullTms: number, playAnima: boolean) {
        this.stopAnima();
        this.realValue = value;
        if (playAnima) {
            this.playAnima(value, fullTms);
        } else {
            this.curBar.progress = value;
        }
    }

    private playAnima(value: number, fullTms: number) {
        if (fullTms > 0) {
            let restDur = (1 - this.curBar.progress) * this.onceDur;
            let newpDur = value * this.onceDur;
            cc.tween(this.curBar)
                .to(restDur, { progress: 1 })
                .sequence(
                    cc.tween(this.curBar).set({ progress: 0 }),
                    cc.tween(this.curBar).to(this.onceDur, { progress: 1 }))
                .repeat(fullTms - 1)
                .set({ progress: 0 })
                .to(newpDur, { progress: value })
                .start();
        } else {
            let needDur = (value - this.curBar.progress) * this.onceDur;
            cc.tween(this.curBar)
                .to(needDur, { progress: value })
                .start();
        }
    }
}