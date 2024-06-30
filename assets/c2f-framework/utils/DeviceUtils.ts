
/** 数组工具 */
class DeviceUtils {
    /**
     * 屏幕常亮
     * @param on 开/关
     */
    static keepScreenOn(on: boolean) {
        if (cc.sys.isNative && jsb) {
            jsb.Device.setKeepScreenOn(on);
        }
    }

    /**
     * 震动
     * @param dur 时长 
     */
    static vibrate(dur: number = 0.01) {
        if (cc.sys.isNative && jsb) {
            jsb.Device.vibrate(dur);
        }
    }
}

declare global {
    interface IUtil {
        device: typeof DeviceUtils;
    }
}
c2f.utils.device = DeviceUtils;
export { };
