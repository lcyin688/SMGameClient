
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/GameCaches.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9HYW1lQ2FjaGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhOzs7QUFJYjtJQU1JO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFrQixpQkFBRzthQUFyQjtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUNsQixVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7YUFDdEM7WUFDRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxhQUFhO0lBQ04sZ0NBQVcsR0FBbEIsVUFBbUIsR0FBbUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7SUFDTixrQ0FBYSxHQUFwQjtRQUNJLEtBQWdCLFVBQVMsRUFBVCxLQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVMsRUFBRTtZQUF0QixJQUFJLEdBQUcsU0FBQTtZQUNSLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGFBQWE7SUFDTixrQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBaENjLGVBQUksR0FBZSxJQUFJLENBQUM7SUFrQzNDLGlCQUFDO0NBbkNELEFBbUNDLElBQUE7QUFuQ1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5ri45oiP57yT5a2Y5pWw5o2uICovXG5cbmltcG9ydCB7IENhY2hlRGF0YSB9IGZyb20gXCIuL2Jhc2UvQ2FjaGVEYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2FjaGVzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBHYW1lQ2FjaGVzID0gbnVsbDtcblxuICAgIC8qKiDphY3nva7nvJPlrZjvvJrpgIDlh7rnmbvlvZXlkI7pnIDph43nva4gKi9cbiAgICBwcml2YXRlIGNzdnM6IENhY2hlRGF0YTxhbnk+W107XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNzdnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKSB7XG4gICAgICAgIGlmICghR2FtZUNhY2hlcy5faW5zKSB7XG4gICAgICAgICAgICBHYW1lQ2FjaGVzLl9pbnMgPSBuZXcgR2FtZUNhY2hlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lQ2FjaGVzLl9pbnM7XG4gICAgfVxuXG4gICAgLyoqIOa3u+WKoOmFjee9rue8k+WtmCAqL1xuICAgIHB1YmxpYyBhZGRDc3ZDYWNoZShvbmU6IENhY2hlRGF0YTxhbnk+KSB7XG4gICAgICAgIHRoaXMuY3N2cy5wdXNoKG9uZSk7XG4gICAgfVxuXG4gICAgLyoqIOa4heepuumFjee9rue8k+WtmCAqL1xuICAgIHB1YmxpYyBjbGVhckNzdkNhY2hlKCkge1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5jc3ZzKSB7XG4gICAgICAgICAgICBvbmUuY2xlYXIoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3N2cyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgICBwdWJsaWMgY2xlYXJBbGxDYWNoZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckNzdkNhY2hlKCk7XG4gICAgfVxuXG59Il19