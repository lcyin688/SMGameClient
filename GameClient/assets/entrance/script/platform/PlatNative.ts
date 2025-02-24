import { GameConsts } from "../../../Script/game/GameConsts";
import { PlatBase } from "./PlatBase";
import { PlatDef } from "./PlatDefine";

export class PlatNative extends PlatBase {

    /** android接口类 */
    protected andClass: string;
    /** ios接口类 */
    protected iosClass: string;
    /** 原生调用接口映射表 */
    protected sdkMapping: any;
    /** 接口函数列表 */
    private sdkFunc: Object;

    constructor() {
        super();
        this.sdkMapping = null;
        this.initSdkFunc();
    }

    /** 初始接口定义 */
    protected initSdkFunc() {
        this.sdkFunc = {};
        this.sdkFunc[PlatDef.SdkFuncName.sdkInit] = PlatDef.SdkFuncName.sdkInit;
        this.sdkFunc[PlatDef.SdkFuncName.sdkLogin] = PlatDef.SdkFuncName.sdkLogin;
        this.sdkFunc[PlatDef.SdkFuncName.sdkLogout] = PlatDef.SdkFuncName.sdkLogout;
        this.sdkFunc[PlatDef.SdkFuncName.sdkSwitchAcc] = PlatDef.SdkFuncName.sdkSwitchAcc;
        this.sdkFunc[PlatDef.SdkFuncName.sdkQuitGame] = PlatDef.SdkFuncName.sdkQuitGame;
        this.sdkFunc[PlatDef.SdkFuncName.sdkSubmit] = PlatDef.SdkFuncName.sdkSubmit;
        this.sdkFunc[PlatDef.SdkFuncName.sdkPay] = PlatDef.SdkFuncName.sdkPay;
        this.sdkFunc[PlatDef.SdkFuncName.sdkAccCenter] = PlatDef.SdkFuncName.sdkAccCenter;
        this.sdkFunc[PlatDef.SdkFuncName.sdkPrivacyPolicy] = PlatDef.SdkFuncName.sdkPrivacyPolicy;
        this.sdkFunc[PlatDef.SdkFuncName.sdkShare] = PlatDef.SdkFuncName.sdkShare;
        this.sdkFunc[PlatDef.SdkFuncName.getPlatCfg] = PlatDef.SdkFuncName.getPlatCfg;
        this.sdkFunc[PlatDef.SdkFuncName.loadPhoneInfo] = PlatDef.SdkFuncName.loadPhoneInfo;
        this.sdkFunc[PlatDef.SdkFuncName.copyToClipboard] = PlatDef.SdkFuncName.copyToClipboard;
        this.sdkFunc[PlatDef.SdkFuncName.initBugly] = PlatDef.SdkFuncName.initBugly;
        this.sdkFunc[PlatDef.SdkFuncName.buglySetUserId] = PlatDef.SdkFuncName.buglySetUserId;
        this.sdkFunc[PlatDef.SdkFuncName.setAppVersion] = PlatDef.SdkFuncName.setAppVersion;



        this.sdkFunc[PlatDef.SdkFuncName.sdkSubmitVipInfo] = PlatDef.SdkFuncName.sdkSubmitVipInfo;
        this.sdkFunc[PlatDef.SdkFuncName.sdkToAppScore] = PlatDef.SdkFuncName.sdkToAppScore;
        this.sdkFunc[PlatDef.SdkFuncName.commonFunc] = PlatDef.SdkFuncName.commonFunc;
        this.sdkFunc[PlatDef.SdkFuncName.sdkGetOtherInfo] = PlatDef.SdkFuncName.sdkGetOtherInfo;
    }

    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    protected loadLocalSetting() {
        super.loadLocalSetting();
        this.supportQuitGame = c2f.storage.getPlainBool(GameConsts.PlatSupportQuit, false);
        this.supportAccountCenter = c2f.storage.getPlainBool(GameConsts.PlatSupportAccCenter, false);
        this.supportSwitchAcc = c2f.storage.getPlainBool(GameConsts.PlatSupportAccSwitch, false);

        this.appVersion = c2f.storage.getPlainItem(GameConsts.AppVersion, '5.01.01');
        this.resVersion = c2f.storage.getPlainItem(GameConsts.ResVersion, '0.01.01');
    }

    /** 设置原生访问接口名称 */
    public setFuncNames(newNames: Object) {
        for (let key in newNames) {
            if (this.sdkFunc.hasOwnProperty(key)) {
                this.sdkFunc[key] = newNames[key];
            }
        }
    }

    /** 获得平台配置信息 */
    public loadPlatCfg() {
        let cfg = this.getPlatCfg();
        if (cfg) {
            try {
                this.platCfg = JSON.parse(cfg);
            } catch (error) {
                //TODO:解密配置
            }
        }
    }

