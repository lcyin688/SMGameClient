"use strict";
cc._RF.push(module, 'e8383ESBtZOYpS9F92qRROP', 'PlatHuanyu');
// entrance/script/platform/PlatHuanyu.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatHuanyu = void 0;
var PlatNative_1 = require("./PlatNative");
var PlatHuanyu = /** @class */ (function (_super) {
    __extends(PlatHuanyu, _super);
    function PlatHuanyu() {
        var _this = _super.call(this) || this;
        _this.sdkMapping = null;
        _this.andClass = 'com.szGame.SZGProxy';
        return _this;
    }
    return PlatHuanyu;
}(PlatNative_1.PlatNative));
exports.PlatHuanyu = PlatHuanyu;

cc._RF.pop();