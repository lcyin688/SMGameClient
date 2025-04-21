import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcMainModel from './NhwcMainModel';
import  NhwcMainView from './NhwcMainView';
import { GameMsgId } from '../../../../../resources/proto/GameMsgId';
import { NhwcUI } from '../../NhwcView';
import { GameConsts } from '../../../../../Script/game/GameConsts';
import { NHWCConsts } from '../../NHWCConsts';
import PrepareSeat from '../PrepareSeat/PrepareSeat';
const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';

    public model: NhwcMainModel = undefined;
    public view: NhwcMainView = undefined;

    private headList: cc.SpriteAtlas = null;
    protected onLoad(): void {
        this.loadSeatItemFirst(this.preLoadGame.bind(this))
    }
    public async loadSeatItemFirst(cb) {
        await c2f.res.loadOne(NHWCConsts.CmmPrefab.prepareSeat, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.seatItem = resItem;
            if (cb) {
                cb();
            }
        })
    }

    private preLoadGame() {
        if (!this.model.prepareSeatArr) {
            this.initPrepareSeatItemArr()
        }
        for (let i = 0; i < this.model.prepareSeatArr.length; i++) {
            let item = this.model.prepareSeatArr[i];
            item.name = `prepareSeat${i}`
            item.reflash(null);
        }
    }

    private initPrepareSeatItemArr() {
        this.model.prepareSeatArr = [];
        for (let row = 0; row < this.model.seatCount; row++) {
            let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.seatItem, this.view.seatLayout);
            this.view.seatLayout.addChild(nodeItem)
            let item = nodeItem.getComponent(PrepareSeat)
            this.model.prepareSeatArr.push(item)
        }
    }

    protected onViewOpen(param: any) {
        


        this.view.alarmClock.active =false
        this.setRoomInfo()

        


    }


    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.UIEvent.ButtonClick, this.onButtonClick, this);
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
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_ExitRoom,cData,{
            view: this.view,
            ops: [GameMsgId.MsgId.MSG_SC_CreateRoom],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_ExitRoom) => {
                c2f.gui.open(NhwcUI.NhwcHall);
                this.closeView()
            }
        })
    }
            
    private CC_onClickprepareBtn(){

    }
            
    private CC_onClicktipConfirmBtn(){

    }
            
    private CC_onClicktipCloseBtn(){

    }
            
    private CC_onClickswitch(){

    }
            
    private CC_onClicktoolSwitch(){

    }
            
    private setRoomInfo(){
        this.view.roomIdLabel.string = szg.player.nhwcData.roomInfo?.rid.toString()
        if (szg.player.nhwcData.roomInfo?.state <= msg.RoomState.Ready){
            this.view.prepare.active = true
            //获取到自己的状态
            this.view.prepareBtn.active = !szg.player.nhwcData.selfGameUserItem.isReady
            this.view.preparedBtn.active = szg.player.nhwcData.selfGameUserItem.isReady
        }else{
            this.view.prepare.active = false
        }
    }

    private setHeadSprite() {
        if (this.headList) {
            let headId =szg.player.login.selfInfo.headId
            // this.view.headSprite.spriteFrame = this.headList.getSpriteFrame(headId + "");
        }else{
            c2f.res.load(GameConsts.Bundle.nhwc, 'image/head/head', cc.SpriteAtlas, (err: Error | null, res: cc.SpriteAtlas) => {
                this.headList = res;
                this.setHeadSprite()
            })
        }
    }

}