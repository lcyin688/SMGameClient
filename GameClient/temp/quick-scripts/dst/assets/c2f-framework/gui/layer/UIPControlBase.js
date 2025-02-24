
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIPControlBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35539aCL35HA5WWlRWJ3iYB', 'UIPControlBase');
// c2f-framework/gui/layer/UIPControlBase.ts

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
exports.UIPControlBase = void 0;
var UIBase_1 = require("./UIBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPControlBase = /** @class */ (function (_super) {
    __extends(UIPControlBase, _super);
    function UIPControlBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIPControlBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.offAll();
    };
    UIPControlBase.prototype.onDestroy = function () {
        this.model = null;
        this.view = null;
        _super.prototype.onDestroy.call(this);
    };
    UIPControlBase = __decorate([
        ccclass
    ], UIPControlBase);
    return UIPControlBase;
}(UIBase_1.UIBase));
exports.UIPControlBase = UIPControlBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBDb250cm9sQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQWtDO0FBRzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW9DLGtDQUFNO0lBQTFDOztJQW1CQSxDQUFDO0lBWmEsa0NBQVMsR0FBbkI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBbEJRLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQm1DLGVBQU0sR0FtQnpDO0FBbkJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlNb2RlbEJhc2UgfSBmcm9tICcuL1VJTW9kZWxCYXNlJztcbmltcG9ydCB7IFVJQmFzZSB9IGZyb20gJy4vVUlCYXNlJztcbmltcG9ydCB7IFVJUGFuZWxCYXNlIH0gZnJvbSAnLi9VSVBhbmVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFVJUENvbnRyb2xCYXNlIGV4dGVuZHMgVUlCYXNlIHtcblxuICAgIC8v5pWw5o2u5a+56LGhXG4gICAgcHVibGljIG1vZGVsOiBVSU1vZGVsQmFzZTtcbiAgICAvL+inhuWbvuWvueixoVxuICAgIHB1YmxpYyB2aWV3OiBVSVBhbmVsQmFzZTtcblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==