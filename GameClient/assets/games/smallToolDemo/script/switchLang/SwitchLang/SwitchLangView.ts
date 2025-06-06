// This script is automatic generation, please do not edit.
// If you need add logic, please write in SwitchLangView.ts .
// If you need add data, please write in SwitchLangViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';
import VirtualList from "./../../../../../c2f-framework/component/ui/scrollList/VirtualList";


const { ccclass, property } = cc._decorator;
@ccclass
export default class SwitchLangView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_SwitchLang';

    public btnClose: cc.Node;
    public btnCloseButton: cc.Button = undefined;
    public list: cc.Node;
    public listSprite: cc.Sprite = undefined;
    public listScrollView: cc.ScrollView = undefined;
    public listVirtualList: VirtualList = undefined;
    

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
        this.listSprite = this.list.getComponent(cc.Sprite);
        this.listScrollView = this.list.getComponent(cc.ScrollView);
        this.listVirtualList = this.list.getComponent(VirtualList);
        
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


}