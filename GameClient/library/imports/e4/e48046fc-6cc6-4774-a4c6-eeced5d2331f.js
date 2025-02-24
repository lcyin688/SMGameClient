"use strict";
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