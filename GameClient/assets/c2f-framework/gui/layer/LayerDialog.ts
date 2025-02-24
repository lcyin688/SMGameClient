import { UICallbacks, UIConfig, ViewParams } from "../../define/C2FUIDef";
import { LayerPopUp } from "./LayerPopup";

/*
 * 模式弹窗层，该层的窗口同时只能显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
 */
export class LayerDialog extends LayerPopUp {
    /** 窗口数据队列 */
    private queue: Array<ViewParams> = [];
    /** 窗口参数队列 - 预防同一资源的窗口参数覆盖 */
    private queue_params: Array<any> = [];
    /** 当前窗口数据 */
    private current!: ViewParams;

    public add(config: UIConfig, params?: any, callbacks?: UICallbacks): string {
        this.black.enabled = true;

        let prefabPath = config.prefab
        let uuid = this.getUuid(prefabPath);
        let viewParams = this.ui_nodes.get(uuid);
        if (viewParams == null) {
            viewParams = new ViewParams();
            viewParams.uuid = this.getUuid(prefabPath);
            viewParams.prefabPath = prefabPath;
            viewParams.callbacks = callbacks || {};

            let onRemove_Source = viewParams.callbacks.onUIRemoved;
            viewParams.callbacks.onUIRemoved = (node: cc.Node | null, params: any) => {
                if (onRemove_Source) {
                    onRemove_Source(node, params);
                }
                setTimeout(() => {
                    this.next();
                }, 0);
            }
            viewParams.valid = true;
            this.ui_nodes.set(viewParams.uuid, viewParams);
        }

        if (this.current && this.current.valid) {
            if (this.current.prefabPath != prefabPath) {
                this.queue.push(viewParams);
                this.queue_params.push(params || {});
            }
        } else {
            viewParams.params = params || {};
            this.current = viewParams;
            this.load(viewParams, config.bundle);
        }
        return uuid;
    }

    protected setBlackDisable() {
        if (this.queue.length == 0) this.black.enabled = false;
    }

    private next() {
        if (this.queue.length > 0) {
            this.current = this.queue.shift()!;
            this.current.params = this.queue_params.shift();
            if (this.current.node) {
                this.createNode(this.current);
            }
            else {
                this.load(this.current);
            }
        }
    }
}