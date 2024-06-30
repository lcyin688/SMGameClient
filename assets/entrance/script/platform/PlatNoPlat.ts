import { PlatBase } from "./PlatBase";
import { PlatDef } from "./PlatDefine";

export class PlatNoPlat extends PlatBase {

    constructor() {
        super();
        this.initPlatCfg();
        this.initPhoneInfo();
    }

    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    protected loadLocalSetting() {
        super.loadLocalSetting();
        this.appVersion = '0.01.01';
        this.resVersion = '1.01.01';
    }

    /** 渠道信息 */
    private initPlatCfg() {
        this.platCfg = new PlatDef.PlatCfg()
        this.platCfg.showFPS = true;
    }

    /** 构建设备信息 */
    private initPhoneInfo() {
        this.phoneInfo = new PlatDef.PhoneInfo();
    }

    /** 无平台(DEV)模式下登录成功 */
    public noPlatLogined(accId: string, sdkFlag: string, payFlag: string) {
        let retData: any = {};
        retData.code = PlatDef.RetCode.success;
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
    }

    /** 初始化SDK */
    public initSDK(param: any) {
        this.onSdkInitRet({ code: PlatDef.RetCode.success });
    }

    /** 登录 */
    public login() {
        c2f.gui.hideLoading();
        let { EntranceUI } = require('EntranceView');
        c2f.gui.open(EntranceUI.NoPlatLogin, { loginCb: this.noPlatLogined.bind(this) });
    }

    /** 登出 */
    public logout() {
        this.onSdkLogoutRet({ code: PlatDef.RetCode.success })
    }

    /** 切换账号 */
    public switchAccount() {
        //TODO:
    }



    /** 退出游戏 */
    public quitGame() {
        this.onSdkExitRet({ code: PlatDef.RetCode.success });
    }

    /** 提交用户信息 */
    public submitInfo(flag: string, ext?: any) {
        c2f.log.logSDK('submitInfo:', flag);
    }

    /** 显示开发者面板 */
    public showDevUI() {
        return true;
    }
}