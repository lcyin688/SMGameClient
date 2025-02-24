"use strict";
cc._RF.push(module, '534fbQjOJ9G35+vDGUWAeIc', 'MainPackView');
// mainPack/script/MainPackView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPackView = exports.MainPackUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var MainPackUI;
(function (MainPackUI) {
    MainPackUI[MainPackUI["Start"] = 3000] = "Start";
    MainPackUI[MainPackUI["DesStarMain"] = 3001] = "DesStarMain";
    MainPackUI[MainPackUI["Physics2048Main"] = 3002] = "Physics2048Main";
    MainPackUI[MainPackUI["MapCreateMain"] = 3003] = "MapCreateMain";
    MainPackUI[MainPackUI["BasketBallMain"] = 3004] = "BasketBallMain";
    MainPackUI[MainPackUI["YngyMain"] = 3005] = "YngyMain";
})(MainPackUI = exports.MainPackUI || (exports.MainPackUI = {}));
/** 打开界面方式的配置数据 */
exports.MainPackView = (_a = {},
    //description:
    _a[MainPackUI.DesStarMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/desStar/F_DesStarMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.Physics2048Main] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/physics2048/F_Physics2048Main", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.MapCreateMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/mapCreate/F_MapCreateMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.BasketBallMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/basketBall/F_BasketBallMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    //description:
    _a[MainPackUI.YngyMain] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_YngyMain", bundle: GameConsts_1.GameConsts.Bundle.mainPack },
    _a);

cc._RF.pop();