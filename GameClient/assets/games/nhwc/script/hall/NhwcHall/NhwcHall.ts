import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcHallModel from './NhwcHallModel';
import  NhwcHallView from './NhwcHallView';
import { GameConsts } from '../../../../../Script/game/GameConsts';
import { NhwcUI, NhwcView } from '../../NhwcView';
import { EventName } from '../../../../../Script/game/EventName';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcHall extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcHall';

    public model: NhwcHallModel = undefined;
    public view: NhwcHallView = undefined;
    private headList: cc.SpriteAtlas = null;
    
    protected onLoad(): void {
        c2f.webSocket.addListener(this, [
            MsgId.MSG_SC_MatchRoom,
        ], this.msgReceive.bind(this));

    }

    private msgReceive(op: number, data: any) {
        switch (op) {
            case MsgId.MSG_SC_MatchRoom:
                this.onMatchRoom(data)
                break;
            default:
                break;
        }
    }


    protected onViewOpen(param: any) {
        this.setHeadSprite()
        this.view.usernameLabelLabel.string = szg.player.nhwcData.selfInfo.nickName
        szg.player.nhwcData.reqHall()
    }


    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
        // cc.director.on(EventName.EName.newBall, this.gameOverFinal, this);
    }

    protected onDisable(): void {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.UIEvent.ButtonClick);
        // cc.director.off('gameOverFinal', this.gameOverFinal, this);
    }

    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name){
            
            case this.view.matchBtnButton.name:
                this.CC_onClickmatchBtn();
                break;
                
            case this.view.createBtnButton.name:
                this.CC_onClickcreateBtn();
                break;
                
            case this.view.joinBtnButton.name:
                this.CC_onClickjoinBtn();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickmatchBtn(){
        szg.player.nhwcData.reqMatchRoom()

    }
            
    private CC_onClickcreateBtn(){
        //网络回调  监听的demo
        let cData: msg.CS_CreateRoom = {
        }
        c2f.webSocket.send(MsgId.MSG_CS_CreateRoom,cData,{
            view: this.view,
            ops: [MsgId.MSG_SC_CreateRoom],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_CreateRoom) => {
                cc.log(" 创建房间 消息回来",data)
                c2f.gui.open(NhwcUI.NhwcMain);
            }
        })
    }
            
    private CC_onClickjoinBtn(){
        this.CC_onClickmatchBtn()
    }
            
    /**初始化UI */
    private initView(){
        

    }
    private setHeadSprite() {
        if (this.headList) {
            let headId =szg.player.nhwcData.selfInfo.headId
            this.view.headSprite.spriteFrame = this.headList.getSpriteFrame(headId + "");
        }else{
            c2f.res.load(GameConsts.Bundle.nhwc, 'image/head/head', cc.SpriteAtlas, (err: Error | null, res: cc.SpriteAtlas) => {
                this.headList = res;
                this.setHeadSprite()
            })
        }
    }

    /**匹配房间 */
    private onMatchRoom(data:msg.SC_MatchRoom){
        c2f.gui.open(NhwcUI.NhwcMain);
    }

}