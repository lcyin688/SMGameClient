"use strict";
cc._RF.push(module, '38fb8yZ9OtBtoQzOLoU89mm', 'LayerDialog');
// c2f-framework/gui/layer/LayerDialog.ts

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
exports.LayerDialog = void 0;
var C2FUIDef_1 = require("../../define/C2FUIDef");
var LayerPopup_1 = require("./LayerPopup");
/*
 * 模式弹窗层，该层的窗口同时只能显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
 */
var LayerDialog = /** @class */ (function (_super) {
    __extends(LayerDialog, _super);
    function LayerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 窗口数据队列 */
        _this.queue = [];
        /** 窗口参数队列 - 预防同一资源的窗口参数覆盖 */
        _this.queue_params = [];
        return _this;
    }
    LayerDialog.prototype.add = function (config, params, callbacks) {
        var _this = this;
        this.black.enabled = true;
        var prefabPath = config.prefab;
        var uuid = this.getUuid(prefabPath);
        var viewParams = this.ui_nodes.get(uuid);
        if (viewParams == null) {
            viewParams = new C2FUIDef_1.ViewParams();
            viewParams.uuid = this.getUuid(prefabPath);
            viewParams.prefabPath = prefabPath;
            viewParams.callbacks = callbacks || {};
            var onRemove_Source_1 = viewParams.callbacks.onUIRemoved;
            viewParams.callbacks.onUIRemoved = function (node, params) {
                if (onRemove_Source_1) {
                    onRemove_Source_1(node, params);
                }
                setTimeout(function () {
                    _this.next();
                }, 0);
            };
            viewParams.valid = true;
            this.ui_nodes.set(viewParams.uuid, viewParams);
        }
        if (this.current && this.current.valid) {
            if (this.current.prefabPath != prefabPath) {
                this.queue.push(viewParams);
                this.queue_params.push(params || {});
            }
        }
        else {
            viewParams.params = params || {};
            this.current = viewParams;
            this.load(viewParams, config.bundle);
        }
        return uuid;
    };
    LayerDialog.prototype.setBlackDisable = function () {
        if (this.queue.length == 0)
            this.black.enabled = false;
    };
    LayerDialog.prototype.next = function () {
        if (this.queue.length > 0) {
            this.current = this.queue.shift();
            this.current.params = this.queue_params.shift();
            if (this.current.node) {
                this.createNode(this.current);
            }
            else {
                this.load(this.current);
            }
        }
    };
    return LayerDialog;
}(LayerPopup_1.LayerPopUp));
exports.LayerDialog = LayerDialog;

cc._RF.pop();