"use strict";
cc._RF.push(module, '3c8b8GCHdRHtoiZjkx89qdq', 'C2FUIDef');
// c2f-framework/define/C2FUIDef.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerType = exports.ViewParams = void 0;
/** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
var ViewParams = /** @class */ (function () {
    function ViewParams() {
        this.uuid = null;
        this.prefabPath = null;
        this.params = null;
        this.callbacks = null;
        this.valid = true;
        this.node = null;
        this.bundle = null;
        this.uiCfg = null;
    }
    return ViewParams;
}());
exports.ViewParams = ViewParams;
/** 界面层类型 */
var LayerType;
(function (LayerType) {
    /** 游戏层 */
    LayerType["Game"] = "LayerGame";
    /** 全屏类弹出界面 */
    LayerType["UI"] = "LayerUI";
    /** 窗口类弹出界面 */
    LayerType["PopUp"] = "LayerPopUp";
    /** 模式窗口层 */
    LayerType["Dialog"] = "LayerDialog";
    /** 系统触发模式窗口层 eg.断网提示等 */
    LayerType["System"] = "LayerSystem";
    /** 滚动消息提示层 eg.走马灯,冒泡提示*/
    LayerType["Notify"] = "LayerNotify";
    /** 新手引导层 */
    LayerType["Guide"] = "LayerGuide";
})(LayerType = exports.LayerType || (exports.LayerType = {}));

cc._RF.pop();