import { UIBase } from "./UIBase";

const { ccclass } = cc._decorator;

/** 预制组件基类 */
@ccclass
export class UIPrefabBase extends UIBase {

    /** 摊平的节点集合（不能重名） */
    private mapNode: Map<string, cc.Node> = new Map();
    /** 红点节点 */
    private mapRedI: Map<string, number> = new Map();

    /** 通过节点名获取预制上的节点，整个预制不能有重名节点 */
    public get(name: string): cc.Node | undefined {
        return this.mapNode.get(name);
    }

    /** 映射节点到对象 */
    public initViewProperty() {
        if (this.mapNode.size <= 0) {
            c2f.utils.view.nodeTreeInfoLite(this.node, this.mapNode);
            this.initProperty();
        }
    }

    protected onLoad() {
        this.initViewProperty();
        this.initDotForUI();
        this.autoAddTopSafeAreaComp();
    }

    protected onEnable(): void {
        if (super.onEnable) {
            super.onEnable();
        }
        this.updateRedDot();
    }

    protected initProperty() {
    }

    protected initDotForUI() {
        if (!c2f.dotMgr.root) {
            return;
        }
        let compName = c2f.utils.view.getComponentName(this);
        if (compName.endsWith('View')) {
            compName = compName.substring(0, compName.length - 4);
        }
        const allConf = szg.cfg.getCfgData('redDots');
        if (allConf && allConf.views && allConf.views[compName]) {
            const node2Id: { [key: string]: number } = allConf.views[compName];
            for (let key in node2Id) {
                const id = node2Id[key];
                if (id <= 0) {
                    continue;
                }
                let dstNode = this.mapNode.get(key);
                if (dstNode) {
                    c2f.dotMgr.setDisplayProxy(id, dstNode, null, null);
                    this.mapRedI.set(key, id);
                } else {
                    cc.warn(`auto add redDot in [${compName}], dont find node: [${key}]`);
                }
            }
        }
    }

    protected updateRedDot() {
        if (!this.mapRedI) {
            return;
        }
        this.mapRedI.forEach((v, k) => {
            c2f.dotMgr.refreshRedDotById(v);
        })
    }

    protected onDestroy() {
        // 节点引用数据清除
        this.mapNode.clear();
        this.mapRedI.clear();
        super.onDestroy();
    }

    private autoAddTopSafeAreaComp() {
        if (!this.mapNode) {
            return;
        }
        let topNode = this.mapNode.get('_top_') || this.mapNode.get('top');
        if (!topNode) {
            return;
        }
        let widget = topNode.getComponent(cc.Widget);
        if (!widget) {
            return;
        }
        let safeAreaComp = topNode.getComponent('C2FSafeArea');
        if (!safeAreaComp) {
            safeAreaComp = topNode.addComponent('C2FSafeArea');
            safeAreaComp.setTopEnable(true);
        }
    }
}