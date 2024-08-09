import { GameConsts } from '../../../Script/game/GameConsts';
import { UIPa } from '../../../Script/game/UIParam';
import { YngyCfg } from '../YngyCfg';
import { UIModelBase } from './../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class YngyMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_YngyMain';
    public mapData<number,> : null
    public initDataByLv(lv: number) {
        let pad = GameConsts.YngyConst.ItemWidthHeight

        let count = 0;
        YngyCfg[lv - 1]
        for (let index = 0; index < array.length; index++) {
            const element = array[index];

        }

    }

}