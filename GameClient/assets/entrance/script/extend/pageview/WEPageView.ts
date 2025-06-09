import { WEPageViewIndicator, TemplateType } from './WEPageViewIndicator';
import { WEScrollViewNesting } from './WEScrollViewNesting';

const { ccclass, property, menu } = cc._decorator;
class PageViewNodeInfo {
    public index: number; // 索引数据
    public node: cc.Node; // 对应的节点
}

/**
 * 分页控件，如果是循环分页，水平滑动时，请将scrollview view content的x锚点设置为0.5,item的锚点设置为0.5，
 * 如果不是循环分页，请将scrollview view content的x锚点设置为0，item的锚点设置为0
 */
@ccclass
@menu('c2f/scroll/WEPageView(页面分页控件)')
export class WEPageView extends cc.Component {
    @property(cc.ScrollView)
    public scrollView: cc.ScrollView = null;

    @property({ type: cc.Node, tooltip: CC_DEV && '子项父节点' })
    private content: cc.Node = null; // 子项父节点

    // 模板类型
    @property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型' })
    private templateType: TemplateType = TemplateType.PREFAB;

    @property({
        type: cc.Prefab,
        tooltip: CC_DEV && '模板Item',
        visible() {
            return this.templateType == TemplateType.PREFAB;
        },
    })
    private itemPrefab: cc.Prefab = null;

    @property({
        type: cc.Node,
        tooltip: CC_DEV && '模板Item',
        visible() {
            return this.templateType == TemplateType.NODE;
        },
    })
    itemNode: cc.Node = null;

    /**
     * 渲染Item数量
     */
    private renderNum: number = 3; // 初始渲染数量

    /** 一页的距离 */
    private perDistance: number = 319; // 一页的距离

    @property({ tooltip: CC_DEV && '翻页所需要的时间，单位秒' })
    private pageTweenTime: number = 0.3; // 翻页所需要的时间，单位秒

    /**
     * 滑动抖动系数，大于这个值改变页数，小于则还原
     */
    @property({ tooltip: CC_DEV && '滑动抖动系数，大于这个值改变页数，小于则还原' })
    private threshold: number = 0.1;

    @property({ tooltip: CC_DEV && '是否是循环分页' })
    private loop: boolean = true; // 是否是循环分页

    @property({ type: WEPageViewIndicator, tooltip: CC_DEV && '分页脚标' })
    private indicator: WEPageViewIndicator = null; // 分页脚标

    @property({ tooltip: CC_DEV && '是否显示分页按钮' })
    private showBtn: boolean = true; // 是否显示分页按钮

    @property({
        type: cc.Node,
        tooltip: CC_DEV && '下一页按钮',
        visible() {
            return this.showBtn;
        },
    })
    private nextBtn: cc.Node = null; // 下一页按钮
    @property({
        type: cc.Node,
        tooltip: CC_DEV && '上一页按钮',
        visible() {
            return this.showBtn;
        },
    })
    private preBtn: cc.Node = null; // 上一页按钮

    /**
     * 左内边距
     */
    @property({ tooltip: CC_DEV && '左内边距' })
    private paddingLeft = 0;

    /**
     * 右内边距
     */
    @property({ tooltip: CC_DEV && '右内边距' })
    private paddingRight = 0;

    /**
     * 最小透明度
     */
    @property({ tooltip: CC_DEV && '最小透明度', min: 0, max: 255 })
    private minOpacity = 0;

    private autoTime = -1;
    private autoHandlerTime = 0;

    private renderFunc: (item: cc.Node, idx: number) => void;

    private clickFunc: (item: cc.Node, idx: number) => void;

    private singleNum: number = 1; // 单元数量

    private curVirtualIndex: number = 0; // 当前虚拟索引
    private lastVirtualIndex: number = 0; // 上一次的虚拟索引
    private curPage: number = 0; // 当前页数,从0开始
    private _totalPage: number = 3; // 总页数

    private recoverList: PageViewNodeInfo[] = []; // 对象池
    private showItemList: PageViewNodeInfo[] = []; // 当前显示的子项列表
    private _pageChanedCallback: Function = null; // 页数发生变化时的回调
    private needCalcOpacity: boolean = false; // 是否需要计算透明度
    private isTweening: boolean = false; // 是否正在缓动

    protected onLoad(): void {
        this.addHandler();
        // this.initData();
    }

    protected update(): void {
        if (this._totalPage <= 1) {
            return;
        }
        this.calcOpacity();
    }

    public setRender(func: (item: cc.Node, idx: number) => void) {
        this.renderFunc = func;
    }

    public setClick(func: (item: cc.Node, idx: number) => void) {
        this.clickFunc = func;
    }

