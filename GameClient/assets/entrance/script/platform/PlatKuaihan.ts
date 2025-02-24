import { PlatNative } from "./PlatNative";
import { PlatDef } from "./PlatDefine";

export class PlatKuaihan extends PlatNative {
    constructor() {
        super();
        this.sdkMapping = null;
        this.andClass = 'com.szGame.SZGProxy';
    }


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

    }

    /** 登出 */
    public logout() {
        this.onSdkLogoutRet({ code: PlatDef.RetCode.success })
    }



    /** 退出游戏 */
    public quitGame() {
        this.onSdkExitRet({ code: PlatDef.RetCode.success });
    }

    /** 显示开发者面板 */
    public showDevUI() {
        return true;
    }

}