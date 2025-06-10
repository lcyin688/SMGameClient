const { ccclass, property, menu, disallowMultiple } = cc._decorator;

declare global {
    interface IUI {
        WEBatchItem: typeof WEBatchItem;
    }
    namespace c2f {
        namespace ui {
            type WEBatchItem = InstanceType<typeof WEBatchItem>;
        }
    }
}

/**
 * 动态分层和批 【H5】 生效
 *
 * Item 下节点名字不能重复，保持唯一性，用于分层合批的收集和排序。
 *
 * Item 内节点名顺序不能和其他Item内节点名顺序冲突，保持前后出现的顺序。
 *
 * Item 相互之间不能重叠，分层合批会改变绘画顺序，相互重叠会产生Item间显示层的冲突，应该避免这使用情况。
 *
 * 出于对性能考虑，建议Item内部少用或者不用Mask遮罩。
 */

// 开启动态合图（全局的）
// 动态合图系统会自动检测这张贴图是否已经被合并到了图集（图片集合）中，如果没有，并且此贴图又符合动态合图的条件，就会将此贴图合并到图集中。
// cc.macro.CLEANUP_IMAGE_CACHE = false;
// cc.dynamicAtlasManager.enabled = true;

// 开启调试
// cc.dynamicAtlasManager.showDebug(true);

let _nodeID = 0;
let _draws: Array<Draw> = [];

/** 绘画层 */
class Draw {
    // 是否有mask遮盖组件
    mask: boolean = false;
    // 绘画节点容器
    nodes: Array<cc.Node> = [];
    localOpacitys: Array<number> = [];
    // 绘图节点原子节点数据
    childrens: Array<Array<cc.Node>> = [];

    constructor() {
        this.nodes = [];
        this.mask = false;
        this.childrens = [];
    }
}

@ccclass
@disallowMultiple()
@menu('c2f/render/WEBatchItem(动态分层和批)')
export class WEBatchItem extends cc.Component {
    // 全局合批队列记录
    static queues = [];
    static nodeArr: Array<cc.Node> = [];

    quene: Array<Draw> = [];
    // 记录原节点结构
    children: Array<cc.Node> = [];

    @property(cc.Node)
    culling: cc.Node = null;

    lateUpdate(dt: number) {
        if (!cc.isValid(this.node)) {
            return;
        }
        WEBatchItem.nodeArr.push(this.node);
        WEBatchItem.queues.push(this.quene);
    }
}

// 修复 world 传递
const TASS = (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3);
const WorldDirty = function (node: cc.Node) {
    let flag = node['_localMatDirty'] & TASS;
    if (flag) {
        node['setLocalDirty'](flag);
        node['_calculWorldMatrix']();
        let children = node.children;
        for (let i = 0, j = children.length; i < j; i++) {
            let n = children[i];
            n['_localMatDirty'] |= flag;
            WorldDirty(n);
        }
    }
};

// 遍历建立绘图层队，并收集绘画节点, 全程以节点名字来作为唯一识别标记
const DFS = function (prev: Draw | null, node: cc.Node, active: boolean, level: number = 0, opacity: number = 1.0) {
    let key = _nodeID++;
    let draw = _draws[key];
    if (!draw) {
        draw = _draws[key] = new Draw();
        // 不建议item内有mask, 会打断合批，会增加dc
        draw.mask = node.getComponent(cc.Mask) != null;
    }

    // 修正world传递
    WorldDirty(node);

    let nodes = draw.nodes;
    let localOpacitys = draw.localOpacitys;

    if (active && opacity > 0) {
        // node.active && active
        nodes.push(node); // 收集节点
        localOpacitys.push(node.opacity); // 保存透明度
        node.opacity = opacity * node.opacity; // 设置当前透明度
    }
    opacity = (opacity * node.opacity) / 255.0;

    // 遮罩直接打断返回
    if (draw.mask) {
        return;
    }

    let childs = node.children;
    for (let i = 0; i < childs.length; i++) {
        let n = childs[i];
        let isActive = active ? cc.isValid(n) : false;
        DFS(prev, n, isActive, level + 1, opacity);
    }
};

