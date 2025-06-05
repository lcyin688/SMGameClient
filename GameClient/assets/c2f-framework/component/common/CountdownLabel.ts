import { SCALE_TWEEN, C2FTween } from '../../core/timer/C2FTween';

const { ccclass, property, menu } = cc._decorator;

type CountdownFormat = string | { S: string; M: string; H: string; D: string };

/**
 * 倒计时显示组件
 */
@ccclass
@menu('c2f/common/CountdownLabel')
export default class CountdownLabel extends cc.Component {
    @property({
        tooltip: CC_DEV && '倒计时是否受到timeScale的影响',
    })
    public timeScale: boolean = false;

    private _tween: C2FTween<this> = null;
    private _updateCall: () => void = null;
    private _completeCall: () => void = null;

    /** 格式化参数，详见`Tool.formatTimeString` */
    private _format: CountdownFormat = '%{hh}:%{mm}:%{ss}';
    /** 文本显示格式化 */
    private _txtFormat: string = null;
    /** 剩余秒数 */
    private _leftSec: number = 0;
    public get leftSec(): number {
        return this._leftSec;
    }
    private _leftFloorSec: number = 0;
    private curSverTime: number = 0;
    private totalTime: number = 0;

    private _label: cc.Label | cc.RichText = null;
    public get label(): cc.Label | cc.RichText {
        if (!this._label) {
            this._label = this.getComponent(cc.Label) ?? this.getComponent(cc.RichText);
        }
        return this._label;
    }

    public startCountdown(sec: number, format: CountdownFormat = '%{hh}:%{mm}:%{ss}', txtFormat: string = null, updateCall: () => void = null, completeCall: () => void = null): void {
        this.curSverTime = c2f.utils.date.getSerVerTime();
        this.totalTime = sec;
        this._leftSec = sec;
        this._leftFloorSec = Math.floor(sec);
        this._format = format;
        this._txtFormat = txtFormat;
        this._updateCall = updateCall;
        this._completeCall = completeCall;
        this._tween?.stop();
        this.unscheduleAllCallbacks();

        this._tween = this.timeScale ? new C2FTween(this, SCALE_TWEEN) : new C2FTween(this);
        if (!this.timeScale) {
            this.onUpdateTime();
        } else {
            this._tween
                .to({ _leftSec: 0 }, sec * 1000)
                .onUpdate(() => {
                    this.onUpdate();
                })
                .onComplete(() => {
                    this.onComplete();
                })
                .start();
        }
    }

    private onUpdateTime(): void {
        let floorSec = Math.floor(this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime));
        this._leftSec = floorSec;
        if (this.label) {
            let txtTime = c2f.utils.date.formatTimeString(floorSec, this._format);
            if (this._txtFormat) {
                txtTime = c2f.utils.str.stringFormat(this._txtFormat, txtTime);
            }
            this.label.string = txtTime;
        }
        // 更新回调
        this._updateCall?.();
        if (floorSec <= 0) {
            //回调
            this.scheduleOnce(() => {
                this.onComplete();
            });
        } else {
            this.scheduleOnce(() => {
                this.onUpdateTime();
            }, 1);
        }
    }

    private onUpdate(): void {
        // 每隔1s更新一次
        let floorSec = Math.floor(this._leftSec);
        if (floorSec === this._leftFloorSec) {
            return;
        }
        // 更新文本显示
        this._leftFloorSec = floorSec;
        if (this.label) {
            let txtTime = c2f.utils.date.formatTimeString(this._leftFloorSec, this._format);
            if (this._txtFormat) {
                txtTime = c2f.utils.str.stringFormat(this._txtFormat, txtTime);
            }
            this.label.string = txtTime;
        }

        // 更新回调
        this._updateCall?.();
    }

    private onComplete(): void {
        this.curSverTime = 0;
        this._completeCall?.();
    }

    public stopCountdown() {
        this.curSverTime = 0;
        this._tween?.stop();
        this.unscheduleAllCallbacks();
    }

    protected onEnable(): void {
        if (this.curSverTime > 0) {
            let sec = this.totalTime - (c2f.utils.date.getSerVerTime() - this.curSverTime);
            sec = sec < 0 ? 0 : sec;
            this.startCountdown(sec, this._format, this._txtFormat, this._updateCall, this._completeCall);
        }
    }
}
