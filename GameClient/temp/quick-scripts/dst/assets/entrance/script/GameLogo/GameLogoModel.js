
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLogo/GameLogoModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cf17C6+VpNj5XtW7q8VzFC', 'GameLogoModel');
// entrance/script/GameLogo/GameLogoModel.ts

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
var GameLogoModel = /** @class */ (function (_super) {
    __extends(GameLogoModel, _super);
    function GameLogoModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogo';
        return _this;
    }
    GameLogoModel = __decorate([
        ccclass
    ], GameLogoModel);
    return GameLogoModel;
}(UIModelBase_1.UIModelBase));
exports.default = GameLogoModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ28vR2FtZUxvZ29Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSw4RUFBNkU7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMkMsaUNBQVc7SUFBdEQ7UUFBQSxxRUFNQztRQUxHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsVUFBVSxDQUFDOztJQUluQyxDQUFDO0lBTm9CLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FNakM7SUFBRCxvQkFBQztDQU5ELEFBTUMsQ0FOMEMseUJBQVcsR0FNckQ7a0JBTm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZUhlbHBlcic7XG5pbXBvcnQgeyBQb3BWaWV3UGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGVUlEZWYnO1xuaW1wb3J0IHsgRW50cmFuY2VVSSB9IGZyb20gJy4uL0VudHJhbmNlVmlldyc7XG5pbXBvcnQgeyBFbnRyYURlZiB9IGZyb20gJy4uL2dhbWUvRW50cmFuY2VEZWZpbmUnO1xuaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJTW9kZWxCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9nb01vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnR2FtZUxvZ28nO1xuXG5cblxufSJdfQ==