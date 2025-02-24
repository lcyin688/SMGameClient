
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/UIMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f45eddstvxBh6i2cpd//UAw', 'UIMap');
// c2f-framework/gui/layer/UIMap.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIMap = void 0;
/** 界面关系树节点 */
var TreeNode = /** @class */ (function () {
    function TreeNode() {
        /** 父节点 */
        this.parent = null;
        /** 子节点 */
        this.child = [];
    }
    return TreeNode;
}());
/** 用于树形结构两节点之间的寻路功能 */
var UIMap = /** @class */ (function () {
    function UIMap() {
        /** UI层级管理器 */
        /** 界面节点树 */
        this.nodes = new Map();
    }
    /** 创建UI关系树 */
    UIMap.prototype.init = function (data) {
        var _this = this;
        // 解析数据
        for (var key in data) {
            var d = data[key];
            var n = new TreeNode();
            n.id = parseInt(key);
            n.pid = d.parent;
            n.name = d.name;
            n.panel = d.panel;
            this.nodes.set(n.id, n);
        }
        // 设置节点关系
        this.nodes.forEach(function (value, key) {
            value.parent = _this.nodes.get(value.pid);
            if (value.parent)
                value.parent.child.push(value);
        });
    };
    /**
     * 树节点寻路
     * @param startId 起始节点编号
     * @param endId   结束节点编号
     * @returns
     */
    UIMap.prototype.pathFinding = function (startId, endId) {
        var start = this.nodes.get(startId);
        var end = this.nodes.get(endId);
        var close = this.findUp(start);
        var open = this.findUp(end);
        close.forEach(function (value) {
            c2f.gui.remove(value.id, true);
        });
        open.forEach(function (value) {
            c2f.gui.open(value.id);
        });
        return { paths_close: close, paths_open: open };
    };
    /** 向上寻找子节点直到根节点停止，并返回节点路径数组 */
    UIMap.prototype.findUp = function (start) {
        var paths = [];
        var current = start;
        while (current.parent != null) { // 父级为空时为根节点
            paths.push(current);
            current = current.parent;
        }
        return paths;
    };
    /** 释放所有节点 */
    UIMap.prototype.release = function () {
        this.nodes.clear();
    };
    return UIMap;
}());
exports.UIMap = UIMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7SUFBQTtRQUlJLFVBQVU7UUFDVixXQUFNLEdBQW9CLElBQUksQ0FBQztRQUMvQixVQUFVO1FBQ1YsVUFBSyxHQUFvQixFQUFFLENBQUM7SUFLaEMsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQUVELHVCQUF1QjtBQUN2QjtJQUFBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDSixVQUFLLEdBQTBCLElBQUksR0FBRyxFQUFvQixDQUFDO0lBOER2RSxDQUFDO0lBNURHLGNBQWM7SUFDZCxvQkFBSSxHQUFKLFVBQUssSUFBUztRQUFkLGlCQWtCQztRQWpCRyxPQUFPO1FBQ1AsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWUsRUFBRSxHQUFXO1lBQzVDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxDQUFDLE1BQU07Z0JBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkJBQVcsR0FBWCxVQUFZLE9BQWUsRUFBRSxLQUFhO1FBQ3RDLElBQUksS0FBSyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQy9DLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBRTNDLElBQUksS0FBSyxHQUFvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxHQUFvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCwrQkFBK0I7SUFDdkIsc0JBQU0sR0FBZCxVQUFlLEtBQWU7UUFDMUIsSUFBSSxLQUFLLEdBQWUsRUFBRSxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFhLEtBQUssQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFLEVBQVMsWUFBWTtZQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGFBQWE7SUFDYix1QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsWUFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog55WM6Z2i5YWz57O75qCR6IqC54K5ICovXG5jbGFzcyBUcmVlTm9kZSB7XG4gICAgaWQhOiBudW1iZXI7XG4gICAgLyoqIOeItuiKgueCuee8luWPtyAqL1xuICAgIHBpZCE6IG51bWJlcjtcbiAgICAvKiog54i26IqC54K5ICovXG4gICAgcGFyZW50OiBUcmVlTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIC8qKiDlrZDoioLngrkgKi9cbiAgICBjaGlsZDogQXJyYXk8VHJlZU5vZGU+ID0gW107XG4gICAgLyoqIOeVjOmdouWQjSAqL1xuICAgIG5hbWUhOiBzdHJpbmc7XG4gICAgLyoqIOeVjOmdouS7o+WPt++8iOeUqOS6juWQjOS4gOeVjOmdouacieWkmuadoei3r+W+hOaXtu+8iSAqL1xuICAgIHBhbmVsITogc3RyaW5nO1xufVxuXG4vKiog55So5LqO5qCR5b2i57uT5p6E5Lik6IqC54K55LmL6Ze055qE5a+76Lev5Yqf6IO9ICovXG5leHBvcnQgY2xhc3MgVUlNYXAge1xuICAgIC8qKiBVSeWxgue6p+euoeeQhuWZqCAqL1xuICAgIC8qKiDnlYzpnaLoioLngrnmoJEgKi9cbiAgICBwcml2YXRlIG5vZGVzOiBNYXA8bnVtYmVyLCBUcmVlTm9kZT4gPSBuZXcgTWFwPG51bWJlciwgVHJlZU5vZGU+KCk7XG5cbiAgICAvKiog5Yib5bu6VUnlhbPns7vmoJEgKi9cbiAgICBpbml0KGRhdGE6IGFueSkge1xuICAgICAgICAvLyDop6PmnpDmlbDmja5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBkID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgVHJlZU5vZGUoKTtcbiAgICAgICAgICAgIG4uaWQgPSBwYXJzZUludChrZXkpO1xuICAgICAgICAgICAgbi5waWQgPSBkLnBhcmVudDtcbiAgICAgICAgICAgIG4ubmFtZSA9IGQubmFtZTtcbiAgICAgICAgICAgIG4ucGFuZWwgPSBkLnBhbmVsO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zZXQobi5pZCwgbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7oioLngrnlhbPns7tcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKCh2YWx1ZTogVHJlZU5vZGUsIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5wYXJlbnQgPSB0aGlzLm5vZGVzLmdldCh2YWx1ZS5waWQpITtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wYXJlbnQpXG4gICAgICAgICAgICAgICAgdmFsdWUucGFyZW50LmNoaWxkLnB1c2godmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoJHoioLngrnlr7vot69cbiAgICAgKiBAcGFyYW0gc3RhcnRJZCDotbflp4voioLngrnnvJblj7dcbiAgICAgKiBAcGFyYW0gZW5kSWQgICDnu5PmnZ/oioLngrnnvJblj7dcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwYXRoRmluZGluZyhzdGFydElkOiBudW1iZXIsIGVuZElkOiBudW1iZXIpOiBhbnkge1xuICAgICAgICB2YXIgc3RhcnQ6IFRyZWVOb2RlID0gdGhpcy5ub2Rlcy5nZXQoc3RhcnRJZCkhO1xuICAgICAgICB2YXIgZW5kOiBUcmVlTm9kZSA9IHRoaXMubm9kZXMuZ2V0KGVuZElkKSE7XG5cbiAgICAgICAgdmFyIGNsb3NlOiBBcnJheTxUcmVlTm9kZT4gPSB0aGlzLmZpbmRVcChzdGFydCk7XG4gICAgICAgIHZhciBvcGVuOiBBcnJheTxUcmVlTm9kZT4gPSB0aGlzLmZpbmRVcChlbmQpO1xuXG4gICAgICAgIGNsb3NlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgYzJmLmd1aS5yZW1vdmUodmFsdWUuaWQsIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvcGVuLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgYzJmLmd1aS5vcGVuKHZhbHVlLmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgcGF0aHNfY2xvc2U6IGNsb3NlLCBwYXRoc19vcGVuOiBvcGVuIH07XG4gICAgfVxuXG4gICAgLyoqIOWQkeS4iuWvu+aJvuWtkOiKgueCueebtOWIsOagueiKgueCueWBnOatou+8jOW5tui/lOWbnuiKgueCuei3r+W+hOaVsOe7hCAqL1xuICAgIHByaXZhdGUgZmluZFVwKHN0YXJ0OiBUcmVlTm9kZSk6IFRyZWVOb2RlW10ge1xuICAgICAgICB2YXIgcGF0aHM6IFRyZWVOb2RlW10gPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnQ6IFRyZWVOb2RlID0gc3RhcnQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50LnBhcmVudCAhPSBudWxsKSB7ICAgICAgICAvLyDniLbnuqfkuLrnqbrml7bkuLrmoLnoioLngrlcbiAgICAgICAgICAgIHBhdGhzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRocztcbiAgICB9XG5cbiAgICAvKiog6YeK5pS+5omA5pyJ6IqC54K5ICovXG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5jbGVhcigpO1xuICAgIH1cbn1cbiJdfQ==