
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameYngy/script/YngyItem/YngyItemModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e706yCvjVLdqdl/3vLWC9T', 'YngyItemModel');
// gameYngy/script/YngyItem/YngyItemModel.ts

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
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var YngyItemModel = /** @class */ (function (_super) {
    __extends(YngyItemModel, _super);
    function YngyItemModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_YngyItem';
        return _this;
    }
    YngyItemModel.prototype.initData = function (data) {
        this.data = data;
    };
    YngyItemModel = __decorate([
        ccclass
    ], YngyItemModel);
    return YngyItemModel;
}(UIModelBase_1.UIModelBase));
exports.default = YngyItemModel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lWW5neS9zY3JpcHQvWW5neUl0ZW0vWW5neUl0ZW1Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBNkU7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMkMsaUNBQVc7SUFBdEQ7UUFBQSxxRUFRQztRQU5HLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsWUFBWSxDQUFDOztJQUtyQyxDQUFDO0lBSFUsZ0NBQVEsR0FBZixVQUFnQixJQUF1QjtRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBUGdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FRakM7SUFBRCxvQkFBQztDQVJELEFBUUMsQ0FSMEMseUJBQVcsR0FRckQ7a0JBUm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBhIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlQYXJhbSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFluZ3lJdGVtTW9kZWwgZXh0ZW5kcyBVSU1vZGVsQmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ1BfWW5neUl0ZW0nO1xuICAgIHB1YmxpYyBkYXRhOiBVSVBhLlluZ3lJdGVtQXJnc1xuICAgIHB1YmxpYyBpbml0RGF0YShkYXRhOiBVSVBhLlluZ3lJdGVtQXJncykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgfVxufSJdfQ==