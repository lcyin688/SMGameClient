
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatNoPlat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5589bKevFC1pPKpkg3LGAN', 'PlatNoPlat');
// entrance/script/platform/PlatNoPlat.ts

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
exports.PlatNoPlat = void 0;
var PlatBase_1 = require("./PlatBase");
var PlatDefine_1 = require("./PlatDefine");
var PlatNoPlat = /** @class */ (function (_super) {
    __extends(PlatNoPlat, _super);
    function PlatNoPlat() {
        var _this = _super.call(this) || this;
        _this.initPlatCfg();
        _this.initPhoneInfo();
        return _this;
    }
    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    PlatNoPlat.prototype.loadLocalSetting = function () {
        _super.prototype.loadLocalSetting.call(this);
        this.appVersion = '0.01.01';
        this.resVersion = '1.01.01';
    };
    /** 渠道信息 */
    PlatNoPlat.prototype.initPlatCfg = function () {
        this.platCfg = new PlatDefine_1.PlatDef.PlatCfg();
        this.platCfg.showFPS = true;
    };
    /** 构建设备信息 */
    PlatNoPlat.prototype.initPhoneInfo = function () {
        this.phoneInfo = new PlatDefine_1.PlatDef.PhoneInfo();
    };
    /** 无平台(DEV)模式下登录成功 */
    PlatNoPlat.prototype.noPlatLogined = function (accId, sdkFlag, payFlag) {
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
    PlatNoPlat.prototype.initSDK = function (param) {
        this.onSdkInitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 登录 */
    PlatNoPlat.prototype.login = function () {
        c2f.gui.hideLoading();
        var EntranceUI = require('EntranceView').EntranceUI;
        c2f.gui.open(EntranceUI.NoPlatLogin, { loginCb: this.noPlatLogined.bind(this) });
    };
    /** 登出 */
    PlatNoPlat.prototype.logout = function () {
        this.onSdkLogoutRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 切换账号 */
    PlatNoPlat.prototype.switchAccount = function () {
        //TODO:
    };
    /** 退出游戏 */
    PlatNoPlat.prototype.quitGame = function () {
        this.onSdkExitRet({ code: PlatDefine_1.PlatDef.RetCode.success });
    };
    /** 提交用户信息 */
    PlatNoPlat.prototype.submitInfo = function (flag, ext) {
        c2f.log.logSDK('submitInfo:', flag);
    };
    /** 显示开发者面板 */
    PlatNoPlat.prototype.showDevUI = function () {
        return true;
    };
    return PlatNoPlat;
}(PlatBase_1.PlatBase));
exports.PlatNoPlat = PlatNoPlat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdE5vUGxhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLDJDQUF1QztBQUV2QztJQUFnQyw4QkFBUTtJQUVwQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxrQ0FBa0M7SUFDeEIscUNBQWdCLEdBQTFCO1FBQ0ksaUJBQU0sZ0JBQWdCLFdBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztJQUNILGdDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhO0lBQ0wsa0NBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQXNCO0lBQ2Ysa0NBQWEsR0FBcEIsVUFBcUIsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlO1FBQ2hFLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDcEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCxhQUFhO0lBQ04sNEJBQU8sR0FBZCxVQUFlLEtBQVU7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxTQUFTO0lBQ0YsMEJBQUssR0FBWjtRQUNJLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEIsSUFBQSxVQUFVLEdBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUE1QixDQUE2QjtRQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsU0FBUztJQUNGLDJCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELFdBQVc7SUFDSixrQ0FBYSxHQUFwQjtRQUNJLE9BQU87SUFDWCxDQUFDO0lBSUQsV0FBVztJQUNKLDZCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGFBQWE7SUFDTiwrQkFBVSxHQUFqQixVQUFrQixJQUFZLEVBQUUsR0FBUztRQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGNBQWM7SUFDUCw4QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBaEZBLEFBZ0ZDLENBaEYrQixtQkFBUSxHQWdGdkM7QUFoRlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0QmFzZSB9IGZyb20gXCIuL1BsYXRCYXNlXCI7XG5pbXBvcnQgeyBQbGF0RGVmIH0gZnJvbSBcIi4vUGxhdERlZmluZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhdE5vUGxhdCBleHRlbmRzIFBsYXRCYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXRQbGF0Q2ZnKCk7XG4gICAgICAgIHRoaXMuaW5pdFBob25lSW5mbygpO1xuICAgIH1cblxuICAgIC8qKiDmnKzlnLDorr7nva465Y6f55Sf5piv5Y6f55Sf5Luj56CB5Lit6K6+572u77yMd2Vi6YCa6L+H6ZO+5o6l6Kej5p6Q6K6+572uICovXG4gICAgcHJvdGVjdGVkIGxvYWRMb2NhbFNldHRpbmcoKSB7XG4gICAgICAgIHN1cGVyLmxvYWRMb2NhbFNldHRpbmcoKTtcbiAgICAgICAgdGhpcy5hcHBWZXJzaW9uID0gJzAuMDEuMDEnO1xuICAgICAgICB0aGlzLnJlc1ZlcnNpb24gPSAnMS4wMS4wMSc7XG4gICAgfVxuXG4gICAgLyoqIOa4oOmBk+S/oeaBryAqL1xuICAgIHByaXZhdGUgaW5pdFBsYXRDZmcoKSB7XG4gICAgICAgIHRoaXMucGxhdENmZyA9IG5ldyBQbGF0RGVmLlBsYXRDZmcoKVxuICAgICAgICB0aGlzLnBsYXRDZmcuc2hvd0ZQUyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqIOaehOW7uuiuvuWkh+S/oeaBryAqL1xuICAgIHByaXZhdGUgaW5pdFBob25lSW5mbygpIHtcbiAgICAgICAgdGhpcy5waG9uZUluZm8gPSBuZXcgUGxhdERlZi5QaG9uZUluZm8oKTtcbiAgICB9XG5cbiAgICAvKiog5peg5bmz5Y+wKERFVinmqKHlvI/kuIvnmbvlvZXmiJDlip8gKi9cbiAgICBwdWJsaWMgbm9QbGF0TG9naW5lZChhY2NJZDogc3RyaW5nLCBzZGtGbGFnOiBzdHJpbmcsIHBheUZsYWc6IHN0cmluZykge1xuICAgICAgICBsZXQgcmV0RGF0YTogYW55ID0ge307XG4gICAgICAgIHJldERhdGEuY29kZSA9IFBsYXREZWYuUmV0Q29kZS5zdWNjZXNzO1xuICAgICAgICByZXREYXRhLnVzZXJJZCA9IGFjY0lkO1xuICAgICAgICByZXREYXRhLmNyZWF0ZVRzID0gYzJmLnV0aWxzLmRhdGUuZ2V0TG9jYWxUaWNrKCk7XG4gICAgICAgIHJldERhdGEudXNlclRva2VuID0gJ3Rva2VuJztcbiAgICAgICAgdGhpcy5vblNka0xvZ2luUmV0KHJldERhdGEpO1xuICAgICAgICBpZiAoc2RrRmxhZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXRDZmcuc3VwZXJGbGFnID0gc2RrRmxhZztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5RmxhZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXRDZmcucGF5RmxhZyA9IHBheUZsYWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Yid5aeL5YyWU0RLICovXG4gICAgcHVibGljIGluaXRTREsocGFyYW06IGFueSkge1xuICAgICAgICB0aGlzLm9uU2RrSW5pdFJldCh7IGNvZGU6IFBsYXREZWYuUmV0Q29kZS5zdWNjZXNzIH0pO1xuICAgIH1cblxuICAgIC8qKiDnmbvlvZUgKi9cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIGMyZi5ndWkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgbGV0IHsgRW50cmFuY2VVSSB9ID0gcmVxdWlyZSgnRW50cmFuY2VWaWV3Jyk7XG4gICAgICAgIGMyZi5ndWkub3BlbihFbnRyYW5jZVVJLk5vUGxhdExvZ2luLCB7IGxvZ2luQ2I6IHRoaXMubm9QbGF0TG9naW5lZC5iaW5kKHRoaXMpIH0pO1xuICAgIH1cblxuICAgIC8qKiDnmbvlh7ogKi9cbiAgICBwdWJsaWMgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLm9uU2RrTG9nb3V0UmV0KHsgY29kZTogUGxhdERlZi5SZXRDb2RlLnN1Y2Nlc3MgfSlcbiAgICB9XG5cbiAgICAvKiog5YiH5o2i6LSm5Y+3ICovXG4gICAgcHVibGljIHN3aXRjaEFjY291bnQoKSB7XG4gICAgICAgIC8vVE9ETzpcbiAgICB9XG5cblxuXG4gICAgLyoqIOmAgOWHuua4uOaIjyAqL1xuICAgIHB1YmxpYyBxdWl0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5vblNka0V4aXRSZXQoeyBjb2RlOiBQbGF0RGVmLlJldENvZGUuc3VjY2VzcyB9KTtcbiAgICB9XG5cbiAgICAvKiog5o+Q5Lqk55So5oi35L+h5oGvICovXG4gICAgcHVibGljIHN1Ym1pdEluZm8oZmxhZzogc3RyaW5nLCBleHQ/OiBhbnkpIHtcbiAgICAgICAgYzJmLmxvZy5sb2dTREsoJ3N1Ym1pdEluZm86JywgZmxhZyk7XG4gICAgfVxuXG4gICAgLyoqIOaYvuekuuW8gOWPkeiAhemdouadvyAqL1xuICAgIHB1YmxpYyBzaG93RGV2VUkoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iXX0=