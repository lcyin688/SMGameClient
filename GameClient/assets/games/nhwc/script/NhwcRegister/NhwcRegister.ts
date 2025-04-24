import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  NhwcRegisterModel from './NhwcRegisterModel';
import  NhwcRegisterView from './NhwcRegisterView';
import { GameConsts } from '../../../../Script/game/GameConsts';
import { GameMsgId } from '../../../../resources/proto/GameMsgId';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcRegister extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_NhwcRegister';

    public model: NhwcRegisterModel = undefined;
    public view: NhwcRegisterView = undefined;
    public headId =0
    private headList: cc.SpriteAtlas = null;
    protected onViewOpen(param: any) {
        c2f.res.load(GameConsts.Bundle.nhwc, 'image/head/head', cc.SpriteAtlas, (err: Error | null, res: cc.SpriteAtlas) => {
            this.headList = res;
            this.setHeadSprite()
        })

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
            
            case this.view.btnConfirmButton.name:
                this.CC_onClickbtnConfirm();
                break;
                
            case this.view.btnReturnButton.name:
                this.CC_onClickbtnReturn();
                break;

            case this.view.btnLeftButton.name:
                this.CC_onClickbtnLeft();
                break;

            case this.view.btnRightButton.name:
                this.CC_onClickbtnRight();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnConfirm(){
        let username = this.view.userNameEditBox.string;
        let password = this.view.passWordEditBox.string;
        let passwordConfirm = this.view.passWordConfirmEditBox.string;
        if (!username) {
            c2f.gui.notifyTxt('7002');
            return;
        }
        if (!password) {
            c2f.gui.notifyTxt('7003');
            return;
        }

        if (!passwordConfirm) {
            c2f.gui.notifyTxt('7004');
            return;
        }
        if (password!=passwordConfirm) {
            c2f.gui.notifyTxt('7005');
            return;
        }


        let cData: msg.CS_Register = {
                account: username,
                password: password,
                headId: this.headId,
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_Register,cData,{
            view: this.view,
            ops: [GameMsgId.MsgId.MSG_SC_Register],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_Register) => {
                cc.log(" 注册 消息回来",data)
                c2f.gui.notifyTxt('1516');
                this.closeView()
            }
        })
    }
            
    private CC_onClickbtnReturn(){
        this.closeView()
    }
            
                    
    private CC_onClickbtnLeft() {
        this.headId--;
        if (this.headId<=-1) {
            this.headId=7
        }
        this.setHeadSprite()
    }
            
                        
    private CC_onClickbtnRight() {
        this.headId++
        if (this.headId>=8) {
            this.headId=0
        }
        this.setHeadSprite()
    }
            
    private setHeadSprite() {
        this.view.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    }


    }