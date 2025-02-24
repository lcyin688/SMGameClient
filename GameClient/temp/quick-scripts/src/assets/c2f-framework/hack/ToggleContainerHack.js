"use strict";
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