"use strict";
cc._RF.push(module, '55ba3UvprJA4bxrJe8qyYeB', 'PopDlgPanel');
// entrance/script/controls/entity/PopDlgPanel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopDlgPanel = /** @class */ (function (_super) {
    __extends(PopDlgPanel, _super);
    function PopDlgPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.btnClose = null;
        _this.separatorLine = null;
        return _this;
    }
    PopDlgPanel.prototype.setTiTle = function (title) {
        this.title.string = title;
    };
    PopDlgPanel.prototype.setBtnHandler = function (handle) {
        this.btnClose.node.active = handle.length > 0 ? true : false;
        this.btnClose.clickEvents = handle;
    };
    PopDlgPanel.prototype.separatorVisible = function (v) {
        if (this.separatorLine) {
            this.separatorLine.active = v;
        }
    };
    PopDlgPanel.prototype.separatorWidgetBottom = function (v) {
        if (!this.separatorLine) {
            return;
        }
        var comp = this.separatorLine.getComponent(cc.Widget);
        if (comp) {
            comp.bottom = v;
        }
        if (!CC_EDITOR) {
            comp.updateAlignment();
        }
    };
    PopDlgPanel.prototype.getSeparatorWidgetBottom = function () {
        var bottom = 0;
        if (this.separatorLine) {
            var comp = this.separatorLine.getComponent(cc.Widget);
            bottom = comp.bottom;
        }
        return bottom;
    };
    /** 快捷设置关闭事件 */
    PopDlgPanel.prototype.quickSetCloseHnadler = function (ower, handlerName) {
        if (handlerName === void 0) { handlerName = 'closeView'; }
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.setBtnHandler([handler]);
    };
    __decorate([
        property(cc.Label)
    ], PopDlgPanel.prototype, "title", void 0);
    __decorate([
        property(cc.Button)
    ], PopDlgPanel.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopDlgPanel.prototype, "separatorLine", void 0);
    PopDlgPanel = __decorate([
        ccclass
    ], PopDlgPanel);
    return PopDlgPanel;
}(cc.Component));
exports.default = PopDlgPanel;

cc._RF.pop();