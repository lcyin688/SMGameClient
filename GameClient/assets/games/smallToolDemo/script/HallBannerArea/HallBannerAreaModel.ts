import { UIPa } from '../../../../Script/game/UIParam';
import { SmallToolDemoCfg } from '../SmallToolDemoCfg';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallBannerAreaModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallBannerArea';
    public data: UIPa.BannerConf[] = [];
    public initData() {
        this.data = [];
        for (let i = 0; i < 3; i++) {
            let bannerUrl = SmallToolDemoCfg.langtexture + 'en/banner/' + 'img_banner_' + (i + 1);
            let item: UIPa.BannerConf = {
                banner: bannerUrl,
            };
            this.data.push(item);
        }
    }
}
