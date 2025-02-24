import { C2FEnum } from '../../define/C2FEnum';
import { UIBase } from './UIBase';

const { ccclass, property } = cc._decorator;
@ccclass
export class UIModelBase extends UIBase {

    protected onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }
        this.on(C2FEnum.Event.ChangeModelValue, this.onChangeModelValue, this);
    }

    protected onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }
        this.off(C2FEnum.Event.ChangeModelValue);
    }

    /**
     * 
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    private onChangeModelValue(msgType: string, varName: string, cb: Function) {
        cb?.(this[varName]);
    }
}
