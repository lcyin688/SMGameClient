
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/PlatformUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL1BsYXRmb3JtVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ1g7SUFBQTtJQW9DQSxDQUFDO0lBbkNHLGNBQWM7SUFDUCw0QkFBZSxHQUF0QjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQ2xELE9BQU8sSUFBSSxDQUFBO1FBQ2YsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELGNBQWM7SUFDUCx3QkFBVyxHQUFsQjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQzlDLE9BQU8sSUFBSSxDQUFBO1FBQ2YsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELFlBQVk7SUFDTCx5QkFBWSxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixPQUFPLFNBQVMsQ0FBQTthQUNmLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQTs7WUFFWixPQUFPLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRUQsVUFBVTtJQUNILHlCQUFZLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLG9DQUFZO0FBMkN6QixHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5bmz5Y+w5pWw5o2uICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1VdGlsIHtcbiAgICAvKiog5piv5ZCm5Li65a6J5Y2T57O757ufICovXG4gICAgc3RhdGljIGlzTmF0aXZlQW5kcm9pZCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqIOaYr+WQpuS4uuiLueaenOezu+e7nyAqL1xuICAgIHN0YXRpYyBpc05hdGl2ZUlPUygpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5bmz5Y+w5ZCNICovXG4gICAgc3RhdGljIGdldFBsYXRlZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOYXRpdmVBbmRyb2lkKCkpXG4gICAgICAgICAgICByZXR1cm4gJ2FuZHJvaWQnXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNOYXRpdmVJT1MoKSlcbiAgICAgICAgICAgIHJldHVybiAnaW9zJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gJ2g1J1xuICAgIH1cblxuICAgIC8qKiDlronlhajljLogKi9cbiAgICBzdGF0aWMgZ2V0U2FmZUFyZWFSKCkge1xuICAgICAgICBsZXQgcmVjdCA9IGNjLnN5cy5nZXRTYWZlQXJlYVJlY3QoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGxldCBwbGF0QXJlYSA9IHN6Zy5wbGF0LmdldFNhZmVBcmVhKCk7XG4gICAgICAgICAgICBpZiAocGxhdEFyZWEpIHtcbiAgICAgICAgICAgICAgICByZWN0ID0gcGxhdEFyZWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElVdGlsIHtcbiAgICAgICAgcGxhdGZvcm06IHR5cGVvZiBQbGF0Zm9ybVV0aWw7XG4gICAgfVxufVxuYzJmLnV0aWxzLnBsYXRmb3JtID0gUGxhdGZvcm1VdGlsO1xuZXhwb3J0IHsgfTtcbiJdfQ==