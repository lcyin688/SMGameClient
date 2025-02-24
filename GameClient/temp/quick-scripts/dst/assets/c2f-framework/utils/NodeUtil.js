
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/NodeUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL05vZGVVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUNiO0lBQUE7SUFxRkEsQ0FBQztJQWhGVSxzQkFBYSxHQUFwQjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxNQUFNLENBQUM7U0FDakI7YUFBTTtZQUNILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7SUFDRCxpQkFBaUI7SUFDVixzQkFBYSxHQUFwQixVQUFxQixHQUFZO1FBQzdCLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUNELGVBQWU7SUFDUixvQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBb0M7SUFDN0Isd0JBQWUsR0FBdEIsVUFBdUIsSUFBYSxFQUFFLEdBQWE7UUFDL0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFvQztJQUM3Qiw2QkFBb0IsR0FBM0IsVUFBNEIsSUFBYSxFQUFFLEdBQWE7UUFDcEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQWEsR0FBcEIsVUFBcUIsSUFBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMvRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1gsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0JBQWUsR0FBdEIsVUFBdUIsS0FBYyxFQUFFLEtBQWM7UUFDakQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFpQixHQUF4QixVQUF5QixJQUFhLEVBQUUsS0FBYztRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWxGRCw2REFBNkQ7SUFDN0Qsa0NBQWtDO0lBQzNCLGtCQUFTLEdBQWMsRUFBRSxDQUFDO0lBaUZyQyxlQUFDO0NBckZELEFBcUZDLElBQUE7QUFPRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog6IqC54K55a+56LGh5bel5YW3ICovXG5jbGFzcyBOb2RlVXRpbCB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqIOS4tOaXtuWPmOmHj+WkhOeQhu+8mumYsuatouS6p+eUn+Wkp+mHj+S4tOaXtuWvueixoe+8jHrovbQ8MOaXtu+8jOWPr+mHiuaUviAqL1xuICAgIHN0YXRpYyBhcnJWZWNUbXA6IGNjLlZlYzNbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRGcmVlVmVjVG1wKCkge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5hcnJWZWNUbXAuZmluZEluZGV4KChhKSA9PiB7IHJldHVybiBhLnogPCAwIH0pO1xuICAgICAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgICAgICAgbGV0IG5ld1RtcCA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICAgICAgdGhpcy5hcnJWZWNUbXAucHVzaChuZXdUbXApO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1RtcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvbmUgPSB0aGlzLmFyclZlY1RtcFtpZHhdO1xuICAgICAgICAgICAgb25lLnggPSAwO1xuICAgICAgICAgICAgb25lLnkgPSAwO1xuICAgICAgICAgICAgb25lLnogPSAwO1xuICAgICAgICAgICAgcmV0dXJuIG9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5bCG5Li05pe2dmVj5Y+Y6YeP5Zue5pS2ICovXG4gICAgc3RhdGljIHJlbGVhc2VWZWNUbXAodG1wOiBjYy5WZWMzKSB7XG4gICAgICAgIGlmICh0bXApIHtcbiAgICAgICAgICAgIHRtcC56ID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOa4heepuuS4tOaXtuWvueixoeWIl+ihqCAqL1xuICAgIHN0YXRpYyBjbGVhclZlY1RtcCgpIHtcbiAgICAgICAgdGhpcy5hcnJWZWNUbXAgPSBbXTtcbiAgICB9XG5cbiAgICAvKiog6I635b6X6IqC54K55Z2Q5qCH77yM6L+U5Zue55qE5piv57yT5a2Y5Li05pe25a+56LGh77yM5L2/55So5a6M5ZCO5bCGeuiuvue9ruS4ui0xICovXG4gICAgc3RhdGljIGdldE5vZGVQb3NpdGlvbihub2RlOiBjYy5Ob2RlLCBvdXQ/OiBjYy5WZWMyKSB7XG4gICAgICAgIGlmICghb3V0KSB7XG4gICAgICAgICAgICBvdXQgPSBjYy52MigwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBvdXQgPSBub2RlLmdldFBvc2l0aW9uKG91dCk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+S4lueVjOWdkOagh++8jOi/lOWbnueahOaYr+e8k+WtmOS4tOaXtuWvueixoe+8jOS9v+eUqOWujOWQjuWwhnrorr7nva7kuLotMSAqL1xuICAgIHN0YXRpYyBnZXROb2RlV29ybGRQb3NpdGlvbihub2RlOiBjYy5Ob2RlLCBvdXQ/OiBjYy5WZWMzKSB7XG4gICAgICAgIGlmICghb3V0KSB7XG4gICAgICAgICAgICBvdXQgPSBjYy52MygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMzLlpFUk8sIG91dCk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6IqC54K55L2N572u5YGP56e7XG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCH6IqC54K5XG4gICAgICogQHBhcmFtIG9mZnNldCDlgY/np7vph49cbiAgICAgKi9cbiAgICBzdGF0aWMgb2ZmZXN0Tm9kZVBvcyhub2RlOiBjYy5Ob2RlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmdldE5vZGVQb3NpdGlvbihub2RlKTtcbiAgICAgICAgdG1wLnggKz0geDtcbiAgICAgICAgdG1wLnkgKz0geTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0bXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiKgueCuTHliLDoioLngrky6L+e57q/5LiOeOi9tOaWueWQkeeahOWkueinklxuICAgICAqIEBwYXJhbSBub2RlMSDoioLngrkxXG4gICAgICogQHBhcmFtIG5vZGUxIOiKgueCuTJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VHdvTm9kZUFuZ2xlKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcG9zMSA9IHRoaXMuZ2V0Tm9kZVdvcmxkUG9zaXRpb24obm9kZTEpO1xuICAgICAgICBsZXQgcG9zMiA9IHRoaXMuZ2V0Tm9kZVdvcmxkUG9zaXRpb24obm9kZTIpO1xuICAgICAgICBsZXQgYW5nbGU6IG51bWJlciA9IGMyZi51dGlscy52ZWMuYW5nbGVFeChwb3MxLCBwb3MyKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlVmVjVG1wKHBvczEpO1xuICAgICAgICB0aGlzLnJlbGVhc2VWZWNUbXAocG9zMik7XG4gICAgICAgIHJldHVybiBhbmdsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoioLngrlub2Rl5ZyocGFuZWzkuIvnmoTlnZDmoIdcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrkxXG4gICAgICogQHBhcmFtIHBhbmVsIOiKgueCuTJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Tm9kZUluUGFuZWxQb3Mobm9kZTogY2MuTm9kZSwgcGFuZWw6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvc1cgPSB0aGlzLmdldE5vZGVXb3JsZFBvc2l0aW9uKG5vZGUpO1xuICAgICAgICBsZXQgcG9zTCA9IHBhbmVsLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc1cpO1xuICAgICAgICB0aGlzLnJlbGVhc2VWZWNUbXAocG9zVyk7XG4gICAgICAgIHJldHVybiBwb3NMO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVXRpbCB7XG4gICAgICAgIG5vZGU6IHR5cGVvZiBOb2RlVXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMubm9kZSA9IE5vZGVVdGlsO1xuZXhwb3J0IHsgfTsiXX0=