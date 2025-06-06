const { ccclass, property } = cc._decorator;

/** 滚动消息提示组件  */
@ccclass
export class Notify extends cc.Component {
    @property(cc.Label)
    private lab_content: cc.Label | null = null;

    @property(cc.Animation)
    private animation: cc.Animation | null = null;

    onLoad() {
        if (this.animation) this.animation.on(cc.Animation.EventType.FINISHED, this.onFinished, this);
    }

    private onFinished() {
        this.node.destroy();
    }

    /**
     * 显示提示
     * @param msg       文本
     * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
     */
    toast(msg: string, useI18n: boolean) {
        let realMsg = msg;
        if (c2f.utils.str.isAllDigits(msg)) {
            let words = c2f.language.words(msg);
            if (words) {
                realMsg = words;
            }
        }
        if (c2f.gui.gameFont && this.lab_content.font != c2f.gui.gameFont) {
            this.lab_content.font = c2f.gui.gameFont;
        }
        this.lab_content!.string = realMsg;
    }
}
