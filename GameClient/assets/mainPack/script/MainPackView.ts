import { GameConsts } from '../../Script/game/GameConsts';
import { LayerType, UIConfig } from '../../c2f-framework/define/C2FUIDef';

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum MainPackUI {
    Start = 3000,
    DesStarMain,
    MapCreateMain,
    BasketBallMain,
    YngyMain,
}

/** 打开界面方式的配置数据 */
export const MainPackView: { [key: number]: UIConfig } = {
    //description:
    [MainPackUI.MapCreateMain]: { layer: LayerType.UI, prefab: 'prefab/mapCreate/F_MapCreateMain', bundle: GameConsts.Bundle.mainPack },
    //description:
    [MainPackUI.BasketBallMain]: { layer: LayerType.UI, prefab: 'prefab/basketBall/F_BasketBallMain', bundle: GameConsts.Bundle.mainPack },
    //description:
    [MainPackUI.YngyMain]: { layer: LayerType.UI, prefab: 'prefab/F_YngyMain', bundle: GameConsts.Bundle.mainPack },
};
