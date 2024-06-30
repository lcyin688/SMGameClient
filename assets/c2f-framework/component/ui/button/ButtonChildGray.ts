import { ButtonHackEvent, ButtonState } from "../../../hack/ButtonHack";

const { ccclass, property, menu, requireComponent, executeInEditMode } = cc._decorator;

/**
 * 根据button组件过渡状态，置灰子节点
 */
@ccclass
@executeInEditMode
@requireComponent(cc.Button)
@menu("c2f/UI/ButtonChildGray")
export default class ButtonChildGray extends cc.Component {

    @property({ type: cc.Node, tooltip: CC_DEV && "需要同步置灰的关联节点" }) public relatedNodes: cc.Node[] = [];
    @property(cc.Material) public normalMaterial: cc.Material = null;
    @property(cc.Material) public grayMaterial: cc.Material = null;

    protected onLoad(): void {
        this.node.on(ButtonHackEvent.STATE_CHANGE, this.onStateChange, this);
    }

    private onStateChange(state: ButtonState): void {
        if (state === ButtonState.DISABLED) {
            if (!this.grayMaterial) {
                this.grayMaterial = cc.Material.getBuiltinMaterial("2d-gray-sprite");
            }
            let cb = (n: cc.Node): void => {
                let rc = n.getComponent(cc.RenderComponent);
                if (rc && (rc instanceof cc.Sprite || rc instanceof cc.Label)) {
                    rc.setMaterial(0, this.grayMaterial);
                }
            };
            c2f.utils.view.nodeRecursive(this.node.children, cb);
            c2f.utils.view.nodeRecursive(this.relatedNodes, cb);
        } else {
            if (!this.normalMaterial) {
                this.normalMaterial = cc.Material.getBuiltinMaterial("2d-sprite");
            }
            let cb = (n: cc.Node): void => {
                let rc = n.getComponent(cc.RenderComponent);
                if (rc && (rc instanceof cc.Sprite || rc instanceof cc.Label)) {
                    rc.setMaterial(0, this.normalMaterial);
                }
            };
            c2f.utils.view.nodeRecursive(this.node.children, cb);
            c2f.utils.view.nodeRecursive(this.relatedNodes, cb);
        }
    }
}
