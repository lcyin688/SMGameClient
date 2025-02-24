"use strict";
cc._RF.push(module, '3baab9H85lCfp7tVcQQZzQu', 'LayerPopup');
// c2f-framework/gui/layer/LayerPopup.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerPopUp = void 0;
var LayerUI_1 = require("./LayerUI");
/*
 * 弹窗层，允许同时弹出多个窗口，弹框参数可以查看 PopViewParams
 */
var LayerPopUp = /** @class */ (function (_super) {
    __extends(LayerPopUp, _super);
    function LayerPopUp(name) {
        var _this = _super.call(this, name) || this;
        _this.init();
        return _this;
    }
    LayerPopUp.prototype.init = function () {
        this.black = this.addComponent(cc.BlockInputEvents);
        this.black.enabled = false;
    };
    /**
     * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     传给组件onUIAdded、onUIRemoved方法的参数。
     * @param popParams  弹出界面的设置定义，详情见PopViewParams
     */
    LayerPopUp.prototype.add = function (config, params, popParams) {
        this.black.enabled = true;
        return _super.prototype.add.call(this, config, params, popParams);
    };
    LayerPopUp.prototype.remove = function (prefabPath, isDestroy) {
        _super.prototype.remove.call(this, prefabPath, isDestroy);
        this.setBlackDisable();
    };
    LayerPopUp.prototype.removeByUuid = function (prefabPath, isDestroy) {
        _super.prototype.removeByUuid.call(this, prefabPath, isDestroy);
        this.setBlackDisable();
    };
    LayerPopUp.prototype.setBlackDisable = function () {
        this.black.enabled = false;
    };
    LayerPopUp.prototype.clearUI = function (isDestroy, excludePrefab) {
        if (excludePrefab === void 0) { excludePrefab = []; }
        _super.prototype.clearUI.call(this, isDestroy, excludePrefab);
        this.black.enabled = false;
    };
    return LayerPopUp;
}(LayerUI_1.LayerUI));
exports.LayerPopUp = LayerPopUp;

cc._RF.pop();