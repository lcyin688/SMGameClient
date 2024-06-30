const { ccclass, property } = cc._decorator;

/** 加载延时提示动画 */
@ccclass
export class LoadingTips extends cc.Component {
    @property(cc.Node)
    private loading: cc.Node | null = null;

    private angle: number = 0;

    update(dt: number) {
        this.angle += dt * 220;
        this.loading!.angle = this.angle % 360;
        if (this.angle > 360) {
            this.angle -= 360;
        }
    }
}