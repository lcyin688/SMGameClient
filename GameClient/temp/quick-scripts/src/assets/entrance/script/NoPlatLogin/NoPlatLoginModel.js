"use strict";
cc._RF.push(module, '9fd390lsLJDcYoMzX8/nyoU', 'NoPlatLoginModel');
// entrance/script/NoPlatLogin/NoPlatLoginModel.ts

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
var GameConsts_1 = require("../../../Script/game/GameConsts");
var C2FEnum_1 = require("../../../c2f-framework/define/C2FEnum");
var UIModelBase_1 = require("./../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NoPlatLoginModel = /** @class */ (function (_super) {
    __extends(NoPlatLoginModel, _super);
    function NoPlatLoginModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'NoPlatLogin';
        return _this;
    }
    Object.defineProperty(NoPlatLoginModel.prototype, "accountId", {
        get: function () {
            return this._accountId;
        },
        set: function (v) {
            this._accountId = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoPlatLoginModel.prototype, "sdkFlag", {
        get: function () {
            return this._sdkFlag;
        },
        set: function (v) {
            this._sdkFlag = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoPlatLoginModel.prototype, "payFlag", {
        get: function () {
            return this._payFlag;
        },
        set: function (v) {
            this._payFlag = v;
        },
        enumerable: false,
        configurable: true
    });
    NoPlatLoginModel.prototype.loadLastAccId = function () {
        var lastId = c2f.storage.getPlainItem(GameConsts_1.GameConsts.NoPlatLastAccId, '');
        if (lastId.length > 0) {
            this.accountId = lastId;
            this.emit(C2FEnum_1.C2FEnum.Event.ChangeViewValue, 'userIdEditBox', function (userIdEditBox) {
                userIdEditBox.string = lastId;
            });
        }
    };
    NoPlatLoginModel.prototype.saveLoginInfo = function () {
        c2f.storage.setPlainItem(GameConsts_1.GameConsts.NoPlatLastAccId, this.accountId);
    };
    NoPlatLoginModel = __decorate([
        ccclass
    ], NoPlatLoginModel);
    return NoPlatLoginModel;
}(UIModelBase_1.UIModelBase));
exports.default = NoPlatLoginModel;

cc._RF.pop();