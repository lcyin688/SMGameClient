"use strict";
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