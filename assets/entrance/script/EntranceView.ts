import { GameConsts } from "../../Script/game/GameConsts";
import { LayerType, UIConfig } from "../../c2f-framework/define/C2FUIDef";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum EntranceUI {
    Start = 2000,
    GameLogo,
    GameLogin,
    GameLoading,
    NoPlatLogin,
    ReloginDialog,
    PromptSimple,
    SvrList,
    LongTxtDialog,
    UpdateRes,
    GameResUpdate,
    SoundSet,
}

/** 打开界面方式的配置数据 */
export const EntranceView: { [key: number]: UIConfig } = {
    //description:
    [EntranceUI.GameLogo]: { layer: LayerType.UI, prefab: "prefab/GameLogo", bundle: GameConsts.Bundle.entrance },
    //description:
    [EntranceUI.GameLogin]: { layer: LayerType.UI, prefab: "prefab/GameLogin", bundle: GameConsts.Bundle.entrance },
    //description:
    [EntranceUI.GameLoading]: { layer: LayerType.UI, prefab: "prefab/GameLoading", bundle: GameConsts.Bundle.entrance },
    //description:
    [EntranceUI.NoPlatLogin]: { layer: LayerType.Dialog, prefab: "prefab/NoPlatLogin", bundle: GameConsts.Bundle.entrance },
    //description:
    [EntranceUI.ReloginDialog]: { layer: LayerType.System, prefab: "prefab/common/V_ReloginDialog", bundle: GameConsts.Bundle.entrance },
    //description:
    [EntranceUI.PromptSimple]: { layer: LayerType.PopUp, prefab: "prefab/common/V_PromptSimple", bundle: GameConsts.Bundle.entrance },

 
    //description:
    [EntranceUI.LongTxtDialog]: { layer: LayerType.PopUp, prefab: "prefab/common/V_LongTxtDialog", bundle: GameConsts.Bundle.entrance },  
    //description:
    [EntranceUI.UpdateRes]: { layer: LayerType.UI, prefab: "prefab/F_UpdateRes", bundle: GameConsts.Bundle.entrance },  
    //description:
    [EntranceUI.GameResUpdate]: { layer: LayerType.PopUp, prefab: "prefab/GameResUpdate", bundle: GameConsts.Bundle.entrance },   
    //description:
    [EntranceUI.SoundSet]: { layer: LayerType.PopUp, prefab: "prefab/V_SoundSet", bundle: GameConsts.Bundle.entrance }, 
}