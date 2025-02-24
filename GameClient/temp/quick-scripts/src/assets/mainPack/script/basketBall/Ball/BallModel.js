"use strict";
cc._RF.push(module, '5795fv915NHiZN1XFp1Qv/i', 'BallModel');
// mainPack/script/basketBall/Ball/BallModel.ts

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
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallModel = /** @class */ (function (_super) {
    __extends(BallModel, _super);
    function BallModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Ball';
        return _this;
    }
    BallModel.prototype.initData = function (basket) {
        this.basket = basket;
        this.emitSpeed = 3000;
        this.gravity = 4500;
        this.scale = 0.6;
        this.showTime = 0.3;
        this.maxXSpeed = 5000;
    };
    BallModel = __decorate([
        ccclass
    ], BallModel);
    return BallModel;
}(UIModelBase_1.UIModelBase));
exports.default = BallModel;

cc._RF.pop();