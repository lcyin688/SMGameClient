"use strict";
cc._RF.push(module, '1edd1a3PAZOiaUDsmO71vGT', 'UIModelBase');
// c2f-framework/gui/layer/UIModelBase.ts

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
exports.UIModelBase = void 0;
var C2FEnum_1 = require("../../define/C2FEnum");
var UIBase_1 = require("./UIBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIModelBase = /** @class */ (function (_super) {
    __extends(UIModelBase, _super);
    function UIModelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIModelBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.Event.ChangeModelValue, this.onChangeModelValue, this);
    };
    UIModelBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.Event.ChangeModelValue);
    };
    /**
     *
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    UIModelBase.prototype.onChangeModelValue = function (msgType, varName, cb) {
        cb === null || cb === void 0 ? void 0 : cb(this[varName]);
    };
    UIModelBase = __decorate([
        ccclass
    ], UIModelBase);
    return UIModelBase;
}(UIBase_1.UIBase));
exports.UIModelBase = UIModelBase;

cc._RF.pop();