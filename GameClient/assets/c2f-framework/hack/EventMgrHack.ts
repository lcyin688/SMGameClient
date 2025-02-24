
//@ts-nocheck

if (!CC_EDITOR) {
    if (cc['internal'].eventManager && !cc['internal'].eventManager['__$CCEventMgrHack$__']) {
        cc['internal'].eventManager['__$CCEventMgrHack$__'] = true;

        let eventManager = cc['internal'].eventManager;
        cc['internal'].eventManager._onTouchEventCallback = function (listener, argsObj) {
            // Skip if the listener was removed.
            if (!listener._isRegistered())
                return false;

            var event = argsObj.event, selTouch = event.currentTouch;
            event.currentTarget = listener._node;

            var isClaimed = false, removedIdx;
            var getCode = event.getEventCode(), EventTouch = cc.Event.EventTouch;
            if (getCode === EventTouch.BEGAN) {
                if (!cc.macro.ENABLE_MULTI_TOUCH && eventManager._currentTouch) {
                    let node = eventManager._currentTouchListener._node;
                    if (node && node.activeInHierarchy && event.touch.getID() != eventManager._currentTouch._id) {
                        return false;
                    }
                }
                if (listener.onTouchBegan) {
                    isClaimed = listener.onTouchBegan(selTouch, event);
                    if (isClaimed && listener._registered) {
                        listener._claimedTouches.push(selTouch);
                        eventManager._currentTouchListener = listener;
                        eventManager._currentTouch = selTouch;
                    }
                }
            } else if (listener._claimedTouches.length > 0
                && ((removedIdx = listener._claimedTouches.indexOf(selTouch)) !== -1)) {
                isClaimed = true;

                if (!cc.macro.ENABLE_MULTI_TOUCH && eventManager._currentTouch && eventManager._currentTouch !== selTouch) {
                    return false;
                }

                if (getCode === EventTouch.MOVED && listener.onTouchMoved) {
                    listener.onTouchMoved(selTouch, event);
                } else if (getCode === EventTouch.ENDED) {
                    if (listener.onTouchEnded)
                        listener.onTouchEnded(selTouch, event);
                    if (listener._registered)
                        listener._claimedTouches.splice(removedIdx, 1);
                    eventManager._clearCurTouch();
                } else if (getCode === EventTouch.CANCELED) {
                    if (listener.onTouchCancelled)
                        listener.onTouchCancelled(selTouch, event);
                    if (listener._registered)
                        listener._claimedTouches.splice(removedIdx, 1);
                    eventManager._clearCurTouch();
                }
            }

            // If the event was stopped, return directly.
            if (event.isStopped()) {
                eventManager._updateTouchListeners(event);
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


export { };