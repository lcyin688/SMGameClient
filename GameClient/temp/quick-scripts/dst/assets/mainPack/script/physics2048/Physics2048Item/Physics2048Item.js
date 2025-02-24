
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Item/Physics2048Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhJdGVtL1BoeXNpY3MyMDQ4SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBc0Y7QUFHdEYsMkRBQXVEO0FBQ3ZELDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QyxtQ0FBYztJQUEzRDtRQUFBLHFFQTJIQztRQTFIRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLG1CQUFtQixDQUFDO1FBRWpDLFdBQUssR0FBeUIsU0FBUyxDQUFDO1FBQ3hDLFVBQUksR0FBd0IsU0FBUyxDQUFDO1FBQ3JDLFlBQU0sR0FBRyxLQUFLLENBQUE7O0lBcUgxQixDQUFDO3dCQTNIb0IsZUFBZTtJQVd4Qiw4QkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztJQUdNLGlDQUFPLEdBQWQsVUFBZSxJQUE4QixFQUFFLFFBQWtCO1FBQzdELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFTyxr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LENBQUMsQ0FBQTtTQUMvQztJQUNMLENBQUM7O0lBekhnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMkhuQztJQUFELHNCQUFDO0NBM0hELEFBMkhDLENBM0g0QywrQkFBYyxHQTJIMUQ7a0JBM0hvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlJztcbmltcG9ydCBQaHlzaWNzMjA0OEl0ZW1Nb2RlbCBmcm9tICcuL1BoeXNpY3MyMDQ4SXRlbU1vZGVsJztcbmltcG9ydCBQaHlzaWNzMjA0OEl0ZW1WaWV3IGZyb20gJy4vUGh5c2ljczIwNDhJdGVtVmlldyc7XG5pbXBvcnQgeyBVSVBhIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvVUlQYXJhbSc7XG5pbXBvcnQgeyBVSUhlbHBlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJSGVscGVyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHlzaWNzMjA0OEl0ZW0gZXh0ZW5kcyBVSVBDb250cm9sQmFzZSB7XG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdQX1BoeXNpY3MyMDQ4SXRlbSc7XG5cbiAgICBwdWJsaWMgbW9kZWw6IFBoeXNpY3MyMDQ4SXRlbU1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBQaHlzaWNzMjA0OEl0ZW1WaWV3ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaXNJbml0ID0gZmFsc2VcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5O1xuICAgIHByaXZhdGUgY29sbGlkZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcjtcblxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KVxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxuICAgICAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzZXRJbml0KGRhdGE6IFVJUGEuUGh5c2ljczIwNDhJdGVtQXJncywgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIHRoaXMubW9kZWwuaW5pdERhdGEoZGF0YSwgY2FsbEJhY2spXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoZGF0YSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRWaWV3KGRhdGE6IFVJUGEuUGh5c2ljczIwNDhJdGVtQXJncykge1xuICAgICAgICBjMmYudXRpbHMudmlldy5jaGFuZ2VTcHJpdGVGcmFtZSh0aGlzLnZpZXcuaWNvblNwcml0ZSwgZGF0YS51cmwpXG4gICAgICAgIGxldCByYWRpdXMgPSBkYXRhLnJhZGl1c1xuICAgICAgICB0aGlzLmNvbGxpZGVyLnJhZGl1cyA9IHJhZGl1c1xuICAgICAgICB0aGlzLmNvbGxpZGVyLnRhZyA9IGRhdGEudGFnXG4gICAgICAgIHRoaXMuc2V0UmlnaWRCb2R5RW5hYmxlZENvbnRhY3RMaXN0ZW5lcih0cnVlKVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHJhZGl1cyAqIDEuOCwgcmFkaXVzICogMS44KVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHVibGljIHNldFJpZ2lkQm9keUVuYWJsZWRDb250YWN0TGlzdGVuZXIoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaWRCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2V0UmlnaWRCb2R5VHlwZSh0eXBlOiBjYy5SaWdpZEJvZHlUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnJpZ2lkQm9keSkge1xuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkudHlwZSA9IHR5cGVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIGNvbGxpZGVyMTogY2MuUGh5c2ljc0NvbGxpZGVyLCBjb2xsaWRlcjI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgICAgICBpZiAoY29sbGlkZXIyLnRhZyA9PSBjb2xsaWRlcjEudGFnICYmIGNvbGxpZGVyMi50YWcgPj0gVUlQYS5QaHlzaWNzVGFnLmJsb2NrXzIpIHtcbiAgICAgICAgICAgIGlmIChjb2xsaWRlcjIubm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGNvbGxpZGVyMi5ub2RlLmdldENvbXBvbmVudChQaHlzaWNzMjA0OEl0ZW0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtMi5tb2RlbC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbTIubW9kZWwuZGF0YS50YWcgPCBVSVBhLlBoeXNpY3NUYWcuYmxvY2tfMjA0OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGNvbGxpZGVyMS5ub2RlLmdldENvbXBvbmVudChQaHlzaWNzMjA0OEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5om+5Ye65Li75Yqo56Kw5pKe55qE5a+56LGh56e75Yqo55qE5b+r55qE5piv5Li75Yqo56Kw55qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbTEucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpID4gaXRlbTIucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5Lm1hZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpdEZ1bihpdGVtMiwgaXRlbTEsIGNvbnRhY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpdEZ1bihpdGVtMSwgaXRlbTIsIGNvbnRhY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKippdGVtMSDooqvliqjnmoTpnIDopoHooqvliKDpmaRcbiAgICAgKiBpdGVtMiDkuLvliqjnmoTpnIDopoHkv53nlZlcbiAgICAgKi9cbiAgICBwcml2YXRlIGhpdEZ1bihpdGVtMTogUGh5c2ljczIwNDhJdGVtLCBpdGVtMjogUGh5c2ljczIwNDhJdGVtLCBjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCkge1xuICAgICAgICBpdGVtMS5zZXRSaWdpZEJvZHlFbmFibGVkQ29udGFjdExpc3RlbmVyKGZhbHNlKVxuICAgICAgICBpdGVtMS5jb2xsaWRlci5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgaXRlbTEubm9kZS5ncm91cCA9IFwidWlcIlxuICAgICAgICBpZiAoaXRlbTEucmlnaWRCb2R5KSB7XG4gICAgICAgICAgICBpdGVtMS5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87IC8vIOa4hemZpOe6v+aAp+mAn+W6plxuICAgICAgICAgICAgaXRlbTEucmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDAgLy8g5riF6Zmk6KeS6YCf5bqmXG4gICAgICAgICAgICBpdGVtMS5yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMFxuICAgICAgICAgICAgaXRlbTEucmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDBcbiAgICAgICAgICAgIGl0ZW0xLnJpZ2lkQm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtRGF0YSA9IFVJUGEuUGh5c2ljczIwNDhJdGVtRGF0YVtpdGVtMi5tb2RlbC5kYXRhLnRhZ11cbiAgICAgICAgY2MudHdlZW4oaXRlbTEubm9kZSkudG8oMC4yLCB7IHNjYWxlOiAwLjEgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtMS5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICBpdGVtMS5ub2RlLmRlc3Ryb3koKVxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGl0ZW0yLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eS55IDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JjZSA9IG5ldyBjYy5WZWMyKDAsIC0wLjIpXG4gICAgICAgICAgICAgICAgaXRlbTIucmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihmb3JjZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheVdpblNvdW5kKGl0ZW1EYXRhLnRhZylcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICBsZXQgY2FsbEZ1biA9ICgpID0+IHtcbiAgICAgICAgICAgIC8v5aaC5p6c5Yiw5LqGMjA0OCDlsLHpnIDopoHmtojpmaTmjolcbiAgICAgICAgICAgIGlmIChpdGVtMi5tb2RlbC5kYXRhLnRhZyA9PSBVSVBhLlBoeXNpY3NUYWcuYmxvY2tfMjA0OCkge1xuICAgICAgICAgICAgICAgIGl0ZW0yLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpdGVtMi5ub2RlLmRlc3Ryb3koKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGl0ZW0yLnNldEluaXQoaXRlbURhdGEsIHRoaXMubW9kZWwuY2JGdW4pXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmNiRnVuKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNiRnVuKGl0ZW1EYXRhLCBpdGVtMi5ub2RlLCBjYWxsRnVuKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcGxheVdpblNvdW5kKHRhZzogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0YWcgPT0gVUlQYS5QaHlzaWNzVGFnLmJsb2NrXzEwMjQpIHtcbiAgICAgICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoXCJwaHlzaWNzMjA0OGJpbmdnZVN1cGVyXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IFVJUGEuUGh5c2ljc1RhZy5ibG9ja181MTIpIHtcbiAgICAgICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoXCJwaHlzaWNzMjA0OGJpbmdnZUJhblwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSBVSVBhLlBoeXNpY3NUYWcuYmxvY2tfMjU2KSB7XG4gICAgICAgICAgICBVSUhlbHBlci5wbGF5RWZmZWN0KFwicGh5c2ljczIwNDhiaW5nZ2VDb29sXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IFVJUGEuUGh5c2ljc1RhZy5ibG9ja18xMjgpIHtcbiAgICAgICAgICAgIFVJSGVscGVyLnBsYXlFZmZlY3QoXCJwaHlzaWNzMjA0OGJpbmdnZU5pY2VcIilcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==