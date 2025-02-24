
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/DeviceUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0RldmljZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsV0FBVztBQUNYO0lBQUE7SUFvQkEsQ0FBQztJQW5CRzs7O09BR0c7SUFDSSx3QkFBWSxHQUFuQixVQUFvQixFQUFXO1FBQzNCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFPLEdBQWQsVUFBZSxHQUFrQjtRQUFsQixvQkFBQSxFQUFBLFVBQWtCO1FBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQU9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIOaVsOe7hOW3peWFtyAqL1xuY2xhc3MgRGV2aWNlVXRpbHMge1xuICAgIC8qKlxuICAgICAqIOWxj+W5leW4uOS6rlxuICAgICAqIEBwYXJhbSBvbiDlvIAv5YWzXG4gICAgICovXG4gICAgc3RhdGljIGtlZXBTY3JlZW5PbihvbjogYm9vbGVhbikge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGpzYikge1xuICAgICAgICAgICAganNiLkRldmljZS5zZXRLZWVwU2NyZWVuT24ob24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZyH5YqoXG4gICAgICogQHBhcmFtIGR1ciDml7bplb8gXG4gICAgICovXG4gICAgc3RhdGljIHZpYnJhdGUoZHVyOiBudW1iZXIgPSAwLjAxKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYganNiKSB7XG4gICAgICAgICAgICBqc2IuRGV2aWNlLnZpYnJhdGUoZHVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVXRpbCB7XG4gICAgICAgIGRldmljZTogdHlwZW9mIERldmljZVV0aWxzO1xuICAgIH1cbn1cbmMyZi51dGlscy5kZXZpY2UgPSBEZXZpY2VVdGlscztcbmV4cG9ydCB7IH07XG4iXX0=