import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  NhwcHallModel from './NhwcHallModel';
import  NhwcHallView from './NhwcHallView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class NhwcHall extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_NhwcHall';

    public model: NhwcHallModel = undefined;
    public view: NhwcHallView = undefined;
    
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

    }
            
    private CC_onClickcreateBtn(){
        
    }
            
    private CC_onClickjoinBtn(){

    }
            

}