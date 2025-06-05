import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import HallBannerAreaModel from './HallBannerAreaModel';
import HallBannerAreaView from './HallBannerAreaView';

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallBannerArea extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallBannerArea';

    public model: HallBannerAreaModel = undefined;
    public view: HallBannerAreaView = undefined;

    public onUpdateBanner() {
        this.model.initData();
        if (this.model.data.length <= 0) {
            return;
        }

        this.view.bannerWEPageView.autoLoop(this.model.data.length > 1 ? 6 : -1);

        this.view.bannerWEPageView.setRender(this.onRenderBanner.bind(this));
        this.view.bannerWEPageView.setClick(this.onClickBanner.bind(this));
        this.view.bannerWEPageView.totalPage = this.model.data.length;
        this.view.bannerWEPageView.jumpToPage(0);
    }
    private onRenderBanner(item: cc.Node, idx: number) {
        const nodeSprite = item.getComponent(cc.Sprite);
        const url = this.model.data[idx]?.banner;
        if (url && nodeSprite) {
            c2f.utils.view.changeSpriteFrame(nodeSprite, url);
        }
    }

    private onClickBanner(item: cc.Node, idx: number) {
        if (this.model.data[idx]) {
            c2f.log.log('  当前点击的的是的索引为：' + idx);
            // JumpModMgr.jumpToModule(this.data[idx].link);
        }
    }
}
