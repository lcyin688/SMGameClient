import { UIPa } from '../../../../Script/game/UIParam';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class ListCircularMoveModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_ListCircularMove';

    /** 中奖记录列表 */
    public recordList: UIPa.RodaHistory[] = [];
    /** 列表节点池 */
    public recordItemPool: cc.NodePool = new cc.NodePool();
    public initData() {
        this.recordList = [];
        for (let i = 0; i < 10; i++) {
            let item: UIPa.RodaHistory = {
                /** 玩家名称 */
                name: '秋豆麻袋' + i,
                /** 头像 */
                avatar: 'head_girl6',
                /** 性别 */
                gender: 0,
                /** 获奖金额 */
                award: 888,
                /** 获奖时间 */
                time: 1748936071,
                /** 获奖金额 */
                award_64: 888,
                /** 获奖时间 */
                time_64: 1748936071,
            };
            this.recordList.push(item);
        }
    }
}
