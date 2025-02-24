
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderShining.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06119VaKW9Ijrh8naFAU3f3', 'ShaderShining');
// c2f-framework/component/shader/ShaderShining.ts

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
var GameTimer_1 = require("../../core/timer/GameTimer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, disallowMultiple = _a.disallowMultiple, executeInEditMode = _a.executeInEditMode;
var ShaderShining = /** @class */ (function (_super) {
    __extends(ShaderShining, _super);
    function ShaderShining() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.slope = 1;
        _this.len = 0.25;
        _this.strength = 2;
        _this.interval = 1;
        _this.timeScale = false;
        _this._mat = null;
        return _this;
    }
    Object.defineProperty(ShaderShining.prototype, "mat", {
        get: function () {
            if (!this._mat) {
                this._mat = this.getComponent(cc.RenderComponent).getMaterial(0);
            }
            return this._mat;
        },
        enumerable: false,
        configurable: true
    });
    ShaderShining.prototype.start = function () {
        this.updateShader();
    };
    ShaderShining.prototype.update = function () {
        this.updateShader();
    };
    ShaderShining.prototype.updateShader = function () {
        this.mat.setProperty("shiningData", new cc.Vec4(this.speed, this.slope, this.len, this.interval));
        this.mat.setProperty("extra", new cc.Vec4(this.timeScale ? GameTimer_1.GameTimer.scaleGameSec : GameTimer_1.GameTimer.gameSec, this.strength));
    };
    __decorate([
        property({ tooltip: CC_DEV && "流光速度" })
    ], ShaderShining.prototype, "speed", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "流光斜率" })
    ], ShaderShining.prototype, "slope", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "流光宽度", range: [0, Number.MAX_SAFE_INTEGER] })
    ], ShaderShining.prototype, "len", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "流光强度", range: [0, Number.MAX_SAFE_INTEGER] })
    ], ShaderShining.prototype, "strength", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "两次流光动画之间的间隔时间", range: [0, Number.MAX_SAFE_INTEGER] })
    ], ShaderShining.prototype, "interval", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "流光速度是否受到timeScale的影响" })
    ], ShaderShining.prototype, "timeScale", void 0);
    ShaderShining = __decorate([
        ccclass,
        disallowMultiple,
        executeInEditMode,
        menu("c2f/shader/ShaderShining")
    ], ShaderShining);
    return ShaderShining;
}(cc.Component));
exports.default = ShaderShining;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyU2hpbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFFakQsSUFBQSxLQUFtRSxFQUFFLENBQUMsVUFBVSxFQUE5RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFNdkY7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFrQ0M7UUFoQ1UsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFMUIsVUFBSSxHQUFnQixJQUFJLENBQUM7O0lBb0JyQyxDQUFDO0lBbkJHLHNCQUFXLDhCQUFHO2FBQWQ7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVTLDhCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7Z0RBQ2Y7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO2dEQUNmO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7OENBQ25EO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7bURBQ2pEO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7bURBQzFEO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO29EQUN0QjtJQVpqQixhQUFhO1FBSmpDLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQztPQUNaLGFBQWEsQ0FrQ2pDO0lBQUQsb0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzBDLEVBQUUsQ0FBQyxTQUFTLEdBa0N0RDtrQkFsQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lVGltZXIgfSBmcm9tIFwiLi4vLi4vY29yZS90aW1lci9HYW1lVGltZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSwgZGlzYWxsb3dNdWx0aXBsZSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZGlzYWxsb3dNdWx0aXBsZVxuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AbWVudShcImMyZi9zaGFkZXIvU2hhZGVyU2hpbmluZ1wiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyU2hpbmluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwi5rWB5YWJ6YCf5bqmXCIgfSlcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDE7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwi5rWB5YWJ5pac546HXCIgfSlcbiAgICBwdWJsaWMgc2xvcGU6IG51bWJlciA9IDE7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwi5rWB5YWJ5a695bqmXCIsIHJhbmdlOiBbMCwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJdIH0pXG4gICAgcHVibGljIGxlbjogbnVtYmVyID0gMC4yNTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmtYHlhYnlvLrluqZcIiwgcmFuZ2U6IFswLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUl0gfSlcbiAgICBwdWJsaWMgc3RyZW5ndGg6IG51bWJlciA9IDI7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwi5Lik5qyh5rWB5YWJ5Yqo55S75LmL6Ze055qE6Ze06ZqU5pe26Ze0XCIsIHJhbmdlOiBbMCwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJdIH0pXG4gICAgcHVibGljIGludGVydmFsOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIua1geWFiemAn+W6puaYr+WQpuWPl+WIsHRpbWVTY2FsZeeahOW9seWTjVwiIH0pXG4gICAgcHVibGljIHRpbWVTY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfbWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XG4gICAgcHVibGljIGdldCBtYXQoKTogY2MuTWF0ZXJpYWwge1xuICAgICAgICBpZiAoIXRoaXMuX21hdCkge1xuICAgICAgICAgICAgdGhpcy5fbWF0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KS5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXIoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWF0LnNldFByb3BlcnR5KFwic2hpbmluZ0RhdGFcIiwgbmV3IGNjLlZlYzQodGhpcy5zcGVlZCwgdGhpcy5zbG9wZSwgdGhpcy5sZW4sIHRoaXMuaW50ZXJ2YWwpKTtcbiAgICAgICAgdGhpcy5tYXQuc2V0UHJvcGVydHkoXCJleHRyYVwiLCBuZXcgY2MuVmVjNCh0aGlzLnRpbWVTY2FsZSA/IEdhbWVUaW1lci5zY2FsZUdhbWVTZWMgOiBHYW1lVGltZXIuZ2FtZVNlYywgdGhpcy5zdHJlbmd0aCkpO1xuICAgIH1cbn1cbiJdfQ==