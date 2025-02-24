/**
 * 提审·目标监听
 */

import { C2FEnum } from "../../../define/C2FEnum";


const { ccclass, property } = cc._decorator;
@ccclass()
export class AuditTargetListen extends cc.Component {

    protected onEnable(): void {
        this.node.emit(C2FEnum.ExtEvent.NodeActiveChanged, this.node);
    }

    protected onDisable(): void {
        this.node.emit(C2FEnum.ExtEvent.NodeActiveChanged, this.node);
    }
}
