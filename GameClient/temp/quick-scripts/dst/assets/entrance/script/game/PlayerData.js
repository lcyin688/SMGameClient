
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '201e8tu755HQoDkulIo02/3', 'PlayerData');
// entrance/script/game/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
var PublicData_1 = require("./plrBase/PublicData");
var LoginData_1 = require("./login/LoginData");
/** 玩家数据总领：具体模块数据 */
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        /** 配置加载成功 */
        this._cfgLoaded = false;
        this.dispatchs = [];
    }
    Object.defineProperty(PlayerData, "ins", {
        get: function () {
            if (!PlayerData._ins) {
                PlayerData._ins = new PlayerData();
            }
            return PlayerData._ins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "cfgLoaded", {
        get: function () {
            return this._cfgLoaded;
        },
        set: function (value) {
            this._cfgLoaded = value;
            if (value && this.beforeLoadCfg) {
                for (var key in this.beforeLoadCfg) {
                    this.dispatchMsg(Number(key), this.beforeLoadCfg[key]);
                }
                this.beforeLoadCfg = null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "public", {
        /** 公用数据 */
        get: function () {
            return this._public;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    /** 初始化 */
    PlayerData.prototype.initPlayer = function () {
    };
    /** 清空模块数据 */
    PlayerData.prototype.clearModules = function () {
        for (var _i = 0, _a = this.dispatchs; _i < _a.length; _i++) {
            var one = _a[_i];
            if (one.reset) {
                one.reset();
            }
            if (one.release) {
                one.release();
            }
        }
        this._public = null;
        this._rank = null;
        this.dispatchs = [];
    };
    /** 分发网络消息 */
    PlayerData.prototype.handleMsg = function (op, data) {
        if (this.cfgLoaded) {
            this.dispatchMsg(op, data);
        }
        else {
            this.beforeLoadCfg = this.beforeLoadCfg || {};
            this.beforeLoadCfg[op] = data;
        }
    };
    PlayerData.prototype.dispatchMsg = function (op, data) {
    };
    PlayerData.prototype.initModules = function () {
        this.dispatchs = [];
        this._public = new PublicData_1.PublicData();
        this.dispatchs.push(this._public);
        this._rank = new LoginData_1.LoginData();
        this.dispatchs.push(this._rank);
    };
    PlayerData._ins = null;
    return PlayerData;
}());
exports.PlayerData = PlayerData;
szg.player = PlayerData.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9QbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCwrQ0FBOEM7QUFHOUMsb0JBQW9CO0FBQ3BCO0lBNENJO1FBakNBLGFBQWE7UUFDTCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBaUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBNUNELHNCQUFXLGlCQUFHO2FBQWQ7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDbEIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsaUNBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDN0IsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzFEO2dCQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1FBQ0wsQ0FBQzs7O09BVEE7SUFlRCxzQkFBVyw4QkFBTTtRQURqQixXQUFXO2FBQ1g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw0QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBV0QsVUFBVTtJQUNILCtCQUFVLEdBQWpCO0lBQ0EsQ0FBQztJQUlELGFBQWE7SUFDTCxpQ0FBWSxHQUFwQjtRQUNJLEtBQWdCLFVBQWMsRUFBZCxLQUFBLElBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUEzQixJQUFJLEdBQUcsU0FBQTtZQUNSLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDWCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtZQUNELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDYixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDaEI7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhO0lBQ04sOEJBQVMsR0FBaEIsVUFBaUIsRUFBVSxFQUFFLElBQVM7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLEVBQVUsRUFBRSxJQUFTO0lBRXpDLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF4Rk0sZUFBSSxHQUFlLElBQUksQ0FBQztJQXlGbkMsaUJBQUM7Q0ExRkQsQUEwRkMsSUFBQTtBQTFGWSxnQ0FBVTtBQWtHdkIsR0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHVibGljRGF0YSB9IGZyb20gXCIuL3BsckJhc2UvUHVibGljRGF0YVwiO1xuaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSBcIi4vbG9naW4vTG9naW5EYXRhXCI7XG5cblxuLyoqIOeOqeWutuaVsOaNruaAu+mihu+8muWFt+S9k+aooeWdl+aVsOaNriAqL1xuZXhwb3J0IGNsYXNzIFBsYXllckRhdGEge1xuICAgIHN0YXRpYyBfaW5zOiBQbGF5ZXJEYXRhID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IGlucygpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLl9pbnMpIHtcbiAgICAgICAgICAgIFBsYXllckRhdGEuX2lucyA9IG5ldyBQbGF5ZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllckRhdGEuX2lucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGJlZm9yZUxvYWRDZmc6IHsgW2tleTogbnVtYmVyXTogYW55IH07XG5cbiAgICAvKiog6YWN572u5Yqg6L295oiQ5YqfICovXG4gICAgcHJpdmF0ZSBfY2ZnTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGdldCBjZmdMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZmdMb2FkZWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY2ZnTG9hZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2NmZ0xvYWRlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5iZWZvcmVMb2FkQ2ZnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5iZWZvcmVMb2FkQ2ZnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaE1zZyhOdW1iZXIoa2V5KSwgdGhpcy5iZWZvcmVMb2FkQ2ZnW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZWZvcmVMb2FkQ2ZnID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqIOWFrOeUqOaVsOaNriAqL1xuICAgIHByaXZhdGUgX3B1YmxpYzogUHVibGljRGF0YTtcbiAgICAvKiog5YWs55So5pWw5o2uICovXG4gICAgcHVibGljIGdldCBwdWJsaWMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdWJsaWM7XG4gICAgfVxuICAgIC8qKiDmjpLooYzmppwgKi9cbiAgICBwcml2YXRlIF9yYW5rOiBMb2dpbkRhdGE7XG4gICAgcHVibGljIGdldCByYW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgICB9XG5cblxuXG4gICAgLyoqIOa2iOaBr+WIhuWPkeWIl+ihqCAqL1xuICAgIHByaXZhdGUgZGlzcGF0Y2hzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNocyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiDliJ3lp4vljJYgKi9cbiAgICBwdWJsaWMgaW5pdFBsYXllcigpIHtcbiAgICB9XG5cblxuXG4gICAgLyoqIOa4heepuuaooeWdl+aVsOaNriAqL1xuICAgIHByaXZhdGUgY2xlYXJNb2R1bGVzKCkge1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5kaXNwYXRjaHMpIHtcbiAgICAgICAgICAgIGlmIChvbmUucmVzZXQpIHtcbiAgICAgICAgICAgICAgICBvbmUucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbmUucmVsZWFzZSkge1xuICAgICAgICAgICAgICAgIG9uZS5yZWxlYXNlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wdWJsaWMgPSBudWxsO1xuICAgICAgICB0aGlzLl9yYW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaHMgPSBbXTtcbiAgICB9XG5cbiAgICAvKiog5YiG5Y+R572R57uc5raI5oGvICovXG4gICAgcHVibGljIGhhbmRsZU1zZyhvcDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZnTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoTXNnKG9wLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTG9hZENmZyA9IHRoaXMuYmVmb3JlTG9hZENmZyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTG9hZENmZ1tvcF0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaE1zZyhvcDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0TW9kdWxlcygpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaHMgPSBbXTtcbiAgICAgICAgdGhpcy5fcHVibGljID0gbmV3IFB1YmxpY0RhdGEoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaHMucHVzaCh0aGlzLl9wdWJsaWMpO1xuICAgICAgICB0aGlzLl9yYW5rID0gbmV3IExvZ2luRGF0YSgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNocy5wdXNoKHRoaXMuX3JhbmspO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJU1pHIHtcbiAgICAgICAgcGxheWVyOiBQbGF5ZXJEYXRhO1xuICAgIH1cbn1cblxuc3pnLnBsYXllciA9IFBsYXllckRhdGEuaW5zO1xuZXhwb3J0IHsgfTsiXX0=