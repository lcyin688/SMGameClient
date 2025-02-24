"use strict";
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