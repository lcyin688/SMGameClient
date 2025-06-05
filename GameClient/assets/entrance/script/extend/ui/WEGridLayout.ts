const { ccclass, property, executeInEditMode, menu, requireComponent } = cc._decorator;
/**
 * 自定义网格布局组件，用于适配不同数量的子节点显示。
 *
 * 满足以下需求：
 *
 * 1.改为单行4个显示，5-8个做两行显示，超出8个才做左右滑动显示
 *
 * 2.显示时，如果只有4个或以下，单行整体居中显示，显示顺序为，从左往右
 *
 * 3.显示时，如果有5-8个，单行最多4个，分两行居中显示，显示顺序为，从上往下，从左往右
 *
 * 4.显示时，如果超过8个，两行居中显示，显示顺序为，从上往下，从左往右
 */
@ccclass
@executeInEditMode
@requireComponent(cc.Layout)
@menu('c2f/layout/WEGridLayout(自适应网格列表)')
export default class WEGridLayout extends cc.Component {
    @property()
    _isHorizontalLay: boolean = true;
    /** 是否是水平布局，否则垂直布局 */
    @property({ tooltip: CC_DEV && '是否是水平布局，否则垂直布局' })
    get isHorizontalLay() {
        return this._isHorizontalLay;
    }
    set isHorizontalLay(value) {
        this._isHorizontalLay = value;
        this.onRestore();
    }

    @property()
    _hv_spacing: cc.Size = new cc.Size(0, 0);
    /** 间距：w 行间距，h 列间距 */
    @property({ tooltip: CC_DEV && '间距: w 行间距，h 列间距', step: 1 })
    get hv_spacing() {
        return this._hv_spacing;
    }
    set hv_spacing(value) {
        value.height = Math.floor(value.height);
        value.width = Math.floor(value.width);
        this._hv_spacing = value;
        this.onRestore();
    }

    @property()
    _hv_amount: cc.Size = new cc.Size(1, 1);
    /** 完整显示数量：w 行数量，h 列数量 */
    @property({ tooltip: CC_DEV && '完整显示数量：w 行数量，h 列数量 ', step: 1 })
    get hv_amount() {
        return this._hv_amount;
    }
    set hv_amount(value) {
        value.height = Math.floor(value.height);
        value.width = Math.floor(value.width);
        if (value.height < 1) {
            value.height = 1;
        }
        if (value.width < 1) {
            value.width = 1;
        }
        this._hv_amount = value;
        this.onRestore();
    }

    @property()
    _itemSize: cc.Size = new cc.Size(100, 100);
    @property({ tooltip: CC_DEV && 'item node 大小' })
    get itemSize() {
        return this._itemSize;
    }
    set itemSize(value) {
        this._itemSize = value;
        this.onRestore();
    }

