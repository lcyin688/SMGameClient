
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/animValue/AnimValueProgressHP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3afeSdbzBJDJZejppXH98u', 'AnimValueProgressHP');
// c2f-framework/component/ui/animValue/AnimValueProgressHP.ts

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
var AnimValueProgress_1 = require("./AnimValueProgress");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
/**
 * 血条组件
 */
var AnimValueProgressHP = /** @class */ (function (_super) {
    __extends(AnimValueProgressHP, _super);
    function AnimValueProgressHP() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.barShadow = null;
        return _this;
    }
    AnimValueProgressHP.prototype.setBarShadow = function (progress) {
        switch (this.progressBar.mode) {
            case cc.ProgressBar.Mode.HORIZONTAL:
                this.barShadow.node.width = this.progressBar.totalLength * progress;
                break;
            case cc.ProgressBar.Mode.VERTICAL:
                this.barShadow.node.height = this.progressBar.totalLength * progress;
                break;
            case cc.ProgressBar.Mode.FILLED:
                this.barShadow.fillRange = progress;
            default:
                break;
        }
    };
    /**
     * @override
     */
    AnimValueProgressHP.prototype.onAnimStart = function () {
        if (this.isAdd) {
        }
        else {
            this.progressBar.progress = this.endValue;
        }
    };
    /**
     * @override
     */
    AnimValueProgressHP.prototype.onAnimUpdate = function () {
        if (this.isAdd) {
            this.setBarShadow(this.curValue);
            this.progressBar.progress = this.curValue;
        }
        else {
            this.setBarShadow(this.curValue);
        }
    };
    __decorate([
        property({
            type: cc.Sprite,
            tooltip: CC_DEV && "血条阴影，如果barSprite渲染模式为filled模式，此sprite也要对应修改，保持一致"
        })
    ], AnimValueProgressHP.prototype, "barShadow", void 0);
    AnimValueProgressHP = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.ProgressBar),
        menu("c2f/UI/AnimValueProgressHP")
    ], AnimValueProgressHP);
    return AnimValueProgressHP;
}(AnimValueProgress_1.default));
exports.default = AnimValueProgressHP;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hbmltVmFsdWUvQW5pbVZhbHVlUHJvZ3Jlc3NIUC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFOUMsSUFBQSxLQUFtRSxFQUFFLENBQUMsVUFBVSxFQUE5RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFFdkY7O0dBRUc7QUFLSDtJQUFpRCx1Q0FBaUI7SUFBbEU7UUFBQSxxRUE0Q0M7UUF2Q1UsZUFBUyxHQUFjLElBQUksQ0FBQzs7SUF1Q3ZDLENBQUM7SUFyQ1csMENBQVksR0FBcEIsVUFBcUIsUUFBZ0I7UUFDakMsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUMzQixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3BFLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3JFLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUN4QztnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyx5Q0FBVyxHQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtTQUVmO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ08sMENBQVksR0FBdEI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUF0Q0Q7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixPQUFPLEVBQUUsTUFBTSxJQUFJLGtEQUFrRDtTQUN4RSxDQUFDOzBEQUNpQztJQUxsQixtQkFBbUI7UUFKdkMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztPQUNkLG1CQUFtQixDQTRDdkM7SUFBRCwwQkFBQztDQTVDRCxBQTRDQyxDQTVDZ0QsMkJBQWlCLEdBNENqRTtrQkE1Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltVmFsdWVQcm9ncmVzcyBmcm9tIFwiLi9BbmltVmFsdWVQcm9ncmVzc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCByZXF1aXJlQ29tcG9uZW50LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDooYDmnaHnu4Tku7ZcbiAqL1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpXG5AbWVudShcImMyZi9VSS9BbmltVmFsdWVQcm9ncmVzc0hQXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltVmFsdWVQcm9ncmVzc0hQIGV4dGVuZHMgQW5pbVZhbHVlUHJvZ3Jlc3Mge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi6KGA5p2h6Zi05b2x77yM5aaC5p6cYmFyU3ByaXRl5riy5p+T5qih5byP5Li6ZmlsbGVk5qih5byP77yM5q2kc3ByaXRl5Lmf6KaB5a+55bqU5L+u5pS577yM5L+d5oyB5LiA6Ie0XCJcbiAgICB9KVxuICAgIHB1YmxpYyBiYXJTaGFkb3c6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNldEJhclNoYWRvdyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9ncmVzc0Jhci5tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLlByb2dyZXNzQmFyLk1vZGUuSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICB0aGlzLmJhclNoYWRvdy5ub2RlLndpZHRoID0gdGhpcy5wcm9ncmVzc0Jhci50b3RhbExlbmd0aCAqIHByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5Qcm9ncmVzc0Jhci5Nb2RlLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgIHRoaXMuYmFyU2hhZG93Lm5vZGUuaGVpZ2h0ID0gdGhpcy5wcm9ncmVzc0Jhci50b3RhbExlbmd0aCAqIHByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5Qcm9ncmVzc0Jhci5Nb2RlLkZJTExFRDpcbiAgICAgICAgICAgICAgICB0aGlzLmJhclNoYWRvdy5maWxsUmFuZ2UgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25BbmltU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQWRkKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSB0aGlzLmVuZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQW5pbVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBZGQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFyU2hhZG93KHRoaXMuY3VyVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHRoaXMuY3VyVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhclNoYWRvdyh0aGlzLmN1clZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==