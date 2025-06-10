import { UIVControlBase } from './../../../../../c2f-framework/gui/layer/UIVControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import VipMainModel from './VipMainModel';
import VipMainView from './VipMainView';
import { SmallToolDemoCfg } from '../../SmallToolDemoCfg';
import VipItem from '../VipItem/VipItem';
import { SmallToolDemoUIPa } from '../../SmallToolDemoUIPa';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipMain extends UIVControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_VipMain';

    public model: VipMainModel = undefined;
    public view: VipMainView = undefined;

    protected onLoad(): void {
        this._registerEvent();
    }
    protected onDestroy(): void {
        // this._unregisterEvent();
    }
    //private methods
    _registerEvent() {
        this.view.page_vipIcons.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.view.page_vipIcons.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
        this.view.page_vipIcons.on(cc.Node.EventType.MOUSE_UP, this.onTouchEnded, this, true);
    }

    _unregisterEvent() {
        this.view.page_vipIcons.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.view.page_vipIcons.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this, true);
        this.view.page_vipIcons.off(cc.Node.EventType.MOUSE_UP, this.onTouchEnded, this, true);
    }

    protected onViewOpen(param: any) {
        this.model.initData(this.onclickVipItem.bind(this));
        this.initView();
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

            case this.view.btnLeftButton.name:
                this.CC_onClickbtnLeft();
                break;

            case this.view.btnRightButton.name:
                this.CC_onClickbtnRight();
                break;

            default:
                break;
        }
    }

    private CC_onClickbtnLeft() {
        this.model.currentIndex--;
        if (this.model.currentIndex <= 0) {
            this.model.currentIndex = 0;
        }

        this.turnIndexPage();
    }

    private CC_onClickbtnRight() {
        this.model.currentIndex++;
        if (this.model.currentIndex >= this.model.vipMaxLv - 1) {
            this.model.currentIndex = this.model.vipMaxLv - 1;
        }
        this.turnIndexPage();
    }

    private CC_onClickbtnClose() {
        this.closeView();
    }
    private onclickVipItem(data: SmallToolDemoUIPa.VipItemArg) {
        this.model.currentIndex = data.index;
        this.turnIndexPage();
    }
    private async initView() {
        this.model.vipItemArr = [];
        let item = (await c2f.res.loadOne(SmallToolDemoCfg.Prefab.vipItem, cc.Prefab)) as cc.Prefab;
        for (let i = 0; i < this.model.arr.length; i++) {
            let node = c2f.utils.view.instantiateMVCPrefab(item, this.view.page_vipIconsPageView.content);
            let vipItem = node.getComponent(VipItem);
            vipItem.init(this.model.arr[i]);
            this.model.vipItemArr.push(vipItem);
            this.view.page_vipIconsPageView.addPage(node);
        }
        this.turnIndexPage();
    }

    private turnIndexPage() {
        this.model.isMove = true;
        let time = 0.3;
        this.view.page_vipIconsPageView.scrollToPage(this.model.currentIndex, time);
        this.scheduleOnce(() => {
            this.model.isMove = false;
        }, time);
        //do same thing
    }

    private onTouchEnded() {
        //已经在移动了就不要移动了
        if (this.model.isMove) {
            return;
        }
        let pageItemWidth = this.view.page_vipIconsPageView.getPages()[0].width;
        let newIndex = Math.floor((this.view.page_vipIconsPageView.content.x + pageItemWidth / 2) / pageItemWidth);
        newIndex = Math.abs(newIndex);
        if (this.model.currentIndex != newIndex) {
            this.model.currentIndex = newIndex;
            this.turnIndexPage();
        }
    }
}
