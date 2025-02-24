
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCxxRkFBb0Y7QUFFcEYsMkNBQTBDO0FBQzFDLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFDeEMsMkNBQTBDO0FBRTFDLElBQU0sUUFBUSxHQUFXLFFBQVEsQ0FBQztBQUNsQyxJQUFNLFdBQVcsR0FBVyxRQUFRLENBQUM7QUFDckMsSUFBTSxXQUFXLEdBQVcsUUFBUSxDQUFDO0FBQ3JDLElBQU0sWUFBWSxHQUFXLFNBQVMsQ0FBQztBQUN2QyxJQUFNLFVBQVUsR0FBVyxPQUFPLENBQUM7QUFFbkM7SUFBMEIsK0JBQWU7SUF1QnJDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBVSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzs7SUFDL0UsQ0FBQztJQXRCRCxzQkFBVyxnQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBbUIsQ0FBVTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLG1DQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFDRCxVQUFzQixDQUFTO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lB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LENBQUMsVUFBVSxDQUFDO2FBQ3JDO1NBQ0o7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0JBQWtCO0lBQ1gsaUNBQVcsR0FBbEI7UUFDSSx5Q0FBeUM7UUFDekMsMkVBQTJFO1FBQzNFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFyVEQsV0FBVztJQUNJLHFCQUFTLEdBQWdCLElBQUksQ0FBQTtJQXFUaEQsa0JBQUM7Q0FyVkQsQUFxVkMsQ0FyVnlCLGlDQUFlLEdBcVZ4QztBQVFELEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzXCI7XG5pbXBvcnQgeyBHYW1lSGVscGVyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVIZWxwZXJcIjtcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gXCIuLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2NvcmUvZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBQbGF0QmFzZSB9IGZyb20gXCIuL1BsYXRCYXNlXCI7XG5pbXBvcnQgeyBQbGF0SHVhbnl1IH0gZnJvbSBcIi4vUGxhdEh1YW55dVwiO1xuaW1wb3J0IHsgUGxhdEt1YWloYW4gfSBmcm9tIFwiLi9QbGF0S3VhaWhhblwiO1xuaW1wb3J0IHsgUGxhdEhhaWR4IH0gZnJvbSBcIi4vUGxhdEhhaWR4XCI7XG5pbXBvcnQgeyBQbGF0Tm9QbGF0IH0gZnJvbSBcIi4vUGxhdE5vUGxhdFwiO1xuXG5jb25zdCBQTEFUX0RFVjogc3RyaW5nID0gJ2toX3dlYic7XG5jb25zdCBQTEFUX0h1YW55dTogc3RyaW5nID0gJ2h1YW55dSc7XG5jb25zdCBQTEFUX1NhbmppdTogc3RyaW5nID0gJ3NhbmppdSc7XG5jb25zdCBQbGF0X0t1YWloYW46IHN0cmluZyA9ICdrdWFpaGFuJztcbmNvbnN0IFBsYXRfSGFpZHg6IHN0cmluZyA9ICdoYWlkeCc7XG5cbmNsYXNzIFBsYXRNYW5hZ2VyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgICAvL+W5s+WPsOagh+W/l1xuICAgIHByaXZhdGUgcGxhdEZsYWc6IHN0cmluZztcbiAgICAvL+W9k+WJjeW5s+WPsFxuICAgIHByaXZhdGUgY3VycmVudDogUGxhdEJhc2U7XG4gICAgLy/mj5DlrqHnirbmgIFcbiAgICBwcml2YXRlIF9pc0F1ZGl0OiBib29sZWFuO1xuICAgIHB1YmxpYyBnZXQgaXNBdWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXVkaXQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaXNBdWRpdCh2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQXVkaXQgPSB2O1xuICAgIH1cbiAgICAvL2h0dHDljY/orq7liqDop6Plr4ZLRVlcbiAgICBwcml2YXRlIF9odHRwUmM0S2V5OiBzdHJpbmc7XG4gICAgcHVibGljIGdldCBodHRwUmM0S2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwUmM0S2V5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGh0dHBSYzRLZXkodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2h0dHBSYzRLZXkgPSB2O1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNBdWRpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmh0dHBSYzRLZXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGxhdEZsYWcgPSBjMmYuc3RvcmFnZS5nZXRQbGFpbkl0ZW0oR2FtZUNvbnN0cy5QbGF0TmFtZUtleSwgUExBVF9ERVYpO1xuICAgIH1cblxuICAgIC8qKiDpnZnmgIHmiJDlkZggKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXRNYW5hZ2VyID0gbnVsbFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUGxhdE1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQbGF0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog5Yid5aeL5YyWICovXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUN1clBsYXQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5sb2FkUGxhdENmZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOW9k+WJjeW5s+WPsCAqL1xuICAgIHByaXZhdGUgY3JlYXRlQ3VyUGxhdCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsYXRGbGFnKSB7XG4gICAgICAgICAgICBjYXNlIFBMQVRfREVWOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5ldyBQbGF0Tm9QbGF0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBMQVRfSHVhbnl1OlxuICAgICAgICAgICAgY2FzZSBQTEFUX1NhbmppdTpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXcgUGxhdEh1YW55dSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF0X0t1YWloYW46XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3IFBsYXRLdWFpaGFuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsYXRfSGFpZHg6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3IFBsYXRIYWlkeCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJZTREsgKi9cbiAgICBwdWJsaWMgaW5pdFNESygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50LnNka0luaXRTdWMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnQuaW5pdFNESyhudWxsKTtcbiAgICB9XG5cbiAgICAvKiogc2Rr55m75b2VICovXG4gICAgcHVibGljIHNka0xvZ2luKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5sb2dpbigpO1xuICAgIH1cblxuICAgIC8qKiBzZGvliIfmjaLotKblj7cgKi9cbiAgICBwdWJsaWMgc2RrU3dpdGNoQWNjb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnQuc3dpdGNoQWNjb3VudCgpO1xuICAgIH1cblxuICAgIC8qKiBzZGvnmbvlh7ogKi9cbiAgICBwdWJsaWMgc2RrTG9nb3V0KCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5sb2dvdXQoKTtcbiAgICB9XG5cblxuXG4gICAgLyoqIOabtOaWsOeOqeWutuS/oeaBryAqL1xuICAgIHB1YmxpYyB1cGRhdGVQbGF5ZXJJbmZvKGluZm86IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC51cGRhdGVQbGF5ZXJJbmZvKGluZm8pO1xuICAgIH1cblxuICAgIC8qKiDkuIrkvKDkv6Hmga8gKi9cbiAgICBwdWJsaWMgc3VibWl0SW5mbyh0YWc6IHN0cmluZywgZXh0PzogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50LnN1Ym1pdEluZm8odGFnLCBleHQpO1xuICAgIH1cblxuICAgIC8qKiDpgIDlh7rmuLjmiI8gKi9cbiAgICBwdWJsaWMgZXhpdEdhbWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudC5zdXBwb3J0UXVpdEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5xdWl0R2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9UT0RPOuaYvuekuua4uOaIj+mAgOWHuuehruiupOeVjOmdolxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWIhuS6q+a4uOaIjyAqL1xuICAgIHB1YmxpYyBnYW1lU2hhcmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50LnNoYXJlKCk7XG4gICAgfVxuXG4gICAgLyoqIOaYvuekuueUqOaIt+WNj+iuriAqL1xuICAgIHB1YmxpYyBzaG93UHJpdmFjeVBvbGljeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnQuc2hvd1ByaXZhY3lQb2xpY3koJycpO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJZidWdseSAqL1xuICAgIHB1YmxpYyBpbml0QnVnbHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50IHx8IHRoaXMuaXNBdWRpdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5pbml0QnVnbHkoKTtcbiAgICB9XG5cbiAgICAvKiog5Yid5aeL5YyWYnVnbHkgKi9cbiAgICBwdWJsaWMgYnVnbHlTZXRVc2VySWQoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQgfHwgdGhpcy5pc0F1ZGl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50LmJ1Z2x5U2V0VXNlcklkKHN0cik7XG4gICAgfVxuXG4gICAgLyoqIGJ1Z2x5IOeJiOacrCAqL1xuICAgIHB1YmxpYyBzZXRBcHBWZXJzaW9uKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50IHx8IHRoaXMuaXNBdWRpdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5zZXRBcHBWZXJzaW9uKHN0cik7XG4gICAgfVxuXG4gICAgLyoqIOaUr+aMgeeUqOaIt+S4reW/gyAqL1xuICAgIHB1YmxpYyBpc1N1cG9ydFVzZXJDZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuc3VwcG9ydEFjY291bnRDZW50ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pSv5oyBZmFjZWJvc3MgKi9cbiAgICBwdWJsaWMgaXNTdXBvcnRGYWNlYm9vaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC5zdXBwb3J0RmFjZWJvb2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pi+56S65Zu95YaF5pS/562W55u45YWzVUkgKi9cbiAgICBwdWJsaWMgbmVlZFNob3dQb2xpY2llc1VJKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50LnNob3dQb2xpY2llcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmmK/lkKbpnIDopoHnlKjmiLfljY/orq4gKi9cbiAgICBwdWJsaWMgbmVlZFVzZXJBZ3JlZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuc2hvd1VzZXJBZ3JlZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+eUqOaIt+S4reW/gy/ogZTns7vlrqLmnI1cbiAgICBwdWJsaWMgc2hvd0FjY291bnRDZW50ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50Lm9wZW5BY2NvdW50Q2VudGVyKCk7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlua4uOaIj+i0puWPt+S/oeaBryAqL1xuICAgIHB1YmxpYyBnZXRTZGtBY2NvdW50SW5mbygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50LmFjY291dEluZm87XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluW5s+WPsOmFjee9riAqL1xuICAgIHB1YmxpYyBnZXRQbGF0Q2ZnKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQucGxhdENmZztcbiAgICB9XG5cbiAgICAvKiog6I635Y+W6K6+5aSH5L+h5oGvICovXG4gICAgcHVibGljIGdldFBob25lSW5mbygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50LnBob25lSW5mbztcbiAgICB9XG5cbiAgICAvKiog6I635Y+W55So5oi35bmz5Y+w6LSm5Y+35L+h5oGvICovXG4gICAgcHVibGljIGdldEFjY291bnRJbmZvKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuYWNjb3V0SW5mbztcbiAgICB9XG5cbiAgICAvKiog5pi+56S65byA5Y+R6ICF6Z2i5p2/ICovXG4gICAgcHVibGljIHNob3dEZXZVSSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC5zaG93RGV2VUkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmi7fotJ3mlofmnKzliLDliarotLTmnb8gKi9cbiAgICBwdWJsaWMgY29weVRvQ2xpcGJvYXJkKHR4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC5jb3B5VG9DbGlwYm9hcmQodHh0KTtcbiAgICB9XG5cbiAgICAvKiog5peg5Y+R6KGM5rig6YGTKOeZveWMheaooeW8jykgKi9cbiAgICBwdWJsaWMgaXNOb1B1Ymxpc2hpbmdQbGF0KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jdXJyZW50LnBsYXRDZmcuc2RrRmxhZyA9PSAnc2wubm9ybWFsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiBTREvmmK/lkKbliJ3lp4vljJbmiJDlip8gKi9cbiAgICBwdWJsaWMgc2RrSXNJbml0ZWQoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jdXJyZW50LnNka0luaXRTdWM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiog6I635Y+W6LaF57qnVklQ54q25oCBICovXG4gICAgcHVibGljIHZpcFN0YXRlSXNTdWJtaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJldCA9IHRoaXMuY3VycmVudC5nZXRPdGhlckJ5RmxhZygndmlwU3RhdGUnKTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihyZXQpID4gMDtcbiAgICB9XG5cbiAgICAvKiog5o+Q5Lqk6LaF57qnVklQ5L+h5oGvICovXG4gICAgcHVibGljIHN1Ym1pdFZpcEluZm8oKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50LnN1bWJpdFZpcEluZm8oKTtcbiAgICB9XG5cbiAgICAvKiog6Lez6L2s6K+E5YiGICovXG4gICAgcHVibGljIHRvQXBwU3Ryb2VTY29yZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnQudG9BcHBTdHJvZVNjb3JlKCk7XG4gICAgfVxuXG5cblxuICAgIC8qKiBBcHDniYjmnKzlj7cgKi9cbiAgICBwdWJsaWMgZ2V0QXBwVmVyc2lvbigpIHtcbiAgICAgICAgbGV0IHZlcnNpb24gPSAndW5rbm93bic7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSB0aGlzLmN1cnJlbnQuYXBwVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKiog54Ot5pu06LWE5rqQ54mI5pysICovXG4gICAgcHVibGljIGdldFJlc1ZlcnNpb24oKSB7XG4gICAgICAgIGxldCB2ZXJzaW9uID0gJ3Vua25vd24nO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBsZXQgcmV0ID0gR2FtZUhlbHBlci5jb21wYXJlVmVyc2lvbih0aGlzLmN1cnJlbnQuYXBwVmVyc2lvbiwgdGhpcy5jdXJyZW50LnJlc1ZlcnNpb24pO1xuICAgICAgICAgICAgaWYgKHJldCA+IDApIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gdGhpcy5jdXJyZW50LmFwcFZlcnNpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcnNpb24gPSB0aGlzLmN1cnJlbnQucmVzVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKiog5a6J5YWo5Yy65Z+fwrfkuLvopoHpkojlr7lINSAqL1xuICAgIHB1YmxpYyBnZXRTYWZlQXJlYSgpIHtcbiAgICAgICAgLy8gbGV0IHN6VmlldyA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgLy8gcmV0dXJuIHsgeDogMCwgeTogMCwgd2lkdGg6IHN6Vmlldy53aWR0aCwgaGVpZ2h0OiBzelZpZXcuaGVpZ2h0IC0gMTAwIH07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJU1pHIHtcbiAgICAgICAgcGxhdDogUGxhdE1hbmFnZXI7XG4gICAgfVxufVxuXG5zemcucGxhdCA9IFBsYXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5leHBvcnQgeyB9OyJdfQ==