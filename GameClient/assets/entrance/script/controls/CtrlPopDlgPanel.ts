import LinkPrefab from "../../../c2f-framework/component/common/LinkPrefab";
import { C2FEnum } from "../../../c2f-framework/define/C2FEnum";
import PopDlgPanel from "./entity/PopDlgPanel";

const { ccclass, property, executeInEditMode } = cc._decorator;
@ccclass
@executeInEditMode
export default class CtrlPopDlgPanel extends cc.Component {

    @property()
    _titleID: number = 0;
    @property({ tooltip: "弹窗标题ID" })
    get titleID() {
        return this._titleID;
    }
    set titleID(value: number) {
        if (this._titleID != value) {
            this._titleID = value;
        }
        if (this._titleID > 0) {
            this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel).setTiTle(c2f.language.words(this.titleID));
        }
    }

    @property()
    _separator: boolean = true;
    @property({ tooltip: "是否显示按钮分割线" })
    get separator() {
        return this._separator;
    }
    set separator(value: boolean) {
        this._separator = value;
        this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel).separatorVisible(value);
    }

    @property()
    _separatorBottom: number = 0;
    @property({ visible: function () { return this.separator }, tooltip: "按钮分割线离底部距离" })
    get separatorBottom() {
        if (this._separatorBottom == 0) {
            this._separatorBottom = this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel).getSeparatorWidgetBottom();
        }
        return this._separatorBottom;
    }
    set separatorBottom(value: number) {
        this._separatorBottom = value;
        this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel).separatorWidgetBottom(value);
    }


    @property({ type: cc.Component.EventHandler, tooltip: "关闭按钮事件" })
    closeHandler: cc.Component.EventHandler[] = [];

    protected onLoad(): void {
        let panel = this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
        panel.separatorVisible(this.separator);
        if (this.closeHandler.length > 0) {
            panel.setBtnHandler(this.closeHandler);
        }
        panel.separatorWidgetBottom(this.separatorBottom);

        cc.director.on(C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    }

    protected onDestroy(): void {
        cc.director.off(C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    }

    private onDataIDChanged() {
        let panel = this.getComponent(LinkPrefab).getComponentEx(PopDlgPanel);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
    }
}