
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9sb2dpbi9Mb2dpbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ00seUJBQUssR0FBWjtJQUNBLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsbURBQW1EO0lBRW5ELElBQUk7SUFHRyw0QkFBUSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsUUFBZ0I7UUFDOUMsSUFBSSxLQUFLLEdBQWdCO1lBQ3JCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUE7UUFDRCx3Q0FBd0M7UUFDeEMsaURBQWlEO1FBQ2pELDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDJEQUEyRDtJQUUvRCxDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0cyB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzXCI7XG5pbXBvcnQgeyBVSVBhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW1cIjtcblxuXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgIH1cblxuICAgIC8vIC8vLS0tLS0+572R57uc5raI5oGv5ZCM5q2lXG4gICAgLy8gcHVibGljIEdTX0xvZ2luRGF0YShkYXRhOiBtc2cuR1dfTG9nb3V0UGxheWVyKSB7XG5cbiAgICAvLyB9XG5cblxuICAgIHB1YmxpYyByZXFMb2dpbih1c2VyTmFtZTogc3RyaW5nLCBwYXNzV29yZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjRGF0YTogbXNnLkNfTG9naW4gPSB7XG4gICAgICAgICAgICBVc2VyTmFtZTogdXNlck5hbWUsXG4gICAgICAgICAgICBQYXNzV29yZDogcGFzc1dvcmRcbiAgICAgICAgfVxuICAgICAgICAvLyBjMmYubmV0LnNlbmRNc2cobXNnaWQuQ19Mb2dpbiwgY0RhdGEpXG4gICAgICAgIC8vIGxldCBwbGF5ZXJJbmZvID0ge30gYXMgbXNnLnBsYXllci5QbGF5ZXJJbmZvOyBcbiAgICAgICAgLy8gcGxheWVySW5mby51c2VySWQgPSAxMDtcbiAgICAgICAgLy8gcGxheWVySW5mby5nZW5kZXIgPSAxO1xuICAgICAgICAvLyBwbGF5ZXJJbmZvLm5pY2tOYW1lPVwiMTExXCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcIuS6suS6suaIkeeahOWunei0nSAwMDIgXCIsSlNPTi5zdHJpbmdpZnkocGxheWVySW5mbykgKTtcblxuICAgIH1cblxuXG59XG4iXX0=