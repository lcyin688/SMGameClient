import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import BasketBallMainModel from './BasketBallMainModel';
import BasketBallMainView from './BasketBallMainView';
import { GameHelper } from '../../../../Script/game/GameHelper';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { EntranceUI } from '../../../../entrance/script/EntranceView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BasketBallMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BasketBallMain';

    public model: BasketBallMainModel = undefined;
    public view: BasketBallMainView = undefined;

    protected onLoad(): void {
        GameHelper.setPhysics(true)
        this.newBall()


    }

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
        switch (component.name) {

            case this.view.btnMenuButton.name:
                this.CC_onClickbtnMenu();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnMenu() {
        UIHelper.playEffect('betClick');
        // c2f.gui.open(EntranceUI.SoundSet)
        c2f.gui.open(EntranceUI.GameLogin)
        this.closeView()
    }
    private newBall() {



        // var child = null;
        // child = cc.instantiate(this.ball);

        // // child.setLocalZOrder(1);
        // this.node.addChild(child);
        // child.setPosition(this.startPosition);
        // var ballComp = child.getComponent('Ball');
        // ballComp.init(this); // 启动篮球逻辑
        // this.newShadow(ballComp);
    }

}