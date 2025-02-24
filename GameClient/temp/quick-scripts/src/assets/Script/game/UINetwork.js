"use strict";
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