    /**
     * 初始化数据
     */
    private initData(): void {
        this.itemNode = this.templateType == TemplateType.PREFAB ? cc.instantiate(this.itemPrefab) : this.itemNode;

        this.perDistance = this.itemNode.width;

        this.singleNum = (this.renderNum - 1) / 2;
        const layout = this.content.getComponent(cc.Layout);
        layout && this.content.removeComponent(cc.Layout);
        if (this.loop) {
            this.scrollView.inertia = false;
            this.scrollView.elastic = false;
        }
        (this.scrollView as any)._handleReleaseLogic = this.handleReleaseLogic.bind(this);
    }

    /**
     * 添加事件
     */
    private addHandler(): void {
        this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        if (this.showBtn === true) {
            this.preBtn.on('click', this.prePage, this);
            this.nextBtn.on('click', this.nextPage, this);
        }
    }

    private onTouchEnd(e) {
        const touch: cc.Touch = e.currentTouch;
        if (touch['_prevPoint'].x != touch['_startPoint'].x || touch['_prevPoint'].y != touch['_startPoint'].y) {
            return;
        }
        if (this.clickFunc) {
            const item = this.showItemList[this.curPage];
            this.clickFunc(item.node, this.curPage);
        }
    }

    /**
     * 拖动事件
     */
    public onTouchMove(): void {
        if (this._totalPage <= 1) {
            return;
        }
        this.needCalcOpacity = true;
    }

    /**
     * 重写触摸释放方法
     */
    private handleReleaseLogic(touch: cc.Touch): void {
        if (!touch) {
            return;
        }
        if (this._totalPage <= 1) {
            return;
        }
        const scrollView = this.scrollView as any;
        let delta = scrollView._getLocalAxisAlignDelta(touch);
        scrollView._gatherTouchMove(delta);
        scrollView._processInertiaScroll();
        if (scrollView._scrolling) {
            scrollView._scrolling = false;
            if (!scrollView._autoScrolling) {
                scrollView._dispatchEvent('scroll-ended');
            }
        }
        let deltaX: number;
        // 嵌套的情况下应获取自身的 deltaX
        if (this.scrollView instanceof WEScrollViewNesting) {
            // _scroll_offset_on_touch_start.x 在 WEScrollViewNesting 中被设置了反向值
            deltaX = this.scrollView.getScrollOffset().x + this.scrollView['_scroll_offset_on_touch_start'].x;
        } else {
            deltaX = touch.getLocation().x - touch.getStartLocation().x;
        }
        if (Math.abs(deltaX) > this.threshold * this.perDistance) {
            const isLeftToRight = deltaX > 0;
            isLeftToRight ? this.prePage() : this.nextPage();
            return;
        }
        this.contentTween();
    }

    /**
     * 虚拟索引发生变化
     */
    private virtualIndexChanged(): void {
        this.curPage = this.calcPage(this.curVirtualIndex);
        const deltaIndex = Math.abs(this.curVirtualIndex - this.lastVirtualIndex);
        // 向左滑或者上滑
        if (this.curVirtualIndex > this.lastVirtualIndex) {
            for (let i = 0; i < deltaIndex; i++) {
                this.checkLeftNeddRecover();
                this.checkRightNeedCreate();
            }
        } else {
            for (let i = 0; i < deltaIndex; i++) {
                this.checkRightNeddRecover();
                this.checkLeftNeedCreate();
            }
        }
        this.lastVirtualIndex = this.curVirtualIndex;
        this.pageChanged();
    }

    /**
     * 计算当前页数
     */
    private calcPage(virtualIndex: number): number {
        let page = 0;
        if (virtualIndex < 0) {
            page = ((virtualIndex % this._totalPage) + this._totalPage) % this._totalPage;
        } else {
            page = virtualIndex % this._totalPage;
        }
        return page;
    }

    /**
     * 页数发生变化
     */
    private pageChanged(): void {
        this.indicator && this.indicator.setCurrentPage(this.curPage);
        this._pageChanedCallback && this._pageChanedCallback();
        if (this.showBtn === true) {
            this.preBtn.active = this.loop || this.curPage > 0;
            this.nextBtn.active = this.loop || this.curPage < this.totalPage - 1;
        }
    }

    /**
     * 计算子项的坐标
     */
    private calcItemPos(virtualIndex: number): cc.Vec2 {
        const perDistance = this.perDistance;
        return new cc.Vec2(virtualIndex * perDistance, 0);
    }

    /**
     * 缓动content
     */
    private contentTween(): void {
        this.needCalcOpacity = true;
        const perDistance = this.perDistance;
        const index = this.curVirtualIndex;
        this.isTweening = true;
        cc.tween(this.content)
            .to(this.pageTweenTime, { x: -index * perDistance })
            .call(this.tweenCompleted.bind(this))
            .start();
    }

