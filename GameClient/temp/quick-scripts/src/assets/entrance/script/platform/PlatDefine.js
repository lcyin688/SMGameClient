"use strict";
cc._RF.push(module, 'ebc93t+tY1Lqo3ESZTD01tT', 'PlatDefine');
// entrance/script/platform/PlatDefine.ts

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
exports.PlatDef = void 0;
var PlatDef;
(function (PlatDef) {
    var RetCode;
    (function (RetCode) {
        /** 成功 */
        RetCode[RetCode["success"] = 0] = "success";
        /** 失败 */
        RetCode[RetCode["failed"] = 1] = "failed";
        /** 取消 */
        RetCode[RetCode["cancel"] = 2] = "cancel";
        /** 未知 */
        RetCode[RetCode["unknown"] = 3] = "unknown";
        /** 等待确认 */
        RetCode[RetCode["wait"] = 4] = "wait";
    })(RetCode = PlatDef.RetCode || (PlatDef.RetCode = {}));
    /** 平台账号登录信息 */
    var AccountLogin = /** @class */ (function () {
        function AccountLogin() {
        }
        return AccountLogin;
    }());
    PlatDef.AccountLogin = AccountLogin;
    /** 玩家用户信息 */
    var GameUserInfo = /** @class */ (function () {
        function GameUserInfo() {
        }
        return GameUserInfo;
    }());
    PlatDef.GameUserInfo = GameUserInfo;
    /** 提交玩家信息 */
    var SubmitData = /** @class */ (function (_super) {
        __extends(SubmitData, _super);
        function SubmitData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SubmitData;
    }(GameUserInfo));
    PlatDef.SubmitData = SubmitData;
    /** 充值扩展信息(透传信息) */
    var PayExtend = /** @class */ (function () {
        function PayExtend() {
        }
        return PayExtend;
    }());
    PlatDef.PayExtend = PayExtend;
    /** 充值信息 */
    var PayData = /** @class */ (function (_super) {
        __extends(PayData, _super);
        function PayData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PayData;
    }(GameUserInfo));
    PlatDef.PayData = PayData;
    /** 手机相关信息 */
    var PhoneInfo = /** @class */ (function () {
        function PhoneInfo() {
            this.imei = 'unknown';
            this.deviceId = 'unknown';
            this.mac = '00:00:00:00';
            this.resolution = "640x1136";
            this.os = "MacOS";
            this.osVersion = '1';
            this.model = 'MAC';
            this.orientation = 3;
            this.hollow = 0;
        }
        return PhoneInfo;
    }());
    PlatDef.PhoneInfo = PhoneInfo;
    /** 渠道配置信息 */
    var PlatCfg = /** @class */ (function () {
        function PlatCfg() {
        }
        return PlatCfg;
    }());
    PlatDef.PlatCfg = PlatCfg;
    /** 调用SDK接口函数名 */
    var SdkFuncName;
    (function (SdkFuncName) {
        SdkFuncName["sdkInit"] = "sdkInit";
        SdkFuncName["sdkLogin"] = "sdkLogin";
        SdkFuncName["sdkLogout"] = "sdkLogout";
        SdkFuncName["sdkSwitchAcc"] = "sdkSwitchAcc";
        SdkFuncName["sdkPay"] = "sdkPay";
        SdkFuncName["sdkQuitGame"] = "sdkQuitGame";
        SdkFuncName["sdkSubmit"] = "sdkSubmit";
        SdkFuncName["sdkAccCenter"] = "sdkAccCenter";
        SdkFuncName["sdkPrivacyPolicy"] = "sdkPrivacyPolicy";
        SdkFuncName["sdkShare"] = "sdkShare";
        SdkFuncName["sdkSetPayCbUrl"] = "sdkSetPayCbUrl";
        SdkFuncName["sdkGetOtherInfo"] = "sdkGetOtherInfo";
        SdkFuncName["sdkSubmitVipInfo"] = "sdkSubmitVipInfo";
        SdkFuncName["sdkToAppScore"] = "sdkToAppScore";
        SdkFuncName["getPlatCfg"] = "nativeGetPlatCfg";
        SdkFuncName["loadPhoneInfo"] = "nativeLoadPhoneInfo";
        SdkFuncName["copyToClipboard"] = "nativeCopyToClipboard";
        SdkFuncName["initBugly"] = "nativeInitBugly";
        SdkFuncName["buglySetUserId"] = "nativeBuglySetUserId";
        SdkFuncName["setAppVersion"] = "nativeSetAppVersion";
        SdkFuncName["commonFunc"] = "nativeCommonFunc";
    })(SdkFuncName = PlatDef.SdkFuncName || (PlatDef.SdkFuncName = {}));
    /** sdk回调函数名:原生回调CC需要用到 */
    var SdkCbFuncName;
    (function (SdkCbFuncName) {
        SdkCbFuncName["onSdkInit"] = "onSdkInit";
        SdkCbFuncName["onSdkExit"] = "onSdkExit";
        SdkCbFuncName["onSdkLogin"] = "onSdkLogin";
        SdkCbFuncName["onSdkLogout"] = "onSdkLogout";
        SdkCbFuncName["onSdkSwitchAcc"] = "onSdkSwitchAcc";
        SdkCbFuncName["onSdkPayResult"] = "onSdkPayResult";
        SdkCbFuncName["onSdkBind"] = "onSdkBind";
        SdkCbFuncName["onSdkUserInfoCmpl"] = "onSdkUserInfoCmpl";
        SdkCbFuncName["onSdkShared"] = "onSdkShared";
        SdkCbFuncName["onSdkAgreeProtocol"] = "onSdkAgreeProtocol";
        SdkCbFuncName["onPhoneInfoResult"] = "onPhoneInfoResult";
        SdkCbFuncName["onSdkSubmitVip"] = "onSdkSubmitVip";
    })(SdkCbFuncName = PlatDef.SdkCbFuncName || (PlatDef.SdkCbFuncName = {}));
    /** SDK回调事件 */
    var SdkCBEvent;
    (function (SdkCBEvent) {
        SdkCBEvent["onSdkInit"] = "onSdkInit";
        SdkCBEvent["onSdkLogin"] = "onSdkLogin";
        SdkCBEvent["onSdkBind"] = "onSdkBind";
        SdkCBEvent["onSdkVipSubmit"] = "onSdkVipSubmit";
    })(SdkCBEvent = PlatDef.SdkCBEvent || (PlatDef.SdkCBEvent = {}));
    var SdkSubmitEvent;
    (function (SdkSubmitEvent) {
        SdkSubmitEvent["createRole"] = "createRole";
        SdkSubmitEvent["login"] = "login";
        SdkSubmitEvent["logout"] = "logout";
        SdkSubmitEvent["exitGame"] = "exitGame";
        SdkSubmitEvent["levelUp"] = "levelUp";
        SdkSubmitEvent["pay"] = "pay";
        SdkSubmitEvent["selectSvr"] = "selectSvr";
        SdkSubmitEvent["changeName"] = "changeName";
        SdkSubmitEvent["loadHotRes"] = "loadHotRes";
        SdkSubmitEvent["resLoaded"] = "resLoaded";
        SdkSubmitEvent["guideComplete"] = "guideComplete";
        SdkSubmitEvent["firstCharge"] = "firstCharge";
        SdkSubmitEvent["joinSocity"] = "joinSocity";
        SdkSubmitEvent["custom"] = "custom";
    })(SdkSubmitEvent = PlatDef.SdkSubmitEvent || (PlatDef.SdkSubmitEvent = {}));
})(PlatDef = exports.PlatDef || (exports.PlatDef = {}));

cc._RF.pop();