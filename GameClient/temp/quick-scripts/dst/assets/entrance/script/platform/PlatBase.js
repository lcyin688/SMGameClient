
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/platform/PlatBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aaf4bKYPfxD0otBqjtN2L2G', 'PlatBase');
// entrance/script/platform/PlatBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatBase = void 0;
var PlatDefine_1 = require("./PlatDefine");
var PlatBase = /** @class */ (function () {
    function PlatBase() {
        this.playerInfo = new PlatDefine_1.PlatDef.GameUserInfo();
        this.platCfg = null;
        this.accoutInfo = null;
        this.phoneInfo = null;
        this.sdkInitSuc = false;
        this.showPolicies = true;
        this.loadLocalSetting();
    }
    /** 本地设置:原生是原生代码中设置，web通过链接解析设置 */
    PlatBase.prototype.loadLocalSetting = function () {
        this.supportQuitGame = false;
        this.supportAccountCenter = false;
        this.supportSwitchAcc = false;
        this.supportFacebook = false;
        this.showUserAgreement = true;
    };
    /** 更新玩家信息 */
    PlatBase.prototype.updatePlayerInfo = function (info) {
        for (var key in info) {
            this.playerInfo[key] = info[key];
        }
    };
    /** 获得平台配置信息 */
    PlatBase.prototype.loadPlatCfg = function () { return null; };
    /** 获得手机信息 */
    PlatBase.prototype.loadPhoneInfo = function () { };
    /** 拷贝到剪贴板 */
    PlatBase.prototype.copyToClipboard = function (txt) {
        if (cc.sys.isBrowser) { //浏览器
            try {
                if (navigator && navigator.clipboard) {
                    navigator.clipboard.writeText(txt);
                }
            }
            catch (error) {
                cc.log('拷贝文本失败');
            }
        }
    };
    /** 初始化bugly */
    PlatBase.prototype.initBugly = function () { };
    /** 初始化bugly */
    PlatBase.prototype.buglySetUserId = function (str) { };
    /** bugly 版本 */
    PlatBase.prototype.setAppVersion = function (str) { };
    /** 显示开发者面板 */
    PlatBase.prototype.showDevUI = function () { return false; };
    /** ------sdk流程相关-------- */
    /** 初始化SDK */
    PlatBase.prototype.initSDK = function (param) { };
    /** 登录 */
    PlatBase.prototype.login = function () { };
    /** 登出 */
    PlatBase.prototype.logout = function () { };
    /** 切换账号 */
    PlatBase.prototype.switchAccount = function () { };
    /** 支付 */
    PlatBase.prototype.pay = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /** 退出游戏 */
    PlatBase.prototype.quitGame = function () { };
    /** 用户中心 */
    PlatBase.prototype.openAccountCenter = function () { };
    /** 提交用户信息 */
    PlatBase.prototype.submitInfo = function (type, ext) { };
    /** 展示用户协议 */
    PlatBase.prototype.showPrivacyPolicy = function (txt) { };
    /** 分享 */
    PlatBase.prototype.share = function () { };
    /** 上传vip信息 */
    PlatBase.prototype.sumbitVipInfo = function () { };
    /** 前往app评分 */
    PlatBase.prototype.toAppStroeScore = function () { };
    /** 通用 */
    PlatBase.prototype.commonFunc = function (param) { };
    PlatBase.prototype.getOtherByFlag = function (flag) { return ""; };
    /** ----------平台回调----------- */
    /** SDK初始化结果 */
    PlatBase.prototype.onSdkInitRet = function (data) {
        c2f.log.logSDK('SDK init result:', data);
        var ret = this.getRealData(data);
        this.sdkInitSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkInit, this.sdkInitSuc);
        //有些SDK初始化时还没有获取设备信息的权限
        this.loadPhoneInfo();
    };
    /** SDK登录结果 */
    PlatBase.prototype.onSdkLoginRet = function (data) {
        c2f.log.logSDK('SDK login result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        if (isSuc) {
            this.accoutInfo = ret;
            this.accoutInfo.isBind = ret.facebook != '' ? true : false;
        }
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkLogin, isSuc);
    };
    /** 手机设备信息 */
    PlatBase.prototype.onLoadPhoneRet = function (data) {
        c2f.log.logSDK('SDK phoneInfo result:', data);
        this.phoneInfo = this.getRealData(data);
    };
    /** 账号信息绑定 */
    PlatBase.prototype.onSdkBindRet = function (data) {
        c2f.log.logSDK('SDK bind result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        this.accoutInfo.isBind = isSuc;
        cc.director.emit('onBindResult', isSuc);
    };
    /** SDK登出账号 */
    PlatBase.prototype.onSdkLogoutRet = function (data) {
        c2f.log.logSDK('SDK logout result:', data);
    };
    /** 充值回调 */
    PlatBase.prototype.onSdkPayRet = function (data) {
        c2f.log.logSDK('SDK pay result:', data);
        //TODO:
    };
    PlatBase.prototype.onSdkExitRet = function (data) {
        c2f.log.logSDK('SDK exit result:', data);
        //TODO:
    };
    /** 上传vip信息 */
    PlatBase.prototype.onSdkSubmitVipRet = function (data) {
        c2f.log.logSDK('SDK submit vip result:', data);
        var ret = this.getRealData(data);
        var isSuc = ret.code == PlatDefine_1.PlatDef.RetCode.success;
        cc.director.emit(PlatDefine_1.PlatDef.SdkCBEvent.onSdkVipSubmit, isSuc);
    };
    /** 将参数转换成字符串 */
    PlatBase.prototype.getParamString = function (param) {
        var strParam = '';
        if (typeof param == 'string') {
            strParam = param;
        }
        else {
            strParam = JSON.stringify(param);
        }
        return strParam;
    };
    /** 获取有效值 */
    PlatBase.prototype.getRealData = function (data) {
        var ret = null;
        if (typeof data == 'string' && data.length > 0) {
            ret = JSON.parse(data);
        }
        else {
            ret = data;
        }
        return ret;
    };
    return PlatBase;
}());
exports.PlatBase = PlatBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvcGxhdGZvcm0vUGxhdEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBRXZDO0lBOEJJO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFrQztJQUN4QixtQ0FBZ0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsYUFBYTtJQUNOLG1DQUFnQixHQUF2QixVQUF3QixJQUFZO1FBQ2hDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUiw4QkFBVyxHQUFsQixjQUF1QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckMsYUFBYTtJQUNOLGdDQUFhLEdBQXBCLGNBQXlCLENBQUM7SUFD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QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNkO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsZUFBQztBQUFELENBck1BLEFBcU1DLElBQUE7QUFyTVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0RGVmIH0gZnJvbSBcIi4vUGxhdERlZmluZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhdEJhc2Uge1xuICAgIC8qKiDnjqnlrrbkv6Hmga8gKi9cbiAgICBwbGF5ZXJJbmZvOiBQbGF0RGVmLkdhbWVVc2VySW5mbztcbiAgICAvKiog5bmz5Y+w6YWN572uICovXG4gICAgcGxhdENmZzogUGxhdERlZi5QbGF0Q2ZnO1xuICAgIC8qKiBzZGvotKblj7fkv6Hmga8gKi9cbiAgICBhY2NvdXRJbmZvOiBQbGF0RGVmLkFjY291bnRMb2dpbjtcbiAgICAvKiog6K6+5aSH5L+h5oGvICovXG4gICAgcGhvbmVJbmZvOiBQbGF0RGVmLlBob25lSW5mbztcbiAgICAvKiog5Yid5aeL5YyW5oiQ5YqfICovXG4gICAgc2RrSW5pdFN1YzogYm9vbGVhbjtcblxuICAgIC8qKiDmmK/lkKbmlK/mjIHpgIDlh7rmuLjmiI/nlYzpnaIgKi9cbiAgICBzdXBwb3J0UXVpdEdhbWU6IGJvb2xlYW47XG4gICAgLyoqIOaYr+WQpuaUr+aMgeeUqOaIt+S4reW/gyAqL1xuICAgIHN1cHBvcnRBY2NvdW50Q2VudGVyOiBib29sZWFuO1xuICAgIC8qKiDmmK/lkKbmlK/mjIHliIfmjaLotKblj7cgKi9cbiAgICBzdXBwb3J0U3dpdGNoQWNjOiBib29sZWFuO1xuICAgIC8qKiDmmK/lkKbmlK/mjIFGYWNlYm9vayAqL1xuICAgIHN1cHBvcnRGYWNlYm9vazogYm9vbGVhbjtcbiAgICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65Zu95YaF5pS/562W562JVUkgKi9cbiAgICBzaG93UG9saWNpZXM6IGJvb2xlYW47XG4gICAgLyoqIOaYr+WQpumcgOimgeeUqOaIt+WNj+iuriAqL1xuICAgIHNob3dVc2VyQWdyZWVtZW50OiBib29sZWFuO1xuXG4gICAgLyoqIEFQUOeJiOacrOWPtyAqL1xuICAgIGFwcFZlcnNpb246IHN0cmluZztcbiAgICAvKiog6LWE5rqQ54mI5pys5Y+3ICovXG4gICAgcmVzVmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVySW5mbyA9IG5ldyBQbGF0RGVmLkdhbWVVc2VySW5mbygpO1xuICAgICAgICB0aGlzLnBsYXRDZmcgPSBudWxsO1xuICAgICAgICB0aGlzLmFjY291dEluZm8gPSBudWxsO1xuICAgICAgICB0aGlzLnBob25lSW5mbyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2RrSW5pdFN1YyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dQb2xpY2llcyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZExvY2FsU2V0dGluZygpO1xuICAgIH1cblxuICAgIC8qKiDmnKzlnLDorr7nva465Y6f55Sf5piv5Y6f55Sf5Luj56CB5Lit6K6+572u77yMd2Vi6YCa6L+H6ZO+5o6l6Kej5p6Q6K6+572uICovXG4gICAgcHJvdGVjdGVkIGxvYWRMb2NhbFNldHRpbmcoKSB7XG4gICAgICAgIHRoaXMuc3VwcG9ydFF1aXRHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VwcG9ydEFjY291bnRDZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdXBwb3J0U3dpdGNoQWNjID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VwcG9ydEZhY2Vib29rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1VzZXJBZ3JlZW1lbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiDmm7TmlrDnjqnlrrbkv6Hmga8gKi9cbiAgICBwdWJsaWMgdXBkYXRlUGxheWVySW5mbyhpbmZvOiBPYmplY3QpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVySW5mb1trZXldID0gaW5mb1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+W5s+WPsOmFjee9ruS/oeaBryAqL1xuICAgIHB1YmxpYyBsb2FkUGxhdENmZygpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAvKiog6I635b6X5omL5py65L+h5oGvICovXG4gICAgcHVibGljIGxvYWRQaG9uZUluZm8oKSB7IH1cbiAgICAvKiog5ou36LSd5Yiw5Ymq6LS05p2/ICovXG4gICAgcHVibGljIGNvcHlUb0NsaXBib2FyZCh0eHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3NlcikgeyAvL+a1j+iniOWZqFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodHh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNjLmxvZygn5ou36LSd5paH5pys5aSx6LSlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIneWni+WMlmJ1Z2x5ICovXG4gICAgcHVibGljIGluaXRCdWdseSgpIHsgfVxuICAgIC8qKiDliJ3lp4vljJZidWdseSAqL1xuICAgIHB1YmxpYyBidWdseVNldFVzZXJJZChzdHI6IHN0cmluZykgeyB9XG5cbiAgICAvKiogYnVnbHkg54mI5pysICovXG4gICAgcHVibGljIHNldEFwcFZlcnNpb24oc3RyOiBzdHJpbmcpIHsgfVxuICAgIC8qKiDmmL7npLrlvIDlj5HogIXpnaLmnb8gKi9cbiAgICBwdWJsaWMgc2hvd0RldlVJKCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8qKiAtLS0tLS1zZGvmtYHnqIvnm7jlhbMtLS0tLS0tLSAqL1xuICAgIC8qKiDliJ3lp4vljJZTREsgKi9cbiAgICBwdWJsaWMgaW5pdFNESyhwYXJhbTogYW55KSB7IH1cbiAgICAvKiog55m75b2VICovXG4gICAgcHVibGljIGxvZ2luKCkgeyB9XG4gICAgLyoqIOeZu+WHuiAqL1xuICAgIHB1YmxpYyBsb2dvdXQoKSB7IH1cbiAgICAvKiog5YiH5o2i6LSm5Y+3ICovXG4gICAgcHVibGljIHN3aXRjaEFjY291bnQoKSB7IH1cbiAgICAvKiog5pSv5LuYICovXG4gICAgcHVibGljIHBheSguLi5wYXJhbXMpIHsgfVxuICAgIC8qKiDpgIDlh7rmuLjmiI8gKi9cbiAgICBwdWJsaWMgcXVpdEdhbWUoKSB7IH1cbiAgICAvKiog55So5oi35Lit5b+DICovXG4gICAgcHVibGljIG9wZW5BY2NvdW50Q2VudGVyKCkgeyB9XG4gICAgLyoqIOaPkOS6pOeUqOaIt+S/oeaBryAqL1xuICAgIHB1YmxpYyBzdWJtaXRJbmZvKHR5cGU6IHN0cmluZywgZXh0PzogYW55KSB7IH1cbiAgICAvKiog5bGV56S655So5oi35Y2P6K6uICovXG4gICAgcHVibGljIHNob3dQcml2YWN5UG9saWN5KHR4dDogc3RyaW5nKSB7IH1cbiAgICAvKiog5YiG5LqrICovXG4gICAgcHVibGljIHNoYXJlKCkgeyB9XG4gICAgLyoqIOS4iuS8oHZpcOS/oeaBryAqL1xuICAgIHB1YmxpYyBzdW1iaXRWaXBJbmZvKCkgeyB9XG4gICAgLyoqIOWJjeW+gGFwcOivhOWIhiAqL1xuICAgIHB1YmxpYyB0b0FwcFN0cm9lU2NvcmUoKSB7IH1cbiAgICAvKiog6YCa55SoICovXG4gICAgcHVibGljIGNvbW1vbkZ1bmMocGFyYW06IGFueSkgeyB9XG4gICAgcHVibGljIGdldE90aGVyQnlGbGFnKGZsYWc6IHN0cmluZykgeyByZXR1cm4gXCJcIjsgfVxuXG5cbiAgICAvKiogLS0tLS0tLS0tLeW5s+WPsOWbnuiwgy0tLS0tLS0tLS0tICovXG4gICAgLyoqIFNES+WIneWni+WMlue7k+aenCAqL1xuICAgIHB1YmxpYyBvblNka0luaXRSZXQoZGF0YTogYW55KSB7XG4gICAgICAgIGMyZi5sb2cubG9nU0RLKCdTREsgaW5pdCByZXN1bHQ6JywgZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldCA9IHRoaXMuZ2V0UmVhbERhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMuc2RrSW5pdFN1YyA9IHJldC5jb2RlID09IFBsYXREZWYuUmV0Q29kZS5zdWNjZXNzO1xuICAgICAgICBjYy5kaXJlY3Rvci5lbWl0KFBsYXREZWYuU2RrQ0JFdmVudC5vblNka0luaXQsIHRoaXMuc2RrSW5pdFN1Yyk7XG5cbiAgICAgICAgLy/mnInkuptTREvliJ3lp4vljJbml7bov5jmsqHmnInojrflj5borr7lpIfkv6Hmga/nmoTmnYPpmZBcbiAgICAgICAgdGhpcy5sb2FkUGhvbmVJbmZvKCk7XG4gICAgfVxuXG4gICAgLyoqIFNES+eZu+W9lee7k+aenCAqL1xuICAgIHB1YmxpYyBvblNka0xvZ2luUmV0KGRhdGE6IGFueSkge1xuICAgICAgICBjMmYubG9nLmxvZ1NESygnU0RLIGxvZ2luIHJlc3VsdDonLCBkYXRhKTtcblxuICAgICAgICBsZXQgcmV0ID0gdGhpcy5nZXRSZWFsRGF0YShkYXRhKTtcbiAgICAgICAgbGV0IGlzU3VjID0gcmV0LmNvZGUgPT0gUGxhdERlZi5SZXRDb2RlLnN1Y2Nlc3M7XG4gICAgICAgIGlmIChpc1N1Yykge1xuICAgICAgICAgICAgdGhpcy5hY2NvdXRJbmZvID0gcmV0O1xuICAgICAgICAgICAgdGhpcy5hY2NvdXRJbmZvLmlzQmluZCA9IHJldC5mYWNlYm9vayAhPSAnJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjYy5kaXJlY3Rvci5lbWl0KFBsYXREZWYuU2RrQ0JFdmVudC5vblNka0xvZ2luLCBpc1N1Yyk7XG4gICAgfVxuXG4gICAgLyoqIOaJi+acuuiuvuWkh+S/oeaBryAqL1xuICAgIHB1YmxpYyBvbkxvYWRQaG9uZVJldChkYXRhOiBhbnkpIHtcbiAgICAgICAgYzJmLmxvZy5sb2dTREsoJ1NESyBwaG9uZUluZm8gcmVzdWx0OicsIGRhdGEpO1xuICAgICAgICB0aGlzLnBob25lSW5mbyA9IHRoaXMuZ2V0UmVhbERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqIOi0puWPt+S/oeaBr+e7keWumiAqL1xuICAgIHB1YmxpYyBvblNka0JpbmRSZXQoZGF0YTogYW55KSB7XG4gICAgICAgIGMyZi5sb2cubG9nU0RLKCdTREsgYmluZCByZXN1bHQ6JywgZGF0YSk7XG4gICAgICAgIGxldCByZXQgPSB0aGlzLmdldFJlYWxEYXRhKGRhdGEpO1xuICAgICAgICBsZXQgaXNTdWMgPSByZXQuY29kZSA9PSBQbGF0RGVmLlJldENvZGUuc3VjY2VzcztcbiAgICAgICAgdGhpcy5hY2NvdXRJbmZvLmlzQmluZCA9IGlzU3VjO1xuICAgICAgICBjYy5kaXJlY3Rvci5lbWl0KCdvbkJpbmRSZXN1bHQnLCBpc1N1Yyk7XG4gICAgfVxuXG4gICAgLyoqIFNES+eZu+WHuui0puWPtyAqL1xuICAgIHB1YmxpYyBvblNka0xvZ291dFJldChkYXRhOiBhbnkpIHtcbiAgICAgICAgYzJmLmxvZy5sb2dTREsoJ1NESyBsb2dvdXQgcmVzdWx0OicsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKiDlhYXlgLzlm57osIMgKi9cbiAgICBwdWJsaWMgb25TZGtQYXlSZXQoZGF0YTogYW55KSB7XG4gICAgICAgIGMyZi5sb2cubG9nU0RLKCdTREsgcGF5IHJlc3VsdDonLCBkYXRhKTtcbiAgICAgICAgLy9UT0RPOlxuICAgIH1cblxuICAgIHB1YmxpYyBvblNka0V4aXRSZXQoZGF0YTogYW55KSB7XG4gICAgICAgIGMyZi5sb2cubG9nU0RLKCdTREsgZXhpdCByZXN1bHQ6JywgZGF0YSk7XG4gICAgICAgIC8vVE9ETzpcbiAgICB9XG5cbiAgICAvKiog5LiK5Lygdmlw5L+h5oGvICovXG4gICAgcHVibGljIG9uU2RrU3VibWl0VmlwUmV0KGRhdGE6IGFueSkge1xuICAgICAgICBjMmYubG9nLmxvZ1NESygnU0RLIHN1Ym1pdCB2aXAgcmVzdWx0OicsIGRhdGEpO1xuICAgICAgICBsZXQgcmV0ID0gdGhpcy5nZXRSZWFsRGF0YShkYXRhKTtcbiAgICAgICAgbGV0IGlzU3VjID0gcmV0LmNvZGUgPT0gUGxhdERlZi5SZXRDb2RlLnN1Y2Nlc3M7XG4gICAgICAgIGNjLmRpcmVjdG9yLmVtaXQoUGxhdERlZi5TZGtDQkV2ZW50Lm9uU2RrVmlwU3VibWl0LCBpc1N1Yyk7XG4gICAgfVxuICAgIC8qKiDlsIblj4LmlbDovazmjaLmiJDlrZfnrKbkuLIgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGFyYW1TdHJpbmcocGFyYW06IHN0cmluZyB8IE9iamVjdCkge1xuICAgICAgICBsZXQgc3RyUGFyYW06IHN0cmluZyA9ICcnO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHJQYXJhbSA9IHBhcmFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyUGFyYW0gPSBKU09OLnN0cmluZ2lmeShwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clBhcmFtO1xuICAgIH1cblxuICAgIC8qKiDojrflj5bmnInmlYjlgLwgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UmVhbERhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCByZXQgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn0iXX0=