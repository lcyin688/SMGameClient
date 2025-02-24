
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/redDot/RedDotCompProxy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7890cdVoaZJFolALdsc/6Nm', 'RedDotCompProxy');
// c2f-framework/redDot/RedDotCompProxy.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RedDotCompProxy = /** @class */ (function (_super) {
    __extends(RedDotCompProxy, _super);
    function RedDotCompProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.txtCount = null;
        return _this;
    }
    RedDotCompProxy.prototype.onDestroy = function () {
        if (this.dotKey) {
            c2f.dotMgr.deleteDataByCompDestory(this.dotKey, this);
        }
        _super.prototype.onDestroy.call(this);
    };
    RedDotCompProxy.prototype.start = function () {
        this.amendDotPos();
    };
    /** 修正红点位置 */
    RedDotCompProxy.prototype.amendDotPos = function () {
        var parent = this.node.parent;
        if (!parent) {
            return;
        }
        var rtX = (1 - parent.anchorX) * parent.width * parent.scaleX;
        var rtY = (1 - parent.anchorY) * parent.height * parent.scaleY;
        this.node.setPosition(cc.v2(rtX + this.offset.x, rtY + this.offset.y));
    };
    RedDotCompProxy.prototype.setShowType = function (showType) {
        _super.prototype.setShowType.call(this, showType);
        this.txtCount.node.active = (showType === c2f.RedDot.ShowType.Number);
        this.nodeMask.active = (showType === c2f.RedDot.ShowType.Mark);
    };
    RedDotCompProxy.prototype.updateCount = function (count) {
        this.txtCount.string = count.toString();
    };
    __decorate([
        property(cc.Node)
    ], RedDotCompProxy.prototype, "nodeMask", void 0);
    __decorate([
        property(cc.Label)
    ], RedDotCompProxy.prototype, "txtCount", void 0);
    RedDotCompProxy = __decorate([
        ccclass
    ], RedDotCompProxy);
    return RedDotCompProxy;
}(c2f.RedDotComp));
exports.default = RedDotCompProxy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3JlZERvdC9SZWREb3RDb21wUHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNkMsbUNBQWM7SUFBM0Q7UUFBQSxxRUF1Q0M7UUFwQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQWlDOUIsQ0FBQztJQS9CYSxtQ0FBUyxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUNELGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFUywrQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO0lBQ04scUNBQVcsR0FBbEI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLHFDQUFXLEdBQWxCLFVBQW1CLFFBQTZCO1FBQzVDLGlCQUFNLFdBQVcsWUFBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHFDQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzNDLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNPO0lBTlQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVDbkM7SUFBRCxzQkFBQztDQXZDRCxBQXVDQyxDQXZDNEMsR0FBRyxDQUFDLFVBQVUsR0F1QzFEO2tCQXZDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWREb3RDb21wUHJveHkgZXh0ZW5kcyBjMmYuUmVkRG90Q29tcCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlTWFzazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0Q291bnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRvdEtleSkge1xuICAgICAgICAgICAgYzJmLmRvdE1nci5kZWxldGVEYXRhQnlDb21wRGVzdG9yeSh0aGlzLmRvdEtleSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFtZW5kRG90UG9zKCk7XG4gICAgfVxuXG4gICAgLyoqIOS/ruato+e6oueCueS9jee9riAqL1xuICAgIHB1YmxpYyBhbWVuZERvdFBvcygpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcnRYID0gKDEgLSBwYXJlbnQuYW5jaG9yWCkgKiBwYXJlbnQud2lkdGggKiBwYXJlbnQuc2NhbGVYO1xuICAgICAgICBsZXQgcnRZID0gKDEgLSBwYXJlbnQuYW5jaG9yWSkgKiBwYXJlbnQuaGVpZ2h0ICogcGFyZW50LnNjYWxlWTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKHJ0WCArIHRoaXMub2Zmc2V0LngsIHJ0WSArIHRoaXMub2Zmc2V0LnkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2hvd1R5cGUoc2hvd1R5cGU6IGMyZi5SZWREb3QuU2hvd1R5cGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2V0U2hvd1R5cGUoc2hvd1R5cGUpO1xuICAgICAgICB0aGlzLnR4dENvdW50Lm5vZGUuYWN0aXZlID0gKHNob3dUeXBlID09PSBjMmYuUmVkRG90LlNob3dUeXBlLk51bWJlcik7XG4gICAgICAgIHRoaXMubm9kZU1hc2suYWN0aXZlID0gKHNob3dUeXBlID09PSBjMmYuUmVkRG90LlNob3dUeXBlLk1hcmspO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVDb3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHh0Q291bnQuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKVxuICAgIH1cbn0iXX0=