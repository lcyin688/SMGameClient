import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  NhwcLoginModel from './NhwcLoginModel';
import  NhwcLoginView from './NhwcLoginView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcLogin extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcLogin';

    public model: NhwcLoginModel = undefined;
    public view: NhwcLoginView = undefined;
    
    protected onViewOpen(param: any) {
        let url = "ws://127.0.0.1:9000";
        c2f.webSocket.connect(url)

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
        // const playerInfo: msg.player.LoginReq = {
        //     account: username,
        //     password: password,
        //     serverId: 1001
        // };
        // c2f.webSocket.send(playerInfo)

    }
            
    private CC_onClickbtnRegister(){

    }
            

}