
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/RegexUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b307FDIc1HV7jueb7r2p7R', 'RegexUtil');
// c2f-framework/utils/RegexUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 正则工具 */
var RegexUtil = /** @class */ (function () {
    function RegexUtil() {
    }
    /**
     * 判断字符是否为双字节字符（如中文字符）
     * @param string 原字符串
     */
    RegexUtil.isDoubleWord = function (string) {
        return /[^\x00-\xff]/.test(string);
    };
    return RegexUtil;
}());
c2f.utils.regex = RegexUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL1JlZ2V4VXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7QUFDWDtJQUFBO0lBUUEsQ0FBQztJQVBHOzs7T0FHRztJQUNJLHNCQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFDOUIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxnQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOato+WImeW3peWFtyAqL1xuY2xhc3MgUmVnZXhVdGlsIHtcbiAgICAvKipcbiAgICAgKiDliKTmlq3lrZfnrKbmmK/lkKbkuLrlj4zlrZfoioLlrZfnrKbvvIjlpoLkuK3mloflrZfnrKbvvIlcbiAgICAgKiBAcGFyYW0gc3RyaW5nIOWOn+Wtl+espuS4slxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RvdWJsZVdvcmQoc3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIC9bXlxceDAwLVxceGZmXS8udGVzdChzdHJpbmcpO1xuICAgIH1cbn1cblxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElVdGlsIHtcbiAgICAgICAgcmVnZXg6IHR5cGVvZiBSZWdleFV0aWw7XG4gICAgfVxufVxuYzJmLnV0aWxzLnJlZ2V4ID0gUmVnZXhVdGlsO1xuZXhwb3J0IHsgfTtcbiJdfQ==