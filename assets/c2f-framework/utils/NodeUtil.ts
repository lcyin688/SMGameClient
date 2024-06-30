/** 节点对象工具 */
class NodeUtil {

    //-----------------------------------------------------------
    /** 临时变量处理：防止产生大量临时对象，z轴<0时，可释放 */
    static arrVecTmp: cc.Vec3[] = [];
    static getFreeVecTmp() {
        let idx = this.arrVecTmp.findIndex((a) => { return a.z < 0 });
        if (idx < 0) {
            let newTmp = cc.v3(0, 0, 0);
            this.arrVecTmp.push(newTmp);
            return newTmp;
        } else {
            let one = this.arrVecTmp[idx];
            one.x = 0;
            one.y = 0;
            one.z = 0;
            return one;
        }
    }
    /** 将临时vec变量回收 */
    static releaseVecTmp(tmp: cc.Vec3) {
        if (tmp) {
            tmp.z = -1;
        }
    }
    /** 清空临时对象列表 */
    static clearVecTmp() {
        this.arrVecTmp = [];
    }

    /** 获得节点坐标，返回的是缓存临时对象，使用完后将z设置为-1 */
    static getNodePosition(node: cc.Node, out?: cc.Vec2) {
        if (!out) {
            out = cc.v2(0, 0);
        }
        out = node.getPosition(out);
        return out;
    }

    /** 获得世界坐标，返回的是缓存临时对象，使用完后将z设置为-1 */
    static getNodeWorldPosition(node: cc.Node, out?: cc.Vec3) {
        if (!out) {
            out = cc.v3(0, 0);
        }
        node.convertToWorldSpaceAR(cc.Vec3.ZERO, out);
        return out;
    }

    /**
     * 节点位置偏移
     * @param node 目标节点
     * @param offset 偏移量
     */
    static offestNodePos(node: cc.Node, x: number, y: number, z: number) {
        let tmp = this.getNodePosition(node);
        tmp.x += x;
        tmp.y += y;
        node.setPosition(tmp);
    }

    /**
     * 节点1到节点2连线与x轴方向的夹角
     * @param node1 节点1
     * @param node1 节点2
     */
    static getTwoNodeAngle(node1: cc.Node, node2: cc.Node) {
        let pos1 = this.getNodeWorldPosition(node1);
        let pos2 = this.getNodeWorldPosition(node2);
        let angle: number = c2f.utils.vec.angleEx(pos1, pos2);
        this.releaseVecTmp(pos1);
        this.releaseVecTmp(pos2);
        return angle;
    }

    /**
     * 节点node在panel下的坐标
     * @param node 节点1
     * @param panel 节点2
     */
    static getNodeInPanelPos(node: cc.Node, panel: cc.Node) {
        let posW = this.getNodeWorldPosition(node);
        let posL = panel.convertToNodeSpaceAR(posW);
        this.releaseVecTmp(posW);
        return posL;
    }
}

declare global {
    interface IUtil {
        node: typeof NodeUtil;
    }
}
c2f.utils.node = NodeUtil;
export { };