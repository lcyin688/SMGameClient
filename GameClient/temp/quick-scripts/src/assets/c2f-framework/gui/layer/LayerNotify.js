"use strict";
cc._RF.push(module, '5e20egSlYxDypVeDclJOuBC', 'LayerNotify');
// c2f-framework/gui/layer/LayerNotify.ts

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
exports.LayerNotify = void 0;
var Notify_1 = require("../view/Notify");
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var LayerUI_1 = require("./LayerUI");
var C2FConst_1 = require("../../define/C2FConst");
var PrefabPath;
(function (PrefabPath) {
    PrefabPath["notify"] = "commonRes/prefab/Notify";
    PrefabPath["loading"] = "commonRes/prefab/LoadingTips";
})(PrefabPath || (PrefabPath = {}));
/*
 * 消息提示层
 */
var LayerNotify = /** @class */ (function (_super) {
    __extends(LayerNotify, _super);
    function LayerNotify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingCnt = 0;
        return _this;
    }
    /**
     * 显示toast
     * @param content 文本表示
     * @param useI18n 是否使用多语言
     */
    LayerNotify.prototype.notifyTxt = function (content, useI18n) {
        var viewParams = new C2FUIDef_1.ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.notify);
        viewParams.prefabPath = PrefabPath.notify;
        viewParams.params = { content: content, useI18n: useI18n };
        viewParams.callbacks = {};
        viewParams.valid = true;
        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    };
    /**
     * 显示loading界面
     * @param tips
     */
    LayerNotify.prototype.showLoading = function (tips) {
        this.loadingCnt++;
        var dstView = this.get(PrefabPath.loading);
        if (dstView.length > 0) {
            return;
        }
        var viewParams = new C2FUIDef_1.ViewParams();
        viewParams.uuid = this.getUuid(PrefabPath.loading);
        viewParams.prefabPath = PrefabPath.loading;
        viewParams.params = { content: tips };
        viewParams.callbacks = {};
        viewParams.valid = true;
        this.ui_nodes.set(viewParams.uuid, viewParams);
        this.loadSpecial(viewParams);
    };
    /**
     * 隐藏loading界面
     */
    LayerNotify.prototype.hideLoading = function (clean) {
        this.loadingCnt--;
        if (this.loadingCnt <= 0 || clean) {
            this.loadingCnt = 0;
            var dstView = this.get(PrefabPath.loading);
            if (dstView) {
                this.remove(PrefabPath.loading, false);
            }
        }
    };
    // 获取预制件资源
    LayerNotify.prototype.loadSpecial = function (viewParams) {
        var _this = this;
        c2f.res.load(C2FConst_1.C2FConst.fwBundleName, viewParams.prefabPath, function (err, res) {
            if (err) {
                cc.error(err);
            }
            if (viewParams.prefabPath != PrefabPath.loading || _this.loadingCnt > 0) {
                var childNode = c2f.res.instantiate(res);
                viewParams.node = childNode;
                var comp = childNode.addComponent(DelegateComponent_1.DelegateComponent);
                comp.viewParams = viewParams;
                _this.createSpecial(viewParams);
            }
        });
    };
    LayerNotify.prototype.createSpecial = function (viewParams) {
        var childNode = _super.prototype.createNode.call(this, viewParams);
        switch (viewParams.prefabPath) {
            case PrefabPath.notify:
                var notifyCom = childNode.getComponent(Notify_1.Notify);
                if (notifyCom) {
                    childNode.active = true;
                    notifyCom.toast(viewParams.params.content, viewParams.params.useI18n);
                }
                break;
            case PrefabPath.loading:
                break;
        }
        return childNode;
    };
    return LayerNotify;
}(LayerUI_1.LayerUI));
exports.LayerNotify = LayerNotify;

cc._RF.pop();