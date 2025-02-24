
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/EventMgrHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svRXZlbnRNZ3JIYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhOztBQUViLElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDWixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7UUFDckYsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUUzRCxJQUFJLGNBQVksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEdBQUcsVUFBVSxRQUFRLEVBQUUsT0FBTztZQUMzRSxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pCLE9BQU8sS0FBSyxDQUFDO1lBRWpCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDekQsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJDLElBQUksU0FBUyxHQUFHLEtBQUssRUFBRSxVQUFVLENBQUM7WUFDbEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNyRSxJQUFJLE9BQU8sS0FBSyxVQUFVLENBQUMsS0FBSyxFQUFFO2dCQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxjQUFZLENBQUMsYUFBYSxFQUFFO29CQUM1RCxJQUFJLElBQUksR0FBRyxjQUFZLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO29CQUNwRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxjQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTt3QkFDekYsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO2lCQUNKO2dCQUNELElBQUksUUFBUSxDQUFDLFlBQVksRUFBRTtvQkFDdkIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNuRCxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO3dCQUNuQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEMsY0FBWSxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQzt3QkFDOUMsY0FBWSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7cUJBQ3pDO2lCQUNKO2FBQ0o7aUJBQU0sSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDO21CQUN2QyxDQUFDLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkUsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFFakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLElBQUksY0FBWSxDQUFDLGFBQWEsSUFBSSxjQUFZLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtvQkFDdkcsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUVELElBQUksT0FBTyxLQUFLLFVBQVUsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRTtvQkFDdkQsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQ3JDLElBQUksUUFBUSxDQUFDLFlBQVk7d0JBQ3JCLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMzQyxJQUFJLFFBQVEsQ0FBQyxXQUFXO3dCQUNwQixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGNBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxPQUFPLEtBQUssVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsSUFBSSxRQUFRLENBQUMsZ0JBQWdCO3dCQUN6QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMvQyxJQUFJLFFBQVEsQ0FBQyxXQUFXO3dCQUNwQixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGNBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDakM7YUFDSjtZQUVELDZDQUE2QztZQUM3QyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDbkIsY0FBWSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFDdEMsSUFBSSxPQUFPLENBQUMsZUFBZTtvQkFDdkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO0tBRUw7Q0FDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy9AdHMtbm9jaGVja1xuXG5pZiAoIUNDX0VESVRPUikge1xuICAgIGlmIChjY1snaW50ZXJuYWwnXS5ldmVudE1hbmFnZXIgJiYgIWNjWydpbnRlcm5hbCddLmV2ZW50TWFuYWdlclsnX18kQ0NFdmVudE1nckhhY2skX18nXSkge1xuICAgICAgICBjY1snaW50ZXJuYWwnXS5ldmVudE1hbmFnZXJbJ19fJENDRXZlbnRNZ3JIYWNrJF9fJ10gPSB0cnVlO1xuXG4gICAgICAgIGxldCBldmVudE1hbmFnZXIgPSBjY1snaW50ZXJuYWwnXS5ldmVudE1hbmFnZXI7XG4gICAgICAgIGNjWydpbnRlcm5hbCddLmV2ZW50TWFuYWdlci5fb25Ub3VjaEV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGFyZ3NPYmopIHtcbiAgICAgICAgICAgIC8vIFNraXAgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5faXNSZWdpc3RlcmVkKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBhcmdzT2JqLmV2ZW50LCBzZWxUb3VjaCA9IGV2ZW50LmN1cnJlbnRUb3VjaDtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBsaXN0ZW5lci5fbm9kZTtcblxuICAgICAgICAgICAgdmFyIGlzQ2xhaW1lZCA9IGZhbHNlLCByZW1vdmVkSWR4O1xuICAgICAgICAgICAgdmFyIGdldENvZGUgPSBldmVudC5nZXRFdmVudENvZGUoKSwgRXZlbnRUb3VjaCA9IGNjLkV2ZW50LkV2ZW50VG91Y2g7XG4gICAgICAgICAgICBpZiAoZ2V0Q29kZSA9PT0gRXZlbnRUb3VjaC5CRUdBTikge1xuICAgICAgICAgICAgICAgIGlmICghY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIICYmIGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gZXZlbnRNYW5hZ2VyLl9jdXJyZW50VG91Y2hMaXN0ZW5lci5fbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5hY3RpdmVJbkhpZXJhcmNoeSAmJiBldmVudC50b3VjaC5nZXRJRCgpICE9IGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoLl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vblRvdWNoQmVnYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDbGFpbWVkID0gbGlzdGVuZXIub25Ub3VjaEJlZ2FuKHNlbFRvdWNoLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NsYWltZWQgJiYgbGlzdGVuZXIuX3JlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLl9jbGFpbWVkVG91Y2hlcy5wdXNoKHNlbFRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoID0gc2VsVG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyLl9jbGFpbWVkVG91Y2hlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgJiYgKChyZW1vdmVkSWR4ID0gbGlzdGVuZXIuX2NsYWltZWRUb3VjaGVzLmluZGV4T2Yoc2VsVG91Y2gpKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaXNDbGFpbWVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIICYmIGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoICYmIGV2ZW50TWFuYWdlci5fY3VycmVudFRvdWNoICE9PSBzZWxUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGdldENvZGUgPT09IEV2ZW50VG91Y2guTU9WRUQgJiYgbGlzdGVuZXIub25Ub3VjaE1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLm9uVG91Y2hNb3ZlZChzZWxUb3VjaCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0Q29kZSA9PT0gRXZlbnRUb3VjaC5FTkRFRCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIub25Ub3VjaEVuZGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIub25Ub3VjaEVuZGVkKHNlbFRvdWNoLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5fcmVnaXN0ZXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLl9jbGFpbWVkVG91Y2hlcy5zcGxpY2UocmVtb3ZlZElkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5fY2xlYXJDdXJUb3VjaCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0Q29kZSA9PT0gRXZlbnRUb3VjaC5DQU5DRUxFRCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIub25Ub3VjaENhbmNlbGxlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLm9uVG91Y2hDYW5jZWxsZWQoc2VsVG91Y2gsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLl9yZWdpc3RlcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuX2NsYWltZWRUb3VjaGVzLnNwbGljZShyZW1vdmVkSWR4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRNYW5hZ2VyLl9jbGVhckN1clRvdWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHN0b3BwZWQsIHJldHVybiBkaXJlY3RseS5cbiAgICAgICAgICAgIGlmIChldmVudC5pc1N0b3BwZWQoKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlci5fdXBkYXRlVG91Y2hMaXN0ZW5lcnMoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDbGFpbWVkICYmIGxpc3RlbmVyLnN3YWxsb3dUb3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NPYmoubmVlZHNNdXRhYmxlU2V0KVxuICAgICAgICAgICAgICAgICAgICBhcmdzT2JqLnRvdWNoZXMuc3BsaWNlKHNlbFRvdWNoLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuXG5leHBvcnQgeyB9OyJdfQ==