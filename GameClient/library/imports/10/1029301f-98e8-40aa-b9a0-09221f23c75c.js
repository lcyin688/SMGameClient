"use strict";
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