import { GameHelper } from '../../../Script/game/GameHelper';
import { PopViewParams } from '../../../c2f-framework/define/C2FUIDef';
import { EntranceUI } from '../EntranceView';
import { EntraDef } from '../game/EntranceDefine';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameLogoModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'GameLogo';



}