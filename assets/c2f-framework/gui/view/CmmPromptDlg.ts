import LanguageLabel from "../../component/language/LanguageLabel";


/** 公共提示窗口 */
const { ccclass, property } = cc._decorator;
@ccclass
export class CmmPromptDlg extends cc.Component {
    /** 窗口标题多语言组件 */
    @property(LanguageLabel)
    private lab_title: LanguageLabel | null = null;

    /** 提示内容多语言组件 */
    @property(LanguageLabel)
    private lab_content: LanguageLabel | null = null;

    /** 确认按钮文本多语言组件 */
    @property(LanguageLabel)
    private lab_ok: LanguageLabel | null = null

    /** 取消按钮文本多语言组件 */
    @property(LanguageLabel)
    private lab_cancel: LanguageLabel | null = null;

    private config: any = {};

    private onTouchEnd(event: cc.Event.EventTouch, data: any) {
        switch (event.target.name) {
            case "btn_ok":
                this.onOk();
                break;
            case "btn_cancel":
                this.onCancel();
                break;
            default:
                break;
        }
    }

    /**
     * 
     * 
     * @param params 参数 
     * {
     *     title:      标题
     *     content:    内容
     *     okWord:     ok按钮上的文字
     *     okFunc:     确认时执行的方法
     *     cancelWord: 取消按钮的文字
     *     cancelFunc: 取消时执行的方法
     *     needCancel: 是否需要取消按钮
     * }
     */
    onUIAdded(params: any = {}) {
        this.config = params || {};
        this.setTitle();
        this.setContent();
        this.setBtnOkLabel();
        this.setBtnCancelLabel();
        this.node.active = true;
    }

    private setTitle() {
        this.lab_title!.dataID = this.config.title;
    }

    private setContent() {
        this.lab_content!.dataID = this.config.content;
    }

    private setBtnOkLabel() {
        this.lab_ok!.dataID = this.config.okWord;
    }

    private setBtnCancelLabel() {
        this.lab_cancel!.dataID = this.config.cancelWord;
        this.lab_cancel!.node!.parent!.active = this.config.needCancel || false;
    }

    private onOk() {
        if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
        }
        this.close();
    }

    private onClose() {
        if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
        }
        this.close();
    }

    private onCancel() {
        if (typeof this.config.cancelFunc == "function") {
            this.config.cancelFunc();
        }
        this.close();
    }

    private close() {
        c2f.gui.removeByNode(this.node);
    }

    onDestroy() {
        this.config = null;
    }
}