import { UIPControlBase } from './../../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../../c2f-framework/define/C2FEnum';
import  SeatPrepareItemModel from './SeatPrepareItemModel';
import  SeatPrepareItemView from './SeatPrepareItemView';
import { GameConsts } from '../../../../../Script/game/GameConsts';

const { ccclass, property } = cc._decorator;
@ccclass
export default class SeatPrepareItem extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_SeatPrepareItem';

    public model: SeatPrepareItemModel = undefined;
    public view: SeatPrepareItemView = undefined;
    private headList: cc.SpriteAtlas = null;


    public  reflash(data:msg.GameUserItem) {
        if (!data) {
            this.view.head.active =false
            this.view.state.active =false
            this.view.userName.active =false
        }else{
            this.setHeadSprite(data.plyer.headId)
            this.view.state.active =data.isReady
            this.view.userName.active =true
            this.view.userNameLabel.string =data.plyer.nickName
        }
    }

    private setHeadSprite(headId:number) {
        if (this.headList) {
            this.view.headSprite.spriteFrame = this.headList.getSpriteFrame(headId + "");
        }else{
            c2f.res.load(GameConsts.Bundle.nhwc, 'image/head/head', cc.SpriteAtlas, (err: Error | null, res: cc.SpriteAtlas) => {
                this.headList = res;
                this.setHeadSprite(headId)
            })
        }
    }


}