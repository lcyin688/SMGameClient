// This script is automatic generation, please do not edit.
// If you need add logic, please write in VipMainView.ts .
// If you need add data, please write in VipMainViewModel.ts .

import { UIViewBase } from './../../../../../c2f-framework/gui/layer/UIViewBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class VipMainView extends UIViewBase {

    /** 预制名 给实例调用 */
    public prefabName = 'V_VipMain';

    public btnClose: cc.Node;
    public btnCloseButton: cc.Button = undefined;
    public btnCloseWidget: cc.Widget = undefined;
    public page_vipIcons: cc.Node;
    public page_vipIconsPageView: cc.PageView = undefined;
    public page_vipIconsMask: cc.Mask = undefined;
    public btnLeft: cc.Node;
    public btnLeftButton: cc.Button = undefined;
    public btnRight: cc.Node;
    public btnRightButton: cc.Button = undefined;
    

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
        this.btnCloseWidget = this.btnClose.getComponent(cc.Widget);
        this.page_vipIcons = this.get('_page_vipIcons_');
        this.page_vipIconsPageView = this.page_vipIcons.getComponent(cc.PageView);
        this.page_vipIconsMask = this.page_vipIcons.getComponent(cc.Mask);
        this.btnLeft = this.get('_btnLeft_');
        this.btnLeftButton = this.btnLeft.getComponent(cc.Button);
        this.btnRight = this.get('_btnRight_');
        this.btnRightButton = this.btnRight.getComponent(cc.Button);
        
    }

    private addEvent() {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.page_vipIconsPageView.node.on('page-turning', this.onpage_vipIconsPageViewPageTurning, this);
        this.btnLeftButton.node.on('click', this.onbtnLeftButtonClick, this);
        this.btnRightButton.node.on('click', this.onbtnRightButtonClick, this);

    }

    private removeEvent() {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.page_vipIconsPageView.node.off('page-turning', this.onpage_vipIconsPageViewPageTurning, this);
        this.btnLeftButton.node.off('click', this.onbtnLeftButtonClick, this);
        this.btnRightButton.node.off('click', this.onbtnRightButtonClick, this);

    }

    private onbtnCloseButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onpage_vipIconsPageViewPageTurning(component: cc.PageView) {
        this.emit('page-turning', component);
    }

    private onbtnLeftButtonClick(component: cc.Button) {
        this.emit('click', component);
    }

    private onbtnRightButtonClick(component: cc.Button) {
        this.emit('click', component);
    }


}