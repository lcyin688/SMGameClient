"use strict";
cc._RF.push(module, 'd8deckZLXJFBJRISpVYnWW9', 'EventMgrHack');
// c2f-framework/hack/EventMgrHack.ts

"use strict";
//@ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
if (!CC_EDITOR) {
    if (cc['internal'].eventManager && !cc['internal'].eventManager['__$CCEventMgrHack$__']) {
        cc['internal'].eventManager['__$CCEventMgrHack$__'] = true;
        var eventManager_1 = cc['internal'].eventManager;
        cc['internal'].eventManager._onTouchEventCallback = function (listener, argsObj) {
            // Skip if the listener was removed.
            if (!listener._isRegistered())
                return false;
            var event = argsObj.event, selTouch = event.currentTouch;
            event.currentTarget = listener._node;
            var isClaimed = false, removedIdx;
            var getCode = event.getEventCode(), EventTouch = cc.Event.EventTouch;
            if (getCode === EventTouch.BEGAN) {
                if (!cc.macro.ENABLE_MULTI_TOUCH && eventManager_1._currentTouch) {
                    var node = eventManager_1._currentTouchListener._node;
                    if (node && node.activeInHierarchy && event.touch.getID() != eventManager_1._currentTouch._id) {
                        return false;
                    }
                }
                if (listener.onTouchBegan) {
                    isClaimed = listener.onTouchBegan(selTouch, event);
                    if (isClaimed && listener._registered) {
                        listener._claimedTouches.push(selTouch);
                        eventManager_1._currentTouchListener = listener;
                        eventManager_1._currentTouch = selTouch;
                    }
                }
            }
            else if (listener._claimedTouches.length > 0
                && ((removedIdx = listener._claimedTouches.indexOf(selTouch)) !== -1)) {
                isClaimed = true;
                if (!cc.macro.ENABLE_MULTI_TOUCH && eventManager_1._currentTouch && eventManager_1._currentTouch !== selTouch) {
                    return false;
                }
                if (getCode === EventTouch.MOVED && listener.onTouchMoved) {
                    listener.onTouchMoved(selTouch, event);
                }
                else if (getCode === EventTouch.ENDED) {
                    if (listener.onTouchEnded)
                        listener.onTouchEnded(selTouch, event);
                    if (listener._registered)
                        listener._claimedTouches.splice(removedIdx, 1);
                    eventManager_1._clearCurTouch();
                }
                else if (getCode === EventTouch.CANCELED) {
                    if (listener.onTouchCancelled)
                        listener.onTouchCancelled(selTouch, event);
                    if (listener._registered)
                        listener._claimedTouches.splice(removedIdx, 1);
                    eventManager_1._clearCurTouch();
                }
            }
            // If the event was stopped, return directly.
            if (event.isStopped()) {
                eventManager_1._updateTouchListeners(event);
                return true;
            }
            if (isClaimed && listener.swallowTouches) {
                if (argsObj.needsMutableSet)
                    argsObj.touches.splice(selTouch, 1);
                return true;
            }
            return false;
        };
    }
}

cc._RF.pop();