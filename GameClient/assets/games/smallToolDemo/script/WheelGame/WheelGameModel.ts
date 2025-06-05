import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class WheelGameModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_WheelGame';

    public groupList = ['all', 'myFavorite', 'hot', 'hundred', 'slots', 'poker', 'casual', 'new'];
    /** 当前分组下标 */
    public curGroupIndex: number = 0;
    public isShowWithDrawer: boolean = false;
    public isShowShop: boolean = false;
}
