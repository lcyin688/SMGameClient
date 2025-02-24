"use strict";
cc._RF.push(module, 'a5589bKevFC1pPKpkg3LGAN', 'PlatNoPlat');
// entrance/script/platform/PlatNoPlat.ts

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
exports.PlatNoPlat = void 0;
var PlatBase_1 = require("./PlatBase");
var PlatDefine_1 = require("./PlatDefine");
var PlatNoPlat = /** @class */ (function (_super) {
    __extends(PlatNoPlat, _super);
    function PlatNoPlat() {
        var _this = _super.call(this) || this;
        _this.initPlatCfg();
        _this.initPhoneInfo();
        return _this;
    }
    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    PlatNoPlat.prototype.loadLocalSetting = function () {
        _super.prototype.loadLocalSetting.call(this);
        this.appVersion = '0.01.01';
        this.resVersion = '1.01.01';
    };
    /** 渠道信息 */
    PlatNoPlat.prototype.initPlatCfg = function () {
        this.platCfg = new PlatDefine_1.PlatDef.PlatCfg();
        this.platCfg.showFPS = true;
    };
    /** 构建设备信息 */
    PlatNoPlat.prototype.initPhoneInfo = function () {
        this.phoneInfo = new PlatDefine_1.PlatDef.PhoneInfo();
    };
    /** 无平台(DEV)模式下登录成功 */
    PlatNoPlat.prototype.noPlatLogined = function (accId, sdkFlag, payFlag) {
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
    PlatNoPlat.prototype.initSDK = function (param) {
        this.onSdkInitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 登录 */
    PlatNoPlat.prototype.login = function () {
        c2f.gui.hideLoading();
        var EntranceUI = require('EntranceView').EntranceUI;
        c2f.gui.open(EntranceUI.NoPlatLogin, { loginCb: this.noPlatLogined.bind(this) });
    };
    /** 登出 */
    PlatNoPlat.prototype.logout = function () {
        this.onSdkLogoutRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 切换账号 */
    PlatNoPlat.prototype.switchAccount = function () {
        //TODO:
    };
    /** 退出游戏 */
    PlatNoPlat.prototype.quitGame = function () {
        this.onSdkExitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 提交用户信息 */
    PlatNoPlat.prototype.submitInfo = function (flag, ext) {
        c2f.log.logSDK('submitInfo:', flag);
    };
    /** 显示开发者面板 */
    PlatNoPlat.prototype.showDevUI = function () {
        return true;
    };
    return PlatNoPlat;
}(PlatBase_1.PlatBase));
exports.PlatNoPlat = PlatNoPlat;

cc._RF.pop();