"use strict";
cc._RF.push(module, '5d2b0oE1BhFELxAFehJDwS9', 'CtrlPopDlgPanel');
// entrance/script/controls/CtrlPopDlgPanel.ts

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
var LinkPrefab_1 = require("../../../c2f-framework/component/common/LinkPrefab");
var C2FEnum_1 = require("../../../c2f-framework/define/C2FEnum");
var PopDlgPanel_1 = require("./entity/PopDlgPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CtrlPopDlgPanel = /** @class */ (function (_super) {
    __extends(CtrlPopDlgPanel, _super);
    function CtrlPopDlgPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._titleID = 0;
        _this._separator = true;
        _this._separatorBottom = 0;
        _this.closeHandler = [];
        return _this;
    }
    Object.defineProperty(CtrlPopDlgPanel.prototype, "titleID", {
        get: function () {
            return this._titleID;
        },
        set: function (value) {
            if (this._titleID != value) {
                this._titleID = value;
            }
            if (this._titleID > 0) {
                this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).setTiTle(c2f.language.words(this.titleID));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CtrlPopDlgPanel.prototype, "separator", {
        get: function () {
            return this._separator;
        },
        set: function (value) {
            this._separator = value;
            this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).separatorVisible(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CtrlPopDlgPanel.prototype, "separatorBottom", {
        get: function () {
            if (this._separatorBottom == 0) {
                this._separatorBottom = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).getSeparatorWidgetBottom();
            }
            return this._separatorBottom;
        },
        set: function (value) {
            this._separatorBottom = value;
            this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).separatorWidgetBottom(value);
        },
        enumerable: false,
        configurable: true
    });
    CtrlPopDlgPanel.prototype.onLoad = function () {
        var panel = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
        panel.separatorVisible(this.separator);
        if (this.closeHandler.length > 0) {
            panel.setBtnHandler(this.closeHandler);
        }
        panel.separatorWidgetBottom(this.separatorBottom);
        cc.director.on(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    CtrlPopDlgPanel.prototype.onDestroy = function () {
        cc.director.off(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    CtrlPopDlgPanel.prototype.onDataIDChanged = function () {
        var panel = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
    };
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_titleID", void 0);
    __decorate([
        property({ tooltip: "弹窗标题ID" })
    ], CtrlPopDlgPanel.prototype, "titleID", null);
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_separator", void 0);
    __decorate([
        property({ tooltip: "是否显示按钮分割线" })
    ], CtrlPopDlgPanel.prototype, "separator", null);
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_separatorBottom", void 0);
    __decorate([
        property({ visible: function () { return this.separator; }, tooltip: "按钮分割线离底部距离" })
    ], CtrlPopDlgPanel.prototype, "separatorBottom", null);
    __decorate([
        property({ type: cc.Component.EventHandler, tooltip: "关闭按钮事件" })
    ], CtrlPopDlgPanel.prototype, "closeHandler", void 0);
    CtrlPopDlgPanel = __decorate([
        ccclass,
        executeInEditMode
    ], CtrlPopDlgPanel);
    return CtrlPopDlgPanel;
}(cc.Component));
exports.default = CtrlPopDlgPanel;

cc._RF.pop();