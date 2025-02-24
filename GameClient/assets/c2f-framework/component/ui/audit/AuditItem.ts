/**
 * 提审·设置目标
 */

const { ccclass, property, executeInEditMode } = cc._decorator;
@ccclass("AuditItem")
@executeInEditMode
export class AuditItem {
    @property({
        type: cc.Node,
        tooltip: CC_DEV && "列表容器节点",
    })
    public target: cc.Node = null;

    @property()
    _controlVisible: boolean = false;
    @property({ tooltip: '控制目标节点可见性' })
    set controlVisible(visible: boolean) {
        this._controlVisible = visible;
    }
    get controlVisible() {
        return this._controlVisible;
    }

    @property()
    _tsVisible: boolean = false;
    @property({ tooltip: '目标节点是否可见性', visible: function () { return this.controlVisible; } })
    set tsVisible(show: boolean) {
        this._tsVisible = show;
    }
    get tsVisible() {
        return this._tsVisible;
    }

    @property()
    _controlOpacity: boolean = false;
    @property({ tooltip: '控制目标节点透明度' })
    set controlOpacity(visible: boolean) {
        this._controlOpacity = visible;
    }
    get controlOpacity() {
        return this._controlOpacity;
    }

    @property()
    _tsOpacity: number = 0;
    @property({ tooltip: '目标节点透明度', visible: function () { return this.controlOpacity; } })
    set tsOpacity(value: number) {
        this._tsOpacity = value;
    }
    get tsOpacity() {
        return this._tsOpacity;
    }

    @property()
    _btnDisableOp0: boolean = false;
    @property({ tooltip: '目标节点透明度为0时，其button组件无效', visible: function () { return this.controlOpacity; } })
    set btnDisableOp0(value: boolean) {
        this._btnDisableOp0 = value;
    }
    get btnDisableOp0() {
        return this._btnDisableOp0;
    }
}
