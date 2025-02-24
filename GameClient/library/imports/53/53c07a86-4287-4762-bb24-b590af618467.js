"use strict";
cc._RF.push(module, '53c07qGQodHYrsktZCvYYRn', 'PlatManager');
// entrance/script/platform/PlatManager.ts

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
var GameConsts_1 = require("../../../Script/game/GameConsts");
var GameHelper_1 = require("../../../Script/game/GameHelper");
var EventDispatcher_1 = require("../../../c2f-framework/core/event/EventDispatcher");
var PlatHuanyu_1 = require("./PlatHuanyu");
var PlatKuaihan_1 = require("./PlatKuaihan");
var PlatHaidx_1 = require("./PlatHaidx");
var PlatNoPlat_1 = require("./PlatNoPlat");
var PLAT_DEV = 'kh_web';
var PLAT_Huanyu = 'huanyu';
var PLAT_Sanjiu = 'sanjiu';
var Plat_Kuaihan = 'kuaihan';
var Plat_Haidx = 'haidx';
var PlatManager = /** @class */ (function (_super) {
    __extends(PlatManager, _super);
    function PlatManager() {
        var _this = _super.call(this) || this;
        _this.current = null;
        _this.isAudit = false;
        _this.httpRc4Key = undefined;
        _this.platFlag = c2f.storage.getPlainItem(GameConsts_1.GameConsts.PlatNameKey, PLAT_DEV);
        return _this;
    }
    Object.defineProperty(PlatManager.prototype, "isAudit", {
        get: function () {
            return this._isAudit;
        },
        set: function (v) {
            this._isAudit = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlatManager.prototype, "httpRc4Key", {
        get: function () {
            return this._httpRc4Key;
        },
        set: function (v) {
            this._httpRc4Key = v;
        },
        enumerable: false,
        configurable: true
    });
    PlatManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new PlatManager();
        }
        return this._instance;
    };
    /** 初始化 */
    PlatManager.prototype.init = function () {
        if (!this.current) {
            this.createCurPlat();
            this.current.loadPlatCfg();
        }
    };
    /** 当前平台 */
    PlatManager.prototype.createCurPlat = function () {
        switch (this.platFlag) {
            case PLAT_DEV:
                this.current = new PlatNoPlat_1.PlatNoPlat();
                break;
            case PLAT_Huanyu:
            case PLAT_Sanjiu:
                this.current = new PlatHuanyu_1.PlatHuanyu();
                break;
            case Plat_Kuaihan:
                this.current = new PlatKuaihan_1.PlatKuaihan();
                break;
            case Plat_Haidx:
                this.current = new PlatHaidx_1.PlatHaidx();
                break;
            default:
                break;
        }
    };
    /** 初始化SDK */
    PlatManager.prototype.initSDK = function () {
        if (!this.current) {
            return;
        }
        if (this.current.sdkInitSuc) {
            return;
        }
        this.current.initSDK(null);
    };
    /** sdk登录 */
    PlatManager.prototype.sdkLogin = function () {
        if (!this.current) {
            return;
        }
        this.current.login();
    };
    /** sdk切换账号 */
    PlatManager.prototype.sdkSwitchAccount = function () {
        if (!this.current) {
            return;
        }
        this.current.switchAccount();
    };
    /** sdk登出 */
    PlatManager.prototype.sdkLogout = function () {
        if (!this.current) {
            return;
        }
        this.current.logout();
    };
    /** 更新玩家信息 */
    PlatManager.prototype.updatePlayerInfo = function (info) {
        if (!this.current) {
            return;
        }
        this.current.updatePlayerInfo(info);
    };
    /** 上传信息 */
    PlatManager.prototype.submitInfo = function (tag, ext) {
        if (!this.current) {
            return;
        }
        this.current.submitInfo(tag, ext);
    };
    /** 退出游戏 */
    PlatManager.prototype.exitGame = function () {
        if (!this.current) {
            return;
        }
        if (this.current.supportQuitGame) {
            this.current.quitGame();
        }
        else {
            //TODO:显示游戏退出确认界面
        }
    };
    /** 分享游戏 */
    PlatManager.prototype.gameShare = function () {
        if (!this.current) {
            return;
        }
        this.current.share();
    };
    /** 显示用户协议 */
    PlatManager.prototype.showPrivacyPolicy = function () {
        if (!this.current) {
            return;
        }
        this.current.showPrivacyPolicy('');
    };
    /** 初始化bugly */
    PlatManager.prototype.initBugly = function () {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.initBugly();
    };
    /** 初始化bugly */
    PlatManager.prototype.buglySetUserId = function (str) {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.buglySetUserId(str);
    };
    /** bugly 版本 */
    PlatManager.prototype.setAppVersion = function (str) {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.setAppVersion(str);
    };
    /** 支持用户中心 */
    PlatManager.prototype.isSuportUserCenter = function () {
        if (this.current) {
            return this.current.supportAccountCenter;
        }
        else {
            return false;
        }
    };
    /** 支持faceboss */
    PlatManager.prototype.isSuportFacebook = function () {
        if (this.current) {
            return this.current.supportFacebook;
        }
        else {
            return false;
        }
    };
    /** 显示国内政策相关UI */
    PlatManager.prototype.needShowPoliciesUI = function () {
        if (this.current) {
            return this.current.showPolicies;
        }
        else {
            return false;
        }
    };
    /** 是否需要用户协议 */
    PlatManager.prototype.needUserAgreement = function () {
        if (this.current) {
            return this.current.showUserAgreement;
        }
        else {
            return false;
        }
    };
    //用户中心/联系客服
    PlatManager.prototype.showAccountCenter = function () {
        if (!this.current) {
            return;
        }
        this.current.openAccountCenter();
    };
    /** 获取游戏账号信息 */
    PlatManager.prototype.getSdkAccountInfo = function () {
        if (!this.current) {
            return;
        }
        return this.current.accoutInfo;
    };
    /** 获取平台配置 */
    PlatManager.prototype.getPlatCfg = function () {
        if (!this.current) {
            return;
        }
        return this.current.platCfg;
    };
    /** 获取设备信息 */
    PlatManager.prototype.getPhoneInfo = function () {
        if (!this.current) {
            return;
        }
        return this.current.phoneInfo;
    };
    /** 获取用户平台账号信息 */
    PlatManager.prototype.getAccountInfo = function () {
        if (!this.current) {
            return;
        }
        return this.current.accoutInfo;
    };
    /** 显示开发者面板 */
    PlatManager.prototype.showDevUI = function () {
        if (this.current) {
            return this.current.showDevUI();
        }
        else {
            return false;
        }
    };
    /** 拷贝文本到剪贴板 */
    PlatManager.prototype.copyToClipboard = function (txt) {
        if (!this.current) {
            return;
        }
        return this.current.copyToClipboard(txt);
    };
    /** 无发行渠道(白包模式) */
    PlatManager.prototype.isNoPublishingPlat = function () {
        var result = true;
        if (this.current) {
            result = this.current.platCfg.sdkFlag == 'sl.normal';
        }
        return result;
    };
    /** SDK是否初始化成功 */
    PlatManager.prototype.sdkIsInited = function () {
        var result = false;
        if (this.current) {
            result = this.current.sdkInitSuc;
        }
        return result;
    };
    /** 获取超级VIP状态 */
    PlatManager.prototype.vipStateIsSubmit = function () {
        if (!this.current) {
            return;
        }
        var ret = this.current.getOtherByFlag('vipState');
        return Number(ret) > 0;
    };
    /** 提交超级VIP信息 */
    PlatManager.prototype.submitVipInfo = function () {
        if (!this.current) {
            return;
        }
        this.current.sumbitVipInfo();
    };
    /** 跳转评分 */
    PlatManager.prototype.toAppStroeScore = function () {
        if (!this.current) {
            return;
        }
        this.current.toAppStroeScore();
    };
    /** App版本号 */
    PlatManager.prototype.getAppVersion = function () {
        var version = 'unknown';
        if (this.current) {
            version = this.current.appVersion;
        }
        return version;
    };
    /** 热更资源版本 */
    PlatManager.prototype.getResVersion = function () {
        var version = 'unknown';
        if (this.current) {
            var ret = GameHelper_1.GameHelper.compareVersion(this.current.appVersion, this.current.resVersion);
            if (ret > 0) {
                version = this.current.appVersion;
            }
            else {
                version = this.current.resVersion;
            }
        }
        return version;
    };
    /** 安全区域·主要针对H5 */
    PlatManager.prototype.getSafeArea = function () {
        // let szView = cc.view.getVisibleSize();
        // return { x: 0, y: 0, width: szView.width, height: szView.height - 100 };
        return null;
    };
    /** 静态成员 */
    PlatManager._instance = null;
    return PlatManager;
}(EventDispatcher_1.EventDispatcher));
szg.plat = PlatManager.getInstance();

cc._RF.pop();