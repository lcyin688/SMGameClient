"use strict";
cc._RF.push(module, 'b8423xdyGBJVZhTgYzy8gMu', 'EntranceView');
// entrance/script/EntranceView.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntranceView = exports.EntranceUI = void 0;
var GameConsts_1 = require("../../Script/game/GameConsts");
var C2FUIDef_1 = require("../../c2f-framework/define/C2FUIDef");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var EntranceUI;
(function (EntranceUI) {
    EntranceUI[EntranceUI["Start"] = 2000] = "Start";
    EntranceUI[EntranceUI["GameLogo"] = 2001] = "GameLogo";
    EntranceUI[EntranceUI["GameLogin"] = 2002] = "GameLogin";
    EntranceUI[EntranceUI["GameLoading"] = 2003] = "GameLoading";
    EntranceUI[EntranceUI["NoPlatLogin"] = 2004] = "NoPlatLogin";
    EntranceUI[EntranceUI["ReloginDialog"] = 2005] = "ReloginDialog";
    EntranceUI[EntranceUI["PromptSimple"] = 2006] = "PromptSimple";
    EntranceUI[EntranceUI["SvrList"] = 2007] = "SvrList";
    EntranceUI[EntranceUI["LongTxtDialog"] = 2008] = "LongTxtDialog";
    EntranceUI[EntranceUI["UpdateRes"] = 2009] = "UpdateRes";
    EntranceUI[EntranceUI["GameResUpdate"] = 2010] = "GameResUpdate";
    EntranceUI[EntranceUI["SoundSet"] = 2011] = "SoundSet";
})(EntranceUI = exports.EntranceUI || (exports.EntranceUI = {}));
/** 打开界面方式的配置数据 */
exports.EntranceView = (_a = {},
    //description:
    _a[EntranceUI.GameLogo] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLogo", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameLogin] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLogin", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameLoading] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/GameLoading", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.NoPlatLogin] = { layer: C2FUIDef_1.LayerType.Dialog, prefab: "prefab/NoPlatLogin", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.ReloginDialog] = { layer: C2FUIDef_1.LayerType.System, prefab: "prefab/common/V_ReloginDialog", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.PromptSimple] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/common/V_PromptSimple", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.LongTxtDialog] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/common/V_LongTxtDialog", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.UpdateRes] = { layer: C2FUIDef_1.LayerType.UI, prefab: "prefab/F_UpdateRes", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.GameResUpdate] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/GameResUpdate", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    //description:
    _a[EntranceUI.SoundSet] = { layer: C2FUIDef_1.LayerType.PopUp, prefab: "prefab/V_SoundSet", bundle: GameConsts_1.GameConsts.Bundle.entrance },
    _a);

cc._RF.pop();