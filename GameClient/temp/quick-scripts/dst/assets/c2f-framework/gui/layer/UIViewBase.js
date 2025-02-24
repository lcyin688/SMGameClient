
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIViewBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d786jOK99BAooW+pdRnepo', 'UIViewBase');
// c2f-framework/gui/layer/UIViewBase.ts

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
exports.UIViewBase = void 0;
var C2FConst_1 = require("../../define/C2FConst");
var C2FEnum_1 = require("../../define/C2FEnum");
var UIPrefabBase_1 = require("./UIPrefabBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIViewBase = /** @class */ (function (_super) {
    __extends(UIViewBase, _super);
    function UIViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //--------------UI对象-------------    
        /** 黑色底板 */
        _this.blackBg = null;
        /** 界面根节点 */
        _this.nodeUI = null;
        //---------------------------------
        /** 正在播放出(入)特效 */
        _this._animaPlaying = false;
        return _this;
    }
    Object.defineProperty(UIViewBase.prototype, "animaPlaying", {
        get: function () {
            return this._animaPlaying;
        },
        set: function (v) {
            this._animaPlaying = v;
        },
        enumerable: false,
        configurable: true
    });
    UIViewBase.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initCommonUI();
    };
    UIViewBase.prototype.onDestroy = function () {
        this.blackBg = null;
        this.nodeUI = null;
        _super.prototype.onDestroy.call(this);
    };
    UIViewBase.prototype.initProperty = function () {
        this.blackBg = cc.find('blackBg', this.node);
        this.nodeUI = cc.find('nodeUI', this.node);
    };
    UIViewBase.prototype.initCommonUI = function () {
        if (this.blackBg) {
            this.blackBg.opacity = 0;
        }
        if (this.nodeUI) {
            this.nodeUI.opacity = 0;
        }
    };
    UIViewBase.prototype.playInAnima = function () {
        var _this = this;
        var offsetY = -50;
        var upHeight = 10;
        var duration = 0.3;
        var delayDur = 0.02;
        this.animaPlaying = true;
        if (this.blackBg) {
            cc.tween(this.blackBg)
                .delay(delayDur)
                .set({ opacity: 127 })
                .to(duration, { opacity: C2FConst_1.C2FConst.UIBgOpacity })
                .start();
        }
        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .delay(delayDur)
                .call(function () {
                _this.nodeUI.opacity = 0;
                _this.nodeUI.setPosition(0, offsetY, 0);
            })
                .by(duration / 2, { position: cc.v3(0, -offsetY + upHeight, 0), opacity: 125 })
                .by(duration / 2, { position: cc.v3(0, -upHeight, 0), opacity: 130 })
                .call(function () {
                _this.emit(C2FEnum_1.C2FEnum.Event.PopViewInAnimaCmpl);
            })
                .start();
        }
        if (this.blackBg || this.nodeUI) {
            this.scheduleOnce(function () {
                _this.animaPlaying = false;
            }, duration + delayDur);
        }
        else {
            this.animaPlaying = false;
        }
    };
    UIViewBase.prototype.playOutAnima = function (params, nextFunc) {
        var _this = this;
        var offsetY = -100;
        var duration = 0.2;
        this.animaPlaying = true;
        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .by(duration, { position: cc.v3(0, offsetY, 0), opacity: -255 })
                .start();
        }
        if (this.blackBg) {
            cc.tween(this.blackBg)
                .to(duration, { opacity: 0 })
                .start();
        }
        var animaEnd = function () {
            _this.animaPlaying = false;
            nextFunc && nextFunc();
        };
        if (this.nodeUI || this.blackBg) {
            this.scheduleOnce(animaEnd, duration);
        }
        else {
            animaEnd && animaEnd();
        }
    };
    UIViewBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
    };
    UIViewBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.Event.ChangeViewValue);
    };
    /**
     *
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    UIViewBase.prototype.onChangeViewValue = function (msgType, varName, cb) {
        cb === null || cb === void 0 ? void 0 : cb(this[varName]);
    };
    UIViewBase = __decorate([
        ccclass
    ], UIViewBase);
    return UIViewBase;
}(UIPrefabBase_1.UIPrefabBase));
exports.UIViewBase = UIViewBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZpZXdCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsZ0RBQStDO0FBQy9DLCtDQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQWlJQztRQS9IRyxxQ0FBcUM7UUFDckMsV0FBVztRQUNILGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDaEMsWUFBWTtRQUNKLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDL0IsbUNBQW1DO1FBRW5DLGlCQUFpQjtRQUNULG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQXVIM0MsQ0FBQztJQXRIRyxzQkFBVyxvQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBQ0QsVUFBd0IsQ0FBVTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQUtTLDJCQUFNLEdBQWhCO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sU0FBUyxXQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVTLGlDQUFZLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENB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OztPQUtHO0lBQ0ssc0NBQWlCLEdBQXpCLFVBQTBCLE9BQWUsRUFBRSxPQUFlLEVBQUUsRUFBWTtRQUNwRSxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3hCLENBQUM7SUFoSVEsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWlJdEI7SUFBRCxpQkFBQztDQWpJRCxBQWlJQyxDQWpJK0IsMkJBQVksR0FpSTNDO0FBaklZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tICcuLi8uLi9kZWZpbmUvQzJGQ29uc3QnO1xuaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gJy4uLy4uL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCB7IFVJUHJlZmFiQmFzZSB9IGZyb20gJy4vVUlQcmVmYWJCYXNlJztcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVZpZXdCYXNlIGV4dGVuZHMgVUlQcmVmYWJCYXNlIHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS1VSeWvueixoS0tLS0tLS0tLS0tLS0gICAgXG4gICAgLyoqIOm7keiJsuW6leadvyAqL1xuICAgIHByaXZhdGUgYmxhY2tCZzogY2MuTm9kZSA9IG51bGw7XG4gICAgLyoqIOeVjOmdouagueiKgueCuSAqL1xuICAgIHByaXZhdGUgbm9kZVVJOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqIOato+WcqOaSreaUvuWHuijlhaUp54m55pWIICovXG4gICAgcHJpdmF0ZSBfYW5pbWFQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGdldCBhbmltYVBsYXlpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYVBsYXlpbmc7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYW5pbWFQbGF5aW5nKHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYW5pbWFQbGF5aW5nID0gdjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgdGhpcy5pbml0Q29tbW9uVUkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJsYWNrQmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVVSSA9IG51bGw7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCZyA9IGNjLmZpbmQoJ2JsYWNrQmcnLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGVVSSA9IGNjLmZpbmQoJ25vZGVVSScsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRDb21tb25VSSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxhY2tCZykge1xuICAgICAgICAgICAgdGhpcy5ibGFja0JnLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGVVSSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlVUkub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGxheUluQW5pbWEoKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSAtNTA7XG4gICAgICAgIGNvbnN0IHVwSGVpZ2h0ID0gMTA7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMC4zO1xuICAgICAgICBjb25zdCBkZWxheUR1ciA9IDAuMDI7XG4gICAgICAgIHRoaXMuYW5pbWFQbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5ibGFja0JnKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJsYWNrQmcpXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5RHVyKVxuICAgICAgICAgICAgICAgIC5zZXQoeyBvcGFjaXR5OiAxMjcgfSlcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgb3BhY2l0eTogQzJGQ29uc3QuVUlCZ09wYWNpdHkgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGVVSSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlVUkpXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5RHVyKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlVUkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZVVJLnNldFBvc2l0aW9uKDAsIG9mZnNldFksIDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmJ5KGR1cmF0aW9uIC8gMiwgeyBwb3NpdGlvbjogY2MudjMoMCwgLW9mZnNldFkgKyB1cEhlaWdodCwgMCksIG9wYWNpdHk6IDEyNSB9KVxuICAgICAgICAgICAgICAgIC5ieShkdXJhdGlvbiAvIDIsIHsgcG9zaXRpb246IGNjLnYzKDAsIC11cEhlaWdodCwgMCksIG9wYWNpdHk6IDEzMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KEMyRkVudW0uRXZlbnQuUG9wVmlld0luQW5pbWFDbXBsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJsYWNrQmcgfHwgdGhpcy5ub2RlVUkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24gKyBkZWxheUR1cilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWFQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGxheU91dEFuaW1hKHBhcmFtczogYW55LCBuZXh0RnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IC0xMDA7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMC4yO1xuICAgICAgICB0aGlzLmFuaW1hUGxheWluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZVVJKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGVVSSlcbiAgICAgICAgICAgICAgICAuYnkoZHVyYXRpb24sIHsgcG9zaXRpb246IGNjLnYzKDAsIG9mZnNldFksIDApLCBvcGFjaXR5OiAtMjU1IH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxhY2tCZykge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ibGFja0JnKVxuICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBsZXQgYW5pbWFFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbmV4dEZ1bmMgJiYgbmV4dEZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlVUkgfHwgdGhpcy5ibGFja0JnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShhbmltYUVuZCwgZHVyYXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltYUVuZCAmJiBhbmltYUVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihDMkZFbnVtLkV2ZW50LkNoYW5nZVZpZXdWYWx1ZSwgdGhpcy5vbkNoYW5nZVZpZXdWYWx1ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmYoQzJGRW51bS5FdmVudC5DaGFuZ2VWaWV3VmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtc2dUeXBlIOa2iOaBr+exu+Wei1xuICAgICAqIEBwYXJhbSB2YXJOYW1lIOWPmOmHj+WQjVxuICAgICAqIEBwYXJhbSBjYiDlpITnkIblh73mlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uQ2hhbmdlVmlld1ZhbHVlKG1zZ1R5cGU6IHN0cmluZywgdmFyTmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgY2I/Lih0aGlzW3Zhck5hbWVdKTtcbiAgICB9XG59XG4iXX0=