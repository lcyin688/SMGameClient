import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  NhwcLoginModel from './NhwcLoginModel';
import  NhwcLoginView from './NhwcLoginView';
import { NhwcUI, NhwcView } from '../NhwcView';
import { GameMsgId } from '../../../../resources/proto/GameMsgId';


const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcLogin extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcLogin';

    public model: NhwcLoginModel = undefined;
    public view: NhwcLoginView = undefined;
    
    protected onViewOpen(param: any) {
        szg.player.initPlayer();
        let url = "ws://127.0.0.1:9000";
        c2f.gui.showLoading();
        c2f.webSocket.initService().then(() => {
            c2f.webSocket.connect(url, (reason: string) => {
                c2f.gui.hideLoading();
                if (reason === "Connected") {
                    cc.log(" ~~~ c2f.webSocket.connect 链接成功 可以尝试登录")
                } else {
                    c2f.gui.notifyTxt('1006');
                    c2f.net.purge();
                }
            });
        });
        
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
            
            case this.view.btnLoginButton.name:
                this.CC_onClickbtnLogin();
                break;
                
            case this.view.btnRegisterButton.name:
                this.CC_onClickbtnRegister();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnLogin(){
        let username = this.view.userNameEditBox.string;
        let password = this.view.passWordEditBox.string;
        if (!username) {
            c2f.gui.notifyTxt('7002');
            return;
        }
        if (!password) {
            c2f.gui.notifyTxt('7003');
            return;
        }

        let cData: msg.CS_Login = {
                account: username,
                password: password,
                serverId: 1,
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_Login,cData,{
            view: this.view,
            ops: [GameMsgId.MsgId.MSG_SC_Login],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_Login) => {

                cc.log(" 登录 成功")
                c2f.gui.notifyTxt('1515');
                //todo 登录成功逻辑
                c2f.gui.open(NhwcUI.NhwcHall);
            }
        })
        

    }
            
    private CC_onClickbtnRegister(){
        c2f.gui.open(NhwcUI.NhwcRegister);
    }
            

}