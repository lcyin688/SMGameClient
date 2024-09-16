import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import  BoxGameResultModel from './BoxGameResultModel';
import  BoxGameResultView from './BoxGameResultView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoxGameResult extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BoxGameResult';

    public model: BoxGameResultModel = undefined;
    public view: BoxGameResultView = undefined;
    
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
                
            default:
                break;
        }
    } 
    
    private CC_onClickbtnClose(){

    }
            

}