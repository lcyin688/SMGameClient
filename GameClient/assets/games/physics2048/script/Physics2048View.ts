import { LayerType, UIConfig } from '../../../c2f-framework/define/C2FUIDef';
import { GameConsts } from '../../../Script/game/GameConsts';

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum Physics2048UI {
    Start = 6000,
    Physics2048Main,
}

/** 打开界面方式的配置数据 */
export const Physics2048View: { [key: number]: UIConfig } = {
    //description:
    [Physics2048UI.Physics2048Main]: { layer: LayerType.UI, prefab: 'prefab/F_Physics2048Main', bundle: GameConsts.Bundle.physics2048 },
};
