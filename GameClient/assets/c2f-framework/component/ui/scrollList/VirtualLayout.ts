import { C2FEnum } from "../../../define/C2FEnum";
import { LayoutProperty } from "./LayoutProperty";
import { GroupSource } from "./VLItemGroup";
import { TemplateType } from "./VLTemplate";
import VirtualItem from "./VirtualItem";
import VirtualList from "./VirtualList";


interface AddItemPa {
    idx: number;
    xMin: number;
    yMin: number;
    size: cc.Size;
}

/**
 * 虚拟列表所需的布局组件
 */
const { ccclass, property, disallowMultiple } = cc._decorator;
@ccclass
@disallowMultiple
export default class VirtualLayout extends cc.Component {

    @property({ type: LayoutProperty })
    layout: LayoutProperty = null;

    /** 所属虚拟列表 */
    private _list: VirtualList = null;
    /** mask节点（content父节点） */
    private _view: cc.Node = null;
    /** view坐标系下view的边界矩形 */
    private _viewEdge: cc.Rect = null;
    /** 元素节点大小固定时的size */
    private _fixedSize: cc.Size = null;
    /** 标记当前帧是否需要更新content size */
    private _sizeDirty: boolean = false;
    /** 标记当前帧是否需要更新view区域数据显示 */
    private _viewDirty: boolean = false;
    /** 标记当前帧是否需要同步others content的坐标 */
    private _posDirty: boolean = false;
    /** main content激活状态的item */
    private _items: cc.Node[] = [];
    /** main content被回收的item池（不移出节点树，只设置opacity） */
    private _itemPool: cc.Node[] = [];
    /** others content激活状态的item，下标顺序与this.list.Others数组一致 */
    private _otherItemsArr: cc.Node[][] = [];
    /** others content被回收的item池数组（不移出节点树，只设置opacity），下标顺序与this.list.Others数组一致 */
    private _otherItemPoolArr: cc.Node[][] = [];

