
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatHaidx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdEhhaWR4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFFMUM7SUFBK0IsNkJBQVU7SUFFckM7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFIRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7O0lBQ3JDLENBQUM7SUFFUyxvQ0FBZ0IsR0FBMUI7UUFDSSxpQkFBTSxnQkFBZ0IsV0FBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCOEIsdUJBQVUsR0FnQnhDO0FBaEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdE5hdGl2ZSB9IGZyb20gXCIuL1BsYXROYXRpdmVcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXRIYWlkeCBleHRlbmRzIFBsYXROYXRpdmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2RrTWFwcGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuYW5kQ2xhc3MgPSAnY29tLnN6R2FtZS5TWkdQcm94eSc7XG4gICAgICAgIHRoaXMuaW9zQ2xhc3MgPSAnSGFpZHhTREtIZWxwZXInO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkTG9jYWxTZXR0aW5nKCkge1xuICAgICAgICBzdXBlci5sb2FkTG9jYWxTZXR0aW5nKCk7XG4gICAgICAgIHRoaXMuc3VwcG9ydEFjY291bnRDZW50ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1cHBvcnRGYWNlYm9vayA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1BvbGljaWVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1VzZXJBZ3JlZW1lbnQgPSBmYWxzZTtcbiAgICB9XG59Il19