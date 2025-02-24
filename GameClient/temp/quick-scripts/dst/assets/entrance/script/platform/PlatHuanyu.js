
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatHuanyu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdEh1YW55dS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRTFDO0lBQWdDLDhCQUFVO0lBRXRDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQzs7SUFDMUMsQ0FBQztJQUdMLGlCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVCtCLHVCQUFVLEdBU3pDO0FBVFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0TmF0aXZlIH0gZnJvbSBcIi4vUGxhdE5hdGl2ZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhdEh1YW55dSBleHRlbmRzIFBsYXROYXRpdmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2RrTWFwcGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuYW5kQ2xhc3MgPSAnY29tLnN6R2FtZS5TWkdQcm94eSc7XG4gICAgfVxuXG5cbn0iXX0=