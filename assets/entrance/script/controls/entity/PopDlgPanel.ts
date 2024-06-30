
const { ccclass, property } = cc._decorator;
@ccclass
export default class PopDlgPanel extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Button)
    btnClose: cc.Button = null;

    @property(cc.Node)
    separatorLine: cc.Node = null;

    public setTiTle(title: string) {
        this.title.string = title;
    }

    public setBtnHandler(handle: cc.Component.EventHandler[]) {
        this.btnClose.node.active = handle.length > 0 ? true : false;
        this.btnClose.clickEvents = handle;
    }

    public separatorVisible(v: boolean) {
        if (this.separatorLine) {
            this.separatorLine.active = v;
        }
    }

    public separatorWidgetBottom(v: number) {
        if (!this.separatorLine) {
            return;
        }
        let comp = this.separatorLine.getComponent(cc.Widget);
        if (comp) {
            comp.bottom = v;
        }
        if (!CC_EDITOR) {
            comp.updateAlignment();
        }
    }

    public getSeparatorWidgetBottom() {
        let bottom = 0;
        if (this.separatorLine) {
            let comp = this.separatorLine.getComponent(cc.Widget);
            bottom = comp.bottom;
        }
        return bottom;
    }

    /** 快捷设置关闭事件 */
    public quickSetCloseHnadler(ower: cc.Component, handlerName: string = 'closeView') {
        let handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.setBtnHandler([handler]);
    }
}