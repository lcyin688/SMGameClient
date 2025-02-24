"use strict";
cc._RF.push(module, 'fcbe5z4PSFGdqa3crlmbIkd', 'GameTimer');
// c2f-framework/core/timer/GameTimer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTimer = void 0;
var C2FTween_1 = require("./C2FTween");
var EventDefine_1 = require("../event/EventDefine");
var GameTimer = /** @class */ (function () {
    function GameTimer() {
    }
    Object.defineProperty(GameTimer, "timeScale", {
        /**
         * dt缩放倍数，1为正常速度，0为暂停
         * - 需要特别注意此值的修改和暂停、恢复如果同时多处调用产生的效果是否正确
         */
        get: function () { return this._timeScale; },
        set: function (v) {
            if (v === this._timeScale || v < 0) {
                return;
            }
            this._timeScale = v;
            c2f.event.emit(EventDefine_1.EventMessage.TIME_SCALE);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "realDt", {
        /** 距上一帧间隔的真实时间 */
        get: function () { return this._realDt; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "scaleDt", {
        /** 距上一帧间隔经过timeScale缩放的时间 */
        get: function () { return this._realDt * this._timeScale; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "gameSec", {
        /** 游戏启动经过的时长 s */
        get: function () { return this._gameSec; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "gameMs", {
        /** 游戏启动经过的时长 ms */
        get: function () { return this._gameSec * 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "scaleGameSec", {
        /** 游戏经过缩放的时长 s */
        get: function () { return this._scaleGameSec; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTimer, "scaleGameMs", {
        /** 游戏经过缩放的时长 ms */
        get: function () { return this._scaleGameSec * 1000; },
        enumerable: false,
        configurable: true
    });
    /**
     * 重置 timeScale
     */
    GameTimer.reset = function () {
        this._puaseCount = 0;
        this._timeScale = 1;
        this._lastTimeScale = 1;
    };
    /**
     * 暂停游戏 timeScale设置为0 （需要与gameResume成对调用）
     */
    GameTimer.gamePause = function () {
        this._puaseCount++;
        if (this._puaseCount > 1) {
            return;
        }
        this._lastTimeScale = this._timeScale;
        this._timeScale = 0;
        c2f.event.emit(EventDefine_1.EventMessage.GAME_PAUSE);
    };
    /**
     * 恢复游戏 （需要与gamePause成对调用）
     */
    GameTimer.gameResume = function () {
        if (this._puaseCount <= 0) {
            return;
        }
        this._puaseCount--;
        if (this._puaseCount <= 0) {
            this._timeScale = this._lastTimeScale;
            c2f.event.emit(EventDefine_1.EventMessage.GAME_RESUME);
        }
    };
    GameTimer.onDestroy = function () {
        C2FTween_1.TWEEN.removeAll();
        C2FTween_1.SCALE_TWEEN.removeAll();
    };
    GameTimer.update = function (dt) {
        GameTimer._realDt = dt;
        GameTimer._gameSec += dt;
        GameTimer._scaleGameSec += GameTimer.scaleDt;
        C2FTween_1.TWEEN.update(GameTimer.gameMs);
        // scaleDt大于0时更新SCALE_TWEEN
        if (GameTimer.scaleDt > 0) {
            C2FTween_1.SCALE_TWEEN.update(GameTimer.scaleGameMs);
        }
    };
    /** 游戏调用暂停的计数 */
    GameTimer._puaseCount = 0;
    GameTimer._lastTimeScale = 1;
    GameTimer._timeScale = 1;
    GameTimer._realDt = 0;
    GameTimer._gameSec = 0;
    GameTimer._scaleGameSec = 0;
    return GameTimer;
}());
exports.GameTimer = GameTimer;

cc._RF.pop();