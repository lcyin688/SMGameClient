"use strict";
cc._RF.push(module, '6dd51Dj6WhL8JsXYexbsjCW', 'CmmPromptDlg');
// c2f-framework/gui/view/CmmPromptDlg.ts

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
exports.CmmPromptDlg = void 0;
var LanguageLabel_1 = require("../../component/language/LanguageLabel");
/** 公共提示窗口 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CmmPromptDlg = /** @class */ (function (_super) {
    __extends(CmmPromptDlg, _super);
    function CmmPromptDlg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 窗口标题多语言组件 */
        _this.lab_title = null;
        /** 提示内容多语言组件 */
        _this.lab_content = null;
        /** 确认按钮文本多语言组件 */
        _this.lab_ok = null;
        /** 取消按钮文本多语言组件 */
        _this.lab_cancel = null;
        _this.config = {};
        return _this;
    }
    CmmPromptDlg.prototype.onTouchEnd = function (event, data) {
        switch (event.target.name) {
            case "btn_ok":
                this.onOk();
                break;
            case "btn_cancel":
                this.onCancel();
                break;
            default:
                break;
        }
    };
    /**
     *
     *
     * @param params 参数
     * {
     *     title:      标题
     *     content:    内容
     *     okWord:     ok按钮上的文字
     *     okFunc:     确认时执行的方法
     *     cancelWord: 取消按钮的文字
     *     cancelFunc: 取消时执行的方法
     *     needCancel: 是否需要取消按钮
     * }
     */
    CmmPromptDlg.prototype.onUIAdded = function (params) {
        if (params === void 0) { params = {}; }
        this.config = params || {};
        this.setTitle();
        this.setContent();
        this.setBtnOkLabel();
        this.setBtnCancelLabel();
        this.node.active = true;
    };
    CmmPromptDlg.prototype.setTitle = function () {
        this.lab_title.dataID = this.config.title;
    };
    CmmPromptDlg.prototype.setContent = function () {
        this.lab_content.dataID = this.config.content;
    };
    CmmPromptDlg.prototype.setBtnOkLabel = function () {
        this.lab_ok.dataID = this.config.okWord;
    };
    CmmPromptDlg.prototype.setBtnCancelLabel = function () {
        this.lab_cancel.dataID = this.config.cancelWord;
        this.lab_cancel.node.parent.active = this.config.needCancel || false;
    };
    CmmPromptDlg.prototype.onOk = function () {
        if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.onClose = function () {
        if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.onCancel = function () {
        if (typeof this.config.cancelFunc == "function") {
            this.config.cancelFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.close = function () {
        c2f.gui.removeByNode(this.node);
    };
    CmmPromptDlg.prototype.onDestroy = function () {
        this.config = null;
    };
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_title", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_content", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_ok", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_cancel", void 0);
    CmmPromptDlg = __decorate([
        ccclass
    ], CmmPromptDlg);
    return CmmPromptDlg;
}(cc.Component));
exports.CmmPromptDlg = CmmPromptDlg;

cc._RF.pop();