"use strict";
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