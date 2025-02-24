import AnimValue from "./AnimValue";

const { ccclass, property, menu, requireComponent, executeInEditMode } = cc._decorator;

/**
 * 数值渐变的进度条
 */
@ccclass
@executeInEditMode
@requireComponent(cc.ProgressBar)
@menu("c2f/UI/AnimValueProgress")
export default class AnimValueProgress extends AnimValue {

    @property({ tooltip: "外观仅显示小于1部分" })
    onlyLessThan1: boolean = false;

    private _progressBar: cc.ProgressBar = null;
    public get progressBar(): cc.ProgressBar {
        if (!this._progressBar) this._progressBar = this.getComponent(cc.ProgressBar);
        return this._progressBar;
    }

    /** 进度变化回调 */
    private _progressChgCb: Function;
    public get progressChgCb(): Function {
        return this._progressChgCb;
    }
    public set progressChgCb(v: Function) {
        this._progressChgCb = v;
    }

    protected onDestroy(): void {
        this.progressChgCb = null;
        if (super.onDestroy) {
            super.onDestroy();
        }
    }

    /**
     * @override
     */
    protected onAnimUpdate(): void {
        if (this.onlyLessThan1) {
            this.progressBar.progress = this.curValue % 1;
        } else {
            this.progressBar.progress = Math.min(this.curValue, 1);
        }
        if (this.progressChgCb) {
            this.progressChgCb(this.curValue);
        }
    }
}
