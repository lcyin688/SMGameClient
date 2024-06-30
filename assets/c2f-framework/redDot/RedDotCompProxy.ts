
const { ccclass, property } = cc._decorator;
@ccclass
export default class RedDotCompProxy extends c2f.RedDotComp {

    @property(cc.Node)
    nodeMask: cc.Node = null;

    @property(cc.Label)
    txtCount: cc.Label = null;

    protected onDestroy(): void {
        if (this.dotKey) {
            c2f.dotMgr.deleteDataByCompDestory(this.dotKey, this);
        }
        super.onDestroy();
    }

    protected start(): void {
        this.amendDotPos();
    }

    /** 修正红点位置 */
    public amendDotPos() {
        const parent = this.node.parent;
        if (!parent) {
            return;
        }
        let rtX = (1 - parent.anchorX) * parent.width * parent.scaleX;
        let rtY = (1 - parent.anchorY) * parent.height * parent.scaleY;
        this.node.setPosition(cc.v2(rtX + this.offset.x, rtY + this.offset.y));
    }

    public setShowType(showType: c2f.RedDot.ShowType): void {
        super.setShowType(showType);
        this.txtCount.node.active = (showType === c2f.RedDot.ShowType.Number);
        this.nodeMask.active = (showType === c2f.RedDot.ShowType.Mark);
    }

    public updateCount(count: number) {
        this.txtCount.string = count.toString()
    }
}