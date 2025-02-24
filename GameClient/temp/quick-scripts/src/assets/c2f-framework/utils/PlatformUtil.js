"use strict";
cc._RF.push(module, '9eaedVDguxNxpH3GccAYzqB', 'PlatformUtil');
// c2f-framework/utils/PlatformUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformUtil = void 0;
/** 平台数据 */
var PlatformUtil = /** @class */ (function () {
    function PlatformUtil() {
    }
    /** 是否为安卓系统 */
    PlatformUtil.isNativeAndroid = function () {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID)
            return true;
        return false;
    };
    /** 是否为苹果系统 */
    PlatformUtil.isNativeIOS = function () {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS)
            return true;
        return false;
    };
    /** 获取平台名 */
    PlatformUtil.getPlateform = function () {
        if (this.isNativeAndroid())
            return 'android';
        else if (this.isNativeIOS())
            return 'ios';
        else
            return 'h5';
    };
    /** 安全区 */
    PlatformUtil.getSafeAreaR = function () {
        var rect = cc.sys.getSafeAreaRect();
        if (!cc.sys.isNative) {
            var platArea = szg.plat.getSafeArea();
            if (platArea) {
                rect = platArea;
            }
        }
        return rect;
    };
    return PlatformUtil;
}());
exports.PlatformUtil = PlatformUtil;
c2f.utils.platform = PlatformUtil;

cc._RF.pop();