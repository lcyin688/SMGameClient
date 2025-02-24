"use strict";
cc._RF.push(module, '65122bt70pJs6iQdoBKIoaz', 'DeviceUtils');
// c2f-framework/utils/DeviceUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 数组工具 */
var DeviceUtils = /** @class */ (function () {
    function DeviceUtils() {
    }
    /**
     * 屏幕常亮
     * @param on 开/关
     */
    DeviceUtils.keepScreenOn = function (on) {
        if (cc.sys.isNative && jsb) {
            jsb.Device.setKeepScreenOn(on);
        }
    };
    /**
     * 震动
     * @param dur 时长
     */
    DeviceUtils.vibrate = function (dur) {
        if (dur === void 0) { dur = 0.01; }
        if (cc.sys.isNative && jsb) {
            jsb.Device.vibrate(dur);
        }
    };
    return DeviceUtils;
}());
c2f.utils.device = DeviceUtils;

cc._RF.pop();