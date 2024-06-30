/** 平台数据 */
export class PlatformUtil {
    /** 是否为安卓系统 */
    static isNativeAndroid() {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID)
            return true
        return false
    }

    /** 是否为苹果系统 */
    static isNativeIOS() {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS)
            return true
        return false
    }

    /** 获取平台名 */
    static getPlateform() {
        if (this.isNativeAndroid())
            return 'android'
        else if (this.isNativeIOS())
            return 'ios'
        else
            return 'h5'
    }

    /** 安全区 */
    static getSafeAreaR() {
        let rect = cc.sys.getSafeAreaRect();
        if (!cc.sys.isNative) {
            let platArea = szg.plat.getSafeArea();
            if (platArea) {
                rect = platArea;
            }
        }
        return rect;
    }
}

declare global {
    interface IUtil {
        platform: typeof PlatformUtil;
    }
}
c2f.utils.platform = PlatformUtil;
export { };