    public onInit(list: VirtualList): void {
        this._list = list;
        this._view = this.node.parent;
        this._viewEdge = this.getNodeEdgeRect(this._view);

        // 初始化分层相关数据
        this._otherItemsArr = [];
        this._otherItemPoolArr = [];
        this._list.others.forEach((e) => {
            this._otherItemsArr.push([]);
            this._otherItemPoolArr.push([]);
        });

        // 元素大小固定时初始化fixedSize
        if (this._fixedSize === null) {
            this.addItemNode(false);
            this._fixedSize = this._itemPool[0].getContentSize();
        }

        // 注册事件
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
        this._view.on(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
    }

    /** 同步layout参数:注意同步时机 */
    public syncLayoutProperty(inProperty: LayoutProperty) {
        this.layout = inProperty;
    }

    protected onDestroy(): void {
        // 注销事件
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
        this._view?.off(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
        //解除引用
        this._list = null;
        this._view = null;
        this._items = [];
        this._itemPool = [];
        this._otherItemsArr = [];
        this._otherItemPoolArr = [];
    }

    /**
     * 立即更新布局
     */
    public forceUpdate(): void {
        this.updatePos();
        this.updateSize();
        this.updateView();
        this.updateSibling();
    }

    protected lateUpdate(): void {
        this.forceUpdate();
    }

    /**
     * 同步others的坐标
     */
    private updatePos(): void {
        if (!this._posDirty) {
            return;
        }
        this._posDirty = false;
        this._list.others.forEach((e) => {
            e.content.position = this.node.position;
        });
    }

    /**
     * 更新content size
     */
    private updateSize(): void {
        if (!this._sizeDirty) {
            return;
        }
        this._sizeDirty = false;

        if (this._list.isFixedSize) {
            this.updateSizeFixed();
        } else {
            this.updateSizeUnfixed();
        }
    }

    private updateSizeFixed(): void {
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.height = 0;
                return;
            }

            this.node.height = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY + this._fixedSize.height * this._list.argsArr.length;
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.width = 0;
                return;
            }

            this.node.width = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX + this._fixedSize.width * this._list.argsArr.length;
        } else {
            if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                if (this._list.argsArr.length <= 0) {
                    this.node.height = 0;
                    return;
                }

                // 计算一行可以排列几个，至少1个
                let num = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
                num = Math.max(num, 1);
                // 计算可以排列几行
                let row = Math.ceil(this._list.argsArr.length / num);
                // 高度
                this.node.height = this.layout.top + this.layout.bottom + (row - 1) * this.layout.spacingY + this._fixedSize.height * row;
            } else {
                if (this._list.argsArr.length <= 0) {
                    this.node.width = 0;
                    return;
                }

                // 计算一列可以排列几个，至少1个
                let num = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
                num = Math.max(num, 1);
                // 计算可以排列几列
                let column = Math.ceil(this._list.argsArr.length / num);
                // 宽度
                this.node.width = this.layout.left + this.layout.right + (column - 1) * this.layout.spacingX + this._fixedSize.width * column;
            }
        }
    }

    private updateSizeUnfixed(): void {
        // 缓存宽高，最后赋值，是因为修改content size时会触发scrollview._calculateBoundary，改变content的坐标
        let result = 0;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.height = 0;
                return;
            }

            result = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY;
            for (let i = 0; i < this._list.argsArr.length; i++) {
                let size = this.calcItemSizeUnfixed(i);
                result += size.height;
            }
            this.node.height = result;
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.width = 0;
                return;
            }

            result = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX;
            for (let i = 0; i < this._list.argsArr.length; i++) {
                let size = this.calcItemSizeUnfixed(i);
                result += size.width;
            }
            this.node.width = result;
        }
    }

    /**
     * 更新view区域数据显示
     */
    private updateView(): void {
        if (!this._viewDirty || this._list.argsArr.length <= 0) {
            return;
        }
        this._viewDirty = false;

        if (this._list.isFixedSize) {
            this.updateViewFixed();
        } else {
            this.updateViewUnfixed();
        }
    }

    /**
     * 更新层级
     */
    private updateSibling(): void {
        if (!this._list || !this._list.argsArr || this._list.argsArr.length <= 0) {
            return;
        }
        if (this._list.isSubling) {
            let min = 999
            this._items.forEach((item) => {
                let vi = item.getComponent(VirtualItem);
                if (vi.args) {
                    if (vi.args.subling < min) {
                        min = vi.args.subling
                    }
                }
            });
            this._items.forEach((item) => {
                let vi = item.getComponent(VirtualItem);
                if (vi.args) {
                    let subling = vi.args.subling - min
                    if (item.getSiblingIndex() != subling) {
                        item.setSiblingIndex(subling)
                    }
                }
            });
        }
    }



    private updateViewFixed(): void {
        let arrAddData: AddItemPa[] = [];
        let viewResult = this.checkViewItem();
        let inView = viewResult.inView;
        let outView = viewResult.outView;
        let contentEdge = this.getNodeEdgeRect(this.node);
        let xMax: number, xMin: number, yMax: number, yMin: number;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            for (let i = 0; i < this._list.argsArr.length; i++) {
                if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                    yMax = contentEdge.yMax - (this.layout.top + i * this.layout.spacingY + this._fixedSize.height * i);
                    yMin = yMax - this._fixedSize.height;
                    if (yMax + this.node.y < this._viewEdge.yMin) {
                        break;
                    }
                    if (yMin + this.node.y > this._viewEdge.yMax) {
                        continue;
                    }
                } else {
                    yMin = contentEdge.yMin + this.layout.bottom + i * this.layout.spacingY + this._fixedSize.height * i;
                    yMax = yMin + this._fixedSize.height;
                    if (yMin + this.node.y > this._viewEdge.yMax) {
                        break;
                    }
                    if (yMax + this.node.y < this._viewEdge.yMin) {
                        continue;
                    }
                }

                // 判断显示区域内部是否有节点显示此条数据
                let found = inView.findIndex((e) => { return this._items[e].getComponent(VirtualItem).dataIdx === i; });
                if (found !== -1) {
                    continue;
                }

                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                })
            }
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            for (let i = 0; i < this._list.argsArr.length; i++) {
                if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                    xMax = contentEdge.xMax - (this.layout.right + i * this.layout.spacingX + this._fixedSize.width * i);
                    xMin = xMax - this._fixedSize.width;
                    if (xMax + this.node.x < this._viewEdge.xMin) {
                        break;
                    }
                    if (xMin + this.node.x > this._viewEdge.xMax) {
                        continue;
                    }
                } else {
                    xMin = contentEdge.xMin + this.layout.left + i * this.layout.spacingX + this._fixedSize.width * i;
                    xMax = xMin + this._fixedSize.width;
                    if (xMin + this.node.x > this._viewEdge.xMax) {
                        break;
                    }
                    if (xMax + this.node.x < this._viewEdge.xMin) {
                        continue;
                    }
                }

                // 判断显示区域内部是否有节点显示此条数据
                let found = inView.findIndex((e) => { return this._items[e].getComponent(VirtualItem).dataIdx === i; });
                if (found !== -1) {
                    continue;
                }

                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                })
            }
        } else {
            for (let i = 0; i < this._list.argsArr.length; i++) {
                // 计算当前元素排在第几行第几列，从0开始
                let rowIndex: number = 0;
                let columnIndex: number = 0;
                if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                    // 起始轴为横向
                    let num = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
                    num = Math.max(num, 1);
                    rowIndex = Math.floor(i / num);
                    columnIndex = i % num;
                    // 计算纵向
                    if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                        yMax = contentEdge.yMax - (this.layout.top + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex);
                        yMin = yMax - this._fixedSize.height;
                        if (yMax + this.node.y < this._viewEdge.yMin) {
                            break;
                        }
                        if (yMin + this.node.y > this._viewEdge.yMax) {
                            continue;
                        }
                    } else {
                        yMin = contentEdge.yMin + this.layout.bottom + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex;
                        yMax = yMin + this._fixedSize.height;
                        if (yMin + this.node.y > this._viewEdge.yMax) {
                            break;
                        }
                        if (yMax + this.node.y < this._viewEdge.yMin) {
                            continue;
                        }
                    }
                    // 计算横向
                    if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                        xMax = contentEdge.xMax - (this.layout.right + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex);
                        xMin = xMax - this._fixedSize.width;
                    } else {
                        xMin = contentEdge.xMin + this.layout.left + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex;
                        xMax = xMin + this._fixedSize.width;
                    }
                    if (xMax + this.node.x < this._viewEdge.xMin || xMin + this.node.x > this._viewEdge.xMax) {
                        continue;
                    }
                } else {
                    // 起始轴为纵向
                    let num = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
                    num = Math.max(num, 1);
                    rowIndex = i % num;
                    columnIndex = Math.floor(i / num);
                    // 计算横向
                    if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                        xMax = contentEdge.xMax - (this.layout.right + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex);
                        xMin = xMax - this._fixedSize.width;
                        if (xMax + this.node.x < this._viewEdge.xMin) {
                            break;
                        }
                        if (xMin + this.node.x > this._viewEdge.xMax) {
                            continue;
                        }
                    } else {
                        xMin = contentEdge.xMin + this.layout.left + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex;
                        xMax = xMin + this._fixedSize.width;
                        if (xMin + this.node.x > this._viewEdge.xMax) {
                            break;
                        }
                        if (xMax + this.node.x < this._viewEdge.xMin) {
                            continue;
                        }
                    }
                    // 计算纵向
                    if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                        yMax = contentEdge.yMax - (this.layout.top + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex);
                        yMin = yMax - this._fixedSize.height;
                    } else {
                        yMin = contentEdge.yMin + this.layout.bottom + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex;
                        yMax = yMin + this._fixedSize.height;
                    }
                    if (yMax + this.node.y < this._viewEdge.yMin || yMin + this.node.y > this._viewEdge.yMax) {
                        continue;
                    }
                }

                // 判断显示区域内部是否有节点显示此条数据
                let found = inView.findIndex((e) => { return this._items[e].getComponent(VirtualItem).dataIdx === i; });
                if (found !== -1) {
                    continue;
                }

                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                })
            }
        }
        this.addItemsByData(arrAddData, outView);
    }

    private updateViewUnfixed(): void {
        let arrAddData: AddItemPa[] = [];
        let viewResult = this.checkViewItem();
        let inView = viewResult.inView;
        let outView = viewResult.outView;
        let contentEdge = this.getNodeEdgeRect(this.node);
        let xMax: number, xMin: number, yMax: number, yMin: number;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            let totalHeight: number = 0;
            for (let i = 0; i < this._list.argsArr.length; i++) {
                let size = this.calcItemSizeUnfixed(i);
                totalHeight += size.height;
                if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                    yMax = contentEdge.yMax - (this.layout.top + i * this.layout.spacingY + (totalHeight - size.height));
                    yMin = yMax - size.height;
                    if (yMax + this.node.y < this._viewEdge.yMin) {
                        break;
                    }
                    if (yMin + this.node.y > this._viewEdge.yMax) {
                        continue;
                    }
                } else {
                    yMin = contentEdge.yMin + this.layout.bottom + i * this.layout.spacingY + (totalHeight - size.height);
                    yMax = yMin + size.height;
                    if (yMin + this.node.y > this._viewEdge.yMax) {
                        break;
                    }
                    if (yMax + this.node.y < this._viewEdge.yMin) {
                        continue;
                    }
                }

                // 判断显示区域内部是否有节点显示此条数据
                let found = inView.findIndex((e) => { return this._items[e].getComponent(VirtualItem).dataIdx === i; });
                if (found !== -1) {
                    continue;
                }

                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: size.clone(),
                })
            }
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            let totalWidth: number = 0;
            for (let i = 0; i < this._list.argsArr.length; i++) {
                let size = this.calcItemSizeUnfixed(i);
                totalWidth += size.width;
                if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                    xMax = contentEdge.xMax - (this.layout.right + i * this.layout.spacingX + (totalWidth - size.width));
                    xMin = xMax - size.width;
                    if (xMax + this.node.x < this._viewEdge.xMin) {
                        break;
                    }
                    if (xMin + this.node.x > this._viewEdge.xMax) {
                        continue;
                    }
                } else {
                    xMin = contentEdge.xMin + this.layout.left + i * this.layout.spacingX + (totalWidth - size.width);
                    xMax = xMin + size.width;
                    if (xMin + this.node.x > this._viewEdge.xMax) {
                        break;
                    }
                    if (xMax + this.node.x < this._viewEdge.xMin) {
                        continue;
                    }
                }

                // 判断显示区域内部是否有节点显示此条数据
                let found = inView.findIndex((e) => { return this._items[e].getComponent(VirtualItem).dataIdx === i; });
                if (found !== -1) {
                    continue;
                }

                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: size.clone(),
                })
            }
        }
        this.addItemsByData(arrAddData, outView);
    }

    private addOneItem(one: AddItemPa, outView: number[]) {
        let itemIdx: number = outView.length === 0 ? this.addItemNode() : outView.shift();
        let item: cc.Node = this._items[itemIdx];
        if (one.size) {
            item.setContentSize(one.size);
        }
        let itemPos: cc.Vec3 = cc.v3(0, 0, 0);
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            itemPos.y = one.yMin + item.anchorY * item.height;
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            itemPos.x = one.xMin + item.anchorX * item.width;
        } else {
            itemPos.x = one.xMin + item.anchorX * item.width;
            itemPos.y = one.yMin + item.anchorY * item.height;
        }
        this.setItem(itemPos, one.idx, itemIdx);
    }

    private addItemsByData(arrData: AddItemPa[], outView: number[]) {
        if (arrData.length <= 0) {
            return;
        }
        if (this._list.frameLoadItv > 0 && this._items.length <= 0) {
            let count = arrData.length;
            let index = 0;
            let cb = () => {
                if (index >= count) {
                    this.unschedule(cb);
                    this._list.frameLoadCb && this._list.frameLoadCb();
                    // 回收区域外的节点
                    this.recycleItemOutView(outView);
                    c2f.event.emit(C2FEnum.ExtEvent.VirtualListFillCmpl);
                    return;
                }
                let one = arrData[index];
                this.addOneItem(one, outView);
                index += 1;
            }
            this.schedule(cb, this._list.frameLoadItv);
        } else {
            for (let one of arrData) {
                this.addOneItem(one, outView);
            }
            this.recycleItemOutView(outView);
            c2f.event.emit(C2FEnum.ExtEvent.VirtualListFillCmpl);
        }
    }

    /** 回收区域外的节点 */
    private recycleItemOutView(outView: number[]) {
        for (let i = outView.length - 1; i >= 0; i--) {
            this.putActivatedItemByIndex(outView[i]);
        }
    }

    /**
     * 区分在view内部与外部的items数组下标（返回的下标数组会从小到大排序）
     */
    private checkViewItem(): { inView: number[], outView: number[] } {
        // 显示区域内部的下标
        let inView: number[] = [];
        // 显示区域外部的下标
        let outView: number[] = [];

        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            for (let i = 0; i < this._items.length; i++) {
                let item = this._items[i];
                let box = item.getBoundingBox();
                if (box.yMin + this.node.y <= this._viewEdge.yMax && box.yMax + this.node.y >= this._viewEdge.yMin) {
                    inView.push(i);
                } else {
                    outView.push(i);
                }
            }
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            for (let i = 0; i < this._items.length; i++) {
                let item = this._items[i];
                let box = item.getBoundingBox();
                if (box.xMin + this.node.x <= this._viewEdge.xMax && box.xMax + this.node.x >= this._viewEdge.xMin) {
                    inView.push(i);
                } else {
                    outView.push(i);
                }
            }
        } else {
            for (let i = 0; i < this._items.length; i++) {
                let item = this._items[i];
                let box = item.getBoundingBox();
                if (box.xMin + this.node.x <= this._viewEdge.xMax && box.xMax + this.node.x >= this._viewEdge.xMin
                    && box.yMin + this.node.y <= this._viewEdge.yMax && box.yMax + this.node.y >= this._viewEdge.yMin) {
                    inView.push(i);
                } else {
                    outView.push(i);
                }
            }
        }

        return { inView: inView, outView: outView };
    }

    /**
     * 设置item数据与坐标
     * @param p 节点坐标
     * @param dataIdx this._dataArr的下标 
     * @param itemIdx this._items的下标
     */
    private setItem(p: cc.Vec3, dataIdx: number, itemIdx: number): void {
        let item = this._items[itemIdx];
        item.position = p;
        let vi = item.getComponent(VirtualItem);
        vi.dataIdx = dataIdx;
        vi.args = this._list.argsArr[dataIdx];
        vi.onRefresh(vi.args);

        if (this._list.others.length > 0) {
            let nodes: cc.Node[] = [];
            this._otherItemsArr.forEach((e) => {
                e[itemIdx].position = p;
                nodes.push(e[itemIdx]);
            });
            vi.others = nodes;
            vi.onRefreshOthers(...vi.others);
        }
    }

    /**
     * 激活新的节点，并添加到content下
     * @param show 默认为true。false时不激活节点并添加进节点池中（仅在onInit中使用）
     * @returns 激活的节点在this._items中的下标
     */
    private addItemNode(show: boolean = true): number {
        let node: cc.Node = null;
        if (this._itemPool.length > 0) {
            node = this._itemPool.pop();
            node.opacity = 255;
            this._items.push(node);

            this._otherItemPoolArr.forEach((e, i) => {
                let otherNode = e.pop();
                otherNode.opacity = 255;
                this._otherItemsArr[i].push(otherNode);
            });
        } else {
            if (this._list.main.templateType === TemplateType.PREFAB) {
                node = c2f.utils.view.instantiateMVCPrefab(this._list.main.templatePrefab, this.node);
            } else {
                node = c2f.res.instantiate(this._list.main.templateNode, this.node);
            }
            if (!node.getComponent(VirtualItem)) {
                node.addComponent(VirtualItem);
            }
            this.node.addChild(node);
            if (show) {
                node.opacity = 255;
                this._items.push(node);
            } else {
                this.putItemNode(node);
            }

            // 拷贝一份子节点数组，防止子节点移除时改变下标
            let childrenCopy = node.children.slice(0);
            this._list.others.forEach((e, i) => {
                let otherNode: cc.Node = null;
                switch (e.templateType) {
                    case GroupSource.NODE:
                        otherNode = c2f.res.instantiate(e.templateNode, this.node);
                        break;
                    case GroupSource.PREFAB:
                        otherNode = c2f.utils.view.instantiateMVCPrefab(e.templatePrefab, this.node);
                        break;
                    case GroupSource.MAIN_ITEM_CHILD:
                        if (!c2f.utils.math.inRange(0, childrenCopy.length - 1, e.templateChild)) {
                            cc.error(`[VirtualLayout.addItemNode] error e.templateChild: ${e.templateChild}`);
                            return;
                        }
                        otherNode = childrenCopy[e.templateChild];
                        otherNode.removeFromParent();
                        break;
                    default:
                        cc.error(`[VirtualLayout.addItemNode] error e.templateType: ${e.templateType}`);
                        return;
                }
                e.content.addChild(otherNode);
                if (show) {
                    otherNode.opacity = 255;
                    this._otherItemsArr[i].push(otherNode);
                } else {
                    this.putItemNode(otherNode, true, i);
                }
            });
        }

        return this._items.length - 1;
    }

    /**
     * 将节点放入节点池
     * @param node 
     * @param isOther 是否为Others下的节点
     * @param otherIdx Others的下标
     */
    private putItemNode(node: cc.Node, isOther: boolean = false, otherIdx: number = 0): void {
        node.opacity = 0;
        // 防止已回收的节点触发点击事件
        node.setPosition(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        if (isOther) {
            this._otherItemPoolArr[otherIdx].push(node);
        } else {
            let vi = node.getComponent(VirtualItem);
            vi.onReset();
            this._itemPool.push(node);
        }
    }

    /**
     * 回收已激活的节点
     * @param index 节点在this._items中的下标
     */
    private putActivatedItemByIndex(index: number): void {
        this.putItemNode(this._items[index]);
        this._otherItemsArr.forEach((arr, otherIdx) => { this.putItemNode(arr[index], true, otherIdx); });

        this._items.splice(index, 1);
        this._otherItemsArr.forEach((arr) => {
            arr.splice(index, 1);
        });
    }

    /**
     * 子节点坐标系下坐标转换为父节点坐标系下坐标
     */
    private convertToParentPos(pos: cc.Vec3, child: cc.Node): cc.Vec3 {
        return pos.add(child.position);
    }

    /**
     * 父节点坐标系下坐标转换为子节点坐标系下坐标
     */
    private convertToChildPos(pos: cc.Vec3, child: cc.Node): cc.Vec3 {
        return pos.sub(child.position);
    }

    /**
     * 获取节点自身坐标系下的节点边界矩形
     */
    private getNodeEdgeRect(node: cc.Node): cc.Rect {
        return cc.rect(-node.width * node.anchorX, -node.height * node.anchorY, node.width, node.height);
    }

    /**
     * 根据元素下标计算对应元素大小，isFixedSize为false时使用
     * @param idx 
     */
    private calcItemSizeUnfixed(idx: number): cc.Size {
        const arg = this._list.argsArr[idx];
        if (arg.hasOwnProperty('cellHeight')) {
            return cc.size(0, arg.cellHeight);
        } else {
            if (this._list.calcItemSize) {
                return this._list.calcItemSize(this._list.argsArr[idx]);
            } else {
                return this._fixedSize;
            }
        }
    }

    /**
     * content位移监听回调
     */
    private onPositionChanged(): void {
        // ScrollView源码的bug处理
        // 1.超出边界的差值会记录在_outOfBoundaryAmount里，但是这个_outOfBoundaryAmount不是每次检测边界时都更新的，它需要_outOfBoundaryAmountDirty为true才会更新
        // 2.在content size改变的时候，ScrollView会检测content有没有超出边界，此时会更新_outOfBoundaryAmount并直接修改content坐标。但是修改完content坐标之后_outOfBoundaryAmount记录的仍旧是旧值，此时_outOfBoundaryAmountDirty为false。
        // 3.ScrollView在touchend的时候会触发检测当前有没有超出边界，有的话自动回弹滚动。由于_outOfBoundaryAmountDirty为false，所以并未更新_outOfBoundaryAmount，而是直接取错误的_outOfBoundaryAmount作为超出边界的值，然后进行错误的自动回弹。
        this._list.scrollView["_outOfBoundaryAmountDirty"] = true;
        // 更新标记
        this._viewDirty = true;
        this._posDirty = true;
    }

    /**
     * view size监听回调
     */
    private onViewSizeChanged(): void {
        this._viewEdge = this.getNodeEdgeRect(this._view);
    }

    /**
     * 获取content相对view左上角原点位置的偏移值
     * @param idx 元素下标
     * @param itemAnchor 元素的锚点位置（左下角为0点）
     * @param viewAnchor view的锚点位置（左下角为0点）
     */
    public getScrollOffset(idx: number, itemAnchor: cc.Vec2, viewAnchor: cc.Vec2): cc.Vec2 {
        idx = Math.min(idx, this._list.argsArr.length - 1);
        return this._list.isFixedSize ? this.getScrollOffsetFixed(idx, itemAnchor, viewAnchor) : this.getScrollOffsetUnfixed(idx, itemAnchor, viewAnchor);
    }

    private getScrollOffsetFixed(idx: number, itemAnchor: cc.Vec2, viewAnchor: cc.Vec2): cc.Vec2 {
        let contentEdge = this.getNodeEdgeRect(this.node);
        let xMax: number, xMin: number, yMax: number, yMin: number;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + idx * this.layout.spacingY + this._fixedSize.height * idx);
                yMin = yMax - this._fixedSize.height;
            } else {
                yMin = contentEdge.yMin + this.layout.bottom + idx * this.layout.spacingY + this._fixedSize.height * idx;
                yMax = yMin + this._fixedSize.height;
            }
            let x = this._viewEdge.xMin - (contentEdge.xMin + this.node.x);
            let y = contentEdge.yMax - (this._fixedSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + idx * this.layout.spacingX + this._fixedSize.width * idx);
                xMin = xMax - this._fixedSize.width;
            } else {
                xMin = contentEdge.xMin + this.layout.left + idx * this.layout.spacingX + this._fixedSize.width * idx;
                xMax = xMin + this._fixedSize.width;
            }
            let x = this._fixedSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            let y = contentEdge.yMax - (this._viewEdge.yMax - this.node.y);
            return cc.v2(x, y);
        } else {
            // 计算当前元素排在第几行第几列，从0开始
            let rowIndex: number = 0;
            let columnIndex: number = 0;
            if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                let num = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
                num = Math.max(num, 1);
                rowIndex = Math.floor(idx / num);
                columnIndex = idx % num;
            } else {
                let num = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
                num = Math.max(num, 1);
                rowIndex = idx % num;
                columnIndex = Math.floor(idx / num);
            }

            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex);
                yMin = yMax - this._fixedSize.height;
            } else {
                yMin = contentEdge.yMin + this.layout.bottom + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex;
                yMax = yMin + this._fixedSize.height;
            }

            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex);
                xMin = xMax - this._fixedSize.width;
            } else {
                xMin = contentEdge.xMin + this.layout.left + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex;
                xMax = xMin + this._fixedSize.width;
            }
            let x = this._fixedSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            let y = contentEdge.yMax - (this._fixedSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        }
    }

    private getScrollOffsetUnfixed(idx: number, itemAnchor: cc.Vec2, viewAnchor: cc.Vec2): cc.Vec2 {
        let contentEdge = this.getNodeEdgeRect(this.node);
        let xMax: number, xMin: number, yMax: number, yMin: number;
        let curSize: cc.Size = this.calcItemSizeUnfixed(idx);
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            let totalHeight: number = 0;
            for (let i = 0; i < idx; i++) {
                let size = this.calcItemSizeUnfixed(i);
                totalHeight += size.height;
            }
            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + idx * this.layout.spacingY + totalHeight);
                yMin = yMax - curSize.height;
            } else {
                yMin = contentEdge.yMin + this.layout.bottom + idx * this.layout.spacingY + totalHeight;
                yMax = yMin + curSize.height;
            }
            let x = this._viewEdge.xMin - (contentEdge.xMin + this.node.x);
            let y = contentEdge.yMax - (curSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        } else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            let totalWidth: number = 0;
            for (let i = 0; i < idx; i++) {
                let size = this.calcItemSizeUnfixed(i);
                totalWidth += size.width;
            }
            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + idx * this.layout.spacingX + totalWidth);
                xMin = xMax - curSize.width;
            } else {
                xMin = contentEdge.xMin + this.layout.left + idx * this.layout.spacingX + totalWidth;
                xMax = xMin + curSize.width;
            }
            let x = curSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            let y = contentEdge.yMax - (this._viewEdge.yMax - this.node.y);
            return cc.v2(x, y);
        }
        return null;
    }

    /**
     * 重新排列
     * @param clear 是否清空节点，默认true(仅当不会影响已有元素节点排列时才可传入false)
     */
    public rearrange(clear: boolean = true): void {
        this._sizeDirty = true;
        this._viewDirty = true;
        if (clear) {
            this._items.forEach((e, i) => {
                this.putItemNode(e);
                this._otherItemsArr.forEach((arr, otherIdx) => {
                    this.putItemNode(arr[i], true, otherIdx);
                });
            });
            this._items.length = 0;
            this._otherItemsArr.forEach((arr) => { arr.length = 0; });
        }
        this.unscheduleAllCallbacks();
    }

    /**
     * 刷新所有激活的item
     */
    public refreshAllItems(): void {
        this._items.forEach((item) => {
            let vi = item.getComponent(VirtualItem);
            vi.onRefresh(vi.args);
            if (this._list.others.length > 0) {
                vi.onRefreshOthers(...vi.others);
            }
        });
    }

    /**
     * 重置所有激活的item的数据
     */
    public resetAllItemData(): void {
        this._items.forEach((item) => {
            let vi = item.getComponent(VirtualItem);
            const idx = vi.dataIdx;
            vi.args = this._list.argsArr[idx];
            vi.onRefresh(vi.args);
            if (this._list.others.length > 0) {
                vi.onRefreshOthers(...vi.others);
            }
        });
        this._list.frameLoadCb && this._list.frameLoadCb();
    }

    /** 目标索引号是否在列表中 */
    public findIdxIsInView(idx: number) {
        let inView: boolean = false;
        for (let one of this._items) {
            let vi = one.getComponent(VirtualItem);
            if (idx == vi.dataIdx) {
                inView = true;
                break;
            }
        }
        return inView;
    }

    /** 目标索引号Item */
    public findIdxItemPosition(idx: number) {
        let item: cc.Node;
        for (let one of this._items) {
            let vi = one.getComponent(VirtualItem);
            if (idx == vi.dataIdx) {
                item = one
                break;
            }
        }
        return item;
    }

    /** 目标ID找第一个Item */
    public findFirstItemById(id: number) {
        let item: cc.Node;
        for (let one of this._items) {
            let vi = one.getComponent(VirtualItem);
            if (vi && vi.args) {
                if (id == vi.args.id) {
                    item = one
                    break;
                }
            }
        }
        return item;
    }


}
