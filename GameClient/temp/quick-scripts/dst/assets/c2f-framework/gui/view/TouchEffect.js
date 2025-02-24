
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/view/TouchEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be533baN2NNOKFhSaS8tiz2', 'TouchEffect');
// c2f-framework/gui/view/TouchEffect.ts

"use strict";
/** 点击特效 */
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
exports.TouchEffect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchEffect = /** @class */ (function (_super) {
    __extends(TouchEffect, _super);
    function TouchEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spEfxDt = null;
        return _this;
    }
    TouchEffect.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node['_touchListener'].swallowTouches = false;
    };
    TouchEffect.prototype.onTouchStart = function (event) {
        var maxCnt = 5;
        if (!this.spEfxDt || this.node.children.length > maxCnt) {
            return;
        }
        var worldPoint = event.getLocation();
        var posInNode = this.node.convertToNodeSpaceAR(worldPoint);
        var spNode = new cc.Node();
        spNode.setPosition(posInNode);
        spNode.scale = 1;
        spNode.angle = Math.random() * 360;
        var newSpine = spNode.addComponent(sp.Skeleton);
        newSpine.premultipliedAlpha = false;
        newSpine.enableBatch = true;
        newSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
        spNode.parent = this.node;
        newSpine.skeletonData = this.spEfxDt;
        newSpine.setAnimation(0, "idle", false);
        newSpine.setCompleteListener(function (data) {
            spNode.destroy();
        });
    };
    __decorate([
        property(sp.SkeletonData)
    ], TouchEffect.prototype, "spEfxDt", void 0);
    TouchEffect = __decorate([
        ccclass
    ], TouchEffect);
    return TouchEffect;
}(cc.Component));
exports.TouchEffect = TouchEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS92aWV3L1RvdWNoRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUFpQ0M7UUE5QlcsYUFBTyxHQUEyQixJQUFJLENBQUM7O0lBOEJuRCxDQUFDO0lBNUJhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkQsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLEtBQUs7UUFDdEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFDckQsT0FBTztTQUNWO1FBQ0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM3QixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNoQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0MsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQTtRQUNuQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMzRSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUIsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBVSxJQUFJO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztnREFDcUI7SUFIdEMsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQWlDdkI7SUFBRCxrQkFBQztDQWpDRCxBQWlDQyxDQWpDZ0MsRUFBRSxDQUFDLFNBQVMsR0FpQzVDO0FBakNZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOeCueWHu+eJueaViCAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUb3VjaEVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIHByaXZhdGUgc3BFZnhEdDogc3AuU2tlbGV0b25EYXRhIHwgbnVsbCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlWydfdG91Y2hMaXN0ZW5lciddLnN3YWxsb3dUb3VjaGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbWF4Q250ID0gNTtcbiAgICAgICAgaWYgKCF0aGlzLnNwRWZ4RHQgfHwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCA+IG1heENudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3b3JsZFBvaW50ID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHBvc0luTm9kZSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvaW50KTtcbiAgICAgICAgbGV0IHNwTm9kZSA9IG5ldyBjYy5Ob2RlKClcbiAgICAgICAgc3BOb2RlLnNldFBvc2l0aW9uKHBvc0luTm9kZSlcbiAgICAgICAgc3BOb2RlLnNjYWxlID0gMVxuICAgICAgICBzcE5vZGUuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xuICAgICAgICBsZXQgbmV3U3BpbmUgPSBzcE5vZGUuYWRkQ29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICBuZXdTcGluZS5wcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZVxuICAgICAgICBuZXdTcGluZS5lbmFibGVCYXRjaCA9IHRydWU7XG4gICAgICAgIG5ld1NwaW5lLnNldEFuaW1hdGlvbkNhY2hlTW9kZShzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFKVxuICAgICAgICBzcE5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgIG5ld1NwaW5lLnNrZWxldG9uRGF0YSA9IHRoaXMuc3BFZnhEdDtcbiAgICAgICAgbmV3U3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCBmYWxzZSk7XG4gICAgICAgIG5ld1NwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNwTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=