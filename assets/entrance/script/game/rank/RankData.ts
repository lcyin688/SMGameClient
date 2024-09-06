import { GameConsts } from "../../../../Script/game/GameConsts";
import { UIPa } from "../../../../Script/game/UIParam";
import { msgid } from "../../../../resources/proto/msgid";


export class RankData {


    constructor() {
        this.reset();
    }
    public reset() {
    }

    // //----->网络消息同步
    // public GS_LoginData(data: msg.GW_LogoutPlayer) {

    // }


    public reqLogin(userName: string, passWord: string) {
        let cData: msg.C_Login = {
            UserName: userName,
            PassWord: passWord
        }
        c2f.net.sendMsg(msgid.C_Login, cData)
    }


}
