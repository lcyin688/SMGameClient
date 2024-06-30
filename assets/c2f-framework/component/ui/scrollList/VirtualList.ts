/**
 * 虚拟列表
 */

import { GameData } from "../../../../Script/game/GameData";
import EditorTool from "../../../utils/EditorTool";
import { GroupSource, VLItemGroup } from "./VLItemGroup";
import { VLTemplate } from "./VLTemplate";
import VirtualLayout from "./VirtualLayout";

const { ccclass, property, requireComponent, executeInEditMode, disallowMultiple, menu } = cc._decorator;
@ccclass
@disallowMultiple
@executeInEditMode
@requireComponent(cc.ScrollView)
@menu("c2f/UI/VirtualList")
export default class VirtualList extends cc.Component {
    @property({ type: VLTemplate, tooltip: CC_DEV && "列表主容器" })
    public main: VLTemplate = null;

    @property({ type: VLItemGroup, tooltip: CC_DEV && "列表副容器\n需要分层显示时使用，一般用于降低draw call" })
    public others: VLItemGroup[] = [];

    @property({ tooltip: CC_DEV && "元素节点大小是否一致\n大小不一致时必须提供calcItemSize接口，且暂不支持grid排版" })
    public isFixedSize: boolean = true;

    @property(cc.Node)
    public emptyTip: cc.Node = null;

    @property({ tooltip: CC_DEV && "分帧加载间隔，为0时表示不分帧" })
    public frameLoadItv: number = 0;

    @property({ tooltip: CC_DEV && "是否需要处理层级 为true 需要设置subling" })
    public isSubling: boolean = false;

    private _scrollView: cc.ScrollView = null;
    public get scrollView(): cc.ScrollView {
        if (!this._scrollView) {
            this._scrollView = this.getComponent(cc.ScrollView);
        }
        return this._scrollView;
    }

    private _layout: VirtualLayout = null;
    public get layout(): VirtualLayout {
        if (!this._layout) {
            this._layout = this.scrollView.content.getComponent(VirtualLayout);
        }
        return this._layout;
    }

    private _argsArr: any[] = [];
    /** 列表缓存的所有数据 */
    public get argsArr(): any[] { return this._argsArr; }
    public set argsArr(v: any[]) {
        this._argsArr = v;
        this.layout.rearrange();
        this.listCntChanged();
    }

    /** 分帧加载完成回调 */
    private _frameLoadCb: Function = null;
    public get frameLoadCb(): Function {
        return this._frameLoadCb;
    }
    public set frameLoadCb(v: Function) {
        this._frameLoadCb = v;
    }

    private _calcItemSize: (args: any) => cc.Size = null;
    /** 根据参数计算元素大小的接口（isFixedSize为false时必须提供） */
    public get calcItemSize(): (args: any) => cc.Size { return this._calcItemSize; };

    protected onLoad(): void {
        if (CC_EDITOR) {
            this.runEditor();
            return;
        }
        if (this.main.templatePrefab || this.main.templateNode) {
            this.initList();
        }
    }

    protected onDestroy(): void {
        this.main = null;
        this.others = [];
        this.emptyTip = null;
        this._scrollView = null;
        this._layout = null;
        this._argsArr = [];
        this.frameLoadCb = null;
    }

    public initList() {
        if (this.layout) {
            this.layout.onInit(this);
        }
    }

    protected resetInEditor(): void {
        this.runEditor();
    }

    protected onFocusInEditor(): void {
        if (this.main) {
            this.main.resetMainItemChild();
        }
    }

    /**
     * 编辑器模式下的一些设置
     */
    private runEditor(): void {
        if (!CC_EDITOR) {
            return;
        }
        let scrollView = this.getComponent(cc.ScrollView);
        let layout = scrollView.content.getComponent(VirtualLayout);
        if (!this.main.content) {
            this.main.content = scrollView.content;
        }
        if (!layout) {
            scrollView.content.addComponent(VirtualLayout);
        }
        this.main.editorCall = (mainItemChild: unknown, refresh: boolean): void => {
            let hasChildType = false;
            for (let i = 0; i < this.others.length; i++) {
                if (this.others[i].templateType === GroupSource.MAIN_ITEM_CHILD) {
                    hasChildType = true;
                    break;
                }
            }
            if (hasChildType) {
                EditorTool.setClassAttrPropEnum(VLItemGroup, "templateChild", cc.Enum["getList"](mainItemChild));
                if (refresh) {
                    EditorTool.refreshSelectedInspector(this.node);
                }
            }
        };
        if (this.main) {
            this.main.resetMainItemChild();
        }
    }

    /** 列表个数变更 */
    private listCntChanged() {
        let count = this.argsArr.length;
        if (this.emptyTip) {
            this.emptyTip.active = count <= 0;
        }
    }

