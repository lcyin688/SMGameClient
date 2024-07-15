import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
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
    private isInit = false
    private rigidBody: cc.RigidBody;
    private collider: cc.PhysicsCircleCollider;

    private init() {
        if (!this.isInit) {
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
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url)
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


    onBeginContact(contact: cc.PhysicsContact, collider1: cc.PhysicsCollider, collider2: cc.PhysicsCollider) {
        if (collider2.tag == collider1.tag && collider2.tag >= UIPa.PhysicsTag.block_2) {
            console.log("onBeginContact 真高兴我们碰到一起了 002")
            //变大后回调回去
            if (collider2.node) {
                let item2 = collider2.node.getComponent(Physics2048Item)
                if (item2) {
                    if (item2.model.data) {
                        if (item2.model.data.tag < UIPa.PhysicsTag.block_2048) {
                            let item1 = collider1.node.getComponent(Physics2048Item)
                            if (item1) {
                                //找出主动碰撞的对象移动的快的是主动碰的
                                if (item1.rigidBody.linearVelocity.mag() > item2.rigidBody.linearVelocity.mag()) {
                                    this.hitFun(item2, item1)
                                } else {
                                    this.hitFun(item1, item2)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**item1 被动的需要被删除
     * item2 主动的需要保留
     */
    private hitFun(item1: Physics2048Item, item2: Physics2048Item) {

        item1.setRigidBodyEnabledContactListener(false)
        item1.collider.enabled = false
        item1.node.group = "ui"
        if (item1.rigidBody) {
            item1.rigidBody.linearVelocity = cc.Vec2.ZERO; // 清除线性速度
            item1.rigidBody.angularVelocity = 0 // 清除角速度
            item1.rigidBody.gravityScale = 0
            item1.rigidBody.angularVelocity = 0
            item1.rigidBody.fixedRotation = true
        }

        cc.tween(item1.node).to(0.1, { scale: 0.1 }).call(() => {
            // item1.node.active = false
            // item1.node.destroy()
        }).start()

        let itemData = UIPa.Physics2048ItemData[item2.model.data.tag]
        let callFun = () => {

        }
        item2.setInit(itemData, this.model.cbFun)
        if (this.model.cbFun) {
            this.model.cbFun(itemData, this.node, callFun)
        }
    }

}