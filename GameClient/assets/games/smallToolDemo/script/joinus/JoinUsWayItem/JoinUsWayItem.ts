import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import JoinUsWayItemModel from './JoinUsWayItemModel';
import JoinUsWayItemView from './JoinUsWayItemView';
import { SmallToolDemoCfg } from '../../SmallToolDemoCfg';

const { ccclass, property } = cc._decorator;
@ccclass
export default class JoinUsWayItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_JoinUsWayItem';

    public model: JoinUsWayItemModel = undefined;
    public view: JoinUsWayItemView = undefined;

    public init(name: string) {
        let url = SmallToolDemoCfg.ResUrl.joinus + name;
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, url);
    }
}
