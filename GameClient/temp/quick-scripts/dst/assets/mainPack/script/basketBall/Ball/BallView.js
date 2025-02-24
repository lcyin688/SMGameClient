
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/basketBall/Ball/BallView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1d90TH/lhGG4pTq7HmAmVK', 'BallView');
// mainPack/script/basketBall/Ball/BallView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BallView.ts .
// If you need add data, please write in BallViewModel.ts .
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
var UIPanelBase_1 = require("./../../../../c2f-framework/gui/layer/UIPanelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallView = /** @class */ (function (_super) {
    __extends(BallView, _super);
    function BallView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Ball';
        return _this;
    }
    BallView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BallView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BallView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BallView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
    };
    BallView.prototype.addEvent = function () {
    };
    BallView.prototype.removeEvent = function () {
    };
    BallView = __decorate([
        ccclass
    ], BallView);
    return BallView;
}(UIPanelBase_1.UIPanelBase));
exports.default = BallView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvYmFza2V0QmFsbC9CYWxsL0JhbGxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsdURBQXVEO0FBQ3ZELDJEQUEyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELGlGQUFnRjtBQUUxRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBVztJQUFqRDtRQUFBLHFFQXNDQztRQXJDRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFFBQVEsQ0FBQzs7SUFvQ2pDLENBQUM7SUFoQ1UseUJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLCtCQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7SUFFekIsQ0FBQztJQUVPLDJCQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVPLDhCQUFXLEdBQW5CO0lBRUEsQ0FBQztJQW5DZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNDNUI7SUFBRCxlQUFDO0NBdENELEFBc0NDLENBdENxQyx5QkFBVyxHQXNDaEQ7a0JBdENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEJhbGxWaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gQmFsbFZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJUGFuZWxCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBhbmVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbFZpZXcgZXh0ZW5kcyBVSVBhbmVsQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX0JhbGwnO1xuXG4gICAgXG5cbiAgICBwdWJsaWMgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH0gXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFByb3BlcnR5KCkge1xuICAgICAgICBzdXBlci5pbml0UHJvcGVydHkoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG5cbiAgICB9XG5cblxufSJdfQ==