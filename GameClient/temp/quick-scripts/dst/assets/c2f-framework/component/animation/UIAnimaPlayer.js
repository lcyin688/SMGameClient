
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/animation/UIAnimaPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9hbmltYXRpb24vVUlBbmltYVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXFFO0FBRS9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBMkhDO1FBeEhHLGlCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUdsQyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVwQix1QkFBaUIsR0FBeUIsSUFBSSxDQUFDOztJQW1IM0QsQ0FBQztJQWpIYSw4QkFBTSxHQUFoQjtRQUNJLFlBQVk7UUFDWixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxLQUFnQixVQUFnQixFQUFoQixLQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCLEVBQUU7WUFBN0IsSUFBSSxHQUFHLFNBQUE7WUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRVMsNkJBQUssR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzdDO0lBQ0wsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFDSSxPQUFPO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLENB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QUFDLFNBQVMsRUFBYixjQUFhLEVBQWIsSUFBYTtnQkFBMUIsSUFBSSxLQUFLLFNBQUE7d0JBQUwsS0FBSzthQWlDYjtZQUNELElBQUksU0FBUyxFQUFFO2dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN2RTtTQUNKO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksb0JBQWtCLENBQUMsT0FBSSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLFdBQVcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQXZIRDtRQURDLFFBQVEsQ0FBQywwQkFBYSxDQUFDO3NEQUNVO0lBR2xDO1FBREMsUUFBUSxFQUFFO3FEQUNpQjtJQU5uQixhQUFhO1FBRHpCLE9BQU87T0FDSyxhQUFhLENBMkh6QjtJQUFELG9CQUFDO0NBM0hELEFBMkhDLENBM0hrQyxFQUFFLENBQUMsU0FBUyxHQTJIOUM7QUEzSFksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUFuaW1hVGFyZ2V0LCBVSUFuaW1hVHlwZSB9IGZyb20gXCIuLi8uLi9kZWZpbmUvVUlBbmltYURlZlwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVUlBbmltYVBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlBbmltYVRhcmdldClcbiAgICBhbmltYVRhcmdldDogVUlBbmltYVRhcmdldFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIHBsYXlPbmxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYmVmb3JlUGxheU9wYWNpdHk6IE1hcDxjYy5Ob2RlLCBudW1iZXI+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8v6ZyA6KaB5Yqo55S755qE6IqC54K56YCP5piO5YyWXG4gICAgICAgIHRoaXMuYmVmb3JlUGxheU9wYWNpdHkgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiB0aGlzLmFuaW1hVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZVBsYXlPcGFjaXR5LnNldChvbmUudGFyTm9kZSwgb25lLnRhck5vZGUub3BhY2l0eSk7XG4gICAgICAgICAgICBvbmUudGFyTm9kZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGxheU9ubG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5wbGF5LmJpbmQodGhpcyksIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheSgpIHtcbiAgICAgICAgLy/ov5jljp/pgI/mmI7luqZcbiAgICAgICAgdGhpcy5iZWZvcmVQbGF5T3BhY2l0eS5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBrLm9wYWNpdHkgPSB2O1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJlZm9yZVBsYXlPcGFjaXR5LmNsZWFyKCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW55uu5qCH5a+56LGh54q25oCBIFxuICAgICAgICB0aGlzLmluaXRUYXJnZXRTdGF0ZSgpO1xuICAgICAgICAvL+aSreaUvuWKqOS9nFxuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5hbmltYVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5VGFyZ2V0QW5pbWEob25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJbnm67moIfnirbmgIEgKi9cbiAgICBwcml2YXRlIGluaXRUYXJnZXRTdGF0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIHRoaXMuYW5pbWFUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFRhcmdldChvbmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdFRhcmdldCh0YXJnZXQ6IFVJQW5pbWFUYXJnZXQpIHtcbiAgICAgICAgZm9yIChsZXQgb25lIG9mIHRhcmdldC5hY3Rpb25MaXN0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmVDSCBvZiBvbmUuYW5pbWFMaXN0KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChvbmVDSC5hbmltYVRwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVUlBbmltYVR5cGUubW92ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC50YXJOb2RlLnggLT0gb25lQ0guYnlWZWMyLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudGFyTm9kZS55IC09IG9uZUNILmJ5VmVjMi55O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVUlBbmltYVR5cGUub3BhY2l0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC50YXJOb2RlLm9wYWNpdHkgLT0gb25lQ0guYnlOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBVSUFuaW1hVHlwZS5yYXRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC50YXJOb2RlLnJvdGF0aW9uIC09IG9uZUNILmJ5TnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVUlBbmltYVR5cGUuc2NhbGU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudGFyTm9kZS5zY2FsZVggLT0gb25lQ0guYnlWZWMyLng7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudGFyTm9kZS5zY2FsZVkgLT0gb25lQ0guYnlWZWMyLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlUYXJnZXRBbmltYSh0YXJnZXQ6IFVJQW5pbWFUYXJnZXQpIHtcbiAgICAgICAgbGV0IHNlcXVlbmNlID0gW107XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiB0YXJnZXQuYWN0aW9uTGlzdCkge1xuICAgICAgICAgICAgbGV0IG9uY2VQYXJhbTogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAobGV0IG9uZUNIIG9mIG9uZS5hbmltYUxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob25lQ0guYW5pbWFUcCA9PSBVSUFuaW1hVHlwZS5kZWxheSkge1xuICAgICAgICAgICAgICAgICAgICBzZXF1ZW5jZS5wdXNoKGNjLnR3ZWVuKHRhcmdldC50YXJOb2RlKS5kZWxheShvbmUuZHVyYXRpb24pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9uZUNILmFuaW1hVHAgPT0gVUlBbmltYVR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2UucHVzaChjYy50d2Vlbih0YXJnZXQudGFyTm9kZSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9uZUNILmNiSGFuZGxlci50YXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBvbmVDSC5jYkhhbmRsZXIudGFyTm9kZS5nZXRDb21wb25lbnQob25lQ0guY2JIYW5kbGVyLmNvbXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBbb25lQ0guY2JIYW5kbGVyLmZ1bmNOYW1lXSgpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZVBhcmFtID0gb25jZVBhcmFtIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG9uZUNILmFuaW1hVHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVUlBbmltYVR5cGUubW92ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlUGFyYW0ueCA9IG9uZUNILmJ5VmVjMi54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2VQYXJhbS55ID0gb25lQ0guYnlWZWMyLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFVJQW5pbWFUeXBlLm9wYWNpdHk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jZVBhcmFtLm9wYWNpdHkgPSBvbmVDSC5ieU51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVUlBbmltYVR5cGUucmF0YXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jZVBhcmFtLnJvdGF0aW9uID0gb25lQ0guYnlOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFVJQW5pbWFUeXBlLnNjYWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2VQYXJhbS5zY2FsZVggPSBvbmVDSC5ieVZlYzIueDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlUGFyYW0uc2NhbGVZID0gb25lQ0guYnlWZWMyLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25jZVBhcmFtKSB7XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UucHVzaChjYy50d2Vlbih0YXJnZXQudGFyTm9kZSkuYnkob25lLmR1cmF0aW9uLCBvbmNlUGFyYW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXZhbFN0ciA9ICdjYy50d2Vlbih0YXJnZXQudGFyTm9kZSknO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBldmFsU3RyICs9IGAudGhlbihzZXF1ZW5jZVske2l9XSlgO1xuICAgICAgICB9XG4gICAgICAgIGV2YWxTdHIgKz0gJy5zdGFydCgpOyc7XG4gICAgICAgIGV2YWwoZXZhbFN0cik7XG4gICAgfVxufVxuIl19