
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/button/ButtonChildPos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c34dZFfsxBlZKPpElUos3w', 'ButtonChildPos');
// c2f-framework/component/ui/button/ButtonChildPos.ts

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
var ButtonHack_1 = require("../../../hack/ButtonHack");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
/**
 * 根据button组件过渡状态，移动子节点坐标
 */
var ButtonChildPos = /** @class */ (function (_super) {
    __extends(ButtonChildPos, _super);
    function ButtonChildPos() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normal = cc.v2(0, 0);
        _this.pressed = cc.v2(0, 0);
        _this.hover = cc.v2(0, 0);
        _this.disabled = cc.v2(0, 0);
        return _this;
    }
    ButtonChildPos.prototype.onLoad = function () {
        this.node.on(ButtonHack_1.ButtonHackEvent.STATE_CHANGE, this.onStateChange, this);
    };
    ButtonChildPos.prototype.onStateChange = function (state) {
        var pos = cc.v2(0, 0);
        switch (state) {
            case ButtonHack_1.ButtonState.NORMAL:
                pos = this.normal;
                break;
            case ButtonHack_1.ButtonState.PRESSED:
                pos = this.pressed;
                break;
            case ButtonHack_1.ButtonState.HOVER:
                pos = this.hover;
                break;
            case ButtonHack_1.ButtonState.DISABLED:
                pos = this.disabled;
                break;
            default:
                break;
        }
        this.node.children.forEach(function (e) {
            e.setPosition(pos);
        });
    };
    __decorate([
        property({ tooltip: CC_DEV && "普通状态下按钮子节点坐标" })
    ], ButtonChildPos.prototype, "normal", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "按下状态下按钮子节点坐标" })
    ], ButtonChildPos.prototype, "pressed", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "悬停状态下按钮子节点坐标" })
    ], ButtonChildPos.prototype, "hover", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "禁用状态下按钮子节点坐标" })
    ], ButtonChildPos.prototype, "disabled", void 0);
    ButtonChildPos = __decorate([
        ccclass,
        requireComponent(cc.Button),
        menu("c2f/UI/ButtonChildPos")
    ], ButtonChildPos);
    return ButtonChildPos;
}(cc.Component));
exports.default = ButtonChildPos;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9idXR0b24vQnV0dG9uQ2hpbGRQb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXdFO0FBRWxFLElBQUEsS0FBZ0QsRUFBRSxDQUFDLFVBQVUsRUFBM0QsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBRXBFOztHQUVHO0FBSUg7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnQ0M7UUEvQjJELFlBQU0sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsV0FBSyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGNBQVEsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUE0QjVGLENBQUM7SUExQmEsK0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw0QkFBZSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTyxzQ0FBYSxHQUFyQixVQUFzQixLQUFrQjtRQUNwQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssd0JBQVcsQ0FBQyxNQUFNO2dCQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsTUFBTTtZQUNWLEtBQUssd0JBQVcsQ0FBQyxPQUFPO2dCQUNwQixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssd0JBQVcsQ0FBQyxLQUFLO2dCQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssd0JBQVcsQ0FBQyxRQUFRO2dCQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE5QmdEO1FBQWhELFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksY0FBYyxFQUFFLENBQUM7a0RBQXNDO0lBQ3JDO1FBQWhELFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksY0FBYyxFQUFFLENBQUM7bURBQXVDO0lBQ3RDO1FBQWhELFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksY0FBYyxFQUFFLENBQUM7aURBQXFDO0lBQ3BDO1FBQWhELFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksY0FBYyxFQUFFLENBQUM7b0RBQXdDO0lBSnZFLGNBQWM7UUFIbEMsT0FBTztRQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ1QsY0FBYyxDQWdDbEM7SUFBRCxxQkFBQztDQWhDRCxBQWdDQyxDQWhDMkMsRUFBRSxDQUFDLFNBQVMsR0FnQ3ZEO2tCQWhDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkhhY2tFdmVudCwgQnV0dG9uU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaGFjay9CdXR0b25IYWNrXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICog5qC55o2uYnV0dG9u57uE5Lu26L+H5rih54q25oCB77yM56e75Yqo5a2Q6IqC54K55Z2Q5qCHXG4gKi9cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5CdXR0b24pXG5AbWVudShcImMyZi9VSS9CdXR0b25DaGlsZFBvc1wiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uQ2hpbGRQb3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuaZrumAmueKtuaAgeS4i+aMiemSruWtkOiKgueCueWdkOagh1wiIH0pIHB1YmxpYyBub3JtYWw6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmjInkuIvnirbmgIHkuIvmjInpkq7lrZDoioLngrnlnZDmoIdcIiB9KSBwdWJsaWMgcHJlc3NlZDogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuaCrOWBnOeKtuaAgeS4i+aMiemSruWtkOiKgueCueWdkOagh1wiIH0pIHB1YmxpYyBob3ZlcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuemgeeUqOeKtuaAgeS4i+aMiemSruWtkOiKgueCueWdkOagh1wiIH0pIHB1YmxpYyBkaXNhYmxlZDogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJ1dHRvbkhhY2tFdmVudC5TVEFURV9DSEFOR0UsIHRoaXMub25TdGF0ZUNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN0YXRlQ2hhbmdlKHN0YXRlOiBCdXR0b25TdGF0ZSk6IHZvaWQge1xuICAgICAgICBsZXQgcG9zID0gY2MudjIoMCwgMCk7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgQnV0dG9uU3RhdGUuTk9STUFMOlxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMubm9ybWFsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCdXR0b25TdGF0ZS5QUkVTU0VEOlxuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMucHJlc3NlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQnV0dG9uU3RhdGUuSE9WRVI6XG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5ob3ZlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQnV0dG9uU3RhdGUuRElTQUJMRUQ6XG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19