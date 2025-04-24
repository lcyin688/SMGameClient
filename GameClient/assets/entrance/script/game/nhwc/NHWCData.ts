
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
    /**登录 */
    public SC_Login(data: msg.SC_Login) {
        // cc.log("LoginData  登录 消息回来",data)
        this.selfInfo=data.playerInfo
    }
    /**匹配房间 */
    public SC_MatchRoom(data: msg.SC_MatchRoom) {
        this.reflashRoomInfo(data.roomInfo)
        this.reflashSelfInfo()
    }
    /**
     * 
     * 准备
     */
    public SC_NHWCReady(data: msg.SC_NHWCReady) {
        this.reflashRoomInfo(data.roomInfo)
        this.reflashSelfInfo()

    }
    /**游戏开始 */
    public SC_NHWCStart(data: msg.SC_NHWCStart) {
        this.reflashRoomInfo(data.roomInfo)
        this.reflashSelfInfo()

    }

    /**大厅信息 */
    public SC_HallInfo(data:msg.SC_HallInfo) {
        this.roomArr=data.roomArr
    }

    /**创建房间 */
    public SC_CreateRoom(data:msg.SC_CreateRoom) {
        this.reflashRoomInfo(data.roomInfo)
        let item = this.getGameUserItemById(this.selfInfo.account)
        if (item) {
            this.selfGameUserItem=item
        }
    }
    /** 答题 */
    public SC_NHWCAnswer(data:msg.SC_NHWCAnswer) {
        if (data.isRight) {
            data.arrPlayerInfo.forEach(v => {
                let item = this.getGameUserItemById(v.plyer.account)
                item.score=v.score
            });
        }
    }
    
    /**请求大厅 */
    public reqHall() {
        let cData: msg.CS_HallInfo = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_HallInfo,cData)
    }

    /**请求匹配房间 */
    public reqMatchRoom() {
        let cData: msg.CS_MatchRoom = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_MatchRoom,cData)
    }


    /**请求准备 */
    public reqReady() {
        let cData: msg.CS_NHWCReady = {

        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_NHWCReady,cData)
    }

    /**请求路径 */
    public reqNHWCDrawPath(arr: msg.NHWCPoint[]) {
        let cData: msg.CS_NHWCDrawPath = {
            pointArr: arr
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_NHWCDrawPath,cData)
    }


    /**退出 */
    public onExitRoom(data: msg.SC_ExitRoom) {
        let item =  szg.player.nhwcData.getGameUserItemById(data.account)
        if (item) {
            if (item.plyer.account==szg.player.nhwcData.selfInfo.account) {
                this.roomInfo=null
                this.selfGameUserItem=null
            } else {
                item=null
            }
        }
    }


    /**通过玩家唯一id 获取游戏房间玩家的信息 */
    public getGameUserItemById(id:string) {
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

    private reflashRoomInfo(roomInfo: msg.RoomInfo){
        if (roomInfo&&roomInfo.arrPlayerInfo&&roomInfo.arrPlayerInfo.length>0) {
            roomInfo.arrPlayerInfo.sort((a,b)=>{
                return a.seat-b.seat
            })
        }
        this.roomInfo=roomInfo
    }

    private reflashSelfInfo(){
        let item = this.getGameUserItemById(this.selfInfo.account)
        if (item) {
            this.selfGameUserItem=item
        }
    }


}