const aabb0 = cc.rect();
const aabb1 = cc.rect();
const worldMat4 = cc.mat4();

const getWorldBoundingBox = function (node: cc.Node, rect: cc.Rect) {
    let _contentSize = node.getContentSize();
    let _anchorPoint = node.getAnchorPoint();

    let width = _contentSize.width;
    let height = _contentSize.height;
    rect.x = -_anchorPoint.x * width;
    rect.y = -_anchorPoint.y * height;
    rect.width = width;
    rect.height = height;

    node.getWorldMatrix(worldMat4);
    return rect.transformMat4(rect, worldMat4);
};

const changeTree = function (parent: cc.Node, queue: Array<Draw>) {
    queue.length = 0;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let btn = parent.getComponent(WEBatchItem)!;
    if (btn.culling) {
        getWorldBoundingBox(btn.culling, aabb0);
    }

    _draws = queue;
    // 遍历所有绘画节点，按顺序分层
    let nodes = parent.children;
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (cc.isValid(node) && node.opacity > 0) {
            // node.activeInHierarchy

            // 剔除显示范围外的item
            if (btn.culling) {
                WorldDirty(node); // 修正world传递
                getWorldBoundingBox(node, aabb1);
                if (!aabb0.intersects(aabb1)) {
                    continue;
                }
            }

            _nodeID = 0;
            DFS(null, node, true);
        }
    }

    // //记录item的父节点的子节点结构
    // let btn = parent.getComponent(BatchItems)!;
    btn.children = parent['_children']; // 记录原来节点结构
    let childs: Array<cc.Node> = (parent['_children'] = []); // 创建动态分层节点结构

    for (let i = 0; i < _draws.length; i++) {
        let curr = _draws[i];
        let mask = curr.mask;
        let nodes = curr.nodes;
        let childrens = curr.childrens;
        for (let i = 0; i < nodes.length; i++) {
            childrens[i] = nodes[i]['_children']; // 记录原来节点结构
            !mask && (nodes[i]['_children'] = []); // 清空切断下层节点
        }

        // 按顺序拼接分层节点
        childs.push(...nodes);
    }
};

const resetTree = function (parent: cc.Node, queue: Array<Draw>) {
    // 恢复父节点结构
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let btn = parent.getComponent(WEBatchItem)!;
    parent['_children'].length = 0; // 清空动态分层节点结构
    parent['_children'] = btn.children; // 恢复原来节点结构

    _draws = queue;
    for (let i = 0; i < _draws.length; i++) {
        let curr = _draws[i];
        let nodes = curr.nodes;
        let childrens = curr.childrens;
        let localOpacitys = curr.localOpacitys;
        for (let i = 0; i < nodes.length; i++) {
            nodes[i]['_children'] = childrens[i]; // 恢复原来节点结构
            // 恢复原来透明度
            nodes[i].opacity = localOpacitys[i];
        }
        childrens.length = 0;
        nodes.length = 0;
    }

    _draws.length = 0;
};

cc.director.on(cc.Director.EVENT_BEFORE_DRAW, (dt) => {
    // 绘画前拦截修改节点结构
    let nodes = WEBatchItem.nodeArr;
    let queues = WEBatchItem.queues;
    if (!nodes || nodes.length == 0) {
        return;
    }
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.active && node.isValid) {
            changeTree(node, queues[i]);
        }
    }
});

cc.director.on(cc.Director.EVENT_AFTER_DRAW, (dt) => {
    // 绘画结束后恢复节点结构
    let nodes = WEBatchItem.nodeArr;
    let queues = WEBatchItem.queues;
    if (!nodes || nodes.length == 0) {
        return;
    }
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node && node.isValid) {
            resetTree(node, queues[i]);
        }
    }

    nodes.length = 0;
    queues.length = 0;
    _draws.length = 0;
});
export default WEBatchItem;
c2f.ui.WEBatchItem = WEBatchItem;
