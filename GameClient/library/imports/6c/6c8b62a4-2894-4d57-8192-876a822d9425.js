"use strict";
cc._RF.push(module, '6c8b6KkKJRNV4GSh2qCLZQl', 'LayerTouchEfx');
// c2f-framework/gui/layer/LayerTouchEfx.ts

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
exports.LayerTouchEfx = void 0;
var C2FUIDef_1 = require("../../define/C2FUIDef");
var DelegateComponent_1 = require("./DelegateComponent");
var LayerUI_1 = require("./LayerUI");
var C2FConst_1 = require("../../define/C2FConst");
var PrefabPath;
(function (PrefabPath) {
    PrefabPath["touchEfx"] = "commonRes/prefab/TouchEffect";
})(PrefabPath || (PrefabPath = {}));
/*
 * 点击特效层
 */
var LayerTouchEfx = /** @class */ (function (_super) {
    __extends(LayerTouchEfx, _super);
    function LayerTouchEfx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 添加点击特效
     */
    LayerTouchEfx.prototype.addClickEfx = function () {
        var viewParams = new C2FUIDef_1.ViewParams();
        var uuid = this.getUuid(PrefabPath.touchEfx);
        viewParams.uuid = uuid;
        viewParams.prefabPath = PrefabPath.touchEfx;
        viewParams.params = {};
        viewParams.callbacks = {};
        viewParams.valid = true;
        if (!this.ui_nodes.has(uuid)) {
            this.ui_nodes.set(uuid, viewParams);
            this.load(viewParams);
        }
    };
    // 获取预制件资源
    LayerTouchEfx.prototype.load = function (viewParams) {
        var _this = this;
        c2f.res.load(C2FConst_1.C2FConst.fwBundleName, viewParams.prefabPath, function (err, res) {
            if (err) {
                cc.error(err);
            }
            var childNode = c2f.res.instantiate(res);
            viewParams.node = childNode;
            var comp = childNode.addComponent(DelegateComponent_1.DelegateComponent);
            comp.viewParams = viewParams;
            _super.prototype.createNode.call(_this, viewParams);
        });
    };
    return LayerTouchEfx;
}(LayerUI_1.LayerUI));
exports.LayerTouchEfx = LayerTouchEfx;

cc._RF.pop();