
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/StartItem/StartItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65b10TtZxZAJ66LWnRp/GRa', 'StartItem');
// mainPack/script/desStar/StartItem/StartItem.ts

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
var UIPControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIPControlBase");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartItem = /** @class */ (function (_super) {
    __extends(StartItem, _super);
    function StartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_StartItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    StartItem.prototype.playAni = function () {
        UIHelper_1.UIHelper.playSkeAni(this.view.skeSkeleton, "play");
    };
    StartItem = __decorate([
        ccclass
    ], StartItem);
    return StartItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = StartItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9TdGFydEl0ZW0vU3RhcnRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFzRjtBQUl0Riw2REFBNEQ7QUFFdEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQWM7SUFBckQ7UUFBQSxxRUFXQztRQVZHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsYUFBYSxDQUFDO1FBRTNCLFdBQUssR0FBbUIsU0FBUyxDQUFDO1FBQ2xDLFVBQUksR0FBa0IsU0FBUyxDQUFDOztJQU0zQyxDQUFDO0lBSlUsMkJBQU8sR0FBZDtRQUNJLG1CQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFUZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVc3QjtJQUFELGdCQUFDO0NBWEQsQUFXQyxDQVhzQywrQkFBYyxHQVdwRDtrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJUENvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBDb250cm9sQmFzZSc7XG5pbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2RlZmluZS9DMkZFbnVtJztcbmltcG9ydCBTdGFydEl0ZW1Nb2RlbCBmcm9tICcuL1N0YXJ0SXRlbU1vZGVsJztcbmltcG9ydCBTdGFydEl0ZW1WaWV3IGZyb20gJy4vU3RhcnRJdGVtVmlldyc7XG5pbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJSGVscGVyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEl0ZW0gZXh0ZW5kcyBVSVBDb250cm9sQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX1N0YXJ0SXRlbSc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IFN0YXJ0SXRlbU1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBTdGFydEl0ZW1WaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIHBsYXlBbmkoKSB7XG4gICAgICAgIFVJSGVscGVyLnBsYXlTa2VBbmkodGhpcy52aWV3LnNrZVNrZWxldG9uLCBcInBsYXlcIilcbiAgICB9XG5cbn0iXX0=