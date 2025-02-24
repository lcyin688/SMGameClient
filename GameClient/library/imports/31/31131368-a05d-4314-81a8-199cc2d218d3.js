"use strict";
cc._RF.push(module, '31131NooF1DFIGoGZzC0hjT', 'Physics2048Item');
// mainPack/script/physics2048/Physics2048Item/Physics2048Item.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIPControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIPControlBase");
var UIParam_1 = require("../../../../Script/game/UIParam");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048Item = /** @class */ (function (_super) {
    __extends(Physics2048Item, _super);
    function Physics2048Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_Physics2048Item';
        _this.model = undefined;
        _this.view = undefined;
        _this.isInit = false;
        return _this;
    }
    Physics2048Item_1 = Physics2048Item;
    Physics2048Item.prototype.init = function () {
        if (!this.isInit) {
            this.rigidBody = this.node.getComponent(cc.RigidBody);
            this.collider = this.node.getComponent(cc.PhysicsCircleCollider);
            this.isInit = true;
        }
    };
    Physics2048Item.prototype.setInit = function (data, callBack) {
        this.init();
        this.model.initData(data, callBack);
        this.initView(data);
    };
    Physics2048Item.prototype.initView = function (data) {
        var _this = this;
        c2f.utils.view.changeSpriteFrame(this.view.iconSprite, data.url);
        var radius = data.radius;
        this.collider.radius = radius;
        this.collider.tag = data.tag;
        this.setRigidBodyEnabledContactListener(true);
        this.node.active = false;
        this.scheduleOnce(function () {
            _this.node.setContentSize(radius * 1.8, radius * 1.8);
            _this.node.active = true;
        });
    };
    Physics2048Item.prototype.setRigidBodyEnabledContactListener = function (state) {
        if (this.rigidBody) {
            this.rigidBody.enabledContactListener = state;
        }
    };
    Physics2048Item.prototype.setRigidBodyType = function (type) {
        if (this.rigidBody) {
            this.rigidBody.type = type;
        }
    };
    Physics2048Item.prototype.onBeginContact = function (contact, collider1, collider2) {
        if (collider2.tag == collider1.tag && collider2.tag >= UIParam_1.UIPa.PhysicsTag.block_2) {
            if (collider2.node) {
                var item2 = collider2.node.getComponent(Physics2048Item_1);
                if (item2) {
                    if (item2.model.data) {
                        if (item2.model.data.tag < UIParam_1.UIPa.PhysicsTag.block_2048) {
                            var item1 = collider1.node.getComponent(Physics2048Item_1);
                            if (item1) {
                                //找出主动碰撞的对象移动的快的是主动碰的
                                contact.disabled = true;
                                if (item1.rigidBody.linearVelocity.mag() > item2.rigidBody.linearVelocity.mag()) {
                                    this.hitFun(item2, item1, contact);
                                }
                                else {
                                    this.hitFun(item1, item2, contact);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    /**item1 被动的需要被删除
     * item2 主动的需要保留
     */
    Physics2048Item.prototype.hitFun = function (item1, item2, contact) {
        var _this = this;
        item1.setRigidBodyEnabledContactListener(false);
        item1.collider.enabled = false;
        item1.node.group = "ui";
        if (item1.rigidBody) {
            item1.rigidBody.linearVelocity = cc.Vec2.ZERO; // 清除线性速度
            item1.rigidBody.angularVelocity = 0; // 清除角速度
            item1.rigidBody.gravityScale = 0;
            item1.rigidBody.angularVelocity = 0;
            item1.rigidBody.fixedRotation = true;
        }
        var itemData = UIParam_1.UIPa.Physics2048ItemData[item2.model.data.tag];
        cc.tween(item1.node).to(0.2, { scale: 0.1 }).call(function () {
            item1.node.active = false;
            item1.node.destroy();
            contact.disabled = false;
            if (item2.rigidBody.linearVelocity.y <= 0) {
                var force = new cc.Vec2(0, -0.2);
                item2.rigidBody.applyForceToCenter(force, true);
            }
            _this.playWinSound(itemData.tag);
        }).start();
        var callFun = function () {
            //如果到了2048 就需要消除掉
            if (item2.model.data.tag == UIParam_1.UIPa.PhysicsTag.block_2048) {
                item2.node.active = false;
                item2.node.destroy();
            }
        };
        item2.setInit(itemData, this.model.cbFun);
        if (this.model.cbFun) {
            this.model.cbFun(itemData, item2.node, callFun);
        }
    };
    Physics2048Item.prototype.playWinSound = function (tag) {
        if (tag == UIParam_1.UIPa.PhysicsTag.block_1024) {
            UIHelper_1.UIHelper.playEffect("physics2048binggeSuper");
        }
        else if (tag == UIParam_1.UIPa.PhysicsTag.block_512) {
            UIHelper_1.UIHelper.playEffect("physics2048binggeBan");
        }
        else if (tag == UIParam_1.UIPa.PhysicsTag.block_256) {
            UIHelper_1.UIHelper.playEffect("physics2048binggeCool");
        }
        else if (tag == UIParam_1.UIPa.PhysicsTag.block_128) {
            UIHelper_1.UIHelper.playEffect("physics2048binggeNice");
        }
    };
    var Physics2048Item_1;
    Physics2048Item = Physics2048Item_1 = __decorate([
        ccclass
    ], Physics2048Item);
    return Physics2048Item;
}(UIPControlBase_1.UIPControlBase));
exports.default = Physics2048Item;

cc._RF.pop();