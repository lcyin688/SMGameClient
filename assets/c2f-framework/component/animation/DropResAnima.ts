//掉落资源
const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/animation/DropResAnima')
export class DropResAnima extends cc.Component {

    /** -----抛物掉落参数----- */
    //掉落开关
    private dropAnima: boolean = false;
    //速度
    private paraSpeed: cc.Vec2 = cc.v2(0, 0);
    //加速度
    private acc: number = -2000;
    //抛物掉落时长
    private usedTime: number = 0;
    //抛物用时
    private dropNeedTm: number = 0;
    /** -----抛物掉落参数----- */

    /** -----回收动画参数----- */
    /**回收开关 */
    private recycleAnima: boolean = false;
    /** 移动速度 */
    private moveSpeed: number = 1000;
    /** 移动弧度 */
    private recycleRad: number = 0;
    /** 回收用时用时 */
    private recyNeedTm: number = 0;
    /** -----回收动画参数----- */

    //完成回调
    private completeCb: Function = null;
    //回收位置
    private recyclePos: cc.Vec3 = null;


    protected start() {

    }

    protected onDestroy() {
        this.completeCb = null;
        this.recyclePos = null;
        this.paraSpeed = null;
    }

    public setInfo(cmplCb: Function, endPos: cc.Vec3) {
        this.completeCb = cmplCb;
        this.recyclePos = endPos;
        this.play();
    }

    private play() {
        this.initParam();
        let dur = Math.random();
        cc.tween(this.node)
            .delay(dur)
            .call(() => {
                this.dropAnima = true;
            })
            .start();
    }

    private initParam() {
        let height = c2f.utils.math.randRectInt(50, 100);
        let pos1 = this.node.getPosition();
        let pos2 = cc.Vec3.ZERO.clone();
        pos2.x = pos1.x + c2f.utils.math.randRectInt(-100, 100);
        pos2.y = pos1.y + c2f.utils.math.randRectInt(-100, 100);
        if (pos2.y < pos1.y) {
            //目标点比起点低
            let t1_a = Math.sqrt(-2 * height / this.acc);
            let t2_a = Math.sqrt(-2 * (height + pos1.y - pos2.y) / this.acc);
            this.paraSpeed.x = ((pos2.x - pos1.x) / (t1_a + t2_a)) || 0;
            this.paraSpeed.y = (height / t1_a - 0.5 * this.acc * t1_a) || 0;
            this.dropNeedTm = t1_a + t2_a;
        } else {
            //目标点比起点高
            let t1_b = Math.sqrt(-2 * (height + pos2.y - pos1.y) / this.acc);
            let t2_b = Math.sqrt(-2 * height / this.acc);
            this.paraSpeed.x = ((pos2.x - pos1.x) / (t1_b + t2_b)) || 0;
            this.paraSpeed.y = ((height + pos2.y - pos1.y) / t1_b - 0.5 * this.acc * t1_b) || 0;
            this.dropNeedTm = t1_b + t2_b;
        }

        //回收弧度
        let recycleAngle = c2f.utils.vec.angleEx(pos2, this.recyclePos);
        this.recycleRad = recycleAngle * c2f.utils.math.deg2Rad;
        this.recyNeedTm = cc.Vec3.distance(pos2, this.recyclePos) / this.moveSpeed;
    }

    protected update(dt: number) {
        if (this.dropAnima) {
            this.usedTime += dt;

            let offsetX = this.paraSpeed.x * dt;
            let curV = this.paraSpeed.y + this.acc * this.usedTime;
            let offsetY = curV * dt + 0.5 * this.acc * dt * dt;
            c2f.utils.node.offestNodePos(this.node, offsetX, offsetY, 0);

            if (this.usedTime > this.dropNeedTm) {
                this.dropAnima = false;
                this.usedTime = 0// -Math.random();
                this.recycleAnima = true;
            }
        }
        if (this.recycleAnima) {
            this.usedTime += dt;
            if (this.usedTime > 0) {
                let moveDisX = this.moveSpeed * Math.cos(this.recycleRad) * dt;
                let moveDisY = this.moveSpeed * Math.sin(this.recycleRad) * dt;
                c2f.utils.node.offestNodePos(this.node, moveDisX, moveDisY, 0);
                if (this.usedTime > this.recyNeedTm) {
                    this.recycleAnima = false;
                    this.completeCb && this.completeCb();
                }
            }
        }
    }
}
