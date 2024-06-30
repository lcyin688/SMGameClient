/**
 * 虚拟列表副容器
 */

/** 分组数据来源类型 */
export enum GroupSource {
    NODE,
    PREFAB,
    MAIN_ITEM_CHILD,
}

const { ccclass, property, executeInEditMode } = cc._decorator;
@ccclass("VLItemGroup")
@executeInEditMode
export class VLItemGroup {
    @property({
        type: cc.Node,
        tooltip: CC_DEV && "列表容器节点",
    })
    public content: cc.Node = null;

    @property({
        type: cc.Enum(GroupSource),
        tooltip: CC_DEV && "列表元素模板类型"
    })
    public templateType: GroupSource = GroupSource.PREFAB;

    @property({
        type: cc.Prefab,
        tooltip: CC_DEV && "列表元素模板预制体",
        visible() { return this.templateType === GroupSource.PREFAB; }
    })
    public templatePrefab: cc.Prefab = null;

    @property({
        type: cc.Node,
        tooltip: CC_DEV && "列表元素模板节点",
        visible() { return this.templateType === GroupSource.NODE; }
    })
    public templateNode: cc.Node = null;

    @property({
        type: cc.Enum({}),
        tooltip: CC_DEV && "以列表主元素的子节点作为模板节点",
        visible() { return this.templateType === GroupSource.MAIN_ITEM_CHILD; }
    })
    public templateChild: number = -1;
}
