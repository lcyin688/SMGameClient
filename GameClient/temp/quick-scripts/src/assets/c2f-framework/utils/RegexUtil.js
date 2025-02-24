"use strict";
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