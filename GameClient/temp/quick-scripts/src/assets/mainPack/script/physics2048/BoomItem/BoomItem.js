"use strict";
cc._RF.push(module, 'bac3e+2QCREopRAED6edh84', 'BoomItem');
// mainPack/script/physics2048/BoomItem/BoomItem.ts

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
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoomItem = /** @class */ (function (_super) {
    __extends(BoomItem, _super);
    function BoomItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BoomItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BoomItem.prototype.playBoom = function (data, cbFun) {
        var _this = this;
        var dis = data.radius;
        this.moveAni1(dis);
        this.scheduleOnce(function () {
            cbFun();
            _this.moveAni2(dis);
        }, 0.2);
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 0.5);
    };
    BoomItem.prototype.moveAni1 = function (dis) {
        var positions = UIHelper_1.UIHelper.getCirclePointsArr(dis, dis + 300, new cc.Vec2(0, 0), 15);
        var _loop_1 = function (i) {
            var bubble = cc.instantiate(this_1.view.move1);
            bubble.parent = this_1.node;
            bubble.active = true;
            bubble.setPosition(positions[i][0]);
            var rodomScale = Math.random() * 0.5 + 0.5;
            bubble.setScale(rodomScale, rodomScale);
            cc.tween(bubble).to(0.3, { opacity: 20, scale: 1, position: positions[i][1] }).call(function (sender) {
                bubble.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = 1; i < positions.length; i++) {
            _loop_1(i);
        }
    };
    BoomItem.prototype.moveAni2 = function (dis) {
        var positions = UIHelper_1.UIHelper.getCirclePointsArr(dis, dis + 400, new cc.Vec2(0, 0), 20);
        var _loop_2 = function (i) {
            var bubble = cc.instantiate(this_2.view.move1);
            bubble.parent = this_2.node;
            bubble.active = true;
            bubble.setPosition(positions[i][0]);
            var rodomScale = Math.random() * 0.5 + 0.5;
            bubble.setScale(rodomScale, rodomScale);
            cc.tween(bubble).to(0.3, { opacity: 20, scale: 1, position: positions[i][1] }).call(function (sender) {
                bubble.destroy();
            }).start();
        };
        var this_2 = this;
        for (var i = 1; i < positions.length; i++) {
            _loop_2(i);
        }
    };
    BoomItem = __decorate([
        ccclass
    ], BoomItem);
    return BoomItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = BoomItem;

cc._RF.pop();