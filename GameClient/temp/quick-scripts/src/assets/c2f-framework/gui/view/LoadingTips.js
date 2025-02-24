"use strict";
cc._RF.push(module, '26c3ar7sklOKojlqGeXtPBt', 'LoadingTips');
// c2f-framework/gui/view/LoadingTips.ts

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
exports.LoadingTips = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 加载延时提示动画 */
var LoadingTips = /** @class */ (function (_super) {
    __extends(LoadingTips, _super);
    function LoadingTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.angle = 0;
        return _this;
    }
    LoadingTips.prototype.update = function (dt) {
        this.angle += dt * 220;
        this.loading.angle = this.angle % 360;
        if (this.angle > 360) {
            this.angle -= 360;
        }
    };
    __decorate([
        property(cc.Node)
    ], LoadingTips.prototype, "loading", void 0);
    LoadingTips = __decorate([
        ccclass
    ], LoadingTips);
    return LoadingTips;
}(cc.Component));
exports.LoadingTips = LoadingTips;

cc._RF.pop();