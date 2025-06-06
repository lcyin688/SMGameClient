export class Timer {
    callback: Function | null = null;

    private _elapsedTime: number = 0;

    get elapsedTime(): number {
        return this._elapsedTime;
    }

    private _step: number = -1;
    /** 触发间隔时间（秒） */
    get step(): number {
        return this._step;
    }
    set step(step: number) {
        this._step = step;                     // 每次修改时间
        this._elapsedTime = 0;                 // 逝去时间
    }

    get progress(): number {
        return this._elapsedTime / this._step;
    }

    constructor(step: number = 0) {
        this.step = step;
    }

    update(dt: number) {
        if (this.step <= 0) return false;

        this._elapsedTime += dt;

        if (this._elapsedTime >= this._step) {
            this._elapsedTime -= this._step;
            this.callback?.call(this);
            return true;
        }
        return false;
    }

    reset() {
        this._elapsedTime = 0;
    }

    stop() {
        this._elapsedTime = 0;
        this.step = -1;
    }
}