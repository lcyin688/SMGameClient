import { UIVControlBase } from './../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import BasketBallMainModel from './BasketBallMainModel';
import BasketBallMainView from './BasketBallMainView';
import { GameHelper } from '../../../../Script/game/GameHelper';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { EntranceUI } from '../../../../entrance/script/EntranceView';
import { EventName } from '../../../../Script/game/EventName';
import { GameConsts } from '../../../../Script/game/GameConsts';
import Ball from '../Ball/Ball';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BasketBallMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BasketBallMain';

    public model: BasketBallMainModel = undefined;
    public view: BasketBallMainView = undefined;

    protected onLoad(): void {
        UIHelper.playMusic('physics2048BackMusic');
        GameHelper.setPhysics(true)
        c2f.event.on(EventName.EName.newBall, this.newBall, this);
        this.loadTabItemFirst(this.startView.bind(this))
    }

    protected onDestroy(): void {
        c2f.event.off(EventName.EName.newBall, this.newBall, this);
        super.onDestroy();
    }
    protected onViewOpen(param: any) {
        this.model.initData()
        this.updateScore()
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
        // UIHelper.playEffect('basketBall/betClick');
        // c2f.gui.open(EntranceUI.SoundSet)
        c2f.gui.open(EntranceUI.GameLogin)
        this.closeView()
    }
    public async loadTabItemFirst(cb) {
        await c2f.res.loadOne(GameConsts.CmmPrefab.ball, cc.Prefab).then((resItem: cc.Prefab) => {
            this.model.ballItem = resItem;
            if (cb) {
                cb();
            }
        })
    }

    private startView() {
        this.newBall("", "")
    }

    private newBall(str: string, input: any) {

        let nodeItem = c2f.utils.view.instantiateMVCPrefab(this.model.ballItem, this.view.content);
        this.view.content.addChild(nodeItem)
        let blockItem = nodeItem.getComponent(Ball)
        nodeItem.setPosition(this.view.initPos.getPosition())
        blockItem.init(this); // 启动篮球逻辑
        // this.newShadow(ballComp);
    }
    private startMoveBasket() {

    }
    private stopMoveBasket() {

    }

    private gameOver() {

    }

    public addScore() {
        this.model.score += 1;
        this.updateScore()
    }
    private updateScore() {
        this.view.txtCountLabel.string = this.model.score.toString()
    }
    public playNetAnim() {

    }

    public switchMaskLineShow(flag: boolean) {
        if (flag) {
            // this.view.line.lo(100);
        } else {
            // this.linePreNode.setLocalZOrder(0);
        }
    }

}