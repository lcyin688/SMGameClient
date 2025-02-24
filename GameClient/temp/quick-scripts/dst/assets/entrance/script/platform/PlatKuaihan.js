
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatKuaihan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '324d3S/IttLqLQOFFgUvUl0', 'PlatKuaihan');
// entrance/script/platform/PlatKuaihan.ts

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
exports.PlatKuaihan = void 0;
var PlatNative_1 = require("./PlatNative");
var PlatDefine_1 = require("./PlatDefine");
var PlatKuaihan = /** @class */ (function (_super) {
    __extends(PlatKuaihan, _super);
    function PlatKuaihan() {
        var _this = _super.call(this) || this;
        _this.sdkMapping = null;
        _this.andClass = 'com.szGame.SZGProxy';
        return _this;
    }
    PlatKuaihan.prototype.noPlatLogined = function (accId, sdkFlag, payFlag) {
        var retData = {};
        retData.code = PlatDefine_1.PlatDef.RetCode.success;
        retData.userId = accId;
        retData.createTs = c2f.utils.date.getLocalTick();
        retData.userToken = 'token';
        this.onSdkLoginRet(retData);
        if (sdkFlag.length > 0) {
            this.platCfg.superFlag = sdkFlag;
        }
        if (payFlag.length > 0) {
            this.platCfg.payFlag = payFlag;
        }
    };
    /** 初始化SDK */
    PlatKuaihan.prototype.initSDK = function (param) {
        this.onSdkInitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 登录 */
    PlatKuaihan.prototype.login = function () {
        c2f.gui.hideLoading();
    };
    /** 登出 */
    PlatKuaihan.prototype.logout = function () {
        this.onSdkLogoutRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 退出游戏 */
    PlatKuaihan.prototype.quitGame = function () {
        this.onSdkExitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 显示开发者面板 */
    PlatKuaihan.prototype.showDevUI = function () {
        return true;
    };
    return PlatKuaihan;
}(PlatNative_1.PlatNative));
exports.PlatKuaihan = PlatKuaihan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdEt1YWloYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUMxQywyQ0FBdUM7QUFFdkM7SUFBaUMsK0JBQVU7SUFDdkM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDOztJQUMxQyxDQUFDO0lBR00sbUNBQWEsR0FBcEIsVUFBcUIsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlO1FBQ2hFLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDcEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCxhQUFhO0lBQ04sNkJBQU8sR0FBZCxVQUFlLEtBQVU7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxTQUFTO0lBQ0YsMkJBQUssR0FBWjtRQUNJLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVELFNBQVM7SUFDRiw0QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFJRCxXQUFXO0lBQ0osOEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsY0FBYztJQUNQLCtCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FuREEsQUFtREMsQ0FuRGdDLHVCQUFVLEdBbUQxQztBQW5EWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXROYXRpdmUgfSBmcm9tIFwiLi9QbGF0TmF0aXZlXCI7XG5pbXBvcnQgeyBQbGF0RGVmIH0gZnJvbSBcIi4vUGxhdERlZmluZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhdEt1YWloYW4gZXh0ZW5kcyBQbGF0TmF0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zZGtNYXBwaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5hbmRDbGFzcyA9ICdjb20uc3pHYW1lLlNaR1Byb3h5JztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBub1BsYXRMb2dpbmVkKGFjY0lkOiBzdHJpbmcsIHNka0ZsYWc6IHN0cmluZywgcGF5RmxhZzogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXREYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgcmV0RGF0YS5jb2RlID0gUGxhdERlZi5SZXRDb2RlLnN1Y2Nlc3M7XG4gICAgICAgIHJldERhdGEudXNlcklkID0gYWNjSWQ7XG4gICAgICAgIHJldERhdGEuY3JlYXRlVHMgPSBjMmYudXRpbHMuZGF0ZS5nZXRMb2NhbFRpY2soKTtcbiAgICAgICAgcmV0RGF0YS51c2VyVG9rZW4gPSAndG9rZW4nO1xuICAgICAgICB0aGlzLm9uU2RrTG9naW5SZXQocmV0RGF0YSk7XG4gICAgICAgIGlmIChzZGtGbGFnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGxhdENmZy5zdXBlckZsYWcgPSBzZGtGbGFnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlGbGFnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGxhdENmZy5wYXlGbGFnID0gcGF5RmxhZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJZTREsgKi9cbiAgICBwdWJsaWMgaW5pdFNESyhwYXJhbTogYW55KSB7XG4gICAgICAgIHRoaXMub25TZGtJbml0UmV0KHsgY29kZTogUGxhdERlZi5SZXRDb2RlLnN1Y2Nlc3MgfSk7XG4gICAgfVxuXG4gICAgLyoqIOeZu+W9lSAqL1xuICAgIHB1YmxpYyBsb2dpbigpIHtcbiAgICAgICAgYzJmLmd1aS5oaWRlTG9hZGluZygpO1xuXG4gICAgfVxuXG4gICAgLyoqIOeZu+WHuiAqL1xuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMub25TZGtMb2dvdXRSZXQoeyBjb2RlOiBQbGF0RGVmLlJldENvZGUuc3VjY2VzcyB9KVxuICAgIH1cblxuXG5cbiAgICAvKiog6YCA5Ye65ri45oiPICovXG4gICAgcHVibGljIHF1aXRHYW1lKCkge1xuICAgICAgICB0aGlzLm9uU2RrRXhpdFJldCh7IGNvZGU6IFBsYXREZWYuUmV0Q29kZS5zdWNjZXNzIH0pO1xuICAgIH1cblxuICAgIC8qKiDmmL7npLrlvIDlj5HogIXpnaLmnb8gKi9cbiAgICBwdWJsaWMgc2hvd0RldlVJKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn0iXX0=