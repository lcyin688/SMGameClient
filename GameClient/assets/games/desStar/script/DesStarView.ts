import { LayerType, UIConfig } from "../../../c2f-framework/define/C2FUIDef";
import { GameConsts } from "../../../Script/game/GameConsts";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum DesStarUI {
    Start = 4000,
    DesStarMain,
}


/** 打开界面方式的配置数据 */
export const DesStarView: { [key: number]: UIConfig } = {
    //description:
    [DesStarUI.DesStarMain]: { layer: LayerType.UI, prefab: "prefab/F_DesStarMain", bundle: GameConsts.Bundle.desStar },
}