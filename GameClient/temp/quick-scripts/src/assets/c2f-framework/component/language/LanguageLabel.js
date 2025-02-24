"use strict";
cc._RF.push(module, 'e5ba4B23rFGorAi6j3RHDOK', 'LanguageLabel');
// c2f-framework/component/language/LanguageLabel.ts

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
var LanguageData_1 = require("../../core/language/LanguageData");
var C2FEnum_1 = require("../../define/C2FEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var LanguageLabel = /** @class */ (function (_super) {
    __extends(LanguageLabel, _super);
    function LanguageLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dataID = "";
        _this._formatV = "";
        return _this;
    }
    Object.defineProperty(LanguageLabel.prototype, "dataID", {
        get: function () {
            return this._dataID || "";
        },
        set: function (value) {
            this._dataID = value;
            this.onDataIDChanged();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageLabel.prototype, "formatV", {
        get: function () {
            return this._formatV || "";
        },
        set: function (value) {
            this._formatV = value;
            this.onDataIDChanged();
        },
        enumerable: false,
        configurable: true
    });
    LanguageLabel.prototype.onLoad = function () {
        this.onDataIDChanged();
        cc.director.on(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    LanguageLabel.prototype.onDestroy = function () {
        cc.director.off(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    LanguageLabel.prototype.onDataIDChanged = function () {
        this.refreshFromWords();
    };
    LanguageLabel.prototype.refreshFromWords = function () {
        if (!this._dataID) {
            return;
        }
        var text = '';
        var wordId = Number(this.dataID);
        var fmtV = this.formatV;
        if (fmtV.length <= 0) {
            fmtV = 'UIV_Null';
        }
        if (CC_EDITOR) {
            text = LanguageData_1.LanguageData.getLangByID(wordId, fmtV);
        }
        else {
            text = c2f.language.getLangByID(wordId, fmtV);
        }
        var spcomp = this.getComponent(cc.Label);
        if (!spcomp) {
            spcomp = this.getComponent(cc.RichText);
            if (!spcomp) {
                cc.warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
                return;
            }
        }
        spcomp.string = text;
    };
    __decorate([
        property({ serializable: true })
    ], LanguageLabel.prototype, "_dataID", void 0);
    __decorate([
        property({ type: cc.String, serializable: true })
    ], LanguageLabel.prototype, "dataID", null);
    __decorate([
        property({ serializable: true })
    ], LanguageLabel.prototype, "_formatV", void 0);
    __decorate([
        property({ type: cc.String, serializable: true })
    ], LanguageLabel.prototype, "formatV", null);
    LanguageLabel = __decorate([
        ccclass,
        menu('c2f/language/LanguageLabel')
    ], LanguageLabel);
    return LanguageLabel;
}(cc.Component));
exports.default = LanguageLabel;

cc._RF.pop();