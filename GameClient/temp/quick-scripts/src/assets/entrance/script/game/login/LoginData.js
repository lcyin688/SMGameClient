"use strict";
cc._RF.push(module, 'ef0b9TEEkVLeaMr14rQDH9Z', 'LoginData');
// entrance/script/game/login/LoginData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginData = void 0;
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
        // c2f.net.sendMsg(msgid.C_Login, cData)
        // let playerInfo = {} as msg.player.PlayerInfo; 
        // playerInfo.userId = 10;
        // playerInfo.gender = 1;
        // playerInfo.nickName="111";
        // console.log( "亲亲我的宝贝 002 ",JSON.stringify(playerInfo) );
    };
    return LoginData;
}());
exports.LoginData = LoginData;

cc._RF.pop();