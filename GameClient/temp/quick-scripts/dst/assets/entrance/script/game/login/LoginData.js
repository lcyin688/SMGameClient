
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/login/LoginData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef0b9TEEkVLeaMr14rQDH9Z', 'LoginData');
// entrance/script/game/login/LoginData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginData = void 0;
var msgid_1 = require("../../../../resources/proto/msgid");
var LoginData = /** @class */ (function () {
    function LoginData() {
        this.reset();
    }
    LoginData.prototype.reset = function () {
    };
    // //----->网络消息同步
    // public GS_LoginData(data: msg.GW_LogoutPlayer) {
    // }
    LoginData.prototype.reqLogin = function (userName, passWord) {
        var cData = {
            UserName: userName,
            PassWord: passWord
        };
        c2f.net.sendMsg(msgid_1.msgid.C_Login, cData);
    };
    return LoginData;
}());
exports.LoginData = LoginData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9sb2dpbi9Mb2dpbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMkRBQTBEO0FBRzFEO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLHlCQUFLLEdBQVo7SUFDQSxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLG1EQUFtRDtJQUVuRCxJQUFJO0lBR0csNEJBQVEsR0FBZixVQUFnQixRQUFnQixFQUFFLFFBQWdCO1FBQzlDLElBQUksS0FBSyxHQUFnQjtZQUNyQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFBO1FBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzXCI7XG5pbXBvcnQgeyBVSVBhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW1cIjtcbmltcG9ydCB7IG1zZ2lkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9wcm90by9tc2dpZFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgfVxuXG4gICAgLy8gLy8tLS0tLT7nvZHnu5zmtojmga/lkIzmraVcbiAgICAvLyBwdWJsaWMgR1NfTG9naW5EYXRhKGRhdGE6IG1zZy5HV19Mb2dvdXRQbGF5ZXIpIHtcblxuICAgIC8vIH1cblxuXG4gICAgcHVibGljIHJlcUxvZ2luKHVzZXJOYW1lOiBzdHJpbmcsIHBhc3NXb3JkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNEYXRhOiBtc2cuQ19Mb2dpbiA9IHtcbiAgICAgICAgICAgIFVzZXJOYW1lOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIFBhc3NXb3JkOiBwYXNzV29yZFxuICAgICAgICB9XG4gICAgICAgIGMyZi5uZXQuc2VuZE1zZyhtc2dpZC5DX0xvZ2luLCBjRGF0YSlcbiAgICB9XG5cblxufVxuIl19