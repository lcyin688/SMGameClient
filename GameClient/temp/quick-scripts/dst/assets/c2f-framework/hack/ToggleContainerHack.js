
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/ToggleContainerHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94cccrVitNC2IRgB7aI/kgC', 'ToggleContainerHack');
// c2f-framework/hack/ToggleContainerHack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!CC_EDITOR) {
    if (!cc.ToggleContainer.prototype["__$CCToggleContainerHack$__"]) {
        cc.ToggleContainer.prototype["__$CCToggleContainerHack$__"] = true;
        /** 仅刷新其内部toggleUI状态·不激发事件 */
        cc.ToggleContainer.prototype.updateTogglesUIStateOnly = function (selectName) {
            if (!this.enabledInHierarchy)
                return;
            if (!selectName || selectName.length <= 0)
                return;
            this.toggleItems.forEach(function (item) {
                if (item.node.name != selectName && item.isChecked && item.enabled) {
                    item._hideCheckMark();
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svVG9nZ2xlQ29udGFpbmVySGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsRUFBRTtRQUM5RCxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVuRSw2QkFBNkI7UUFDN0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxVQUFrQjtZQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtnQkFBRSxPQUFPO1lBQ3JDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFFbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztLQUVMO0NBQ0oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIUNDX0VESVRPUikge1xuICAgIGlmICghY2MuVG9nZ2xlQ29udGFpbmVyLnByb3RvdHlwZVtcIl9fJENDVG9nZ2xlQ29udGFpbmVySGFjayRfX1wiXSkge1xuICAgICAgICBjYy5Ub2dnbGVDb250YWluZXIucHJvdG90eXBlW1wiX18kQ0NUb2dnbGVDb250YWluZXJIYWNrJF9fXCJdID0gdHJ1ZTtcblxuICAgICAgICAvKiog5LuF5Yi35paw5YW25YaF6YOodG9nZ2xlVUnnirbmgIHCt+S4jea/gOWPkeS6i+S7tiAqL1xuICAgICAgICBjYy5Ub2dnbGVDb250YWluZXIucHJvdG90eXBlLnVwZGF0ZVRvZ2dsZXNVSVN0YXRlT25seSA9IGZ1bmN0aW9uIChzZWxlY3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcbiAgICAgICAgICAgIGlmICghc2VsZWN0TmFtZSB8fCBzZWxlY3ROYW1lLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5vZGUubmFtZSAhPSBzZWxlY3ROYW1lICYmIGl0ZW0uaXNDaGVja2VkICYmIGl0ZW0uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLl9oaWRlQ2hlY2tNYXJrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cbmRlY2xhcmUgbW9kdWxlIGNjIHtcbiAgICBpbnRlcmZhY2UgVG9nZ2xlQ29udGFpbmVyIHtcbiAgICAgICAgdXBkYXRlVG9nZ2xlc1VJU3RhdGVPbmx5OiAoc2VsZWN0TmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgfTsiXX0=