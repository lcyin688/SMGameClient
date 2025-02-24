
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/basketBall/Ball/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvYmFza2V0QmFsbC9CYWxsL0JhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQXNGO0FBSXRGLCtEQUE4RDtBQUU5RCxpRUFBZ0U7QUFDaEUsNkRBQTREO0FBR3RELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFjO0lBQWhEO1FBQUEscUVBeU1DO1FBeE1HLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsUUFBUSxDQUFDO1FBRXRCLFdBQUssR0FBYyxTQUFTLENBQUM7UUFDN0IsVUFBSSxHQUFhLFNBQVMsQ0FBQzs7SUFvTXRDLENBQUM7SUFsTWEscUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFFdkQsQ0FBQztJQUVPLHlCQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUc5RSxDQUFDO0lBRU8sMEJBQVcsR0FBbkI7UUFDSSxJ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UUFFdEIsdUJBQXVCO1FBQ3ZCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFNUIsV0FBVztRQUNYLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFFeEIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUUzQixDQUFDO0lBdk1nQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBeU14QjtJQUFELFdBQUM7Q0F6TUQsQUF5TUMsQ0F6TWlDLCtCQUFjLEdBeU0vQztrQkF6TW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBDb250cm9sQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlQQ29udHJvbEJhc2UnO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bSc7XG5pbXBvcnQgQmFsbE1vZGVsIGZyb20gJy4vQmFsbE1vZGVsJztcbmltcG9ydCBCYWxsVmlldyBmcm9tICcuL0JhbGxWaWV3JztcbmltcG9ydCB7IEV2ZW50TmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL0V2ZW50TmFtZSc7XG5pbXBvcnQgeyBVSVBhIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlQYXJhbSc7XG5pbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUNvbnN0cyc7XG5pbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJSGVscGVyJztcbmltcG9ydCBCYXNrZXRCYWxsTWFpbiBmcm9tICcuLi9CYXNrZXRCYWxsTWFpbi9CYXNrZXRCYWxsTWFpbic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIFVJUENvbnRyb2xCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ1BfQmFsbCc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEJhbGxNb2RlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdmlldzogQmFsbFZpZXcgPSB1bmRlZmluZWQ7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT24oKVxuICAgICAgICB0aGlzLm5vZGVbJ190b3VjaExpc3RlbmVyJ10uc3dhbGxvd1RvdWNoZXMgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJPbigpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbGxlZCwgdGhpcyk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJPZmYoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWxsZWQsIHRoaXMpO1xuICAgIH1cbiAgICBwdWJsaWMgaW5pdChiYXNrZXQ6IEJhc2tldEJhbGxNYWluKSB7XG4gICAgICAgIHRoaXMubW9kZWwuaW5pdERhdGEoYmFza2V0KVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5iZWdhbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIHRoaXMubW9kZWwuc3RhdHVzID0gR2FtZUNvbnN0cy5Ub3VjaFN0YXR1cy5CRUdFTjtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblRvdWNoQ2FuY2VsbGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGF0dXMgPSBHYW1lQ29uc3RzLlRvdWNoU3RhdHVzLkNBTkNFTDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubW9kZWwuZW5kZWQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHRoaXMubW9kZWwuZW5kZWQueCAtIHRoaXMubW9kZWwuYmVnYW4ueCksIDIpICsgTWF0aC5wb3coKHRoaXMubW9kZWwuZW5kZWQueSAtIHRoaXMubW9kZWwuYmVnYW4ueSksIDIpKTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiA0MCAmJiB0aGlzLm1vZGVsLmJlZ2FuLnkgPCB0aGlzLm1vZGVsLmVuZGVkLnkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc3RhdHVzID0gR2FtZUNvbnN0cy5Ub3VjaFN0YXR1cy5FTkRFRDtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJPZmYoKVxuXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRWZXJTcGVlZCA9IHRoaXMubW9kZWwuZW1pdFNwZWVkO1xuICAgICAgICAgICAgLy/orrDlvZXmnIDlkI7op6bmkbjngrks5qC55o2u6Kem5pG454K55YGP56e76K6h566X6YCf5bqmXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhcmdldCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5tb2RlbC5lbmRlZCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRIb3JTcGVlZCA9IHRoaXMubW9kZWwudGFyZ2V0LnggKiAyO1xuICAgICAgICAgICAgVUlIZWxwZXIucGxheUVmZmVjdChcImJhc2tldEJhbGwvZmx5XCIpXG4gICAgICAgICAgICB0aGlzLmRvQW5pbSgpO1xuICAgICAgICAgICAgYzJmLmV2ZW50LmVtaXQoRXZlbnROYW1lLkVOYW1lLm5ld0JhbGwpO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuc2hhZG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zaGFkb3cuZGltaXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnN0YXR1cyA9IEdhbWVDb25zdHMuVG91Y2hTdGF0dXMuQ0FOQ0VMO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0FuaW0oKSB7XG4gICAgICAgIGxldCByb3RhdGVWYWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAzICogMzYwXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMiwgeyBhbmdsZTogcm90YXRlVmFsdWUgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEsIHsgc2NhbGU6IHRoaXMubW9kZWwuc2NhbGUgfSkuc3RhcnQoKVxuICAgIH1cbiAgICAvKirnr67nkIPnu5Hlrproh6rlt7HnmoTlvbHlrZAgKi9cbiAgICBwdWJsaWMgYmluZFNoYWRvdyhzaGFkb3cpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zaGFkb3cgPSBzaGFkb3c7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5zdGF0dXMgIT0gR2FtZUNvbnN0cy5Ub3VjaFN0YXR1cy5FTkRFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihkdCk7XG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrVmFsaWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmJhbGxTdGF0dXMgIT09IEdhbWVDb25zdHMuQmFsbFN0YXR1cy5ET1dOIHx8IHRoaXMubW9kZWwudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBiYXNrZXQgPSB0aGlzLm1vZGVsLmJhc2tldDtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gYmFza2V0LnZpZXcubGVmdDtcbiAgICAgICAgICAgIGxldCByaWdodCA9IGJhc2tldC52aWV3LnJpZ2h0O1xuICAgICAgICAgICAgbGV0IGJhbGxSYWRpdXMgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggLyAyO1xuXG4gICAgICAgICAgICAvKiog57uf5LiA6L2s5o2i5oiQ5LiW55WM5Z2Q5qCH6K6h566X6L+b55CD6YC76L6RICovXG4gICAgICAgICAgICAvLyDnr67nkIPnmoTovrnnlYzlkozkuK3lv4NcbiAgICAgICAgICAgIGxldCBiYWxsTGVmdCA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpLnggLSBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgbGV0IGJhbGxSaWdodCA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpLnggKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgbGV0IGJhbGxYID0gcGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSkueDtcbiAgICAgICAgICAgIGxldCBiYWxsWSA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpLnk7XG5cbiAgICAgICAgICAgIC8vIOacieaViOi/m+eQg+iMg+WbtFxuICAgICAgICAgICAgbGV0IHZhbGlkVG9wID0gcGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihiYXNrZXQudmlldy5saW5lLmdldFBvc2l0aW9uKCkpLnkgLSBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgbGV0IHZhbGlkTGVmdCA9IGJhc2tldC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihsZWZ0LmdldFBvc2l0aW9uKCkpLng7XG4gICAgICAgICAgICBsZXQgdmFsaWRSaWdodCA9IGJhc2tldC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihyaWdodC5nZXRQb3NpdGlvbigpKS54O1xuICAgICAgICAgICAgbGV0IHZhbGlkQm90ID0gYmFza2V0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGxlZnQuZ2V0UG9zaXRpb24oKSkueSAtIGJhbGxSYWRpdXMgKiAyO1xuXG4gICAgICAgICAgICBpZiAoYmFsbFkgPCB2YWxpZFRvcCAmJiBiYWxsWSA+IHZhbGlkQm90ICYmIGJhbGxYID4gdmFsaWRMZWZ0ICYmIGJhbGxYIDwgdmFsaWRSaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwudmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJhc2tldC5hZGRTY29yZSgpO1xuICAgICAgICAgICAgICAgIGJhc2tldC5wbGF5TmV0QW5pbSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmhpdEluKSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoJ2Jhc2tldEJhbGwvaGl0Ym9hcmQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBVSUhlbHBlci5wbGF5RWZmZWN0KCdiYXNrZXRCYWxsL2hpdGJvYXJkaW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbihkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy5tb2RlbC5jdXJyZW50SG9yU3BlZWQ7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5jdXJyZW50VmVyU3BlZWQgLT0gZHQgKiB0aGlzLm1vZGVsLmdyYXZpdHk7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR0ICogdGhpcy5tb2RlbC5jdXJyZW50VmVyU3BlZWQ7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VCYWxsU3RhdHVzKHRoaXMubW9kZWwuY3VycmVudFZlclNwZWVkKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlbC5iYWxsU3RhdHVzID09PSBHYW1lQ29uc3RzLkJhbGxTdGF0dXMuTk9ORSAmJiB0aGlzLmlzT3V0U2NyZWVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNPdXRTY3JlZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUueSA8IC05MDA7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhbmdlQmFsbFN0YXR1cyhzcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gMCB8fCB0aGlzLmlzT3V0U2NyZWVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYmFsbFN0YXR1cyA9IEdhbWVDb25zdHMuQmFsbFN0YXR1cy5OT05FO1xuICAgICAgICB9IGVsc2UgaWYgKHNwZWVkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5iYWxsU3RhdHVzID0gR2FtZUNvbnN0cy5CYWxsU3RhdHVzLkZMWTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYmFza2V0LnN3aXRjaE1hc2tMaW5lU2hvdyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmJhbGxTdGF0dXMgPSBHYW1lQ29uc3RzLkJhbGxTdGF0dXMuRE9XTjtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYmFza2V0LnN3aXRjaE1hc2tMaW5lU2hvdyh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuYmFsbFN0YXR1cyA9PT0gR2FtZUNvbnN0cy5CYWxsU3RhdHVzLkZMWSkgeyAvLyDnr67nkIPkuIrljYfov4fnqIvkuK3kuI3ov5vooYznorDmkp7mo4DmtYtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3ggPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnQ29sbGlzaW9uQm94Jyk7XG4gICAgICAgIHZhciBsZWZ0ID0gYm94LmdldExlZnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gYm94LmdldFJpZ2h0KCk7XG5cbiAgICAgICAgLy8g56Kw5pKe57O757uf5Lya6K6h566X5Ye656Kw5pKe57uE5Lu25Zyo5LiW55WM5Z2Q5qCH57O75LiL55qE55u45YWz55qE5YC877yM5bm25pS+5YiwIHdvcmxkIOi/meS4quWxnuaAp+mHjOmdolxuICAgICAgICB2YXIgd29ybGQgPSBzZWxmLndvcmxkO1xuICAgICAgICB2YXIgcmFkaXVzID0gd29ybGQucmFkaXVzO1xuXG4gICAgICAgIC8vIOaNoueul+eJqeS9k+S4lueVjOWdkOagh+ezu+WdkOagh1xuICAgICAgICB2YXIgc2VsZldvcmxkUG90ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc2VsZi5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB2YXIgb3RoZXJXb3JsZFBvdCA9IHRoaXMubW9kZWwuYmFza2V0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKG90aGVyLm5vZGUuZ2V0UG9zaXRpb24oKSk7XG5cbiAgICAgICAgLy8g5bCG56Kw5pKe6IyD5Zu05oq96LGh5oiQ56+u562Q5bem5Y+z5Lik5Liq54K577yM5bm25bCG6L+Z5Lik54K55LiO56+u55CD5pS+5Yiw5ZCM5LiA5Liq56Kw5pKe57uE44CCXG4gICAgICAgIC8vIOevrueQg+S4reW/g+eCueWIsOWImuS9k+S4reW/g+eCuei3neemu+mZpOS7peevrueQg+WNiuW+hOW+l+WIsOS4gOS4quavlOWAvO+8jOaoque6teWQkeS5mOS7pei/meS4quavlOWAvOW+l+WIsOaoque6teWQkemAn+W6puOAglxuICAgICAgICB2YXIgcmF0aW9WZXIgPSAoc2VsZldvcmxkUG90LnkgLSBvdGhlcldvcmxkUG90LnkpIC8gcmFkaXVzO1xuICAgICAgICB2YXIgcmF0aW9Ib3IgPSBNYXRoLmFicyhvdGhlcldvcmxkUG90LnggLSBzZWxmV29ybGRQb3QueCkgLyByYWRpdXM7XG4gICAgICAgIC8vIOawtOW5s+aWueWQkeeisOaSnuacgOWkp+WInemAn+W6plxuICAgICAgICB2YXIgaG9yViA9IHRoaXMubW9kZWwuY3VycmVudEhvclNwZWVkIC8gTWF0aC5hYnModGhpcy5tb2RlbC5jdXJyZW50SG9yU3BlZWQpICogdGhpcy5tb2RlbC5tYXhYU3BlZWQ7XG5cbiAgICAgICAgLy8g56+u55CD56Kw5Yiw56+u562Q5YaF77yM5pS55Y+Y56+u55CD5qiq5ZCR6YCf5bqm5Li65Y+N5pa55ZCRXG4gICAgICAgIGlmICgob3RoZXIubm9kZS5uYW1lID09PSAncmlnaHQnICYmIHRoaXMubm9kZS54IDw9IGxlZnQpIHx8IChvdGhlci5ub2RlLm5hbWUgPT09ICdsZWZ0JyAmJiB0aGlzLm5vZGUueCA+PSByaWdodCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb2RlbC5oaXRJbikge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY3VycmVudEhvclNwZWVkID0gaG9yViAqIC0xICogcmF0aW9Ib3I7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5oaXRJbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY3VycmVudEhvclNwZWVkID0gaG9yViAqIHJhdGlvSG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g56+u55CD56Kw5Yiw56+u562Q5aSW77yM5aKe5aSn5qiq5ZCR6YCf5bqmXG4gICAgICAgIGlmICgob3RoZXIubm9kZS5uYW1lID09PSAncmlnaHQnICYmIHRoaXMubm9kZS54ID4gcmlnaHQpIHx8IChvdGhlci5ub2RlLm5hbWUgPT09ICdsZWZ0JyAmJiB0aGlzLm5vZGUueCA8IGxlZnQpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRIb3JTcGVlZCA9IGhvclY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5jdXJyZW50VmVyU3BlZWQgPSB0aGlzLm1vZGVsLmN1cnJlbnRWZXJTcGVlZCAqIC0xICogcmF0aW9WZXI7XG4gICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoJ2Jhc2tldEJhbGwvaGl0Ym9hcmQnKTtcblxuICAgICAgICAvLyDnorDmkp7nu4Tku7bnmoQgYWFiYiDnorDmkp7moYZcbiAgICAgICAgdmFyIGFhYmIgPSB3b3JsZC5hYWJiO1xuXG4gICAgICAgIC8vIOS4iuS4gOasoeiuoeeul+eahOeisOaSnue7hOS7tueahCBhYWJiIOeisOaSnuahhlxuICAgICAgICB2YXIgcHJlQWFiYiA9IHdvcmxkLnByZUFhYmI7XG5cbiAgICAgICAgLy8g56Kw5pKe5qGG55qE5LiW55WM55+p6Zi1XG4gICAgICAgIHZhciB0ID0gd29ybGQudHJhbnNmb3JtO1xuXG4gICAgICAgIC8vIOS7peS4i+WxnuaAp+S4uuWchuW9oueisOaSnue7hOS7tueJueacieWxnuaAp1xuICAgICAgICB2YXIgciA9IHdvcmxkLnJhZGl1cztcbiAgICAgICAgdmFyIHAgPSB3b3JsZC5wb3NpdGlvbjtcblxuICAgIH1cblxufSJdfQ==