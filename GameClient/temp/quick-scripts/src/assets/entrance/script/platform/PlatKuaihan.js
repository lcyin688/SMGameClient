"use strict";
cc._RF.push(module, '324d3S/IttLqLQOFFgUvUl0', 'PlatKuaihan');
// entrance/script/platform/PlatKuaihan.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatKuaihan = void 0;
var PlatNative_1 = require("./PlatNative");
var PlatDefine_1 = require("./PlatDefine");
var PlatKuaihan = /** @class */ (function (_super) {
    __extends(PlatKuaihan, _super);
    function PlatKuaihan() {
        var _this = _super.call(this) || this;
        _this.sdkMapping = null;
        _this.andClass = 'com.szGame.SZGProxy';
        return _this;
    }
    PlatKuaihan.prototype.noPlatLogined = function (accId, sdkFlag, payFlag) {
        var retData = {};
        retData.code = PlatDefine_1.PlatDef.RetCode.success;
        retData.userId = accId;
        retData.createTs = c2f.utils.date.getLocalTick();
        retData.userToken = 'token';
        this.onSdkLoginRet(retData);
        if (sdkFlag.length > 0) {
            this.platCfg.superFlag = sdkFlag;
        }
        if (payFlag.length > 0) {
            this.platCfg.payFlag = payFlag;
        }
    };
    /** 初始化SDK */
    PlatKuaihan.prototype.initSDK = function (param) {
        this.onSdkInitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 登录 */
    PlatKuaihan.prototype.login = function () {
        c2f.gui.hideLoading();
    };
    /** 登出 */
    PlatKuaihan.prototype.logout = function () {
        this.onSdkLogoutRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 退出游戏 */
    PlatKuaihan.prototype.quitGame = function () {
        this.onSdkExitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 显示开发者面板 */
    PlatKuaihan.prototype.showDevUI = function () {
        return true;
    };
    return PlatKuaihan;
}(PlatNative_1.PlatNative));
exports.PlatKuaihan = PlatKuaihan;

cc._RF.pop();