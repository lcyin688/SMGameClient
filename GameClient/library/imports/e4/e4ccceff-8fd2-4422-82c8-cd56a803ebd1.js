"use strict";
cc._RF.push(module, 'e4ccc7/j9JEIoLIzVaoA+vR', 'HttpCode');
// c2f-framework/net/http/HttpCode.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCode = void 0;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["kSuccess"] = 0] = "kSuccess";
    HttpCode[HttpCode["kTimeout"] = 10000] = "kTimeout";
    HttpCode[HttpCode["kUnknown"] = 10001] = "kUnknown";
    HttpCode[HttpCode["kSessionTimeout"] = -8] = "kSessionTimeout";
    HttpCode[HttpCode["kIAmInBlocklist"] = -3013] = "kIAmInBlocklist";
    HttpCode[HttpCode["kUserIsInMyBlocklist"] = -3014] = "kUserIsInMyBlocklist";
})(HttpCode = exports.HttpCode || (exports.HttpCode = {}));

cc._RF.pop();