import { LayerType, UIConfig } from "../../../c2f-framework/define/C2FUIDef";
import { GameConsts } from "../../../Script/game/GameConsts";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum Snake2048UI {
    Start = 6000,
    SnakLoading,
    SnakMain,
}


/** 打开界面方式的配置数据 */
export const Snake2048View: { [key: number]: UIConfig } = {

    //description:
    [Snake2048UI.SnakLoading]: { layer: LayerType.UI, prefab: "prefab/F_SnakLoading", bundle: GameConsts.Bundle.snake2048 },
    //description:
    [Snake2048UI.SnakMain]: { layer: LayerType.UI, prefab: "prefab/F_SnakMain", bundle: GameConsts.Bundle.snake2048 }, 



    
}