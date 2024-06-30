/** 等比缩放节点 */

/** 适配类型 */
enum FixedType {
    full,
    width,
    height,
    amdFull,
}

const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/common/ToScaleScreen')
export default class ToScaleScreen extends cc.Component {

    @property({ type: cc.Enum(FixedType) })
    private _fixedType: FixedType = FixedType.full;
    @property({ type: cc.Enum(FixedType), tooltip: CC_DEV && "缩放方式" })
    public get fixedType(): FixedType {
        return this._fixedType;
    }
    public set fixedType(v: FixedType) {
        if (this._fixedType === v) {
            return;
        }
        this._fixedType = v;
        this.autoScale();
    }

    @property()
    private _target: cc.Node = null;
    @property({ type: cc.Node, tooltip: CC_DEV && "目标节点,不设置目标节点时表示已屏幕为参考" })
    public get target(): cc.Node {
        return this._target;
    }
    public set target(v: cc.Node) {
        this._target = v;
        this.autoScale();
    }

    @property()
    _offset: number = 0;
    @property({ tooltip: "缩放偏移：在等比铺满屏幕的情况下缩放偏移值(百分比)" })
    set offset(value: number) {
        this._offset = value;
        this.autoScale();
    }
    get offset() {
        return this._offset;
    }

    @property()
    _fixedCenter: boolean = false;
    @property({ tooltip: "固定节点始终保持相对屏幕居中" })
    set fixedCenter(value: boolean) {
        this._fixedCenter = value;
        this.autoScale();
    }
    get fixedCenter() {
        return this._fixedCenter;
    }

    private oriPos: cc.Vec2 = cc.Vec2.ZERO;

    protected onLoad() {
        if (this.target) {
            this.target.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);

        this.node.getPosition(this.oriPos);
        this.autoScale();
    }

    protected onDestroy(): void {
        this.oriPos = null;
        if (this.target) {
            this.target.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
        }
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.autoScale, this);
    }

    private autoScale() {
        let szView = cc.view.getVisibleSize();
        if (this.target) {
            szView = this.target.getContentSize();
        } else {
            if (CC_EDITOR) {
                //此尺寸为设计分辨率
                szView = cc.size(1080, 1920);
            }
        }
        let scaleX = szView.width / this.node.width;
        let scaleY = szView.height / this.node.height;

        let retScale = 1;
        switch (this.fixedType) {
            case FixedType.full:
                retScale = Math.max(scaleX, scaleY) + this.offset;
                break;
            case FixedType.width:
                retScale = scaleX;
                break;
            case FixedType.height:
                retScale = scaleY;
                break;
            case FixedType.amdFull:
                //修正宽度·特别宽的屏会把宽拉很宽，画面严重失真
                let maxWHB = szView.height * 1080 / 1920;
                let amdScX = maxWHB / this.node.width;
                retScale = Math.max(amdScX, scaleY) + this.offset;
                break;

        }
        this.node.setScale(retScale);
        this.resetPosition(retScale);
    }

    private resetPosition(retScale: number) {
        //位置居中
        if (this.fixedCenter) {
            let posX = retScale * (this.node.anchorX - 0.5) * this.node.width;
            let posY = retScale * (this.node.anchorY - 0.5) * this.node.height;
            this.node.setPosition(posX, posY);
        } else {
            this.node.setPosition(this.oriPos);
        }
    }
}