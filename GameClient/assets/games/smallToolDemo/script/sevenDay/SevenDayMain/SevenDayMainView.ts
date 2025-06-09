// This script is automatic generation, please do not edit.
// If you need add logic, please write in SevenDayMainView.ts .
// If you need add data, please write in SevenDayMainViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';
import VirtualList from './../../../../../c2f-framework/component/ui/scrollList/VirtualList';
import WESwitchMenu from './../../../../../entrance/script/extend/pageview/WESwitchMenu';
import WESwitchPage from './../../../../../entrance/script/extend/pageview/WESwitchPage';
import VirtualLayout from './../../../../../c2f-framework/component/ui/scrollList/VirtualLayout';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SevenDayMainView extends UIViewBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_SevenDayMain';

    public btnClose: cc.Node;
    public btnCloseButton: cc.Button = undefined;
    public list: cc.Node;
    public listScrollView: cc.ScrollView = undefined;
    public listVirtualList: VirtualList = undefined;
    public listContent: cc.Node;
    public listContentLayout: cc.Layout = undefined;
    public listContentWidget: cc.Widget = undefined;
    public listContentWESwitchMenu: WESwitchMenu = undefined;
    public listContentWESwitchPage: WESwitchPage = undefined;
    public listContentVirtualLayout: VirtualLayout = undefined;
    public listTask: cc.Node;
    public listTaskScrollView: cc.ScrollView = undefined;
    public listTaskVirtualList: VirtualList = undefined;
    public lab_award: cc.Node;
    public lab_awardLabel: cc.Label = undefined;

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
        this.list = this.get('_list_');
        this.listScrollView = this.list.getComponent(cc.ScrollView);
        this.listVirtualList = this.list.getComponent(VirtualList);
        this.listContent = this.get('_listContent_');
        this.listContentLayout = this.listContent.getComponent(cc.Layout);
        this.listContentWidget = this.listContent.getComponent(cc.Widget);
        this.listContentWESwitchMenu = this.listContent.getComponent(WESwitchMenu);
        this.listContentWESwitchPage = this.listContent.getComponent(WESwitchPage);
        this.listContentVirtualLayout = this.listContent.getComponent(VirtualLayout);
        this.listTask = this.get('_listTask_');
        this.listTaskScrollView = this.listTask.getComponent(cc.ScrollView);
        this.listTaskVirtualList = this.listTask.getComponent(VirtualList);
        this.lab_award = this.get('_lab_award_');
        this.lab_awardLabel = this.lab_award.getComponent(cc.Label);
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.listScrollView.node.on('scroll-to-top', this.onlistScrollViewScrollToTop, this);
        this.listScrollView.node.on('scroll-to-bottom', this.onlistScrollViewScrollToBottom, this);
        this.listScrollView.node.on('scroll-to-left', this.onlistScrollViewScrollToLeft, this);
        this.listScrollView.node.on('scroll-to-right', this.onlistScrollViewScrollToRight, this);
        this.listScrollView.node.on('scrolling', this.onlistScrollViewScrolling, this);
        this.listScrollView.node.on('bounce-bottom', this.onlistScrollViewBounceBottom, this);
        this.listScrollView.node.on('bounce-top', this.onlistScrollViewBounceTop, this);
        this.listScrollView.node.on('bounce-left', this.onlistScrollViewBounceLeft, this);
        this.listScrollView.node.on('bounce-right', this.onlistScrollViewBounceRight, this);
        this.listScrollView.node.on('scroll-ended', this.onlistScrollViewScrollEnded, this);
        this.listScrollView.node.on('touch-up', this.onlistScrollViewTouchUp, this);
        this.listScrollView.node.on('scroll-began', this.onlistScrollViewScrollBegan, this);
        this.listTaskScrollView.node.on('scroll-to-top', this.onlistTaskScrollViewScrollToTop, this);
        this.listTaskScrollView.node.on('scroll-to-bottom', this.onlistTaskScrollViewScrollToBottom, this);
        this.listTaskScrollView.node.on('scroll-to-left', this.onlistTaskScrollViewScrollToLeft, this);
        this.listTaskScrollView.node.on('scroll-to-right', this.onlistTaskScrollViewScrollToRight, this);
        this.listTaskScrollView.node.on('scrolling', this.onlistTaskScrollViewScrolling, this);
        this.listTaskScrollView.node.on('bounce-bottom', this.onlistTaskScrollViewBounceBottom, this);
        this.listTaskScrollView.node.on('bounce-top', this.onlistTaskScrollViewBounceTop, this);
        this.listTaskScrollView.node.on('bounce-left', this.onlistTaskScrollViewBounceLeft, this);
        this.listTaskScrollView.node.on('bounce-right', this.onlistTaskScrollViewBounceRight, this);
        this.listTaskScrollView.node.on('scroll-ended', this.onlistTaskScrollViewScrollEnded, this);
        this.listTaskScrollView.node.on('touch-up', this.onlistTaskScrollViewTouchUp, this);
        this.listTaskScrollView.node.on('scroll-began', this.onlistTaskScrollViewScrollBegan, this);
    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.listScrollView.node.off('scroll-to-top', this.onlistScrollViewScrollToTop, this);
        this.listScrollView.node.off('scroll-to-bottom', this.onlistScrollViewScrollToBottom, this);
        this.listScrollView.node.off('scroll-to-left', this.onlistScrollViewScrollToLeft, this);
        this.listScrollView.node.off('scroll-to-right', this.onlistScrollViewScrollToRight, this);
        this.listScrollView.node.off('scrolling', this.onlistScrollViewScrolling, this);
        this.listScrollView.node.off('bounce-bottom', this.onlistScrollViewBounceBottom, this);
        this.listScrollView.node.off('bounce-top', this.onlistScrollViewBounceTop, this);
        this.listScrollView.node.off('bounce-left', this.onlistScrollViewBounceLeft, this);
        this.listScrollView.node.off('bounce-right', this.onlistScrollViewBounceRight, this);
        this.listScrollView.node.off('scroll-ended', this.onlistScrollViewScrollEnded, this);
        this.listScrollView.node.off('touch-up', this.onlistScrollViewTouchUp, this);
        this.listScrollView.node.off('scroll-began', this.onlistScrollViewScrollBegan, this);
        this.listTaskScrollView.node.off('scroll-to-top', this.onlistTaskScrollViewScrollToTop, this);
        this.listTaskScrollView.node.off('scroll-to-bottom', this.onlistTaskScrollViewScrollToBottom, this);
        this.listTaskScrollView.node.off('scroll-to-left', this.onlistTaskScrollViewScrollToLeft, this);
        this.listTaskScrollView.node.off('scroll-to-right', this.onlistTaskScrollViewScrollToRight, this);
        this.listTaskScrollView.node.off('scrolling', this.onlistTaskScrollViewScrolling, this);
        this.listTaskScrollView.node.off('bounce-bottom', this.onlistTaskScrollViewBounceBottom, this);
        this.listTaskScrollView.node.off('bounce-top', this.onlistTaskScrollViewBounceTop, this);
        this.listTaskScrollView.node.off('bounce-left', this.onlistTaskScrollViewBounceLeft, this);
        this.listTaskScrollView.node.off('bounce-right', this.onlistTaskScrollViewBounceRight, this);
        this.listTaskScrollView.node.off('scroll-ended', this.onlistTaskScrollViewScrollEnded, this);
        this.listTaskScrollView.node.off('touch-up', this.onlistTaskScrollViewTouchUp, this);
        this.listTaskScrollView.node.off('scroll-began', this.onlistTaskScrollViewScrollBegan, this);
    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onlistScrollViewScrollToTop(component: cc.ScrollView) {
        this.emit('scroll-to-top', component);
    }

    private onlistScrollViewScrollToBottom(component: cc.ScrollView) {
        this.emit('scroll-to-bottom', component);
    }

    private onlistScrollViewScrollToLeft(component: cc.ScrollView) {
        this.emit('scroll-to-left', component);
    }

    private onlistScrollViewScrollToRight(component: cc.ScrollView) {
        this.emit('scroll-to-right', component);
    }

    private onlistScrollViewScrolling(component: cc.ScrollView) {
        this.emit('scrolling', component);
    }

    private onlistScrollViewBounceBottom(component: cc.ScrollView) {
        this.emit('bounce-bottom', component);
    }

    private onlistScrollViewBounceTop(component: cc.ScrollView) {
        this.emit('bounce-top', component);
    }

    private onlistScrollViewBounceLeft(component: cc.ScrollView) {
        this.emit('bounce-left', component);
    }

    private onlistScrollViewBounceRight(component: cc.ScrollView) {
        this.emit('bounce-right', component);
    }

    private onlistScrollViewScrollEnded(component: cc.ScrollView) {
        this.emit('scroll-ended', component);
    }

    private onlistScrollViewTouchUp(component: cc.ScrollView) {
        this.emit('touch-up', component);
    }

    private onlistScrollViewScrollBegan(component: cc.ScrollView) {
        this.emit('scroll-began', component);
    }

    private onlistTaskScrollViewScrollToTop(component: cc.ScrollView) {
        this.emit('scroll-to-top', component);
    }

    private onlistTaskScrollViewScrollToBottom(component: cc.ScrollView) {
        this.emit('scroll-to-bottom', component);
    }

    private onlistTaskScrollViewScrollToLeft(component: cc.ScrollView) {
        this.emit('scroll-to-left', component);
    }

    private onlistTaskScrollViewScrollToRight(component: cc.ScrollView) {
        this.emit('scroll-to-right', component);
    }

    private onlistTaskScrollViewScrolling(component: cc.ScrollView) {
        this.emit('scrolling', component);
    }

    private onlistTaskScrollViewBounceBottom(component: cc.ScrollView) {
        this.emit('bounce-bottom', component);
    }

    private onlistTaskScrollViewBounceTop(component: cc.ScrollView) {
        this.emit('bounce-top', component);
    }

    private onlistTaskScrollViewBounceLeft(component: cc.ScrollView) {
        this.emit('bounce-left', component);
    }

    private onlistTaskScrollViewBounceRight(component: cc.ScrollView) {
        this.emit('bounce-right', component);
    }

    private onlistTaskScrollViewScrollEnded(component: cc.ScrollView) {
        this.emit('scroll-ended', component);
    }

    private onlistTaskScrollViewTouchUp(component: cc.ScrollView) {
        this.emit('touch-up', component);
    }

    private onlistTaskScrollViewScrollBegan(component: cc.ScrollView) {
        this.emit('scroll-began', component);
    }
}
