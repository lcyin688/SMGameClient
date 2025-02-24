const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/animation/RotationSelf')
export class RotationSelf extends cc.Component {

    @property({ serializable: true })
    private onceDur: number = 5;

    @property({ serializable: true })
    private clockwise: boolean = true;

    onLoad() {
    }

    start() {
        this.scheduleOnce(() => {
            this.playRotate();
        })
    }

    private playRotate() {
        let dstValue = this.clockwise ? 359 : -359;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .by(this.onceDur, { angle: dstValue })
            .repeatForever()
            .start();
    }
}