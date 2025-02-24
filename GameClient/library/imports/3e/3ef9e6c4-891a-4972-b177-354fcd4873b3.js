"use strict";
cc._RF.push(module, '3ef9ebEiRpJcrF3NU/NSHOz', 'DropResAnima');
// c2f-framework/component/animation/DropResAnima.ts

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
exports.DropResAnima = void 0;
//掉落资源
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var DropResAnima = /** @class */ (function (_super) {
    __extends(DropResAnima, _super);
    function DropResAnima() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** -----抛物掉落参数----- */
        //掉落开关
        _this.dropAnima = false;
        //速度
        _this.paraSpeed = cc.v2(0, 0);
        //加速度
        _this.acc = -2000;
        //抛物掉落时长
        _this.usedTime = 0;
        //抛物用时
        _this.dropNeedTm = 0;
        /** -----抛物掉落参数----- */
        /** -----回收动画参数----- */
        /**回收开关 */
        _this.recycleAnima = false;
        /** 移动速度 */
        _this.moveSpeed = 1000;
        /** 移动弧度 */
        _this.recycleRad = 0;
        /** 回收用时用时 */
        _this.recyNeedTm = 0;
        /** -----回收动画参数----- */
        //完成回调
        _this.completeCb = null;
        //回收位置
        _this.recyclePos = null;
        return _this;
    }
    DropResAnima.prototype.start = function () {
    };
    DropResAnima.prototype.onDestroy = function () {
        this.completeCb = null;
        this.recyclePos = null;
        this.paraSpeed = null;
    };
    DropResAnima.prototype.setInfo = function (cmplCb, endPos) {
        this.completeCb = cmplCb;
        this.recyclePos = endPos;
        this.play();
    };
    DropResAnima.prototype.play = function () {
        var _this = this;
        this.initParam();
        var dur = Math.random();
        cc.tween(this.node)
            .delay(dur)
            .call(function () {
            _this.dropAnima = true;
        })
            .start();
    };
    DropResAnima.prototype.initParam = function () {
        var height = c2f.utils.math.randRectInt(50, 100);
        var pos1 = this.node.getPosition();
        var pos2 = cc.Vec3.ZERO.clone();
        pos2.x = pos1.x + c2f.utils.math.randRectInt(-100, 100);
        pos2.y = pos1.y + c2f.utils.math.randRectInt(-100, 100);
        if (pos2.y < pos1.y) {
            //目标点比起点低
            var t1_a = Math.sqrt(-2 * height / this.acc);
            var t2_a = Math.sqrt(-2 * (height + pos1.y - pos2.y) / this.acc);
            this.paraSpeed.x = ((pos2.x - pos1.x) / (t1_a + t2_a)) || 0;
            this.paraSpeed.y = (height / t1_a - 0.5 * this.acc * t1_a) || 0;
            this.dropNeedTm = t1_a + t2_a;
        }
        else {
            //目标点比起点高
            var t1_b = Math.sqrt(-2 * (height + pos2.y - pos1.y) / this.acc);
            var t2_b = Math.sqrt(-2 * height / this.acc);
            this.paraSpeed.x = ((pos2.x - pos1.x) / (t1_b + t2_b)) || 0;
            this.paraSpeed.y = ((height + pos2.y - pos1.y) / t1_b - 0.5 * this.acc * t1_b) || 0;
            this.dropNeedTm = t1_b + t2_b;
        }
        //回收弧度
        var recycleAngle = c2f.utils.vec.angleEx(pos2, this.recyclePos);
        this.recycleRad = recycleAngle * c2f.utils.math.deg2Rad;
        this.recyNeedTm = cc.Vec3.distance(pos2, this.recyclePos) / this.moveSpeed;
    };
    DropResAnima.prototype.update = function (dt) {
        if (this.dropAnima) {
            this.usedTime += dt;
            var offsetX = this.paraSpeed.x * dt;
            var curV = this.paraSpeed.y + this.acc * this.usedTime;
            var offsetY = curV * dt + 0.5 * this.acc * dt * dt;
            c2f.utils.node.offestNodePos(this.node, offsetX, offsetY, 0);
            if (this.usedTime > this.dropNeedTm) {
                this.dropAnima = false;
                this.usedTime = 0; // -Math.random();
                this.recycleAnima = true;
            }
        }
        if (this.recycleAnima) {
            this.usedTime += dt;
            if (this.usedTime > 0) {
                var moveDisX = this.moveSpeed * Math.cos(this.recycleRad) * dt;
                var moveDisY = this.moveSpeed * Math.sin(this.recycleRad) * dt;
                c2f.utils.node.offestNodePos(this.node, moveDisX, moveDisY, 0);
                if (this.usedTime > this.recyNeedTm) {
                    this.recycleAnima = false;
                    this.completeCb && this.completeCb();
                }
            }
        }
    };
    DropResAnima = __decorate([
        ccclass,
        menu('c2f/animation/DropResAnima')
    ], DropResAnima);
    return DropResAnima;
}(cc.Component));
exports.DropResAnima = DropResAnima;

cc._RF.pop();