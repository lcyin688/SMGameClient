const { ccclass, property, executeInEditMode, menu } = cc._decorator;
@ccclass
@executeInEditMode
@menu('c2f/scroll/WESwitchPage(切页-页面试图)')
export class WESwitchPage extends cc.Component {
    /** 是否循环页面 */
    @property
    isLoopPage: boolean = false;

    @property
    private _index: number = 0;
    public get index(): number {
        return this._index;
    }

    @property
    public set index(v: number) {
        if (this.isChanging) {
            return;
        }
        v = Math.round(v);
        const count = this.node.children.length - 1;
        if (this.isLoopPage) {
            if (v > count) {
                v = 0;
            }
            if (v < 0) {
                v = count;
            }
        } else {
            if (v > count) {
                v = count;
            }
            if (v < 0) {
                v = 0;
            }
        }
        this.preIndex = this._index; // 标记之前的页面
        this._index = v;
        if (CC_EDITOR) {
            this._updateEditorPage(v);
        } else {
            this._updatePage(v);
        }
    }

    private preIndex: number = 0;

    /** 判断是否在 changing 页面状态 */
    private _isChanging: boolean = false;

    /** 只读，是否在changing 的状态 */
    public get isChanging(): boolean {
        return this._isChanging;
    }

    private _isTweenShow: boolean = false;

    public startGradualReveal(v: boolean = true) {
        this._isTweenShow = v;
    }

    onLoad() {
        this.preIndex = this.index;
        this.node.children.forEach((node, i) => {
            return (node.active = i == this.index);
        });
    }

    addChildPage(node: cc.Node, bShow: boolean = false) {
        this.node.addChild(node);
        node.active = bShow;
    }

    private _updateEditorPage(page: number) {
        if (!CC_EDITOR) {
            return;
        }
        const children = this.node.children;
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (i == page) {
                node.active = true;
                if (this._isTweenShow) {
                    cc.tween(node).set({ opacity: 1 }).to(0.3, { opacity: 255 }).start();
                }
            } else {
                if (this._isTweenShow) {
                    node.opacity = 1;
                }
                node.active = false;
            }
        }
    }

    private _updatePage(page: number) {
        if (!cc.isValid(this.node)) {
            return;
        }
        const children = this.node.children;
        const preIndex = this.preIndex;
        const curIndex = this.index;

        if (preIndex === curIndex) {
            return;
        } // 没有改变就不进行操作

        const preNode: cc.Node = children[preIndex]; // 旧节点
        const showNode: cc.Node = children[curIndex]; // 新节点

        preNode.active = false;
        showNode.active = true;
    }

    public next(): boolean {
        if (this.isChanging) {
            return false;
        } else {
            this.index++;
            return true;
        }
    }

    public previous(): boolean {
        if (this.isChanging) {
            return false;
        } else {
            this.index--;
            return true;
        }
    }

    public setEventIndex(e, index): boolean {
        if (this.index >= 0 && this.index != null && this.isChanging === false) {
            this.index = index;
            return true;
        } else {
            return false;
        }
    }
}
declare global {
    interface IUI {
        WESwitchPage: typeof WESwitchPage;
    }

    namespace c2f {
        namespace ui {
            type WESwitchPage = InstanceType<typeof WESwitchPage>;
        }
    }
}
export default WESwitchPage;
c2f.ui.WESwitchPage = WESwitchPage;
