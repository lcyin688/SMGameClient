import { C2FEnum } from "../../define/C2FEnum";
import { ViewParams } from "../../define/C2FUIDef";

const { ccclass } = cc._decorator;

/** 窗口事件触发组件 */
@ccclass
export class DelegateComponent extends cc.Component {
    /** 视图参数 */
    viewParams: ViewParams = null!;

    /** 窗口添加 */
    public add() {
        // 触发窗口组件上添加到父节点后的事件
        this.parallelApplyComponentsFunction(this.node, "onViewOpen", this.viewParams.params);
        this.parallelApplyComponentsFunction(this.node, "playInAnima", this.viewParams.params);
        if (typeof this.viewParams.callbacks.onUIAdded === "function") {
            this.viewParams.callbacks.onUIAdded(this.node, this.viewParams.params);
        }
        c2f.event.emit(C2FEnum.Event.PopViewAdded, this.node.name);
    }

    /** 删除节点，该方法只能调用一次，将会触发onUIBeforeRemove回调 */
    public remove(isDestroy: boolean) {
        if (this.viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.parallelApplyComponentsFunction(this.node, "beforeViewClose", this.viewParams.params);
            this.serialApplyComponentsFunction(this.node, "playOutAnima", this.viewParams.params, () => {
                //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）
                if (typeof this.viewParams.callbacks.onUIBeforeRemove === "function") {
                    this.viewParams.callbacks.onUIBeforeRemove(
                        this.node,
                        () => {
                            this.removed(this.viewParams, isDestroy);
                        });
                }
                else {
                    this.removed(this.viewParams, isDestroy);
                }
            });
        }
    }

    /** 窗口组件中触发移除事件与释放窗口对象 */
    private removed(viewParams: ViewParams, isDestroy: boolean) {
        viewParams.valid = false;

        if (typeof viewParams.callbacks.onUIRemoved === "function") {
            viewParams.callbacks!.onUIRemoved(this.node, viewParams.params);
        }

        if (isDestroy) {
            this.node.destroy();
            //TODO:包名
            c2f.res.release(viewParams.prefabPath, cc.Prefab, viewParams.bundle);
        }
        else {
            this.node.removeFromParent();
        }
        c2f.event.emit(C2FEnum.Event.PopViewRemoved, this.node.name);
    }

    public onDestroy() {
        // 触发窗口组件上窗口移除之后的事件
        this.parallelApplyComponentsFunction(this.node, "onUIDestroy", this.viewParams.params);

        // 通知外部对象窗口移除之后的事件
        if (typeof this.viewParams.callbacks!.onUIDestroy === "function") {
            this.viewParams.callbacks!.onUIDestroy(this.node, this.viewParams.params);
        }

        this.viewParams = null!;
    }

    //并行执行
    protected parallelApplyComponentsFunction(node: cc.Node, funName: string, params: any) {
        const allComps = node['_components'];
        for (let i = 0; i < allComps.length; i++) {
            let component: any = allComps[i];
            let func = component[funName];
            if (func) {
                func.call(component, params);
            }
        }
    }

    //依次执行
    protected serialApplyComponentsFunction(node: cc.Node, funName: string, params: any, endCb: Function) {
        let idx = 0;
        let applyOnce = () => {
            const allComps = node['_components'];
            if (idx >= allComps.length) {
                endCb && endCb();
            } else {
                let component: any = allComps[idx];
                let func = component[funName];
                if (func) {
                    func.call(component, params, () => {
                        idx++;
                        applyOnce();
                    });
                } else {
                    idx++;
                    applyOnce();
                }
            }
        }
        applyOnce();
    }
}