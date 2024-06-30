import { GameConsts } from "../../../Script/game/GameConsts";
import { GameHelper } from "../../../Script/game/GameHelper";
import { EventDispatcher } from "../../../c2f-framework/core/event/EventDispatcher";
import { PlatBase } from "./PlatBase";
import { PlatHuanyu } from "./PlatHuanyu";
import { PlatKuaihan } from "./PlatKuaihan";
import { PlatHaidx } from "./PlatHaidx";
import { PlatNoPlat } from "./PlatNoPlat";

const PLAT_DEV: string = 'kh_web';
const PLAT_Huanyu: string = 'huanyu';
const PLAT_Sanjiu: string = 'sanjiu';
const Plat_Kuaihan: string = 'kuaihan';
const Plat_Haidx: string = 'haidx';

class PlatManager extends EventDispatcher {
    //平台标志
    private platFlag: string;
    //当前平台
    private current: PlatBase;
    //提审状态
    private _isAudit: boolean;
    public get isAudit(): boolean {
        return this._isAudit;
    }
    public set isAudit(v: boolean) {
        this._isAudit = v;
    }
    //http协议加解密KEY
    private _httpRc4Key: string;
    public get httpRc4Key(): string {
        return this._httpRc4Key;
    }
    public set httpRc4Key(v: string) {
        this._httpRc4Key = v;
    }


    constructor() {
        super();
        this.current = null;
        this.isAudit = false;
        this.httpRc4Key = undefined;
        this.platFlag = c2f.storage.getPlainItem(GameConsts.PlatNameKey, PLAT_DEV);
    }

    /** 静态成员 */
    private static _instance: PlatManager = null
    public static getInstance(): PlatManager {
        if (!this._instance) {
            this._instance = new PlatManager();
        }
        return this._instance;
    }

    /** 初始化 */
    public init() {
        if (!this.current) {
            this.createCurPlat();
            this.current.loadPlatCfg();
        }
    }

    /** 当前平台 */
    private createCurPlat() {
        switch (this.platFlag) {
            case PLAT_DEV:
                this.current = new PlatNoPlat();
                break;
            case PLAT_Huanyu:
            case PLAT_Sanjiu:
                this.current = new PlatHuanyu();
                break;
            case Plat_Kuaihan:
                this.current = new PlatKuaihan();
                break;
            case Plat_Haidx:
                this.current = new PlatHaidx();
                break;
            default:
                break;
        }
    }

    /** 初始化SDK */
    public initSDK() {
        if (!this.current) {
            return;
        }
        if (this.current.sdkInitSuc) {
            return;
        }
        this.current.initSDK(null);
    }

    /** sdk登录 */
    public sdkLogin() {
        if (!this.current) {
            return;
        }
        this.current.login();
    }

    /** sdk切换账号 */
    public sdkSwitchAccount() {
        if (!this.current) {
            return;
        }
        this.current.switchAccount();
    }

    /** sdk登出 */
    public sdkLogout() {
        if (!this.current) {
            return;
        }
        this.current.logout();
    }



    /** 更新玩家信息 */
    public updatePlayerInfo(info: any) {
        if (!this.current) {
            return;
        }
        this.current.updatePlayerInfo(info);
    }

    /** 上传信息 */
    public submitInfo(tag: string, ext?: any) {
        if (!this.current) {
            return;
        }
        this.current.submitInfo(tag, ext);
    }

    /** 退出游戏 */
    public exitGame() {
        if (!this.current) {
            return;
        }
        if (this.current.supportQuitGame) {
            this.current.quitGame();
        } else {
            //TODO:显示游戏退出确认界面
        }
    }

    /** 分享游戏 */
    public gameShare() {
        if (!this.current) {
            return;
        }
        this.current.share();
    }

    /** 显示用户协议 */
    public showPrivacyPolicy() {
        if (!this.current) {
            return;
        }
        this.current.showPrivacyPolicy('');
    }

