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
    private iconSprite: cc.Sprite = undefined
    private isInit = false
    private rigidBody: cc.RigidBody;
    private collider: cc.PhysicsCircleCollider;

    private init() {
        if (!this.isInit) {
            this.iconSprite = this.node.getComponent(cc.Sprite)
            this.rigidBody = this.node.getComponent(cc.RigidBody)
            this.collider = this.node.getComponent(cc.PhysicsCircleCollider)
            this.isInit = true
        }
    }


    public setInit(data: UIPa.Physics2048ItemArgs, callBack: Function) {
        this.init()
        this.model.initData(data, callBack)
        this.initView(data)
    }

    private initView(data: UIPa.Physics2048ItemArgs) {
        c2f.utils.view.changeSpriteFrame(this.iconSprite, data.url)
        this.collider.radius = data.width / 2
        this.collider.tag = data.tag
        this.setRigidBodyEnabledContactListener(true)

    }
    public setRigidBodyEnabledContactListener(state: boolean) {
        if (this.rigidBody) {
            this.rigidBody.enabledContactListener = state
        }
    }
    public setRigidBodyType(type: cc.RigidBodyType) {
        if (this.rigidBody) {
            this.rigidBody.type = type
        }
    }


    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (selfCollider.tag == otherCollider.tag && selfCollider.tag >= UIPa.PhysicsTag.block_2) {
            console.log("onBeginContact 真高兴我们碰到一起了 002")
            otherCollider.node.active = false
            this.scheduleOnce(() => {
                otherCollider.node.destroy()
            })
            //变大后回调回去
            if (selfCollider.node) {
                let item = selfCollider.node.getComponent(Physics2048Item)
                if (item) {
                    if (item.model.data) {
                        //播放个爆炸效果
                        if (item.model.data.tag < UIPa.PhysicsTag.block_2048) {
                            let itemData = UIPa.Physics2048ItemData[item.model.data.tag]
                            item.setInit(itemData, this.model.cbFun)
                            if (this.model.cbFun) {
                                this.model.cbFun(itemData)
                            }
                        }
                    }
                }
            }


        }
    }


}