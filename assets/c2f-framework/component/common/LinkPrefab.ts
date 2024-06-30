const { ccclass, executeInEditMode, property, menu } = cc._decorator;

// cc.Flags.DontSave          // 当前节点不会被保存到prefab文件里
// cc.Flags.LockedInEditor    // 当前节点及子节点在编辑器里不会被点击到
// cc.Flags.HideInHierarchy   // 当前节点及子节点在编辑器里不显示

@ccclass
@menu('c2f/common/LinkPrefab')
@executeInEditMode
export default class LinkPrefab extends cc.Component {

    private _realNode: cc.Node = null

    @property
    private _prefab: cc.Prefab = null
    @property({ type: cc.Prefab, visible: true, displayName: "预制体" })
    set prefab(value: cc.Prefab) {
        this.onPrefabChanged(value)
    }
    get prefab(): cc.Prefab {
        return this._prefab
    }

    protected onLoad(): void {
        this.checkRealNode();
    }

    protected onDestroy(): void {
        this._realNode = null;
        this._prefab = null;
    }

    private resetFlag(node: cc.Node) {
        if (CC_EDITOR) {
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.DontSave;
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.LockedInEditor;
            //@ts-ignore
            node["_objFlags"] |= cc.Object.Flags.HideInHierarchy;
        }
    }

    private resetRealNode() {
        if (!this._prefab) {
            return;
        }
        let find = false;

        if (this.node.children.length > 0) {
            for (let one of this.node.children) {
                if (one.name == this._prefab.name) {
                    find = true;
                    this._realNode = one;
                }
            }
        }
        if (!find) {
            let newNode = null;
            if (CC_EDITOR) {
                newNode = cc.instantiate(this._prefab);
            } else {
                newNode = c2f.utils.view.instantiateMVCPrefab(this._prefab);
            }
            if (!newNode) {
                return;
            }
            this.resetFlag(newNode);
            newNode.setPosition(0, 0);
            this.node.insertChild(newNode, -1) //添加到最底层
            this._realNode = newNode;
            this.resetSize();
        }
    }

    private resetSize() {
        if (this.node.width == 0 && this.node.height == 0) {
            this.node.setContentSize(this._realNode.width, this._realNode.height);
        }
        let widget = this._realNode.getComponent(cc.Widget);
        if (widget) {
            widget.enabled = true;
        }
    }

    private onPrefabChanged(newPfab: cc.Prefab) {
        if (this._realNode) {
            this._realNode.destroy();
            this._realNode = null;
        }
        this._prefab = newPfab;
        this.resetRealNode();
    }

    private checkRealNode() {
        if (!this._realNode) {
            this.resetRealNode();
        }
    }

    public getPrefabNode(): cc.Node {
        if (!this._realNode) {
            this.resetRealNode();
        }
        return this._realNode
    }

    public getComponentEx<T extends cc.Component>(type: { prototype: T }): T {
        this.checkRealNode();
        let prefabNode = this._realNode
        if (!prefabNode || !cc.isValid(prefabNode)) {
            return null;
        }
        return prefabNode.getComponent(type);
    }

    public getRealComponent(name: string) {
        this.checkRealNode();
        let prefabNode = this._realNode
        return prefabNode ? prefabNode.getComponent(name) : null;
    }
}