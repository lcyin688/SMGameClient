import { PopViewParams, UIConfig } from "../../define/C2FUIDef";
import { LayerUI } from "./LayerUI";

/*
 * 弹窗层，允许同时弹出多个窗口，弹框参数可以查看 PopViewParams
 */
export class LayerPopUp extends LayerUI {
    protected black!: cc.BlockInputEvents;

    constructor(name: string) {
        super(name);
        this.init();
    }

    private init() {
        this.black = this.addComponent(cc.BlockInputEvents);
        this.black.enabled = false;
    }

    /**
     * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     传给组件onUIAdded、onUIRemoved方法的参数。
     * @param popParams  弹出界面的设置定义，详情见PopViewParams
     */
    public add(config: UIConfig, params: any, popParams?: PopViewParams): string {
        this.black.enabled = true;
        return super.add(config, params, popParams);
    }

    public remove(prefabPath: string, isDestroy: boolean): void {
        super.remove(prefabPath, isDestroy);
        this.setBlackDisable();
    }

    protected removeByUuid(prefabPath: string, isDestroy: boolean): void {
        super.removeByUuid(prefabPath, isDestroy);
        this.setBlackDisable();
    }

    protected setBlackDisable() {
        this.black.enabled = false;
    }

    public clearUI(isDestroy: boolean, excludePrefab: string[] = []) {
        super.clearUI(isDestroy, excludePrefab)
        this.black.enabled = false;
    }
}