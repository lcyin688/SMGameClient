import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import BallModel from './BallModel';
import BallView from './BallView';
import { EventName } from '../../../../Script/game/EventName';
import { UIPa } from '../../../../Script/game/UIParam';
import { GameConsts } from '../../../../Script/game/GameConsts';
import { UIHelper } from '../../../../Script/game/UIHelper';
import BasketBallMain from '../BasketBallMain/BasketBallMain';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Ball extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Ball';

    public model: BallModel = undefined;
    public view: BallView = undefined;

    protected onLoad(): void {
        this.registerOn()
        this.node['_touchListener'].swallowTouches = false;

    }

    private registerOn() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);


    }

    private registerOff() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
    }
    public init(basket: BasketBallMain) {
        this.model.initData(basket)
    }

    private onTouchStart(event: any) {
        this.model.began = event.getLocation();
        this.model.status = GameConsts.TouchStatus.BEGEN;
    }
    private onTouchCancelled(event: any) {
        this.model.status = GameConsts.TouchStatus.CANCEL;
    }
    private onTouchEnd(event) {
        this.model.ended = event.getLocation();
        let distance = Math.sqrt(Math.pow((this.model.ended.x - this.model.began.x), 2) + Math.pow((this.model.ended.y - this.model.began.y), 2));

        if (distance > 40 && this.model.began.y < this.model.ended.y) {
            this.model.status = GameConsts.TouchStatus.ENDED;
            this.registerOff()

            this.model.currentVerSpeed = this.model.emitSpeed;
            //记录最后触摸点,根据触摸点偏移计算速度
            this.model.target = this.node.parent.convertToNodeSpaceAR(this.model.ended);
            this.model.currentHorSpeed = this.model.target.x * 2;
            UIHelper.playEffect("basketBall/fly")
            this.doAnim();
            c2f.event.emit(EventName.EName.newBall);
            if (this.model.shadow) {
                this.model.shadow.dimiss();
            }
        } else {
            this.model.status = GameConsts.TouchStatus.CANCEL;
        }
    }

    private doAnim() {
        let rotateValue = Math.random() * 3 * 360
        cc.tween(this.node).to(2, { angle: rotateValue }).start()
        cc.tween(this.node).to(1, { scale: this.model.scale }).start()
    }
    /**篮球绑定自己的影子 */
    public bindShadow(shadow) {
        this.model.shadow = shadow;
    }
    protected update(dt: number): void {
        if (this.model.status != GameConsts.TouchStatus.ENDED) {
            return;
        }

        this.updatePosition(dt);
        this.checkValid();
    }
    private checkValid() {
        if (this.model.ballStatus !== GameConsts.BallStatus.DOWN || this.model.valid) {
            return;
        }

        let parent = this.node.parent;
        if (parent != null) {
            let basket = this.model.basket;
            let left = basket.view.left;
            let right = basket.view.right;
            let ballRadius = this.node.getBoundingBoxToWorld().width / 2;

            /** 统一转换成世界坐标计算进球逻辑 */
            // 篮球的边界和中心
            let ballLeft = parent.convertToWorldSpaceAR(this.node.getPosition()).x - ballRadius;
            let ballRight = parent.convertToWorldSpaceAR(this.node.getPosition()).x + ballRadius;
            let ballX = parent.convertToWorldSpaceAR(this.node.getPosition()).x;
            let ballY = parent.convertToWorldSpaceAR(this.node.getPosition()).y;

            // 有效进球范围
            let validTop = parent.convertToWorldSpaceAR(basket.view.line.getPosition()).y - ballRadius;
            let validLeft = basket.node.convertToWorldSpaceAR(left.getPosition()).x;
            let validRight = basket.node.convertToWorldSpaceAR(right.getPosition()).x;
            let validBot = basket.node.convertToWorldSpaceAR(left.getPosition()).y - ballRadius * 2;

            if (ballY < validTop && ballY > validBot && ballX > validLeft && ballX < validRight) {
                this.model.valid = true;
                basket.addScore();
                basket.playNetAnim();
                if (this.model.hitIn) {
                    UIHelper.playEffect('basketBall/hitboard');
                } else {
                    UIHelper.playEffect('basketBall/hitboardin');
                }
            }
        }
    }
    private updatePosition(dt: number) {
        this.node.x += dt * this.model.currentHorSpeed;

        this.model.currentVerSpeed -= dt * this.model.gravity;
        this.node.y += dt * this.model.currentVerSpeed;

        this.changeBallStatus(this.model.currentVerSpeed);

        if (this.model.ballStatus === GameConsts.BallStatus.NONE && this.isOutScreen()) {
            this.node.stopAllActions();
            this.node.removeFromParent();
            this.model.valid = false;
            return;
        }
    }

    private isOutScreen() {
        return this.node.y < -900;
    }
    private changeBallStatus(speed: number) {
        if (speed === 0 || this.isOutScreen()) {
            this.model.ballStatus = GameConsts.BallStatus.NONE;
        } else if (speed > 0) {
            this.model.ballStatus = GameConsts.BallStatus.FLY;
            this.model.basket.switchMaskLineShow(false);
        } else {
            this.model.ballStatus = GameConsts.BallStatus.DOWN;
            this.model.basket.switchMaskLineShow(true);
        }
    }

    onCollisionEnter(other, self) {
        if (this.model.ballStatus === GameConsts.BallStatus.FLY) { // 篮球上升过程中不进行碰撞检测
            return;
        }

        var box = other.node.getComponent('CollisionBox');
        var left = box.getLeft();
        var right = box.getRight();

        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        var world = self.world;
        var radius = world.radius;

        // 换算物体世界坐标系坐标
        var selfWorldPot = this.node.parent.convertToWorldSpaceAR(self.node.getPosition());
        var otherWorldPot = this.model.basket.node.convertToWorldSpaceAR(other.node.getPosition());

        // 将碰撞范围抽象成篮筐左右两个点，并将这两点与篮球放到同一个碰撞组。
        // 篮球中心点到刚体中心点距离除以篮球半径得到一个比值，横纵向乘以这个比值得到横纵向速度。
        var ratioVer = (selfWorldPot.y - otherWorldPot.y) / radius;
        var ratioHor = Math.abs(otherWorldPot.x - selfWorldPot.x) / radius;
        // 水平方向碰撞最大初速度
        var horV = this.model.currentHorSpeed / Math.abs(this.model.currentHorSpeed) * this.model.maxXSpeed;

        // 篮球碰到篮筐内，改变篮球横向速度为反方向
        if ((other.node.name === 'right' && this.node.x <= left) || (other.node.name === 'left' && this.node.x >= right)) {
            if (!this.model.hitIn) {
                this.model.currentHorSpeed = horV * -1 * ratioHor;
                this.model.hitIn = true;
            } else {
                this.model.currentHorSpeed = horV * ratioHor;
            }
        }

        // 篮球碰到篮筐外，增大横向速度
        if ((other.node.name === 'right' && this.node.x > right) || (other.node.name === 'left' && this.node.x < left)) {
            this.model.currentHorSpeed = horV;
        }
        this.model.currentVerSpeed = this.model.currentVerSpeed * -1 * ratioVer;
        UIHelper.playEffect('basketBall/hitboard');

        // 碰撞组件的 aabb 碰撞框
        var aabb = world.aabb;

        // 上一次计算的碰撞组件的 aabb 碰撞框
        var preAabb = world.preAabb;

        // 碰撞框的世界矩阵
        var t = world.transform;

        // 以下属性为圆形碰撞组件特有属性
        var r = world.radius;
        var p = world.position;

    }

}