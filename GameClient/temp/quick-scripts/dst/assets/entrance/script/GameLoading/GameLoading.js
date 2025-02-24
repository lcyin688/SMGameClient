
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLoading/GameLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c6ebrxwO1D4IUdTY0ZNzmb', 'GameLoading');
// entrance/script/GameLoading/GameLoading.ts

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
var UIVControlBase_1 = require("./../../../c2f-framework/gui/layer/UIVControlBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLoading = /** @class */ (function (_super) {
    __extends(GameLoading, _super);
    function GameLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLoading';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    GameLoading.prototype.onViewOpen = function (param) {
        this.model.input = param;
    };
    GameLoading.prototype.start = function () {
        var _this = this;
        this.view.progressLabel.string = '';
        this.view.barLoadingProgressBar.progress = 0;
        //进度界面显示后再慢慢加载
        this.scheduleOnce(function () {
            _this.model.loadTask();
        }, 0.1);
        this.updateAuditProg();
    };
    GameLoading.prototype.updateAuditProg = function () {
        if (!szg.plat.isAudit) {
            return;
        }
        // cc.Tween.stopAllByTarget(this.view.loadIcon);
        // cc.tween(this.view.loadIcon)
        //     .by(1, { angle: -360 })
        //     .repeatForever()
        //     .start();
    };
    GameLoading = __decorate([
        ccclass
    ], GameLoading);
    return GameLoading;
}(UIVControlBase_1.UIVControlBase));
exports.default = GameLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvYWRpbmcvR2FtZUxvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW1GO0FBTTdFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFjO0lBQXZEO1FBQUEscUVBaUNDO1FBaENHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsYUFBYSxDQUFDO1FBRTNCLFdBQUssR0FBcUIsU0FBUyxDQUFDO1FBQ3BDLFVBQUksR0FBb0IsU0FBUyxDQUFDOztJQTRCN0MsQ0FBQztJQTFCYSxnQ0FBVSxHQUFwQixVQUFxQixLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRVMsMkJBQUssR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFN0MsY0FBYztRQUNkLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsZ0RBQWdEO1FBQ2hELCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtJQUNwQixDQUFDO0lBaENnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUMvQjtJQUFELGtCQUFDO0NBakNELEFBaUNDLENBakN3QywrQkFBYyxHQWlDdEQ7a0JBakNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlWQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVkNvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IEdhbWVMb2FkaW5nTW9kZWwgZnJvbSAnLi9HYW1lTG9hZGluZ01vZGVsJztcbmltcG9ydCBHYW1lTG9hZGluZ1ZpZXcgZnJvbSAnLi9HYW1lTG9hZGluZ1ZpZXcnO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvYWRpbmcgZXh0ZW5kcyBVSVZDb250cm9sQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdHYW1lTG9hZGluZyc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IEdhbWVMb2FkaW5nTW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHZpZXc6IEdhbWVMb2FkaW5nVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBvblZpZXdPcGVuKHBhcmFtOiBhbnkpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5pbnB1dCA9IHBhcmFtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3LnByb2dyZXNzTGFiZWwuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMudmlldy5iYXJMb2FkaW5nUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAwO1xuXG4gICAgICAgIC8v6L+b5bqm55WM6Z2i5pi+56S65ZCO5YaN5oWi5oWi5Yqg6L29XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZFRhc2soKTtcbiAgICAgICAgfSwgMC4xKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUF1ZGl0UHJvZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQXVkaXRQcm9nKCkge1xuICAgICAgICBpZiAoIXN6Zy5wbGF0LmlzQXVkaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy52aWV3LmxvYWRJY29uKTtcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy52aWV3LmxvYWRJY29uKVxuICAgICAgICAvLyAgICAgLmJ5KDEsIHsgYW5nbGU6IC0zNjAgfSlcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuICAgIH1cbn0iXX0=