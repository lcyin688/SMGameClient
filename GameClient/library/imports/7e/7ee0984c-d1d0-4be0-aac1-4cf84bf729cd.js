"use strict";
cc._RF.push(module, '7ee09hM0dBL4KrBTPhL9ynN', 'MapCreateMainView');
// mainPack/script/mapCreate/MapCreateMain/MapCreateMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in MapCreateMainView.ts .
// If you need add data, please write in MapCreateMainViewModel.ts .
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
var UIViewBase_1 = require("./../../../../c2f-framework/gui/layer/UIViewBase");
var TabPage_1 = require("./../../../../c2f-framework/component/common/TabPage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapCreateMainView = /** @class */ (function (_super) {
    __extends(MapCreateMainView, _super);
    function MapCreateMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_MapCreateMain';
        _this.btnSaveSprite = undefined;
        _this.btnSaveButton = undefined;
        _this.btnNewSprite = undefined;
        _this.btnNewButton = undefined;
        _this.tabGroupLayout = undefined;
        _this.tabGroupTabPage = undefined;
        _this.tabGroupToggleContainer = undefined;
        _this.editBoxEditBox = undefined;
        return _this;
    }
    MapCreateMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MapCreateMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    MapCreateMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    MapCreateMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.content = this.get('_content_');
        this.btnSave = this.get('_btnSave_');
        this.btnSaveSprite = this.btnSave.getComponent(cc.Sprite);
        this.btnSaveButton = this.btnSave.getComponent(cc.Button);
        this.btnNew = this.get('_btnNew_');
        this.btnNewSprite = this.btnNew.getComponent(cc.Sprite);
        this.btnNewButton = this.btnNew.getComponent(cc.Button);
        this.tabGroup = this.get('_tabGroup_');
        this.tabGroupLayout = this.tabGroup.getComponent(cc.Layout);
        this.tabGroupTabPage = this.tabGroup.getComponent(TabPage_1.default);
        this.tabGroupToggleContainer = this.tabGroup.getComponent(cc.ToggleContainer);
        this.editBox = this.get('_editBox_');
        this.editBoxEditBox = this.editBox.getComponent(cc.EditBox);
    };
    MapCreateMainView.prototype.addEvent = function () {
        this.btnSaveButton.node.on('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.on('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.on('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.on('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.on('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.on('text-changed', this.oneditBoxEditBoxTextChanged, this);
    };
    MapCreateMainView.prototype.removeEvent = function () {
        this.btnSaveButton.node.off('click', this.onbtnSaveButtonClick, this);
        this.btnNewButton.node.off('click', this.onbtnNewButtonClick, this);
        this.editBoxEditBox.node.off('editing-did-began', this.oneditBoxEditBoxEditingBegan, this);
        this.editBoxEditBox.node.off('editing-did-ended', this.oneditBoxEditBoxEditingEnded, this);
        this.editBoxEditBox.node.off('editing-return', this.oneditBoxEditBoxEditingReturn, this);
        this.editBoxEditBox.node.off('text-changed', this.oneditBoxEditBoxTextChanged, this);
    };
    MapCreateMainView.prototype.onbtnSaveButtonClick = function (component) {
        this.emit('click', component);
    };
    MapCreateMainView.prototype.onbtnNewButtonClick = function (component) {
        this.emit('click', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    MapCreateMainView.prototype.oneditBoxEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    MapCreateMainView = __decorate([
        ccclass
    ], MapCreateMainView);
    return MapCreateMainView;
}(UIViewBase_1.UIViewBase));
exports.default = MapCreateMainView;

cc._RF.pop();