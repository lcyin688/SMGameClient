"use strict";
cc._RF.push(module, '1cc4aH/xl1OdY2lUbRU/vfl', 'PlatHaidx');
// entrance/script/platform/PlatHaidx.ts

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
exports.PlatHaidx = void 0;
var PlatNative_1 = require("./PlatNative");
var PlatHaidx = /** @class */ (function (_super) {
    __extends(PlatHaidx, _super);
    function PlatHaidx() {
        var _this = _super.call(this) || this;
        _this.sdkMapping = null;
        _this.andClass = 'com.szGame.SZGProxy';
        _this.iosClass = 'HaidxSDKHelper';
        return _this;
    }
    PlatHaidx.prototype.loadLocalSetting = function () {
        _super.prototype.loadLocalSetting.call(this);
        this.supportAccountCenter = true;
        this.supportFacebook = true;
        this.showPolicies = false;
        this.showUserAgreement = false;
    };
    return PlatHaidx;
}(PlatNative_1.PlatNative));
exports.PlatHaidx = PlatHaidx;

cc._RF.pop();