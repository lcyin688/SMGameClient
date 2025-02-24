"use strict";
cc._RF.push(module, '8770ed6EHFI3pPr9cUiO5zN', 'RichTextEvent');
// c2f-framework/component/common/RichTextEvent.ts

"use strict";
//注意!!! click响应函数handler
//富文本 param 设置为 clickNames 的值
//exp:<on click='handler' param="{0}"> 描述</on>  -->{0} 这个值就是clickName  类型 string
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var RichTextEvent = /** @class */ (function (_super) {
    __extends(RichTextEvent, _super);
    function RichTextEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickNames = [];
        _this.cliskCbs = [];
        return _this;
    }
    /** 设置richText响应名称及其回调函数 */
    RichTextEvent.prototype.updateView = function (names, cbs) {
        this.clickNames = names;
        this.cliskCbs = cbs;
    };
    RichTextEvent.prototype.handler = function (evt, param) {
        if (!this.clickNames && this.clickNames.length <= 0) {
            return;
        }
        var idx = this.clickNames.indexOf(param);
        if (this.cliskCbs.length > 0 && this.cliskCbs[idx] && typeof this.cliskCbs[idx] == 'function') {
            this.cliskCbs[idx](param);
        }
    };
    RichTextEvent.prototype.onDestroy = function () {
        this.clickNames = [];
        this.cliskCbs = [];
    };
    RichTextEvent = __decorate([
        ccclass,
        menu('c2f/common/RichTextEvent')
    ], RichTextEvent);
    return RichTextEvent;
}(cc.Component));
exports.default = RichTextEvent;

cc._RF.pop();