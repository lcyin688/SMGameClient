import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcMainModel from './NhwcMainModel';
import  NhwcMainView from './NhwcMainView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcMain';

    public model: NhwcMainModel = undefined;
    public view: NhwcMainView = undefined;
    
    protected onViewOpen(param: any) {
        this.view.alarmClock.active =false

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
            

}