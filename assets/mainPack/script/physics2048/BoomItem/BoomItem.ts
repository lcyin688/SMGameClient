import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import { C2FEnum } from './../../../../c2f-framework/define/C2FEnum';
import BoomItemModel from './BoomItemModel';
import BoomItemView from './BoomItemView';
import { UIPa } from '../../../../Script/game/UIParam';
import { UIHelper } from '../../../../Script/game/UIHelper';

const { ccclass, property } = cc._decorator;
@ccclass
export default class BoomItem extends UIPControlBase {

    /** 预制名 给实例调用 */
    public prefabName = 'P_BoomItem';

    public model: BoomItemModel = undefined;
    public view: BoomItemView = undefined;
    public playBoom(data: UIPa.Physics2048ItemArgs, cbFun: Function) {
        let dis = data.width / 2
        this.moveAni1(dis)
        this.scheduleOnce(() => {
            cbFun()
            this.moveAni2(dis)
        }, 0.5)
        this.scheduleOnce(() => {
            this.node.destroy()
        }, 1)
    }

    private moveAni1(dis: number) {
        let positions = UIHelper.getCirclePointsArr(dis, dis + 300, new cc.Vec2(0, 0), 15)
        for (let i = 1; i < positions.length; i++) {
            let bubble = cc.instantiate(this.view.move1) as cc.Node;
            bubble.parent = this.node
            bubble.active = true
            bubble.setPosition(positions[i][0])
            let rodomScale = Math.random() * 0.5 + 0.5
            bubble.setScale(rodomScale, rodomScale)
            cc.tween(bubble).to(0.5, { opacity: 20, scale: 1, position: positions[i][1] }).call((sender: Node) => {
                bubble.destroy()
            }).start()
        }
    }
    private moveAni2(dis: number) {
        let positions = UIHelper.getCirclePointsArr(dis, dis + 400, new cc.Vec2(0, 0), 20)
        for (let i = 1; i < positions.length; i++) {
            let bubble = cc.instantiate(this.view.move1) as cc.Node;
            bubble.parent = this.node
            bubble.active = true
            bubble.setPosition(positions[i][0])
            let rodomScale = Math.random() * 0.5 + 0.5
            bubble.setScale(rodomScale, rodomScale)
            cc.tween(bubble).to(0.5, { opacity: 20, scale: 1, position: positions[i][1] }).call((sender: Node) => {
                bubble.destroy()
            }).start()
        }
    }


}