    /**
     * 缓动完成
     */
    private tweenCompleted(): void {
        cc.Tween.stopAllByTarget(this.content);
        this.content.x = -this.curVirtualIndex * this.perDistance;
        this.calcOpacity(true);
        this.needCalcOpacity = false;
        this.isTweening = false;
        this.checkVituralIndexChange();
    }

    /**
     * 计算透明度
     */
    private calcOpacity(force?: boolean): void {
        if (!this.needCalcOpacity && !force) {
            return;
        }

        this.curPage = this.calcPage(this.curVirtualIndex);
        const func = (index: number) => {
            const item = this.showItemList[index];
            const x = Math.abs(this.content.x + item.node.x - this.paddingLeft);
            if (x <= this.perDistance) {
                this.handlePercent((this.perDistance - x) / this.perDistance, this.calcPage(item.index));
                item.node.opacity = (255 * (this.perDistance - x)) / this.perDistance;
            } else {
                this.handlePercent(0, this.calcPage(item.index));
                item.node.opacity = 0;
            }
            item.node.opacity = Math.max(item.node.opacity, this.minOpacity);
        };

        // 向左滑或者上滑, 分左右滑动是为了解决总页数只有两页时，页标动画显示的bug
        if (this.curVirtualIndex > this.lastVirtualIndex) {
            for (let i = 0; i < this.showItemList.length; i++) {
                func(i);
            }
        } else {
            for (let i = this.showItemList.length - 1; i >= 0; i--) {
                func(i);
            }
        }
    }

    /**
     * 检测虚拟索引是否发生变化
     */
    private checkVituralIndexChange(): void {
        if (this.curVirtualIndex != this.lastVirtualIndex) {
            this.virtualIndexChanged();
        }
    }

    /**
     * 初始化子项列表
     */
    private initItemList(): void {
        this.curVirtualIndex = 0;
        this.content.removeAllChildren(false);
        this.content.x = 0;
        this.content.width = this.paddingLeft + this._totalPage * this.perDistance + this.paddingRight;
        this.recoverList.push(...this.showItemList);
        this.showItemList.length = 0;
        if (this._totalPage <= 0) {
            return;
        }
        const renderNum = this.renderNum;
        const startIndex = this.loop ? Math.floor(-(renderNum - 1) / 2) : 0;
        const endIndex = this.loop ? -startIndex : this._totalPage - 1;
        for (let i = startIndex; i <= endIndex; i++) {
            this.createItem(i);
        }
        this.calcOpacity(true);
    }

    /**
     * 创建子项
     * @param index 索引
     * @param isBehind 是否是在末尾添加
     */
    private createItem(index: number, isBehind: boolean = true, isUpdataItem: boolean = true): void {
        if ((index < 0 || index >= this._totalPage) && !this.loop) {
            return;
        }
        const page = this.calcPage(index);
        if (page < 0) {
            return;
        }
        let nodeInfo = this.recoverList.pop();
        if (!nodeInfo) {
            nodeInfo = new PageViewNodeInfo();
            const node = cc.instantiate(this.itemNode);
            node.active = true;
            nodeInfo.node = node;
        }
        const node = nodeInfo.node;
        node.active = true;
        nodeInfo.index = index;
        const pos = this.calcItemPos(index);
        node.x = this.paddingLeft + pos.x;
        node.y = pos.y;
        node.parent = null;
        this.content.addChild(node);
        isBehind ? this.showItemList.push(nodeInfo) : this.showItemList.unshift(nodeInfo);
        if (isUpdataItem == true && this.renderFunc) {
            this.renderFunc(node, page);
        }
    }

    /**
     * 检测左边是否需要创建
     */
    private checkLeftNeedCreate(): void {
        const leftNodeInfo = this.showItemList[0];
        if (this.content.x + leftNodeInfo.node.x - this.paddingLeft >= -this.perDistance) {
            this.createItem(this.curVirtualIndex - 1, false, true);
        }
    }

    /**
     * 检测右边是否需要创建
     */
    private checkRightNeedCreate(): void {
        const rightNodeInfo = this.showItemList[this.showItemList.length - 1];
        if (this.content.x + rightNodeInfo.node.x - this.paddingLeft < this.perDistance) {
            this.createItem(this.curVirtualIndex + 1, true, true);
        }
    }

    /**
     * 检测左边是否需要回收
     */
    private checkLeftNeddRecover(): void {
        const leftNodeInfo = this.showItemList[0];
        if (this.content.x + leftNodeInfo.node.x - this.paddingLeft < -this.perDistance) {
            if (cc.isValid(leftNodeInfo.node)) {
                leftNodeInfo.node.parent = null;
            }
            this.recoverList.push(leftNodeInfo);
            this.showItemList.shift();
        }
    }

