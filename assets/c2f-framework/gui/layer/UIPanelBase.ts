import { C2FEnum } from '../../define/C2FEnum';
import { UIPrefabBase } from './UIPrefabBase';

const { ccclass, property } = cc._decorator;
@ccclass
export class UIPanelBase extends UIPrefabBase {

    protected onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
    }

    protected onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.Event.ChangeViewValue);
    }

    /**
     * 
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    private onChangeViewValue(msgType: string, varName: string, cb: Function) {
        cb?.(this[varName]);
    }
}
