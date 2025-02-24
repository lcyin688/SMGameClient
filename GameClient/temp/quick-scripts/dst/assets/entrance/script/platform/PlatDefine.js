
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdERlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBaUIsT0FBTyxDQXVOdkI7QUF2TkQsV0FBaUIsT0FBTztJQUVwQixJQUFZLE9BV1g7SUFYRCxXQUFZLE9BQU87UUFDZixTQUFTO1FBQ1QsMkNBQVcsQ0FBQTtRQUNYLFNBQVM7UUFDVCx5Q0FBVSxDQUFBO1FBQ1YsU0FBUztRQUNULHlDQUFVLENBQUE7UUFDVixTQUFTO1FBQ1QsMkNBQVcsQ0FBQTtRQUNYLFdBQVc7UUFDWCxxQ0FBUSxDQUFBO0lBQ1osQ0FBQyxFQVhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQVdsQjtJQUVELGVBQWU7SUFDZjtRQUFBO1FBbUJBLENBQUM7UUFBRCxtQkFBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksb0JBQVksZUFtQnhCLENBQUE7SUFFRCxhQUFhO0lBQ2I7UUFBQTtRQVlBLENBQUM7UUFBRCxtQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksb0JBQVksZUFZeEIsQ0FBQTtJQUVELGFBQWE7SUFDYjtRQUFnQyw4QkFBWTtRQUE1Qzs7UUFXQSxDQUFDO1FBQUQsaUJBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYK0IsWUFBWSxHQVczQztJQVhZLGtCQUFVLGFBV3RCLENBQUE7SUFFRCxtQkFBbUI7SUFDbkI7UUFBQTtRQVdBLENBQUM7UUFBRCxnQkFBQztJQUFELENBWEEsQUFXQyxJQUFBO0lBWFksaUJBQVMsWUFXckIsQ0FBQTtJQUVELFdBQVc7SUFDWDtRQUE2QiwyQkFBWTtRQUF6Qzs7UUFlQSxDQUFDO1FBQUQsY0FBQztJQUFELENBZkEsQUFlQyxDQWY0QixZQUFZLEdBZXhDO0lBZlksZUFBTyxVQWVuQixDQUFBO0lBRUQsYUFBYTtJQUNiO1FBVUk7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQXJCQSxBQXFCQyxJQUFBO0lBckJZLGlCQUFTLFlBcUJyQixDQUFBO0lBRUQsYUFBYTtJQUNiO1FBQUE7UUF5QkEsQ0FBQztRQUFELGNBQUM7SUFBRCxDQXpCQSxBQXlCQyxJQUFBO0lBekJZLGVBQU8sVUF5Qm5CLENBQUE7SUFFRCxpQkFBaUI7SUFDakIsSUFBWSxXQXNCWDtJQXRCRCxXQUFZLFdBQVc7UUFDbkIsa0NBQW1CLENBQUE7UUFDbkIsb0NBQXFCLENBQUE7UUFDckIsc0NBQXVCLENBQUE7UUFDdkIsNENBQTZCLENBQUE7UUFDN0IsZ0NBQWlCLENBQUE7UUFDakIsMENBQTJCLENBQUE7UUFDM0Isc0NBQXVCLENBQUE7UUFDdkIsNENBQTZCLENBQUE7UUFDN0Isb0RBQXFDLENBQUE7UUFDckMsb0NBQXFCLENBQUE7UUFDckIsZ0RBQWlDLENBQUE7UUFDakMsa0RBQW1DLENBQUE7UUFDbkMsb0RBQXFDLENBQUE7UUFDckMsOENBQStCLENBQUE7UUFDL0IsOENBQStCLENBQUE7UUFDL0Isb0RBQXFDLENBQUE7UUFDckMsd0RBQXlDLENBQUE7UUFDekMsNENBQTZCLENBQUE7UUFDN0Isc0RBQXVDLENBQUE7UUFDdkMsb0RBQXFDLENBQUE7UUFDckMsOENBQStCLENBQUE7SUFDbkMsQ0FBQyxFQXRCVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQXNCdEI7SUFFRCwwQkFBMEI7SUFDMUIsSUFBWSxhQWFYO0lBYkQsV0FBWSxhQUFhO1FBQ3JCLHdDQUF1QixDQUFBO1FBQ3ZCLHdDQUF1QixDQUFBO1FBQ3ZCLDBDQUF5QixDQUFBO1FBQ3pCLDRDQUEyQixDQUFBO1FBQzNCLGtEQUFpQyxDQUFBO1FBQ2pDLGtEQUFpQyxDQUFBO1FBQ2pDLHdDQUF1QixDQUFBO1FBQ3ZCLHdEQUF1QyxDQUFBO1FBQ3ZDLDRDQUEyQixDQUFBO1FBQzNCLDBEQUF5QyxDQUFBO1FBQ3pDLHdEQUF1QyxDQUFBO1FBQ3ZDLGtEQUFpQyxDQUFBO0lBQ3JDLENBQUMsRUFiVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQWF4QjtJQUVELGNBQWM7SUFDZCxJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDbEIscUNBQXVCLENBQUE7UUFDdkIsdUNBQXlCLENBQUE7UUFDekIscUNBQXVCLENBQUE7UUFDdkIsK0NBQWlDLENBQUE7SUFDckMsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0lBRUQsSUFBWSxjQWVYO0lBZkQsV0FBWSxjQUFjO1FBQ3RCLDJDQUF5QixDQUFBO1FBQ3pCLGlDQUFlLENBQUE7UUFDZixtQ0FBaUIsQ0FBQTtRQUNqQix1Q0FBcUIsQ0FBQTtRQUNyQixxQ0FBbUIsQ0FBQTtRQUNuQiw2QkFBVyxDQUFBO1FBQ1gseUNBQXVCLENBQUE7UUFDdkIsMkNBQXlCLENBQUE7UUFDekIsMkNBQXlCLENBQUE7UUFDekIseUNBQXVCLENBQUE7UUFDdkIsaURBQStCLENBQUE7UUFDL0IsNkNBQTJCLENBQUE7UUFDM0IsMkNBQXlCLENBQUE7UUFDekIsbUNBQWlCLENBQUE7SUFDckIsQ0FBQyxFQWZXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBZXpCO0FBQ0wsQ0FBQyxFQXZOZ0IsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBdU52QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgUGxhdERlZiB7XG5cbiAgICBleHBvcnQgZW51bSBSZXRDb2RlIHtcbiAgICAgICAgLyoqIOaIkOWKnyAqL1xuICAgICAgICBzdWNjZXNzID0gMCxcbiAgICAgICAgLyoqIOWksei0pSAqL1xuICAgICAgICBmYWlsZWQgPSAxLFxuICAgICAgICAvKiog5Y+W5raIICovXG4gICAgICAgIGNhbmNlbCA9IDIsXG4gICAgICAgIC8qKiDmnKrnn6UgKi9cbiAgICAgICAgdW5rbm93biA9IDMsXG4gICAgICAgIC8qKiDnrYnlvoXnoa7orqQgKi9cbiAgICAgICAgd2FpdCA9IDQsXG4gICAgfVxuXG4gICAgLyoqIOW5s+WPsOi0puWPt+eZu+W9leS/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBBY2NvdW50TG9naW4ge1xuICAgICAgICAvKiog55m75b2V6L+U5Zue5YC8ICovXG4gICAgICAgIGNvZGU6IFJldENvZGU7XG4gICAgICAgIC8qKiDkv6Hmga8gKi9cbiAgICAgICAgbXNnOiBzdHJpbmc7XG4gICAgICAgIC8qKiDnmbvlvZV0b2tlbijllK/kuIDmoIflv5cpICovXG4gICAgICAgIHVzZXJUb2tlbjogc3RyaW5nO1xuICAgICAgICAvKiog55So5oi35ZCN56ewICovXG4gICAgICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKiDnlKjmiLdJRCAqL1xuICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgLyoqIOa4oOmBk0lEICovXG4gICAgICAgIGNoYW5uZWxJZDogc3RyaW5nO1xuICAgICAgICAvKiog5piv5ZCm57uR5a6aKGZhY2Vib29rKSAqL1xuICAgICAgICBpc0JpbmQ6IEJvb2xlYW47XG4gICAgICAgIC8qKiDmianlsZXkv6Hmga8gKi9cbiAgICAgICAgZXh0SW5mbzogc3RyaW5nO1xuICAgICAgICAvKiog5pe26Ze05oizICovXG4gICAgICAgIGNyZWF0ZVRzOiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqIOeOqeWutueUqOaIt+S/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBHYW1lVXNlckluZm8ge1xuICAgICAgICByb2xlSWQ6IHN0cmluZztcbiAgICAgICAgcm9sZU5hbWU6IHN0cmluZztcbiAgICAgICAgcm9sZUx2OiBudW1iZXI7XG4gICAgICAgIHJvbGVWaXA6IG51bWJlcjtcbiAgICAgICAgbW9uZXk6IG51bWJlcjtcbiAgICAgICAgcG93ZXI6IG51bWJlcjtcbiAgICAgICAgYXJlYUlkOiBudW1iZXI7XG4gICAgICAgIHN2cklkOiBzdHJpbmc7XG4gICAgICAgIHN2ck5hbWU6IHN0cmluZztcbiAgICAgICAgdW5pb25OYW1lOiBzdHJpbmc7XG4gICAgICAgIGNyZWF0ZVRtOiBudW1iZXI7XG4gICAgfVxuXG4gICAgLyoqIOaPkOS6pOeOqeWutuS/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBTdWJtaXREYXRhIGV4dGVuZHMgR2FtZVVzZXJJbmZvIHtcbiAgICAgICAgLyoqIOW5s+WPsOi0puWPt0lEICovXG4gICAgICAgIGFjY291bnRJZDogc3RyaW5nO1xuICAgICAgICAvKiog5o+Q5Lqk57G75Z6LICovXG4gICAgICAgIHN1Ym1pdEZsYWc6IHN0cmluZztcbiAgICAgICAgLyoqIOaPkOS6pOS6i+S7tsK36Ieq5a6a5LmJ5LqL5Lu255qE5LiK5Lyg5qCH5b+XICovXG4gICAgICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgICAgICAvKiog6KGM5Li6S0VZICovXG4gICAgICAgIGFjdGlvbktleTogc3RyaW5nO1xuICAgICAgICAvKiog6KGM5Li65Y+C5pWwICovXG4gICAgICAgIGFjdGlvblZhbHVlOiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqIOWFheWAvOaJqeWxleS/oeaBryjpgI/kvKDkv6Hmga8pICovXG4gICAgZXhwb3J0IGNsYXNzIFBheUV4dGVuZCB7XG4gICAgICAgIC8qKiDnjqnlrrZJRCAqL1xuICAgICAgICBwbHJJZDogc3RyaW5nO1xuICAgICAgICAvKiog5Lqn5ZOBSUTvvIjlhYXlgLxJRO+8iSAqL1xuICAgICAgICBwcmRJZDogbnVtYmVyO1xuICAgICAgICAvKiog5YWF5YC86YeR6aKdICovXG4gICAgICAgIHByaWNlOiBudW1iZXI7XG4gICAgICAgIC8qKiDmuKDpgZPmoIflv5cgKi9cbiAgICAgICAgc2RrRmxhZzogc3RyaW5nO1xuICAgICAgICAvKiog5YWF5YC85pe26Ze0KOaXtumXtOaIsykgKi9cbiAgICAgICAgdHM6IG51bWJlcjtcbiAgICB9XG5cbiAgICAvKiog5YWF5YC85L+h5oGvICovXG4gICAgZXhwb3J0IGNsYXNzIFBheURhdGEgZXh0ZW5kcyBHYW1lVXNlckluZm8ge1xuICAgICAgICAvKiog5ZWG5ZOBSUQo5YWF5YC8SUQpICovXG4gICAgICAgIHByZElkOiBudW1iZXI7XG4gICAgICAgIC8qKiDllYblk4HlkI3np7AgKi9cbiAgICAgICAgcHJkTmFtZTogc3RyaW5nO1xuICAgICAgICAvKiog5ZWG5ZOB5o+P6L+wICovXG4gICAgICAgIHByZERlc2M6IHN0cmluZztcbiAgICAgICAgLyoqIOWVhuWfjklEKOiLueaenOWVhuWfji/osLfmrYzllYbln47lhYXlgLxJRCkgKi9cbiAgICAgICAgc3RvcmVJZDogc3RyaW5nO1xuICAgICAgICAvKiog5Y2V5Lu3KOWFgykqL1xuICAgICAgICBwcmljZTEwMDogbnVtYmVyO1xuICAgICAgICAvKiog5YWF5YC86YCP5Lyg5L+h5oGvICovXG4gICAgICAgIGV4dEluZm86IHN0cmluZztcbiAgICAgICAgLyoqIOWFheWAvOWbnuiwg+WcsOWdgCAqL1xuICAgICAgICBwYXlDYlVybDogc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKiDmiYvmnLrnm7jlhbPkv6Hmga8gKi9cbiAgICBleHBvcnQgY2xhc3MgUGhvbmVJbmZvIHtcbiAgICAgICAgaW1laTogc3RyaW5nO1xuICAgICAgICBkZXZpY2VJZDogc3RyaW5nO1xuICAgICAgICBtYWM6IHN0cmluZ1xuICAgICAgICByZXNvbHV0aW9uOiBzdHJpbmc7XG4gICAgICAgIG9zOiBzdHJpbmc7XG4gICAgICAgIG9zVmVyc2lvbjogc3RyaW5nO1xuICAgICAgICBtb2RlbDogc3RyaW5nO1xuICAgICAgICBvcmllbnRhdGlvbjogbnVtYmVyOyAvL2hvbWXplK7nmoTkvY3nva7vvIwzOmhvbWXplK7lnKjlj7PovrnvvIw0OmhvbWXplK7lnKjlt6bovrlcbiAgICAgICAgaG9sbG93OiBudW1iZXI7ICAgICAgLy/liJjmtbfnmoTpq5jluqbvvIzlpoLmnpzmsqHmnInliJjmtbfvvIxob2xsb3c9MFxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuaW1laSA9ICd1bmtub3duJztcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlSWQgPSAndW5rbm93bic7XG4gICAgICAgICAgICB0aGlzLm1hYyA9ICcwMDowMDowMDowMCc7XG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSBcIjY0MHgxMTM2XCI7XG4gICAgICAgICAgICB0aGlzLm9zID0gXCJNYWNPU1wiO1xuICAgICAgICAgICAgdGhpcy5vc1ZlcnNpb24gPSAnMSc7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gJ01BQyc7XG4gICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gMztcbiAgICAgICAgICAgIHRoaXMuaG9sbG93ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmuKDpgZPphY3nva7kv6Hmga8gKi9cbiAgICBleHBvcnQgY2xhc3MgUGxhdENmZyB7XG4gICAgICAgIC8qKiDmmL7npLpkZWJ1Z+S/oeaBryAqL1xuICAgICAgICBzaG93RlBTOiBCb29sZWFuO1xuICAgICAgICAvKiog572R57uc6YWN572uICovXG4gICAgICAgIG5ldENmZ1VybDogc3RyaW5nO1xuICAgICAgICAvKiog5o+Q5a6h5qOA5p+lICovXG4gICAgICAgIHRzQ2hlY2tVcmw6IHN0cmluZztcbiAgICAgICAgLyoqIOW5s+WPsOaWh+S7tuWQjSAqL1xuICAgICAgICBwbGF0RmlsZTogc3RyaW5nO1xuICAgICAgICAvKiog5rig6YGT5qCH5b+X77ya55m75b2V562J5Lya55So77yM5Yy65YiG5LiN5ZCM55qE55m75b2VICovXG4gICAgICAgIHNka0ZsYWc6IHN0cmluZztcbiAgICAgICAgLyoqIOW5s+WPsOWQjeensCAqL1xuICAgICAgICBwbGF0TmFtZTogc3RyaW5nO1xuICAgICAgICAvKiog5YWF5YC85qCH5b+XOiDlj6/og73kvJrmnInlpJrkuKrmoIflv5co6ams55Sy5YyFKSAqL1xuICAgICAgICBwYXlGbGFnOiBzdHJpbmc7XG4gICAgICAgIC8qKiDlhYXlgLzlm57osIPmoIflv5fvvJrlpoLml6DphY3nva7vvIzliJnkvb/nlKhzZGtGbGFnICovXG4gICAgICAgIHBheUNiRmxhZz86IHN0cmluZztcbiAgICAgICAgLyoqIOWFrOWRiuagh+W/lyAqL1xuICAgICAgICBub3RpY2VGbGFnOiBzdHJpbmc7XG4gICAgICAgIC8qKiDng63mm7TmlrDmlofku7blkI3np7AgKi9cbiAgICAgICAgcHJvak1hbmlmZXN0OiBzdHJpbmc7XG4gICAgICAgIC8qKiDmianlsZXkv6Hmga8o5pyJ5Lqb5rig6YGT5Lya6KaB5rGC5pu05aSa6YWN572uKSAqL1xuICAgICAgICBleHRlbmQ6IHN0cmluZztcbiAgICAgICAgLyoqIOi2hee6p+eZu+W9lcK36LSm5Y+355uu5qCH5bmz5Y+wICovXG4gICAgICAgIHN1cGVyRmxhZzogc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKiDosIPnlKhTREvmjqXlj6Plh73mlbDlkI0gKi9cbiAgICBleHBvcnQgZW51bSBTZGtGdW5jTmFtZSB7XG4gICAgICAgIHNka0luaXQgPSAnc2RrSW5pdCcsXG4gICAgICAgIHNka0xvZ2luID0gJ3Nka0xvZ2luJyxcbiAgICAgICAgc2RrTG9nb3V0ID0gJ3Nka0xvZ291dCcsXG4gICAgICAgIHNka1N3aXRjaEFjYyA9ICdzZGtTd2l0Y2hBY2MnLFxuICAgICAgICBzZGtQYXkgPSAnc2RrUGF5JyxcbiAgICAgICAgc2RrUXVpdEdhbWUgPSAnc2RrUXVpdEdhbWUnLFxuICAgICAgICBzZGtTdWJtaXQgPSAnc2RrU3VibWl0JyxcbiAgICAgICAgc2RrQWNjQ2VudGVyID0gJ3Nka0FjY0NlbnRlcicsXG4gICAgICAgIHNka1ByaXZhY3lQb2xpY3kgPSAnc2RrUHJpdmFjeVBvbGljeScsXG4gICAgICAgIHNka1NoYXJlID0gJ3Nka1NoYXJlJyxcbiAgICAgICAgc2RrU2V0UGF5Q2JVcmwgPSAnc2RrU2V0UGF5Q2JVcmwnLFxuICAgICAgICBzZGtHZXRPdGhlckluZm8gPSAnc2RrR2V0T3RoZXJJbmZvJyxcbiAgICAgICAgc2RrU3VibWl0VmlwSW5mbyA9ICdzZGtTdWJtaXRWaXBJbmZvJyxcbiAgICAgICAgc2RrVG9BcHBTY29yZSA9ICdzZGtUb0FwcFNjb3JlJyxcbiAgICAgICAgZ2V0UGxhdENmZyA9ICduYXRpdmVHZXRQbGF0Q2ZnJyxcbiAgICAgICAgbG9hZFBob25lSW5mbyA9ICduYXRpdmVMb2FkUGhvbmVJbmZvJyxcbiAgICAgICAgY29weVRvQ2xpcGJvYXJkID0gJ25hdGl2ZUNvcHlUb0NsaXBib2FyZCcsXG4gICAgICAgIGluaXRCdWdseSA9ICduYXRpdmVJbml0QnVnbHknLFxuICAgICAgICBidWdseVNldFVzZXJJZCA9ICduYXRpdmVCdWdseVNldFVzZXJJZCcsXG4gICAgICAgIHNldEFwcFZlcnNpb24gPSAnbmF0aXZlU2V0QXBwVmVyc2lvbicsXG4gICAgICAgIGNvbW1vbkZ1bmMgPSAnbmF0aXZlQ29tbW9uRnVuYycsXG4gICAgfVxuXG4gICAgLyoqIHNka+Wbnuiwg+WHveaVsOWQjTrljp/nlJ/lm57osINDQ+mcgOimgeeUqOWIsCAqL1xuICAgIGV4cG9ydCBlbnVtIFNka0NiRnVuY05hbWUge1xuICAgICAgICBvblNka0luaXQgPSAnb25TZGtJbml0JyxcbiAgICAgICAgb25TZGtFeGl0ID0gJ29uU2RrRXhpdCcsXG4gICAgICAgIG9uU2RrTG9naW4gPSAnb25TZGtMb2dpbicsXG4gICAgICAgIG9uU2RrTG9nb3V0ID0gJ29uU2RrTG9nb3V0JyxcbiAgICAgICAgb25TZGtTd2l0Y2hBY2MgPSAnb25TZGtTd2l0Y2hBY2MnLFxuICAgICAgICBvblNka1BheVJlc3VsdCA9ICdvblNka1BheVJlc3VsdCcsXG4gICAgICAgIG9uU2RrQmluZCA9ICdvblNka0JpbmQnLFxuICAgICAgICBvblNka1VzZXJJbmZvQ21wbCA9ICdvblNka1VzZXJJbmZvQ21wbCcsXG4gICAgICAgIG9uU2RrU2hhcmVkID0gJ29uU2RrU2hhcmVkJyxcbiAgICAgICAgb25TZGtBZ3JlZVByb3RvY29sID0gJ29uU2RrQWdyZWVQcm90b2NvbCcsXG4gICAgICAgIG9uUGhvbmVJbmZvUmVzdWx0ID0gJ29uUGhvbmVJbmZvUmVzdWx0JyxcbiAgICAgICAgb25TZGtTdWJtaXRWaXAgPSAnb25TZGtTdWJtaXRWaXAnLFxuICAgIH1cblxuICAgIC8qKiBTREvlm57osIPkuovku7YgKi9cbiAgICBleHBvcnQgZW51bSBTZGtDQkV2ZW50IHtcbiAgICAgICAgb25TZGtJbml0ID0gJ29uU2RrSW5pdCcsXG4gICAgICAgIG9uU2RrTG9naW4gPSAnb25TZGtMb2dpbicsXG4gICAgICAgIG9uU2RrQmluZCA9ICdvblNka0JpbmQnLFxuICAgICAgICBvblNka1ZpcFN1Ym1pdCA9ICdvblNka1ZpcFN1Ym1pdCcsXG4gICAgfVxuXG4gICAgZXhwb3J0IGVudW0gU2RrU3VibWl0RXZlbnQge1xuICAgICAgICBjcmVhdGVSb2xlID0gJ2NyZWF0ZVJvbGUnLFxuICAgICAgICBsb2dpbiA9ICdsb2dpbicsXG4gICAgICAgIGxvZ291dCA9ICdsb2dvdXQnLFxuICAgICAgICBleGl0R2FtZSA9ICdleGl0R2FtZScsXG4gICAgICAgIGxldmVsVXAgPSAnbGV2ZWxVcCcsXG4gICAgICAgIHBheSA9ICdwYXknLFxuICAgICAgICBzZWxlY3RTdnIgPSAnc2VsZWN0U3ZyJyxcbiAgICAgICAgY2hhbmdlTmFtZSA9ICdjaGFuZ2VOYW1lJyxcbiAgICAgICAgbG9hZEhvdFJlcyA9ICdsb2FkSG90UmVzJyxcbiAgICAgICAgcmVzTG9hZGVkID0gJ3Jlc0xvYWRlZCcsXG4gICAgICAgIGd1aWRlQ29tcGxldGUgPSAnZ3VpZGVDb21wbGV0ZScsXG4gICAgICAgIGZpcnN0Q2hhcmdlID0gJ2ZpcnN0Q2hhcmdlJyxcbiAgICAgICAgam9pblNvY2l0eSA9ICdqb2luU29jaXR5JyxcbiAgICAgICAgY3VzdG9tID0gJ2N1c3RvbScsXG4gICAgfVxufSJdfQ==