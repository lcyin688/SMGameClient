import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import BlockItemModel from './BlockItemModel';
import BlockItemView from './BlockItemView';
import { GameConsts } from '../../../../Script/game/GameConsts';
import { UIPa } from '../../../../Script/game/UIParam';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { DesStarTools } from '../DesStarTools';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BlockItem extends UIPControlBase {


    /** 预制名 给实例调用 */
    public prefabName = 'P_BlockItem';

    public model: BlockItemModel = undefined;
    public view: BlockItemView = undefined;

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

            case this.view.btnButton.name:
                this.CC_onClickbtn();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtn() {
        if (this.model.data && this.model.data.cbFun) {
            this.model.data.cbFun(this.model.data)
        }
    }

    public setInit(data: UIPa.DesStarItemArgs) {
        this.model.initData(data)
        this.initView(data)
    }

    public initView(data: UIPa.DesStarItemArgs) {
        this.view.skeKuang.active = false
        this.view.skeBoom.active = false
        if (data.typ >= 0) {
            this.node.active = true
            c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url)
        } else {
            this.node.active = false
        }
    }
    /**消除特效 */
    public playExplode(callBack: Function) {
        DesStarTools.playEffect('pop_star');
        UIHelper.playSkeAni(this.view.skeBoomSkeleton, "boom", () => {
            this.node.active = false
            this.view.skeKuang.active = false
            this.view.skeBoom.active = false
            callBack()
        }, false, 0, 3)
    }

    public playChoose() {
        UIHelper.playSkeAni(this.view.skeKuangSkeleton, "ani")
    }
}