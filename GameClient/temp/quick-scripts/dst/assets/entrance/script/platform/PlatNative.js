
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5416aCAnlDyqk+It7OOGhe', 'PlatNative');
// entrance/script/platform/PlatNative.ts

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
exports.PlatNative = void 0;
var GameConsts_1 = require("../../../Script/game/GameConsts");
var PlatBase_1 = require("./PlatBase");
var PlatDefine_1 = require("./PlatDefine");
var PlatNative = /** @class */ (function (_super) {
    __extends(PlatNative, _super);
    function PlatNative() {
        var _this = _super.call(this) || this;
        _this.sdkMapping = null;
        _this.initSdkFunc();
        return _this;
    }
    /** 初始接口定义 */
    PlatNative.prototype.initSdkFunc = function () {
        this.sdkFunc = {};
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkInit] = PlatDefine_1.PlatDef.SdkFuncName.sdkInit;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkLogin] = PlatDefine_1.PlatDef.SdkFuncName.sdkLogin;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkLogout] = PlatDefine_1.PlatDef.SdkFuncName.sdkLogout;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSwitchAcc] = PlatDefine_1.PlatDef.SdkFuncName.sdkSwitchAcc;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkQuitGame] = PlatDefine_1.PlatDef.SdkFuncName.sdkQuitGame;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSubmit] = PlatDefine_1.PlatDef.SdkFuncName.sdkSubmit;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkPay] = PlatDefine_1.PlatDef.SdkFuncName.sdkPay;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkAccCenter] = PlatDefine_1.PlatDef.SdkFuncName.sdkAccCenter;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkPrivacyPolicy] = PlatDefine_1.PlatDef.SdkFuncName.sdkPrivacyPolicy;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkShare] = PlatDefine_1.PlatDef.SdkFuncName.sdkShare;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.getPlatCfg] = PlatDefine_1.PlatDef.SdkFuncName.getPlatCfg;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.loadPhoneInfo] = PlatDefine_1.PlatDef.SdkFuncName.loadPhoneInfo;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.copyToClipboard] = PlatDefine_1.PlatDef.SdkFuncName.copyToClipboard;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.initBugly] = PlatDefine_1.PlatDef.SdkFuncName.initBugly;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.buglySetUserId] = PlatDefine_1.PlatDef.SdkFuncName.buglySetUserId;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.setAppVersion] = PlatDefine_1.PlatDef.SdkFuncName.setAppVersion;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSubmitVipInfo] = PlatDefine_1.PlatDef.SdkFuncName.sdkSubmitVipInfo;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkToAppScore] = PlatDefine_1.PlatDef.SdkFuncName.sdkToAppScore;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.commonFunc] = PlatDefine_1.PlatDef.SdkFuncName.commonFunc;
        this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkGetOtherInfo] = PlatDefine_1.PlatDef.SdkFuncName.sdkGetOtherInfo;
    };
    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    PlatNative.prototype.loadLocalSetting = function () {
        _super.prototype.loadLocalSetting.call(this);
        this.supportQuitGame = c2f.storage.getPlainBool(GameConsts_1.GameConsts.PlatSupportQuit, false);
        this.supportAccountCenter = c2f.storage.getPlainBool(GameConsts_1.GameConsts.PlatSupportAccCenter, false);
        this.supportSwitchAcc = c2f.storage.getPlainBool(GameConsts_1.GameConsts.PlatSupportAccSwitch, false);
        this.appVersion = c2f.storage.getPlainItem(GameConsts_1.GameConsts.AppVersion, '5.01.01');
        this.resVersion = c2f.storage.getPlainItem(GameConsts_1.GameConsts.ResVersion, '0.01.01');
    };
    /** 设置原生访问接口名称 */
    PlatNative.prototype.setFuncNames = function (newNames) {
        for (var key in newNames) {
            if (this.sdkFunc.hasOwnProperty(key)) {
                this.sdkFunc[key] = newNames[key];
            }
        }
    };
    /** 获得平台配置信息 */
    PlatNative.prototype.loadPlatCfg = function () {
        var cfg = this.getPlatCfg();
        if (cfg) {
            try {
                this.platCfg = JSON.parse(cfg);
            }
            catch (error) {
                //TODO:解密配置
            }
        }
    };
    /** 获得渠道配置 */
    PlatNative.prototype.getPlatCfg = function () {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.getPlatCfg];
        var cfg = this.callNativeMethod(funcName, "(Ljava/lang/String;)Ljava/lang/String;", "");
        c2f.log.logConfig(funcName + " ==>>:" + cfg);
        return cfg;
    };
    /** 获得手机信息 */
    PlatNative.prototype.loadPhoneInfo = function () {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onPhoneInfoResult, this.onLoadPhoneRet.bind(this));
        //调佣
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.loadPhoneInfo];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 拷贝到剪贴板 */
    PlatNative.prototype.copyToClipboard = function (txt) {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.copyToClipboard];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", txt);
    };
    /** 初始化SDK */
    PlatNative.prototype.initSDK = function (param) {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkInit, this.onSdkInitRet.bind(this));
        //调用
        var strParam = this.getParamString(param);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkInit];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 登录 */
    PlatNative.prototype.login = function () {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkLogin, this.onSdkLoginRet.bind(this));
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkLogout, this.onSdkLogoutRet.bind(this));
        //调用
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkLogin];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 登出 */
    PlatNative.prototype.logout = function () {
        //调用
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkLogout];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 切换账号 */
    PlatNative.prototype.switchAccount = function () {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSwitchAcc];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 支付 */
    PlatNative.prototype.pay = function (rchgCfg, ts, payCbUrl) {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkPayResult, this.onSdkPayRet.bind(this));
        var info = JSON.parse(JSON.stringify(this.playerInfo));
        //透传信息
        var extendInfo = {};
        extendInfo.plrId = info.roleId;
        extendInfo.prdId = rchgCfg.Id;
        extendInfo.price = rchgCfg.Price;
        extendInfo.sdkFlag = this.platCfg.sdkFlag;
        extendInfo.ts = ts;
        //商品信息补充
        info.prdId = rchgCfg.Id;
        info.prdName = rchgCfg.Name;
        info.prdDesc = rchgCfg.Des;
        info.storeId = rchgCfg.StoreId;
        info.price100 = rchgCfg.Price;
        info.svrId = "" + (this.playerInfo.areaId * 1000 + this.playerInfo.svrId);
        info.svrName = this.playerInfo.areaId + "-" + this.playerInfo.svrName;
        info.extInfo = JSON.stringify(extendInfo);
        info.payCbUrl = payCbUrl;
        var strParam = this.getParamString(info);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkPay];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 退出游戏 */
    PlatNative.prototype.quitGame = function () {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkExit, this.onSdkExitRet.bind(this));
        //调用
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkQuitGame];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 用户中心 */
    PlatNative.prototype.openAccountCenter = function () {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkAccCenter];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    };
    /** 提交用户信息 */
    PlatNative.prototype.submitInfo = function (flag, ext) {
        var info = JSON.parse(JSON.stringify(this.playerInfo));
        info.submitFlag = flag;
        info.svrId = "" + (this.playerInfo.areaId * 1000 + this.playerInfo.svrId);
        info.svrName = this.playerInfo.areaId + "-" + this.playerInfo.svrName;
        info.eventName = '';
        var strParam = this.getParamString(info);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSubmit];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 展示用户协议 */
    PlatNative.prototype.showPrivacyPolicy = function (txt) {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkPrivacyPolicy];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", txt);
    };
    /** 分享 */
    PlatNative.prototype.share = function () {
        var prdInfo = {};
        prdInfo.svrId = "" + (this.playerInfo.areaId * 1000 + this.playerInfo.svrId);
        prdInfo.uid = this.playerInfo.roleId;
        var strParam = this.getParamString(prdInfo);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkShare];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 提交VIP信息 */
    PlatNative.prototype.sumbitVipInfo = function () {
        //添加回调
        this.registerNativeCbs(PlatDefine_1.PlatDef.SdkCbFuncName.onSdkSubmitVip, this.onSdkSubmitVipRet.bind(this));
        //上传信息
        var strParam = this.getParamString(this.playerInfo);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkSubmitVipInfo];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 前往应用内评分 */
    PlatNative.prototype.toAppStroeScore = function () {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkToAppScore];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", '');
    };
    /** 初始化bugly */
    PlatNative.prototype.initBugly = function () {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.initBugly];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", '');
    };
    /** 设置bugly userId */
    PlatNative.prototype.buglySetUserId = function (flag) {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.buglySetUserId];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
    };
    /** bugly 版本*/
    PlatNative.prototype.setAppVersion = function (flag) {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.setAppVersion];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
    };
    /** 通用函数接口 */
    PlatNative.prototype.commonFunc = function (param) {
        var strParam = this.getParamString(param);
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.commonFunc];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    };
    /** 其他扩展接口 */
    PlatNative.prototype.getOtherByFlag = function (flag) {
        var funcName = this.sdkFunc[PlatDefine_1.PlatDef.SdkFuncName.sdkGetOtherInfo];
        var retStr = this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
        return retStr;
    };
    /** 调用平台方法 */
    PlatNative.prototype.callNativeMethod = function (methodName, sig, params) {
        var result = null;
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            result = jsb.reflection.callStaticMethod(this.andClass, methodName, sig, params);
        }
        else if (cc.sys.os === cc.sys.OS_IOS) {
            //接口名称修改
            var iosClassName = this.iosClass;
            var iosFunc2Name = methodName;
            if (this.sdkMapping) {
                if (this.sdkMapping.IOSClass) {
                    iosClassName = this.sdkMapping.IOSClass;
                }
                if (this.sdkMapping[methodName]) {
                    iosFunc2Name = this.sdkMapping[methodName];
                }
                if (params && params != "") {
                    //TODO:参数加密
                    var encodePa = "";
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name + ":", encodePa);
                }
                else {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name);
                }
                if (result && typeof result == 'string') {
                    //TODO:返回结果解密
                }
            }
            else {
                if (params && params != "") {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name + ":", params);
                }
                else {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name);
                }
            }
        }
        return result;
    };
    /** 注册原生回调CC */
    PlatNative.prototype.registerNativeCbs = function (funcName, func) {
        //加入回调列表
        cc.nativeSDK = cc.nativeSDK || {};
        if (!cc.nativeSDK.cbFuncs) {
            cc.nativeSDK.cbFuncs = {};
        }
        cc.nativeSDK.cbFuncs[funcName] = func;
        //原生到CC全局函数
        if (!cc.nativeSDK.native2CCB) {
            cc.nativeSDK.native2CCB = function (funcN, params) {
                if (cc.nativeSDK.cbFuncs.hasOwnProperty(funcN)) {
                    var dstFunc = cc.nativeSDK.cbFuncs[funcN];
                    dstFunc && dstFunc(params);
                }
            };
        }
    };
    return PlatNative;
}(PlatBase_1.PlatBase));
exports.PlatNative = PlatNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdE5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTZEO0FBQzdELHVDQUFzQztBQUN0QywyQ0FBdUM7QUFFdkM7SUFBZ0MsOEJBQVE7SUFXcEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O0lBQ3ZCLENBQUM7SUFFRCxhQUFhO0lBQ0gsZ0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLFNB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dCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHNcIjtcbmltcG9ydCB7IFBsYXRCYXNlIH0gZnJvbSBcIi4vUGxhdEJhc2VcIjtcbmltcG9ydCB7IFBsYXREZWYgfSBmcm9tIFwiLi9QbGF0RGVmaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF0TmF0aXZlIGV4dGVuZHMgUGxhdEJhc2Uge1xuXG4gICAgLyoqIGFuZHJvaWTmjqXlj6PnsbsgKi9cbiAgICBwcm90ZWN0ZWQgYW5kQ2xhc3M6IHN0cmluZztcbiAgICAvKiogaW9z5o6l5Y+j57G7ICovXG4gICAgcHJvdGVjdGVkIGlvc0NsYXNzOiBzdHJpbmc7XG4gICAgLyoqIOWOn+eUn+iwg+eUqOaOpeWPo+aYoOWwhOihqCAqL1xuICAgIHByb3RlY3RlZCBzZGtNYXBwaW5nOiBhbnk7XG4gICAgLyoqIOaOpeWPo+WHveaVsOWIl+ihqCAqL1xuICAgIHByaXZhdGUgc2RrRnVuYzogT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2RrTWFwcGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdFNka0Z1bmMoKTtcbiAgICB9XG5cbiAgICAvKiog5Yid5aeL5o6l5Y+j5a6a5LmJICovXG4gICAgcHJvdGVjdGVkIGluaXRTZGtGdW5jKCkge1xuICAgICAgICB0aGlzLnNka0Z1bmMgPSB7fTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrSW5pdF0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0luaXQ7XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0xvZ2luXSA9IFBsYXREZWYuU2RrRnVuY05hbWUuc2RrTG9naW47XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0xvZ291dF0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0xvZ291dDtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrU3dpdGNoQWNjXSA9IFBsYXREZWYuU2RrRnVuY05hbWUuc2RrU3dpdGNoQWNjO1xuICAgICAgICB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtRdWl0R2FtZV0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNka1F1aXRHYW1lO1xuICAgICAgICB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtTdWJtaXRdID0gUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtTdWJtaXQ7XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka1BheV0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNka1BheTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrQWNjQ2VudGVyXSA9IFBsYXREZWYuU2RrRnVuY05hbWUuc2RrQWNjQ2VudGVyO1xuICAgICAgICB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtQcml2YWN5UG9saWN5XSA9IFBsYXREZWYuU2RrRnVuY05hbWUuc2RrUHJpdmFjeVBvbGljeTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrU2hhcmVdID0gUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtTaGFyZTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuZ2V0UGxhdENmZ10gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLmdldFBsYXRDZmc7XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLmxvYWRQaG9uZUluZm9dID0gUGxhdERlZi5TZGtGdW5jTmFtZS5sb2FkUGhvbmVJbmZvO1xuICAgICAgICB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5jb3B5VG9DbGlwYm9hcmRdID0gUGxhdERlZi5TZGtGdW5jTmFtZS5jb3B5VG9DbGlwYm9hcmQ7XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLmluaXRCdWdseV0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLmluaXRCdWdseTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuYnVnbHlTZXRVc2VySWRdID0gUGxhdERlZi5TZGtGdW5jTmFtZS5idWdseVNldFVzZXJJZDtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2V0QXBwVmVyc2lvbl0gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNldEFwcFZlcnNpb247XG5cblxuXG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka1N1Ym1pdFZpcEluZm9dID0gUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtTdWJtaXRWaXBJbmZvO1xuICAgICAgICB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtUb0FwcFNjb3JlXSA9IFBsYXREZWYuU2RrRnVuY05hbWUuc2RrVG9BcHBTY29yZTtcbiAgICAgICAgdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuY29tbW9uRnVuY10gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLmNvbW1vbkZ1bmM7XG4gICAgICAgIHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0dldE90aGVySW5mb10gPSBQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0dldE90aGVySW5mbztcbiAgICB9XG5cbiAgICAvKiog5pys5Zyw6K6+572uOuWOn+eUn+aYr+WOn+eUn+S7o+eggeS4reiuvue9ru+8jHdlYumAmui/h+mTvuaOpeino+aekOiuvue9riAqL1xuICAgIHByb3RlY3RlZCBsb2FkTG9jYWxTZXR0aW5nKCkge1xuICAgICAgICBzdXBlci5sb2FkTG9jYWxTZXR0aW5nKCk7XG4gICAgICAgIHRoaXMuc3VwcG9ydFF1aXRHYW1lID0gYzJmLnN0b3JhZ2UuZ2V0UGxhaW5Cb29sKEdhbWVDb25zdHMuUGxhdFN1cHBvcnRRdWl0LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydEFjY291bnRDZW50ZXIgPSBjMmYuc3RvcmFnZS5nZXRQbGFpbkJvb2woR2FtZUNvbnN0cy5QbGF0U3VwcG9ydEFjY0NlbnRlciwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnRTd2l0Y2hBY2MgPSBjMmYuc3RvcmFnZS5nZXRQbGFpbkJvb2woR2FtZUNvbnN0cy5QbGF0U3VwcG9ydEFjY1N3aXRjaCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYXBwVmVyc2lvbiA9IGMyZi5zdG9yYWdlLmdldFBsYWluSXRlbShHYW1lQ29uc3RzLkFwcFZlcnNpb24sICc1LjAxLjAxJyk7XG4gICAgICAgIHRoaXMucmVzVmVyc2lvbiA9IGMyZi5zdG9yYWdlLmdldFBsYWluSXRlbShHYW1lQ29uc3RzLlJlc1ZlcnNpb24sICcwLjAxLjAxJyk7XG4gICAgfVxuXG4gICAgLyoqIOiuvue9ruWOn+eUn+iuv+mXruaOpeWPo+WQjeensCAqL1xuICAgIHB1YmxpYyBzZXRGdW5jTmFtZXMobmV3TmFtZXM6IE9iamVjdCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmV3TmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNka0Z1bmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2RrRnVuY1trZXldID0gbmV3TmFtZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflvpflubPlj7DphY3nva7kv6Hmga8gKi9cbiAgICBwdWJsaWMgbG9hZFBsYXRDZmcoKSB7XG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmdldFBsYXRDZmcoKTtcbiAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRDZmcgPSBKU09OLnBhcnNlKGNmZyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vVE9ETzrop6Plr4bphY3nva5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflvpfmuKDpgZPphY3nva4gKi9cbiAgICBwcml2YXRlIGdldFBsYXRDZmcoKSB7XG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLmdldFBsYXRDZmddO1xuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7XCIsIFwiXCIpO1xuICAgICAgICBjMmYubG9nLmxvZ0NvbmZpZyhgJHtmdW5jTmFtZX0gPT0+PjpgICsgY2ZnKTtcbiAgICAgICAgcmV0dXJuIGNmZztcbiAgICB9XG5cbiAgICAvKiog6I635b6X5omL5py65L+h5oGvICovXG4gICAgcHVibGljIGxvYWRQaG9uZUluZm8oKSB7XG4gICAgICAgIC8v5re75Yqg5Zue6LCDXG4gICAgICAgIHRoaXMucmVnaXN0ZXJOYXRpdmVDYnMoUGxhdERlZi5TZGtDYkZ1bmNOYW1lLm9uUGhvbmVJbmZvUmVzdWx0LCB0aGlzLm9uTG9hZFBob25lUmV0LmJpbmQodGhpcykpO1xuICAgICAgICAvL+iwg+S9o1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5sb2FkUGhvbmVJbmZvXTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIlwiKTtcbiAgICB9XG5cbiAgICAvKiog5ou36LSd5Yiw5Ymq6LS05p2/ICovXG4gICAgcHVibGljIGNvcHlUb0NsaXBib2FyZCh0eHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5jb3B5VG9DbGlwYm9hcmRdO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHR4dCk7XG4gICAgfVxuXG4gICAgLyoqIOWIneWni+WMllNESyAqL1xuICAgIHB1YmxpYyBpbml0U0RLKHBhcmFtOiBhbnkpIHtcbiAgICAgICAgLy/mt7vliqDlm57osINcbiAgICAgICAgdGhpcy5yZWdpc3Rlck5hdGl2ZUNicyhQbGF0RGVmLlNka0NiRnVuY05hbWUub25TZGtJbml0LCB0aGlzLm9uU2RrSW5pdFJldC5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy/osIPnlKhcbiAgICAgICAgbGV0IHN0clBhcmFtID0gdGhpcy5nZXRQYXJhbVN0cmluZyhwYXJhbSk7XG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0luaXRdO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHN0clBhcmFtKTtcbiAgICB9XG5cbiAgICAvKiog55m75b2VICovXG4gICAgcHVibGljIGxvZ2luKCkge1xuICAgICAgICAvL+a3u+WKoOWbnuiwg1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTmF0aXZlQ2JzKFBsYXREZWYuU2RrQ2JGdW5jTmFtZS5vblNka0xvZ2luLCB0aGlzLm9uU2RrTG9naW5SZXQuYmluZCh0aGlzKSk7XG4gICAgICAgIC8v5re75Yqg5Zue6LCDXG4gICAgICAgIHRoaXMucmVnaXN0ZXJOYXRpdmVDYnMoUGxhdERlZi5TZGtDYkZ1bmNOYW1lLm9uU2RrTG9nb3V0LCB0aGlzLm9uU2RrTG9nb3V0UmV0LmJpbmQodGhpcykpO1xuICAgICAgICAvL+iwg+eUqFxuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtMb2dpbl07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJcIik7XG4gICAgfVxuXG4gICAgLyoqIOeZu+WHuiAqL1xuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIC8v6LCD55SoXG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0xvZ291dF07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJcIik7XG4gICAgfVxuXG4gICAgLyoqIOWIh+aNoui0puWPtyAqL1xuICAgIHB1YmxpYyBzd2l0Y2hBY2NvdW50KCkge1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtTd2l0Y2hBY2NdO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIFwiXCIpO1xuICAgIH1cblxuICAgIC8qKiDmlK/ku5ggKi9cbiAgICBwdWJsaWMgcGF5KHJjaGdDZmc6IGFueSwgdHM6IG51bWJlciwgcGF5Q2JVcmw6IHN0cmluZykge1xuICAgICAgICAvL+a3u+WKoOWbnuiwg1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTmF0aXZlQ2JzKFBsYXREZWYuU2RrQ2JGdW5jTmFtZS5vblNka1BheVJlc3VsdCwgdGhpcy5vblNka1BheVJldC5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsZXQgaW5mbzogUGxhdERlZi5QYXlEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllckluZm8pKTtcbiAgICAgICAgLy/pgI/kvKDkv6Hmga9cbiAgICAgICAgbGV0IGV4dGVuZEluZm86IGFueSA9IHt9O1xuICAgICAgICBleHRlbmRJbmZvLnBscklkID0gaW5mby5yb2xlSWQ7XG4gICAgICAgIGV4dGVuZEluZm8ucHJkSWQgPSByY2hnQ2ZnLklkO1xuICAgICAgICBleHRlbmRJbmZvLnByaWNlID0gcmNoZ0NmZy5QcmljZTtcbiAgICAgICAgZXh0ZW5kSW5mby5zZGtGbGFnID0gdGhpcy5wbGF0Q2ZnLnNka0ZsYWc7XG4gICAgICAgIGV4dGVuZEluZm8udHMgPSB0cztcblxuICAgICAgICAvL+WVhuWTgeS/oeaBr+ihpeWFhVxuICAgICAgICBpbmZvLnByZElkID0gcmNoZ0NmZy5JZDtcbiAgICAgICAgaW5mby5wcmROYW1lID0gcmNoZ0NmZy5OYW1lO1xuICAgICAgICBpbmZvLnByZERlc2MgPSByY2hnQ2ZnLkRlcztcbiAgICAgICAgaW5mby5zdG9yZUlkID0gcmNoZ0NmZy5TdG9yZUlkO1xuICAgICAgICBpbmZvLnByaWNlMTAwID0gcmNoZ0NmZy5QcmljZTtcblxuICAgICAgICBpbmZvLnN2cklkID0gYCR7dGhpcy5wbGF5ZXJJbmZvLmFyZWFJZCAqIDEwMDAgKyB0aGlzLnBsYXllckluZm8uc3ZySWR9YDtcbiAgICAgICAgaW5mby5zdnJOYW1lID0gYCR7dGhpcy5wbGF5ZXJJbmZvLmFyZWFJZH0tJHt0aGlzLnBsYXllckluZm8uc3ZyTmFtZX1gO1xuXG4gICAgICAgIGluZm8uZXh0SW5mbyA9IEpTT04uc3RyaW5naWZ5KGV4dGVuZEluZm8pO1xuICAgICAgICBpbmZvLnBheUNiVXJsID0gcGF5Q2JVcmw7XG5cbiAgICAgICAgbGV0IHN0clBhcmFtID0gdGhpcy5nZXRQYXJhbVN0cmluZyhpbmZvKTtcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrUGF5XTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBzdHJQYXJhbSk7XG4gICAgfVxuXG4gICAgLyoqIOmAgOWHuua4uOaIjyAqL1xuICAgIHB1YmxpYyBxdWl0R2FtZSgpIHtcbiAgICAgICAgLy/mt7vliqDlm57osINcbiAgICAgICAgdGhpcy5yZWdpc3Rlck5hdGl2ZUNicyhQbGF0RGVmLlNka0NiRnVuY05hbWUub25TZGtFeGl0LCB0aGlzLm9uU2RrRXhpdFJldC5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy/osIPnlKhcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrUXVpdEdhbWVdO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIFwiXCIpO1xuICAgIH1cblxuICAgIC8qKiDnlKjmiLfkuK3lv4MgKi9cbiAgICBwdWJsaWMgb3BlbkFjY291bnRDZW50ZXIoKSB7XG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka0FjY0NlbnRlcl07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJcIik7XG4gICAgfVxuXG4gICAgLyoqIOaPkOS6pOeUqOaIt+S/oeaBryAqL1xuICAgIHB1YmxpYyBzdWJtaXRJbmZvKGZsYWc6IHN0cmluZywgZXh0PzogYW55KSB7XG4gICAgICAgIGxldCBpbmZvOiBQbGF0RGVmLlN1Ym1pdERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVySW5mbykpO1xuICAgICAgICBpbmZvLnN1Ym1pdEZsYWcgPSBmbGFnO1xuICAgICAgICBpbmZvLnN2cklkID0gYCR7dGhpcy5wbGF5ZXJJbmZvLmFyZWFJZCAqIDEwMDAgKyB0aGlzLnBsYXllckluZm8uc3ZySWR9YDtcbiAgICAgICAgaW5mby5zdnJOYW1lID0gYCR7dGhpcy5wbGF5ZXJJbmZvLmFyZWFJZH0tJHt0aGlzLnBsYXllckluZm8uc3ZyTmFtZX1gO1xuXG4gICAgICAgIGluZm8uZXZlbnROYW1lID0gJyc7XG5cbiAgICAgICAgbGV0IHN0clBhcmFtID0gdGhpcy5nZXRQYXJhbVN0cmluZyhpbmZvKTtcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrU3VibWl0XTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBzdHJQYXJhbSk7XG4gICAgfVxuXG4gICAgLyoqIOWxleekuueUqOaIt+WNj+iuriAqL1xuICAgIHB1YmxpYyBzaG93UHJpdmFjeVBvbGljeSh0eHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZGtQcml2YWN5UG9saWN5XTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCB0eHQpO1xuICAgIH1cblxuICAgIC8qKiDliIbkuqsgKi9cbiAgICBwdWJsaWMgc2hhcmUoKSB7XG4gICAgICAgIGxldCBwcmRJbmZvOiBhbnkgPSB7fTtcbiAgICAgICAgcHJkSW5mby5zdnJJZCA9IGAke3RoaXMucGxheWVySW5mby5hcmVhSWQgKiAxMDAwICsgdGhpcy5wbGF5ZXJJbmZvLnN2cklkfWA7XG4gICAgICAgIHByZEluZm8udWlkID0gdGhpcy5wbGF5ZXJJbmZvLnJvbGVJZDtcbiAgICAgICAgbGV0IHN0clBhcmFtID0gdGhpcy5nZXRQYXJhbVN0cmluZyhwcmRJbmZvKTtcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrU2hhcmVdO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHN0clBhcmFtKTtcbiAgICB9XG5cbiAgICAvKiog5o+Q5LqkVklQ5L+h5oGvICovXG4gICAgcHVibGljIHN1bWJpdFZpcEluZm8oKSB7XG4gICAgICAgIC8v5re75Yqg5Zue6LCDXG4gICAgICAgIHRoaXMucmVnaXN0ZXJOYXRpdmVDYnMoUGxhdERlZi5TZGtDYkZ1bmNOYW1lLm9uU2RrU3VibWl0VmlwLCB0aGlzLm9uU2RrU3VibWl0VmlwUmV0LmJpbmQodGhpcykpO1xuICAgICAgICAvL+S4iuS8oOS/oeaBr1xuICAgICAgICBsZXQgc3RyUGFyYW0gPSB0aGlzLmdldFBhcmFtU3RyaW5nKHRoaXMucGxheWVySW5mbyk7XG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLnNka1N1Ym1pdFZpcEluZm9dO1xuICAgICAgICB0aGlzLmNhbGxOYXRpdmVNZXRob2QoZnVuY05hbWUsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHN0clBhcmFtKTtcbiAgICB9XG5cbiAgICAvKiog5YmN5b6A5bqU55So5YaF6K+E5YiGICovXG4gICAgcHVibGljIHRvQXBwU3Ryb2VTY29yZSgpIHtcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrVG9BcHBTY29yZV07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgJycpO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJZidWdseSAqL1xuICAgIHB1YmxpYyBpbml0QnVnbHkoKSB7XG4gICAgICAgIGxldCBmdW5jTmFtZSA9IHRoaXMuc2RrRnVuY1tQbGF0RGVmLlNka0Z1bmNOYW1lLmluaXRCdWdseV07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgJycpO1xuICAgIH1cbiAgICAvKiog6K6+572uYnVnbHkgdXNlcklkICovXG4gICAgcHVibGljIGJ1Z2x5U2V0VXNlcklkKGZsYWc6IHN0cmluZykge1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5idWdseVNldFVzZXJJZF07XG4gICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgZmxhZyk7XG4gICAgfVxuICAgIC8qKiBidWdseSDniYjmnKwqL1xuICAgIHB1YmxpYyBzZXRBcHBWZXJzaW9uKGZsYWc6IHN0cmluZykge1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5zZXRBcHBWZXJzaW9uXTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBmbGFnKTtcbiAgICB9XG5cblxuICAgIC8qKiDpgJrnlKjlh73mlbDmjqXlj6MgKi9cbiAgICBwdWJsaWMgY29tbW9uRnVuYyhwYXJhbTogYW55KSB7XG4gICAgICAgIGxldCBzdHJQYXJhbSA9IHRoaXMuZ2V0UGFyYW1TdHJpbmcocGFyYW0pO1xuICAgICAgICBsZXQgZnVuY05hbWUgPSB0aGlzLnNka0Z1bmNbUGxhdERlZi5TZGtGdW5jTmFtZS5jb21tb25GdW5jXTtcbiAgICAgICAgdGhpcy5jYWxsTmF0aXZlTWV0aG9kKGZ1bmNOYW1lLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBzdHJQYXJhbSk7XG4gICAgfVxuXG4gICAgLyoqIOWFtuS7luaJqeWxleaOpeWPoyAqL1xuICAgIHB1YmxpYyBnZXRPdGhlckJ5RmxhZyhmbGFnOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZ1bmNOYW1lID0gdGhpcy5zZGtGdW5jW1BsYXREZWYuU2RrRnVuY05hbWUuc2RrR2V0T3RoZXJJbmZvXTtcbiAgICAgICAgbGV0IHJldFN0ciA9IHRoaXMuY2FsbE5hdGl2ZU1ldGhvZChmdW5jTmFtZSwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgZmxhZyk7XG4gICAgICAgIHJldHVybiByZXRTdHI7XG4gICAgfVxuXG5cblxuXG5cblxuICAgIC8qKiDosIPnlKjlubPlj7Dmlrnms5UgKi9cbiAgICBwcm90ZWN0ZWQgY2FsbE5hdGl2ZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIHNpZzogc3RyaW5nLCBwYXJhbXM6IHN0cmluZykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5hbmRDbGFzcywgbWV0aG9kTmFtZSwgc2lnLCBwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgLy/mjqXlj6PlkI3np7Dkv67mlLlcbiAgICAgICAgICAgIGxldCBpb3NDbGFzc05hbWUgPSB0aGlzLmlvc0NsYXNzO1xuICAgICAgICAgICAgbGV0IGlvc0Z1bmMyTmFtZSA9IG1ldGhvZE5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5zZGtNYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2RrTWFwcGluZy5JT1NDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBpb3NDbGFzc05hbWUgPSB0aGlzLnNka01hcHBpbmcuSU9TQ2xhc3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNka01hcHBpbmdbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW9zRnVuYzJOYW1lID0gdGhpcy5zZGtNYXBwaW5nW21ldGhvZE5hbWVdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOuWPguaVsOWKoOWvhlxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5jb2RlUGEgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGlvc0NsYXNzTmFtZSwgaW9zRnVuYzJOYW1lICsgXCI6XCIsIGVuY29kZVBhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGlvc0NsYXNzTmFtZSwgaW9zRnVuYzJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzrov5Tlm57nu5Pmnpzop6Plr4ZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChpb3NDbGFzc05hbWUsIGlvc0Z1bmMyTmFtZSArIFwiOlwiLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoaW9zQ2xhc3NOYW1lLCBpb3NGdW5jMk5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiDms6jlhozljp/nlJ/lm57osINDQyAqL1xuICAgIHByaXZhdGUgcmVnaXN0ZXJOYXRpdmVDYnMoZnVuY05hbWU6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgLy/liqDlhaXlm57osIPliJfooahcbiAgICAgICAgY2MubmF0aXZlU0RLID0gY2MubmF0aXZlU0RLIHx8IHt9O1xuICAgICAgICBpZiAoIWNjLm5hdGl2ZVNESy5jYkZ1bmNzKSB7XG4gICAgICAgICAgICBjYy5uYXRpdmVTREsuY2JGdW5jcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNjLm5hdGl2ZVNESy5jYkZ1bmNzW2Z1bmNOYW1lXSA9IGZ1bmM7XG4gICAgICAgIC8v5Y6f55Sf5YiwQ0PlhajlsYDlh73mlbBcbiAgICAgICAgaWYgKCFjYy5uYXRpdmVTREsubmF0aXZlMkNDQikge1xuICAgICAgICAgICAgY2MubmF0aXZlU0RLLm5hdGl2ZTJDQ0IgPSAoZnVuY046IHN0cmluZywgcGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2MubmF0aXZlU0RLLmNiRnVuY3MuaGFzT3duUHJvcGVydHkoZnVuY04pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkc3RGdW5jID0gY2MubmF0aXZlU0RLLmNiRnVuY3NbZnVuY05dO1xuICAgICAgICAgICAgICAgICAgICBkc3RGdW5jICYmIGRzdEZ1bmMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufSJdfQ==