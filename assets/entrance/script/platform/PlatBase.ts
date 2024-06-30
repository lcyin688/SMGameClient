import { PlatDef } from "./PlatDefine";

export class PlatBase {
    /** 玩家信息 */
    playerInfo: PlatDef.GameUserInfo;
    /** 平台配置 */
    platCfg: PlatDef.PlatCfg;
    /** sdk账号信息 */
    accoutInfo: PlatDef.AccountLogin;
    /** 设备信息 */
    phoneInfo: PlatDef.PhoneInfo;
    /** 初始化成功 */
    sdkInitSuc: boolean;

    /** 是否支持退出游戏界面 */
    supportQuitGame: boolean;
    /** 是否支持用户中心 */
    supportAccountCenter: boolean;
    /** 是否支持切换账号 */
    supportSwitchAcc: boolean;
    /** 是否支持Facebook */
    supportFacebook: boolean;
    /** 是否需要显示国内政策等UI */
    showPolicies: boolean;
    /** 是否需要用户协议 */
    showUserAgreement: boolean;

    /** APP版本号 */
    appVersion: string;
    /** 资源版本号 */
    resVersion: string;

    constructor() {
        this.playerInfo = new PlatDef.GameUserInfo();
        this.platCfg = null;
        this.accoutInfo = null;
        this.phoneInfo = null;
        this.sdkInitSuc = false;
        this.showPolicies = true;
        this.loadLocalSetting();
    }

    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    protected loadLocalSetting() {
        this.supportQuitGame = false;
        this.supportAccountCenter = false;
        this.supportSwitchAcc = false;
        this.supportFacebook = false;
        this.showUserAgreement = true;
    }

    /** 更新玩家信息 */
    public updatePlayerInfo(info: Object) {
        for (let key in info) {
            this.playerInfo[key] = info[key];
        }
    }

    /** 获得平台配置信息 */
    public loadPlatCfg() { return null; }
    /** 获得手机信息 */
    public loadPhoneInfo() { }
    /** 拷贝到剪贴板 */
    public copyToClipboard(txt: string) {
        if (cc.sys.isBrowser) { //浏览器
            try {
                if (navigator && navigator.clipboard) {
                    navigator.clipboard.writeText(txt);
                }
            } catch (error) {
                cc.log('拷贝文本失败');
            }
        }
    }
    /** 初始化bugly */
    public initBugly() { }
    /** 初始化bugly */
    public buglySetUserId(str: string) { }

    /** bugly 版本 */
    public setAppVersion(str: string) { }
    /** 显示开发者面板 */
    public showDevUI() { return false; }

    /** ------sdk流程相关-------- */
    /** 初始化SDK */
    public initSDK(param: any) { }
    /** 登录 */
    public login() { }
    /** 登出 */
    public logout() { }
    /** 切换账号 */
    public switchAccount() { }
    /** 支付 */
    public pay(...params) { }
    /** 退出游戏 */
    public quitGame() { }
    /** 用户中心 */
    public openAccountCenter() { }
    /** 提交用户信息 */
    public submitInfo(type: string, ext?: any) { }
    /** 展示用户协议 */
    public showPrivacyPolicy(txt: string) { }
    /** 分享 */
    public share() { }
    /** 上传vip信息 */
    public sumbitVipInfo() { }
    /** 前往app评分 */
    public toAppStroeScore() { }
    /** 通用 */
    public commonFunc(param: any) { }
    public getOtherByFlag(flag: string) { return ""; }


    /** ----------平台回调----------- */
    /** SDK初始化结果 */
    public onSdkInitRet(data: any) {
        c2f.log.logSDK('SDK init result:', data);

        let ret = this.getRealData(data);
        this.sdkInitSuc = ret.code == PlatDef.RetCode.success;
        cc.director.emit(PlatDef.SdkCBEvent.onSdkInit, this.sdkInitSuc);

        //有些SDK初始化时还没有获取设备信息的权限
        this.loadPhoneInfo();
    }

    /** SDK登录结果 */
    public onSdkLoginRet(data: any) {
        c2f.log.logSDK('SDK login result:', data);

        let ret = this.getRealData(data);
        let isSuc = ret.code == PlatDef.RetCode.success;
        if (isSuc) {
            this.accoutInfo = ret;
            this.accoutInfo.isBind = ret.facebook != '' ? true : false;
        }
        cc.director.emit(PlatDef.SdkCBEvent.onSdkLogin, isSuc);
    }

    /** 手机设备信息 */
    public onLoadPhoneRet(data: any) {
        c2f.log.logSDK('SDK phoneInfo result:', data);
        this.phoneInfo = this.getRealData(data);
    }

    /** 账号信息绑定 */
    public onSdkBindRet(data: any) {
        c2f.log.logSDK('SDK bind result:', data);
        let ret = this.getRealData(data);
        let isSuc = ret.code == PlatDef.RetCode.success;
        this.accoutInfo.isBind = isSuc;
        cc.director.emit('onBindResult', isSuc);
    }

    /** SDK登出账号 */
    public onSdkLogoutRet(data: any) {
        c2f.log.logSDK('SDK logout result:', data);
    }

    /** 充值回调 */
    public onSdkPayRet(data: any) {
        c2f.log.logSDK('SDK pay result:', data);
        //TODO:
    }

    public onSdkExitRet(data: any) {
        c2f.log.logSDK('SDK exit result:', data);
        //TODO:
    }

    /** 上传vip信息 */
    public onSdkSubmitVipRet(data: any) {
        c2f.log.logSDK('SDK submit vip result:', data);
        let ret = this.getRealData(data);
        let isSuc = ret.code == PlatDef.RetCode.success;
        cc.director.emit(PlatDef.SdkCBEvent.onSdkVipSubmit, isSuc);
    }
    /** 将参数转换成字符串 */
    protected getParamString(param: string | Object) {
        let strParam: string = '';
        if (typeof param == 'string') {
            strParam = param;
        } else {
            strParam = JSON.stringify(param);
        }
        return strParam;
    }

    /** 获取有效值 */
    protected getRealData(data: any) {
        let ret = null;
        if (typeof data == 'string' && data.length > 0) {
            ret = JSON.parse(data);
        } else {
            ret = data;
        }
        return ret;
    }
}