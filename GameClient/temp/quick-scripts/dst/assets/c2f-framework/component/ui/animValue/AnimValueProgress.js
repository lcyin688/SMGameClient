
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/animValue/AnimValueProgress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f95cXxJPhAJaQaqRBZkHaC', 'AnimValueProgress');
// c2f-framework/component/ui/animValue/AnimValueProgress.ts

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
var AnimValue_1 = require("./AnimValue");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
/**
 * 数值渐变的进度条
 */
var AnimValueProgress = /** @class */ (function (_super) {
    __extends(AnimValueProgress, _super);
    function AnimValueProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onlyLessThan1 = false;
        _this._progressBar = null;
        return _this;
    }
    Object.defineProperty(AnimValueProgress.prototype, "progressBar", {
        get: function () {
            if (!this._progressBar)
                this._progressBar = this.getComponent(cc.ProgressBar);
            return this._progressBar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimValueProgress.prototype, "progressChgCb", {
        get: function () {
            return this._progressChgCb;
        },
        set: function (v) {
            this._progressChgCb = v;
        },
        enumerable: false,
        configurable: true
    });
    AnimValueProgress.prototype.onDestroy = function () {
        this.progressChgCb = null;
        if (_super.prototype.onDestroy) {
            _super.prototype.onDestroy.call(this);
        }
    };
    /**
     * @override
     */
    AnimValueProgress.prototype.onAnimUpdate = function () {
        if (this.onlyLessThan1) {
            this.progressBar.progress = this.curValue % 1;
        }
        else {
            this.progressBar.progress = Math.min(this.curValue, 1);
        }
        if (this.progressChgCb) {
            this.progressChgCb(this.curValue);
        }
    };
    __decorate([
        property({ tooltip: "外观仅显示小于1部分" })
    ], AnimValueProgress.prototype, "onlyLessThan1", void 0);
    AnimValueProgress = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.ProgressBar),
        menu("c2f/UI/AnimValueProgress")
    ], AnimValueProgress);
    return AnimValueProgress;
}(AnimValue_1.default));
exports.default = AnimValueProgress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hbmltVmFsdWUvQW5pbVZhbHVlUHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBbUUsRUFBRSxDQUFDLFVBQVUsRUFBOUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRXZGOztHQUVHO0FBS0g7SUFBK0MscUNBQVM7SUFBeEQ7UUFBQSxxRUF3Q0M7UUFyQ0csbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFFdkIsa0JBQVksR0FBbUIsSUFBSSxDQUFDOztJQW1DaEQsQ0FBQztJQWxDRyxzQkFBVywwQ0FBVzthQUF0QjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLDRDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFDRCxVQUF5QixDQUFXO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUhBO0lBS1MscUNBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNPLHdDQUFZLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDOzREQUNMO0lBSGQsaUJBQWlCO1FBSnJDLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7T0FDWixpQkFBaUIsQ0F3Q3JDO0lBQUQsd0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzhDLG1CQUFTLEdBd0N2RDtrQkF4Q29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltVmFsdWUgZnJvbSBcIi4vQW5pbVZhbHVlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIHJlcXVpcmVDb21wb25lbnQsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOaVsOWAvOa4kOWPmOeahOi/m+W6puadoVxuICovXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5Qcm9ncmVzc0JhcilcbkBtZW51KFwiYzJmL1VJL0FuaW1WYWx1ZVByb2dyZXNzXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltVmFsdWVQcm9ncmVzcyBleHRlbmRzIEFuaW1WYWx1ZSB7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuWkluinguS7heaYvuekuuWwj+S6jjHpg6jliIZcIiB9KVxuICAgIG9ubHlMZXNzVGhhbjE6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3Byb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgcHVibGljIGdldCBwcm9ncmVzc0JhcigpOiBjYy5Qcm9ncmVzc0JhciB7XG4gICAgICAgIGlmICghdGhpcy5fcHJvZ3Jlc3NCYXIpIHRoaXMuX3Byb2dyZXNzQmFyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NCYXI7XG4gICAgfVxuXG4gICAgLyoqIOi/m+W6puWPmOWMluWbnuiwgyAqL1xuICAgIHByaXZhdGUgX3Byb2dyZXNzQ2hnQ2I6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3NDaGdDYigpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc0NoZ0NiO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHByb2dyZXNzQ2hnQ2IodjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDaGdDYiA9IHY7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NoZ0NiID0gbnVsbDtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGVzdHJveSkge1xuICAgICAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25BbmltVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vbmx5TGVzc1RoYW4xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gdGhpcy5jdXJWYWx1ZSAlIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gTWF0aC5taW4odGhpcy5jdXJWYWx1ZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NDaGdDYikge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0NoZ0NiKHRoaXMuY3VyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19