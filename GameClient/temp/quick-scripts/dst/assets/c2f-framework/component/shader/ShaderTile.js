
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderTile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d214GiMOdLYop+D/v/sj2J', 'ShaderTile');
// c2f-framework/component/shader/ShaderTile.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, disallowMultiple = _a.disallowMultiple, executeInEditMode = _a.executeInEditMode;
var ShaderTile = /** @class */ (function (_super) {
    __extends(ShaderTile, _super);
    function ShaderTile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scale = new cc.Vec2(1, 1);
        _this.offset = new cc.Vec2(0, 0);
        _this._mat = null;
        return _this;
    }
    Object.defineProperty(ShaderTile.prototype, "mat", {
        get: function () {
            if (!this._mat) {
                this._mat = this.getComponent(cc.RenderComponent).getMaterial(0);
            }
            return this._mat;
        },
        enumerable: false,
        configurable: true
    });
    ShaderTile.prototype.start = function () {
        this.updateShader();
    };
    ShaderTile.prototype.update = function () {
        if (CC_EDITOR) {
            this.updateShader();
        }
    };
    ShaderTile.prototype.updateShader = function () {
        this.mat.setProperty("tile", new cc.Vec4(this.scale.x, this.scale.y, this.offset.x, this.offset.y));
    };
    __decorate([
        property({ tooltip: CC_DEV && "uv坐标缩放倍数" })
    ], ShaderTile.prototype, "scale", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "uv坐标偏移值" })
    ], ShaderTile.prototype, "offset", void 0);
    ShaderTile = __decorate([
        ccclass,
        disallowMultiple,
        executeInEditMode,
        menu("c2f/shader/ShaderTile")
    ], ShaderTile);
    return ShaderTile;
}(cc.Component));
exports.default = ShaderTile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQW1FLEVBQUUsQ0FBQyxVQUFVLEVBQTlFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQU12RjtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJCQztRQXpCVSxXQUFLLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxVQUFJLEdBQWdCLElBQUksQ0FBQzs7SUFxQnJDLENBQUM7SUFwQkcsc0JBQVcsMkJBQUc7YUFBZDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRVMsMEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUF4QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLFVBQVUsRUFBRSxDQUFDOzZDQUNGO0lBRTFDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQzs4Q0FDQTtJQUoxQixVQUFVO1FBSjlCLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztPQUNULFVBQVUsQ0EyQjlCO0lBQUQsaUJBQUM7Q0EzQkQsQUEyQkMsQ0EzQnVDLEVBQUUsQ0FBQyxTQUFTLEdBMkJuRDtrQkEzQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCBkaXNhbGxvd011bHRpcGxlLCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KFwiYzJmL3NoYWRlci9TaGFkZXJUaWxlXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJUaWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCJ1duWdkOagh+e8qeaUvuWAjeaVsFwiIH0pXG4gICAgcHVibGljIHNjYWxlOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMSwgMSk7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwidXblnZDmoIflgY/np7vlgLxcIiB9KVxuICAgIHB1YmxpYyBvZmZzZXQ6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcblxuICAgIHByaXZhdGUgX21hdDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuICAgIHB1YmxpYyBnZXQgbWF0KCk6IGNjLk1hdGVyaWFsIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCkuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGFkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWF0LnNldFByb3BlcnR5KFwidGlsZVwiLCBuZXcgY2MuVmVjNCh0aGlzLnNjYWxlLngsIHRoaXMuc2NhbGUueSwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSkpO1xuICAgIH1cbn1cbiJdfQ==