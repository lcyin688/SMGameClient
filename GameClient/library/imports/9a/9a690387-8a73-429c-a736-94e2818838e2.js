"use strict";
cc._RF.push(module, '9a690OHinNCnKc2lOKBiDji', 'Ball');
// mainPack/script/basketBall/Ball/Ball.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIPControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIPControlBase");
var EventName_1 = require("../../../../Script/game/EventName");
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Ball';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    Ball.prototype.onLoad = function () {
        this.registerOn();
        this.node['_touchListener'].swallowTouches = false;
    };
    Ball.prototype.registerOn = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
    };
    Ball.prototype.registerOff = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
    };
    Ball.prototype.init = function (basket) {
        this.model.initData(basket);
    };
    Ball.prototype.onTouchStart = function (event) {
        this.model.began = event.getLocation();
        this.model.status = GameConsts_1.GameConsts.TouchStatus.BEGEN;
    };
    Ball.prototype.onTouchCancelled = function (event) {
        this.model.status = GameConsts_1.GameConsts.TouchStatus.CANCEL;
    };
    Ball.prototype.onTouchEnd = function (event) {
        this.model.ended = event.getLocation();
        var distance = Math.sqrt(Math.pow((this.model.ended.x - this.model.began.x), 2) + Math.pow((this.model.ended.y - this.model.began.y), 2));
        if (distance > 40 && this.model.began.y < this.model.ended.y) {
            this.model.status = GameConsts_1.GameConsts.TouchStatus.ENDED;
            this.registerOff();
            this.model.currentVerSpeed = this.model.emitSpeed;
            //记录最后触摸点,根据触摸点偏移计算速度
            this.model.target = this.node.parent.convertToNodeSpaceAR(this.model.ended);
            this.model.currentHorSpeed = this.model.target.x * 2;
            UIHelper_1.UIHelper.playEffect("basketBall/fly");
            this.doAnim();
            c2f.event.emit(EventName_1.EventName.EName.newBall);
            if (this.model.shadow) {
                this.model.shadow.dimiss();
            }
        }
        else {
            this.model.status = GameConsts_1.GameConsts.TouchStatus.CANCEL;
        }
    };
    Ball.prototype.doAnim = function () {
        var rotateValue = Math.random() * 3 * 360;
        cc.tween(this.node).to(2, { angle: rotateValue }).start();
        cc.tween(this.node).to(1, { scale: this.model.scale }).start();
    };
    /**篮球绑定自己的影子 */
    Ball.prototype.bindShadow = function (shadow) {
        this.model.shadow = shadow;
    };
    Ball.prototype.update = function (dt) {
        if (this.model.status != GameConsts_1.GameConsts.TouchStatus.ENDED) {
            return;
        }
        this.updatePosition(dt);
        this.checkValid();
    };
    Ball.prototype.checkValid = function () {
        if (this.model.ballStatus !== GameConsts_1.GameConsts.BallStatus.DOWN || this.model.valid) {
            return;
        }
        var parent = this.node.parent;
        if (parent != null) {
            var basket = this.model.basket;
            var left = basket.view.left;
            var right = basket.view.right;
            var ballRadius = this.node.getBoundingBoxToWorld().width / 2;
            /** 统一转换成世界坐标计算进球逻辑 */
            // 篮球的边界和中心
            var ballLeft = parent.convertToWorldSpaceAR(this.node.getPosition()).x - ballRadius;
            var ballRight = parent.convertToWorldSpaceAR(this.node.getPosition()).x + ballRadius;
            var ballX = parent.convertToWorldSpaceAR(this.node.getPosition()).x;
            var ballY = parent.convertToWorldSpaceAR(this.node.getPosition()).y;
            // 有效进球范围
            var validTop = parent.convertToWorldSpaceAR(basket.view.line.getPosition()).y - ballRadius;
            var validLeft = basket.node.convertToWorldSpaceAR(left.getPosition()).x;
            var validRight = basket.node.convertToWorldSpaceAR(right.getPosition()).x;
            var validBot = basket.node.convertToWorldSpaceAR(left.getPosition()).y - ballRadius * 2;
            if (ballY < validTop && ballY > validBot && ballX > validLeft && ballX < validRight) {
                this.model.valid = true;
                basket.addScore();
                basket.playNetAnim();
                if (this.model.hitIn) {
                    UIHelper_1.UIHelper.playEffect('basketBall/hitboard');
                }
                else {
                    UIHelper_1.UIHelper.playEffect('basketBall/hitboardin');
                }
            }
        }
    };
    Ball.prototype.updatePosition = function (dt) {
        this.node.x += dt * this.model.currentHorSpeed;
        this.model.currentVerSpeed -= dt * this.model.gravity;
        this.node.y += dt * this.model.currentVerSpeed;
        this.changeBallStatus(this.model.currentVerSpeed);
        if (this.model.ballStatus === GameConsts_1.GameConsts.BallStatus.NONE && this.isOutScreen()) {
            this.node.stopAllActions();
            this.node.removeFromParent();
            this.model.valid = false;
            return;
        }
    };
    Ball.prototype.isOutScreen = function () {
        return this.node.y < -900;
    };
    Ball.prototype.changeBallStatus = function (speed) {
        if (speed === 0 || this.isOutScreen()) {
            this.model.ballStatus = GameConsts_1.GameConsts.BallStatus.NONE;
        }
        else if (speed > 0) {
            this.model.ballStatus = GameConsts_1.GameConsts.BallStatus.FLY;
            this.model.basket.switchMaskLineShow(false);
        }
        else {
            this.model.ballStatus = GameConsts_1.GameConsts.BallStatus.DOWN;
            this.model.basket.switchMaskLineShow(true);
        }
    };
    Ball.prototype.onCollisionEnter = function (other, self) {
        if (this.model.ballStatus === GameConsts_1.GameConsts.BallStatus.FLY) { // 篮球上升过程中不进行碰撞检测
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
            }
            else {
                this.model.currentHorSpeed = horV * ratioHor;
            }
        }
        // 篮球碰到篮筐外，增大横向速度
        if ((other.node.name === 'right' && this.node.x > right) || (other.node.name === 'left' && this.node.x < left)) {
            this.model.currentHorSpeed = horV;
        }
        this.model.currentVerSpeed = this.model.currentVerSpeed * -1 * ratioVer;
        UIHelper_1.UIHelper.playEffect('basketBall/hitboard');
        // 碰撞组件的 aabb 碰撞框
        var aabb = world.aabb;
        // 上一次计算的碰撞组件的 aabb 碰撞框
        var preAabb = world.preAabb;
        // 碰撞框的世界矩阵
        var t = world.transform;
        // 以下属性为圆形碰撞组件特有属性
        var r = world.radius;
        var p = world.position;
    };
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(UIPControlBase_1.UIPControlBase));
exports.default = Ball;

cc._RF.pop();