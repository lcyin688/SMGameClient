"use strict";
cc._RF.push(module, '999d1iq0Y9IBKtM7FNbxGw6', 'BoxGameView');
// boxGame/script/BoxGameView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxGameView = exports.BoxGameUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var BoxGameUI;
(function (BoxGameUI) {
    BoxGameUI[BoxGameUI["Start"] = 4000] = "Start";
    BoxGameUI[BoxGameUI["YngyMain"] = 4001] = "YngyMain";
    BoxGameUI[BoxGameUI["BoxGameMain"] = 4002] = "BoxGameMain";
    BoxGameUI[BoxGameUI["BoxGameResult"] = 4003] = "BoxGameResult";
    BoxGameUI[BoxGameUI["BoxTime"] = 4004] = "BoxTime";
})(BoxGameUI = exports.BoxGameUI || (exports.BoxGameUI = {}));
/** 打开界面方式的配置数据 */
exports.BoxGameView = (_a = {},
    //description:
    _a[BoxGameUI.BoxGameMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxGameMain", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
    //description:
    _a[BoxGameUI.BoxGameResult] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxGameResult", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
    //description:
    _a[BoxGameUI.BoxTime] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_BoxTime", bundle: GameConsts_1.GameConsts.Bundle.boxGame },
    _a);

cc._RF.pop();