    /**
     * 滚动元素节点到view的指定位置
     * @param idx 元素下标
     * @param itemAnchor 元素的锚点位置（左下角为0点）
     * @param viewAnchor view的锚点位置（左下角为0点）
     * @param t 时间 s
     * @param a 加速度是否衰减，为true且滚动距离大时滚动会不准确
     */
    public scrollItemToView(idx: number, itemAnchor: cc.Vec2 = cc.v2(), viewAnchor: cc.Vec2 = cc.v2(), t: number = 0, a: boolean = true): void {
        this.scrollView.scrollToOffset(this.layout.getScrollOffset(idx, itemAnchor, viewAnchor), t, a);
    }

    /**
     * 滚动到视图顶部
     */
    public scrollToTop(timeInSecond: number = 0, attenuated: boolean = true): void {
        this.scrollView.scrollToTop(timeInSecond, attenuated);
    }

    /**
     * 滚动到视图底部
     */
    public scrollToBottom(timeInSecond: number = 0, attenuated: boolean = true): void {
        this.scrollView.scrollToBottom(timeInSecond, attenuated);
    }

    /**
     * 滚动到视图左部
     */
    public scrollToLeft(timeInSecond: number = 0, attenuated: boolean = true): void {
        this.scrollView.scrollToLeft(timeInSecond, attenuated);
    }

    /**
     * 滚动到视图右部
     */
    public scrollToRight(timeInSecond: number = 0, attenuated: boolean = true): void {
        this.scrollView.scrollToRight(timeInSecond, attenuated);
    }

    /**
     * 根据参数计算元素大小的接口（isFixedSize为false时必须提供）
     */
    public setCalcItemSize(call: (args: any) => cc.Size): void {
        this._calcItemSize = call;
    }

    /**
     * 立即更新布局
     */
    public forceUpdate(): void {
        this.layout.forceUpdate();
    }

    /**
     * 刷新所有激活的item
     */
    public refreshAllItems(): void {
        this.layout.refreshAllItems();
    }

    /** 刷新列表数据 */
    public refreshAllWithData(v: any[]) {
        let curCnt = this._argsArr.length;
        if (curCnt > 0 && curCnt == v.length && this.isFixedSize) {
            this._argsArr = v;
            this.layout.resetAllItemData();
            this.listCntChanged();
        } else {
            this.argsArr = v;
        }
    }

    /**
     * 重置某个元素数据
     * @param index 
     * @param args 元素所需参数
     */
    public reset(index: number, args: any): void {
        if (c2f.utils.math.inRange(0, this._argsArr.length - 1, index)) {
            this._argsArr[index] = args;
            this.layout.rearrange();
        }
    }

    /**
     * 添加元素数据到尾部
     * @param args 元素所需参数
     */
    public push(args: any): number {
        let result = this._argsArr.push(args);
        this.layout.rearrange(false);
        this.listCntChanged();
        return result;
    }

    /**
     * 删除尾部元素数据
     */
    public pop(): any {
        let result = this._argsArr.pop();
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    }

    /**
     * 添加元素数据到头部
     * @param args 
     */
    public unshift(args: any): number {
        let result = this._argsArr.unshift(args);
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    }

    /**
     * 删除头部元素数据
     */
    public shift(): any {
        let result = this._argsArr.shift();
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    }

    /**
     * 插入或删除元素 用法同数组splice
     */
    public splice(start: number, deleteCount: number, argsArr: any[]): any[] {
        let result: any[];
        if (deleteCount === undefined) {
            result = this._argsArr.splice(start);
        } else {
            if (argsArr === undefined || argsArr.length === 0) {
                result = this._argsArr.splice(start, deleteCount);
            } else {
                result = this._argsArr.splice(start, deleteCount);
                for (let i = 0; i < argsArr.length; i++) {
                    this._argsArr.splice(start + i, 0, argsArr[i]);
                }
            }
        }
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    }

    /**
     * 数据排序
     * @param call 
     */
    public sort(call: (a: any, b: any) => number): any[] {
        let result = this._argsArr.sort(call);
        this.layout.rearrange();
        return result;
    }

    /**
     * 数据过滤
     */
    public filter(call: (value: any, index: number, array: any[]) => boolean): any[] {
        this._argsArr = this._argsArr.filter(call);
        this.layout.rearrange();
        this.listCntChanged();
        return this._argsArr;
    }

    /** 列表是否在底部 */
    public scrollIsInBottom() {
        let inBottom = false;
        let lastIdx = this._argsArr.length - 1;
        let find = this.layout.findIdxIsInView(lastIdx);
        if (this.canScroll()) {
            inBottom = find;
        }
        return inBottom;
    }

    /** 可否滚动 */
    public canScroll() {
        let can = false;
        let content = this.scrollView.content;
        if (this.scrollView.vertical) {
            can = content.height >= content.parent.height;
        } else {
            can = content.width >= content.parent.width;
        }
        return can;
    }
}
