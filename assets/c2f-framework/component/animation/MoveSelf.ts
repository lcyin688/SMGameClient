const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/animation/MoveSelf')
export class MoveSelf extends cc.Component {

    @property({ tooltip: "移动速度" })
    private speed: cc.Vec2 = cc.v2(0, 0);

    @property({ serializable: true, tooltip: "自动播放" })
    private playOnLoad: boolean = true;

    //播放
    private isPlaying: boolean = false;

    protected start(): void {
        if (this.playOnLoad) {
            this.scheduleOnce(() => {
                this.isPlaying = true;
            })
        }
    }

    public startPlay() {
        this.isPlaying = true;
    }


    protected update(dt: number): void {
        if (!this.isPlaying) {
            return;
        }

        let beMoveX = this.speed.x != 0;
        let beMoveY = this.speed.y != 0;
        if (beMoveX) {
            this.node.x += this.speed.x * dt;
        }
        if (beMoveY) {
            this.node.y += this.speed.y * dt;
        }
        const panel = this.node.parent;
        if (beMoveX) {
            if (this.node.x < 0) {
                let rightX = this.node.x + this.node.width * (1 - this.node.anchorX) * this.node.scaleX;
                if (rightX < 0) {
                    this.node.x = panel.width * (1 - panel.anchorX) + this.node.width * this.node.anchorX * this.node.scaleX;
                }
            }
            if (this.node.x > panel.width) {
                let leftX = this.node.x - this.node.width * this.node.anchorX * this.node.scaleX;
                if (leftX > panel.width) {
                    this.node.x = -panel.width * panel.anchorX - this.node.width * (1 - this.node.anchorX) * this.node.scaleX;
                }
            }
        }
        if (beMoveY) {
            if (this.node.y < 0) {
                let topY = this.node.y + this.node.height * (1 - this.node.anchorY) * this.node.scaleY;
                if (topY < 0) {
                    this.node.y = panel.height * (1 - panel.anchorY) + this.node.height * this.node.anchorY * this.node.scaleY;
                }
            }
            if (this.node.y > panel.height) {
                let botY = this.node.y - this.node.height * this.node.anchorY * this.node.scaleY;
                if (botY > panel.height) {
                    this.node.y = -panel.height * panel.anchorY - this.node.height * (1 - this.node.anchorY) * this.node.scaleY;
                }
            }
        }
    }
}