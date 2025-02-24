"use strict";
cc._RF.push(module, '719b98nuZxPnpseNcye4aNd', 'CyclicScrollBG');
// c2f-framework/component/common/CyclicScrollBG.ts

"use strict";
/** 循环滚动页面:为了便于运算，约定如下：
 * 1、子节点为两个,尺寸一致
 * 2、子节点宽度(高度)要大于屏幕宽度(高度)
 * */
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
exports.CyclicScrollBG = void 0;
var UIPrefabBase_1 = require("../../gui/layer/UIPrefabBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CyclicScrollBG = /** @class */ (function (_super) {
    __extends(CyclicScrollBG, _super);
    function CyclicScrollBG() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vertical = false;
        _this.speed = 0;
        _this.highPerform = false;
        //--------------UI对象-------------    
        /** 标题 */
        _this.spBg1 = null;
        /** 图标 */
        _this.spBg2 = null;
        //---------------------------------
        //背景面板：移动背景是移动此节点
        _this.bgPanel = null;
        //子页面大小
        _this.subSize = null;
        //节点初始位置
        _this.initPos = cc.v3(0, 0, 0);
        //刷新帧率
        _this.refreshFR = 1 / 10;
        //刷新间隔
        _this.refreshInterval = _this.refreshFR;
        //缓存对象：防止一直重复创建
        _this.referSub = { node: null, posL: cc.v3(0, 0, 0) };
        _this.otherSub = { node: null, posL: cc.v3(0, 0, 0) };
        return _this;
    }
    CyclicScrollBG.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CyclicScrollBG.prototype.onDestory = function () {
        this.initPos = null;
        this.referSub = null;
        this.otherSub = null;
    };
    CyclicScrollBG.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.spBg1 = this.get('_spBg1_');
        this.spBg2 = this.get('_spBg2_');
    };
    CyclicScrollBG.prototype.start = function () {
        this.bgPanel = this.node;
        this.subSize = this.spBg1.getContentSize();
        if (this.highPerform) {
            if (this.vertical) {
                //TODO:
            }
            else {
                var szView = cc.view.getVisibleSize();
                var curPosW = c2f.utils.node.getNodeWorldPosition(this.bgPanel);
                var oriPos = cc.Vec2.ZERO.clone();
                var pos2Panel = cc.Vec3.ZERO.clone();
                if (this.speed > 0) {
                    this.bgPanel.setAnchorPoint(0, this.bgPanel.anchorY);
                    for (var i = 0; i < this.bgPanel.children.length; i++) {
                        var one = this.bgPanel.children[i];
                        c2f.utils.node.getNodePosition(one, oriPos);
                        var posX = i * this.subSize.width + one.anchorX * this.subSize.width;
                        one.setPosition(posX, oriPos.y, 0);
                    }
                    this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(szView.width - 2 * this.subSize.width, curPosW.y, 0), pos2Panel);
                    this.bgPanel.setPosition(pos2Panel);
                }
                else {
                    this.bgPanel.setAnchorPoint(1, this.bgPanel.anchorY);
                    for (var i = 0; i < this.bgPanel.children.length; i++) {
                        var one = this.bgPanel.children[i];
                        c2f.utils.node.getNodePosition(one, oriPos);
                        var posX = -i * this.subSize.width - (1 - one.anchorX) * this.subSize.width;
                        one.setPosition(posX, oriPos.y, 0);
                    }
                    this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(2 * this.subSize.width, curPosW.y, 0), pos2Panel);
                    this.bgPanel.setPosition(pos2Panel);
                }
                this.bgPanel.getPosition(this.initPos);
            }
        }
    };
    CyclicScrollBG.prototype.update = function (dt) {
        if (!this.spBg1 || !this.spBg2) {
            return;
        }
        this.refreshInterval -= dt;
        if (this.refreshInterval > 0) {
            return;
        }
        this.refreshInterval += this.refreshFR;
        var offset = this.speed * this.refreshFR;
        this.moveBg(offset);
    };
    CyclicScrollBG.prototype.moveBg = function (offset) {
        //移动背景
        if (this.vertical) {
            this.moveVertical(offset);
        }
        else {
            this.moveHorizontal(offset);
        }
    };
    CyclicScrollBG.prototype.moveVertical = function (offset) {
        c2f.utils.node.offestNodePos(this.bgPanel, 0, offset, 0);
        var posTmp1 = c2f.utils.node.getFreeVecTmp();
        var posTmp2 = c2f.utils.node.getFreeVecTmp();
        this.spBg1.getPosition(posTmp1);
        this.spBg2.getPosition(posTmp2);
        if (offset > 0) {
            if (posTmp2.y > posTmp1.y) {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);
                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            }
            else {
                this.referSub.node = this.spBg1;
                this.referSub.posL.set(posTmp1);
                this.otherSub.node = this.spBg2;
                this.otherSub.posL.set(posTmp2);
            }
        }
        if (c2f.utils.view.nodeIsOutByWidth(this.referSub.node)) {
            this.referSub.node.setPosition(this.otherSub.posL);
            this.otherSub.node.setPosition(this.referSub.posL);
            c2f.utils.node.offestNodePos(this.bgPanel, 0, this.subSize.height * (offset > 0 ? -1 : 1), 0);
        }
        c2f.utils.node.releaseVecTmp(posTmp1);
        c2f.utils.node.releaseVecTmp(posTmp2);
    };
    CyclicScrollBG.prototype.moveHorizontal = function (offset) {
        c2f.utils.node.offestNodePos(this.bgPanel, offset, 0, 0);
        var posTmp1 = c2f.utils.node.getFreeVecTmp();
        var posTmp2 = c2f.utils.node.getFreeVecTmp();
        this.spBg1.getPosition(posTmp1);
        this.spBg2.getPosition(posTmp2);
        if (offset > 0) {
            if (posTmp2.x > posTmp1.x) {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);
                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            }
            else {
                this.referSub.node = this.spBg1;
                this.referSub.posL.set(posTmp1);
                this.otherSub.node = this.spBg2;
                this.otherSub.posL.set(posTmp2);
            }
        }
        else {
            if (posTmp1.x < posTmp2.x) {
                this.referSub.node = this.spBg1;
                this.referSub.posL.set(posTmp1);
                this.otherSub.node = this.spBg2;
                this.otherSub.posL.set(posTmp2);
            }
            else {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);
                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            }
        }
        if (this.highPerform) {
            var posTmp3 = c2f.utils.node.getNodePosition(this.bgPanel);
            var offsetX = posTmp3.x - this.initPos.x;
            if (Math.abs(offsetX) >= this.subSize.width) {
                this.referSub.node.setPosition(this.otherSub.posL);
                this.otherSub.node.setPosition(this.referSub.posL);
                c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (offset > 0 ? -1 : 1), 0, 0);
            }
        }
        else {
            if (c2f.utils.view.nodeIsOutByWidth(this.referSub.node)) {
                this.referSub.node.setPosition(this.otherSub.posL);
                this.otherSub.node.setPosition(this.referSub.posL);
                c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (offset > 0 ? -1 : 1), 0, 0);
            }
        }
        c2f.utils.node.releaseVecTmp(posTmp1);
        c2f.utils.node.releaseVecTmp(posTmp2);
    };
    __decorate([
        property({ serializable: true })
    ], CyclicScrollBG.prototype, "vertical", void 0);
    __decorate([
        property({ serializable: true })
    ], CyclicScrollBG.prototype, "speed", void 0);
    __decorate([
        property({ serializable: true, tooltip: "高性能模式:该模式下会修改自动修改节点锚点" })
    ], CyclicScrollBG.prototype, "highPerform", void 0);
    CyclicScrollBG = __decorate([
        ccclass
    ], CyclicScrollBG);
    return CyclicScrollBG;
}(UIPrefabBase_1.UIPrefabBase));
exports.CyclicScrollBG = CyclicScrollBG;

cc._RF.pop();