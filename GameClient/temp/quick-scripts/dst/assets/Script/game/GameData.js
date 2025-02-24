
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3095504f2dHu7TITMLqXBoV', 'GameData');
// Script/game/GameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameData = void 0;
var GameData;
(function (GameData) {
    /** 传入SDK的玩家信息 */
    var PlrInfo2Sdk = /** @class */ (function () {
        function PlrInfo2Sdk() {
        }
        return PlrInfo2Sdk;
    }());
    GameData.PlrInfo2Sdk = PlrInfo2Sdk;
    /** 玩家设置信息(头像/头像框/称号) */
    var PlayerSet = /** @class */ (function () {
        function PlayerSet() {
            this.reset();
        }
        PlayerSet.prototype.reset = function () {
            this.head = 0;
            this.hframe = 0;
            this.title = 0;
        };
        return PlayerSet;
    }());
    GameData.PlayerSet = PlayerSet;
})(GameData = exports.GameData || (exports.GameData = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZ2FtZS9HYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFpQixRQUFRLENBcUN4QjtBQXJDRCxXQUFpQixRQUFRO0lBRXJCLGlCQUFpQjtJQUNqQjtRQUFBO1FBZUEsQ0FBQztRQUFELGtCQUFDO0lBQUQsQ0FmQSxBQWVDLElBQUE7SUFmWSxvQkFBVyxjQWV2QixDQUFBO0lBSUQsd0JBQXdCO0lBQ3hCO1FBSUk7WUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUNNLHlCQUFLLEdBQVo7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDTCxnQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksa0JBQVMsWUFZckIsQ0FBQTtBQUVMLENBQUMsRUFyQ2dCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBcUN4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgR2FtZURhdGEge1xuXG4gICAgLyoqIOS8oOWFpVNES+eahOeOqeWutuS/oeaBryAqL1xuICAgIGV4cG9ydCBjbGFzcyBQbHJJbmZvMlNkayB7XG4gICAgICAgIHJvbGVJZDogc3RyaW5nO1xuICAgICAgICByb2xlTmFtZTogc3RyaW5nO1xuICAgICAgICByb2xlTGV2ZWw6IG51bWJlcjtcbiAgICAgICAgc2VydmVySWQ6IG51bWJlcjtcbiAgICAgICAgc2VydmVyTmFtZTogc3RyaW5nO1xuICAgICAgICB2aXBMZXZlbDogbnVtYmVyO1xuICAgICAgICB1bmlvbk5hbWU6IHN0cmluZztcbiAgICAgICAgbW9uZXk6IG51bWJlcjtcbiAgICAgICAgY3JlYXRlVGltZTogbnVtYmVyO1xuICAgICAgICBhcmVhSWQ6IG51bWJlcjtcbiAgICAgICAgcmVjaGFyZ2VQb2ludDogbnVtYmVyO1xuICAgICAgICBldmVudE5hbWU6IHN0cmluZztcbiAgICAgICAgcG93ZXI6IG51bWJlcjtcbiAgICAgICAgc3VtQmlsbDogbnVtYmVyO1xuICAgIH1cblxuXG5cbiAgICAvKiog546p5a626K6+572u5L+h5oGvKOWktOWDjy/lpLTlg4/moYYv56ew5Y+3KSAqL1xuICAgIGV4cG9ydCBjbGFzcyBQbGF5ZXJTZXQge1xuICAgICAgICBoZWFkOiBudW1iZXI7XG4gICAgICAgIGhmcmFtZTogbnVtYmVyO1xuICAgICAgICB0aXRsZTogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5oZnJhbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==