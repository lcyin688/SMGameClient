
import { GameMsgId } from "../../../../resources/proto/GameMsgId";
import { GameConsts } from "../../../../Script/game/GameConsts";
import { UIPa } from "../../../../Script/game/UIParam";


export class NHWCData {
    /** 玩家信息 */
    public selfInfo:msg.PlayerInfo=null
    /** 房间列表 */
    public roomArr:msg.RoomInfo[]=null
    /**自己在的房间的信息 */
    public roomInfo:msg.RoomInfo=null

    constructor() {
        this.reset();
    }
    public reset() {
        this.selfInfo=null
        this.roomArr=null
    }

    // //----->网络消息同步
    public SC_Register(data: msg.SC_Register) {

        cc.log("LoginData  注册 消息回来",data)

    }
    public SC_Login(data: msg.SC_Login) {
        cc.log("LoginData  登录 消息回来",data)
        this.selfInfo=data.playerInfo
    }
    /**大厅信息 */
    public SC_HallInfo(data:msg.SC_HallInfo) {
        this.roomArr=data.roomArr
    }

    /**创建房间 */
    public SC_CreateRoom(data:msg.SC_CreateRoom) {
        this.roomInfo=data.roomInfo
    }
    


    public reqHall() {
        let cData: msg.CS_HallInfo = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_HallInfo,cData)
    }


}
