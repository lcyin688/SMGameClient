"use strict";
cc._RF.push(module, 'aaf4bKYPfxD0otBqjtN2L2G', 'PlatBase');
// entrance/script/platform/PlatBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatBase = void 0;
var PlatDefine_1 = require("./PlatDefine");
var PlatBase = /** @class */ (function () {
    function PlatBase() {
        this.playerInfo = new PlatDefine_1.PlatDef.GameUserInfo();
        this.platCfg = null;
        this.accoutInfo = null;
        this.phoneInfo = null;
        this.sdkInitSuc = false;
        this.showPolicies = true;
        this.loadLocalSetting();
    }
    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    PlatBase.prototype.loadLocalSetting = function () {
        this.supportQuitGame = false;
        this.supportAccountCenter = false;
        this.supportSwitchAcc = false;
        this.supportFacebook = false;
        this.showUserAgreement = true;
    };
    /** 更新玩家信息 */
    PlatBase.prototype.updatePlayerInfo = function (info) {
        for (var key in info) {
            this.playerInfo[key] = info[key];
        }
    };
    /** 获得平台配置信息 */
    PlatBase.prototype.loadPlatCfg = function () { return null; };
    /** 获得手机信息 */
    PlatBase.prototype.loadPhoneInfo = function () { };
    /** 拷贝到剪贴板 */
    PlatBase.prototype.copyToClipboard = function (txt) {
        if (cc.sys.isBrowser) { //浏览器
            try {
                if (navigator && navigator.clipboard) {
                    navigator.clipboard.writeText(txt);
                }
            }
            catch (error) {
                cc.log('拷贝文本失败');
            }
        }
    };
    /** 初始化bugly */
    PlatBase.prototype.initBugly = function () { };
    /** 初始化bugly */
    PlatBase.prototype.buglySetUserId = function (str) { };
    /** bugly 版本 */
    PlatBase.prototype.setAppVersion = function (str) { };
    /** 显示开发者面板 */
    PlatBase.prototype.showDevUI = function () { return false; };
    /** ------sdk流程相关-------- */
    /** 初始化SDK */
    PlatBase.prototype.initSDK = function (param) { };
    /** 登录 */
    PlatBase.prototype.login = function () { };
    /** 登出 */
    PlatBase.prototype.logout = function () { };
    /** 切换账号 */
    PlatBase.prototype.switchAccount = function () { };
    /** 支付 */
    PlatBase.prototype.pay = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /** 退出游戏 */
    PlatBase.prototype.quitGame = function () { };
    /** 用户中心 */
    PlatBase.prototype.openAccountCenter = function () { };
    /** 提交用户信息 */
    PlatBase.prototype.submitInfo = function (type, ext) { };
    /** 展示用户协议 */
    PlatBase.prototype.showPrivacyPolicy = function (txt) { };
    /** 分享 */
    PlatBase.prototype.share = function () { };
    /** 上传vip信息 */
    PlatBase.prototype.sumbitVipInfo = function () { };
    /** 前往app评分 */
    PlatBase.prototype.toAppStroeScore = function () { };
    /** 通用 */
    PlatBase.prototype.commonFunc = function (param) { };
    PlatBase.prototype.getOtherByFlag = function (flag) { return ""; };
    /** ----------平台回调----------- */
    /** SDK初始化结果 */
    PlatBase.prototype.onSdkInitRet = function (data) {
        c2f.log.logSDK('SDK init result:', data);
        var ret = this.getRealData(data);
        this.sdkInitSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkInit, this.sdkInitSuc);
        //有些SDK初始化时还没有获取设备信息的权限
        this.loadPhoneInfo();
    };
    /** SDK登录结果 */
    PlatBase.prototype.onSdkLoginRet = function (data) {
        c2f.log.logSDK('SDK login result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        if (isSuc) {
            this.accoutInfo = ret;
            this.accoutInfo.isBind = ret.facebook != '' ? true : false;
        }
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkLogin, isSuc);
    };
    /** 手机设备信息 */
    PlatBase.prototype.onLoadPhoneRet = function (data) {
        c2f.log.logSDK('SDK phoneInfo result:', data);
        this.phoneInfo = this.getRealData(data);
    };
    /** 账号信息绑定 */
    PlatBase.prototype.onSdkBindRet = function (data) {
        c2f.log.logSDK('SDK bind result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        this.accoutInfo.isBind = isSuc;
        cc.director.emit('onBindResult', isSuc);
    };
    /** SDK登出账号 */
    PlatBase.prototype.onSdkLogoutRet = function (data) {
        c2f.log.logSDK('SDK logout result:', data);
    };
    /** 充值回调 */
    PlatBase.prototype.onSdkPayRet = function (data) {
        c2f.log.logSDK('SDK pay result:', data);
        //TODO:
    };
    PlatBase.prototype.onSdkExitRet = function (data) {
        c2f.log.logSDK('SDK exit result:', data);
        //TODO:
    };
    /** 上传vip信息 */
    PlatBase.prototype.onSdkSubmitVipRet = function (data) {
        c2f.log.logSDK('SDK submit vip result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkVipSubmit, isSuc);
    };
    /** 将参数转换成字符串 */
    PlatBase.prototype.getParamString = function (param) {
        var strParam = '';
        if (typeof param == 'string') {
            strParam = param;
        }
        else {
            strParam = JSON.stringify(param);
        }
        return strParam;
    };
    /** 获取有效值 */
    PlatBase.prototype.getRealData = function (data) {
        var ret = null;
        if (typeof data == 'string' && data.length > 0) {
            ret = JSON.parse(data);
        }
        else {
            ret = data;
        }
        return ret;
    };
    return PlatBase;
}());
exports.PlatBase = PlatBase;

cc._RF.pop();