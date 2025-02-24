"use strict";
cc._RF.push(module, '4fe44B0sbpJrYP0YPEfyOeW', 'DelegateComponent');
// c2f-framework/gui/layer/DelegateComponent.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegateComponent = void 0;
var C2FEnum_1 = require("../../define/C2FEnum");
var ccclass = cc._decorator.ccclass;
/** 窗口事件触发组件 */
var DelegateComponent = /** @class */ (function (_super) {
    __extends(DelegateComponent, _super);
    function DelegateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 视图参数 */
        _this.viewParams = null;
        return _this;
    }
    /** 窗口添加 */
    DelegateComponent.prototype.add = function () {
        // 触发窗口组件上添加到父节点后的事件
        this.parallelApplyComponentsFunction(this.node, "onViewOpen", this.viewParams.params);
        this.parallelApplyComponentsFunction(this.node, "playInAnima", this.viewParams.params);
        if (typeof this.viewParams.callbacks.onUIAdded === "function") {
            this.viewParams.callbacks.onUIAdded(this.node, this.viewParams.params);
        }
        c2f.event.emit(C2FEnum_1.C2FEnum.Event.PopViewAdded, this.node.name);
    };
    /** 删除节点，该方法只能调用一次，将会触发onUIBeforeRemove回调 */
    DelegateComponent.prototype.remove = function (isDestroy) {
        var _this = this;
        if (this.viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.parallelApplyComponentsFunction(this.node, "beforeViewClose", this.viewParams.params);
            this.serialApplyComponentsFunction(this.node, "playOutAnima", this.viewParams.params, function () {
                //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）
                if (typeof _this.viewParams.callbacks.onUIBeforeRemove === "function") {
                    _this.viewParams.callbacks.onUIBeforeRemove(_this.node, function () {
                        _this.removed(_this.viewParams, isDestroy);
                    });
                }
                else {
                    _this.removed(_this.viewParams, isDestroy);
                }
            });
        }
    };
    /** 窗口组件中触发移除事件与释放窗口对象 */
    DelegateComponent.prototype.removed = function (viewParams, isDestroy) {
        viewParams.valid = false;
        if (typeof viewParams.callbacks.onUIRemoved === "function") {
            viewParams.callbacks.onUIRemoved(this.node, viewParams.params);
        }
        if (isDestroy) {
            this.node.destroy();
            //TODO:包名
            c2f.res.release(viewParams.prefabPath, cc.Prefab, viewParams.bundle);
        }
        else {
            this.node.removeFromParent();
        }
        c2f.event.emit(C2FEnum_1.C2FEnum.Event.PopViewRemoved, this.node.name);
    };
    DelegateComponent.prototype.onDestroy = function () {
        // 触发窗口组件上窗口移除之后的事件
        this.parallelApplyComponentsFunction(this.node, "onUIDestroy", this.viewParams.params);
        // 通知外部对象窗口移除之后的事件
        if (typeof this.viewParams.callbacks.onUIDestroy === "function") {
            this.viewParams.callbacks.onUIDestroy(this.node, this.viewParams.params);
        }
        this.viewParams = null;
    };
    //并行执行
    DelegateComponent.prototype.parallelApplyComponentsFunction = function (node, funName, params) {
        var allComps = node['_components'];
        for (var i = 0; i < allComps.length; i++) {
            var component = allComps[i];
            var func = component[funName];
            if (func) {
                func.call(component, params);
            }
        }
    };
    //依次执行
    DelegateComponent.prototype.serialApplyComponentsFunction = function (node, funName, params, endCb) {
        var idx = 0;
        var applyOnce = function () {
            var allComps = node['_components'];
            if (idx >= allComps.length) {
                endCb && endCb();
            }
            else {
                var component = allComps[idx];
                var func = component[funName];
                if (func) {
                    func.call(component, params, function () {
                        idx++;
                        applyOnce();
                    });
                }
                else {
                    idx++;
                    applyOnce();
                }
            }
        };
        applyOnce();
    };
    DelegateComponent = __decorate([
        ccclass
    ], DelegateComponent);
    return DelegateComponent;
}(cc.Component));
exports.DelegateComponent = DelegateComponent;

cc._RF.pop();