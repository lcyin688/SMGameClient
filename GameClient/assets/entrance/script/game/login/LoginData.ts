import { GameMsgId } from "../../../../resources/proto/GameMsgId";
import { GameConsts } from "../../../../Script/game/GameConsts";
import { UIPa } from "../../../../Script/game/UIParam";


export class LoginData {


    constructor() {
        this.reset();
    }
    public reset() {
    }

    // //----->网络消息同步
    // public GS_LoginData(data: msg.GW_LogoutPlayer) {

    // }


    public reqLogin(userName: string, passWord: string) {
        let cData: msg.CS_Ping = {
            Timestamp: new Date().getTime(),
        }
        // this.send(GameMsgId.MsgId.MSG_CS_Ping,cData);
        c2f.net.sendMsg(GameMsgId.MsgId.MSG_CS_Ping, cData)
        // let playerInfo = {} as msg.player.PlayerInfo; 
        // playerInfo.userId = 10;
        // playerInfo.gender = 1;
        // playerInfo.nickName="111";
        // console.log( "亲亲我的宝贝 002 ",JSON.stringify(playerInfo) );

    }


}
