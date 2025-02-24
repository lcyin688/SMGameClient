import { GameConsts } from '../../../../Script/game/GameConsts';
import BasketBallMain from '../BasketBallMain/BasketBallMain';
import { UIModelBase } from './../../../../c2f-framework/gui/layer/UIModelBase';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BallModel extends UIModelBase {

    /** 预制名 给实例调用 */
    public prefabName = 'P_Ball';
    public began: cc.Vec2;
    public ended: cc.Vec2;
    /**发射速度 */
    public emitSpeed: number
    /**重力速度 */
    public gravity: number
    /** 缩放系数*/
    public scale: number
    /**生成篮球显示动画时间 */
    public showTime: number
    /**球弹力 */
    public maxXSpeed: number

    public status: GameConsts.TouchStatus;
    //当前速度
    public currentVerSpeed: number;
    public target: cc.Vec2;
    public currentHorSpeed: number;
    public shadow: any;
    public ballStatus: GameConsts.BallStatus;
    public valid: boolean;

    public basket: BasketBallMain
    public hitIn: any;

    public initData(basket: BasketBallMain) {
        this.basket = basket
        this.emitSpeed = 3000
        this.gravity = 4500
        this.scale = 0.6
        this.showTime = 0.3
        this.maxXSpeed = 5000
    }


}