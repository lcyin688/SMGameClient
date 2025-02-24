"use strict";
cc._RF.push(module, '0279cJat3xCqZMbQ8gaWoSS', 'NodeUtil');
// c2f-framework/utils/NodeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 节点对象工具 */
var NodeUtil = /** @class */ (function () {
    function NodeUtil() {
    }
    NodeUtil.getFreeVecTmp = function () {
        var idx = this.arrVecTmp.findIndex(function (a) { return a.z < 0; });
        if (idx < 0) {
            var newTmp = cc.v3(0, 0, 0);
            this.arrVecTmp.push(newTmp);
            return newTmp;
        }
        else {
            var one = this.arrVecTmp[idx];
            one.x = 0;
            one.y = 0;
            one.z = 0;
            return one;
        }
    };
    /** 将临时vec变量回收 */
    NodeUtil.releaseVecTmp = function (tmp) {
        if (tmp) {
            tmp.z = -1;
        }
    };
    /** 清空临时对象列表 */
    NodeUtil.clearVecTmp = function () {
        this.arrVecTmp = [];
    };
    /** 获得节点坐标，返回的是缓存临时对象，使用完后将z设置为-1 */
    NodeUtil.getNodePosition = function (node, out) {
        if (!out) {
            out = cc.v2(0, 0);
        }
        out = node.getPosition(out);
        return out;
    };
    /** 获得世界坐标，返回的是缓存临时对象，使用完后将z设置为-1 */
    NodeUtil.getNodeWorldPosition = function (node, out) {
        if (!out) {
            out = cc.v3(0, 0);
        }
        node.convertToWorldSpaceAR(cc.Vec3.ZERO, out);
        return out;
    };
    /**
     * 节点位置偏移
     * @param node 目标节点
     * @param offset 偏移量
     */
    NodeUtil.offestNodePos = function (node, x, y, z) {
        var tmp = this.getNodePosition(node);
        tmp.x += x;
        tmp.y += y;
        node.setPosition(tmp);
    };
    /**
     * 节点1到节点2连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    NodeUtil.getTwoNodeAngle = function (node1, node2) {
        var pos1 = this.getNodeWorldPosition(node1);
        var pos2 = this.getNodeWorldPosition(node2);
        var angle = c2f.utils.vec.angleEx(pos1, pos2);
        this.releaseVecTmp(pos1);
        this.releaseVecTmp(pos2);
        return angle;
    };
    /**
     * 节点node在panel下的坐标
     * @param node 节点1
     * @param panel 节点2
     */
    NodeUtil.getNodeInPanelPos = function (node, panel) {
        var posW = this.getNodeWorldPosition(node);
        var posL = panel.convertToNodeSpaceAR(posW);
        this.releaseVecTmp(posW);
        return posL;
    };
    //-----------------------------------------------------------
    /** 临时变量处理：防止产生大量临时对象，z轴<0时，可释放 */
    NodeUtil.arrVecTmp = [];
    return NodeUtil;
}());
c2f.utils.node = NodeUtil;

cc._RF.pop();