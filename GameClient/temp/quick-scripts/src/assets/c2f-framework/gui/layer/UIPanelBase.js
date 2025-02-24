"use strict";
cc._RF.push(module, 'daf02rzBQ9FaZ+ww5sxDa5D', 'UIPanelBase');
// c2f-framework/gui/layer/UIPanelBase.ts

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
exports.UIPanelBase = void 0;
var C2FEnum_1 = require("../../define/C2FEnum");
var UIPrefabBase_1 = require("./UIPrefabBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPanelBase = /** @class */ (function (_super) {
    __extends(UIPanelBase, _super);
    function UIPanelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIPanelBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
    };
    UIPanelBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.Event.ChangeViewValue);
    };
    /**
     *
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    UIPanelBase.prototype.onChangeViewValue = function (msgType, varName, cb) {
        cb === null || cb === void 0 ? void 0 : cb(this[varName]);
    };
    UIPanelBase = __decorate([
        ccclass
    ], UIPanelBase);
    return UIPanelBase;
}(UIPrefabBase_1.UIPrefabBase));
exports.UIPanelBase = UIPanelBase;

cc._RF.pop();