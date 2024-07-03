import { GameConsts } from '../../../../Script/game/GameConsts';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048MainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_Physics2048Main';
    /**当前最大达到的档位 */
    public curHistoryMaxLv: number = 0
    public curMaxCount: number = 0
    public visibleSize: cc.Size
    public blockItem: cc.Prefab;
    public initData() {
        this.curHistoryMaxLv = c2f.storage.getNumber(GameConsts.StorageKey.curHistory2048MaxLv)
        this.visibleSize = cc.view.getVisibleSize()
    }

    public rodomOneIndex() {
        let radomNum = c2f.random.getRandomInt(0, 11)
        let index = 0
        if (radomNum < 3) {
            index = 0
        } else if (radomNum < 5) {
            index = 1
        } else if (radomNum < 10) {
            index = 2
        } else {
            index = 3
        }
    }

}