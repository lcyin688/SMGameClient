
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/shader/ShaderOutline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0668lumyFJmIr56YytIuri', 'ShaderOutline');
// c2f-framework/component/shader/ShaderOutline.ts

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
var OutlineType;
(function (OutlineType) {
    OutlineType[OutlineType["NONE"] = 0] = "NONE";
    /** 外描边 */
    OutlineType[OutlineType["OUT"] = 1] = "OUT";
    /** 内描边 */
    OutlineType[OutlineType["INNER"] = 2] = "INNER";
})(OutlineType || (OutlineType = {}));
var ShaderOutline = /** @class */ (function (_super) {
    __extends(ShaderOutline, _super);
    function ShaderOutline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outlineColor = new cc.Color();
        _this.outLineWidth = 0;
        _this.outlineType = OutlineType.NONE;
        _this.textureSize = new cc.Size(1, 1);
        _this._mat = null;
        return _this;
    }
    Object.defineProperty(ShaderOutline.prototype, "mat", {
        get: function () {
            if (!this._mat) {
                this._mat = this.getComponent(cc.RenderComponent).getMaterial(0);
            }
            return this._mat;
        },
        enumerable: false,
        configurable: true
    });
    ShaderOutline.prototype.start = function () {
        this.updateShader();
    };
    ShaderOutline.prototype.update = function () {
        if (CC_EDITOR) {
            this.updateShader();
        }
    };
    ShaderOutline.prototype.updateShader = function () {
        this.mat.setProperty("outlineColor", this.outlineColor);
        this.mat.setProperty("outlineInfo", new cc.Vec4(this.textureSize.width, this.textureSize.height, this.outLineWidth, this.outlineType));
    };
    __decorate([
        property({ tooltip: CC_DEV && "描边颜色" })
    ], ShaderOutline.prototype, "outlineColor", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "描边宽度" })
    ], ShaderOutline.prototype, "outLineWidth", void 0);
    __decorate([
        property({ type: cc.Enum(OutlineType), tooltip: CC_DEV && "描边类型" })
    ], ShaderOutline.prototype, "outlineType", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "纹理大小" })
    ], ShaderOutline.prototype, "textureSize", void 0);
    ShaderOutline = __decorate([
        ccclass,
        disallowMultiple,
        executeInEditMode,
        menu("c2f/shader/ShaderOutline")
    ], ShaderOutline);
    return ShaderOutline;
}(cc.Component));
exports.default = ShaderOutline;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9zaGFkZXIvU2hhZGVyT3V0bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQW1FLEVBQUUsQ0FBQyxVQUFVLEVBQTlFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUV2RixJQUFLLFdBTUo7QUFORCxXQUFLLFdBQVc7SUFDWiw2Q0FBUSxDQUFBO0lBQ1IsVUFBVTtJQUNWLDJDQUFPLENBQUE7SUFDUCxVQUFVO0lBQ1YsK0NBQVMsQ0FBQTtBQUNiLENBQUMsRUFOSSxXQUFXLEtBQVgsV0FBVyxRQU1mO0FBTUQ7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFnQ0M7UUE5QlUsa0JBQVksR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixpQkFBVyxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBRTVDLGlCQUFXLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QyxVQUFJLEdBQWdCLElBQUksQ0FBQzs7SUFzQnJDLENBQUM7SUFyQkcsc0JBQVcsOEJBQUc7YUFBZDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRVMsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNJLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO3VEQUNPO0lBRS9DO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQzt1REFDUjtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7c0RBQ2pCO0lBRW5EO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztzREFDUTtJQVIvQixhQUFhO1FBSmpDLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQztPQUNaLGFBQWEsQ0FnQ2pDO0lBQUQsb0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzBDLEVBQUUsQ0FBQyxTQUFTLEdBZ0N0RDtrQkFoQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCBkaXNhbGxvd011bHRpcGxlLCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBPdXRsaW5lVHlwZSB7XG4gICAgTk9ORSA9IDAsXG4gICAgLyoqIOWkluaPj+i+uSAqL1xuICAgIE9VVCA9IDEsXG4gICAgLyoqIOWGheaPj+i+uSAqL1xuICAgIElOTkVSID0gMixcbn1cblxuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBtZW51KFwiYzJmL3NoYWRlci9TaGFkZXJPdXRsaW5lXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJPdXRsaW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmj4/ovrnpopzoibJcIiB9KVxuICAgIHB1YmxpYyBvdXRsaW5lQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKCk7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogQ0NfREVWICYmIFwi5o+P6L655a695bqmXCIgfSlcbiAgICBwdWJsaWMgb3V0TGluZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oT3V0bGluZVR5cGUpLCB0b29sdGlwOiBDQ19ERVYgJiYgXCLmj4/ovrnnsbvlnotcIiB9KVxuICAgIHB1YmxpYyBvdXRsaW5lVHlwZTogT3V0bGluZVR5cGUgPSBPdXRsaW5lVHlwZS5OT05FO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIue6ueeQhuWkp+Wwj1wiIH0pXG4gICAgcHVibGljIHRleHR1cmVTaXplOiBjYy5TaXplID0gbmV3IGNjLlNpemUoMSwgMSk7XG5cbiAgICBwcml2YXRlIF9tYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IG1hdCgpOiBjYy5NYXRlcmlhbCB7XG4gICAgICAgIGlmICghdGhpcy5fbWF0KSB7XG4gICAgICAgICAgICB0aGlzLl9tYXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpLmdldE1hdGVyaWFsKDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU2hhZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hdC5zZXRQcm9wZXJ0eShcIm91dGxpbmVDb2xvclwiLCB0aGlzLm91dGxpbmVDb2xvcik7XG4gICAgICAgIHRoaXMubWF0LnNldFByb3BlcnR5KFwib3V0bGluZUluZm9cIiwgbmV3IGNjLlZlYzQodGhpcy50ZXh0dXJlU2l6ZS53aWR0aCwgdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQsIHRoaXMub3V0TGluZVdpZHRoLCB0aGlzLm91dGxpbmVUeXBlKSk7XG4gICAgfVxufVxuIl19