    /** 初始化bugly */
    public initBugly() {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.initBugly();
    }

    /** 初始化bugly */
    public buglySetUserId(str: string) {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.buglySetUserId(str);
    }

    /** bugly 版本 */
    public setAppVersion(str: string) {
        if (!this.current || this.isAudit) {
            return;
        }
        this.current.setAppVersion(str);
    }

    /** 支持用户中心 */
    public isSuportUserCenter() {
        if (this.current) {
            return this.current.supportAccountCenter;
        } else {
            return false;
        }
    }

    /** 支持faceboss */
    public isSuportFacebook() {
        if (this.current) {
            return this.current.supportFacebook;
        } else {
            return false;
        }
    }

    /** 显示国内政策相关UI */
    public needShowPoliciesUI() {
        if (this.current) {
            return this.current.showPolicies;
        } else {
            return false;
        }
    }

    /** 是否需要用户协议 */
    public needUserAgreement() {
        if (this.current) {
            return this.current.showUserAgreement;
        } else {
            return false;
        }
    }

    //用户中心/联系客服
    public showAccountCenter() {
        if (!this.current) {
            return;
        }
        this.current.openAccountCenter();
    }

    /** 获取游戏账号信息 */
    public getSdkAccountInfo() {
        if (!this.current) {
            return;
        }
        return this.current.accoutInfo;
    }

    /** 获取平台配置 */
    public getPlatCfg() {
        if (!this.current) {
            return;
        }
        return this.current.platCfg;
    }

    /** 获取设备信息 */
    public getPhoneInfo() {
        if (!this.current) {
            return;
        }
        return this.current.phoneInfo;
    }

    /** 获取用户平台账号信息 */
    public getAccountInfo() {
        if (!this.current) {
            return;
        }
        return this.current.accoutInfo;
    }

    /** 显示开发者面板 */
    public showDevUI() {
        if (this.current) {
            return this.current.showDevUI();
        } else {
            return false;
        }
    }

    /** 拷贝文本到剪贴板 */
    public copyToClipboard(txt: string) {
        if (!this.current) {
            return;
        }
        return this.current.copyToClipboard(txt);
    }

    /** 无发行渠道(白包模式) */
    public isNoPublishingPlat() {
        let result = true;
        if (this.current) {
            result = this.current.platCfg.sdkFlag == 'sl.normal';
        }
        return result;
    }

    /** SDK是否初始化成功 */
    public sdkIsInited() {
        let result = false;
        if (this.current) {
            result = this.current.sdkInitSuc;
        }
        return result;
    }

    /** 获取超级VIP状态 */
    public vipStateIsSubmit(): boolean {
        if (!this.current) {
            return;
        }
        let ret = this.current.getOtherByFlag('vipState');
        return Number(ret) > 0;
    }

    /** 提交超级VIP信息 */
    public submitVipInfo() {
        if (!this.current) {
            return;
        }
        this.current.sumbitVipInfo();
    }

    /** 跳转评分 */
    public toAppStroeScore() {
        if (!this.current) {
            return;
        }
        this.current.toAppStroeScore();
    }



    /** App版本号 */
    public getAppVersion() {
        let version = 'unknown';
        if (this.current) {
            version = this.current.appVersion;
        }
        return version;
    }

    /** 热更资源版本 */
    public getResVersion() {
        let version = 'unknown';
        if (this.current) {
            let ret = GameHelper.compareVersion(this.current.appVersion, this.current.resVersion);
            if (ret > 0) {
                version = this.current.appVersion;
            } else {
                version = this.current.resVersion;
            }
        }
        return version;
    }

    /** 安全区域·主要针对H5 */
    public getSafeArea() {
        // let szView = cc.view.getVisibleSize();
        // return { x: 0, y: 0, width: szView.width, height: szView.height - 100 };
        return null;
    }
}

declare global {
    interface ISZG {
        plat: PlatManager;
    }
}

szg.plat = PlatManager.getInstance();
export { };