    /** 获得渠道配置 */
    private getPlatCfg() {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.getPlatCfg];
        let cfg = this.callNativeMethod(funcName, "(Ljava/lang/String;)Ljava/lang/String;", "");
        c2f.log.logConfig(`${funcName} ==>>:` + cfg);
        return cfg;
    }

    /** 获得手机信息 */
    public loadPhoneInfo() {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onPhoneInfoResult, this.onLoadPhoneRet.bind(this));
        //调佣
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.loadPhoneInfo];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 拷贝到剪贴板 */
    public copyToClipboard(txt: string) {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.copyToClipboard];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", txt);
    }

    /** 初始化SDK */
    public initSDK(param: any) {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkInit, this.onSdkInitRet.bind(this));
        //调用
        let strParam = this.getParamString(param);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkInit];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 登录 */
    public login() {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkLogin, this.onSdkLoginRet.bind(this));
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkLogout, this.onSdkLogoutRet.bind(this));
        //调用
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkLogin];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 登出 */
    public logout() {
        //调用
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkLogout];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 切换账号 */
    public switchAccount() {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkSwitchAcc];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 支付 */
    public pay(rchgCfg: any, ts: number, payCbUrl: string) {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkPayResult, this.onSdkPayRet.bind(this));

        let info: PlatDef.PayData = JSON.parse(JSON.stringify(this.playerInfo));
        //透传信息
        let extendInfo: any = {};
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

        info.svrId = `${this.playerInfo.areaId * 1000 + this.playerInfo.svrId}`;
        info.svrName = `${this.playerInfo.areaId}-${this.playerInfo.svrName}`;

        info.extInfo = JSON.stringify(extendInfo);
        info.payCbUrl = payCbUrl;

        let strParam = this.getParamString(info);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkPay];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 退出游戏 */
    public quitGame() {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkExit, this.onSdkExitRet.bind(this));
        //调用
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkQuitGame];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 用户中心 */
    public openAccountCenter() {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkAccCenter];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", "");
    }

    /** 提交用户信息 */
    public submitInfo(flag: string, ext?: any) {
        let info: PlatDef.SubmitData = JSON.parse(JSON.stringify(this.playerInfo));
        info.submitFlag = flag;
        info.svrId = `${this.playerInfo.areaId * 1000 + this.playerInfo.svrId}`;
        info.svrName = `${this.playerInfo.areaId}-${this.playerInfo.svrName}`;

        info.eventName = '';

        let strParam = this.getParamString(info);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkSubmit];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 展示用户协议 */
    public showPrivacyPolicy(txt: string) {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkPrivacyPolicy];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", txt);
    }

    /** 分享 */
    public share() {
        let prdInfo: any = {};
        prdInfo.svrId = `${this.playerInfo.areaId * 1000 + this.playerInfo.svrId}`;
        prdInfo.uid = this.playerInfo.roleId;
        let strParam = this.getParamString(prdInfo);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkShare];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 提交VIP信息 */
    public sumbitVipInfo() {
        //添加回调
        this.registerNativeCbs(PlatDef.SdkCbFuncName.onSdkSubmitVip, this.onSdkSubmitVipRet.bind(this));
        //上传信息
        let strParam = this.getParamString(this.playerInfo);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkSubmitVipInfo];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 前往应用内评分 */
    public toAppStroeScore() {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkToAppScore];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", '');
    }

    /** 初始化bugly */
    public initBugly() {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.initBugly];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", '');
    }
    /** 设置bugly userId */
    public buglySetUserId(flag: string) {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.buglySetUserId];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
    }
    /** bugly 版本*/
    public setAppVersion(flag: string) {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.setAppVersion];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
    }


    /** 通用函数接口 */
    public commonFunc(param: any) {
        let strParam = this.getParamString(param);
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.commonFunc];
        this.callNativeMethod(funcName, "(Ljava/lang/String;)V", strParam);
    }

    /** 其他扩展接口 */
    public getOtherByFlag(flag: string) {
        let funcName = this.sdkFunc[PlatDef.SdkFuncName.sdkGetOtherInfo];
        let retStr = this.callNativeMethod(funcName, "(Ljava/lang/String;)V", flag);
        return retStr;
    }






    /** 调用平台方法 */
    protected callNativeMethod(methodName: string, sig: string, params: string) {
        let result = null;
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            result = jsb.reflection.callStaticMethod(this.andClass, methodName, sig, params);
        } else if (cc.sys.os === cc.sys.OS_IOS) {
            //接口名称修改
            let iosClassName = this.iosClass;
            let iosFunc2Name = methodName;
            if (this.sdkMapping) {
                if (this.sdkMapping.IOSClass) {
                    iosClassName = this.sdkMapping.IOSClass;
                }
                if (this.sdkMapping[methodName]) {
                    iosFunc2Name = this.sdkMapping[methodName]
                }
                if (params && params != "") {
                    //TODO:参数加密
                    let encodePa = "";
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name + ":", encodePa);
                } else {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name);
                }
                if (result && typeof result == 'string') {
                    //TODO:返回结果解密
                }
            } else {
                if (params && params != "") {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name + ":", params);
                } else {
                    result = jsb.reflection.callStaticMethod(iosClassName, iosFunc2Name);
                }
            }
        }
        return result;
    }

    /** 注册原生回调CC */
    private registerNativeCbs(funcName: string, func: Function) {
        //加入回调列表
        cc.nativeSDK = cc.nativeSDK || {};
        if (!cc.nativeSDK.cbFuncs) {
            cc.nativeSDK.cbFuncs = {};
        }
        cc.nativeSDK.cbFuncs[funcName] = func;
        //原生到CC全局函数
        if (!cc.nativeSDK.native2CCB) {
            cc.nativeSDK.native2CCB = (funcN: string, params: any) => {
                if (cc.nativeSDK.cbFuncs.hasOwnProperty(funcN)) {
                    let dstFunc = cc.nativeSDK.cbFuncs[funcN];
                    dstFunc && dstFunc(params);
                }
            }
        }
    }


}