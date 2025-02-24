
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Item/Physics2048ItemModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6925fXEsdFJnp7LgcjaMtqJ', 'Physics2048ItemModel');
// mainPack/script/physics2048/Physics2048Item/Physics2048ItemModel.ts

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
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048ItemModel = /** @class */ (function (_super) {
    __extends(Physics2048ItemModel, _super);
    function Physics2048ItemModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Physics2048Item';
        return _this;
    }
    Physics2048ItemModel.prototype.initData = function (data, callBack) {
        this.data = data;
        this.cbFun = callBack;
    };
    Physics2048ItemModel = __decorate([
        ccclass
    ], Physics2048ItemModel);
    return Physics2048ItemModel;
}(UIModelBase_1.UIModelBase));
exports.default = Physics2048ItemModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhJdGVtL1BoeXNpY3MyMDQ4SXRlbU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlGQUFnRjtBQUUxRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrRCx3Q0FBVztJQUE3RDtRQUFBLHFFQVVDO1FBUkcsZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxtQkFBbUIsQ0FBQzs7SUFPNUMsQ0FBQztJQUpVLHVDQUFRLEdBQWYsVUFBZ0IsSUFBOEIsRUFBRSxRQUFrQjtRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtJQUN6QixDQUFDO0lBVGdCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBVXhDO0lBQUQsMkJBQUM7Q0FWRCxBQVVDLENBVmlELHlCQUFXLEdBVTVEO2tCQVZvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSVBhIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlQYXJhbSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MyMDQ4SXRlbU1vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX1BoeXNpY3MyMDQ4SXRlbSc7XG4gICAgcHVibGljIGRhdGE6IFVJUGEuUGh5c2ljczIwNDhJdGVtQXJnc1xuICAgIHB1YmxpYyBjYkZ1bjogRnVuY3Rpb25cbiAgICBwdWJsaWMgaW5pdERhdGEoZGF0YTogVUlQYS5QaHlzaWNzMjA0OEl0ZW1BcmdzLCBjYWxsQmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICB0aGlzLmNiRnVuID0gY2FsbEJhY2tcbiAgICB9XG59Il19