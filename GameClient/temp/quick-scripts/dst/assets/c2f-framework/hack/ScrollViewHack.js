
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/ScrollViewHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4804b8bMZHdKTG7s7V0jMf', 'ScrollViewHack');
// c2f-framework/hack/ScrollViewHack.ts

// 基于CocosCreator2.x 滚动组件hack代码
//@ts-ignore
cc.ScrollView.prototype._onTouchMoved = function (event, captureListeners) {
    if (!this.enabledInHierarchy)
        return;
    if (this.hasNestedViewGroup(event, captureListeners))
        return;
    var touch = event.touch;
    if (this.content) {
        this._handleMoveLogic(touch);
    }
    // Do not prevent touch events in inner nodes
    if (!this.cancelInnerEvents) {
        return;
    }
    var deltaMove = touch.getLocation().sub(touch.getStartLocation());
    //FIXME: touch move delta should be calculated by DPI.
    if (deltaMove.mag() > 7) {
        if (!this._touchMoved && event.target !== this.node) {
            // Simulate touch cancel for target node
            var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
            cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
            cancelEvent.touch = event.touch;
            cancelEvent['simulate'] = true;
            event.captureCancelEvent = cancelEvent;
            this._touchMoved = true;
        }
    }
    this._stopPropagationIfTargetIsMe(event);
};
//@ts-ignore
cc.ScrollView.prototype.hasNestedViewGroup = function (event, captureListeners) {
    if (event.eventPhase !== cc.Event.CAPTURING_PHASE)
        return;
    return false;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svU2Nyb2xsVmlld0hhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBRS9CLFlBQVk7QUFDWixFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCO1FBQUUsT0FBTztJQUNyQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7UUFBRSxPQUFPO0lBRTdELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDekIsT0FBTztLQUNWO0lBQ0QsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLHNEQUFzRDtJQUN0RCxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pELHdDQUF3QztZQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0UsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDbEQsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDL0IsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNKO0lBQ0QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUdGLFlBQVk7QUFDWixFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLEtBQUssRUFBRSxnQkFBZ0I7SUFDMUUsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZTtRQUFFLE9BQU87SUFDMUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5Z+65LqOQ29jb3NDcmVhdG9yMi54IOa7muWKqOe7hOS7tmhhY2vku6PnoIFcblxuLy9AdHMtaWdub3JlXG5jYy5TY3JvbGxWaWV3LnByb3RvdHlwZS5fb25Ub3VjaE1vdmVkID0gZnVuY3Rpb24gKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmhhc05lc3RlZFZpZXdHcm91cChldmVudCwgY2FwdHVyZUxpc3RlbmVycykpIHJldHVybjtcblxuICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoO1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlTW92ZUxvZ2ljKHRvdWNoKTtcbiAgICB9XG4gICAgLy8gRG8gbm90IHByZXZlbnQgdG91Y2ggZXZlbnRzIGluIGlubmVyIG5vZGVzXG4gICAgaWYgKCF0aGlzLmNhbmNlbElubmVyRXZlbnRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRlbHRhTW92ZSA9IHRvdWNoLmdldExvY2F0aW9uKCkuc3ViKHRvdWNoLmdldFN0YXJ0TG9jYXRpb24oKSk7XG4gICAgLy9GSVhNRTogdG91Y2ggbW92ZSBkZWx0YSBzaG91bGQgYmUgY2FsY3VsYXRlZCBieSBEUEkuXG4gICAgaWYgKGRlbHRhTW92ZS5tYWcoKSA+IDcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90b3VjaE1vdmVkICYmIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5ub2RlKSB7XG4gICAgICAgICAgICAvLyBTaW11bGF0ZSB0b3VjaCBjYW5jZWwgZm9yIHRhcmdldCBub2RlXG4gICAgICAgICAgICBsZXQgY2FuY2VsRXZlbnQgPSBuZXcgY2MuRXZlbnQuRXZlbnRUb3VjaChldmVudC5nZXRUb3VjaGVzKCksIGV2ZW50LmJ1YmJsZXMpO1xuICAgICAgICAgICAgY2FuY2VsRXZlbnQudHlwZSA9IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTDtcbiAgICAgICAgICAgIGNhbmNlbEV2ZW50LnRvdWNoID0gZXZlbnQudG91Y2g7XG4gICAgICAgICAgICBjYW5jZWxFdmVudFsnc2ltdWxhdGUnXSA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5jYXB0dXJlQ2FuY2VsRXZlbnQgPSBjYW5jZWxFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoTW92ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbklmVGFyZ2V0SXNNZShldmVudCk7XG59O1xuXG5cbi8vQHRzLWlnbm9yZVxuY2MuU2Nyb2xsVmlldy5wcm90b3R5cGUuaGFzTmVzdGVkVmlld0dyb3VwID0gZnVuY3Rpb24gKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKSB7XG4gICAgaWYgKGV2ZW50LmV2ZW50UGhhc2UgIT09IGNjLkV2ZW50LkNBUFRVUklOR19QSEFTRSkgcmV0dXJuO1xuICAgIHJldHVybiBmYWxzZTtcbn0iXX0=