"use strict";
cc._RF.push(module, '9b27b4B2vNGP6gq+OalkhJu', 'Physics2048MainModel');
// mainPack/script/physics2048/Physics2048Main/Physics2048MainModel.ts

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
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048MainModel = /** @class */ (function (_super) {
    __extends(Physics2048MainModel, _super);
    function Physics2048MainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_Physics2048Main';
        /**当前最大达到的档位 */
        _this.curHistoryMaxLv = 0;
        _this.curMaxCount = 0;
        return _this;
    }
    Physics2048MainModel.prototype.initData = function () {
        this.totalScore = 0;
        this.curHistoryMaxLv = c2f.storage.getNumber(GameConsts_1.GameConsts.StorageKey.curHistory2048MaxLv);
        this.visibleSize = cc.view.getVisibleSize();
    };
    Physics2048MainModel.prototype.rodomOneIndex = function () {
        var radomNum = c2f.random.getRandomInt(0, 11);
        var index = 0;
        if (radomNum < 3) {
            index = 0;
        }
        else if (radomNum < 5) {
            index = 1;
        }
        else if (radomNum < 10) {
            index = 2;
        }
        else {
            index = 3;
        }
        return index;
    };
    Physics2048MainModel = __decorate([
        ccclass
    ], Physics2048MainModel);
    return Physics2048MainModel;
}(UIModelBase_1.UIModelBase));
exports.default = Physics2048MainModel;

cc._RF.pop();