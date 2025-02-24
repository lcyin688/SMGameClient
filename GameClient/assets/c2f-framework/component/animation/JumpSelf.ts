const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/animation/JumpSelf')
export class JumpSelf extends cc.Component {

    @property({ tooltip: "最小缩放" })
    private scaleMin: cc.Vec2 = cc.v2(0.6, 0.6);

    @property({ tooltip: "最大缩放" })
    private scaleMax: cc.Vec2 = cc.v2(1.5, 1.5);

    @property({ serializable: true, tooltip: "动画间隔" })
    private intervalDur: number = 1;

    @property({ serializable: true, tooltip: "跳跃高度" })
    private jumpHeight: number = 50;

    @property({ serializable: true, tooltip: "分步执行时长" })
    private stepDur: number = 0.1;

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

    private resetState() {
        this.node.setScale(1, 1, 1);
        this.node.setPosition(0, 0, 0);
    }

    public stopAnima() {
        cc.Tween.stopAllByTarget(this.node);
        this.resetState();
    }

    public playAnima() {
        this.stopAnima();
        let twSub1 = cc.tween(this.node)
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scaleX: this.scaleMin.x, scaleY: this.scaleMax.y })
            .to(this.stepDur, { position: cc.v3(0, this.jumpHeight, 0), scale: 1 })
            .to(this.stepDur, { position: cc.v3(0, 0, 0), scaleX: 1, scaleY: this.scaleMax.y })
            .to(this.stepDur, { scaleX: this.scaleMax.x, scaleY: this.scaleMin.y })
            .to(this.stepDur, { scale: 1 })
        let twSub2 = cc.tween(this.node).delay(this.intervalDur);
        cc.tween(this.node)
            .sequence(twSub1, twSub2)
            .repeatForever()
            .start()
    }
}