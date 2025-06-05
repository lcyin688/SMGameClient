const { ccclass, property, menu, requireComponent } = cc._decorator;

/**
 * 适配底部均分
 * node上必须挂载cc.Widget
 */
@ccclass
@requireComponent(cc.Widget)
@menu('c2f/adapt/WELayoutUpdate(动态均分间距))')
export default class WELayoutUpdate extends cc.Component {
    /** 排列的组件 */
    @property(cc.Layout)
    private layoutNode: cc.Layout = null;

    /** 排列的组件左边间距 */
    @property
    private paddingLeft: number = 0;

    /** 排列的组件右边间距 */
    @property
    private paddingRight: number = 0;

    /** 排列的组件最小间距 */
    @property
    private minSpacingX: number = 0;

    /** 参与左边排列节点 */
    @property(cc.Node)
    private leftNodeList: cc.Node[] = [];

    /** 参与右边排列节点 */
    @property(cc.Node)
    private rightNodeList: cc.Node[] = [];

    protected onLoad(): void {
        this.node.on('size-changed', this.updateLayout, this);
    }

    protected start(): void {
        this.updateLayout();
    }

    protected onDestroy(): void {
        this.node.off('size-changed', this.updateLayout, this);
    }

    public updateLayout() {
        const allWidth = this.node.width;

        let leftSpacing = 0;
        let rightSpacing = 0;

        this.leftNodeList?.forEach((leftNode) => {
            if (leftNode?.active === true) {
                leftSpacing += leftNode.width;
            }
        });

        this.rightNodeList?.forEach((rightNode) => {
            if (rightNode?.active === true) {
                rightSpacing += rightNode.width;
            }
        });

        const layoutX = 0.5 * (leftSpacing - rightSpacing);
        const layoutSize = allWidth - leftSpacing - rightSpacing;

        let layoutChildSize = 0;
        let layoutChildNum = 0;
        this.layoutNode.node.children?.forEach((child) => {
            if (child?.active === true) {
                layoutChildSize += child.width;
                layoutChildNum++;
            }
        });

        const spacingXSize = layoutSize - this.paddingLeft - this.paddingRight - layoutChildSize;

        const leng = layoutChildNum + 1;

        const widgetSpacingX = spacingXSize / leng;

        const finalSpacingX = widgetSpacingX < this.minSpacingX ? this.minSpacingX : widgetSpacingX;

        this.layoutNode.paddingLeft = this.paddingLeft + widgetSpacingX;
        this.layoutNode.paddingRight = this.paddingRight + widgetSpacingX;

        this.layoutNode.spacingX = finalSpacingX;
        this.layoutNode.node.x = layoutX;
    }
}
