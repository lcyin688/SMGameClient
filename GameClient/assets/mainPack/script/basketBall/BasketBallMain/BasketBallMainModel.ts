import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BasketBallMainModel extends UIModelBase {
    /** 预制名 给实例调用 */
    public prefabName = 'F_BasketBallMain';
    public ballItem: cc.Prefab;
    public score: number;

    public initData() {
        this.score = 0


    }



}