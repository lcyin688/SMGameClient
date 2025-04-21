
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
    /**自己在游戏中的信息 */
    public selfGameUserItem:msg.GameUserItem=null
    constructor() {
        this.reset();
    }
    public reset() {
        this.selfInfo=null
        this.roomArr=null
        this.selfGameUserItem=null
    }

    // //----->网络消息同步
    public SC_Register(data: msg.SC_Register) {

        cc.log("LoginData  注册 消息回来",data)

    }
    public SC_Login(data: msg.SC_Login) {
        cc.log("LoginData  登录 消息回来",data)
        this.selfInfo=data.playerInfo
    }


    public SC_ExitRoom(data: msg.SC_ExitRoom) {
        cc.log("退出房间 消息回来",data)
        this.roomInfo=null
        this.selfGameUserItem=null
    }

    public SC_ReadyNHWC(data: msg.SC_ReadyNHWC) {
        this.roomInfo =data.roomInfo

        let item = this.getGameUserItemById(this.selfInfo.account)
        if (item) {
            this.selfGameUserItem=item
        }

    }



    /**大厅信息 */
    public SC_HallInfo(data:msg.SC_HallInfo) {
        this.roomArr=data.roomArr
    }

    /**创建房间 */
    public SC_CreateRoom(data:msg.SC_CreateRoom) {
        this.roomInfo=data.roomInfo
        let item = this.getGameUserItemById(this.selfInfo.account)
        if (item) {
            this.selfGameUserItem=item
        }
    }
    


    public reqHall() {
        let cData: msg.CS_HallInfo = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_HallInfo,cData)
    }
    /**请求准备 */
    public reqReady() {
        let cData: msg.CS_ReadyNHWC = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_ReadyNHWC,cData)
    }



    /**通过玩家唯一id 获取游戏房间玩家的信息 */
    private getGameUserItemById(id:string) {
        if (!this.roomInfo) {
            return null
        }
        let item = this.roomInfo.arrPlayerInfo.find(item => {
            return item.plyer.account == id
        })
        if (item) {
            return item

        }
        return null
    }


}
