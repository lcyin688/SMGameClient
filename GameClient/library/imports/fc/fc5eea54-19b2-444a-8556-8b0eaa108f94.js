"use strict";
cc._RF.push(module, 'fc5eepUGbJESoVWiw6qEI+U', 'GameYngyView');
// gameYngy/script/GameYngyView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameYngyView = exports.GameYngyUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var GameYngyUI;
(function (GameYngyUI) {
    GameYngyUI[GameYngyUI["Start"] = 4000] = "Start";
    GameYngyUI[GameYngyUI["YngyMain"] = 4001] = "YngyMain";
})(GameYngyUI = exports.GameYngyUI || (exports.GameYngyUI = {}));
/** 打开界面方式的配置数据 */
exports.GameYngyView = (_a = {},
    //description:
    _a[GameYngyUI.YngyMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_YngyMain", bundle: GameConsts_1.GameConsts.Bundle.gameYngy },
    _a);

cc._RF.pop();