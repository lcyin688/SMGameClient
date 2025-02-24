
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderFill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ae19szF/pDq7lhdJCvjlMt', 'ShaderFill');
// c2f-framework/component/shader/ShaderFill.ts

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
var ShaderFill = /** @class */ (function (_super) {
    __extends(ShaderFill, _super);
    function ShaderFill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillColor = new cc.Color();
        _this.fillPhase = 0;
        _this._mat = null;
        return _this;
    }
    Object.defineProperty(ShaderFill.prototype, "mat", {
        get: function () {
            if (!this._mat) {
                this._mat = this.getComponent(cc.RenderComponent).getMaterial(0);
            }
            return this._mat;
        },
        enumerable: false,
        configurable: true
    });
    ShaderFill.prototype.start = function () {
        this.updateShader();
    };
    ShaderFill.prototype.update = function () {
        if (CC_EDITOR) {
            this.updateShader();
        }
    };
    ShaderFill.prototype.updateShader = function () {
        this.mat.setProperty("fillColor", this.fillColor);
        this.mat.setProperty("fillPhase", this.fillPhase);
    };
    __decorate([
        property({ tooltip: CC_DEV && "填充颜色" })
    ], ShaderFill.prototype, "fillColor", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "填充率", range: [0, 1] })
    ], ShaderFill.prototype, "fillPhase", void 0);
    ShaderFill = __decorate([
        ccclass,
        disallowMultiple,
        executeInEditMode,
        menu("c2f/shader/ShaderFill")
    ], ShaderFill);
    return ShaderFill;
}(cc.Component));
exports.default = ShaderFill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyRmlsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQW1FLEVBQUUsQ0FBQyxVQUFVLEVBQTlFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQU12RjtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRCQztRQTFCVSxlQUFTLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUVyQixVQUFJLEdBQWdCLElBQUksQ0FBQzs7SUFzQnJDLENBQUM7SUFyQkcsc0JBQVcsMkJBQUc7YUFBZDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRVMsMEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztpREFDSTtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2lEQUN6QjtJQUpaLFVBQVU7UUFKOUIsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ1QsVUFBVSxDQTRCOUI7SUFBRCxpQkFBQztDQTVCRCxBQTRCQyxDQTVCdUMsRUFBRSxDQUFDLFNBQVMsR0E0Qm5EO2tCQTVCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIGRpc2FsbG93TXVsdGlwbGUsIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGRpc2FsbG93TXVsdGlwbGVcbkBleGVjdXRlSW5FZGl0TW9kZVxuQG1lbnUoXCJjMmYvc2hhZGVyL1NoYWRlckZpbGxcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWRlckZpbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuWhq+WFheminOiJslwiIH0pXG4gICAgcHVibGljIGZpbGxDb2xvcjogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoKTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLloavlhYXnjodcIiwgcmFuZ2U6IFswLCAxXSB9KVxuICAgIHB1YmxpYyBmaWxsUGhhc2U6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9tYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IG1hdCgpOiBjYy5NYXRlcmlhbCB7XG4gICAgICAgIGlmICghdGhpcy5fbWF0KSB7XG4gICAgICAgICAgICB0aGlzLl9tYXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpLmdldE1hdGVyaWFsKDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU2hhZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hdC5zZXRQcm9wZXJ0eShcImZpbGxDb2xvclwiLCB0aGlzLmZpbGxDb2xvcik7XG4gICAgICAgIHRoaXMubWF0LnNldFByb3BlcnR5KFwiZmlsbFBoYXNlXCIsIHRoaXMuZmlsbFBoYXNlKTtcbiAgICB9XG59XG4iXX0=