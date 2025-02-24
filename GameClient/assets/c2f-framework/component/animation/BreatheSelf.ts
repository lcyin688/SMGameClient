const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/animation/BreatheSelf')
export default class BreatheSelf extends cc.Component {

    @property({ serializable: true, tooltip: "缩小所用时间" })
    private lessenDur: number = 1;

    @property({ serializable: true, tooltip: "缩小尺寸" })
    private lessenValue: number = 0.8;

    @property({ serializable: true, tooltip: "放大所用时间" })
    private magnifyDur: number = 2;

    @property({ serializable: true, tooltip: "放大尺寸" })
    private magnifyValue: number = 1.2;

    @property({ serializable: true, tooltip: "自动播放" })
    private playOnLoad: boolean = true;

    onLoad() {
    }

    start() {
        if (this.playOnLoad) {
            this.scheduleOnce(() => {
                this.playAnima();
            })
        }
    }

    public stopAnima() {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(1, 1, 1);
    }

    public playAnima() {
        cc.Tween.stopAllByTarget(this.node);
        this.node.setScale(this.magnifyValue, this.magnifyValue, 1);
        let twSub1 = cc.tween(this.node).to(this.lessenDur, { scale: this.lessenValue });
        let twSub2 = cc.tween(this.node).to(this.magnifyDur, { scale: this.magnifyValue });
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start()
    }
}