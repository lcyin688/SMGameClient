
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/BlockItem/BlockItemModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d36wVJSBKqI2ZZb4NBwdc', 'BlockItemModel');
// mainPack/script/desStar/BlockItem/BlockItemModel.ts

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
var BlockItemModel = /** @class */ (function (_super) {
    __extends(BlockItemModel, _super);
    function BlockItemModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BlockItem';
        return _this;
    }
    BlockItemModel.prototype.initData = function (data) {
        this.data = data;
    };
    BlockItemModel = __decorate([
        ccclass
    ], BlockItemModel);
    return BlockItemModel;
}(UIModelBase_1.UIModelBase));
exports.default = BlockItemModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9CbG9ja0l0ZW0vQmxvY2tJdGVtTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUZBQWdGO0FBRTFFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFXO0lBQXZEO1FBQUEscUVBUUM7UUFORyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGFBQWEsQ0FBQzs7SUFLdEMsQ0FBQztJQUhVLGlDQUFRLEdBQWYsVUFBZ0IsSUFBMEI7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQVBnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBUWxDO0lBQUQscUJBQUM7Q0FSRCxBQVFDLENBUjJDLHlCQUFXLEdBUXREO2tCQVJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJTW9kZWxCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0l0ZW1Nb2RlbCBleHRlbmRzIFVJTW9kZWxCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnUF9CbG9ja0l0ZW0nO1xuICAgIHB1YmxpYyBkYXRhOiBVSVBhLkRlc1N0YXJJdGVtQXJncztcbiAgICBwdWJsaWMgaW5pdERhdGEoZGF0YTogVUlQYS5EZXNTdGFySXRlbUFyZ3MpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIH1cbn0iXX0=