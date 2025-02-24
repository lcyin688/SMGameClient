import { SCALE_TWEEN, TWEEN } from "./C2FTween";
import { EventMessage } from "../event/EventDefine";



export class GameTimer {

    /** 游戏调用暂停的计数 */
    private static _puaseCount: number = 0;

    private static _lastTimeScale: number = 1;
    private static _timeScale: number = 1;
    /** 
     * dt缩放倍数，1为正常速度，0为暂停
     * - 需要特别注意此值的修改和暂停、恢复如果同时多处调用产生的效果是否正确
     */
    public static get timeScale(): number { return this._timeScale; }
    public static set timeScale(v: number) {
        if (v === this._timeScale || v < 0) {
            return;
        }
        this._timeScale = v;
        c2f.event.emit(EventMessage.TIME_SCALE);
    }

    private static _realDt: number = 0;
    /** 距上一帧间隔的真实时间 */
    public static get realDt(): number { return this._realDt; }
    /** 距上一帧间隔经过timeScale缩放的时间 */
    public static get scaleDt(): number { return this._realDt * this._timeScale; }

    private static _gameSec: number = 0;
    private static _scaleGameSec: number = 0;
    /** 游戏启动经过的时长 s */
    public static get gameSec(): number { return this._gameSec; }
    /** 游戏启动经过的时长 ms */
    public static get gameMs(): number { return this._gameSec * 1000; }
    /** 游戏经过缩放的时长 s */
    public static get scaleGameSec(): number { return this._scaleGameSec; }
    /** 游戏经过缩放的时长 ms */
    public static get scaleGameMs(): number { return this._scaleGameSec * 1000; }

    /**
     * 重置 timeScale
     */
    public static reset(): void {
        this._puaseCount = 0;
        this._timeScale = 1;
        this._lastTimeScale = 1;
    }

    /**
     * 暂停游戏 timeScale设置为0 （需要与gameResume成对调用）
     */
    public static gamePause(): void {
        this._puaseCount++;
        if (this._puaseCount > 1) {
            return;
        }
        this._lastTimeScale = this._timeScale;
        this._timeScale = 0;
        c2f.event.emit(EventMessage.GAME_PAUSE);
    }

    /**
     * 恢复游戏 （需要与gamePause成对调用）
     */
    public static gameResume(): void {
        if (this._puaseCount <= 0) {
            return;
        }
        this._puaseCount--;
        if (this._puaseCount <= 0) {
            this._timeScale = this._lastTimeScale;
            c2f.event.emit(EventMessage.GAME_RESUME);
        }
    }

    public static onDestroy() {
        TWEEN.removeAll();
        SCALE_TWEEN.removeAll();
    }

    public static update(dt: number): void {
        GameTimer._realDt = dt;
        GameTimer._gameSec += dt;
        GameTimer._scaleGameSec += GameTimer.scaleDt;

        TWEEN.update(GameTimer.gameMs);
        // scaleDt大于0时更新SCALE_TWEEN
        if (GameTimer.scaleDt > 0) {
            SCALE_TWEEN.update(GameTimer.scaleGameMs);
        }
    }
}
