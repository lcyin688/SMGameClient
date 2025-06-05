// This script is automatic generation, please do not edit.
// If you need add logic, please write in JoinUsView.ts .
// If you need add data, please write in JoinUsViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class JoinUsView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_JoinUs';

    public btnClose: cc.Node;
    public btnCloseButton: cc.Button = undefined;
    public scroll_way: cc.Node;
    public scroll_wayScrollView: cc.ScrollView = undefined;
    

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
        this.btnClose = this.get('_btnClose_');
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.scroll_way = this.get('_scroll_way_');
        this.scroll_wayScrollView = this.scroll_way.getComponent(cc.ScrollView);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.scroll_wayScrollView.node.on('scroll-to-top', this.onscroll_wayScrollViewScrollToTop, this);
        this.scroll_wayScrollView.node.on('scroll-to-bottom', this.onscroll_wayScrollViewScrollToBottom, this);
        this.scroll_wayScrollView.node.on('scroll-to-left', this.onscroll_wayScrollViewScrollToLeft, this);
        this.scroll_wayScrollView.node.on('scroll-to-right', this.onscroll_wayScrollViewScrollToRight, this);
        this.scroll_wayScrollView.node.on('scrolling', this.onscroll_wayScrollViewScrolling, this);
        this.scroll_wayScrollView.node.on('bounce-bottom', this.onscroll_wayScrollViewBounceBottom, this);
        this.scroll_wayScrollView.node.on('bounce-top', this.onscroll_wayScrollViewBounceTop, this);
        this.scroll_wayScrollView.node.on('bounce-left', this.onscroll_wayScrollViewBounceLeft, this);
        this.scroll_wayScrollView.node.on('bounce-right', this.onscroll_wayScrollViewBounceRight, this);
        this.scroll_wayScrollView.node.on('scroll-ended', this.onscroll_wayScrollViewScrollEnded, this);
        this.scroll_wayScrollView.node.on('touch-up', this.onscroll_wayScrollViewTouchUp, this);
        this.scroll_wayScrollView.node.on('scroll-began', this.onscroll_wayScrollViewScrollBegan, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.scroll_wayScrollView.node.off('scroll-to-top', this.onscroll_wayScrollViewScrollToTop, this);
        this.scroll_wayScrollView.node.off('scroll-to-bottom', this.onscroll_wayScrollViewScrollToBottom, this);
        this.scroll_wayScrollView.node.off('scroll-to-left', this.onscroll_wayScrollViewScrollToLeft, this);
        this.scroll_wayScrollView.node.off('scroll-to-right', this.onscroll_wayScrollViewScrollToRight, this);
        this.scroll_wayScrollView.node.off('scrolling', this.onscroll_wayScrollViewScrolling, this);
        this.scroll_wayScrollView.node.off('bounce-bottom', this.onscroll_wayScrollViewBounceBottom, this);
        this.scroll_wayScrollView.node.off('bounce-top', this.onscroll_wayScrollViewBounceTop, this);
        this.scroll_wayScrollView.node.off('bounce-left', this.onscroll_wayScrollViewBounceLeft, this);
        this.scroll_wayScrollView.node.off('bounce-right', this.onscroll_wayScrollViewBounceRight, this);
        this.scroll_wayScrollView.node.off('scroll-ended', this.onscroll_wayScrollViewScrollEnded, this);
        this.scroll_wayScrollView.node.off('touch-up', this.onscroll_wayScrollViewTouchUp, this);
        this.scroll_wayScrollView.node.off('scroll-began', this.onscroll_wayScrollViewScrollBegan, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onscroll_wayScrollViewScrollToTop(component: cc.ScrollView) {
        this.emit('scroll-to-top', component);
    }

    private onscroll_wayScrollViewScrollToBottom(component: cc.ScrollView) {
        this.emit('scroll-to-bottom', component);
    }

    private onscroll_wayScrollViewScrollToLeft(component: cc.ScrollView) {
        this.emit('scroll-to-left', component);
    }

    private onscroll_wayScrollViewScrollToRight(component: cc.ScrollView) {
        this.emit('scroll-to-right', component);
    }

    private onscroll_wayScrollViewScrolling(component: cc.ScrollView) {
        this.emit('scrolling', component);
    }

    private onscroll_wayScrollViewBounceBottom(component: cc.ScrollView) {
        this.emit('bounce-bottom', component);
    }

    private onscroll_wayScrollViewBounceTop(component: cc.ScrollView) {
        this.emit('bounce-top', component);
    }

    private onscroll_wayScrollViewBounceLeft(component: cc.ScrollView) {
        this.emit('bounce-left', component);
    }

    private onscroll_wayScrollViewBounceRight(component: cc.ScrollView) {
        this.emit('bounce-right', component);
    }

    private onscroll_wayScrollViewScrollEnded(component: cc.ScrollView) {
        this.emit('scroll-ended', component);
    }

    private onscroll_wayScrollViewTouchUp(component: cc.ScrollView) {
        this.emit('touch-up', component);
    }

    private onscroll_wayScrollViewScrollBegan(component: cc.ScrollView) {
        this.emit('scroll-began', component);
    }


}