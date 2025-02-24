
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIPanelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBhbmVsQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBQy9DLCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpQywrQkFBWTtJQUE3Qzs7SUF5QkEsQ0FBQztJQXZCYSw4QkFBUSxHQUFsQjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFUywrQkFBUyxHQUFuQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyx1Q0FBaUIsR0FBekIsVUFBMEIsT0FBZSxFQUFFLE9BQWUsRUFBRSxFQUFZO1FBQ3BFLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDeEIsQ0FBQztJQXhCUSxXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBeUJ2QjtJQUFELGtCQUFDO0NBekJELEFBeUJDLENBekJnQywyQkFBWSxHQXlCNUM7QUF6Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDMkZFbnVtIH0gZnJvbSAnLi4vLi4vZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IHsgVUlQcmVmYWJCYXNlIH0gZnJvbSAnLi9VSVByZWZhYkJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVBhbmVsQmFzZSBleHRlbmRzIFVJUHJlZmFiQmFzZSB7XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKEMyRkVudW0uRXZlbnQuQ2hhbmdlVmlld1ZhbHVlLCB0aGlzLm9uQ2hhbmdlVmlld1ZhbHVlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9mZihDMkZFbnVtLkV2ZW50LkNoYW5nZVZpZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG1zZ1R5cGUg5raI5oGv57G75Z6LXG4gICAgICogQHBhcmFtIHZhck5hbWUg5Y+Y6YeP5ZCNXG4gICAgICogQHBhcmFtIGNiIOWkhOeQhuWHveaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VWaWV3VmFsdWUobXNnVHlwZTogc3RyaW5nLCB2YXJOYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBjYj8uKHRoaXNbdmFyTmFtZV0pO1xuICAgIH1cbn1cbiJdfQ==