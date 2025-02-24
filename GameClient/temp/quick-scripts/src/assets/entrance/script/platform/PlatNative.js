"use strict";
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