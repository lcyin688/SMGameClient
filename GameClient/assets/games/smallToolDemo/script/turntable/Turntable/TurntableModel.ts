import { UIModelBase } from './../../../../../c2f-framework/gui/layer/UIModelBase';
import { UIPa } from '../../../../../Script/game/UIParam';
import TurntableItem from '../TurntableItem/TurntableItem';
const { ccclass, property } = cc._decorator;
@ccclass
export default class TurntableModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'V_Turntable';
    /** 是否旋转中 */
    public isRunning: false;
    /**
     * 转盘选项item配置
     */
    public rodaConfigMap: Map<number, UIPa.RodaConf> = new Map();
    /**
     * 转盘item组件存储
     */
    public turnTableItemMaps: Map<number, TurntableItem> = new Map();

    public rewardIndex = 1;

    public initData() {
        let list = [
            {
                id: 1,
                award: 888,
            },
            {
                id: 2,
                award: 1888,
            },
            {
                id: 3,
                award: 3888,
            },
            {
                id: 4,
                award: 8888,
            },
            {
                id: 5,
                award: 18888,
            },
            {
                id: 6,
                award: 88888,
            },
            {
                id: 7,
                award: 188888,
            },
            {
                id: 8,
                award: 888888,
            },
            {
                id: 9,
                award: 1888888,
            },
            {
                id: 10,
                award: 2888888,
            },
            {
                id: 11,
                award: 3888888,
            },
            {
                id: 12,
                award: 4888888,
            },
        ];
        for (const item of list) {
            this.rodaConfigMap.set(item.id, item);
        }
    }
}
