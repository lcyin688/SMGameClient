
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/UINetwork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0cc4RSpvhG+6BQixHjM+8G', 'UINetwork');
// Script/game/UINetwork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UINetwork = void 0;
var UIHelper_1 = require("./UIHelper");
/** 网络相关UI显示*/
var UINetwork = /** @class */ (function () {
    function UINetwork() {
    }
    /** 显示等待界面 */
    UINetwork.prototype.showWaitUI = function () {
        c2f.gui.showLoading();
    };
    /** 隐藏等待界面 */
    UINetwork.prototype.hideWaitUI = function () {
        c2f.gui.hideLoading();
    };
    /** 显示网络错误信息 */
    UINetwork.prototype.showErrorMsg = function (code) {
        UIHelper_1.UIHelper.showNetError(code);
    };
    /** 是否已打开重新登录提示框 */
    UINetwork.prototype.isOpenReloginView = function () {
        var EntranceUI = require('EntranceView').EntranceUI;
        return c2f.gui.has(EntranceUI.ReloginDialog);
    };
    /** 显示重新登录界面 */
    UINetwork.prototype.showReloginView = function () {
        c2f.gui.hideLoading(true);
        szg.entrance.reLogin(function (op, data) {
            var isSuccess = data.ErrorCode === undefined || data.ErrorCode === 0;
            if (isSuccess) {
                c2f.gui.notifyTxt('511');
                c2f.net.startHeartbeat();
            }
            else {
                UIHelper_1.UIHelper.showNetError(data.ErrorCode);
            }
        }, function () {
            c2f.gui.notifyTxt('512');
        });
    };
    return UINetwork;
}());
exports.UINetwork = UINetwork;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9VSU5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQXNDO0FBRXRDLGNBQWM7QUFFZDtJQUFBO0lBd0NBLENBQUM7SUF0Q0csYUFBYTtJQUNOLDhCQUFVLEdBQWpCO1FBQ0ksR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYTtJQUNOLDhCQUFVLEdBQWpCO1FBQ0ksR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtJQUNSLGdDQUFZLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsbUJBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1CQUFtQjtJQUNaLHFDQUFpQixHQUF4QjtRQUNVLElBQUEsVUFBVSxHQUFLLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBNUIsQ0FBNEI7UUFDNUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7SUFDUixtQ0FBZSxHQUF0QjtRQUNJLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNoQixVQUFDLEVBQVUsRUFBRSxJQUFvQjtZQUM3QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQztZQUNyRSxJQUFJLFNBQVMsRUFBRTtnQkFDWCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekM7UUFDTCxDQUFDLEVBQ0Q7WUFDSSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxnQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmV0VG9VSSB9IGZyb20gXCIuLi8uLi9jMmYtZnJhbWV3b3JrL25ldC9JTmV0VG9VSVwiO1xuaW1wb3J0IHsgVUlIZWxwZXIgfSBmcm9tIFwiLi9VSUhlbHBlclwiO1xuXG4vKiog572R57uc55u45YWzVUnmmL7npLoqL1xuXG5leHBvcnQgY2xhc3MgVUlOZXR3b3JrIGltcGxlbWVudHMgSU5ldFRvVUkge1xuXG4gICAgLyoqIOaYvuekuuetieW+heeVjOmdoiAqL1xuICAgIHB1YmxpYyBzaG93V2FpdFVJKCkge1xuICAgICAgICBjMmYuZ3VpLnNob3dMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqIOmakOiXj+etieW+heeVjOmdoiAqL1xuICAgIHB1YmxpYyBoaWRlV2FpdFVJKCkge1xuICAgICAgICBjMmYuZ3VpLmhpZGVMb2FkaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqIOaYvuekuue9kee7nOmUmeivr+S/oeaBryAqL1xuICAgIHB1YmxpYyBzaG93RXJyb3JNc2coY29kZTogbnVtYmVyKSB7XG4gICAgICAgIFVJSGVscGVyLnNob3dOZXRFcnJvcihjb2RlKTtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5bey5omT5byA6YeN5paw55m75b2V5o+Q56S65qGGICovXG4gICAgcHVibGljIGlzT3BlblJlbG9naW5WaWV3KCkge1xuICAgICAgICBsZXQgeyBFbnRyYW5jZVVJIH0gPSByZXF1aXJlKCdFbnRyYW5jZVZpZXcnKVxuICAgICAgICByZXR1cm4gYzJmLmd1aS5oYXMoRW50cmFuY2VVSS5SZWxvZ2luRGlhbG9nKTtcbiAgICB9XG5cbiAgICAvKiog5pi+56S66YeN5paw55m75b2V55WM6Z2iICovXG4gICAgcHVibGljIHNob3dSZWxvZ2luVmlldygpIHtcbiAgICAgICAgYzJmLmd1aS5oaWRlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc3pnLmVudHJhbmNlLnJlTG9naW4oXG4gICAgICAgICAgICAob3A6IG51bWJlciwgZGF0YTogbXNnLkdXX0xvZ2luX1IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gZGF0YS5FcnJvckNvZGUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLkVycm9yQ29kZSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5ndWkubm90aWZ5VHh0KCc1MTEnKTtcbiAgICAgICAgICAgICAgICAgICAgYzJmLm5ldC5zdGFydEhlYXJ0YmVhdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscGVyLnNob3dOZXRFcnJvcihkYXRhLkVycm9yQ29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjMmYuZ3VpLm5vdGlmeVR4dCgnNTEyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=