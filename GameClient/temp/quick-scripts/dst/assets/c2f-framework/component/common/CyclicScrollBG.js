
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/CyclicScrollBG.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vQ3ljbGljU2Nyb2xsQkcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7S0FHSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQTBNQztRQXZNRyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IscUNBQXFDO1FBQ3JDLFNBQVM7UUFDVCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFNBQVM7UUFDVCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLG1DQUFtQztRQUVuQyxpQkFBaUI7UUFDVCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ2hDLE9BQU87UUFDQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFFBQVE7UUFDQSxhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU07UUFDRSxlQUFTLEdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxNQUFNO1FBQ0UscUJBQWUsR0FBVyxLQUFJLENBQUMsU0FBUyxDQUFDO1FBRWpELGVBQWU7UUFDUCxjQUFRLEdBQXFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEYsY0FBUSxHQUFxQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFF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QUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF0TUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7b0RBQ1A7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7aURBQ2Y7SUFHbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO3VEQUN0QztJQVRwQixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBME0xQjtJQUFELHFCQUFDO0NBMU1ELEFBME1DLENBMU1tQywyQkFBWSxHQTBNL0M7QUExTVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5b6q546v5rua5Yqo6aG16Z2iOuS4uuS6huS+v+S6jui/kOeul++8jOe6puWumuWmguS4i++8mlxuICogMeOAgeWtkOiKgueCueS4uuS4pOS4qizlsLrlr7jkuIDoh7RcbiAqIDLjgIHlrZDoioLngrnlrr3luqYo6auY5bqmKeimgeWkp+S6juWxj+W5leWuveW6pijpq5jluqYpXG4gKiAqL1xuXG5pbXBvcnQgeyBVSVByZWZhYkJhc2UgfSBmcm9tIFwiLi4vLi4vZ3VpL2xheWVyL1VJUHJlZmFiQmFzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBDeWNsaWNTY3JvbGxCRyBleHRlbmRzIFVJUHJlZmFiQmFzZSB7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUgfSlcbiAgICB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgc2VyaWFsaXphYmxlOiB0cnVlIH0pXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoeyBzZXJpYWxpemFibGU6IHRydWUsIHRvb2x0aXA6IFwi6auY5oCn6IO95qih5byPOuivpeaooeW8j+S4i+S8muS/ruaUueiHquWKqOS/ruaUueiKgueCuemUmueCuVwiIH0pXG4gICAgaGlnaFBlcmZvcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS1VSeWvueixoS0tLS0tLS0tLS0tLS0gICAgXG4gICAgLyoqIOagh+mimCAqL1xuICAgIHNwQmcxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvKiog5Zu+5qCHICovXG4gICAgc3BCZzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvL+iDjOaZr+mdouadv++8muenu+WKqOiDjOaZr+aYr+enu+WKqOatpOiKgueCuVxuICAgIHByaXZhdGUgYmdQYW5lbDogY2MuTm9kZSA9IG51bGw7XG4gICAgLy/lrZDpobXpnaLlpKflsI9cbiAgICBwcml2YXRlIHN1YlNpemU6IGNjLlNpemUgPSBudWxsO1xuICAgIC8v6IqC54K55Yid5aeL5L2N572uXG4gICAgcHJpdmF0ZSBpbml0UG9zOiBjYy5WZWMzID0gY2MudjMoMCwgMCwgMCk7XG5cbiAgICAvL+WIt+aWsOW4p+eOh1xuICAgIHByaXZhdGUgcmVmcmVzaEZSOiBudW1iZXIgPSAxIC8gMTA7XG4gICAgLy/liLfmlrDpl7TpmpRcbiAgICBwcml2YXRlIHJlZnJlc2hJbnRlcnZhbDogbnVtYmVyID0gdGhpcy5yZWZyZXNoRlI7XG5cbiAgICAvL+e8k+WtmOWvueixoe+8mumYsuatouS4gOebtOmHjeWkjeWIm+W7ulxuICAgIHByaXZhdGUgcmVmZXJTdWI6IHsgbm9kZTogY2MuTm9kZSwgcG9zTDogY2MuVmVjMyB9ID0geyBub2RlOiBudWxsLCBwb3NMOiBjYy52MygwLCAwLCAwKSB9O1xuICAgIHByaXZhdGUgb3RoZXJTdWI6IHsgbm9kZTogY2MuTm9kZSwgcG9zTDogY2MuVmVjMyB9ID0geyBub2RlOiBudWxsLCBwb3NMOiBjYy52MygwLCAwLCAwKSB9O1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5pbml0UG9zID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWZlclN1YiA9IG51bGw7XG4gICAgICAgIHRoaXMub3RoZXJTdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLnNwQmcxID0gdGhpcy5nZXQoJ19zcEJnMV8nKTtcbiAgICAgICAgdGhpcy5zcEJnMiA9IHRoaXMuZ2V0KCdfc3BCZzJfJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJnUGFuZWwgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuc3ViU2l6ZSA9IHRoaXMuc3BCZzEuZ2V0Q29udGVudFNpemUoKTtcblxuICAgICAgICBpZiAodGhpcy5oaWdoUGVyZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICAvL1RPRE86XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzelZpZXcgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICAgICAgbGV0IGN1clBvc1cgPSBjMmYudXRpbHMubm9kZS5nZXROb2RlV29ybGRQb3NpdGlvbih0aGlzLmJnUGFuZWwpO1xuICAgICAgICAgICAgICAgIGxldCBvcmlQb3MgPSBjYy5WZWMyLlpFUk8uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zMlBhbmVsID0gY2MuVmVjMy5aRVJPLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdQYW5lbC5zZXRBbmNob3JQb2ludCgwLCB0aGlzLmJnUGFuZWwuYW5jaG9yWSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZ1BhbmVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb25lID0gdGhpcy5iZ1BhbmVsLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUuZ2V0Tm9kZVBvc2l0aW9uKG9uZSwgb3JpUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NYID0gaSAqIHRoaXMuc3ViU2l6ZS53aWR0aCArIG9uZS5hbmNob3JYICogdGhpcy5zdWJTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lLnNldFBvc2l0aW9uKHBvc1gsIG9yaVBvcy55LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnUGFuZWwucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYzKHN6Vmlldy53aWR0aCAtIDIgKiB0aGlzLnN1YlNpemUud2lkdGgsIGN1clBvc1cueSwgMCksIHBvczJQYW5lbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdQYW5lbC5zZXRQb3NpdGlvbihwb3MyUGFuZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdQYW5lbC5zZXRBbmNob3JQb2ludCgxLCB0aGlzLmJnUGFuZWwuYW5jaG9yWSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZ1BhbmVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb25lID0gdGhpcy5iZ1BhbmVsLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUuZ2V0Tm9kZVBvc2l0aW9uKG9uZSwgb3JpUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NYID0gLWkgKiB0aGlzLnN1YlNpemUud2lkdGggLSAoMSAtIG9uZS5hbmNob3JYKSAqIHRoaXMuc3ViU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZS5zZXRQb3NpdGlvbihwb3NYLCBvcmlQb3MueSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1BhbmVsLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MygyICogdGhpcy5zdWJTaXplLndpZHRoLCBjdXJQb3NXLnksIDApLCBwb3MyUGFuZWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnUGFuZWwuc2V0UG9zaXRpb24ocG9zMlBhbmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iZ1BhbmVsLmdldFBvc2l0aW9uKHRoaXMuaW5pdFBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNwQmcxIHx8ICF0aGlzLnNwQmcyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoSW50ZXJ2YWwgLT0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbCArPSB0aGlzLnJlZnJlc2hGUjtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zcGVlZCAqIHRoaXMucmVmcmVzaEZSO1xuICAgICAgICB0aGlzLm1vdmVCZyhvZmZzZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlQmcob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgLy/np7vliqjog4zmma9cbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVZlcnRpY2FsKG9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVIb3Jpem9udGFsKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVWZXJ0aWNhbChvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICBjMmYudXRpbHMubm9kZS5vZmZlc3ROb2RlUG9zKHRoaXMuYmdQYW5lbCwgMCwgb2Zmc2V0LCAwKTtcblxuICAgICAgICBsZXQgcG9zVG1wMSA9IGMyZi51dGlscy5ub2RlLmdldEZyZWVWZWNUbXAoKTtcbiAgICAgICAgbGV0IHBvc1RtcDIgPSBjMmYudXRpbHMubm9kZS5nZXRGcmVlVmVjVG1wKCk7XG5cbiAgICAgICAgdGhpcy5zcEJnMS5nZXRQb3NpdGlvbihwb3NUbXAxKTtcbiAgICAgICAgdGhpcy5zcEJnMi5nZXRQb3NpdGlvbihwb3NUbXAyKTtcblxuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgaWYgKHBvc1RtcDIueSA+IHBvc1RtcDEueSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJTdWIubm9kZSA9IHRoaXMuc3BCZzI7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5wb3NMLnNldChwb3NUbXAyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJTdWIubm9kZSA9IHRoaXMuc3BCZzE7XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5wb3NMLnNldChwb3NUbXAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5ub2RlID0gdGhpcy5zcEJnMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyU3ViLnBvc0wuc2V0KHBvc1RtcDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5ub2RlID0gdGhpcy5zcEJnMjtcbiAgICAgICAgICAgICAgICB0aGlzLm90aGVyU3ViLnBvc0wuc2V0KHBvc1RtcDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjMmYudXRpbHMudmlldy5ub2RlSXNPdXRCeVdpZHRoKHRoaXMucmVmZXJTdWIubm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJTdWIubm9kZS5zZXRQb3NpdGlvbih0aGlzLm90aGVyU3ViLnBvc0wpO1xuICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5ub2RlLnNldFBvc2l0aW9uKHRoaXMucmVmZXJTdWIucG9zTCk7XG4gICAgICAgICAgICBjMmYudXRpbHMubm9kZS5vZmZlc3ROb2RlUG9zKHRoaXMuYmdQYW5lbCwgMCwgdGhpcy5zdWJTaXplLmhlaWdodCAqIChvZmZzZXQgPiAwID8gLTEgOiAxKSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjMmYudXRpbHMubm9kZS5yZWxlYXNlVmVjVG1wKHBvc1RtcDEpO1xuICAgICAgICBjMmYudXRpbHMubm9kZS5yZWxlYXNlVmVjVG1wKHBvc1RtcDIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUhvcml6b250YWwob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgYzJmLnV0aWxzLm5vZGUub2ZmZXN0Tm9kZVBvcyh0aGlzLmJnUGFuZWwsIG9mZnNldCwgMCwgMCk7XG5cbiAgICAgICAgbGV0IHBvc1RtcDEgPSBjMmYudXRpbHMubm9kZS5nZXRGcmVlVmVjVG1wKCk7XG4gICAgICAgIGxldCBwb3NUbXAyID0gYzJmLnV0aWxzLm5vZGUuZ2V0RnJlZVZlY1RtcCgpO1xuXG4gICAgICAgIHRoaXMuc3BCZzEuZ2V0UG9zaXRpb24ocG9zVG1wMSk7XG4gICAgICAgIHRoaXMuc3BCZzIuZ2V0UG9zaXRpb24ocG9zVG1wMik7XG5cbiAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NUbXAyLnggPiBwb3NUbXAxLngpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyU3ViLm5vZGUgPSB0aGlzLnNwQmcyO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJTdWIucG9zTC5zZXQocG9zVG1wMik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm90aGVyU3ViLm5vZGUgPSB0aGlzLnNwQmcxO1xuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJTdWIucG9zTC5zZXQocG9zVG1wMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJTdWIubm9kZSA9IHRoaXMuc3BCZzE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5wb3NMLnNldChwb3NUbXAxKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJTdWIubm9kZSA9IHRoaXMuc3BCZzI7XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5wb3NMLnNldChwb3NUbXAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwb3NUbXAxLnggPCBwb3NUbXAyLngpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyU3ViLm5vZGUgPSB0aGlzLnNwQmcxO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJTdWIucG9zTC5zZXQocG9zVG1wMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm90aGVyU3ViLm5vZGUgPSB0aGlzLnNwQmcyO1xuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJTdWIucG9zTC5zZXQocG9zVG1wMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJTdWIubm9kZSA9IHRoaXMuc3BCZzI7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5wb3NMLnNldChwb3NUbXAyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub3RoZXJTdWIubm9kZSA9IHRoaXMuc3BCZzE7XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5wb3NMLnNldChwb3NUbXAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oaWdoUGVyZm9ybSkge1xuICAgICAgICAgICAgbGV0IHBvc1RtcDMgPSBjMmYudXRpbHMubm9kZS5nZXROb2RlUG9zaXRpb24odGhpcy5iZ1BhbmVsKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gcG9zVG1wMy54IC0gdGhpcy5pbml0UG9zLng7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0WCkgPj0gdGhpcy5zdWJTaXplLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5ub2RlLnNldFBvc2l0aW9uKHRoaXMub3RoZXJTdWIucG9zTCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5ub2RlLnNldFBvc2l0aW9uKHRoaXMucmVmZXJTdWIucG9zTCk7XG4gICAgICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUub2ZmZXN0Tm9kZVBvcyh0aGlzLmJnUGFuZWwsIHRoaXMuc3ViU2l6ZS53aWR0aCAqIChvZmZzZXQgPiAwID8gLTEgOiAxKSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYzJmLnV0aWxzLnZpZXcubm9kZUlzT3V0QnlXaWR0aCh0aGlzLnJlZmVyU3ViLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlclN1Yi5ub2RlLnNldFBvc2l0aW9uKHRoaXMub3RoZXJTdWIucG9zTCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vdGhlclN1Yi5ub2RlLnNldFBvc2l0aW9uKHRoaXMucmVmZXJTdWIucG9zTCk7XG4gICAgICAgICAgICAgICAgYzJmLnV0aWxzLm5vZGUub2ZmZXN0Tm9kZVBvcyh0aGlzLmJnUGFuZWwsIHRoaXMuc3ViU2l6ZS53aWR0aCAqIChvZmZzZXQgPiAwID8gLTEgOiAxKSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjMmYudXRpbHMubm9kZS5yZWxlYXNlVmVjVG1wKHBvc1RtcDEpO1xuICAgICAgICBjMmYudXRpbHMubm9kZS5yZWxlYXNlVmVjVG1wKHBvc1RtcDIpO1xuICAgIH1cbn1cbiJdfQ==