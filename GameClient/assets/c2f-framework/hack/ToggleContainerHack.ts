if (!CC_EDITOR) {
    if (!cc.ToggleContainer.prototype["__$CCToggleContainerHack$__"]) {
        cc.ToggleContainer.prototype["__$CCToggleContainerHack$__"] = true;

        /** 仅刷新其内部toggleUI状态·不激发事件 */
        cc.ToggleContainer.prototype.updateTogglesUIStateOnly = function (selectName: string) {
            if (!this.enabledInHierarchy) return;
            if (!selectName || selectName.length <= 0) return;

            this.toggleItems.forEach(function (item) {
                if (item.node.name != selectName && item.isChecked && item.enabled) {
                    item._hideCheckMark();
                }
            });
        };

    }
}

declare module cc {
    interface ToggleContainer {
        updateTogglesUIStateOnly: (selectName: string) => void;
    }
}

export { };