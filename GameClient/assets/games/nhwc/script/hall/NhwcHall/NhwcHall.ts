import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcHallModel from './NhwcHallModel';
import  NhwcHallView from './NhwcHallView';
import { GameConsts } from '../../../../../Script/game/GameConsts';
import { GameMsgId } from '../../../../../resources/proto/GameMsgId';
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
    
    protected onViewOpen(param: any) {
        this.setHeadSprite()
        this.view.usernameLabelLabel.string = szg.player.login.selfInfo.nickName
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
        //

        // let cData: msg.CS_Login = {
        //         account: username,
        //         password: password,
        //         serverId: 1,
        // }
        // c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_Login,cData,{
        //     view: this.view,
        //     ops: [GameMsgId.MsgId.MSG_SC_Login],
        //     waitNet:false,
        //     getErr:false,
        //     callback: (code: number, data: msg.SC_Login) => {

        //         cc.log(" 登录 消息回来",data)
        //         c2f.gui.notifyTxt('1515');
        //         //todo 登录成功逻辑
        //     }
        // })
    }
            
    private CC_onClickcreateBtn(){
        //网络回调  监听的demo
        let cData: msg.CS_CreateRoom = {
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_CreateRoom,cData,{
            view: this.view,
            ops: [GameMsgId.MsgId.MSG_SC_CreateRoom],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_CreateRoom) => {
                cc.log(" 创建房间 消息回来",data)
                c2f.gui.open(NhwcUI.NhwcMain);
            }
        })
    }
            
    private CC_onClickjoinBtn(){

    }
            
    /**初始化UI */
    private initView(){
        

    }
    private setHeadSprite() {
        if (this.headList) {
            let headId =szg.player.login.selfInfo.headId
            this.view.headSprite.spriteFrame = this.headList.getSpriteFrame(headId + "");
        }else{
            c2f.res.load(GameConsts.Bundle.nhwc, 'image/head/head', cc.SpriteAtlas, (err: Error | null, res: cc.SpriteAtlas) => {
                this.headList = res;
                this.setHeadSprite()
            })
        }
    }



}