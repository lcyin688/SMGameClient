
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Item/Physics2048ItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75d60cbuohLT4Q6yxHzi68I', 'Physics2048ItemView');
// mainPack/script/physics2048/Physics2048Item/Physics2048ItemView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048ItemView.ts .
// If you need add data, please write in Physics2048ItemViewModel.ts .
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
var Physics2048ItemView = /** @class */ (function (_super) {
    __extends(Physics2048ItemView, _super);
    function Physics2048ItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Physics2048Item';
        _this.weiBaSprite = undefined;
        _this.weiBaAnimation = undefined;
        _this.iconSprite = undefined;
        return _this;
    }
    Physics2048ItemView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Physics2048ItemView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    Physics2048ItemView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    Physics2048ItemView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.weiBa = this.get('_weiBa_');
        this.weiBaSprite = this.weiBa.getComponent(cc.Sprite);
        this.weiBaAnimation = this.weiBa.getComponent(cc.Animation);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
    };
    Physics2048ItemView.prototype.addEvent = function () {
    };
    Physics2048ItemView.prototype.removeEvent = function () {
    };
    Physics2048ItemView = __decorate([
        ccclass
    ], Physics2048ItemView);
    return Physics2048ItemView;
}(UIPanelBase_1.UIPanelBase));
exports.default = Physics2048ItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhJdGVtL1BoeXNpY3MyMDQ4SXRlbVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxrRUFBa0U7QUFDbEUsc0VBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEUsaUZBQWdGO0FBRTFFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlELHVDQUFXO0lBQTVEO1FBQUEscUVBZ0RDO1FBL0NHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFHakMsaUJBQVcsR0FBYyxTQUFTLENBQUM7UUFDbkMsb0JBQWMsR0FBaUIsU0FBUyxDQUFDO1FBRXpDLGdCQUFVLEdBQWMsU0FBUyxDQUFDOztJQXdDN0MsQ0FBQztJQXJDVSxvQ0FBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNDQUFRLEdBQWY7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sdUNBQVMsR0FBaEI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsMENBQVksR0FBdEI7UUFDSSxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhELENBQUM7SUFFTyxzQ0FBUSxHQUFoQjtJQUVBLENBQUM7SUFFTyx5Q0FBVyxHQUFuQjtJQUVBLENBQUM7SUE3Q2dCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBZ0R2QztJQUFELDBCQUFDO0NBaERELEFBZ0RDLENBaERnRCx5QkFBVyxHQWdEM0Q7a0JBaERvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWMgZ2VuZXJhdGlvbiwgcGxlYXNlIGRvIG5vdCBlZGl0LlxuLy8gSWYgeW91IG5lZWQgYWRkIGxvZ2ljLCBwbGVhc2Ugd3JpdGUgaW4gUGh5c2ljczIwNDhJdGVtVmlldy50cyAuXG4vLyBJZiB5b3UgbmVlZCBhZGQgZGF0YSwgcGxlYXNlIHdyaXRlIGluIFBoeXNpY3MyMDQ4SXRlbVZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJUGFuZWxCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVBhbmVsQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljczIwNDhJdGVtVmlldyBleHRlbmRzIFVJUGFuZWxCYXNlIHtcbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ1BfUGh5c2ljczIwNDhJdGVtJztcblxuICAgIHB1YmxpYyB3ZWlCYTogY2MuTm9kZTtcbiAgICBwdWJsaWMgd2VpQmFTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgd2VpQmFBbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMud2VpQmEgPSB0aGlzLmdldCgnX3dlaUJhXycpO1xuICAgICAgICB0aGlzLndlaUJhU3ByaXRlID0gdGhpcy53ZWlCYS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy53ZWlCYUFuaW1hdGlvbiA9IHRoaXMud2VpQmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0KCdfaWNvbl8nKTtcbiAgICAgICAgdGhpcy5pY29uU3ByaXRlID0gdGhpcy5pY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcblxuICAgIH1cblxuXG59Il19