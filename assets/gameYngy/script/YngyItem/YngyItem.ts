import { UIPControlBase } from './../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../c2f-framework/define/C2FEnum';
import YngyItemModel from './YngyItemModel';
import YngyItemView from './YngyItemView';
import { UIPa } from '../../../Script/game/UIParam';
import { GameConsts } from '../../../Script/game/GameConsts';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_YngyItem';

    public model: YngyItemModel = undefined;
    public view: YngyItemView = undefined;

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

            case this.view.iconButton.name:
                this.CC_onClickicon();
                break;

            default:
                break;
        }
    }

    private CC_onClickicon() {
        if (this.model.data.state == UIPa.YngyItemArgsStates.Alive) {
            if (!this.model.data.hideState) {
                if (this.model.data.clickFun) {
                    this.model.data.clickFun(this.model.data, this.node);
                }
            }
        }
    }


    public init(data: UIPa.YngyItemArgs) {
        this.model.initData(data);
        this.initView(data)
    }

    public initView(data: UIPa.YngyItemArgs) {
        let url = GameConsts.ResUrl.yngy + "chip_" + data.typ;
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, url)
        this.node.setPosition(data.pos)
        this.setOpcity(data.hideState)
    }

    private setOpcity(hideState: boolean, time: number = 0) {
        cc.Tween.stopAllByTarget(this.node)
        let opacityValue = hideState ? 100 : 255
        cc.tween(this.node)
            .to(time, { opacity: hideState ? 0 : opacityValue })
            .start()
    }

}