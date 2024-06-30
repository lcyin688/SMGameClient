/**
 * 虚拟列表元素模板
 */

/** 模板类型 */
export enum TemplateType {
    NODE,
    PREFAB
}

const { ccclass, property, executeInEditMode } = cc._decorator;
@ccclass("VLTemplate")
@executeInEditMode
export class VLTemplate {
    @property({
        type: cc.Node,
        tooltip: CC_DEV && "列表容器节点",
        visible() { return false; }
    })
    public content: cc.Node = null;

    @property({ type: cc.Enum(TemplateType) })
    private _templateType: TemplateType = TemplateType.PREFAB;
    @property({
        type: cc.Enum(TemplateType),
        tooltip: CC_DEV && "列表元素模板类型"
    })
    public get templateType(): TemplateType { return this._templateType; }
    public set templateType(v: TemplateType) {
        if (this._templateType === v) {
            return;
        }
        this._templateType = v;
        this.resetMainItemChild(true);
    }

    @property(cc.Prefab)
    private _templatePrefab: cc.Prefab = null;
    @property({
        type: cc.Prefab,
        tooltip: CC_DEV && "列表元素模板预制体",
        visible() { return this.templateType === TemplateType.PREFAB; }
    })
    public get templatePrefab(): cc.Prefab { return this._templatePrefab; }
    public set templatePrefab(v: cc.Prefab) {
        if (this._templatePrefab === v) {
            return;
        }
        this._templatePrefab = v;
        this.resetMainItemChild(true);
    }

    @property(cc.Node)
    private _templateNode: cc.Node = null;
    @property({
        type: cc.Node,
        tooltip: CC_DEV && "列表元素模板节点",
        visible() { return this.templateType === TemplateType.NODE; }
    })
    public get templateNode(): cc.Node { return this._templateNode; }
    public set templateNode(v: cc.Node) {
        if (this._templateNode === v) {
            return;
        }
        this._templateNode = v;
        this.resetMainItemChild(true);
    }

    public editorCall: (mainItemChild: unknown, refresh: boolean) => void = null;

    /**
     * 更新枚举内容
     * @param refresh 是否强制刷新inspector 
     * @returns 
     */
    public resetMainItemChild(refresh: boolean = false): void {
        if (!CC_EDITOR) {
            return;
        }
        let mainItemChild = {};
        if (this.templateType === TemplateType.NODE && this.templateNode) {
            this.templateNode.children.forEach((c, i) => { mainItemChild[c.name] = i; });
        } else if (this.templateType === TemplateType.PREFAB && this.templatePrefab) {
            this.templatePrefab.data.children.forEach((c, i) => { mainItemChild[c.name] = i; });
        }
        this.editorCall?.(mainItemChild, refresh);
    }
}