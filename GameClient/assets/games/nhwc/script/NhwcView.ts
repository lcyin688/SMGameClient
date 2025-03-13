import { LayerType, UIConfig } from "../../../c2f-framework/define/C2FUIDef";
import { GameConsts } from "../../../Script/game/GameConsts";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum NhwcUI {
    Start = 4000,
    NhwcLogin,
    NhwcRegister,
    NhwcHall,
}


/** 打开界面方式的配置数据 */
export const NhwcView: { [key: number]: UIConfig } = {
    //description:
    [NhwcUI.NhwcLogin]: { layer: LayerType.UI, prefab: "prefab/F_NhwcLogin", bundle: GameConsts.Bundle.nhwc }, 
    //description:
    [NhwcUI.NhwcRegister]: { layer: LayerType.PopUp, prefab: "prefab/V_NhwcRegister", bundle: GameConsts.Bundle.nhwc },  
    //description:
    [NhwcUI.NhwcHall]: { layer: LayerType.UI, prefab: "prefab/hall/F_NhwcHall", bundle: GameConsts.Bundle.nhwc }, }