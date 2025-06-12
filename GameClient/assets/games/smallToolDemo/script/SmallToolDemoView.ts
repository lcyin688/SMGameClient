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
    VipMain,
    MonthSignRule,
    wheelGame,
    QrCodeDemo,
    TogContainerDemo,
}

/** 打开界面方式的配置数据 */
export const SmallToolDemoView: { [key: number]: UIConfig } = {
    //description:
    [SmallToolDemoUI.WheelGame]: { layer: LayerType.UI, prefab: 'prefab/F_WheelGame', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.ListCircularMove]: { layer: LayerType.PopUp, prefab: 'prefab/V_ListCircularMove', bundle: GameConsts.Bundle.smallToolDemo, useBlurScn: true },
    //description:
    [SmallToolDemoUI.JoinUs]: { layer: LayerType.PopUp, prefab: 'prefab/joinus/V_JoinUs', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.Turntable]: { layer: LayerType.PopUp, prefab: 'prefab/turntable/V_Turntable', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.SwitchLang]: { layer: LayerType.PopUp, prefab: 'prefab/switchLang/V_SwitchLang', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.SevenDayMain]: { layer: LayerType.PopUp, prefab: 'prefab/sevenDay/V_SevenDayMain', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.SevenDaySignItemOne]: { layer: LayerType.PopUp, prefab: 'prefab/sevenDay/SevenDaySignItemOne', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.VipMain]: { layer: LayerType.PopUp, prefab: 'prefab/vipinfo/V_VipMain', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.MonthSignRule]: { layer: LayerType.PopUp, prefab: 'prefab/V_MonthSignRule', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.wheelGame]: { layer: LayerType.UI, prefab: 'prefab/F_wheelGame', bundle: GameConsts.Bundle.smallToolDemo },
    //description:
    [SmallToolDemoUI.QrCodeDemo]: { layer: LayerType.PopUp, prefab: 'prefab/V_QrCodeDemo', bundle: GameConsts.Bundle.smallToolDemo }, 
    //description:
    [SmallToolDemoUI.TogContainerDemo]: { layer: LayerType.PopUp, prefab: "prefab/V_TogContainerDemo", bundle: GameConsts.Bundle.smallToolDemo }, }