import { GameConsts } from "../../Script/game/GameConsts";
import { LayerType, UIConfig } from "../../c2f-framework/define/C2FUIDef";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum GameYngyUI {
    Start = 4000,
    YngyMain,
}


/** 打开界面方式的配置数据 */
export const GameYngyView: { [key: number]: UIConfig } = {

    //description:
    [GameYngyUI.YngyMain]: { layer: LayerType.UI, prefab: "prefab/F_YngyMain", bundle: GameConsts.Bundle.gameYngy },
}