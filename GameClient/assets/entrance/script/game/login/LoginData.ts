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
    public SC_Register(data: msg.SC_Register) {

        cc.log("LoginData  注册 消息回来",data)

    }


    public reqLogin(userName: string, passWord: string) {
        let cData: msg.CS_Login = {
            account: userName,
            password: passWord,
            serverId: 1,
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_Login,cData)
    }


}
