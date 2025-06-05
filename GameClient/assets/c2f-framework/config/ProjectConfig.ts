declare global {
    interface ICore {
        /** 项目配置 */
        projectConfig: typeof ProjectConfig;
        /** 屏幕方向 */
        ScreenOrientation: typeof ScreenOrientation;
        /** 加载类型 */
        LoadType: typeof LOAD_TYPE;
    }
    interface TCore {
        ScreenOrientation: ScreenOrientation;
    }
    namespace c2f {
        namespace core {
            /** 屏幕方向 */
            type ScreenOrientation = TCore['ScreenOrientation'];
        }
    }
}
// 确保c2f对象存在
if (typeof c2f === 'undefined') {
    (window as any).c2f = {};
}
if (typeof c2f.core === 'undefined') {
    // @ts-ignore
    c2f.core = {};
}

/** 屏幕方向 */
export enum ScreenOrientation {
    /** 竖屏 home在下  */
    PORTRAIT = 0,
    /** 横屏 home在右  */
    LANDSCAPE_RIGHT = 1,
    /** 竖屏 home在上  */
    PORTRAIT_UPSIDE_DOWN = 2,
    /** 横屏 home在左  */
    LANDSCAPE_LEFT = 3,
}
c2f.core.ScreenOrientation = ScreenOrientation;

/** 加载类型 */
export enum LOAD_TYPE {
    /** 热更 */
    HOT_UPDATE = 0,
    /** 预加载 */
    PRELOAD = 1,
    /** 加载 */
    LOAD = 2,
    /** 连接服务器 */
    CONNECT = 3,
}

// c2f.core.LoadType = LOAD_TYPE;

export interface AudioResConfig {
    /** 通用按钮点击音效 */
    click?: string;
    /** 背景音乐 */
    bgm?: string;
}

export default class ProjectConfig {
    /** 屏幕方向 */
    public static orientation: ScreenOrientation = cc.sys.isNative ? jsb.device.getDeviceRotation() : null;
    /** 客户端设计分辨率 */
    public static designResolution = cc.size(1280, 720);
    /** 是否刘海屏 */
    public static isNotch = false;
    /** app 启动携带跳转参数 */
    public static appLauncherJump: string = null;

    /**
     * 本地时间戳与服务器时间戳差值 单位:ms, TODO 4.2 版本后移除
     * @deprecated 请使用 TimeInfo.Inst.serverNow() 获取服务器时间戳
     */
    public static timeOffset = 0;

    /** 是否登录完成 */
    public static isLoginComplete = false;
    /** 是否自动登录 */
    public static autoLogin = true;
    /** 音效配置 */
    public static audioCfg: AudioResConfig = {};

    /** 游戏列表 */
    public static gameListMap: Set<number> = new Set();

    /** 公共配置 */
    public static commonConfig = {
        /** 日志上报开关, 0关 1开 */
        logReportSwitch: {
            /** 总开关 */
            all: 1,
            verbose: 0,
            debug: 0,
            info: 1,
            warn: 1,
            error: 1,
            fatal: 1,
        },
        /** 日志打印开关, 0关 1开 */
        logPrintSwitch: {
            /** 总开关 */
            all: 1,
            verbose: 1,
            debug: 1,
            info: 1,
            warn: 1,
            error: 1,
            fatal: 1,
        },
    };

    public static init(): void {
        this.initNotchPhone();
    }

    /**
     * 刘海屏手机
     */
    private static initNotchPhone() {
        let setNotch = () => {
            let frameSize = cc.view.getFrameSize();
            let width = frameSize.width > frameSize.height ? frameSize.width : frameSize.height;
            let height = frameSize.width > frameSize.height ? frameSize.height : frameSize.width;
            this.isNotch = width / height > (1280 + 60 * 2) / 720;

            c2f.log.log(`ProjectConfig initNotchPhone, setNotch, isNotch: ${this.isNotch}, frameSize.width: ${frameSize.width}, frameSize.height: ${frameSize.height}`);
        };

        setNotch();
        cc.view.on('canvas-resize', setNotch, this);
    }
}

c2f.core.projectConfig = ProjectConfig;