    @property()
    _padding: number = 0;
    /** 四边边距 */
    @property({ type: cc.Float, tooltip: CC_DEV && '边距' })
    get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = value;
        this.onRestore();
    }

    private oldAmount: number = 0;

    onLoad() {
        const lay = this.node.getComponent(cc.Layout);
        lay.type = cc.Layout.Type.GRID;
        lay.resizeMode = cc.Layout.ResizeMode.CONTAINER;

        this.onRestore();
    }

    update(dt: number): void {
        const amount = this.getShowChildAmount();
        if (amount === this.oldAmount) {
            return;
        }
        this.onRestore();
    }

    onRestore() {
        const amount = this.getShowChildAmount();
        this.oldAmount = amount;
        if (amount < 1) {
            return;
        }

        const parentNode = this.node.parent;
        const parentSize = parentNode.getContentSize();
        const lay = this.node.getComponent(cc.Layout);
        lay.enabled = false;

        let pad_top = this.padding;
        let pad_bottom = this.padding;
        let pad_left = this.padding;
        let pad_right = this.padding;
        let axis = cc.Layout.AxisDirection.VERTICAL;
        let spacingX = this.hv_spacing.width;
        let spacingY = this.hv_spacing.height;

        // 水平滑动
        if (this.isHorizontalLay) {
            // 水平滑动
            this.node.setAnchorPoint(0, 0.5);
            // 计算显示
            if (amount <= this.hv_amount.width) {
                this.node.height = this.itemSize.height + this.padding * 2;
                this.node.width = parentSize.width;
                spacingX = (parentSize.width - this.itemSize.width * amount) / (amount + 1);
                pad_left = pad_right = spacingX;
                axis = cc.Layout.AxisDirection.HORIZONTAL;
            } else if (amount <= this.hv_amount.width * this.hv_amount.height) {
                spacingX = (parentSize.width - this.itemSize.width * this.hv_amount.width) / (this.hv_amount.width + 1);
                pad_left = pad_right = spacingX;
                let h_clo = Math.floor(amount / this.hv_amount.width);
                this.node.height = this.itemSize.height * h_clo + this.padding * h_clo + spacingY * (h_clo - 1);
                this.node.width = parentSize.width;
                axis = cc.Layout.AxisDirection.HORIZONTAL;
            } else {
                spacingX = this.hv_spacing.width;
                pad_left = pad_right = this.padding;
                this.node.height = this.itemSize.height * this.hv_amount.height + this.padding * 2 + spacingY * (this.hv_amount.height - 1);
                let h_clo = Math.ceil(amount / this.hv_amount.height);
                this.node.width = this.itemSize.width * h_clo + spacingX * (h_clo - 1) + this.padding * 2;
                axis = cc.Layout.AxisDirection.VERTICAL;
            }
        } else {
            // 垂直滑动
            axis = cc.Layout.AxisDirection.HORIZONTAL;
            // 计算显示
            if (amount <= this.hv_amount.width) {
                this.node.setAnchorPoint(0.5, 0.5);
                this.node.setPosition(0, 0);
                // 单列显示
                this.node.height = this.itemSize.height + this.padding * 2;
                this.node.width = parentSize.width;
                spacingX = (parentSize.width - this.itemSize.width * amount) / (amount + 1);
                pad_left = pad_right = spacingX;
                axis = cc.Layout.AxisDirection.HORIZONTAL;
                pad_top = (parentSize.height - this.itemSize.height) / 2 - this.padding;
            } else if (amount <= this.hv_amount.width * this.hv_amount.height) {
                // 多列显示
                this.node.setAnchorPoint(0.5, 0.5);
                this.node.setPosition(0, 0);
                this.node.width = parentSize.width;
                spacingX = (parentSize.width - this.itemSize.width * this.hv_amount.width) / (this.hv_amount.width + 1);
                spacingY = this.hv_spacing.height;
                pad_left = pad_right = spacingX;
                pad_top = (parentSize.height - this.itemSize.height * this.hv_amount.height) / 2 - this.padding;
            } else {
                // 超过最大行数，需要垂直方向可滑动的多行水平布局
                this.node.setAnchorPoint(0.5, 1);
                this.node.setPosition(0, parentSize.height / 2 - this.padding);
                this.node.width = parentSize.width;
                spacingX = (parentSize.width - this.itemSize.width * this.hv_amount.width) / (this.hv_amount.width + 1);
                spacingY = this.hv_spacing.height;
                pad_left = pad_right = spacingX;
            }
        }

        // update layout
        lay.startAxis = axis;
        lay.spacingX = spacingX;
        lay.spacingY = spacingY;
        lay.paddingTop = pad_top;
        lay.paddingBottom = pad_bottom;
        lay.paddingLeft = pad_left;
        lay.paddingRight = pad_right;
        lay.enabled = true;
        lay.updateLayout();
    }

    private getShowChildAmount() {
        return this.node.children.reduce((amount, child) => {
            return amount + (child.active ? 1 : 0);
        }, 0);
    }
}
