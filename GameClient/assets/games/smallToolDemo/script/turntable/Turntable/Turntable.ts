import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import TurntableModel from './TurntableModel';
import TurntableView from './TurntableView';
import { UIPa } from '../../../../../Script/game/UIParam';
import { SmallToolDemoCfg } from '../../SmallToolDemoCfg';
import TurntableItem from '../TurntableItem/TurntableItem';
import { UIHelper } from '../../../../../Script/game/UIHelper';
import CountdownLabel from '../../../../../c2f-framework/component/common/CountdownLabel';

/**
 * spin按钮动画效果
 */
const SpinBtnAniNames = {
    WAIT: 'animation',
    START: 'animation1',
    LOOP: 'animation2',
    END: 'animation3',
    SELECTED: 'animation4',
};

enum TurntableTweenTag {
    WHEEL = 11111,
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class Turntable extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_Turntable';

    public model: TurntableModel = undefined;
    public view: TurntableView = undefined;

    protected onViewOpen(param: any) {
        this.model.initData();
        let arr = Array.from(this.model.rodaConfigMap.values());
        this.renterTurnTabeleItem(arr);
        this.view.turntableInside.angle = 15;
        this.showTicker(this.view.lab_timeCountdownLabel, 999);
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
            case this.view.btnCloseButton.name:
                this.CC_onClickbtnClose();
                break;
            case this.view.btnSpinButton.name:
                this.CC_onClickbtnSpin();
                break;

            default:
                break;
        }
    }
    /** 点击开始旋转 */
    private CC_onClickbtnSpin() {
        this.playAni();
    }

    /**
     * 转盘item渲染
     * @param list
     * @returns
     */
    protected async renterTurnTabeleItem(list: UIPa.RodaConf[]) {
        const prefab = (await c2f.res.loadOne(SmallToolDemoCfg.Prefab.turntableItem, cc.Prefab)) as cc.Prefab;
        if (!prefab) {
            return;
        }

        const len = list.length;
        for (let i = 0; i < len; i++) {
            let node = c2f.utils.view.instantiateMVCPrefab(prefab, this.view.turntableInside);
            this.view.turntableInside.addChild(node);
            node.angle = i * 30;
            node.active = true;
            const item = node.getComponent(TurntableItem);
            item.init(list[i].award, node.angle);
            this.model.turnTableItemMaps.set(list[i].id, item);
        }
    }

    private playAni() {
        // 停止旋转
        UIHelper.playSkeAni(this.view.btnSpinAnimSkeleton, SpinBtnAniNames.END, () => {});
        this.model.rewardIndex++;
        this.model.rewardIndex = this.model.rewardIndex % 12;
        this.spinStop(this.model.rewardIndex);
    }

    protected async spinStop(awardId: number) {
        this.model.turnTableItemMaps.forEach((v) => {
            v.hideBorder();
        });

        const item = this.model.turnTableItemMaps.get(awardId);
        let rewardNum = this.model.rodaConfigMap.get(awardId).award;
        item.init(rewardNum);
        const angle = item.angle - Math.abs(this.view.turntableInside.angle % 360) + 720;
        cc.Tween.stopAllByTag(TurntableTweenTag.WHEEL);

        cc.tween(this.view.turntableInside)
            .by(Math.abs(angle) * 0.001 + 0.8, { angle: -angle }, { easing: 'quadOut' }) //减速
            // .by(Math.abs(angle) * 0.001 + 5, { angle: -angle - 360 * 5 }, { easing: 'quadInOut' }) //加速 减速
            // .by(Math.abs(angle) * 0.001 + 0.8, { angle: -angle }, { easing: 'quadIn‌' })//加速
            // .by(Math.abs(angle) * 0.001 + 0.8, { angle: -angle }, { easing: 'linear‌' })
            .call(async () => {
                this.view.turntableInside.angle = -item.angle;
                await item.showBorder();
                UIHelper.playSkeAni(this.view.btnSpinAnimSkeleton, SpinBtnAniNames.WAIT, null, true);
            })
            .start();
    }
    private CC_onClickbtnClose() {
        this.closeView();
    }

    private showTicker(countdownLabel: CountdownLabel, interval: number) {
        countdownLabel.startCountdown(interval, '%{hh}:%{mm}:%{ss}', null, null, () => {});
    }
}
