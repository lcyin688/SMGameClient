
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/VirtualLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23c51D+ML1JI7Nz58WdBOmf', 'VirtualLayout');
// c2f-framework/component/ui/scrollList/VirtualLayout.ts

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
var C2FEnum_1 = require("../../../define/C2FEnum");
var LayoutProperty_1 = require("./LayoutProperty");
var VLItemGroup_1 = require("./VLItemGroup");
var VLTemplate_1 = require("./VLTemplate");
var VirtualItem_1 = require("./VirtualItem");
/**
 * 虚拟列表所需的布局组件
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple;
var VirtualLayout = /** @class */ (function (_super) {
    __extends(VirtualLayout, _super);
    function VirtualLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        /** 所属虚拟列表 */
        _this._list = null;
        /** mask节点（content父节点） */
        _this._view = null;
        /** view坐标系下view的边界矩形 */
        _this._viewEdge = null;
        /** 元素节点大小固定时的size */
        _this._fixedSize = null;
        /** 标记当前帧是否需要更新content size */
        _this._sizeDirty = false;
        /** 标记当前帧是否需要更新view区域数据显示 */
        _this._viewDirty = false;
        /** 标记当前帧是否需要同步others content的坐标 */
        _this._posDirty = false;
        /** main content激活状态的item */
        _this._items = [];
        /** main content被回收的item池（不移出节点树，只设置opacity） */
        _this._itemPool = [];
        /** others content激活状态的item，下标顺序与this.list.Others数组一致 */
        _this._otherItemsArr = [];
        /** others content被回收的item池数组（不移出节点树，只设置opacity），下标顺序与this.list.Others数组一致 */
        _this._otherItemPoolArr = [];
        return _this;
    }
    VirtualLayout.prototype.onInit = function (list) {
        var _this = this;
        this._list = list;
        this._view = this.node.parent;
        this._viewEdge = this.getNodeEdgeRect(this._view);
        // 初始化分层相关数据
        this._otherItemsArr = [];
        this._otherItemPoolArr = [];
        this._list.others.forEach(function (e) {
            _this._otherItemsArr.push([]);
            _this._otherItemPoolArr.push([]);
        });
        // 元素大小固定时初始化fixedSize
        if (this._fixedSize === null) {
            this.addItemNode(false);
            this._fixedSize = this._itemPool[0].getContentSize();
        }
        // 注册事件
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
        this._view.on(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
    };
    /** 同步layout参数:注意同步时机 */
    VirtualLayout.prototype.syncLayoutProperty = function (inProperty) {
        this.layout = inProperty;
    };
    VirtualLayout.prototype.onDestroy = function () {
        var _a;
        // 注销事件
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onPositionChanged, this);
        (_a = this._view) === null || _a === void 0 ? void 0 : _a.off(cc.Node.EventType.SIZE_CHANGED, this.onViewSizeChanged, this);
        //解除引用
        this._list = null;
        this._view = null;
        this._items = [];
        this._itemPool = [];
        this._otherItemsArr = [];
        this._otherItemPoolArr = [];
    };
    /**
     * 立即更新布局
     */
    VirtualLayout.prototype.forceUpdate = function () {
        this.updatePos();
        this.updateSize();
        this.updateView();
        this.updateSibling();
    };
    VirtualLayout.prototype.lateUpdate = function () {
        this.forceUpdate();
    };
    /**
     * 同步others的坐标
     */
    VirtualLayout.prototype.updatePos = function () {
        var _this = this;
        if (!this._posDirty) {
            return;
        }
        this._posDirty = false;
        this._list.others.forEach(function (e) {
            e.content.position = _this.node.position;
        });
    };
    /**
     * 更新content size
     */
    VirtualLayout.prototype.updateSize = function () {
        if (!this._sizeDirty) {
            return;
        }
        this._sizeDirty = false;
        if (this._list.isFixedSize) {
            this.updateSizeFixed();
        }
        else {
            this.updateSizeUnfixed();
        }
    };
    VirtualLayout.prototype.updateSizeFixed = function () {
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.height = 0;
                return;
            }
            this.node.height = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY + this._fixedSize.height * this._list.argsArr.length;
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.width = 0;
                return;
            }
            this.node.width = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX + this._fixedSize.width * this._list.argsArr.length;
        }
        else {
            if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                if (this._list.argsArr.length <= 0) {
                    this.node.height = 0;
                    return;
                }
                // 计算一行可以排列几个，至少1个
                var num = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
                num = Math.max(num, 1);
                // 计算可以排列几行
                var row = Math.ceil(this._list.argsArr.length / num);
                // 高度
                this.node.height = this.layout.top + this.layout.bottom + (row - 1) * this.layout.spacingY + this._fixedSize.height * row;
            }
            else {
                if (this._list.argsArr.length <= 0) {
                    this.node.width = 0;
                    return;
                }
                // 计算一列可以排列几个，至少1个
                var num = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
                num = Math.max(num, 1);
                // 计算可以排列几列
                var column = Math.ceil(this._list.argsArr.length / num);
                // 宽度
                this.node.width = this.layout.left + this.layout.right + (column - 1) * this.layout.spacingX + this._fixedSize.width * column;
            }
        }
    };
    VirtualLayout.prototype.updateSizeUnfixed = function () {
        // 缓存宽高，最后赋值，是因为修改content size时会触发scrollview._calculateBoundary，改变content的坐标
        var result = 0;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.height = 0;
                return;
            }
            result = this.layout.top + this.layout.bottom + (this._list.argsArr.length - 1) * this.layout.spacingY;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var size = this.calcItemSizeUnfixed(i);
                result += size.height;
            }
            this.node.height = result;
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this._list.argsArr.length <= 0) {
                this.node.width = 0;
                return;
            }
            result = this.layout.left + this.layout.right + (this._list.argsArr.length - 1) * this.layout.spacingX;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var size = this.calcItemSizeUnfixed(i);
                result += size.width;
            }
            this.node.width = result;
        }
    };
    /**
     * 更新view区域数据显示
     */
    VirtualLayout.prototype.updateView = function () {
        if (!this._viewDirty || this._list.argsArr.length <= 0) {
            return;
        }
        this._viewDirty = false;
        if (this._list.isFixedSize) {
            this.updateViewFixed();
        }
        else {
            this.updateViewUnfixed();
        }
    };
    /**
     * 更新层级
     */
    VirtualLayout.prototype.updateSibling = function () {
        if (!this._list || !this._list.argsArr || this._list.argsArr.length <= 0) {
            return;
        }
        if (this._list.isSubling) {
            var min_1 = 999;
            this._items.forEach(function (item) {
                var vi = item.getComponent(VirtualItem_1.default);
                if (vi.args) {
                    if (vi.args.subling < min_1) {
                        min_1 = vi.args.subling;
                    }
                }
            });
            this._items.forEach(function (item) {
                var vi = item.getComponent(VirtualItem_1.default);
                if (vi.args) {
                    var subling = vi.args.subling - min_1;
                    if (item.getSiblingIndex() != subling) {
                        item.setSiblingIndex(subling);
                    }
                }
            });
        }
    };
    VirtualLayout.prototype.updateViewFixed = function () {
        var _this = this;
        var arrAddData = [];
        var viewResult = this.checkViewItem();
        var inView = viewResult.inView;
        var outView = viewResult.outView;
        var contentEdge = this.getNodeEdgeRect(this.node);
        var xMax, xMin, yMax, yMin;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            var _loop_1 = function (i) {
                if (this_1.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                    yMax = contentEdge.yMax - (this_1.layout.top + i * this_1.layout.spacingY + this_1._fixedSize.height * i);
                    yMin = yMax - this_1._fixedSize.height;
                    if (yMax + this_1.node.y < this_1._viewEdge.yMin) {
                        return "break";
                    }
                    if (yMin + this_1.node.y > this_1._viewEdge.yMax) {
                        return "continue";
                    }
                }
                else {
                    yMin = contentEdge.yMin + this_1.layout.bottom + i * this_1.layout.spacingY + this_1._fixedSize.height * i;
                    yMax = yMin + this_1._fixedSize.height;
                    if (yMin + this_1.node.y > this_1._viewEdge.yMax) {
                        return "break";
                    }
                    if (yMax + this_1.node.y < this_1._viewEdge.yMin) {
                        return "continue";
                    }
                }
                // 判断显示区域内部是否有节点显示此条数据
                var found = inView.findIndex(function (e) { return _this._items[e].getComponent(VirtualItem_1.default).dataIdx === i; });
                if (found !== -1) {
                    return "continue";
                }
                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                });
            };
            var this_1 = this;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            var _loop_2 = function (i) {
                if (this_2.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                    xMax = contentEdge.xMax - (this_2.layout.right + i * this_2.layout.spacingX + this_2._fixedSize.width * i);
                    xMin = xMax - this_2._fixedSize.width;
                    if (xMax + this_2.node.x < this_2._viewEdge.xMin) {
                        return "break";
                    }
                    if (xMin + this_2.node.x > this_2._viewEdge.xMax) {
                        return "continue";
                    }
                }
                else {
                    xMin = contentEdge.xMin + this_2.layout.left + i * this_2.layout.spacingX + this_2._fixedSize.width * i;
                    xMax = xMin + this_2._fixedSize.width;
                    if (xMin + this_2.node.x > this_2._viewEdge.xMax) {
                        return "break";
                    }
                    if (xMax + this_2.node.x < this_2._viewEdge.xMin) {
                        return "continue";
                    }
                }
                // 判断显示区域内部是否有节点显示此条数据
                var found = inView.findIndex(function (e) { return _this._items[e].getComponent(VirtualItem_1.default).dataIdx === i; });
                if (found !== -1) {
                    return "continue";
                }
                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                });
            };
            var this_2 = this;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var state_2 = _loop_2(i);
                if (state_2 === "break")
                    break;
            }
        }
        else {
            var _loop_3 = function (i) {
                // 计算当前元素排在第几行第几列，从0开始
                var rowIndex = 0;
                var columnIndex = 0;
                if (this_3.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                    // 起始轴为横向
                    var num = Math.floor((this_3.node.width - this_3.layout.left - this_3.layout.right + this_3.layout.spacingX) / (this_3._fixedSize.width + this_3.layout.spacingX));
                    num = Math.max(num, 1);
                    rowIndex = Math.floor(i / num);
                    columnIndex = i % num;
                    // 计算纵向
                    if (this_3.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                        yMax = contentEdge.yMax - (this_3.layout.top + rowIndex * this_3.layout.spacingY + this_3._fixedSize.height * rowIndex);
                        yMin = yMax - this_3._fixedSize.height;
                        if (yMax + this_3.node.y < this_3._viewEdge.yMin) {
                            return "break";
                        }
                        if (yMin + this_3.node.y > this_3._viewEdge.yMax) {
                            return "continue";
                        }
                    }
                    else {
                        yMin = contentEdge.yMin + this_3.layout.bottom + rowIndex * this_3.layout.spacingY + this_3._fixedSize.height * rowIndex;
                        yMax = yMin + this_3._fixedSize.height;
                        if (yMin + this_3.node.y > this_3._viewEdge.yMax) {
                            return "break";
                        }
                        if (yMax + this_3.node.y < this_3._viewEdge.yMin) {
                            return "continue";
                        }
                    }
                    // 计算横向
                    if (this_3.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                        xMax = contentEdge.xMax - (this_3.layout.right + columnIndex * this_3.layout.spacingX + this_3._fixedSize.width * columnIndex);
                        xMin = xMax - this_3._fixedSize.width;
                    }
                    else {
                        xMin = contentEdge.xMin + this_3.layout.left + columnIndex * this_3.layout.spacingX + this_3._fixedSize.width * columnIndex;
                        xMax = xMin + this_3._fixedSize.width;
                    }
                    if (xMax + this_3.node.x < this_3._viewEdge.xMin || xMin + this_3.node.x > this_3._viewEdge.xMax) {
                        return "continue";
                    }
                }
                else {
                    // 起始轴为纵向
                    var num = Math.floor((this_3.node.height - this_3.layout.top - this_3.layout.bottom + this_3.layout.spacingY) / (this_3._fixedSize.height + this_3.layout.spacingY));
                    num = Math.max(num, 1);
                    rowIndex = i % num;
                    columnIndex = Math.floor(i / num);
                    // 计算横向
                    if (this_3.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                        xMax = contentEdge.xMax - (this_3.layout.right + columnIndex * this_3.layout.spacingX + this_3._fixedSize.width * columnIndex);
                        xMin = xMax - this_3._fixedSize.width;
                        if (xMax + this_3.node.x < this_3._viewEdge.xMin) {
                            return "break";
                        }
                        if (xMin + this_3.node.x > this_3._viewEdge.xMax) {
                            return "continue";
                        }
                    }
                    else {
                        xMin = contentEdge.xMin + this_3.layout.left + columnIndex * this_3.layout.spacingX + this_3._fixedSize.width * columnIndex;
                        xMax = xMin + this_3._fixedSize.width;
                        if (xMin + this_3.node.x > this_3._viewEdge.xMax) {
                            return "break";
                        }
                        if (xMax + this_3.node.x < this_3._viewEdge.xMin) {
                            return "continue";
                        }
                    }
                    // 计算纵向
                    if (this_3.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                        yMax = contentEdge.yMax - (this_3.layout.top + rowIndex * this_3.layout.spacingY + this_3._fixedSize.height * rowIndex);
                        yMin = yMax - this_3._fixedSize.height;
                    }
                    else {
                        yMin = contentEdge.yMin + this_3.layout.bottom + rowIndex * this_3.layout.spacingY + this_3._fixedSize.height * rowIndex;
                        yMax = yMin + this_3._fixedSize.height;
                    }
                    if (yMax + this_3.node.y < this_3._viewEdge.yMin || yMin + this_3.node.y > this_3._viewEdge.yMax) {
                        return "continue";
                    }
                }
                // 判断显示区域内部是否有节点显示此条数据
                var found = inView.findIndex(function (e) { return _this._items[e].getComponent(VirtualItem_1.default).dataIdx === i; });
                if (found !== -1) {
                    return "continue";
                }
                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: null,
                });
            };
            var this_3 = this;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var state_3 = _loop_3(i);
                if (state_3 === "break")
                    break;
            }
        }
        this.addItemsByData(arrAddData, outView);
    };
    VirtualLayout.prototype.updateViewUnfixed = function () {
        var _this = this;
        var arrAddData = [];
        var viewResult = this.checkViewItem();
        var inView = viewResult.inView;
        var outView = viewResult.outView;
        var contentEdge = this.getNodeEdgeRect(this.node);
        var xMax, xMin, yMax, yMin;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            var totalHeight = 0;
            var _loop_4 = function (i) {
                var size = this_4.calcItemSizeUnfixed(i);
                totalHeight += size.height;
                if (this_4.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                    yMax = contentEdge.yMax - (this_4.layout.top + i * this_4.layout.spacingY + (totalHeight - size.height));
                    yMin = yMax - size.height;
                    if (yMax + this_4.node.y < this_4._viewEdge.yMin) {
                        return "break";
                    }
                    if (yMin + this_4.node.y > this_4._viewEdge.yMax) {
                        return "continue";
                    }
                }
                else {
                    yMin = contentEdge.yMin + this_4.layout.bottom + i * this_4.layout.spacingY + (totalHeight - size.height);
                    yMax = yMin + size.height;
                    if (yMin + this_4.node.y > this_4._viewEdge.yMax) {
                        return "break";
                    }
                    if (yMax + this_4.node.y < this_4._viewEdge.yMin) {
                        return "continue";
                    }
                }
                // 判断显示区域内部是否有节点显示此条数据
                var found = inView.findIndex(function (e) { return _this._items[e].getComponent(VirtualItem_1.default).dataIdx === i; });
                if (found !== -1) {
                    return "continue";
                }
                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: size.clone(),
                });
            };
            var this_4 = this;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var state_4 = _loop_4(i);
                if (state_4 === "break")
                    break;
            }
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            var totalWidth = 0;
            var _loop_5 = function (i) {
                var size = this_5.calcItemSizeUnfixed(i);
                totalWidth += size.width;
                if (this_5.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                    xMax = contentEdge.xMax - (this_5.layout.right + i * this_5.layout.spacingX + (totalWidth - size.width));
                    xMin = xMax - size.width;
                    if (xMax + this_5.node.x < this_5._viewEdge.xMin) {
                        return "break";
                    }
                    if (xMin + this_5.node.x > this_5._viewEdge.xMax) {
                        return "continue";
                    }
                }
                else {
                    xMin = contentEdge.xMin + this_5.layout.left + i * this_5.layout.spacingX + (totalWidth - size.width);
                    xMax = xMin + size.width;
                    if (xMin + this_5.node.x > this_5._viewEdge.xMax) {
                        return "break";
                    }
                    if (xMax + this_5.node.x < this_5._viewEdge.xMin) {
                        return "continue";
                    }
                }
                // 判断显示区域内部是否有节点显示此条数据
                var found = inView.findIndex(function (e) { return _this._items[e].getComponent(VirtualItem_1.default).dataIdx === i; });
                if (found !== -1) {
                    return "continue";
                }
                // 没有节点显示此条数据，需使用显示区域外的节点显示此条数据
                arrAddData.push({
                    idx: i,
                    xMin: xMin,
                    yMin: yMin,
                    size: size.clone(),
                });
            };
            var this_5 = this;
            for (var i = 0; i < this._list.argsArr.length; i++) {
                var state_5 = _loop_5(i);
                if (state_5 === "break")
                    break;
            }
        }
        this.addItemsByData(arrAddData, outView);
    };
    VirtualLayout.prototype.addOneItem = function (one, outView) {
        var itemIdx = outView.length === 0 ? this.addItemNode() : outView.shift();
        var item = this._items[itemIdx];
        if (one.size) {
            item.setContentSize(one.size);
        }
        var itemPos = cc.v3(0, 0, 0);
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            itemPos.y = one.yMin + item.anchorY * item.height;
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            itemPos.x = one.xMin + item.anchorX * item.width;
        }
        else {
            itemPos.x = one.xMin + item.anchorX * item.width;
            itemPos.y = one.yMin + item.anchorY * item.height;
        }
        this.setItem(itemPos, one.idx, itemIdx);
    };
    VirtualLayout.prototype.addItemsByData = function (arrData, outView) {
        var _this = this;
        if (arrData.length <= 0) {
            return;
        }
        if (this._list.frameLoadItv > 0 && this._items.length <= 0) {
            var count_1 = arrData.length;
            var index_1 = 0;
            var cb_1 = function () {
                if (index_1 >= count_1) {
                    _this.unschedule(cb_1);
                    _this._list.frameLoadCb && _this._list.frameLoadCb();
                    // 回收区域外的节点
                    _this.recycleItemOutView(outView);
                    c2f.event.emit(C2FEnum_1.C2FEnum.ExtEvent.VirtualListFillCmpl);
                    return;
                }
                var one = arrData[index_1];
                _this.addOneItem(one, outView);
                index_1 += 1;
            };
            this.schedule(cb_1, this._list.frameLoadItv);
        }
        else {
            for (var _i = 0, arrData_1 = arrData; _i < arrData_1.length; _i++) {
                var one = arrData_1[_i];
                this.addOneItem(one, outView);
            }
            this.recycleItemOutView(outView);
            c2f.event.emit(C2FEnum_1.C2FEnum.ExtEvent.VirtualListFillCmpl);
        }
    };
    /** 回收区域外的节点 */
    VirtualLayout.prototype.recycleItemOutView = function (outView) {
        for (var i = outView.length - 1; i >= 0; i--) {
            this.putActivatedItemByIndex(outView[i]);
        }
    };
    /**
     * 区分在view内部与外部的items数组下标（返回的下标数组会从小到大排序）
     */
    VirtualLayout.prototype.checkViewItem = function () {
        // 显示区域内部的下标
        var inView = [];
        // 显示区域外部的下标
        var outView = [];
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            for (var i = 0; i < this._items.length; i++) {
                var item = this._items[i];
                var box = item.getBoundingBox();
                if (box.yMin + this.node.y <= this._viewEdge.yMax && box.yMax + this.node.y >= this._viewEdge.yMin) {
                    inView.push(i);
                }
                else {
                    outView.push(i);
                }
            }
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            for (var i = 0; i < this._items.length; i++) {
                var item = this._items[i];
                var box = item.getBoundingBox();
                if (box.xMin + this.node.x <= this._viewEdge.xMax && box.xMax + this.node.x >= this._viewEdge.xMin) {
                    inView.push(i);
                }
                else {
                    outView.push(i);
                }
            }
        }
        else {
            for (var i = 0; i < this._items.length; i++) {
                var item = this._items[i];
                var box = item.getBoundingBox();
                if (box.xMin + this.node.x <= this._viewEdge.xMax && box.xMax + this.node.x >= this._viewEdge.xMin
                    && box.yMin + this.node.y <= this._viewEdge.yMax && box.yMax + this.node.y >= this._viewEdge.yMin) {
                    inView.push(i);
                }
                else {
                    outView.push(i);
                }
            }
        }
        return { inView: inView, outView: outView };
    };
    /**
     * 设置item数据与坐标
     * @param p 节点坐标
     * @param dataIdx this._dataArr的下标
     * @param itemIdx this._items的下标
     */
    VirtualLayout.prototype.setItem = function (p, dataIdx, itemIdx) {
        var item = this._items[itemIdx];
        item.position = p;
        var vi = item.getComponent(VirtualItem_1.default);
        vi.dataIdx = dataIdx;
        vi.args = this._list.argsArr[dataIdx];
        vi.onRefresh(vi.args);
        if (this._list.others.length > 0) {
            var nodes_1 = [];
            this._otherItemsArr.forEach(function (e) {
                e[itemIdx].position = p;
                nodes_1.push(e[itemIdx]);
            });
            vi.others = nodes_1;
            vi.onRefreshOthers.apply(vi, vi.others);
        }
    };
    /**
     * 激活新的节点，并添加到content下
     * @param show 默认为true。false时不激活节点并添加进节点池中（仅在onInit中使用）
     * @returns 激活的节点在this._items中的下标
     */
    VirtualLayout.prototype.addItemNode = function (show) {
        var _this = this;
        if (show === void 0) { show = true; }
        var node = null;
        if (this._itemPool.length > 0) {
            node = this._itemPool.pop();
            node.opacity = 255;
            this._items.push(node);
            this._otherItemPoolArr.forEach(function (e, i) {
                var otherNode = e.pop();
                otherNode.opacity = 255;
                _this._otherItemsArr[i].push(otherNode);
            });
        }
        else {
            if (this._list.main.templateType === VLTemplate_1.TemplateType.PREFAB) {
                node = c2f.utils.view.instantiateMVCPrefab(this._list.main.templatePrefab, this.node);
            }
            else {
                node = c2f.res.instantiate(this._list.main.templateNode, this.node);
            }
            if (!node.getComponent(VirtualItem_1.default)) {
                node.addComponent(VirtualItem_1.default);
            }
            this.node.addChild(node);
            if (show) {
                node.opacity = 255;
                this._items.push(node);
            }
            else {
                this.putItemNode(node);
            }
            // 拷贝一份子节点数组，防止子节点移除时改变下标
            var childrenCopy_1 = node.children.slice(0);
            this._list.others.forEach(function (e, i) {
                var otherNode = null;
                switch (e.templateType) {
                    case VLItemGroup_1.GroupSource.NODE:
                        otherNode = c2f.res.instantiate(e.templateNode, _this.node);
                        break;
                    case VLItemGroup_1.GroupSource.PREFAB:
                        otherNode = c2f.utils.view.instantiateMVCPrefab(e.templatePrefab, _this.node);
                        break;
                    case VLItemGroup_1.GroupSource.MAIN_ITEM_CHILD:
                        if (!c2f.utils.math.inRange(0, childrenCopy_1.length - 1, e.templateChild)) {
                            cc.error("[VirtualLayout.addItemNode] error e.templateChild: " + e.templateChild);
                            return;
                        }
                        otherNode = childrenCopy_1[e.templateChild];
                        otherNode.removeFromParent();
                        break;
                    default:
                        cc.error("[VirtualLayout.addItemNode] error e.templateType: " + e.templateType);
                        return;
                }
                e.content.addChild(otherNode);
                if (show) {
                    otherNode.opacity = 255;
                    _this._otherItemsArr[i].push(otherNode);
                }
                else {
                    _this.putItemNode(otherNode, true, i);
                }
            });
        }
        return this._items.length - 1;
    };
    /**
     * 将节点放入节点池
     * @param node
     * @param isOther 是否为Others下的节点
     * @param otherIdx Others的下标
     */
    VirtualLayout.prototype.putItemNode = function (node, isOther, otherIdx) {
        if (isOther === void 0) { isOther = false; }
        if (otherIdx === void 0) { otherIdx = 0; }
        node.opacity = 0;
        // 防止已回收的节点触发点击事件
        node.setPosition(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        if (isOther) {
            this._otherItemPoolArr[otherIdx].push(node);
        }
        else {
            var vi = node.getComponent(VirtualItem_1.default);
            vi.onReset();
            this._itemPool.push(node);
        }
    };
    /**
     * 回收已激活的节点
     * @param index 节点在this._items中的下标
     */
    VirtualLayout.prototype.putActivatedItemByIndex = function (index) {
        var _this = this;
        this.putItemNode(this._items[index]);
        this._otherItemsArr.forEach(function (arr, otherIdx) { _this.putItemNode(arr[index], true, otherIdx); });
        this._items.splice(index, 1);
        this._otherItemsArr.forEach(function (arr) {
            arr.splice(index, 1);
        });
    };
    /**
     * 子节点坐标系下坐标转换为父节点坐标系下坐标
     */
    VirtualLayout.prototype.convertToParentPos = function (pos, child) {
        return pos.add(child.position);
    };
    /**
     * 父节点坐标系下坐标转换为子节点坐标系下坐标
     */
    VirtualLayout.prototype.convertToChildPos = function (pos, child) {
        return pos.sub(child.position);
    };
    /**
     * 获取节点自身坐标系下的节点边界矩形
     */
    VirtualLayout.prototype.getNodeEdgeRect = function (node) {
        return cc.rect(-node.width * node.anchorX, -node.height * node.anchorY, node.width, node.height);
    };
    /**
     * 根据元素下标计算对应元素大小，isFixedSize为false时使用
     * @param idx
     */
    VirtualLayout.prototype.calcItemSizeUnfixed = function (idx) {
        var arg = this._list.argsArr[idx];
        if (arg.hasOwnProperty('cellHeight')) {
            return cc.size(0, arg.cellHeight);
        }
        else {
            if (this._list.calcItemSize) {
                return this._list.calcItemSize(this._list.argsArr[idx]);
            }
            else {
                return this._fixedSize;
            }
        }
    };
    /**
     * content位移监听回调
     */
    VirtualLayout.prototype.onPositionChanged = function () {
        // ScrollView源码的bug处理
        // 1.超出边界的差值会记录在_outOfBoundaryAmount里，但是这个_outOfBoundaryAmount不是每次检测边界时都更新的，它需要_outOfBoundaryAmountDirty为true才会更新
        // 2.在content size改变的时候，ScrollView会检测content有没有超出边界，此时会更新_outOfBoundaryAmount并直接修改content坐标。但是修改完content坐标之后_outOfBoundaryAmount记录的仍旧是旧值，此时_outOfBoundaryAmountDirty为false。
        // 3.ScrollView在touchend的时候会触发检测当前有没有超出边界，有的话自动回弹滚动。由于_outOfBoundaryAmountDirty为false，所以并未更新_outOfBoundaryAmount，而是直接取错误的_outOfBoundaryAmount作为超出边界的值，然后进行错误的自动回弹。
        this._list.scrollView["_outOfBoundaryAmountDirty"] = true;
        // 更新标记
        this._viewDirty = true;
        this._posDirty = true;
    };
    /**
     * view size监听回调
     */
    VirtualLayout.prototype.onViewSizeChanged = function () {
        this._viewEdge = this.getNodeEdgeRect(this._view);
    };
    /**
     * 获取content相对view左上角原点位置的偏移值
     * @param idx 元素下标
     * @param itemAnchor 元素的锚点位置（左下角为0点）
     * @param viewAnchor view的锚点位置（左下角为0点）
     */
    VirtualLayout.prototype.getScrollOffset = function (idx, itemAnchor, viewAnchor) {
        idx = Math.min(idx, this._list.argsArr.length - 1);
        return this._list.isFixedSize ? this.getScrollOffsetFixed(idx, itemAnchor, viewAnchor) : this.getScrollOffsetUnfixed(idx, itemAnchor, viewAnchor);
    };
    VirtualLayout.prototype.getScrollOffsetFixed = function (idx, itemAnchor, viewAnchor) {
        var contentEdge = this.getNodeEdgeRect(this.node);
        var xMax, xMin, yMax, yMin;
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + idx * this.layout.spacingY + this._fixedSize.height * idx);
                yMin = yMax - this._fixedSize.height;
            }
            else {
                yMin = contentEdge.yMin + this.layout.bottom + idx * this.layout.spacingY + this._fixedSize.height * idx;
                yMax = yMin + this._fixedSize.height;
            }
            var x = this._viewEdge.xMin - (contentEdge.xMin + this.node.x);
            var y = contentEdge.yMax - (this._fixedSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + idx * this.layout.spacingX + this._fixedSize.width * idx);
                xMin = xMax - this._fixedSize.width;
            }
            else {
                xMin = contentEdge.xMin + this.layout.left + idx * this.layout.spacingX + this._fixedSize.width * idx;
                xMax = xMin + this._fixedSize.width;
            }
            var x = this._fixedSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            var y = contentEdge.yMax - (this._viewEdge.yMax - this.node.y);
            return cc.v2(x, y);
        }
        else {
            // 计算当前元素排在第几行第几列，从0开始
            var rowIndex = 0;
            var columnIndex = 0;
            if (this.layout.startAxis === cc.Layout.AxisDirection.HORIZONTAL) {
                var num = Math.floor((this.node.width - this.layout.left - this.layout.right + this.layout.spacingX) / (this._fixedSize.width + this.layout.spacingX));
                num = Math.max(num, 1);
                rowIndex = Math.floor(idx / num);
                columnIndex = idx % num;
            }
            else {
                var num = Math.floor((this.node.height - this.layout.top - this.layout.bottom + this.layout.spacingY) / (this._fixedSize.height + this.layout.spacingY));
                num = Math.max(num, 1);
                rowIndex = idx % num;
                columnIndex = Math.floor(idx / num);
            }
            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex);
                yMin = yMax - this._fixedSize.height;
            }
            else {
                yMin = contentEdge.yMin + this.layout.bottom + rowIndex * this.layout.spacingY + this._fixedSize.height * rowIndex;
                yMax = yMin + this._fixedSize.height;
            }
            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex);
                xMin = xMax - this._fixedSize.width;
            }
            else {
                xMin = contentEdge.xMin + this.layout.left + columnIndex * this.layout.spacingX + this._fixedSize.width * columnIndex;
                xMax = xMin + this._fixedSize.width;
            }
            var x = this._fixedSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            var y = contentEdge.yMax - (this._fixedSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        }
    };
    VirtualLayout.prototype.getScrollOffsetUnfixed = function (idx, itemAnchor, viewAnchor) {
        var contentEdge = this.getNodeEdgeRect(this.node);
        var xMax, xMin, yMax, yMin;
        var curSize = this.calcItemSizeUnfixed(idx);
        if (this.layout.type === cc.Layout.Type.VERTICAL) {
            var totalHeight = 0;
            for (var i = 0; i < idx; i++) {
                var size = this.calcItemSizeUnfixed(i);
                totalHeight += size.height;
            }
            if (this.layout.verticalDirection === cc.Layout.VerticalDirection.TOP_TO_BOTTOM) {
                yMax = contentEdge.yMax - (this.layout.top + idx * this.layout.spacingY + totalHeight);
                yMin = yMax - curSize.height;
            }
            else {
                yMin = contentEdge.yMin + this.layout.bottom + idx * this.layout.spacingY + totalHeight;
                yMax = yMin + curSize.height;
            }
            var x = this._viewEdge.xMin - (contentEdge.xMin + this.node.x);
            var y = contentEdge.yMax - (curSize.height * itemAnchor.y + yMin) - (1 - viewAnchor.y) * this._viewEdge.height;
            return cc.v2(x, y);
        }
        else if (this.layout.type === cc.Layout.Type.HORIZONTAL) {
            var totalWidth = 0;
            for (var i = 0; i < idx; i++) {
                var size = this.calcItemSizeUnfixed(i);
                totalWidth += size.width;
            }
            if (this.layout.horizontalDirection === cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) {
                xMax = contentEdge.xMax - (this.layout.right + idx * this.layout.spacingX + totalWidth);
                xMin = xMax - curSize.width;
            }
            else {
                xMin = contentEdge.xMin + this.layout.left + idx * this.layout.spacingX + totalWidth;
                xMax = xMin + curSize.width;
            }
            var x = curSize.width * itemAnchor.x + xMin - contentEdge.xMin - viewAnchor.x * this._viewEdge.width;
            var y = contentEdge.yMax - (this._viewEdge.yMax - this.node.y);
            return cc.v2(x, y);
        }
        return null;
    };
    /**
     * 重新排列
     * @param clear 是否清空节点，默认true(仅当不会影响已有元素节点排列时才可传入false)
     */
    VirtualLayout.prototype.rearrange = function (clear) {
        var _this = this;
        if (clear === void 0) { clear = true; }
        this._sizeDirty = true;
        this._viewDirty = true;
        if (clear) {
            this._items.forEach(function (e, i) {
                _this.putItemNode(e);
                _this._otherItemsArr.forEach(function (arr, otherIdx) {
                    _this.putItemNode(arr[i], true, otherIdx);
                });
            });
            this._items.length = 0;
            this._otherItemsArr.forEach(function (arr) { arr.length = 0; });
        }
        this.unscheduleAllCallbacks();
    };
    /**
     * 刷新所有激活的item
     */
    VirtualLayout.prototype.refreshAllItems = function () {
        var _this = this;
        this._items.forEach(function (item) {
            var vi = item.getComponent(VirtualItem_1.default);
            vi.onRefresh(vi.args);
            if (_this._list.others.length > 0) {
                vi.onRefreshOthers.apply(vi, vi.others);
            }
        });
    };
    /**
     * 重置所有激活的item的数据
     */
    VirtualLayout.prototype.resetAllItemData = function () {
        var _this = this;
        this._items.forEach(function (item) {
            var vi = item.getComponent(VirtualItem_1.default);
            var idx = vi.dataIdx;
            vi.args = _this._list.argsArr[idx];
            vi.onRefresh(vi.args);
            if (_this._list.others.length > 0) {
                vi.onRefreshOthers.apply(vi, vi.others);
            }
        });
        this._list.frameLoadCb && this._list.frameLoadCb();
    };
    /** 目标索引号是否在列表中 */
    VirtualLayout.prototype.findIdxIsInView = function (idx) {
        var inView = false;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var one = _a[_i];
            var vi = one.getComponent(VirtualItem_1.default);
            if (idx == vi.dataIdx) {
                inView = true;
                break;
            }
        }
        return inView;
    };
    /** 目标索引号Item */
    VirtualLayout.prototype.findIdxItemPosition = function (idx) {
        var item;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var one = _a[_i];
            var vi = one.getComponent(VirtualItem_1.default);
            if (idx == vi.dataIdx) {
                item = one;
                break;
            }
        }
        return item;
    };
    /** 目标ID找第一个Item */
    VirtualLayout.prototype.findFirstItemById = function (id) {
        var item;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var one = _a[_i];
            var vi = one.getComponent(VirtualItem_1.default);
            if (vi && vi.args) {
                if (id == vi.args.id) {
                    item = one;
                    break;
                }
            }
        }
        return item;
    };
    __decorate([
        property({ type: LayoutProperty_1.LayoutProperty })
    ], VirtualLayout.prototype, "layout", void 0);
    VirtualLayout = __decorate([
        ccclass,
        disallowMultiple
    ], VirtualLayout);
    return VirtualLayout;
}(cc.Component));
exports.default = VirtualLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L1ZpcnR1YWxMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCw2Q0FBNEM7QUFDNUMsMkNBQTRDO0FBQzVDLDZDQUF3QztBQVd4Qzs7R0FFRztBQUNHLElBQUEsS0FBMEMsRUFBRSxDQUFDLFVBQVUsRUFBckQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBRzlEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaytCQztRQS85QkcsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsYUFBYTtRQUNMLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLHlCQUF5QjtRQUNqQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQzlCLHdCQUF3QjtRQUNoQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQ2xDLHFCQUFxQjtRQUNiLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ25DLDhCQUE4QjtRQUN0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUNwQyw0QkFBNEI7UUFDcEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDcEMsbUNBQW1DO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDbkMsNEJBQTRCO1FBQ3BCLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFDL0IsK0NBQStDO1FBQ3ZDLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFDbEMsd0RBQXdEO1FBQ2hELG9CQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUN6Qyw2RUFBNkU7UUFDckUsdUJBQWlCLEdBQWdCLEVBQUUsQ0FBQzs7SUF3OEJoRCxDQUFDO0lBdDhCVSw4QkFBTSxHQUFiLFVBQWMsSUFBaUI7UUFBL0IsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFD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QjtJQUNaLHlDQUFpQixHQUF4QixVQUF5QixFQUFVO1FBQy9CLElBQUksSUFBYSxDQUFDO1FBQ2xCLEtBQWdCLFVBQVcsRUFBWCxLQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUF4QixJQUFJLEdBQUcsU0FBQTtZQUNSLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQ2xCLElBQUksR0FBRyxHQUFHLENBQUE7b0JBQ1YsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBNTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBYyxFQUFFLENBQUM7aURBQ0w7SUFIYixhQUFhO1FBRmpDLE9BQU87UUFDUCxnQkFBZ0I7T0FDSSxhQUFhLENBaytCakM7SUFBRCxvQkFBQztDQWwrQkQsQUFrK0JDLENBbCtCMEMsRUFBRSxDQUFDLFNBQVMsR0FrK0J0RDtrQkFsK0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGRW51bSB9IGZyb20gXCIuLi8uLi8uLi9kZWZpbmUvQzJGRW51bVwiO1xuaW1wb3J0IHsgTGF5b3V0UHJvcGVydHkgfSBmcm9tIFwiLi9MYXlvdXRQcm9wZXJ0eVwiO1xuaW1wb3J0IHsgR3JvdXBTb3VyY2UgfSBmcm9tIFwiLi9WTEl0ZW1Hcm91cFwiO1xuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSBcIi4vVkxUZW1wbGF0ZVwiO1xuaW1wb3J0IFZpcnR1YWxJdGVtIGZyb20gXCIuL1ZpcnR1YWxJdGVtXCI7XG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSBcIi4vVmlydHVhbExpc3RcIjtcblxuXG5pbnRlcmZhY2UgQWRkSXRlbVBhIHtcbiAgICBpZHg6IG51bWJlcjtcbiAgICB4TWluOiBudW1iZXI7XG4gICAgeU1pbjogbnVtYmVyO1xuICAgIHNpemU6IGNjLlNpemU7XG59XG5cbi8qKlxuICog6Jma5ouf5YiX6KGo5omA6ZyA55qE5biD5bGA57uE5Lu2XG4gKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQGRpc2FsbG93TXVsdGlwbGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxMYXlvdXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGF5b3V0UHJvcGVydHkgfSlcbiAgICBsYXlvdXQ6IExheW91dFByb3BlcnR5ID0gbnVsbDtcblxuICAgIC8qKiDmiYDlsZ7omZrmi5/liJfooaggKi9cbiAgICBwcml2YXRlIF9saXN0OiBWaXJ0dWFsTGlzdCA9IG51bGw7XG4gICAgLyoqIG1hc2voioLngrnvvIhjb250ZW5054i26IqC54K577yJICovXG4gICAgcHJpdmF0ZSBfdmlldzogY2MuTm9kZSA9IG51bGw7XG4gICAgLyoqIHZpZXflnZDmoIfns7vkuIt2aWV355qE6L6555WM55+p5b2iICovXG4gICAgcHJpdmF0ZSBfdmlld0VkZ2U6IGNjLlJlY3QgPSBudWxsO1xuICAgIC8qKiDlhYPntKDoioLngrnlpKflsI/lm7rlrprml7bnmoRzaXplICovXG4gICAgcHJpdmF0ZSBfZml4ZWRTaXplOiBjYy5TaXplID0gbnVsbDtcbiAgICAvKiog5qCH6K6w5b2T5YmN5bin5piv5ZCm6ZyA6KaB5pu05pawY29udGVudCBzaXplICovXG4gICAgcHJpdmF0ZSBfc2l6ZURpcnR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOagh+iusOW9k+WJjeW4p+aYr+WQpumcgOimgeabtOaWsHZpZXfljLrln5/mlbDmja7mmL7npLogKi9cbiAgICBwcml2YXRlIF92aWV3RGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKiog5qCH6K6w5b2T5YmN5bin5piv5ZCm6ZyA6KaB5ZCM5q2lb3RoZXJzIGNvbnRlbnTnmoTlnZDmoIcgKi9cbiAgICBwcml2YXRlIF9wb3NEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKiBtYWluIGNvbnRlbnTmv4DmtLvnirbmgIHnmoRpdGVtICovXG4gICAgcHJpdmF0ZSBfaXRlbXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8qKiBtYWluIGNvbnRlbnTooqvlm57mlLbnmoRpdGVt5rGg77yI5LiN56e75Ye66IqC54K55qCR77yM5Y+q6K6+572ub3BhY2l0ee+8iSAqL1xuICAgIHByaXZhdGUgX2l0ZW1Qb29sOiBjYy5Ob2RlW10gPSBbXTtcbiAgICAvKiogb3RoZXJzIGNvbnRlbnTmv4DmtLvnirbmgIHnmoRpdGVt77yM5LiL5qCH6aG65bqP5LiOdGhpcy5saXN0Lk90aGVyc+aVsOe7hOS4gOiHtCAqL1xuICAgIHByaXZhdGUgX290aGVySXRlbXNBcnI6IGNjLk5vZGVbXVtdID0gW107XG4gICAgLyoqIG90aGVycyBjb250ZW506KKr5Zue5pS255qEaXRlbeaxoOaVsOe7hO+8iOS4jeenu+WHuuiKgueCueagke+8jOWPquiuvue9rm9wYWNpdHnvvInvvIzkuIvmoIfpobrluo/kuI50aGlzLmxpc3QuT3RoZXJz5pWw57uE5LiA6Ie0ICovXG4gICAgcHJpdmF0ZSBfb3RoZXJJdGVtUG9vbEFycjogY2MuTm9kZVtdW10gPSBbXTtcblxuICAgIHB1YmxpYyBvbkluaXQobGlzdDogVmlydHVhbExpc3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMuX3ZpZXcgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICB0aGlzLl92aWV3RWRnZSA9IHRoaXMuZ2V0Tm9kZUVkZ2VSZWN0KHRoaXMuX3ZpZXcpO1xuXG4gICAgICAgIC8vIOWIneWni+WMluWIhuWxguebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLl9vdGhlckl0ZW1zQXJyID0gW107XG4gICAgICAgIHRoaXMuX290aGVySXRlbVBvb2xBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5fbGlzdC5vdGhlcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb3RoZXJJdGVtc0Fyci5wdXNoKFtdKTtcbiAgICAgICAgICAgIHRoaXMuX290aGVySXRlbVBvb2xBcnIucHVzaChbXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWFg+e0oOWkp+Wwj+WbuuWumuaXtuWIneWni+WMlmZpeGVkU2l6ZVxuICAgICAgICBpZiAodGhpcy5fZml4ZWRTaXplID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW1Ob2RlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpeGVkU2l6ZSA9IHRoaXMuX2l0ZW1Qb29sWzBdLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDms6jlhozkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMub25Qb3NpdGlvbkNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl92aWV3Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vblZpZXdTaXplQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIOWQjOatpWxheW91dOWPguaVsDrms6jmhI/lkIzmraXml7bmnLogKi9cbiAgICBwdWJsaWMgc3luY0xheW91dFByb3BlcnR5KGluUHJvcGVydHk6IExheW91dFByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gaW5Qcm9wZXJ0eTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyDms6jplIDkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLm9uUG9zaXRpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fdmlldz8ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vblZpZXdTaXplQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIC8v6Kej6Zmk5byV55SoXG4gICAgICAgIHRoaXMuX2xpc3QgPSBudWxsO1xuICAgICAgICB0aGlzLl92aWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5faXRlbVBvb2wgPSBbXTtcbiAgICAgICAgdGhpcy5fb3RoZXJJdGVtc0FyciA9IFtdO1xuICAgICAgICB0aGlzLl9vdGhlckl0ZW1Qb29sQXJyID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56uL5Y2z5pu05paw5biD5bGAXG4gICAgICovXG4gICAgcHVibGljIGZvcmNlVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2libGluZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsYXRlVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCM5q2lb3RoZXJz55qE5Z2Q5qCHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVQb3MoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9zRGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wb3NEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9saXN0Lm90aGVycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBlLmNvbnRlbnQucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsGNvbnRlbnQgc2l6ZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zaXplRGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaXplRGlydHkgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5fbGlzdC5pc0ZpeGVkU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplRml4ZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZVVuZml4ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZUZpeGVkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLmxheW91dC50b3AgKyB0aGlzLmxheW91dC5ib3R0b20gKyAodGhpcy5fbGlzdC5hcmdzQXJyLmxlbmd0aCAtIDEpICogdGhpcy5sYXlvdXQuc3BhY2luZ1kgKyB0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICogdGhpcy5fbGlzdC5hcmdzQXJyLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dC50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdC5hcmdzQXJyLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMubGF5b3V0LmxlZnQgKyB0aGlzLmxheW91dC5yaWdodCArICh0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoIC0gMSkgKiB0aGlzLmxheW91dC5zcGFjaW5nWCArIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCAqIHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09PSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOiuoeeul+S4gOihjOWPr+S7peaOkuWIl+WHoOS4qu+8jOiHs+WwkTHkuKpcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcigodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5sYXlvdXQubGVmdCAtIHRoaXMubGF5b3V0LnJpZ2h0ICsgdGhpcy5sYXlvdXQuc3BhY2luZ1gpIC8gKHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCArIHRoaXMubGF5b3V0LnNwYWNpbmdYKSk7XG4gICAgICAgICAgICAgICAgbnVtID0gTWF0aC5tYXgobnVtLCAxKTtcbiAgICAgICAgICAgICAgICAvLyDorqHnrpflj6/ku6XmjpLliJflh6DooYxcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5jZWlsKHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggLyBudW0pO1xuICAgICAgICAgICAgICAgIC8vIOmrmOW6plxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLmxheW91dC50b3AgKyB0aGlzLmxheW91dC5ib3R0b20gKyAocm93IC0gMSkgKiB0aGlzLmxheW91dC5zcGFjaW5nWSArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQgKiByb3c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOiuoeeul+S4gOWIl+WPr+S7peaOkuWIl+WHoOS4qu+8jOiHs+WwkTHkuKpcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcigodGhpcy5ub2RlLmhlaWdodCAtIHRoaXMubGF5b3V0LnRvcCAtIHRoaXMubGF5b3V0LmJvdHRvbSArIHRoaXMubGF5b3V0LnNwYWNpbmdZKSAvICh0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICsgdGhpcy5sYXlvdXQuc3BhY2luZ1kpKTtcbiAgICAgICAgICAgICAgICBudW0gPSBNYXRoLm1heChudW0sIDEpO1xuICAgICAgICAgICAgICAgIC8vIOiuoeeul+WPr+S7peaOkuWIl+WHoOWIl1xuICAgICAgICAgICAgICAgIGxldCBjb2x1bW4gPSBNYXRoLmNlaWwodGhpcy5fbGlzdC5hcmdzQXJyLmxlbmd0aCAvIG51bSk7XG4gICAgICAgICAgICAgICAgLy8g5a695bqmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5sYXlvdXQubGVmdCArIHRoaXMubGF5b3V0LnJpZ2h0ICsgKGNvbHVtbiAtIDEpICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0aGlzLl9maXhlZFNpemUud2lkdGggKiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVNpemVVbmZpeGVkKCk6IHZvaWQge1xuICAgICAgICAvLyDnvJPlrZjlrr3pq5jvvIzmnIDlkI7otYvlgLzvvIzmmK/lm6DkuLrkv67mlLljb250ZW50IHNpemXml7bkvJrop6blj5FzY3JvbGx2aWV3Ll9jYWxjdWxhdGVCb3VuZGFyee+8jOaUueWPmGNvbnRlbnTnmoTlnZDmoIdcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sYXlvdXQudG9wICsgdGhpcy5sYXlvdXQuYm90dG9tICsgKHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggLSAxKSAqIHRoaXMubGF5b3V0LnNwYWNpbmdZO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY0l0ZW1TaXplVW5maXhlZChpKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sYXlvdXQubGVmdCArIHRoaXMubGF5b3V0LnJpZ2h0ICsgKHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggLSAxKSAqIHRoaXMubGF5b3V0LnNwYWNpbmdYO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY0l0ZW1TaXplVW5maXhlZChpKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsHZpZXfljLrln5/mlbDmja7mmL7npLpcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fdmlld0RpcnR5IHx8IHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXdEaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9saXN0LmlzRml4ZWRTaXplKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXdGaXhlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3VW5maXhlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5bGC57qnXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVTaWJsaW5nKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3QgfHwgIXRoaXMuX2xpc3QuYXJnc0FyciB8fCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGlzdC5pc1N1YmxpbmcpIHtcbiAgICAgICAgICAgIGxldCBtaW4gPSA5OTlcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmkgPSBpdGVtLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpLmFyZ3Muc3VibGluZyA8IG1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluID0gdmkuYXJncy5zdWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmkgPSBpdGVtLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YmxpbmcgPSB2aS5hcmdzLnN1YmxpbmcgLSBtaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0U2libGluZ0luZGV4KCkgIT0gc3VibGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRTaWJsaW5nSW5kZXgoc3VibGluZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgdXBkYXRlVmlld0ZpeGVkKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXJyQWRkRGF0YTogQWRkSXRlbVBhW10gPSBbXTtcbiAgICAgICAgbGV0IHZpZXdSZXN1bHQgPSB0aGlzLmNoZWNrVmlld0l0ZW0oKTtcbiAgICAgICAgbGV0IGluVmlldyA9IHZpZXdSZXN1bHQuaW5WaWV3O1xuICAgICAgICBsZXQgb3V0VmlldyA9IHZpZXdSZXN1bHQub3V0VmlldztcbiAgICAgICAgbGV0IGNvbnRlbnRFZGdlID0gdGhpcy5nZXROb2RlRWRnZVJlY3QodGhpcy5ub2RlKTtcbiAgICAgICAgbGV0IHhNYXg6IG51bWJlciwgeE1pbjogbnVtYmVyLCB5TWF4OiBudW1iZXIsIHlNaW46IG51bWJlcjtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbERpcmVjdGlvbiA9PT0gY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT00pIHtcbiAgICAgICAgICAgICAgICAgICAgeU1heCA9IGNvbnRlbnRFZGdlLnlNYXggLSAodGhpcy5sYXlvdXQudG9wICsgaSAqIHRoaXMubGF5b3V0LnNwYWNpbmdZICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICB5TWluID0geU1heCAtIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5TWF4ICsgdGhpcy5ub2RlLnkgPCB0aGlzLl92aWV3RWRnZS55TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeU1pbiArIHRoaXMubm9kZS55ID4gdGhpcy5fdmlld0VkZ2UueU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5TWluID0gY29udGVudEVkZ2UueU1pbiArIHRoaXMubGF5b3V0LmJvdHRvbSArIGkgKiB0aGlzLmxheW91dC5zcGFjaW5nWSArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQgKiBpO1xuICAgICAgICAgICAgICAgICAgICB5TWF4ID0geU1pbiArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5TWluICsgdGhpcy5ub2RlLnkgPiB0aGlzLl92aWV3RWRnZS55TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeU1heCArIHRoaXMubm9kZS55IDwgdGhpcy5fdmlld0VkZ2UueU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDliKTmlq3mmL7npLrljLrln5/lhoXpg6jmmK/lkKbmnInoioLngrnmmL7npLrmraTmnaHmlbDmja5cbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBpblZpZXcuZmluZEluZGV4KChlKSA9PiB7IHJldHVybiB0aGlzLl9pdGVtc1tlXS5nZXRDb21wb25lbnQoVmlydHVhbEl0ZW0pLmRhdGFJZHggPT09IGk7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5rKh5pyJ6IqC54K55pi+56S65q2k5p2h5pWw5o2u77yM6ZyA5L2/55So5pi+56S65Yy65Z+f5aSW55qE6IqC54K55pi+56S65q2k5p2h5pWw5o2uXG4gICAgICAgICAgICAgICAgYXJyQWRkRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWR4OiBpLFxuICAgICAgICAgICAgICAgICAgICB4TWluOiB4TWluLFxuICAgICAgICAgICAgICAgICAgICB5TWluOiB5TWluLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbiA9PT0gY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVCkge1xuICAgICAgICAgICAgICAgICAgICB4TWF4ID0gY29udGVudEVkZ2UueE1heCAtICh0aGlzLmxheW91dC5yaWdodCArIGkgKiB0aGlzLmxheW91dC5zcGFjaW5nWCArIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCAqIGkpO1xuICAgICAgICAgICAgICAgICAgICB4TWluID0geE1heCAtIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhNYXggKyB0aGlzLm5vZGUueCA8IHRoaXMuX3ZpZXdFZGdlLnhNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4TWluICsgdGhpcy5ub2RlLnggPiB0aGlzLl92aWV3RWRnZS54TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHhNaW4gPSBjb250ZW50RWRnZS54TWluICsgdGhpcy5sYXlvdXQubGVmdCArIGkgKiB0aGlzLmxheW91dC5zcGFjaW5nWCArIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCAqIGk7XG4gICAgICAgICAgICAgICAgICAgIHhNYXggPSB4TWluICsgdGhpcy5fZml4ZWRTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeE1pbiArIHRoaXMubm9kZS54ID4gdGhpcy5fdmlld0VkZ2UueE1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhNYXggKyB0aGlzLm5vZGUueCA8IHRoaXMuX3ZpZXdFZGdlLnhNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5pi+56S65Yy65Z+f5YaF6YOo5piv5ZCm5pyJ6IqC54K55pi+56S65q2k5p2h5pWw5o2uXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gaW5WaWV3LmZpbmRJbmRleCgoZSkgPT4geyByZXR1cm4gdGhpcy5faXRlbXNbZV0uZ2V0Q29tcG9uZW50KFZpcnR1YWxJdGVtKS5kYXRhSWR4ID09PSBpOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOayoeacieiKgueCueaYvuekuuatpOadoeaVsOaNru+8jOmcgOS9v+eUqOaYvuekuuWMuuWfn+WklueahOiKgueCueaYvuekuuatpOadoeaVsOaNrlxuICAgICAgICAgICAgICAgIGFyckFkZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeE1pbjogeE1pbixcbiAgICAgICAgICAgICAgICAgICAgeU1pbjogeU1pbixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyDorqHnrpflvZPliY3lhYPntKDmjpLlnKjnrKzlh6DooYznrKzlh6DliJfvvIzku44w5byA5aeLXG4gICAgICAgICAgICAgICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBjb2x1bW5JbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09PSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi1t+Wni+i9tOS4uuaoquWQkVxuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcigodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5sYXlvdXQubGVmdCAtIHRoaXMubGF5b3V0LnJpZ2h0ICsgdGhpcy5sYXlvdXQuc3BhY2luZ1gpIC8gKHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCArIHRoaXMubGF5b3V0LnNwYWNpbmdYKSk7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IE1hdGgubWF4KG51bSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4ID0gTWF0aC5mbG9vcihpIC8gbnVtKTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXggPSBpICUgbnVtO1xuICAgICAgICAgICAgICAgICAgICAvLyDorqHnrpfnurXlkJFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uID09PSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeU1heCA9IGNvbnRlbnRFZGdlLnlNYXggLSAodGhpcy5sYXlvdXQudG9wICsgcm93SW5kZXggKiB0aGlzLmxheW91dC5zcGFjaW5nWSArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQgKiByb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5TWluID0geU1heCAtIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeU1heCArIHRoaXMubm9kZS55IDwgdGhpcy5fdmlld0VkZ2UueU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlNaW4gKyB0aGlzLm5vZGUueSA+IHRoaXMuX3ZpZXdFZGdlLnlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlNaW4gPSBjb250ZW50RWRnZS55TWluICsgdGhpcy5sYXlvdXQuYm90dG9tICsgcm93SW5kZXggKiB0aGlzLmxheW91dC5zcGFjaW5nWSArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQgKiByb3dJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlNYXggPSB5TWluICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5TWluICsgdGhpcy5ub2RlLnkgPiB0aGlzLl92aWV3RWRnZS55TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeU1heCArIHRoaXMubm9kZS55IDwgdGhpcy5fdmlld0VkZ2UueU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOiuoeeul+aoquWQkVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbiA9PT0gY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeE1heCA9IGNvbnRlbnRFZGdlLnhNYXggLSAodGhpcy5sYXlvdXQucmlnaHQgKyBjb2x1bW5JbmRleCAqIHRoaXMubGF5b3V0LnNwYWNpbmdYICsgdGhpcy5fZml4ZWRTaXplLndpZHRoICogY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeE1pbiA9IHhNYXggLSB0aGlzLl9maXhlZFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4TWluID0gY29udGVudEVkZ2UueE1pbiArIHRoaXMubGF5b3V0LmxlZnQgKyBjb2x1bW5JbmRleCAqIHRoaXMubGF5b3V0LnNwYWNpbmdYICsgdGhpcy5fZml4ZWRTaXplLndpZHRoICogY29sdW1uSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB4TWF4ID0geE1pbiArIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeE1heCArIHRoaXMubm9kZS54IDwgdGhpcy5fdmlld0VkZ2UueE1pbiB8fCB4TWluICsgdGhpcy5ub2RlLnggPiB0aGlzLl92aWV3RWRnZS54TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi1t+Wni+i9tOS4uue6teWQkVxuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcigodGhpcy5ub2RlLmhlaWdodCAtIHRoaXMubGF5b3V0LnRvcCAtIHRoaXMubGF5b3V0LmJvdHRvbSArIHRoaXMubGF5b3V0LnNwYWNpbmdZKSAvICh0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICsgdGhpcy5sYXlvdXQuc3BhY2luZ1kpKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gTWF0aC5tYXgobnVtLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcm93SW5kZXggPSBpICUgbnVtO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleCA9IE1hdGguZmxvb3IoaSAvIG51bSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiuoeeul+aoquWQkVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbiA9PT0gY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeE1heCA9IGNvbnRlbnRFZGdlLnhNYXggLSAodGhpcy5sYXlvdXQucmlnaHQgKyBjb2x1bW5JbmRleCAqIHRoaXMubGF5b3V0LnNwYWNpbmdYICsgdGhpcy5fZml4ZWRTaXplLndpZHRoICogY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeE1pbiA9IHhNYXggLSB0aGlzLl9maXhlZFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeE1heCArIHRoaXMubm9kZS54IDwgdGhpcy5fdmlld0VkZ2UueE1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhNaW4gKyB0aGlzLm5vZGUueCA+IHRoaXMuX3ZpZXdFZGdlLnhNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhNaW4gPSBjb250ZW50RWRnZS54TWluICsgdGhpcy5sYXlvdXQubGVmdCArIGNvbHVtbkluZGV4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0aGlzLl9maXhlZFNpemUud2lkdGggKiBjb2x1bW5JbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhNYXggPSB4TWluICsgdGhpcy5fZml4ZWRTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhNaW4gKyB0aGlzLm5vZGUueCA+IHRoaXMuX3ZpZXdFZGdlLnhNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4TWF4ICsgdGhpcy5ub2RlLnggPCB0aGlzLl92aWV3RWRnZS54TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g6K6h566X57q15ZCRXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbERpcmVjdGlvbiA9PT0gY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlNYXggPSBjb250ZW50RWRnZS55TWF4IC0gKHRoaXMubGF5b3V0LnRvcCArIHJvd0luZGV4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1kgKyB0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICogcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeU1pbiA9IHlNYXggLSB0aGlzLl9maXhlZFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeU1pbiA9IGNvbnRlbnRFZGdlLnlNaW4gKyB0aGlzLmxheW91dC5ib3R0b20gKyByb3dJbmRleCAqIHRoaXMubGF5b3V0LnNwYWNpbmdZICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodCAqIHJvd0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgeU1heCA9IHlNaW4gKyB0aGlzLl9maXhlZFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh5TWF4ICsgdGhpcy5ub2RlLnkgPCB0aGlzLl92aWV3RWRnZS55TWluIHx8IHlNaW4gKyB0aGlzLm5vZGUueSA+IHRoaXMuX3ZpZXdFZGdlLnlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5pi+56S65Yy65Z+f5YaF6YOo5piv5ZCm5pyJ6IqC54K55pi+56S65q2k5p2h5pWw5o2uXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gaW5WaWV3LmZpbmRJbmRleCgoZSkgPT4geyByZXR1cm4gdGhpcy5faXRlbXNbZV0uZ2V0Q29tcG9uZW50KFZpcnR1YWxJdGVtKS5kYXRhSWR4ID09PSBpOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOayoeacieiKgueCueaYvuekuuatpOadoeaVsOaNru+8jOmcgOS9v+eUqOaYvuekuuWMuuWfn+WklueahOiKgueCueaYvuekuuatpOadoeaVsOaNrlxuICAgICAgICAgICAgICAgIGFyckFkZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeE1pbjogeE1pbixcbiAgICAgICAgICAgICAgICAgICAgeU1pbjogeU1pbixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbXNCeURhdGEoYXJyQWRkRGF0YSwgb3V0Vmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3VW5maXhlZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFyckFkZERhdGE6IEFkZEl0ZW1QYVtdID0gW107XG4gICAgICAgIGxldCB2aWV3UmVzdWx0ID0gdGhpcy5jaGVja1ZpZXdJdGVtKCk7XG4gICAgICAgIGxldCBpblZpZXcgPSB2aWV3UmVzdWx0LmluVmlldztcbiAgICAgICAgbGV0IG91dFZpZXcgPSB2aWV3UmVzdWx0Lm91dFZpZXc7XG4gICAgICAgIGxldCBjb250ZW50RWRnZSA9IHRoaXMuZ2V0Tm9kZUVkZ2VSZWN0KHRoaXMubm9kZSk7XG4gICAgICAgIGxldCB4TWF4OiBudW1iZXIsIHhNaW46IG51bWJlciwgeU1heDogbnVtYmVyLCB5TWluOiBudW1iZXI7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTCkge1xuICAgICAgICAgICAgbGV0IHRvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY0l0ZW1TaXplVW5maXhlZChpKTtcbiAgICAgICAgICAgICAgICB0b3RhbEhlaWdodCArPSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWxEaXJlY3Rpb24gPT09IGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NKSB7XG4gICAgICAgICAgICAgICAgICAgIHlNYXggPSBjb250ZW50RWRnZS55TWF4IC0gKHRoaXMubGF5b3V0LnRvcCArIGkgKiB0aGlzLmxheW91dC5zcGFjaW5nWSArICh0b3RhbEhlaWdodCAtIHNpemUuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIHlNaW4gPSB5TWF4IC0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5TWF4ICsgdGhpcy5ub2RlLnkgPCB0aGlzLl92aWV3RWRnZS55TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeU1pbiArIHRoaXMubm9kZS55ID4gdGhpcy5fdmlld0VkZ2UueU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5TWluID0gY29udGVudEVkZ2UueU1pbiArIHRoaXMubGF5b3V0LmJvdHRvbSArIGkgKiB0aGlzLmxheW91dC5zcGFjaW5nWSArICh0b3RhbEhlaWdodCAtIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgeU1heCA9IHlNaW4gKyBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlNaW4gKyB0aGlzLm5vZGUueSA+IHRoaXMuX3ZpZXdFZGdlLnlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh5TWF4ICsgdGhpcy5ub2RlLnkgPCB0aGlzLl92aWV3RWRnZS55TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYvuekuuWMuuWfn+WGhemDqOaYr+WQpuacieiKgueCueaYvuekuuatpOadoeaVsOaNrlxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGluVmlldy5maW5kSW5kZXgoKGUpID0+IHsgcmV0dXJuIHRoaXMuX2l0ZW1zW2VdLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSkuZGF0YUlkeCA9PT0gaTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDmsqHmnInoioLngrnmmL7npLrmraTmnaHmlbDmja7vvIzpnIDkvb/nlKjmmL7npLrljLrln5/lpJbnmoToioLngrnmmL7npLrmraTmnaHmlbDmja5cbiAgICAgICAgICAgICAgICBhcnJBZGREYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZHg6IGksXG4gICAgICAgICAgICAgICAgICAgIHhNaW46IHhNaW4sXG4gICAgICAgICAgICAgICAgICAgIHlNaW46IHlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemUuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgIGxldCB0b3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0LmFyZ3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FsY0l0ZW1TaXplVW5maXhlZChpKTtcbiAgICAgICAgICAgICAgICB0b3RhbFdpZHRoICs9IHNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb24gPT09IGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQpIHtcbiAgICAgICAgICAgICAgICAgICAgeE1heCA9IGNvbnRlbnRFZGdlLnhNYXggLSAodGhpcy5sYXlvdXQucmlnaHQgKyBpICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyAodG90YWxXaWR0aCAtIHNpemUud2lkdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgeE1pbiA9IHhNYXggLSBzaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeE1heCArIHRoaXMubm9kZS54IDwgdGhpcy5fdmlld0VkZ2UueE1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhNaW4gKyB0aGlzLm5vZGUueCA+IHRoaXMuX3ZpZXdFZGdlLnhNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeE1pbiA9IGNvbnRlbnRFZGdlLnhNaW4gKyB0aGlzLmxheW91dC5sZWZ0ICsgaSAqIHRoaXMubGF5b3V0LnNwYWNpbmdYICsgKHRvdGFsV2lkdGggLSBzaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgeE1heCA9IHhNaW4gKyBzaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeE1pbiArIHRoaXMubm9kZS54ID4gdGhpcy5fdmlld0VkZ2UueE1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhNYXggKyB0aGlzLm5vZGUueCA8IHRoaXMuX3ZpZXdFZGdlLnhNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5pi+56S65Yy65Z+f5YaF6YOo5piv5ZCm5pyJ6IqC54K55pi+56S65q2k5p2h5pWw5o2uXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gaW5WaWV3LmZpbmRJbmRleCgoZSkgPT4geyByZXR1cm4gdGhpcy5faXRlbXNbZV0uZ2V0Q29tcG9uZW50KFZpcnR1YWxJdGVtKS5kYXRhSWR4ID09PSBpOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOayoeacieiKgueCueaYvuekuuatpOadoeaVsOaNru+8jOmcgOS9v+eUqOaYvuekuuWMuuWfn+WklueahOiKgueCueaYvuekuuatpOadoeaVsOaNrlxuICAgICAgICAgICAgICAgIGFyckFkZERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeE1pbjogeE1pbixcbiAgICAgICAgICAgICAgICAgICAgeU1pbjogeU1pbixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJdGVtc0J5RGF0YShhcnJBZGREYXRhLCBvdXRWaWV3KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9uZUl0ZW0ob25lOiBBZGRJdGVtUGEsIG91dFZpZXc6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBpdGVtSWR4OiBudW1iZXIgPSBvdXRWaWV3Lmxlbmd0aCA9PT0gMCA/IHRoaXMuYWRkSXRlbU5vZGUoKSA6IG91dFZpZXcuc2hpZnQoKTtcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSB0aGlzLl9pdGVtc1tpdGVtSWR4XTtcbiAgICAgICAgaWYgKG9uZS5zaXplKSB7XG4gICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKG9uZS5zaXplKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlbVBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIGl0ZW1Qb3MueSA9IG9uZS55TWluICsgaXRlbS5hbmNob3JZICogaXRlbS5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgaXRlbVBvcy54ID0gb25lLnhNaW4gKyBpdGVtLmFuY2hvclggKiBpdGVtLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbVBvcy54ID0gb25lLnhNaW4gKyBpdGVtLmFuY2hvclggKiBpdGVtLndpZHRoO1xuICAgICAgICAgICAgaXRlbVBvcy55ID0gb25lLnlNaW4gKyBpdGVtLmFuY2hvclkgKiBpdGVtLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEl0ZW0oaXRlbVBvcywgb25lLmlkeCwgaXRlbUlkeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJdGVtc0J5RGF0YShhcnJEYXRhOiBBZGRJdGVtUGFbXSwgb3V0VmlldzogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKGFyckRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGlzdC5mcmFtZUxvYWRJdHYgPiAwICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBhcnJEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpc3QuZnJhbWVMb2FkQ2IgJiYgdGhpcy5fbGlzdC5mcmFtZUxvYWRDYigpO1xuICAgICAgICAgICAgICAgICAgICAvLyDlm57mlLbljLrln5/lpJbnmoToioLngrlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbU91dFZpZXcob3V0Vmlldyk7XG4gICAgICAgICAgICAgICAgICAgIGMyZi5ldmVudC5lbWl0KEMyRkVudW0uRXh0RXZlbnQuVmlydHVhbExpc3RGaWxsQ21wbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGFyckRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lSXRlbShvbmUsIG91dFZpZXcpO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGNiLCB0aGlzLl9saXN0LmZyYW1lTG9hZEl0dik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmUgb2YgYXJyRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT25lSXRlbShvbmUsIG91dFZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWN5Y2xlSXRlbU91dFZpZXcob3V0Vmlldyk7XG4gICAgICAgICAgICBjMmYuZXZlbnQuZW1pdChDMkZFbnVtLkV4dEV2ZW50LlZpcnR1YWxMaXN0RmlsbENtcGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWbnuaUtuWMuuWfn+WklueahOiKgueCuSAqL1xuICAgIHByaXZhdGUgcmVjeWNsZUl0ZW1PdXRWaWV3KG91dFZpZXc6IG51bWJlcltdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBvdXRWaWV3Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLnB1dEFjdGl2YXRlZEl0ZW1CeUluZGV4KG91dFZpZXdbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yy65YiG5Zyodmlld+WGhemDqOS4juWklumDqOeahGl0ZW1z5pWw57uE5LiL5qCH77yI6L+U5Zue55qE5LiL5qCH5pWw57uE5Lya5LuO5bCP5Yiw5aSn5o6S5bqP77yJXG4gICAgICovXG4gICAgcHJpdmF0ZSBjaGVja1ZpZXdJdGVtKCk6IHsgaW5WaWV3OiBudW1iZXJbXSwgb3V0VmlldzogbnVtYmVyW10gfSB7XG4gICAgICAgIC8vIOaYvuekuuWMuuWfn+WGhemDqOeahOS4i+agh1xuICAgICAgICBsZXQgaW5WaWV3OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAvLyDmmL7npLrljLrln5/lpJbpg6jnmoTkuIvmoIdcbiAgICAgICAgbGV0IG91dFZpZXc6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gaXRlbS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmIChib3gueU1pbiArIHRoaXMubm9kZS55IDw9IHRoaXMuX3ZpZXdFZGdlLnlNYXggJiYgYm94LnlNYXggKyB0aGlzLm5vZGUueSA+PSB0aGlzLl92aWV3RWRnZS55TWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dFZpZXcucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGJveCA9IGl0ZW0uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LnhNaW4gKyB0aGlzLm5vZGUueCA8PSB0aGlzLl92aWV3RWRnZS54TWF4ICYmIGJveC54TWF4ICsgdGhpcy5ub2RlLnggPj0gdGhpcy5fdmlld0VkZ2UueE1pbikge1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRWaWV3LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGJveCA9IGl0ZW0uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LnhNaW4gKyB0aGlzLm5vZGUueCA8PSB0aGlzLl92aWV3RWRnZS54TWF4ICYmIGJveC54TWF4ICsgdGhpcy5ub2RlLnggPj0gdGhpcy5fdmlld0VkZ2UueE1pblxuICAgICAgICAgICAgICAgICAgICAmJiBib3gueU1pbiArIHRoaXMubm9kZS55IDw9IHRoaXMuX3ZpZXdFZGdlLnlNYXggJiYgYm94LnlNYXggKyB0aGlzLm5vZGUueSA+PSB0aGlzLl92aWV3RWRnZS55TWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dFZpZXcucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBpblZpZXc6IGluVmlldywgb3V0Vmlldzogb3V0VmlldyB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rml0ZW3mlbDmja7kuI7lnZDmoIdcbiAgICAgKiBAcGFyYW0gcCDoioLngrnlnZDmoIdcbiAgICAgKiBAcGFyYW0gZGF0YUlkeCB0aGlzLl9kYXRhQXJy55qE5LiL5qCHIFxuICAgICAqIEBwYXJhbSBpdGVtSWR4IHRoaXMuX2l0ZW1z55qE5LiL5qCHXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRJdGVtKHA6IGNjLlZlYzMsIGRhdGFJZHg6IG51bWJlciwgaXRlbUlkeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaXRlbUlkeF07XG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPSBwO1xuICAgICAgICBsZXQgdmkgPSBpdGVtLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSk7XG4gICAgICAgIHZpLmRhdGFJZHggPSBkYXRhSWR4O1xuICAgICAgICB2aS5hcmdzID0gdGhpcy5fbGlzdC5hcmdzQXJyW2RhdGFJZHhdO1xuICAgICAgICB2aS5vblJlZnJlc2godmkuYXJncyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xpc3Qub3RoZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBub2RlczogY2MuTm9kZVtdID0gW107XG4gICAgICAgICAgICB0aGlzLl9vdGhlckl0ZW1zQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlW2l0ZW1JZHhdLnBvc2l0aW9uID0gcDtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGVbaXRlbUlkeF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aS5vdGhlcnMgPSBub2RlcztcbiAgICAgICAgICAgIHZpLm9uUmVmcmVzaE90aGVycyguLi52aS5vdGhlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5r+A5rS75paw55qE6IqC54K577yM5bm25re75Yqg5YiwY29udGVudOS4i1xuICAgICAqIEBwYXJhbSBzaG93IOm7mOiupOS4unRydWXjgIJmYWxzZeaXtuS4jea/gOa0u+iKgueCueW5tua3u+WKoOi/m+iKgueCueaxoOS4re+8iOS7heWcqG9uSW5pdOS4reS9v+eUqO+8iVxuICAgICAqIEByZXR1cm5zIOa/gOa0u+eahOiKgueCueWcqHRoaXMuX2l0ZW1z5Lit55qE5LiL5qCHXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRJdGVtTm9kZShzaG93OiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1Qb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLl9pdGVtUG9vbC5wb3AoKTtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX290aGVySXRlbVBvb2xBcnIuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlck5vZGUgPSBlLnBvcCgpO1xuICAgICAgICAgICAgICAgIG90aGVyTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuX290aGVySXRlbXNBcnJbaV0ucHVzaChvdGhlck5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdC5tYWluLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlBSRUZBQikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBjMmYudXRpbHMudmlldy5pbnN0YW50aWF0ZU1WQ1ByZWZhYih0aGlzLl9saXN0Lm1haW4udGVtcGxhdGVQcmVmYWIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBjMmYucmVzLmluc3RhbnRpYXRlKHRoaXMuX2xpc3QubWFpbi50ZW1wbGF0ZU5vZGUsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5vZGUuZ2V0Q29tcG9uZW50KFZpcnR1YWxJdGVtKSkge1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KFZpcnR1YWxJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHV0SXRlbU5vZGUobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaLt+i0neS4gOS7veWtkOiKgueCueaVsOe7hO+8jOmYsuatouWtkOiKgueCueenu+mZpOaXtuaUueWPmOS4i+agh1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ29weSA9IG5vZGUuY2hpbGRyZW4uc2xpY2UoMCk7XG4gICAgICAgICAgICB0aGlzLl9saXN0Lm90aGVycy5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLnRlbXBsYXRlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyb3VwU291cmNlLk5PREU6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGUgPSBjMmYucmVzLmluc3RhbnRpYXRlKGUudGVtcGxhdGVOb2RlLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR3JvdXBTb3VyY2UuUFJFRkFCOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlID0gYzJmLnV0aWxzLnZpZXcuaW5zdGFudGlhdGVNVkNQcmVmYWIoZS50ZW1wbGF0ZVByZWZhYiwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdyb3VwU291cmNlLk1BSU5fSVRFTV9DSElMRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYzJmLnV0aWxzLm1hdGguaW5SYW5nZSgwLCBjaGlsZHJlbkNvcHkubGVuZ3RoIC0gMSwgZS50ZW1wbGF0ZUNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbVmlydHVhbExheW91dC5hZGRJdGVtTm9kZV0gZXJyb3IgZS50ZW1wbGF0ZUNoaWxkOiAke2UudGVtcGxhdGVDaGlsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGUgPSBjaGlsZHJlbkNvcHlbZS50ZW1wbGF0ZUNoaWxkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbVmlydHVhbExheW91dC5hZGRJdGVtTm9kZV0gZXJyb3IgZS50ZW1wbGF0ZVR5cGU6ICR7ZS50ZW1wbGF0ZVR5cGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY29udGVudC5hZGRDaGlsZChvdGhlck5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vdGhlckl0ZW1zQXJyW2ldLnB1c2gob3RoZXJOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1dEl0ZW1Ob2RlKG90aGVyTm9kZSwgdHJ1ZSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIboioLngrnmlL7lhaXoioLngrnmsaBcbiAgICAgKiBAcGFyYW0gbm9kZSBcbiAgICAgKiBAcGFyYW0gaXNPdGhlciDmmK/lkKbkuLpPdGhlcnPkuIvnmoToioLngrlcbiAgICAgKiBAcGFyYW0gb3RoZXJJZHggT3RoZXJz55qE5LiL5qCHXG4gICAgICovXG4gICAgcHJpdmF0ZSBwdXRJdGVtTm9kZShub2RlOiBjYy5Ob2RlLCBpc090aGVyOiBib29sZWFuID0gZmFsc2UsIG90aGVySWR4OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIC8vIOmYsuatouW3suWbnuaUtueahOiKgueCueinpuWPkeeCueWHu+S6i+S7tlxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgICAgIGlmIChpc090aGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9vdGhlckl0ZW1Qb29sQXJyW290aGVySWR4XS5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZpID0gbm9kZS5nZXRDb21wb25lbnQoVmlydHVhbEl0ZW0pO1xuICAgICAgICAgICAgdmkub25SZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5faXRlbVBvb2wucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWbnuaUtuW3sua/gOa0u+eahOiKgueCuVxuICAgICAqIEBwYXJhbSBpbmRleCDoioLngrnlnKh0aGlzLl9pdGVtc+S4reeahOS4i+agh1xuICAgICAqL1xuICAgIHByaXZhdGUgcHV0QWN0aXZhdGVkSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnB1dEl0ZW1Ob2RlKHRoaXMuX2l0ZW1zW2luZGV4XSk7XG4gICAgICAgIHRoaXMuX290aGVySXRlbXNBcnIuZm9yRWFjaCgoYXJyLCBvdGhlcklkeCkgPT4geyB0aGlzLnB1dEl0ZW1Ob2RlKGFycltpbmRleF0sIHRydWUsIG90aGVySWR4KTsgfSk7XG5cbiAgICAgICAgdGhpcy5faXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fb3RoZXJJdGVtc0Fyci5mb3JFYWNoKChhcnIpID0+IHtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlrZDoioLngrnlnZDmoIfns7vkuIvlnZDmoIfovazmjaLkuLrniLboioLngrnlnZDmoIfns7vkuIvlnZDmoIdcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRUb1BhcmVudFBvcyhwb3M6IGNjLlZlYzMsIGNoaWxkOiBjYy5Ob2RlKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiBwb3MuYWRkKGNoaWxkLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDniLboioLngrnlnZDmoIfns7vkuIvlnZDmoIfovazmjaLkuLrlrZDoioLngrnlnZDmoIfns7vkuIvlnZDmoIdcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRUb0NoaWxkUG9zKHBvczogY2MuVmVjMywgY2hpbGQ6IGNjLk5vZGUpOiBjYy5WZWMzIHtcbiAgICAgICAgcmV0dXJuIHBvcy5zdWIoY2hpbGQucG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluiKgueCueiHqui6q+WdkOagh+ezu+S4i+eahOiKgueCuei+ueeVjOefqeW9olxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Tm9kZUVkZ2VSZWN0KG5vZGU6IGNjLk5vZGUpOiBjYy5SZWN0IHtcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QoLW5vZGUud2lkdGggKiBub2RlLmFuY2hvclgsIC1ub2RlLmhlaWdodCAqIG5vZGUuYW5jaG9yWSwgbm9kZS53aWR0aCwgbm9kZS5oZWlnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNruWFg+e0oOS4i+agh+iuoeeul+WvueW6lOWFg+e0oOWkp+Wwj++8jGlzRml4ZWRTaXpl5Li6ZmFsc2Xml7bkvb/nlKhcbiAgICAgKiBAcGFyYW0gaWR4IFxuICAgICAqL1xuICAgIHByaXZhdGUgY2FsY0l0ZW1TaXplVW5maXhlZChpZHg6IG51bWJlcik6IGNjLlNpemUge1xuICAgICAgICBjb25zdCBhcmcgPSB0aGlzLl9saXN0LmFyZ3NBcnJbaWR4XTtcbiAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eSgnY2VsbEhlaWdodCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2Muc2l6ZSgwLCBhcmcuY2VsbEhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdC5jYWxjSXRlbVNpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5jYWxjSXRlbVNpemUodGhpcy5fbGlzdC5hcmdzQXJyW2lkeF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZml4ZWRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY29udGVudOS9jeenu+ebkeWQrOWbnuiwg1xuICAgICAqL1xuICAgIHByaXZhdGUgb25Qb3NpdGlvbkNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIFNjcm9sbFZpZXfmupDnoIHnmoRidWflpITnkIZcbiAgICAgICAgLy8gMS7otoXlh7rovrnnlYznmoTlt67lgLzkvJrorrDlvZXlnKhfb3V0T2ZCb3VuZGFyeUFtb3VudOmHjO+8jOS9huaYr+i/meS4ql9vdXRPZkJvdW5kYXJ5QW1vdW505LiN5piv5q+P5qyh5qOA5rWL6L6555WM5pe26YO95pu05paw55qE77yM5a6D6ZyA6KaBX291dE9mQm91bmRhcnlBbW91bnREaXJ0eeS4unRydWXmiY3kvJrmm7TmlrBcbiAgICAgICAgLy8gMi7lnKhjb250ZW50IHNpemXmlLnlj5jnmoTml7blgJnvvIxTY3JvbGxWaWV35Lya5qOA5rWLY29udGVudOacieayoeaciei2heWHuui+ueeVjO+8jOatpOaXtuS8muabtOaWsF9vdXRPZkJvdW5kYXJ5QW1vdW505bm255u05o6l5L+u5pS5Y29udGVudOWdkOagh+OAguS9huaYr+S/ruaUueWujGNvbnRlbnTlnZDmoIfkuYvlkI5fb3V0T2ZCb3VuZGFyeUFtb3VudOiusOW9leeahOS7jeaXp+aYr+aXp+WAvO+8jOatpOaXtl9vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHnkuLpmYWxzZeOAglxuICAgICAgICAvLyAzLlNjcm9sbFZpZXflnKh0b3VjaGVuZOeahOaXtuWAmeS8muinpuWPkeajgOa1i+W9k+WJjeacieayoeaciei2heWHuui+ueeVjO+8jOacieeahOivneiHquWKqOWbnuW8uea7muWKqOOAgueUseS6jl9vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHnkuLpmYWxzZe+8jOaJgOS7peW5tuacquabtOaWsF9vdXRPZkJvdW5kYXJ5QW1vdW5077yM6ICM5piv55u05o6l5Y+W6ZSZ6K+v55qEX291dE9mQm91bmRhcnlBbW91bnTkvZzkuLrotoXlh7rovrnnlYznmoTlgLzvvIznhLblkI7ov5vooYzplJnor6/nmoToh6rliqjlm57lvLnjgIJcbiAgICAgICAgdGhpcy5fbGlzdC5zY3JvbGxWaWV3W1wiX291dE9mQm91bmRhcnlBbW91bnREaXJ0eVwiXSA9IHRydWU7XG4gICAgICAgIC8vIOabtOaWsOagh+iusFxuICAgICAgICB0aGlzLl92aWV3RGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wb3NEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdmlldyBzaXpl55uR5ZCs5Zue6LCDXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblZpZXdTaXplQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlld0VkZ2UgPSB0aGlzLmdldE5vZGVFZGdlUmVjdCh0aGlzLl92aWV3KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5Zjb250ZW5055u45a+5dmlld+W3puS4iuinkuWOn+eCueS9jee9rueahOWBj+enu+WAvFxuICAgICAqIEBwYXJhbSBpZHgg5YWD57Sg5LiL5qCHXG4gICAgICogQHBhcmFtIGl0ZW1BbmNob3Ig5YWD57Sg55qE6ZSa54K55L2N572u77yI5bem5LiL6KeS5Li6MOeCue+8iVxuICAgICAqIEBwYXJhbSB2aWV3QW5jaG9yIHZpZXfnmoTplJrngrnkvY3nva7vvIjlt6bkuIvop5LkuLow54K577yJXG4gICAgICovXG4gICAgcHVibGljIGdldFNjcm9sbE9mZnNldChpZHg6IG51bWJlciwgaXRlbUFuY2hvcjogY2MuVmVjMiwgdmlld0FuY2hvcjogY2MuVmVjMik6IGNjLlZlYzIge1xuICAgICAgICBpZHggPSBNYXRoLm1pbihpZHgsIHRoaXMuX2xpc3QuYXJnc0Fyci5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuaXNGaXhlZFNpemUgPyB0aGlzLmdldFNjcm9sbE9mZnNldEZpeGVkKGlkeCwgaXRlbUFuY2hvciwgdmlld0FuY2hvcikgOiB0aGlzLmdldFNjcm9sbE9mZnNldFVuZml4ZWQoaWR4LCBpdGVtQW5jaG9yLCB2aWV3QW5jaG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNjcm9sbE9mZnNldEZpeGVkKGlkeDogbnVtYmVyLCBpdGVtQW5jaG9yOiBjYy5WZWMyLCB2aWV3QW5jaG9yOiBjYy5WZWMyKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBjb250ZW50RWRnZSA9IHRoaXMuZ2V0Tm9kZUVkZ2VSZWN0KHRoaXMubm9kZSk7XG4gICAgICAgIGxldCB4TWF4OiBudW1iZXIsIHhNaW46IG51bWJlciwgeU1heDogbnVtYmVyLCB5TWluOiBudW1iZXI7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC50eXBlID09PSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uID09PSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgICAgIHlNYXggPSBjb250ZW50RWRnZS55TWF4IC0gKHRoaXMubGF5b3V0LnRvcCArIGlkeCAqIHRoaXMubGF5b3V0LnNwYWNpbmdZICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodCAqIGlkeCk7XG4gICAgICAgICAgICAgICAgeU1pbiA9IHlNYXggLSB0aGlzLl9maXhlZFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5TWluID0gY29udGVudEVkZ2UueU1pbiArIHRoaXMubGF5b3V0LmJvdHRvbSArIGlkeCAqIHRoaXMubGF5b3V0LnNwYWNpbmdZICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodCAqIGlkeDtcbiAgICAgICAgICAgICAgICB5TWF4ID0geU1pbiArIHRoaXMuX2ZpeGVkU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuX3ZpZXdFZGdlLnhNaW4gLSAoY29udGVudEVkZ2UueE1pbiArIHRoaXMubm9kZS54KTtcbiAgICAgICAgICAgIGxldCB5ID0gY29udGVudEVkZ2UueU1heCAtICh0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICogaXRlbUFuY2hvci55ICsgeU1pbikgLSAoMSAtIHZpZXdBbmNob3IueSkgKiB0aGlzLl92aWV3RWRnZS5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gY2MudjIoeCwgeSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQudHlwZSA9PT0gY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb24gPT09IGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQpIHtcbiAgICAgICAgICAgICAgICB4TWF4ID0gY29udGVudEVkZ2UueE1heCAtICh0aGlzLmxheW91dC5yaWdodCArIGlkeCAqIHRoaXMubGF5b3V0LnNwYWNpbmdYICsgdGhpcy5fZml4ZWRTaXplLndpZHRoICogaWR4KTtcbiAgICAgICAgICAgICAgICB4TWluID0geE1heCAtIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeE1pbiA9IGNvbnRlbnRFZGdlLnhNaW4gKyB0aGlzLmxheW91dC5sZWZ0ICsgaWR4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0aGlzLl9maXhlZFNpemUud2lkdGggKiBpZHg7XG4gICAgICAgICAgICAgICAgeE1heCA9IHhNaW4gKyB0aGlzLl9maXhlZFNpemUud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCAqIGl0ZW1BbmNob3IueCArIHhNaW4gLSBjb250ZW50RWRnZS54TWluIC0gdmlld0FuY2hvci54ICogdGhpcy5fdmlld0VkZ2Uud2lkdGg7XG4gICAgICAgICAgICBsZXQgeSA9IGNvbnRlbnRFZGdlLnlNYXggLSAodGhpcy5fdmlld0VkZ2UueU1heCAtIHRoaXMubm9kZS55KTtcbiAgICAgICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOiuoeeul+W9k+WJjeWFg+e0oOaOkuWcqOesrOWHoOihjOesrOWHoOWIl++8jOS7jjDlvIDlp4tcbiAgICAgICAgICAgIGxldCByb3dJbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCBjb2x1bW5JbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT09IGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcigodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5sYXlvdXQubGVmdCAtIHRoaXMubGF5b3V0LnJpZ2h0ICsgdGhpcy5sYXlvdXQuc3BhY2luZ1gpIC8gKHRoaXMuX2ZpeGVkU2l6ZS53aWR0aCArIHRoaXMubGF5b3V0LnNwYWNpbmdYKSk7XG4gICAgICAgICAgICAgICAgbnVtID0gTWF0aC5tYXgobnVtLCAxKTtcbiAgICAgICAgICAgICAgICByb3dJbmRleCA9IE1hdGguZmxvb3IoaWR4IC8gbnVtKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleCA9IGlkeCAlIG51bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoKHRoaXMubm9kZS5oZWlnaHQgLSB0aGlzLmxheW91dC50b3AgLSB0aGlzLmxheW91dC5ib3R0b20gKyB0aGlzLmxheW91dC5zcGFjaW5nWSkgLyAodGhpcy5fZml4ZWRTaXplLmhlaWdodCArIHRoaXMubGF5b3V0LnNwYWNpbmdZKSk7XG4gICAgICAgICAgICAgICAgbnVtID0gTWF0aC5tYXgobnVtLCAxKTtcbiAgICAgICAgICAgICAgICByb3dJbmRleCA9IGlkeCAlIG51bTtcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleCA9IE1hdGguZmxvb3IoaWR4IC8gbnVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uID09PSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgICAgIHlNYXggPSBjb250ZW50RWRnZS55TWF4IC0gKHRoaXMubGF5b3V0LnRvcCArIHJvd0luZGV4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1kgKyB0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICogcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgIHlNaW4gPSB5TWF4IC0gdGhpcy5fZml4ZWRTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeU1pbiA9IGNvbnRlbnRFZGdlLnlNaW4gKyB0aGlzLmxheW91dC5ib3R0b20gKyByb3dJbmRleCAqIHRoaXMubGF5b3V0LnNwYWNpbmdZICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodCAqIHJvd0luZGV4O1xuICAgICAgICAgICAgICAgIHlNYXggPSB5TWluICsgdGhpcy5fZml4ZWRTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb24gPT09IGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQpIHtcbiAgICAgICAgICAgICAgICB4TWF4ID0gY29udGVudEVkZ2UueE1heCAtICh0aGlzLmxheW91dC5yaWdodCArIGNvbHVtbkluZGV4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0aGlzLl9maXhlZFNpemUud2lkdGggKiBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgeE1pbiA9IHhNYXggLSB0aGlzLl9maXhlZFNpemUud2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHhNaW4gPSBjb250ZW50RWRnZS54TWluICsgdGhpcy5sYXlvdXQubGVmdCArIGNvbHVtbkluZGV4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0aGlzLl9maXhlZFNpemUud2lkdGggKiBjb2x1bW5JbmRleDtcbiAgICAgICAgICAgICAgICB4TWF4ID0geE1pbiArIHRoaXMuX2ZpeGVkU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5fZml4ZWRTaXplLndpZHRoICogaXRlbUFuY2hvci54ICsgeE1pbiAtIGNvbnRlbnRFZGdlLnhNaW4gLSB2aWV3QW5jaG9yLnggKiB0aGlzLl92aWV3RWRnZS53aWR0aDtcbiAgICAgICAgICAgIGxldCB5ID0gY29udGVudEVkZ2UueU1heCAtICh0aGlzLl9maXhlZFNpemUuaGVpZ2h0ICogaXRlbUFuY2hvci55ICsgeU1pbikgLSAoMSAtIHZpZXdBbmNob3IueSkgKiB0aGlzLl92aWV3RWRnZS5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gY2MudjIoeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNjcm9sbE9mZnNldFVuZml4ZWQoaWR4OiBudW1iZXIsIGl0ZW1BbmNob3I6IGNjLlZlYzIsIHZpZXdBbmNob3I6IGNjLlZlYzIpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IGNvbnRlbnRFZGdlID0gdGhpcy5nZXROb2RlRWRnZVJlY3QodGhpcy5ub2RlKTtcbiAgICAgICAgbGV0IHhNYXg6IG51bWJlciwgeE1pbjogbnVtYmVyLCB5TWF4OiBudW1iZXIsIHlNaW46IG51bWJlcjtcbiAgICAgICAgbGV0IGN1clNpemU6IGNjLlNpemUgPSB0aGlzLmNhbGNJdGVtU2l6ZVVuZml4ZWQoaWR4KTtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICBsZXQgdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNhbGNJdGVtU2l6ZVVuZml4ZWQoaSk7XG4gICAgICAgICAgICAgICAgdG90YWxIZWlnaHQgKz0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWxEaXJlY3Rpb24gPT09IGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NKSB7XG4gICAgICAgICAgICAgICAgeU1heCA9IGNvbnRlbnRFZGdlLnlNYXggLSAodGhpcy5sYXlvdXQudG9wICsgaWR4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1kgKyB0b3RhbEhlaWdodCk7XG4gICAgICAgICAgICAgICAgeU1pbiA9IHlNYXggLSBjdXJTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeU1pbiA9IGNvbnRlbnRFZGdlLnlNaW4gKyB0aGlzLmxheW91dC5ib3R0b20gKyBpZHggKiB0aGlzLmxheW91dC5zcGFjaW5nWSArIHRvdGFsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHlNYXggPSB5TWluICsgY3VyU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuX3ZpZXdFZGdlLnhNaW4gLSAoY29udGVudEVkZ2UueE1pbiArIHRoaXMubm9kZS54KTtcbiAgICAgICAgICAgIGxldCB5ID0gY29udGVudEVkZ2UueU1heCAtIChjdXJTaXplLmhlaWdodCAqIGl0ZW1BbmNob3IueSArIHlNaW4pIC0gKDEgLSB2aWV3QW5jaG9yLnkpICogdGhpcy5fdmlld0VkZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnR5cGUgPT09IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgIGxldCB0b3RhbFdpZHRoOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5jYWxjSXRlbVNpemVVbmZpeGVkKGkpO1xuICAgICAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5ob3Jpem9udGFsRGlyZWN0aW9uID09PSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUKSB7XG4gICAgICAgICAgICAgICAgeE1heCA9IGNvbnRlbnRFZGdlLnhNYXggLSAodGhpcy5sYXlvdXQucmlnaHQgKyBpZHggKiB0aGlzLmxheW91dC5zcGFjaW5nWCArIHRvdGFsV2lkdGgpO1xuICAgICAgICAgICAgICAgIHhNaW4gPSB4TWF4IC0gY3VyU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeE1pbiA9IGNvbnRlbnRFZGdlLnhNaW4gKyB0aGlzLmxheW91dC5sZWZ0ICsgaWR4ICogdGhpcy5sYXlvdXQuc3BhY2luZ1ggKyB0b3RhbFdpZHRoO1xuICAgICAgICAgICAgICAgIHhNYXggPSB4TWluICsgY3VyU2l6ZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB4ID0gY3VyU2l6ZS53aWR0aCAqIGl0ZW1BbmNob3IueCArIHhNaW4gLSBjb250ZW50RWRnZS54TWluIC0gdmlld0FuY2hvci54ICogdGhpcy5fdmlld0VkZ2Uud2lkdGg7XG4gICAgICAgICAgICBsZXQgeSA9IGNvbnRlbnRFZGdlLnlNYXggLSAodGhpcy5fdmlld0VkZ2UueU1heCAtIHRoaXMubm9kZS55KTtcbiAgICAgICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43mlrDmjpLliJdcbiAgICAgKiBAcGFyYW0gY2xlYXIg5piv5ZCm5riF56m66IqC54K577yM6buY6K6kdHJ1ZSjku4XlvZPkuI3kvJrlvbHlk43lt7LmnInlhYPntKDoioLngrnmjpLliJfml7bmiY3lj6/kvKDlhaVmYWxzZSlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhcnJhbmdlKGNsZWFyOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaXplRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl92aWV3RGlydHkgPSB0cnVlO1xuICAgICAgICBpZiAoY2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1dEl0ZW1Ob2RlKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX290aGVySXRlbXNBcnIuZm9yRWFjaCgoYXJyLCBvdGhlcklkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1dEl0ZW1Ob2RlKGFycltpXSwgdHJ1ZSwgb3RoZXJJZHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5fb3RoZXJJdGVtc0Fyci5mb3JFYWNoKChhcnIpID0+IHsgYXJyLmxlbmd0aCA9IDA7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIt+aWsOaJgOaciea/gOa0u+eahGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaEFsbEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmkgPSBpdGVtLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSk7XG4gICAgICAgICAgICB2aS5vblJlZnJlc2godmkuYXJncyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdC5vdGhlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZpLm9uUmVmcmVzaE90aGVycyguLi52aS5vdGhlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva7miYDmnInmv4DmtLvnmoRpdGVt55qE5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0QWxsSXRlbURhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCB2aSA9IGl0ZW0uZ2V0Q29tcG9uZW50KFZpcnR1YWxJdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHZpLmRhdGFJZHg7XG4gICAgICAgICAgICB2aS5hcmdzID0gdGhpcy5fbGlzdC5hcmdzQXJyW2lkeF07XG4gICAgICAgICAgICB2aS5vblJlZnJlc2godmkuYXJncyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdC5vdGhlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZpLm9uUmVmcmVzaE90aGVycyguLi52aS5vdGhlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbGlzdC5mcmFtZUxvYWRDYiAmJiB0aGlzLl9saXN0LmZyYW1lTG9hZENiKCk7XG4gICAgfVxuXG4gICAgLyoqIOebruagh+e0ouW8leWPt+aYr+WQpuWcqOWIl+ihqOS4rSAqL1xuICAgIHB1YmxpYyBmaW5kSWR4SXNJblZpZXcoaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGluVmlldzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5faXRlbXMpIHtcbiAgICAgICAgICAgIGxldCB2aSA9IG9uZS5nZXRDb21wb25lbnQoVmlydHVhbEl0ZW0pO1xuICAgICAgICAgICAgaWYgKGlkeCA9PSB2aS5kYXRhSWR4KSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5WaWV3O1xuICAgIH1cblxuICAgIC8qKiDnm67moIfntKLlvJXlj7dJdGVtICovXG4gICAgcHVibGljIGZpbmRJZHhJdGVtUG9zaXRpb24oaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGU7XG4gICAgICAgIGZvciAobGV0IG9uZSBvZiB0aGlzLl9pdGVtcykge1xuICAgICAgICAgICAgbGV0IHZpID0gb25lLmdldENvbXBvbmVudChWaXJ0dWFsSXRlbSk7XG4gICAgICAgICAgICBpZiAoaWR4ID09IHZpLmRhdGFJZHgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gb25lXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLyoqIOebruagh0lE5om+56ys5LiA5LiqSXRlbSAqL1xuICAgIHB1YmxpYyBmaW5kRmlyc3RJdGVtQnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlO1xuICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5faXRlbXMpIHtcbiAgICAgICAgICAgIGxldCB2aSA9IG9uZS5nZXRDb21wb25lbnQoVmlydHVhbEl0ZW0pO1xuICAgICAgICAgICAgaWYgKHZpICYmIHZpLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gdmkuYXJncy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gb25lXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cblxufVxuIl19