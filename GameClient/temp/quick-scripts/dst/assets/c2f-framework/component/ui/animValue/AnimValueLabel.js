
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/animValue/AnimValueLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93188RmKh1GHJhJYMxNsu+u', 'AnimValueLabel');
// c2f-framework/component/ui/animValue/AnimValueLabel.ts

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
 * 数值渐变的数字
 */
var AnimValueLabel = /** @class */ (function (_super) {
    __extends(AnimValueLabel, _super);
    function AnimValueLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = null;
        return _this;
    }
    Object.defineProperty(AnimValueLabel.prototype, "label", {
        get: function () {
            if (!this._label)
                this._label = this.getComponent(cc.Label);
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @override
     */
    AnimValueLabel.prototype.onAnimUpdate = function () {
        this.label.string = "" + Math.round(this.curValue);
    };
    AnimValueLabel = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        menu("c2f/UI/AnimValueLabel")
    ], AnimValueLabel);
    return AnimValueLabel;
}(AnimValue_1.default));
exports.default = AnimValueLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hbmltVmFsdWUvQW5pbVZhbHVlTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBbUUsRUFBRSxDQUFDLFVBQVUsRUFBOUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRXZGOztHQUVHO0FBS0g7SUFBNEMsa0NBQVM7SUFBckQ7UUFBQSxxRUFjQztRQVpXLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBWXBDLENBQUM7SUFYRyxzQkFBVyxpQ0FBSzthQUFoQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ08scUNBQVksR0FBdEI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBRyxDQUFDO0lBQ3ZELENBQUM7SUFiZ0IsY0FBYztRQUpsQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ1QsY0FBYyxDQWNsQztJQUFELHFCQUFDO0NBZEQsQUFjQyxDQWQyQyxtQkFBUyxHQWNwRDtrQkFkb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltVmFsdWUgZnJvbSBcIi4vQW5pbVZhbHVlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIHJlcXVpcmVDb21wb25lbnQsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOaVsOWAvOa4kOWPmOeahOaVsOWtl1xuICovXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5MYWJlbClcbkBtZW51KFwiYzJmL1VJL0FuaW1WYWx1ZUxhYmVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltVmFsdWVMYWJlbCBleHRlbmRzIEFuaW1WYWx1ZSB7XG5cbiAgICBwcml2YXRlIF9sYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogY2MuTGFiZWwge1xuICAgICAgICBpZiAoIXRoaXMuX2xhYmVsKSB0aGlzLl9sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkFuaW1VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gYCR7TWF0aC5yb3VuZCh0aGlzLmN1clZhbHVlKX1gO1xuICAgIH1cbn1cbiJdfQ==