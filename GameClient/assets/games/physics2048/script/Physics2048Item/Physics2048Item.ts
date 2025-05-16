import { UIPControlBase } from './../../../../c2f-framework/gui/layer/UIPControlBase';
import Physics2048ItemModel from './Physics2048ItemModel';
import Physics2048ItemView from './Physics2048ItemView';
import { UIPa } from '../../../../Script/game/UIParam';
import { UIHelper } from '../../../../Script/game/UIHelper';
import { Physics2048Cfg } from '../Physics2048Cfg';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Physics2048Item extends UIPControlBase {
    /** 预制名 给实例调用 */
    public prefabName = 'P_Physics2048Item';

    public model: Physics2048ItemModel = undefined;
    public view: Physics2048ItemView = undefined;
    private isInit = false;
    private rigidBody: cc.RigidBody;
    private collider: cc.PhysicsCircleCollider;

    private init() {
        if (!this.isInit) {
            this.rigidBody = this.node.getComponent(cc.RigidBody);
            this.collider = this.node.getComponent(cc.PhysicsCircleCollider);
            this.isInit = true;
            this.node.group = Physics2048Cfg.Physics2048TagCfg.Group7;
        }
    }

    public setInit(data: Physics2048Cfg.Physics2048ItemArgs, callBack: Function) {
        this.init();
        this.model.initData(data, callBack);
        this.initView(data);
    }

    private initView(data: Physics2048Cfg.Physics2048ItemArgs) {
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url);
        let radius = data.radius;
        this.collider.radius = radius;
        this.collider.tag = data.tag;
        this.setRigidBodyEnabledContactListener(true);
        this.node.active = false;
        this.scheduleOnce(() => {
            this.node.setContentSize(radius * 1.8, radius * 1.8);
            this.node.active = true;
        });
    }
    public setRigidBodyEnabledContactListener(state: boolean) {
        if (this.rigidBody) {
            this.rigidBody.enabledContactListener = state;
        }
    }
    public setRigidBodyType(type: cc.RigidBodyType) {
        if (this.rigidBody) {
            this.rigidBody.type = type;
        }
    }

    onBeginContact(contact: cc.PhysicsContact, collider1: cc.PhysicsCollider, collider2: cc.PhysicsCollider) {
        if (collider2.tag == collider1.tag && collider2.tag >= Physics2048Cfg.PhysicsTag.block_2) {
            if (collider2.node) {
                let item2 = collider2.node.getComponent(Physics2048Item);
                if (item2) {
                    if (item2.model.data) {
                        if (item2.model.data.tag < Physics2048Cfg.PhysicsTag.block_2048) {
                            let item1 = collider1.node.getComponent(Physics2048Item);
                            if (item1) {
                                //找出主动碰撞的对象移动的快的是主动碰的
                                contact.disabled = true;
                                if (item1.rigidBody.linearVelocity.mag() > item2.rigidBody.linearVelocity.mag()) {
                                    this.hitFun(item2, item1, contact);
                                } else {
                                    this.hitFun(item1, item2, contact);
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
    private hitFun(item1: Physics2048Item, item2: Physics2048Item, contact: cc.PhysicsContact) {
        item1.setRigidBodyEnabledContactListener(false);
        item1.collider.enabled = false;
        item1.node.group = Physics2048Cfg.Physics2048TagCfg.Group3;
        if (item1.rigidBody) {
            item1.rigidBody.linearVelocity = cc.Vec2.ZERO; // 清除线性速度
            item1.rigidBody.angularVelocity = 0; // 清除角速度
            item1.rigidBody.gravityScale = 0;
            item1.rigidBody.angularVelocity = 0;
            item1.rigidBody.fixedRotation = true;
        }
        let itemData = Physics2048Cfg.Physics2048ItemData[item2.model.data.tag];
        cc.tween(item1.node)
            .to(0.2, { scale: 0.1 })
            .call(() => {
                item1.node.active = false;
                item1.node.destroy();
                contact.disabled = false;
                if (item2.rigidBody.linearVelocity.y <= 0) {
                    const force = new cc.Vec2(0, -0.2);
                    item2.rigidBody.applyForceToCenter(force, true);
                }
                this.playWinSound(itemData.tag);
            })
            .start();
        let callFun = () => {
            //如果到了2048 就需要消除掉
            if (item2.model.data.tag == Physics2048Cfg.PhysicsTag.block_2048) {
                item2.node.active = false;
                item2.node.destroy();
            }
        };
        item2.setInit(itemData, this.model.cbFun);
        if (this.model.cbFun) {
            this.model.cbFun(itemData, item2.node, callFun);
        }
    }
    private playWinSound(tag: number) {
        if (tag == Physics2048Cfg.PhysicsTag.block_1024) {
            UIHelper.playEffect('physics2048binggeSuper');
        } else if (tag == Physics2048Cfg.PhysicsTag.block_512) {
            UIHelper.playEffect('physics2048binggeBan');
        } else if (tag == Physics2048Cfg.PhysicsTag.block_256) {
            UIHelper.playEffect('physics2048binggeCool');
        } else if (tag == Physics2048Cfg.PhysicsTag.block_128) {
            UIHelper.playEffect('physics2048binggeNice');
        }
    }
}
