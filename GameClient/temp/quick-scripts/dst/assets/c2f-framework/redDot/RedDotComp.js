
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/redDot/RedDotComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6510fUIts5JMalhJjkbITAG', 'RedDotComp');
// c2f-framework/redDot/RedDotComp.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var UIPControlBase_1 = require("../gui/layer/UIPControlBase");
var RedDotComp = /** @class */ (function (_super) {
    __extends(RedDotComp, _super);
    function RedDotComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 外观类型 */
        _this.showType = c2f.RedDot.ShowType.Normal;
        /** 位置偏移 */
        _this.offset = cc.v2(0, 0);
        /** 参数·列表类，通用弹窗等需要做区分 */
        _this.dotKey = null;
        return _this;
    }
    /** 更新显示状态 */
    RedDotComp.prototype.setDisplay = function (display) {
        this.node.active = display;
    };
    /** 设置显示类型 */
    RedDotComp.prototype.setShowType = function (showType) {
        if (this.showType != showType) {
            this.showType = showType;
        }
    };
    /** 设置位置偏移量 */
    RedDotComp.prototype.setPosOffset = function (offset) {
        this.offset.x = offset.x;
        this.offset.y = offset.y;
    };
    /** 设置参数 */
    RedDotComp.prototype.setDotKey = function (key) {
        this.dotKey = key;
    };
    /** 获取参数 */
    RedDotComp.prototype.getDotKey = function () {
        return this.dotKey;
    };
    return RedDotComp;
}(UIPControlBase_1.UIPControlBase));
c2f.RedDotComp = RedDotComp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3JlZERvdC9SZWREb3RDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUE2RDtBQUU3RDtJQUFrQyw4QkFBYztJQUFoRDtRQUFBLHFFQXdDQztRQXRDRyxXQUFXO1FBQ0osY0FBUSxHQUF3QixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbEUsV0FBVztRQUNELFlBQU0sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4Qyx3QkFBd0I7UUFDZCxZQUFNLEdBQWUsSUFBSSxDQUFDOztJQWlDeEMsQ0FBQztJQS9CRyxhQUFhO0lBQ04sK0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhO0lBQ04sZ0NBQVcsR0FBbEIsVUFBbUIsUUFBNkI7UUFDNUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxjQUFjO0lBQ1AsaUNBQVksR0FBbkIsVUFBb0IsTUFBZTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVc7SUFDSiw4QkFBUyxHQUFoQixVQUFpQixHQUFlO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO0lBQ0osOEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUtMLGlCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsQ0F4Q2lDLCtCQUFjLEdBd0MvQztBQVVELEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tIFwiLi4vZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlXCI7XG5cbmFic3RyYWN0IGNsYXNzIFJlZERvdENvbXAgZXh0ZW5kcyBVSVBDb250cm9sQmFzZSB7XG5cbiAgICAvKiog5aSW6KeC57G75Z6LICovXG4gICAgcHVibGljIHNob3dUeXBlOiBjMmYuUmVkRG90LlNob3dUeXBlID0gYzJmLlJlZERvdC5TaG93VHlwZS5Ob3JtYWw7XG4gICAgLyoqIOS9jee9ruWBj+enuyAqL1xuICAgIHByb3RlY3RlZCBvZmZzZXQ6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICAvKiog5Y+C5pWwwrfliJfooajnsbvvvIzpgJrnlKjlvLnnqpfnrYnpnIDopoHlgZrljLrliIYgKi9cbiAgICBwcm90ZWN0ZWQgZG90S2V5OiBjMmYuRG90S2V5ID0gbnVsbDtcblxuICAgIC8qKiDmm7TmlrDmmL7npLrnirbmgIEgKi9cbiAgICBwdWJsaWMgc2V0RGlzcGxheShkaXNwbGF5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBkaXNwbGF5O1xuICAgIH1cblxuICAgIC8qKiDorr7nva7mmL7npLrnsbvlnosgKi9cbiAgICBwdWJsaWMgc2V0U2hvd1R5cGUoc2hvd1R5cGU6IGMyZi5SZWREb3QuU2hvd1R5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1R5cGUgIT0gc2hvd1R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1R5cGUgPSBzaG93VHlwZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDorr7nva7kvY3nva7lgY/np7vph48gKi9cbiAgICBwdWJsaWMgc2V0UG9zT2Zmc2V0KG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICB0aGlzLm9mZnNldC54ID0gb2Zmc2V0Lng7XG4gICAgICAgIHRoaXMub2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICB9XG5cbiAgICAvKiog6K6+572u5Y+C5pWwICovXG4gICAgcHVibGljIHNldERvdEtleShrZXk6IGMyZi5Eb3RLZXkpIHtcbiAgICAgICAgdGhpcy5kb3RLZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluWPguaVsCAqL1xuICAgIHB1YmxpYyBnZXREb3RLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdEtleTtcbiAgICB9XG4gICAgLyoqIOS/ruato+S9jee9riAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBhbWVuZERvdFBvcygpO1xuICAgIC8qKiDmm7TmlrDnuqLngrnorqHmlbAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlQ291bnQoY291bnQ6IG51bWJlcik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIFJlZERvdENvbXA6IHR5cGVvZiBSZWREb3RDb21wO1xuICAgIH1cbiAgICBuYW1lc3BhY2UgYzJmIHtcbiAgICAgICAgdHlwZSBSZWREb3RDb21wID0gSW5zdGFuY2VUeXBlPHR5cGVvZiBSZWREb3RDb21wPjtcbiAgICB9XG59XG5jMmYuUmVkRG90Q29tcCA9IFJlZERvdENvbXA7XG5cbmV4cG9ydCB7IH07Il19