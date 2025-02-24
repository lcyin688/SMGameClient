
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/timer/GameTimer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvdGltZXIvR2FtZVRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFnRDtBQUNoRCxvREFBb0Q7QUFJcEQ7SUFBQTtJQXlGQSxDQUFDO0lBOUVHLHNCQUFrQixzQkFBUztRQUozQjs7O1dBR0c7YUFDSCxjQUF3QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2pFLFVBQTRCLENBQVM7WUFDakMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQVBnRTtJQVdqRSxzQkFBa0IsbUJBQU07UUFEeEIsa0JBQWtCO2FBQ2xCLGNBQXFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTNELHNCQUFrQixvQkFBTztRQUR6Qiw2QkFBNkI7YUFDN0IsY0FBc0MsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUs5RSxzQkFBa0Isb0JBQU87UUFEekIsa0JBQWtCO2FBQ2xCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTdELHNCQUFrQixtQkFBTTtRQUR4QixtQkFBbUI7YUFDbkIsY0FBcUMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRW5FLHNCQUFrQix5QkFBWTtRQUQ5QixrQkFBa0I7YUFDbEIsY0FBMkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFdkUsc0JBQWtCLHdCQUFXO1FBRDdCLG1CQUFtQjthQUNuQixjQUEwQyxPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFN0U7O09BRUc7SUFDVyxlQUFLLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ1csbUJBQVMsR0FBdkI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMEJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDVyxvQkFBVSxHQUF4QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRWEsbUJBQVMsR0FBdkI7UUFDSSxnQkFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLHNCQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVhLGdCQUFNLEdBQXBCLFVBQXFCLEVBQVU7UUFDM0IsU0FBUyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdkIsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDekIsU0FBUyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRTdDLGdCQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQiwyQkFBMkI7UUFDM0IsSUFBSSxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN2QixzQkFBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBdEZELGdCQUFnQjtJQUNELHFCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRXhCLHdCQUFjLEdBQVcsQ0FBQyxDQUFDO0lBQzNCLG9CQUFVLEdBQVcsQ0FBQyxDQUFDO0lBY3ZCLGlCQUFPLEdBQVcsQ0FBQyxDQUFDO0lBTXBCLGtCQUFRLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLHVCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBOEQ3QyxnQkFBQztDQXpGRCxBQXlGQyxJQUFBO0FBekZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0NBTEVfVFdFRU4sIFRXRUVOIH0gZnJvbSBcIi4vQzJGVHdlZW5cIjtcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gXCIuLi9ldmVudC9FdmVudERlZmluZVwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIEdhbWVUaW1lciB7XG5cbiAgICAvKiog5ri45oiP6LCD55So5pqC5YGc55qE6K6h5pWwICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3B1YXNlQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfbGFzdFRpbWVTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHN0YXRpYyBfdGltZVNjYWxlOiBudW1iZXIgPSAxO1xuICAgIC8qKiBcbiAgICAgKiBkdOe8qeaUvuWAjeaVsO+8jDHkuLrmraPluLjpgJ/luqbvvIww5Li65pqC5YGcXG4gICAgICogLSDpnIDopoHnibnliKvms6jmhI/mraTlgLznmoTkv67mlLnlkozmmoLlgZzjgIHmgaLlpI3lpoLmnpzlkIzml7blpJrlpITosIPnlKjkuqfnlJ/nmoTmlYjmnpzmmK/lkKbmraPnoa5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCB0aW1lU2NhbGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RpbWVTY2FsZTsgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRpbWVTY2FsZSh2OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHYgPT09IHRoaXMuX3RpbWVTY2FsZSB8fCB2IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RpbWVTY2FsZSA9IHY7XG4gICAgICAgIGMyZi5ldmVudC5lbWl0KEV2ZW50TWVzc2FnZS5USU1FX1NDQUxFKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfcmVhbER0OiBudW1iZXIgPSAwO1xuICAgIC8qKiDot53kuIrkuIDluKfpl7TpmpTnmoTnnJ/lrp7ml7bpl7QgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCByZWFsRHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3JlYWxEdDsgfVxuICAgIC8qKiDot53kuIrkuIDluKfpl7TpmpTnu4/ov4d0aW1lU2NhbGXnvKnmlL7nmoTml7bpl7QgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY2FsZUR0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9yZWFsRHQgKiB0aGlzLl90aW1lU2NhbGU7IH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9nYW1lU2VjOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIF9zY2FsZUdhbWVTZWM6IG51bWJlciA9IDA7XG4gICAgLyoqIOa4uOaIj+WQr+WKqOe7j+i/h+eahOaXtumVvyBzICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2FtZVNlYygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fZ2FtZVNlYzsgfVxuICAgIC8qKiDmuLjmiI/lkK/liqjnu4/ov4fnmoTml7bplb8gbXMgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnYW1lTXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2dhbWVTZWMgKiAxMDAwOyB9XG4gICAgLyoqIOa4uOaIj+e7j+i/h+e8qeaUvueahOaXtumVvyBzICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2NhbGVHYW1lU2VjKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zY2FsZUdhbWVTZWM7IH1cbiAgICAvKiog5ri45oiP57uP6L+H57yp5pS+55qE5pe26ZW/IG1zICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2NhbGVHYW1lTXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NjYWxlR2FtZVNlYyAqIDEwMDA7IH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9riB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wdWFzZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVTY2FsZSA9IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pqC5YGc5ri45oiPIHRpbWVTY2FsZeiuvue9ruS4ujAg77yI6ZyA6KaB5LiOZ2FtZVJlc3VtZeaIkOWvueiwg+eUqO+8iVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZVBhdXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wdWFzZUNvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLl9wdWFzZUNvdW50ID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lU2NhbGUgPSB0aGlzLl90aW1lU2NhbGU7XG4gICAgICAgIHRoaXMuX3RpbWVTY2FsZSA9IDA7XG4gICAgICAgIGMyZi5ldmVudC5lbWl0KEV2ZW50TWVzc2FnZS5HQU1FX1BBVVNFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI8g77yI6ZyA6KaB5LiOZ2FtZVBhdXNl5oiQ5a+56LCD55So77yJXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lUmVzdW1lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fcHVhc2VDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHVhc2VDb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5fcHVhc2VDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lU2NhbGUgPSB0aGlzLl9sYXN0VGltZVNjYWxlO1xuICAgICAgICAgICAgYzJmLmV2ZW50LmVtaXQoRXZlbnRNZXNzYWdlLkdBTUVfUkVTVU1FKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgb25EZXN0cm95KCkge1xuICAgICAgICBUV0VFTi5yZW1vdmVBbGwoKTtcbiAgICAgICAgU0NBTEVfVFdFRU4ucmVtb3ZlQWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBHYW1lVGltZXIuX3JlYWxEdCA9IGR0O1xuICAgICAgICBHYW1lVGltZXIuX2dhbWVTZWMgKz0gZHQ7XG4gICAgICAgIEdhbWVUaW1lci5fc2NhbGVHYW1lU2VjICs9IEdhbWVUaW1lci5zY2FsZUR0O1xuXG4gICAgICAgIFRXRUVOLnVwZGF0ZShHYW1lVGltZXIuZ2FtZU1zKTtcbiAgICAgICAgLy8gc2NhbGVEdOWkp+S6jjDml7bmm7TmlrBTQ0FMRV9UV0VFTlxuICAgICAgICBpZiAoR2FtZVRpbWVyLnNjYWxlRHQgPiAwKSB7XG4gICAgICAgICAgICBTQ0FMRV9UV0VFTi51cGRhdGUoR2FtZVRpbWVyLnNjYWxlR2FtZU1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==