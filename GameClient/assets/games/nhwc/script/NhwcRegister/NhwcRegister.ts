import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import  NhwcRegisterModel from './NhwcRegisterModel';
import  NhwcRegisterView from './NhwcRegisterView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcRegister extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_NhwcRegister';

    public model: NhwcRegisterModel = undefined;
    public view: NhwcRegisterView = undefined;
    
    protected onViewOpen(param: any) {
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
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnConfirm(){

    }
            
    private CC_onClickbtnReturn(){

    }
            

}