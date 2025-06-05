export enum DirectionEnum {
    /** 向上 */
    UP,
    /** 向下 */
    DOWN,
    /** 向左 */
    LEFT,
    /** 享有 */
    RIGHT,
}

export enum LayoutEnum {
    /** 横向 */
    HORIZONTAL,
    /** 纵向 */
    VERTICAL,
}

export interface NewOpts {
    listSize: cc.Size;
    layout: LayoutEnum;
    direction: DirectionEnum;
    parent: cc.Node;
}

interface ItemNode extends cc.Node {
    customSize: cc.Size;
}

class TurntableRecordReelComp extends cc.Component {
    public static DirectionEnum = DirectionEnum;
    public static LayoutEnum = LayoutEnum;
    private _updateCall: (dt: number) => void = () => {};

    public setUpdateCall(call: (dt: number) => void) {
        this._updateCall = call;
    }

    public update(dt: number): void {
        dt = dt > 1000 / 30 ? 1000 / 30 : dt;
        this._updateCall?.(dt);
    }
}

/**
 * 无限循环滚动列表
 */
export class TurntableRecordReel {
    public static Layout = LayoutEnum;
    public static Direction = DirectionEnum;
    /**
     * 速度 \
     * px / 每秒
     */
    public speed: number = 30;

    private _opts: NewOpts = null;

    private updateComp: TurntableRecordReelComp = null;

    /** 渲染序号 */
    private _renderIdx: number = -1;

    public get renderIdx() {
        return this._renderIdx;
    }

    private _node: cc.Node = null;
    public get node() {
        return this._node;
    }

    /** 子节点 */
    private child: ItemNode[] = [];

    /**
     * 滚动单位
     */
    private _unit: number = 0;

    private initPos: cc.Vec2 = cc.v2(0, 0);

    private _createCall: (idx: number) => { node: cc.Node; size: cc.Size } = () => {
        return null;
    };

    private _removeCall: (node: cc.Node) => void = () => {};

    private _updateCall: (dt: number) => void = () => {
        return null;
    };

    /**
     * 列表大小
     * @param opts
     */
    constructor(opts: NewOpts) {
        this._opts = Object.assign(this._opts || {}, opts);
        this.checkLayout();

        const node = new cc.Node('WEInfiniteReelList');
        this.updateComp = node.addComponent(TurntableRecordReelComp);
        this.updateComp.setUpdateCall(this.update.bind(this));
        this._node = node;

        this._opts.parent.addChild(node);
        node.width = opts.listSize.width;
        node.height = opts.listSize.height;

        this.updateWidget();

        this._updateCall = this.updateVerticalUp.bind(this);
    }

    /**
     * 相对于父元素居中
     */
    private updateWidget() {
        const x = this._opts.listSize.width * 0.5 - this._opts.parent.anchorX * this._opts.parent.width;
        const y = this._opts.listSize.height * 0.5 - this._opts.parent.anchorY * this._opts.parent.height;
        this._node.setPosition(x, y);
        this.initPos.x = x;
        this.initPos.y = y;
    }

    /**
     * 创建item
     * @param call
     */
    public onCreateItem(call: (idx: number) => { node: cc.Node; size: cc.Size }) {
        this._createCall = call;
    }

    /**
     * 移除item
     * @param call
     */
    public onRemoveItem(call: (node: cc.Node) => void) {
        this._removeCall = call;
    }

    private checkLayout() {
        const layout = this._opts.layout;
        const direction = this._opts.direction;
        if (layout == LayoutEnum.VERTICAL && direction == DirectionEnum.LEFT) {
            this._opts.direction = DirectionEnum.UP;
            return;
        }

        if (layout == LayoutEnum.VERTICAL && direction == DirectionEnum.RIGHT) {
            this._opts.direction = DirectionEnum.DOWN;
            return;
        }

        if (layout == LayoutEnum.HORIZONTAL && direction == DirectionEnum.UP) {
            this._opts.direction = DirectionEnum.LEFT;
            return;
        }

        if (layout == LayoutEnum.HORIZONTAL && direction == DirectionEnum.DOWN) {
            this._opts.direction = DirectionEnum.RIGHT;
            return;
        }
    }

    private update(dt: number) {
        this._updateCall?.(dt);
    }

    /**
     * 向上滚动
     * @param dt
     */
    private updateVerticalUp(dt: number) {
        // this._updateCall = null;
        const len = this.child.length;
        if (len > 100) {
            return;
        }

        let last = this.child[len - 1];
        let first = this.child[0];

        // 超出顶部则移除
        if (this.checkUpIsRec(first)) {
            const removeNode = this.child.shift();
            removeNode.setParent(null);
            this._removeCall(removeNode);
        }

        // 超出边界，创建元素
        if (this.checkUpIsAdd(last)) {
            last = this.createVerticalUpdate(last);
            if (!last) {
                return;
            }
        }

        // 添加过后还是没有达到滚动条件则还是不滚动
        if (this.checkUpIsAdd(last)) {
            return;
        }

        // // 超出高度位置则开始滚动，否则暂停滚动
        this._unit += dt * this.speed;
        this._node.setPosition(0, this.initPos.y + this._unit);
    }

    /**
     * 检查向上滚动是否滚动到了边缘为位置
     * @param last
     * @returns
     */
    private checkUpIsAdd(last: ItemNode) {
        // return true;
        if (!last) {
            return true;
        }
        const isAdd = Math.abs(this.initPos.y + this._unit + last.position.y) + last.customSize.height * last.anchorY < this._opts.listSize.height;
        return isAdd;
    }

    private checkUpIsRec(firstNode: ItemNode) {
        if (!firstNode) {
            return false;
        }
        return this.initPos.y + this._unit + firstNode.position.y >= firstNode.customSize.height * firstNode.anchorY;
    }

    /**
     * 滚动创建检测
     */
    private createVerticalUpdate(last: ItemNode) {
        const { node, size } = this._createCall(this._renderIdx + 1) || {};
        if (!node || !size) {
            return null;
        }
        this._renderIdx += 1;
        node['customSize'] = size;
        let y = 0;
        if (last) {
            y = last.position.y - last.customSize.height * last.anchorY - (1 - node.anchorY) * size.height;
        } else {
            y = this._opts.listSize.height / 2 - (1 - node.anchorY) * size.height;
        }

        this.child.push(node as ItemNode);
        this.node.addChild(node);
        node.zIndex = this._renderIdx % 100;
        node.setPosition(0, y);
        return node as ItemNode;
    }
}
