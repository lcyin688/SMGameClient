import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcMainModel from './NhwcMainModel';
import  NhwcMainView from './NhwcMainView';
import { GameMsgId } from '../../../../../resources/proto/GameMsgId';
import { NhwcUI } from '../../NhwcView';
import { GameConsts } from '../../../../../Script/game/GameConsts';
import { NHWCConsts } from '../../NHWCConsts';
import CountdownLabel from '../../../../../c2f-framework/component/common/CountdownLabel';
import SeatPrepareItem from '../SeatPrepareItem/SeatPrepareItem';
import SeatDeskItem from '../SeatDeskItem/SeatDeskItem';
import Sketchpad from '../Sketchpad/Sketchpad';
import { format } from 'path';
const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';

    public model: NhwcMainModel = undefined;
    public view: NhwcMainView = undefined;
    private intervalId: NodeJS.Timeout;

    protected onLoad(): void {
        c2f.webSocket.addListener(this, [
            GameMsgId.MsgId.MSG_SC_NHWCReady,
            GameMsgId.MsgId.MSG_SC_NHWCStart,
            GameMsgId.MsgId.MSG_SC_ExitRoom,
            GameMsgId.MsgId.MSG_SC_NHWCResult,
            GameMsgId.MsgId.MSG_SC_NHWCOver,
            GameMsgId.MsgId.MSG_SC_NHWCDrawClear,
            GameMsgId.MsgId.MSG_SC_NHWCDrawWidth,
            GameMsgId.MsgId.MSG_SC_NHWCDrawColor,
            GameMsgId.MsgId.MSG_SC_NHWCDrawPath,
            GameMsgId.MsgId.MSG_SC_NHWCAnswer,
        ], this.msgReceive.bind(this));
        this.loadSeatItemPrepare(this.preLoadGame.bind(this))
        this.loadSeatItemDesk()
        
        c2f.res.loadOne(NHWCConsts.CmmPrefab.sketchpad, cc.Prefab).then((resItem: cc.Prefab) => {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(resItem, this.view.board);
            this.view.board.addChild(nodeItem)
            this.model.sketchpad = nodeItem.getComponent(Sketchpad)
        })

    }

    private msgReceive(op: number, data: any) {
        switch (op) {
            case GameMsgId.MsgId.MSG_SC_NHWCReady:
                this.onReadyNHWC(data)
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCStart:
                this.onStartNHWC(data)
                break;
            case GameMsgId.MsgId.MSG_SC_ExitRoom:
                this.onExitRoom()
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCResult:
                this.onNHWCResult(data)
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCOver:
                this.onRNHWCOver(data)
                break;     
            case GameMsgId.MsgId.MSG_SC_NHWCDrawClear:
                this.onNHWCDrawClear(data)
                break;
            case GameMsgId.MsgId.MSG_SC_NHWCDrawWidth:
                this.onNHWCDrawWidth(data)
                break;                                
            case GameMsgId.MsgId.MSG_SC_NHWCDrawColor:
                this.onNHWCDrawColor(data)
                break;  
            case GameMsgId.MsgId.MSG_SC_NHWCDrawPath:
                this.onNHWCDrawPath(data)
                break;  
            case GameMsgId.MsgId.MSG_SC_NHWCAnswer:
                this.onNHWCAnswer(data)
                break;  
            default:
                break;
        }
    }




    public async loadSeatItemPrepare(cb) {
        await c2f.res.loadOne(NHWCConsts.CmmPrefab.seatPrepareItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.seatItemPrepare = resItem;
            if (cb) {
                cb();
            }
        })
    }

    public async loadSeatItemDesk() {
        await c2f.res.loadOne(NHWCConsts.CmmPrefab.seatPrepareItem, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.seatItemDesk = resItem;
            if (!this.model.SeatItemDeskArr) {
                this.initSeatDeskItemArr()
            }
            this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo)
        })
    }

    private initSeatDeskItemArr() {
        this.model.SeatItemDeskArr = [];
        for (let row = 0; row < this.model.seatCount; row++) {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.seatItemDesk, this.view.seatLayDesk);
            this.view.seatLayDesk.addChild(nodeItem)
            let item = nodeItem.getComponent(SeatDeskItem)
            this.model.SeatItemDeskArr.push(item)
        }
    }
    /** 刷新玩家答题状态 */
    private reflashSeatDeskArr(arr: msg.GameUserItem[]) {
        for (let i = 0; i < this.model.SeatItemDeskArr.length; i++) {
            let item = this.model.SeatItemDeskArr[i];
            item.name = `seatDeskItem${i}`
            if (arr&&arr.length>i) {
                item.reflash(arr[i]);
            }else{
                item.reflash(null);
            }
        }
    }

    private preLoadGame() {
        if (!this.model.seatPrepareArr) {
            this.initPrepareSeatItemArr()
        }
        this.reflashPrepareSeatArr(szg.player.nhwcData.roomInfo.arrPlayerInfo)
    }

    /** 刷新准备状态 */
    private reflashPrepareSeatArr(arr: msg.GameUserItem[]) {
        for (let i = 0; i < this.model.seatPrepareArr.length; i++) {
            let item = this.model.seatPrepareArr[i];
            item.name = `prepareSeat${i}`
            if (arr&&arr.length>i) {
                item.reflash(arr[i]);
            }else{
                item.reflash(null);
            }
        }
    }

    private initPrepareSeatItemArr() {
        this.model.seatPrepareArr = [];
        for (let row = 0; row < this.model.seatCount; row++) {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.seatItemPrepare, this.view.seatLayPrepare);
            this.view.seatLayPrepare.addChild(nodeItem)
            let item = nodeItem.getComponent(SeatPrepareItem)
            this.model.seatPrepareArr.push(item)
        }
    }

    protected onViewOpen(param: any) {
        
        this.resetView()
        this.view.alarmClock.active =false
        this.reflashRoomInfo()
        this.view.messagePanel.active =true
        let str = c2f.utils.str.stringFormat(c2f.language.words(7006),szg.player.nhwcData.roomInfo.rid)
        this.view.centerLabelLabel.string =str
        


    }


    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);

        this.intervalId = setInterval(() => {
            this.syncPath();
        }, 200);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name){
            
            case this.view.exitBtnButton.name:
                this.CC_onClickexitBtn();
                break;
                
            case this.view.prepareBtnButton.name:
                this.CC_onClickprepareBtn();
                break;

            case this.view.answerBtnButton.name:
                this.CC_onClickanswerBtn();
                break;
                
            case this.view.tipConfirmBtnButton.name:
                this.CC_onClicktipConfirmBtn();
                break;
                
            case this.view.tipCloseBtnButton.name:
                this.CC_onClicktipCloseBtn();
                break;
                
            case this.view.switchButton.name:
                this.CC_onClickswitch();
                break;
                
            case this.view.toolSwitchButton.name:
                this.CC_onClicktoolSwitch();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickexitBtn(){
        let cData: msg.CS_CreateRoom = {
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_ExitRoom,cData)
    }
            
    private CC_onClickprepareBtn(){
        szg.player.nhwcData.reqReady()
    }
            
    private CC_onClicktipConfirmBtn(){

    }
            
    private CC_onClicktipCloseBtn(){

    }
            
    private CC_onClickswitch(){

    }
            
    private CC_onClicktoolSwitch(){

    }
            
    private reflashRoomInfo(){
        if (szg.player.nhwcData.roomInfo?.state <= msg.RoomState.Ready){
            this.view.prepare.active = true
            //获取到自己的状态
            this.view.prepareBtn.active = !szg.player.nhwcData.selfGameUserItem.isReady
            this.view.preparedBtn.active = szg.player.nhwcData.selfGameUserItem.isReady
        }else{
            this.view.prepare.active = false
        }
    }

    /**准备的广播消息 */
    private onReadyNHWC(data: msg.SC_NHWCReady) {
        this.reflashRoomInfo()
        this.reflashPrepareSeatArr(szg.player.nhwcData.roomInfo.arrPlayerInfo)

    }

    private showTicker(countdownLabel: CountdownLabel,interval: number){
        countdownLabel.startCountdown(interval, null, null, null, () => {
            
        });
    }
    public hideTicker() {
        this.view.timeCountdownLabel.stopCountdown()
        this.view.timeLabel.string= "-";
    }
    /**倒计时显示 */
    private setTimeCountDownScore(countdownLabel: CountdownLabel, interval: number) {
        let dayStr = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}:%{ss}";
        countdownLabel.startCountdown(interval, {
            S: "%{ss}",
            M: "%{mm}:%{ss}",
            H: "%{hh}:%{mm}:%{ss}",
            D: dayStr
        }, c2f.language.words(39110), null, () => {
        });
    }

    private resetView(){
        this.view.prepare.active =false
        this.view.desk.active =false
        this.view.toolPanel.active =false
        this.view.messagePanel.active =false
        this.view.overPanel.active =false
    }

    /**游戏开始消息 */
    private onStartNHWC(data: msg.SC_NHWCStart) {
        this.view.prepare.active =false
        this.view.desk.active =true
        //如果是画师就告诉他答案 然后画师去画画

        if (szg.player.nhwcData.roomInfo.gameNum === 1) {
            this.onGameStart();
        }
        this.model.sketchpad.clear();


        if (szg.player.nhwcData.selfGameUserItem.seat==szg.player.nhwcData.roomInfo.painter) {//自己是画师的时候
            this.view.messagePanel.active =false;
            this.view.answerBtn.active =false;    
            let str = c2f.utils.str.stringFormat(c2f.language.words(7008),szg.player.nhwcData.roomInfo.word)
            this.view.centerLabelLabel.string =str
  
            this.model.sketchpad.enableDraw();
            this.view.tips.active =false
            this.view.toolPanel.active =true

        }else{
            this.view.answerBtn.active =true;   
            this.view.tips.active =true
            let str = c2f.utils.str.stringFormat(c2f.language.words(7009),szg.player.nhwcData.roomInfo.hint)
            this.view.centerLabelLabel.string =str
            this.model.sketchpad.disableDraw();
            this.view.toolPanel.active =false
        }
        this.showTicker(this.view.timeCountdownLabel,szg.player.nhwcData.roomInfo.gameTime)
        this.hideAllTip()
    }
    
    public hideAllTip() {
        for(let i in this.model.SeatItemDeskArr){
            this.model.SeatItemDeskArr[i].hideTip();
        }
    }


    private onGameStart() {
        this.view.desk.active =true
        this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo)
    }

    /**退出房间 */
    private onExitRoom(){
        this.view.answerBtn.active =false
        this.view.overPanel.active =true
        setTimeout(() => {
            c2f.gui.open(NhwcUI.NhwcHall);
            this.closeView()
        }, 5000);

    }

    /** 小局游戏结束 */
    private onNHWCResult(data: msg.SC_NHWCResult){


    }
       
    /** 游戏结束 */
    private onRNHWCOver(data: msg.SC_NHWCOver){


    }

    /** 游戏绘画清理 */
    private onNHWCDrawClear(data: msg.SC_NHWCDrawClear){
        this.model.sketchpad.clear();

    }

    /** 游戏绘画Width */
    private onNHWCDrawWidth(data: msg.SC_NHWCDrawWidth){
        this.model.sketchpad.setLineWidth(data.width);
    }


    /** 游戏绘画颜色 */
    private onNHWCDrawColor(data: msg.SC_NHWCDrawColor){
        this.model.sketchpad.setPenColor(data.color);
    }
    
    /** 游戏绘画path */
    private onNHWCDrawPath(data: msg.SC_NHWCDrawPath){
        this.model.sketchpad.drawByPath(data.pointArr);

    }

    /** 回答结果 */
    private onNHWCAnswer(data: msg.SC_NHWCAnswer){
        if (data.isRight) {
            data.arrPlayerInfo.forEach(v => {
                if(v.seat != szg.player.nhwcData.selfGameUserItem.seat ){
                    this.view.answerBtn.active =false
                }
                if(v.seat != szg.player.nhwcData.roomInfo.painter ){
                    this.answerRight(v.seat,v.score);
                }
            });
            this.reflashSeatDeskArr(szg.player.nhwcData.roomInfo.arrPlayerInfo)
        }else{
            this.answerWrong(data.seat)
        }
    }

    private answerWrong(seat:number){
        this.model.SeatItemDeskArr[seat].showTip(c2f.language.words(7010))
    }
    
    private answerRight(seat:number,score:number){
        this.model.SeatItemDeskArr[seat].showTip(c2f.utils.str.formatWithObj(c2f.language.words(7011),score))
    }
    
    private CC_onClickanswerBtn() {
    }


    // 同步绘画信息
    syncPath() {
        if (this.model.sketchpad.model.isDrawing && this.model.sketchpad.model.path.length > 0) {
            let path = this.model.sketchpad.popPath();
            szg.player.nhwcData.reqNHWCDrawPath(path);
        }
    }



            
    }