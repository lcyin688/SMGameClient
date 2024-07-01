import { UIVControlBase } from './../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import GameLoginModel from './GameLoginModel';
import GameLoginView from './GameLoginView';
import { GameHelper } from '../../../Script/game/GameHelper';
import { GameConsts } from '../../../Script/game/GameConsts';
import { UIHelper } from '../../../Script/game/UIHelper';
import { MainPackUI } from '../../../mainPack/script/MainPackView';



const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLogin extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLogin';

    public model: GameLoginModel = undefined;
    public view: GameLoginView = undefined;

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

    protected onLoad(): void {
        if (super.onLoad) {
            super.onLoad();
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
    }

    protected onDestroy(): void {
        if (super.onDestroy) {
            super.onDestroy();
        }
    }



    protected start(): void {
        c2f.gui.addClickEfx();
        UIHelper.playMusic('backMusic');

    }


    private async onButtonClick(eventType: string, component: cc.Button) {
        switch (component.name) {

            case this.view.btnStartButton.name:
                this.CC_onClickbtnStart();
                break;

            case this.view.btn2048Button.name:
                this.CC_onClickbtn2048();
                break;




            default:
                break;
        }
    }



    private CC_onClickbtnStart() {
        GameHelper.loadBundle(GameConsts.Bundle.mainPack).then(UIID => {
            c2f.gui.open(UIID.DesStarMain,)
        });
    }
                    
    private CC_onClickbtn2048() {
    }
            
    }