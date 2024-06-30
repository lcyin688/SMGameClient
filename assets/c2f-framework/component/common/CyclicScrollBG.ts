/** 循环滚动页面:为了便于运算，约定如下：
 * 1、子节点为两个,尺寸一致
 * 2、子节点宽度(高度)要大于屏幕宽度(高度)
 * */

import { UIPrefabBase } from "../../gui/layer/UIPrefabBase";

const { ccclass, property } = cc._decorator;
@ccclass
export class CyclicScrollBG extends UIPrefabBase {

    @property({ serializable: true })
    vertical: boolean = false;

    @property({ serializable: true })
    speed: number = 0;

    @property({ serializable: true, tooltip: "高性能模式:该模式下会修改自动修改节点锚点" })
    highPerform: boolean = false;

    //--------------UI对象-------------    
    /** 标题 */
    spBg1: cc.Node = null;
    /** 图标 */
    spBg2: cc.Node = null;
    //---------------------------------

    //背景面板：移动背景是移动此节点
    private bgPanel: cc.Node = null;
    //子页面大小
    private subSize: cc.Size = null;
    //节点初始位置
    private initPos: cc.Vec3 = cc.v3(0, 0, 0);

    //刷新帧率
    private refreshFR: number = 1 / 10;
    //刷新间隔
    private refreshInterval: number = this.refreshFR;

    //缓存对象：防止一直重复创建
    private referSub: { node: cc.Node, posL: cc.Vec3 } = { node: null, posL: cc.v3(0, 0, 0) };
    private otherSub: { node: cc.Node, posL: cc.Vec3 } = { node: null, posL: cc.v3(0, 0, 0) };

    protected onLoad() {
        super.onLoad();
    }

    protected onDestory() {
        this.initPos = null;
        this.referSub = null;
        this.otherSub = null;
    }

    protected initProperty() {
        super.initProperty();
        this.spBg1 = this.get('_spBg1_');
        this.spBg2 = this.get('_spBg2_');
    }

    protected start() {
        this.bgPanel = this.node;
        this.subSize = this.spBg1.getContentSize();

        if (this.highPerform) {
            if (this.vertical) {
                //TODO:
            } else {
                let szView = cc.view.getVisibleSize();
                let curPosW = c2f.utils.node.getNodeWorldPosition(this.bgPanel);
                let oriPos = cc.Vec2.ZERO.clone();
                let pos2Panel = cc.Vec3.ZERO.clone();
                if (this.speed > 0) {
                    this.bgPanel.setAnchorPoint(0, this.bgPanel.anchorY);
                    for (let i = 0; i < this.bgPanel.children.length; i++) {
                        let one = this.bgPanel.children[i];
                        c2f.utils.node.getNodePosition(one, oriPos);
                        let posX = i * this.subSize.width + one.anchorX * this.subSize.width;
                        one.setPosition(posX, oriPos.y, 0);
                    }
                    this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(szView.width - 2 * this.subSize.width, curPosW.y, 0), pos2Panel);
                    this.bgPanel.setPosition(pos2Panel);
                } else {
                    this.bgPanel.setAnchorPoint(1, this.bgPanel.anchorY);
                    for (let i = 0; i < this.bgPanel.children.length; i++) {
                        let one = this.bgPanel.children[i];
                        c2f.utils.node.getNodePosition(one, oriPos);
                        let posX = -i * this.subSize.width - (1 - one.anchorX) * this.subSize.width;
                        one.setPosition(posX, oriPos.y, 0);
                    }
                    this.bgPanel.parent.convertToNodeSpaceAR(cc.v3(2 * this.subSize.width, curPosW.y, 0), pos2Panel);
                    this.bgPanel.setPosition(pos2Panel);
                }
                this.bgPanel.getPosition(this.initPos);
            }
        }
    }

    protected update(dt: number) {
        if (!this.spBg1 || !this.spBg2) {
            return;
        }
        this.refreshInterval -= dt;
        if (this.refreshInterval > 0) {
            return;
        }
        this.refreshInterval += this.refreshFR;

        let offset = this.speed * this.refreshFR;
        this.moveBg(offset);
    }

    public moveBg(offset: number) {
        //移动背景
        if (this.vertical) {
            this.moveVertical(offset);
        } else {
            this.moveHorizontal(offset);
        }
    }

    private moveVertical(offset: number) {
        c2f.utils.node.offestNodePos(this.bgPanel, 0, offset, 0);

        let posTmp1 = c2f.utils.node.getFreeVecTmp();
        let posTmp2 = c2f.utils.node.getFreeVecTmp();

        this.spBg1.getPosition(posTmp1);
        this.spBg2.getPosition(posTmp2);

        if (offset > 0) {
            if (posTmp2.y > posTmp1.y) {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);

                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            } else {
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
    }

    private moveHorizontal(offset: number) {
        c2f.utils.node.offestNodePos(this.bgPanel, offset, 0, 0);

        let posTmp1 = c2f.utils.node.getFreeVecTmp();
        let posTmp2 = c2f.utils.node.getFreeVecTmp();

        this.spBg1.getPosition(posTmp1);
        this.spBg2.getPosition(posTmp2);

        if (offset > 0) {
            if (posTmp2.x > posTmp1.x) {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);

                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            } else {
                this.referSub.node = this.spBg1;
                this.referSub.posL.set(posTmp1);

                this.otherSub.node = this.spBg2;
                this.otherSub.posL.set(posTmp2);
            }
        } else {
            if (posTmp1.x < posTmp2.x) {
                this.referSub.node = this.spBg1;
                this.referSub.posL.set(posTmp1);

                this.otherSub.node = this.spBg2;
                this.otherSub.posL.set(posTmp2);
            } else {
                this.referSub.node = this.spBg2;
                this.referSub.posL.set(posTmp2);

                this.otherSub.node = this.spBg1;
                this.otherSub.posL.set(posTmp1);
            }
        }
        if (this.highPerform) {
            let posTmp3 = c2f.utils.node.getNodePosition(this.bgPanel);
            let offsetX = posTmp3.x - this.initPos.x;
            if (Math.abs(offsetX) >= this.subSize.width) {
                this.referSub.node.setPosition(this.otherSub.posL);
                this.otherSub.node.setPosition(this.referSub.posL);
                c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (offset > 0 ? -1 : 1), 0, 0);
            }
        } else {
            if (c2f.utils.view.nodeIsOutByWidth(this.referSub.node)) {
                this.referSub.node.setPosition(this.otherSub.posL);
                this.otherSub.node.setPosition(this.referSub.posL);
                c2f.utils.node.offestNodePos(this.bgPanel, this.subSize.width * (offset > 0 ? -1 : 1), 0, 0);
            }
        }

        c2f.utils.node.releaseVecTmp(posTmp1);
        c2f.utils.node.releaseVecTmp(posTmp2);
    }
}
