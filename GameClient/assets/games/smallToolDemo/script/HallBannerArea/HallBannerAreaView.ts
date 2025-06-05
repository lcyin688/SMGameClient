// This script is automatic generation, please do not edit.
// If you need add logic, please write in HallBannerAreaView.ts .
// If you need add data, please write in HallBannerAreaViewModel.ts .

import { UIPanelBase } from './../../../../c2f-framework/gui/layer/UIPanelBase';
import { WEPageView } from './../../../../entrance/script/extend/pageview/WEPageView';
import { WEPageViewIndicator } from './../../../../entrance/script/extend/pageview/WEPageViewIndicator';

const { ccclass, property } = cc._decorator;
@ccclass
export default class HallBannerAreaView extends UIPanelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_HallBannerArea';

    public banner: cc.Node;
    public bannerScrollView: cc.ScrollView = undefined;
    public bannerWEPageView: WEPageView = undefined;
    public indicator: cc.Node;
    public indicatorWEPageViewIndicator: WEPageViewIndicator = undefined;
    public indicatorLayout: cc.Layout = undefined;

    public onLoad() {
        super.onLoad();
    }

    public onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.addEvent();
    }

    public onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.removeEvent();
    }

    protected initProperty() {
        super.initProperty();
        this.banner = this.get('_banner_');
        this.bannerScrollView = this.banner.getComponent(cc.ScrollView);
        this.bannerWEPageView = this.banner.getComponent(WEPageView);
        this.indicator = this.get('_indicator_');
        this.indicatorWEPageViewIndicator = this.indicator.getComponent(WEPageViewIndicator);
        this.indicatorLayout = this.indicator.getComponent(cc.Layout);
    }

    private addEvent() {
        this.bannerScrollView.node.on('scroll-to-top', this.onbannerScrollViewScrollToTop, this);
        this.bannerScrollView.node.on('scroll-to-bottom', this.onbannerScrollViewScrollToBottom, this);
        this.bannerScrollView.node.on('scroll-to-left', this.onbannerScrollViewScrollToLeft, this);
        this.bannerScrollView.node.on('scroll-to-right', this.onbannerScrollViewScrollToRight, this);
        this.bannerScrollView.node.on('scrolling', this.onbannerScrollViewScrolling, this);
        this.bannerScrollView.node.on('bounce-bottom', this.onbannerScrollViewBounceBottom, this);
        this.bannerScrollView.node.on('bounce-top', this.onbannerScrollViewBounceTop, this);
        this.bannerScrollView.node.on('bounce-left', this.onbannerScrollViewBounceLeft, this);
        this.bannerScrollView.node.on('bounce-right', this.onbannerScrollViewBounceRight, this);
        this.bannerScrollView.node.on('scroll-ended', this.onbannerScrollViewScrollEnded, this);
        this.bannerScrollView.node.on('touch-up', this.onbannerScrollViewTouchUp, this);
        this.bannerScrollView.node.on('scroll-began', this.onbannerScrollViewScrollBegan, this);
    }

    private removeEvent() {
        this.bannerScrollView.node.off('scroll-to-top', this.onbannerScrollViewScrollToTop, this);
        this.bannerScrollView.node.off('scroll-to-bottom', this.onbannerScrollViewScrollToBottom, this);
        this.bannerScrollView.node.off('scroll-to-left', this.onbannerScrollViewScrollToLeft, this);
        this.bannerScrollView.node.off('scroll-to-right', this.onbannerScrollViewScrollToRight, this);
        this.bannerScrollView.node.off('scrolling', this.onbannerScrollViewScrolling, this);
        this.bannerScrollView.node.off('bounce-bottom', this.onbannerScrollViewBounceBottom, this);
        this.bannerScrollView.node.off('bounce-top', this.onbannerScrollViewBounceTop, this);
        this.bannerScrollView.node.off('bounce-left', this.onbannerScrollViewBounceLeft, this);
        this.bannerScrollView.node.off('bounce-right', this.onbannerScrollViewBounceRight, this);
        this.bannerScrollView.node.off('scroll-ended', this.onbannerScrollViewScrollEnded, this);
        this.bannerScrollView.node.off('touch-up', this.onbannerScrollViewTouchUp, this);
        this.bannerScrollView.node.off('scroll-began', this.onbannerScrollViewScrollBegan, this);
    }

    private onbannerScrollViewScrollToTop(component: cc.ScrollView) {
        this.emit('scroll-to-top', component);
    }

    private onbannerScrollViewScrollToBottom(component: cc.ScrollView) {
        this.emit('scroll-to-bottom', component);
    }

    private onbannerScrollViewScrollToLeft(component: cc.ScrollView) {
        this.emit('scroll-to-left', component);
    }

    private onbannerScrollViewScrollToRight(component: cc.ScrollView) {
        this.emit('scroll-to-right', component);
    }

    private onbannerScrollViewScrolling(component: cc.ScrollView) {
        this.emit('scrolling', component);
    }

    private onbannerScrollViewBounceBottom(component: cc.ScrollView) {
        this.emit('bounce-bottom', component);
    }

    private onbannerScrollViewBounceTop(component: cc.ScrollView) {
        this.emit('bounce-top', component);
    }

    private onbannerScrollViewBounceLeft(component: cc.ScrollView) {
        this.emit('bounce-left', component);
    }

    private onbannerScrollViewBounceRight(component: cc.ScrollView) {
        this.emit('bounce-right', component);
    }

    private onbannerScrollViewScrollEnded(component: cc.ScrollView) {
        this.emit('scroll-ended', component);
    }

    private onbannerScrollViewTouchUp(component: cc.ScrollView) {
        this.emit('touch-up', component);
    }

    private onbannerScrollViewScrollBegan(component: cc.ScrollView) {
        this.emit('scroll-began', component);
    }
}