    /**
     * 检测右边是否需要回收
     */
    private checkRightNeddRecover(): void {
        const rightNodeInfo = this.showItemList[this.showItemList.length - 1];
        if (this.content.x + rightNodeInfo.node.x - this.paddingLeft > this.perDistance) {
            if (cc.isValid(rightNodeInfo.node)) {
                rightNodeInfo.node.parent = null;
            }
            this.recoverList.push(rightNodeInfo);
            this.showItemList.splice(this.showItemList.length - 1, 1);
        }
    }

    /**
     * 清理数据
     */
    private clear(): void {
        this.content.stopAllActions();
        this.content.x = 0;
        this.lastVirtualIndex = 0;
        this.curVirtualIndex = 0;
        this.curPage = 0;
        this.recoverList = [];
        this.needCalcOpacity = false;
    }

    public onDestroy(): void {
        cc.Tween.stopAllByTarget(this.content);
        for (let i = 0; i < this.recoverList.length; i++) {
            const node = this.recoverList[i].node;
            if (cc.isValid(node)) {
                node.destroy();
            }
        }

        this.recoverList = [];

        if (this.scrollView.node) {
            this.scrollView.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.scrollView.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    }

    // ============================以下方法对外提供======================//

    /**
     * 获取当前页数
     */
    public getCurrentPage(): number {
        return this.curPage;
    }

    /**
     * 下一页
     */
    public nextPage(): void {
        if ((!this.loop && this.curVirtualIndex >= this._totalPage - 1) || this._totalPage <= 0) {
            return;
        }
        if (this.isTweening) {
            this.tweenCompleted();
        }
        this.curVirtualIndex++;
        const perDistance = this.perDistance;
        if (this.curVirtualIndex >= this.singleNum && this.loop) {
            this.content.width += perDistance * 2;
        }
        this.autoHandlerTime = Date.now();
        this.contentTween();
    }

    /**
     * 上一页
     */
    public prePage(): void {
        if ((!this.loop && this.curVirtualIndex == 0) || this._totalPage <= 0) {
            return;
        }
        if (this.isTweening) {
            this.tweenCompleted();
        }
        this.curVirtualIndex--;
        const perDistance = this.perDistance;
        if (this.curVirtualIndex <= -this.singleNum && this.loop) {
            this.content.width += perDistance * 2;
        }
        this.autoHandlerTime = Date.now();
        this.contentTween();
    }

    /**
     * 跳转到指定的页数,从0开始
     */
    public jumpToPage(page: number, immediate?: boolean): void {
        if (this.loop) {
            cc.log('WEPageView jumpToPage, Circular pagination does not support jumping to the specified number of pages');
            return;
        }
        if (page < 0 || page >= this.totalPage) {
            cc.log('WEPageView jumpToPage, Please specify the number of pages to jump to within 0-N' + (this.totalPage - 1));
            return;
        }
        this.curVirtualIndex = page;
        immediate ? this.tweenCompleted() : this.contentTween();
    }

    /**
     * 设置总的页数
     */
    public set totalPage(value: number) {
        this.renderNum = value;
        this.initData();

        this._totalPage = value;
        this.scrollView.horizontal = value > 1;
        this.clear();
        this.indicator && this.indicator.setPages(value);
        this.initItemList();
        if (this.showBtn === true) {
            this.preBtn.active = this.loop;
            this.nextBtn.active = this.loop || value > 1;
        }
    }

    public get totalPage(): number {
        return this._totalPage;
    }

    /**
     * 页数发生变化的回调
     */
    public set pageChanedCallback(value: Function) {
        this._pageChanedCallback = value;
    }

    /**
     * 占据view窗口的百分比
     */
    public handlePercent(percent: number, index: number) {}

    /**
     * 自动循环
     * @param time 时间 s
     */
    public autoLoop(time: number): void {
        this.autoTime = time;
        if (this.autoTime == -1) {
            return;
        }
        this.autoHandlerTime = Date.now(); // 毫秒数
        if (this.autoTime > 0) {
            this.schedule(() => {
                if (this.autoTime == -1) {
                    return;
                }
                const nowTime = Date.now();
                if (nowTime - this.autoHandlerTime >= time * 1000) {
                    this.nextPage();
                }
            }, 0.5);
        }
    }
}
declare global {
    interface IUI {
        WEPageView: typeof WEPageView;
    }

    namespace c2f {
        namespace ui {
            type WEPageView = InstanceType<typeof WEPageView>;
        }
    }
}
if (typeof c2f.ui === 'undefined') {
    // @ts-ignore
    c2f.ui = {};
}

c2f.ui.WEPageView = WEPageView;
