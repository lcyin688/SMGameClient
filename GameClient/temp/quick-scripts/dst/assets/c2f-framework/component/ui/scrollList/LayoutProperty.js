
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/LayoutProperty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '838787pJRNN25oWbvaCkfKh', 'LayoutProperty');
// c2f-framework/component/ui/scrollList/LayoutProperty.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutProperty = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayoutProperty = /** @class */ (function () {
    function LayoutProperty() {
        this.type = cc.Layout.Type.VERTICAL;
        this.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        this.spacingX = 0;
        this.spacingY = 0;
        this.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
        this.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
    }
    __decorate([
        property({ type: cc.Enum(cc.Layout.Type), tooltip: CC_DEV && "布局模式" })
    ], LayoutProperty.prototype, "type", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.AxisDirection),
            tooltip: CC_DEV && "GRID布局的起始轴方向\nHORIZONTAL：固定宽度，动态改变高度\nVERTICAL：固定高度，动态改变宽度",
            visible: function () { return this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "startAxis", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "left", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "right", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "top", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "bottom", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "spacingX", void 0);
    __decorate([
        property({ visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    ], LayoutProperty.prototype, "spacingY", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.VerticalDirection),
            visible: function () { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "verticalDirection", void 0);
    __decorate([
        property({
            type: cc.Enum(cc.Layout.HorizontalDirection),
            visible: function () { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; }
        })
    ], LayoutProperty.prototype, "horizontalDirection", void 0);
    LayoutProperty = __decorate([
        ccclass("LayoutProperty")
    ], LayoutProperty);
    return LayoutProperty;
}());
exports.LayoutProperty = LayoutProperty;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L0xheW91dFByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFHVyxTQUFJLEdBQW1CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQU8vQyxjQUFTLEdBQTRCLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUd4RSxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUdoQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQU1yQixzQkFBaUIsR0FBZ0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFNM0Ysd0JBQW1CLEdBQWtDLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO0lBQzVHLENBQUM7SUF0Q0c7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7Z0RBQ2pCO0lBT3REO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDdEMsT0FBTyxFQUFFLE1BQU0sSUFBSSw0REFBNEQ7WUFDL0UsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxRCxDQUFDO3FEQUM2RTtJQUcvRTtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dEQUN6RjtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lEQUN4RjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOytDQUN4RjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2tEQUNyRjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29EQUNyRjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29EQUNuRjtJQU01QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDMUMsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRyxDQUFDOzZEQUNnRztJQU1sRztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDNUMsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyRyxDQUFDOytEQUNzRztJQXhDL0YsY0FBYztRQUQxQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7T0FDYixjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBekNELEFBeUNDLElBQUE7QUF6Q1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3MoXCJMYXlvdXRQcm9wZXJ0eVwiKVxuZXhwb3J0IGNsYXNzIExheW91dFByb3BlcnR5IHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oY2MuTGF5b3V0LlR5cGUpLCB0b29sdGlwOiBDQ19ERVYgJiYgXCLluIPlsYDmqKHlvI9cIiB9KVxuICAgIHB1YmxpYyB0eXBlOiBjYy5MYXlvdXQuVHlwZSA9IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbiksXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIkdSSUTluIPlsYDnmoTotbflp4vovbTmlrnlkJFcXG5IT1JJWk9OVEFM77ya5Zu65a6a5a695bqm77yM5Yqo5oCB5pS55Y+Y6auY5bqmXFxuVkVSVElDQUzvvJrlm7rlrprpq5jluqbvvIzliqjmgIHmlLnlj5jlrr3luqZcIixcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuR1JJRDsgfVxuICAgIH0pXG4gICAgcHVibGljIHN0YXJ0QXhpczogY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24gPSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMO1xuXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTCB8fCB0aGlzLnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkdSSUQ7IH0gfSlcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGUoKSB7IHJldHVybiB0aGlzLnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwgfHwgdGhpcy50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5HUklEOyB9IH0pXG4gICAgcHVibGljIHJpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwgfHwgdGhpcy50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5HUklEOyB9IH0pXG4gICAgcHVibGljIHRvcDogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGUoKSB7IHJldHVybiB0aGlzLnR5cGUgPT09IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMIHx8IHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuR1JJRDsgfSB9KVxuICAgIHB1YmxpYyBib3R0b206IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMIHx8IHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuR1JJRDsgfSB9KVxuICAgIHB1YmxpYyBzcGFjaW5nWDogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGUoKSB7IHJldHVybiB0aGlzLnR5cGUgPT09IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMIHx8IHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuR1JJRDsgfSB9KVxuICAgIHB1YmxpYyBzcGFjaW5nWTogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uKSxcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwgfHwgdGhpcy50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5HUklEOyB9XG4gICAgfSlcbiAgICBwdWJsaWMgdmVydGljYWxEaXJlY3Rpb246IGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbiA9IGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbiksXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwgfHwgdGhpcy50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5HUklEOyB9XG4gICAgfSlcbiAgICBwdWJsaWMgaG9yaXpvbnRhbERpcmVjdGlvbjogY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24gPSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUO1xufSJdfQ==