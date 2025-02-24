
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIModelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSU1vZGVsQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBQy9DLG1DQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpQywrQkFBTTtJQUF2Qzs7SUF5QkEsQ0FBQztJQXZCYSw4QkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVTLCtCQUFTLEdBQW5CO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssd0NBQWtCLEdBQTFCLFVBQTJCLE9BQWUsRUFBRSxPQUFlLEVBQUUsRUFBWTtRQUNyRSxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3hCLENBQUM7SUF4QlEsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQXlCdkI7SUFBRCxrQkFBQztDQXpCRCxBQXlCQyxDQXpCZ0MsZUFBTSxHQXlCdEM7QUF6Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi4vLi4vZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IHsgVUlCYXNlIH0gZnJvbSAnLi9VSUJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSU1vZGVsQmFzZSBleHRlbmRzIFVJQmFzZSB7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uRXZlbnQuQ2hhbmdlTW9kZWxWYWx1ZSwgdGhpcy5vbkNoYW5nZU1vZGVsVmFsdWUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmKEMyRkVudW0uRXZlbnQuQ2hhbmdlTW9kZWxWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG1zZ1R5cGUg5raI5oGv57G75Z6LXG4gICAgICogQHBhcmFtIHZhck5hbWUg5Y+Y6YeP5ZCNXG4gICAgICogQHBhcmFtIGNiIOWkhOeQhuWHveaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VNb2RlbFZhbHVlKG1zZ1R5cGU6IHN0cmluZywgdmFyTmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgY2I/Lih0aGlzW3Zhck5hbWVdKTtcbiAgICB9XG59XG4iXX0=