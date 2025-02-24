
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/DropResAnima.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vRHJvcFJlc0FuaW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNO0FBQ0EsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFHbEQ7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUFtSEM7UUFqSEcsdUJBQXVCO1FBQ3ZCLE1BQU07UUFDRSxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQ25DLElBQUk7UUFDSSxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsS0FBSztRQUNHLFNBQUcsR0FBVyxDQUFDLElBQUksQ0FBQztRQUM1QixRQUFRO1FBQ0EsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM3QixNQUFNO1FBQ0UsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDL0IsdUJBQXVCO1FBRXZCLHVCQUF1QjtRQUN2QixVQUFVO1FBQ0Ysa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDdEMsV0FBVztRQUNILGVBQVMsR0FBVyxJQUFJLENBQUM7UUFDakMsV0FBVztRQUNILGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGFBQWE7UUFDTCxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUMvQix1QkFBdUI7UUFFdkIsTUFBTTtRQUNFLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQ3BDLE1BQU07UUFDRSxnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFzRnZDLENBQUM7SUFuRmEsNEJBQUssR0FBZjtJQUVBLENBQUM7SUFFUyxnQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSw4QkFBTyxHQUFkLFVBQWUsTUFBZ0IsRUFBRSxNQUFlO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sMkJBQUksR0FBWjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNqQixTQUFTO1lBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ0gsU0FBUztZQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxD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U0FDSjtJQUNMLENBQUM7SUFsSFEsWUFBWTtRQUZ4QixPQUFPO1FBQ1AsSUFBSSxDQUFDLDRCQUE0QixDQUFDO09BQ3RCLFlBQVksQ0FtSHhCO0lBQUQsbUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSGlDLEVBQUUsQ0FBQyxTQUFTLEdBbUg3QztBQW5IWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5o6J6JC96LWE5rqQXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBtZW51KCdjMmYvYW5pbWF0aW9uL0Ryb3BSZXNBbmltYScpXG5leHBvcnQgY2xhc3MgRHJvcFJlc0FuaW1hIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qKiAtLS0tLeaKm+eJqeaOieiQveWPguaVsC0tLS0tICovXG4gICAgLy/mjonokL3lvIDlhbNcbiAgICBwcml2YXRlIGRyb3BBbmltYTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8v6YCf5bqmXG4gICAgcHJpdmF0ZSBwYXJhU3BlZWQ6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICAvL+WKoOmAn+W6plxuICAgIHByaXZhdGUgYWNjOiBudW1iZXIgPSAtMjAwMDtcbiAgICAvL+aKm+eJqeaOieiQveaXtumVv1xuICAgIHByaXZhdGUgdXNlZFRpbWU6IG51bWJlciA9IDA7XG4gICAgLy/mipvniannlKjml7ZcbiAgICBwcml2YXRlIGRyb3BOZWVkVG06IG51bWJlciA9IDA7XG4gICAgLyoqIC0tLS0t5oqb54mp5o6J6JC95Y+C5pWwLS0tLS0gKi9cblxuICAgIC8qKiAtLS0tLeWbnuaUtuWKqOeUu+WPguaVsC0tLS0tICovXG4gICAgLyoq5Zue5pS25byA5YWzICovXG4gICAgcHJpdmF0ZSByZWN5Y2xlQW5pbWE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKiog56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwMDA7XG4gICAgLyoqIOenu+WKqOW8p+W6piAqL1xuICAgIHByaXZhdGUgcmVjeWNsZVJhZDogbnVtYmVyID0gMDtcbiAgICAvKiog5Zue5pS255So5pe255So5pe2ICovXG4gICAgcHJpdmF0ZSByZWN5TmVlZFRtOiBudW1iZXIgPSAwO1xuICAgIC8qKiAtLS0tLeWbnuaUtuWKqOeUu+WPguaVsC0tLS0tICovXG5cbiAgICAvL+WujOaIkOWbnuiwg1xuICAgIHByaXZhdGUgY29tcGxldGVDYjogRnVuY3Rpb24gPSBudWxsO1xuICAgIC8v5Zue5pS25L2N572uXG4gICAgcHJpdmF0ZSByZWN5Y2xlUG9zOiBjYy5WZWMzID0gbnVsbDtcblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZUNiID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWN5Y2xlUG9zID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJhU3BlZWQgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbmZvKGNtcGxDYjogRnVuY3Rpb24sIGVuZFBvczogY2MuVmVjMykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlQ2IgPSBjbXBsQ2I7XG4gICAgICAgIHRoaXMucmVjeWNsZVBvcyA9IGVuZFBvcztcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5KCkge1xuICAgICAgICB0aGlzLmluaXRQYXJhbSgpO1xuICAgICAgICBsZXQgZHVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmRlbGF5KGR1cilcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BBbmltYSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0UGFyYW0oKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjMmYudXRpbHMubWF0aC5yYW5kUmVjdEludCg1MCwgMTAwKTtcbiAgICAgICAgbGV0IHBvczEgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBvczIgPSBjYy5WZWMzLlpFUk8uY2xvbmUoKTtcbiAgICAgICAgcG9zMi54ID0gcG9zMS54ICsgYzJmLnV0aWxzLm1hdGgucmFuZFJlY3RJbnQoLTEwMCwgMTAwKTtcbiAgICAgICAgcG9zMi55ID0gcG9zMS55ICsgYzJmLnV0aWxzLm1hdGgucmFuZFJlY3RJbnQoLTEwMCwgMTAwKTtcbiAgICAgICAgaWYgKHBvczIueSA8IHBvczEueSkge1xuICAgICAgICAgICAgLy/nm67moIfngrnmr5TotbfngrnkvY5cbiAgICAgICAgICAgIGxldCB0MV9hID0gTWF0aC5zcXJ0KC0yICogaGVpZ2h0IC8gdGhpcy5hY2MpO1xuICAgICAgICAgICAgbGV0IHQyX2EgPSBNYXRoLnNxcnQoLTIgKiAoaGVpZ2h0ICsgcG9zMS55IC0gcG9zMi55KSAvIHRoaXMuYWNjKTtcbiAgICAgICAgICAgIHRoaXMucGFyYVNwZWVkLnggPSAoKHBvczIueCAtIHBvczEueCkgLyAodDFfYSArIHQyX2EpKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5wYXJhU3BlZWQueSA9IChoZWlnaHQgLyB0MV9hIC0gMC41ICogdGhpcy5hY2MgKiB0MV9hKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5kcm9wTmVlZFRtID0gdDFfYSArIHQyX2E7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+ebruagh+eCueavlOi1t+eCuemrmFxuICAgICAgICAgICAgbGV0IHQxX2IgPSBNYXRoLnNxcnQoLTIgKiAoaGVpZ2h0ICsgcG9zMi55IC0gcG9zMS55KSAvIHRoaXMuYWNjKTtcbiAgICAgICAgICAgIGxldCB0Ml9iID0gTWF0aC5zcXJ0KC0yICogaGVpZ2h0IC8gdGhpcy5hY2MpO1xuICAgICAgICAgICAgdGhpcy5wYXJhU3BlZWQueCA9ICgocG9zMi54IC0gcG9zMS54KSAvICh0MV9iICsgdDJfYikpIHx8IDA7XG4gICAgICAgICAgICB0aGlzLnBhcmFTcGVlZC55ID0gKChoZWlnaHQgKyBwb3MyLnkgLSBwb3MxLnkpIC8gdDFfYiAtIDAuNSAqIHRoaXMuYWNjICogdDFfYikgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuZHJvcE5lZWRUbSA9IHQxX2IgKyB0Ml9iO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/lm57mlLblvKfluqZcbiAgICAgICAgbGV0IHJlY3ljbGVBbmdsZSA9IGMyZi51dGlscy52ZWMuYW5nbGVFeChwb3MyLCB0aGlzLnJlY3ljbGVQb3MpO1xuICAgICAgICB0aGlzLnJlY3ljbGVSYWQgPSByZWN5Y2xlQW5nbGUgKiBjMmYudXRpbHMubWF0aC5kZWcyUmFkO1xuICAgICAgICB0aGlzLnJlY3lOZWVkVG0gPSBjYy5WZWMzLmRpc3RhbmNlKHBvczIsIHRoaXMucmVjeWNsZVBvcykgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcEFuaW1hKSB7XG4gICAgICAgICAgICB0aGlzLnVzZWRUaW1lICs9IGR0O1xuXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IHRoaXMucGFyYVNwZWVkLnggKiBkdDtcbiAgICAgICAgICAgIGxldCBjdXJWID0gdGhpcy5wYXJhU3BlZWQueSArIHRoaXMuYWNjICogdGhpcy51c2VkVGltZTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRZID0gY3VyViAqIGR0ICsgMC41ICogdGhpcy5hY2MgKiBkdCAqIGR0O1xuICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUub2ZmZXN0Tm9kZVBvcyh0aGlzLm5vZGUsIG9mZnNldFgsIG9mZnNldFksIDApO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51c2VkVGltZSA+IHRoaXMuZHJvcE5lZWRUbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcEFuaW1hID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VkVGltZSA9IDAvLyAtTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3ljbGVBbmltYSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVjeWNsZUFuaW1hKSB7XG4gICAgICAgICAgICB0aGlzLnVzZWRUaW1lICs9IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlZFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVEaXNYID0gdGhpcy5tb3ZlU3BlZWQgKiBNYXRoLmNvcyh0aGlzLnJlY3ljbGVSYWQpICogZHQ7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVEaXNZID0gdGhpcy5tb3ZlU3BlZWQgKiBNYXRoLnNpbih0aGlzLnJlY3ljbGVSYWQpICogZHQ7XG4gICAgICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUub2ZmZXN0Tm9kZVBvcyh0aGlzLm5vZGUsIG1vdmVEaXNYLCBtb3ZlRGlzWSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlZFRpbWUgPiB0aGlzLnJlY3lOZWVkVG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN5Y2xlQW5pbWEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUNiICYmIHRoaXMuY29tcGxldGVDYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==