
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/language/LanguageData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10293AfmOhAqrmgCSIfI8dc', 'LanguageData');
// c2f-framework/core/language/LanguageData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageData = void 0;
var C2FConst_1 = require("../../define/C2FConst");
var words_1 = require("../../game/words");
var LanguageData = /** @class */ (function () {
    function LanguageData() {
    }
    LanguageData.getLangByID = function (labId, params) {
        if (params === void 0) { params = ''; }
        var value = LanguageData.data[labId] || ('WD_' + labId);
        var result = c2f.utils.str.formatWords(value, params);
        return result;
    };
    /** 当前语言 */
    LanguageData.current = C2FConst_1.C2FConst.LanguageKey.zh;
    /** 语言配置 */
    LanguageData.data = words_1.words;
    return LanguageData;
}());
exports.LanguageData = LanguageData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvbGFuZ3VhZ2UvTGFuZ3VhZ2VEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUNqRCwwQ0FBeUM7QUFFekM7SUFBQTtJQVdBLENBQUM7SUFMaUIsd0JBQVcsR0FBekIsVUFBMEIsS0FBYSxFQUFFLE1BQW1CO1FBQW5CLHVCQUFBLEVBQUEsV0FBbUI7UUFDeEQsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFURCxXQUFXO0lBQ0osb0JBQU8sR0FBVyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7SUFDakQsV0FBVztJQUNKLGlCQUFJLEdBQVEsYUFBSyxDQUFDO0lBTzdCLG1CQUFDO0NBWEQsQUFXQyxJQUFBO0FBWFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi8uLi9kZWZpbmUvQzJGQ29uc3RcIjtcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4uLy4uL2dhbWUvd29yZHNcIjtcblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlRGF0YSB7XG4gICAgLyoqIOW9k+WJjeivreiogCAqL1xuICAgIHN0YXRpYyBjdXJyZW50OiBzdHJpbmcgPSBDMkZDb25zdC5MYW5ndWFnZUtleS56aDtcbiAgICAvKiog6K+t6KiA6YWN572uICovXG4gICAgc3RhdGljIGRhdGE6IGFueSA9IHdvcmRzO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYW5nQnlJRChsYWJJZDogbnVtYmVyLCBwYXJhbXM6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTGFuZ3VhZ2VEYXRhLmRhdGFbbGFiSWRdIHx8ICgnV0RfJyArIGxhYklkKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGMyZi51dGlscy5zdHIuZm9ybWF0V29yZHModmFsdWUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSJdfQ==