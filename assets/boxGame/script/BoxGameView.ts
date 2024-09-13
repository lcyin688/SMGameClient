import { GameConsts } from "../../Script/game/GameConsts";
import { LayerType, UIConfig } from "../../c2f-framework/define/C2FUIDef";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum BoxGameUI {
    Start = 4000,
    YngyMain,
    BoxGameMain,
}


/** 打开界面方式的配置数据 */
export const BoxGameView: { [key: number]: UIConfig } = {
    //description:
    [BoxGameUI.BoxGameMain]: { layer: LayerType.UI, prefab: "prefab/F_BoxGameMain", bundle: GameConsts.Bundle.boxGame },
}