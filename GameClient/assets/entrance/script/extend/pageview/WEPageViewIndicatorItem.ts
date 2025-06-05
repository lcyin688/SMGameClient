const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('c2f/scroll/WEPageViewIndicatorItem')
export class WEPageViewIndicatorItem extends cc.Component {
    @property(cc.Node)
    private normalNode: cc.Node = null;
    @property(cc.Node)
    private selectNode: cc.Node = null;

    public setStatus(select: boolean): void {
        this.normalNode && (this.normalNode.active = !select);
        this.selectNode && (this.selectNode.active = select);

        if (this.normalNode && this.normalNode.active == true) {
            this.node.width = this.normalNode.width;
        }

        if (this.selectNode && this.selectNode.active == true) {
            this.node.width = this.selectNode.width;
        }
    }
}
