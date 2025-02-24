
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/http/HttpCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC9odHRwL0h0dHBDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUNoQiwrQ0FBWSxDQUFBO0lBQ1osbURBQWdCLENBQUE7SUFDaEIsbURBQWdCLENBQUE7SUFDaEIsOERBQW9CLENBQUE7SUFDcEIsaUVBQXVCLENBQUE7SUFDdkIsMkVBQTRCLENBQUE7QUFDaEMsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSHR0cENvZGUge1xuICAgIGtTdWNjZXNzID0gMCxcbiAgICBrVGltZW91dCA9IDEwMDAwLFxuICAgIGtVbmtub3duID0gMTAwMDEsXG4gICAga1Nlc3Npb25UaW1lb3V0ID0gLTgsXG4gICAga0lBbUluQmxvY2tsaXN0ID0gLTMwMTMsXG4gICAga1VzZXJJc0luTXlCbG9ja2xpc3QgPSAtMzAxNFxufSJdfQ==