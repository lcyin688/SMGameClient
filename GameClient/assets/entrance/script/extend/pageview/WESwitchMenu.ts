import { WESwitchPage } from './WESwitchPage';

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('c2f/scroll/WESwitchMenu(切页-切换菜单)')
export class WESwitchMenu extends cc.Component {
    @property({ type: WESwitchPage })
    switchPage: WESwitchPage = null;

    @property
    private _index: number = 0;
    public get index(): number {
        return this._index;
    }

    @property({ type: cc.Integer, min: -1 })
    public set index(v: number) {
        this.onSwitchMenu(v);
    }

    /** 自定义子节点 */
    @property()
    _isCustomChild: boolean = false;
    @property()
    set isCustomChild(v: boolean) {
        this._isCustomChild = v;
    }

    get isCustomChild() {
        return this._isCustomChild;
    }

    /** 手动添加 Node 集合 */
    @property({
        type: [cc.Node],
        tooltip: CC_DEV && '手动添加 children 集合',
        visible: function () {
            return this.isCustomChild == true;
        },
    })
    dictArray: cc.Node[] = [];

    /** 是否动态适配选中节点大小 */
    @property({
        tooltip: CC_DEV && '是否动态适配选中节点大小',
    })
    isAutoSize: boolean = false;

    /** 选中状态下，item 的大小 */
    @property({
        tooltip: CC_DEV && '选中状态下，菜单按钮的大小',
        visible: function () {
            return this.isAutoSize === true;
        },
    })
    selectedItemSize: cc.Size = new cc.Size(100, 100);

    /** 当前显示 node */
    private _showNode: cc.Node;

    /** menu item 选中状态节点名 */
    private selectName: string = '';

    /** menu item 未选中状态节点名 */
    private unselectName: string = '';

    onSelected?: (n: cc.Node, i: number) => void;

    onUnselected?: (n: cc.Node, i: number) => void;

    protected onLoad() {
        let children = this.node.children;
        if (this.isCustomChild === true) {
            children = this.dictArray;
        }
        for (let i = 0; i < children.length; i++) {
            cc.isValid(children[i]) && (children[i].active = true);
            this.initMenuBtn(children[i], i);
        }
    }

    /**
     * 设置菜单按钮 选中和未选中节点名
     * @param selectName 选中节点名名称
     * @param unselectName 未选中节点名名称
     */
    public setMenuStateByNodeName(selectName: string = '', unselectName: string = ''): void {
        this.selectName = selectName;
        this.unselectName = unselectName;
    }

    /** 动切换菜单 */
    public onSwitchMenu(v: number, isInit: boolean = false) {
        let children = this.node.children;
        if (this.isCustomChild === true) {
            children = this.dictArray;
        }

        const count = children.length - 1;
        if (count < 0) {
            return;
        }

        v = Math.round(v);
        if (v < 0) {
            this._index = v;
            return;
        } else if (v > count) {
            v = count;
        }

        if (isInit === false && v === this._index) {
            return;
        }

        if (isInit === true) {
            this._index = v;
            for (let i = 0; i < children.length; i++) {
                this.initMenuBtn(children[i], i);
            }
        } else {
            const prevIndex = this._index;
            const prevNode = this._showNode;

            this.setMenuBtnState(prevNode, false);

            if (this.onUnselected && prevNode) {
                this.onUnselected(prevNode, prevIndex);
            }

            this._index = v;
            this._showNode = children[v];

            this.setMenuBtnState(this._showNode, true);

            if (this.onSelected) {
                this.onSelected(this._showNode, this._index);
            }
        }

        if (this.switchPage) {
            this.switchPage.index = v;
        }
    }

    public addMenuBtn(node: cc.Node, index: number) {
        this.initMenuBtn(node, index);
    }

    private initMenuBtn(node: cc.Node, index: number) {
        if (!node || !cc.isValid(node) || !node.active || index < 0) {
            return;
        }
        const isSelected = this._index === index;

        this.setMenuBtnState(node, isSelected);

        if (isSelected) {
            this._showNode = node;
            if (this.switchPage) {
                this.switchPage.index = index;
            }
            this.onSelected?.(node, index);
        } else {
            this.onUnselected?.(node, index);
        }

        node.addComponent(cc.Button).node.on('click', () => {
            return (this.index = index);
        });
    }

    private setMenuBtnState(node: cc.Node, isSelected: boolean): void {
        if (!cc.isValid(node) || (!this.selectName && !this.unselectName)) {
            return;
        }

        let selected = node.getChildByName(this.selectName);
        if (selected) {
            selected.active = isSelected;
        }

        let unselected = node.getChildByName(this.unselectName);
        if (unselected) {
            unselected.active = !isSelected;
        }
    }

    public updateCallBack() {
        let children = this.node.children;
        if (this.isCustomChild === true) {
            children = this.dictArray;
        }
        for (let i = 0; i < children.length; i++) {
            this.initMenuBtn(children[i], i);
        }
    }
}
declare global {
    interface IUI {
        WESwitchMenu: typeof WESwitchMenu;
    }

    namespace c2f {
        namespace ui {
            type WESwitchMenu = InstanceType<typeof WESwitchMenu>;
        }
    }
}
c2f.ui.WESwitchMenu = WESwitchMenu;
