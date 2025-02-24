import { C2FEnum } from "../../../define/C2FEnum";
import { AuditItem } from "./AuditItem";
import { AuditTargetListen } from "./AuditTargetListen";

const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/audit/AuditSet')
export default class AuditSet extends cc.Component {

    @property(AuditItem)
    targets: AuditItem[] = [];

    protected onLoad(): void {
    }

    protected start(): void {
        this.updateView();
    };

    private updateView() {
        const isAudit = szg.plat.isAudit;
        if (!isAudit) {
            return;
        }
        for (let one of this.targets) {
            if (!one.target || !one.target.isValid) {
                continue;
            }
            this.updateTarget(one);
        }
    }

    private updateTarget(one: AuditItem) {
        let listen = one.target.getComponent(AuditTargetListen);
        if (!listen) {
            listen = one.target.addComponent(AuditTargetListen);
            one.target.on(C2FEnum.ExtEvent.NodeActiveChanged, this.onTargetActiveChanged, this);
        }
        if (one.controlVisible) {
            one.target.active = one.tsVisible;
        }
        if (one.controlOpacity) {
            one.target.opacity = one.tsOpacity;
            let btnComp = one.target.getComponent(cc.Button);
            if (btnComp) {
                btnComp.interactable = one.tsOpacity > 0;
            }
        }
    }

    private onTargetActiveChanged(target: cc.Node) {
        let find = this.targets.find((a) => { return a.target == target; });
        if (find) {
            this.updateTarget(find);
        }
    }
}
