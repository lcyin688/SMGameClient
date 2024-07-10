import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import Physics2048ItemModel from './Physics2048ItemModel';
import Physics2048ItemView from './Physics2048ItemView';
import { UIPa } from '../../../../Script/game/UIParam';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048Item extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';

    public model: Physics2048ItemModel = undefined;
    public view: Physics2048ItemView = undefined;

    public setInit(data: UIPa.Physics2048ItemArgs) {
        this.model.initData(data)
        this.initView(data)
    }

    private initView(data: UIPa.Physics2048ItemArgs) {
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url)
        this.view
    }

}