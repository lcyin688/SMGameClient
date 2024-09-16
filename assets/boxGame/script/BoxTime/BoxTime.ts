import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import  BoxTimeModel from './BoxTimeModel';
import  BoxTimeView from './BoxTimeView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxTime extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxTime';

    public model: BoxTimeModel = undefined;
    public view: BoxTimeView = undefined;
    
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
            
            case this.view.btnCloseButton.name:
                this.CC_onClickbtnClose();
                break;
                
            case this.view.btm_doubleButton.name:
                this.CC_onClickbtm_double();
                break;
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnClose(){

    }
            
    private CC_onClickbtm_double(){

    }
            

}