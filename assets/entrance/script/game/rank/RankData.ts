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


    /** 请求排行榜信息 */
    public reqRankRwdInfo(typ: number) {
        let cData: msg.C_RankTop = {
            RankId: typ,
        }
        c2f.net.sendMsg(msgid.C_RankTop, cData)
    }


}
