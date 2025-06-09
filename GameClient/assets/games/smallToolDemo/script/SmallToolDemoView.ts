import { LayerType, UIConfig } from '../../../c2f-framework/define/C2FUIDef';
import { GameConsts } from '../../../Script/game/GameConsts';

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum SmallToolDemoUI {
    Start = 6000,
    WheelGame,
    ListCircularMove,
    JoinUs,
    Turntable,
    SwitchLang,
    SevenDayMain,
    SevenDaySignItemOne,
}

/** 打开界面方式的配置数据 */
export const SmallToolDemoView: { [key: number]: UIConfig } = {
    //description:
    [SmallToolDemoUI.WheelGame]: { layer: LayerType.UI, prefab: 'prefab/F_WheelGame', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.ListCircularMove]: { layer: LayerType.PopUp, prefab: 'prefab/V_ListCircularMove', bundle: GameConsts.Bundle.smallToolDemo, noBlurScn: true },
    //description:
    [SmallToolDemoUI.JoinUs]: { layer: LayerType.PopUp, prefab: 'prefab/joinus/V_JoinUs', bundle: GameConsts.Bundle.smallToolDemo, noBlurScn: true },
    //description:
    [SmallToolDemoUI.Turntable]: { layer: LayerType.PopUp, prefab: 'prefab/turntable/V_Turntable', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.SwitchLang]: { layer: LayerType.PopUp, prefab: 'prefab/switchLang/V_SwitchLang', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.SevenDayMain]: { layer: LayerType.PopUp, prefab: 'prefab/sevenDay/V_SevenDayMain', bundle: GameConsts.Bundle.smallToolDemo, noBlurScn: true },
    //description:
    [SmallToolDemoUI.SevenDaySignItemOne]: { layer: LayerType.PopUp, prefab: 'prefab/sevenDay/SevenDaySignItemOne', bundle: GameConsts.Bundle.smallToolDemo, noBlurScn: true },
};
