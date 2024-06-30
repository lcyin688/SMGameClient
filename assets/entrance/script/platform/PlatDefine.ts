export namespace PlatDef {

    export enum RetCode {
        /** 成功 */
        success = 0,
        /** 失败 */
        failed = 1,
        /** 取消 */
        cancel = 2,
        /** 未知 */
        unknown = 3,
        /** 等待确认 */
        wait = 4,
    }

    /** 平台账号登录信息 */
    export class AccountLogin {
        /** 登录返回值 */
        code: RetCode;
        /** 信息 */
        msg: string;
        /** 登录token(唯一标志) */
        userToken: string;
        /** 用户名称 */
        userName: string;
        /** 用户ID */
        userId: string;
        /** 渠道ID */
        channelId: string;
        /** 是否绑定(facebook) */
        isBind: Boolean;
        /** 扩展信息 */
        extInfo: string;
        /** 时间戳 */
        createTs: string;
    }

    /** 玩家用户信息 */
    export class GameUserInfo {
        roleId: string;
        roleName: string;
        roleLv: number;
        roleVip: number;
        money: number;
        power: number;
        areaId: number;
        svrId: string;
        svrName: string;
        unionName: string;
        createTm: number;
    }

    /** 提交玩家信息 */
    export class SubmitData extends GameUserInfo {
        /** 平台账号ID */
        accountId: string;
        /** 提交类型 */
        submitFlag: string;
        /** 提交事件·自定义事件的上传标志 */
        eventName: string;
        /** 行为KEY */
        actionKey: string;
        /** 行为参数 */
        actionValue: string;
    }

    /** 充值扩展信息(透传信息) */
    export class PayExtend {
        /** 玩家ID */
        plrId: string;
        /** 产品ID（充值ID） */
        prdId: number;
        /** 充值金额 */
        price: number;
        /** 渠道标志 */
        sdkFlag: string;
        /** 充值时间(时间戳) */
        ts: number;
    }

    /** 充值信息 */
    export class PayData extends GameUserInfo {
        /** 商品ID(充值ID) */
        prdId: number;
        /** 商品名称 */
        prdName: string;
        /** 商品描述 */
        prdDesc: string;
        /** 商城ID(苹果商城/谷歌商城充值ID) */
        storeId: string;
        /** 单价(元)*/
        price100: number;
        /** 充值透传信息 */
        extInfo: string;
        /** 充值回调地址 */
        payCbUrl: string;
    }

    /** 手机相关信息 */
    export class PhoneInfo {
        imei: string;
        deviceId: string;
        mac: string
        resolution: string;
        os: string;
        osVersion: string;
        model: string;
        orientation: number; //home键的位置，3:home键在右边，4:home键在左边
        hollow: number;      //刘海的高度，如果没有刘海，hollow=0
        constructor() {
            this.imei = 'unknown';
            this.deviceId = 'unknown';
            this.mac = '00:00:00:00';
            this.resolution = "640x1136";
            this.os = "MacOS";
            this.osVersion = '1';
            this.model = 'MAC';
            this.orientation = 3;
            this.hollow = 0;
        }
    }

    /** 渠道配置信息 */
    export class PlatCfg {
        /** 显示debug信息 */
        showFPS: Boolean;
        /** 网络配置 */
        netCfgUrl: string;
        /** 提审检查 */
        tsCheckUrl: string;
        /** 平台文件名 */
        platFile: string;
        /** 渠道标志：登录等会用，区分不同的登录 */
        sdkFlag: string;
        /** 平台名称 */
        platName: string;
        /** 充值标志: 可能会有多个标志(马甲包) */
        payFlag: string;
        /** 充值回调标志：如无配置，则使用sdkFlag */
        payCbFlag?: string;
        /** 公告标志 */
        noticeFlag: string;
        /** 热更新文件名称 */
        projManifest: string;
        /** 扩展信息(有些渠道会要求更多配置) */
        extend: string;
        /** 超级登录·账号目标平台 */
        superFlag: string;
    }

    /** 调用SDK接口函数名 */
    export enum SdkFuncName {
        sdkInit = 'sdkInit',
        sdkLogin = 'sdkLogin',
        sdkLogout = 'sdkLogout',
        sdkSwitchAcc = 'sdkSwitchAcc',
        sdkPay = 'sdkPay',
        sdkQuitGame = 'sdkQuitGame',
        sdkSubmit = 'sdkSubmit',
        sdkAccCenter = 'sdkAccCenter',
        sdkPrivacyPolicy = 'sdkPrivacyPolicy',
        sdkShare = 'sdkShare',
        sdkSetPayCbUrl = 'sdkSetPayCbUrl',
        sdkGetOtherInfo = 'sdkGetOtherInfo',
        sdkSubmitVipInfo = 'sdkSubmitVipInfo',
        sdkToAppScore = 'sdkToAppScore',
        getPlatCfg = 'nativeGetPlatCfg',
        loadPhoneInfo = 'nativeLoadPhoneInfo',
        copyToClipboard = 'nativeCopyToClipboard',
        initBugly = 'nativeInitBugly',
        buglySetUserId = 'nativeBuglySetUserId',
        setAppVersion = 'nativeSetAppVersion',
        commonFunc = 'nativeCommonFunc',
    }

    /** sdk回调函数名:原生回调CC需要用到 */
    export enum SdkCbFuncName {
        onSdkInit = 'onSdkInit',
        onSdkExit = 'onSdkExit',
        onSdkLogin = 'onSdkLogin',
        onSdkLogout = 'onSdkLogout',
        onSdkSwitchAcc = 'onSdkSwitchAcc',
        onSdkPayResult = 'onSdkPayResult',
        onSdkBind = 'onSdkBind',
        onSdkUserInfoCmpl = 'onSdkUserInfoCmpl',
        onSdkShared = 'onSdkShared',
        onSdkAgreeProtocol = 'onSdkAgreeProtocol',
        onPhoneInfoResult = 'onPhoneInfoResult',
        onSdkSubmitVip = 'onSdkSubmitVip',
    }

    /** SDK回调事件 */
    export enum SdkCBEvent {
        onSdkInit = 'onSdkInit',
        onSdkLogin = 'onSdkLogin',
        onSdkBind = 'onSdkBind',
        onSdkVipSubmit = 'onSdkVipSubmit',
    }

    export enum SdkSubmitEvent {
        createRole = 'createRole',
        login = 'login',
        logout = 'logout',
        exitGame = 'exitGame',
        levelUp = 'levelUp',
        pay = 'pay',
        selectSvr = 'selectSvr',
        changeName = 'changeName',
        loadHotRes = 'loadHotRes',
        resLoaded = 'resLoaded',
        guideComplete = 'guideComplete',
        firstCharge = 'firstCharge',
        joinSocity = 'joinSocity',
        custom = 'custom',
    }
}