import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import TurntableItemModel from './TurntableItemModel';
import TurntableItemView from './TurntableItemView';
import { GameCalc } from '../../../../../Script/game/GameCalculator';
import { UIHelper } from '../../../../../Script/game/UIHelper';

const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_TurntableItem';

    public model: TurntableItemModel = undefined;
    public view: TurntableItemView = undefined;

    public angle = 0;

    public init(award: number, angle?: number) {
        this.view.lab_moneyLabel.string = `${GameCalc.getShortNumInteger(award)}`;
        this.view.border.active = false;
        if (angle) {
            this.angle = angle;
        }
    }

    public async showBorder() {
        await this.playSelectedAnim();
        this.view.border.opacity = 0;
        this.view.border.active = true;
        cc.tween(this.view.border)
            .repeatForever(new cc.Tween().to(0.5, { opacity: 255 }).delay(0.2).to(0.5, { opacity: 0 }))
            .start();
        //异步延迟一秒

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    hideBorder() {
        this.view.border.active = false;
        cc.Tween.stopAllByTarget(this.view.border);
        if (!this.view.selectAnim) {
            return;
        }
        this.view.selectAnim.active = false;
    }

    /**
     * 播放选中动画
     */
    private async playSelectedAnim() {
        if (!this.view.selectAnim) {
            return;
        }
        this.view.selectAnim.active = true;
        UIHelper.playSkeAni(this.view.selectAnimSkeleton, 'animation4', () => {
            this.view.selectAnim.active = false;
        });
    }
    protected onLoad(): void {
        this.view.border.active = false;
    }
}
