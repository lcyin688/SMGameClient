"use strict";
cc._RF.push(module, '8db3aUYrT1D6qtuye+OPCIj', 'GameCaches');
// entrance/script/game/GameCaches.ts

"use strict";
/** 游戏缓存数据 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCaches = void 0;
var GameCaches = /** @class */ (function () {
    function GameCaches() {
        this.csvs = [];
    }
    Object.defineProperty(GameCaches, "ins", {
        get: function () {
            if (!GameCaches._ins) {
                GameCaches._ins = new GameCaches();
            }
            return GameCaches._ins;
        },
        enumerable: false,
        configurable: true
    });
    /** 添加配置缓存 */
    GameCaches.prototype.addCsvCache = function (one) {
        this.csvs.push(one);
    };
    /** 清空配置缓存 */
    GameCaches.prototype.clearCsvCache = function () {
        for (var _i = 0, _a = this.csvs; _i < _a.length; _i++) {
            var one = _a[_i];
            one.clear();
        }
        this.csvs = [];
    };
    /** 清空所有缓存 */
    GameCaches.prototype.clearAllCache = function () {
        this.clearCsvCache();
    };
    GameCaches._ins = null;
    return GameCaches;
}());
exports.GameCaches = GameCaches;

cc._RF.pop();