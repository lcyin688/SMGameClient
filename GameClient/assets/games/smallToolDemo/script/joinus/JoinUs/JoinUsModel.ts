import { UIPa } from '../../../../../Script/game/UIParam';
import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class JoinUsModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_JoinUs';
    public thirdLinkConf: UIPa.ThirdLinkConf;

    initData() {
        this.thirdLinkConf = {
            linkIconArr: [],
            name: '',
        };
        this.thirdLinkConf.linkIconArr = ['icon_1', 'icon_2', 'icon_3', 'icon_4', 'icon_2', 'icon_3', 'icon_4', 'icon_2', 'icon_3', 'icon_4', 'icon_2', 'icon_3', 'icon_4'];
    }
}
