import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import StartItemModel from './StartItemModel';
import StartItemView from './StartItemView';
import { UIHelper } from '../../../../Script/game/UIHelper';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StartItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_StartItem';

    public model: StartItemModel = undefined;
    public view: StartItemView = undefined;

    public playAni() {
        UIHelper.playSkeAni(this.view.skeSkeleton, "play")
    }

}