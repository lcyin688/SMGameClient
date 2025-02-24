"use strict";
cc._RF.push(module, '80f078JStpBsb27jKw3Ctrw', 'UIAnimaPlayer');
// c2f-framework/component/animation/UIAnimaPlayer.ts

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
exports.UIAnimaPlayer = void 0;
var UIAnimaDef_1 = require("../../define/UIAnimaDef");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIAnimaPlayer = /** @class */ (function (_super) {
    __extends(UIAnimaPlayer, _super);
    function UIAnimaPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animaTarget = [];
        _this.playOnload = false;
        _this.beforePlayOpacity = null;
        return _this;
    }
    UIAnimaPlayer.prototype.onLoad = function () {
        //需要动画的节点透明化
        this.beforePlayOpacity = new Map();
        for (var _i = 0, _a = this.animaTarget; _i < _a.length; _i++) {
            var one = _a[_i];
            this.beforePlayOpacity.set(one.tarNode, one.tarNode.opacity);
            one.tarNode.opacity = 1;
        }
    };
    UIAnimaPlayer.prototype.start = function () {
        if (this.playOnload) {
            this.scheduleOnce(this.play.bind(this), 0);
        }
    };
    UIAnimaPlayer.prototype.play = function () {
        //还原透明度
        this.beforePlayOpacity.forEach(function (v, k) {
            k.opacity = v;
        });
        this.beforePlayOpacity.clear();
        // 初始化目标对象状态 
        this.initTargetState();
        //播放动作
        for (var _i = 0, _a = this.animaTarget; _i < _a.length; _i++) {
            var one = _a[_i];
            this.playTargetAnima(one);
        }
    };
    /** 初始化目标状态 */
    UIAnimaPlayer.prototype.initTargetState = function () {
        for (var _i = 0, _a = this.animaTarget; _i < _a.length; _i++) {
            var one = _a[_i];
            this.initTarget(one);
        }
    };
    /** 初始化 */
    UIAnimaPlayer.prototype.initTarget = function (target) {
        for (var _i = 0, _a = target.actionList; _i < _a.length; _i++) {
            var one = _a[_i];
            for (var _b = 0, _c = one.animaList; _b < _c.length; _b++) {
                var oneCH = _c[_b];
                switch (oneCH.animaTp) {
                    case UIAnimaDef_1.UIAnimaType.move:
                        target.tarNode.x -= oneCH.byVec2.x;
                        target.tarNode.y -= oneCH.byVec2.y;
                        break;
                    case UIAnimaDef_1.UIAnimaType.opacity:
                        target.tarNode.opacity -= oneCH.byNum;
                        break;
                    case UIAnimaDef_1.UIAnimaType.ratation:
                        target.tarNode.rotation -= oneCH.byNum;
                        break;
                    case UIAnimaDef_1.UIAnimaType.scale:
                        target.tarNode.scaleX -= oneCH.byVec2.x;
                        target.tarNode.scaleY -= oneCH.byVec2.y;
                        break;
                }
            }
        }
    };
    UIAnimaPlayer.prototype.playTargetAnima = function (target) {
        var sequence = [];
        for (var _i = 0, _a = target.actionList; _i < _a.length; _i++) {
            var one = _a[_i];
            var onceParam = null;
            var _loop_1 = function (oneCH) {
                if (oneCH.animaTp == UIAnimaDef_1.UIAnimaType.delay) {
                    sequence.push(cc.tween(target.tarNode).delay(one.duration));
                }
                else if (oneCH.animaTp == UIAnimaDef_1.UIAnimaType.function) {
                    sequence.push(cc.tween(target.tarNode).call(function () {
                        if (!oneCH.cbHandler.tarNode) {
                            return;
                        }
                        var comp = oneCH.cbHandler.tarNode.getComponent(oneCH.cbHandler.compName);
                        if (!comp) {
                            return;
                        }
                        comp[oneCH.cbHandler.funcName]();
                    }));
                }
                else {
                    onceParam = onceParam || {};
                    switch (oneCH.animaTp) {
                        case UIAnimaDef_1.UIAnimaType.move:
                            onceParam.x = oneCH.byVec2.x;
                            onceParam.y = oneCH.byVec2.y;
                            break;
                        case UIAnimaDef_1.UIAnimaType.opacity:
                            onceParam.opacity = oneCH.byNum;
                            break;
                        case UIAnimaDef_1.UIAnimaType.ratation:
                            onceParam.rotation = oneCH.byNum;
                            break;
                        case UIAnimaDef_1.UIAnimaType.scale:
                            onceParam.scaleX = oneCH.byVec2.x;
                            onceParam.scaleY = oneCH.byVec2.y;
                            break;
                    }
                }
            };
            for (var _b = 0, _c = one.animaList; _b < _c.length; _b++) {
                var oneCH = _c[_b];
                _loop_1(oneCH);
            }
            if (onceParam) {
                sequence.push(cc.tween(target.tarNode).by(one.duration, onceParam));
            }
        }
        if (sequence.length <= 0) {
            return;
        }
        var evalStr = 'cc.tween(target.tarNode)';
        for (var i = 0; i < sequence.length; i++) {
            evalStr += ".then(sequence[" + i + "])";
        }
        evalStr += '.start();';
        eval(evalStr);
    };
    __decorate([
        property(UIAnimaDef_1.UIAnimaTarget)
    ], UIAnimaPlayer.prototype, "animaTarget", void 0);
    __decorate([
        property()
    ], UIAnimaPlayer.prototype, "playOnload", void 0);
    UIAnimaPlayer = __decorate([
        ccclass
    ], UIAnimaPlayer);
    return UIAnimaPlayer;
}(cc.Component));
exports.UIAnimaPlayer = UIAnimaPlayer;

cc._RF.pop();