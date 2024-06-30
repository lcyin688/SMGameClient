const { ccclass, property } = cc._decorator;
@ccclass("LayoutProperty")
export class LayoutProperty {

    @property({ type: cc.Enum(cc.Layout.Type), tooltip: CC_DEV && "布局模式" })
    public type: cc.Layout.Type = cc.Layout.Type.VERTICAL;

    @property({
        type: cc.Enum(cc.Layout.AxisDirection),
        tooltip: CC_DEV && "GRID布局的起始轴方向\nHORIZONTAL：固定宽度，动态改变高度\nVERTICAL：固定高度，动态改变宽度",
        visible() { return this.type === cc.Layout.Type.GRID; }
    })
    public startAxis: cc.Layout.AxisDirection = cc.Layout.AxisDirection.HORIZONTAL;

    @property({ visible() { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    public left: number = 0;

    @property({ visible() { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    public right: number = 0;

    @property({ visible() { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    public top: number = 0;

    @property({ visible() { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    public bottom: number = 0;

    @property({ visible() { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; } })
    public spacingX: number = 0;

    @property({ visible() { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; } })
    public spacingY: number = 0;

    @property({
        type: cc.Enum(cc.Layout.VerticalDirection),
        visible() { return this.type === cc.Layout.Type.VERTICAL || this.type === cc.Layout.Type.GRID; }
    })
    public verticalDirection: cc.Layout.VerticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;

    @property({
        type: cc.Enum(cc.Layout.HorizontalDirection),
        visible() { return this.type === cc.Layout.Type.HORIZONTAL || this.type === cc.Layout.Type.GRID; }
    })
    public horizontalDirection: cc.Layout.HorizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
}