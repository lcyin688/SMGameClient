"use strict";
cc._RF.push(module, '8815fg/3FJEjohj/PrC9n21', 'VirtualList');
// c2f-framework/component/ui/scrollList/VirtualList.ts

"use strict";
/**
 * 虚拟列表
 */
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
var EditorTool_1 = require("../../../utils/EditorTool");
var VLItemGroup_1 = require("./VLItemGroup");
var VLTemplate_1 = require("./VLTemplate");
var VirtualLayout_1 = require("./VirtualLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
var VirtualList = /** @class */ (function (_super) {
    __extends(VirtualList, _super);
    function VirtualList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = null;
        _this.others = [];
        _this.isFixedSize = true;
        _this.emptyTip = null;
        _this.frameLoadItv = 0;
        _this.isSubling = false;
        _this._scrollView = null;
        _this._layout = null;
        _this._argsArr = [];
        /** 分帧加载完成回调 */
        _this._frameLoadCb = null;
        _this._calcItemSize = null;
        return _this;
    }
    Object.defineProperty(VirtualList.prototype, "scrollView", {
        get: function () {
            if (!this._scrollView) {
                this._scrollView = this.getComponent(cc.ScrollView);
            }
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VirtualList.prototype, "layout", {
        get: function () {
            if (!this._layout) {
                this._layout = this.scrollView.content.getComponent(VirtualLayout_1.default);
            }
            return this._layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VirtualList.prototype, "argsArr", {
        /** 列表缓存的所有数据 */
        get: function () { return this._argsArr; },
        set: function (v) {
            this._argsArr = v;
            this.layout.rearrange();
            this.listCntChanged();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VirtualList.prototype, "frameLoadCb", {
        get: function () {
            return this._frameLoadCb;
        },
        set: function (v) {
            this._frameLoadCb = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VirtualList.prototype, "calcItemSize", {
        /** 根据参数计算元素大小的接口（isFixedSize为false时必须提供） */
        get: function () { return this._calcItemSize; },
        enumerable: false,
        configurable: true
    });
    ;
    VirtualList.prototype.onLoad = function () {
        if (CC_EDITOR) {
            this.runEditor();
            return;
        }
        if (this.main.templatePrefab || this.main.templateNode) {
            this.initList();
        }
    };
    VirtualList.prototype.onDestroy = function () {
        this.main = null;
        this.others = [];
        this.emptyTip = null;
        this._scrollView = null;
        this._layout = null;
        this._argsArr = [];
        this.frameLoadCb = null;
    };
    VirtualList.prototype.initList = function () {
        if (this.layout) {
            this.layout.onInit(this);
        }
    };
    VirtualList.prototype.resetInEditor = function () {
        this.runEditor();
    };
    VirtualList.prototype.onFocusInEditor = function () {
        if (this.main) {
            this.main.resetMainItemChild();
        }
    };
    /**
     * 编辑器模式下的一些设置
     */
    VirtualList.prototype.runEditor = function () {
        var _this = this;
        if (!CC_EDITOR) {
            return;
        }
        var scrollView = this.getComponent(cc.ScrollView);
        var layout = scrollView.content.getComponent(VirtualLayout_1.default);
        if (!this.main.content) {
            this.main.content = scrollView.content;
        }
        if (!layout) {
            scrollView.content.addComponent(VirtualLayout_1.default);
        }
        this.main.editorCall = function (mainItemChild, refresh) {
            var hasChildType = false;
            for (var i = 0; i < _this.others.length; i++) {
                if (_this.others[i].templateType === VLItemGroup_1.GroupSource.MAIN_ITEM_CHILD) {
                    hasChildType = true;
                    break;
                }
            }
            if (hasChildType) {
                EditorTool_1.default.setClassAttrPropEnum(VLItemGroup_1.VLItemGroup, "templateChild", cc.Enum["getList"](mainItemChild));
                if (refresh) {
                    EditorTool_1.default.refreshSelectedInspector(_this.node);
                }
            }
        };
        if (this.main) {
            this.main.resetMainItemChild();
        }
    };
    /** 列表个数变更 */
    VirtualList.prototype.listCntChanged = function () {
        var count = this.argsArr.length;
        if (this.emptyTip) {
            this.emptyTip.active = count <= 0;
        }
    };
    /**
     * 滚动元素节点到view的指定位置
     * @param idx 元素下标
     * @param itemAnchor 元素的锚点位置（左下角为0点）
     * @param viewAnchor view的锚点位置（左下角为0点）
     * @param t 时间 s
     * @param a 加速度是否衰减，为true且滚动距离大时滚动会不准确
     */
    VirtualList.prototype.scrollItemToView = function (idx, itemAnchor, viewAnchor, t, a) {
        if (itemAnchor === void 0) { itemAnchor = cc.v2(); }
        if (viewAnchor === void 0) { viewAnchor = cc.v2(); }
        if (t === void 0) { t = 0; }
        if (a === void 0) { a = true; }
        this.scrollView.scrollToOffset(this.layout.getScrollOffset(idx, itemAnchor, viewAnchor), t, a);
    };
    /**
     * 滚动到视图顶部
     */
    VirtualList.prototype.scrollToTop = function (timeInSecond, attenuated) {
        if (timeInSecond === void 0) { timeInSecond = 0; }
        if (attenuated === void 0) { attenuated = true; }
        this.scrollView.scrollToTop(timeInSecond, attenuated);
    };
    /**
     * 滚动到视图底部
     */
    VirtualList.prototype.scrollToBottom = function (timeInSecond, attenuated) {
        if (timeInSecond === void 0) { timeInSecond = 0; }
        if (attenuated === void 0) { attenuated = true; }
        this.scrollView.scrollToBottom(timeInSecond, attenuated);
    };
    /**
     * 滚动到视图左部
     */
    VirtualList.prototype.scrollToLeft = function (timeInSecond, attenuated) {
        if (timeInSecond === void 0) { timeInSecond = 0; }
        if (attenuated === void 0) { attenuated = true; }
        this.scrollView.scrollToLeft(timeInSecond, attenuated);
    };
    /**
     * 滚动到视图右部
     */
    VirtualList.prototype.scrollToRight = function (timeInSecond, attenuated) {
        if (timeInSecond === void 0) { timeInSecond = 0; }
        if (attenuated === void 0) { attenuated = true; }
        this.scrollView.scrollToRight(timeInSecond, attenuated);
    };
    /**
     * 根据参数计算元素大小的接口（isFixedSize为false时必须提供）
     */
    VirtualList.prototype.setCalcItemSize = function (call) {
        this._calcItemSize = call;
    };
    /**
     * 立即更新布局
     */
    VirtualList.prototype.forceUpdate = function () {
        this.layout.forceUpdate();
    };
    /**
     * 刷新所有激活的item
     */
    VirtualList.prototype.refreshAllItems = function () {
        this.layout.refreshAllItems();
    };
    /** 刷新列表数据 */
    VirtualList.prototype.refreshAllWithData = function (v) {
        var curCnt = this._argsArr.length;
        if (curCnt > 0 && curCnt == v.length && this.isFixedSize) {
            this._argsArr = v;
            this.layout.resetAllItemData();
            this.listCntChanged();
        }
        else {
            this.argsArr = v;
        }
    };
    /**
     * 重置某个元素数据
     * @param index
     * @param args 元素所需参数
     */
    VirtualList.prototype.reset = function (index, args) {
        if (c2f.utils.math.inRange(0, this._argsArr.length - 1, index)) {
            this._argsArr[index] = args;
            this.layout.rearrange();
        }
    };
    /**
     * 添加元素数据到尾部
     * @param args 元素所需参数
     */
    VirtualList.prototype.push = function (args) {
        var result = this._argsArr.push(args);
        this.layout.rearrange(false);
        this.listCntChanged();
        return result;
    };
    /**
     * 删除尾部元素数据
     */
    VirtualList.prototype.pop = function () {
        var result = this._argsArr.pop();
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    };
    /**
     * 添加元素数据到头部
     * @param args
     */
    VirtualList.prototype.unshift = function (args) {
        var result = this._argsArr.unshift(args);
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    };
    /**
     * 删除头部元素数据
     */
    VirtualList.prototype.shift = function () {
        var result = this._argsArr.shift();
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    };
    /**
     * 插入或删除元素 用法同数组splice
     */
    VirtualList.prototype.splice = function (start, deleteCount, argsArr) {
        var result;
        if (deleteCount === undefined) {
            result = this._argsArr.splice(start);
        }
        else {
            if (argsArr === undefined || argsArr.length === 0) {
                result = this._argsArr.splice(start, deleteCount);
            }
            else {
                result = this._argsArr.splice(start, deleteCount);
                for (var i = 0; i < argsArr.length; i++) {
                    this._argsArr.splice(start + i, 0, argsArr[i]);
                }
            }
        }
        this.layout.rearrange();
        this.listCntChanged();
        return result;
    };
    /**
     * 数据排序
     * @param call
     */
    VirtualList.prototype.sort = function (call) {
        var result = this._argsArr.sort(call);
        this.layout.rearrange();
        return result;
    };
    /**
     * 数据过滤
     */
    VirtualList.prototype.filter = function (call) {
        this._argsArr = this._argsArr.filter(call);
        this.layout.rearrange();
        this.listCntChanged();
        return this._argsArr;
    };
    /** 列表是否在底部 */
    VirtualList.prototype.scrollIsInBottom = function () {
        var inBottom = false;
        var lastIdx = this._argsArr.length - 1;
        var find = this.layout.findIdxIsInView(lastIdx);
        if (this.canScroll()) {
            inBottom = find;
        }
        return inBottom;
    };
    /** 可否滚动 */
    VirtualList.prototype.canScroll = function () {
        var can = false;
        var content = this.scrollView.content;
        if (this.scrollView.vertical) {
            can = content.height >= content.parent.height;
        }
        else {
            can = content.width >= content.parent.width;
        }
        return can;
    };
    __decorate([
        property({ type: VLTemplate_1.VLTemplate, tooltip: CC_DEV && "列表主容器" })
    ], VirtualList.prototype, "main", void 0);
    __decorate([
        property({ type: VLItemGroup_1.VLItemGroup, tooltip: CC_DEV && "列表副容器\n需要分层显示时使用，一般用于降低draw call" })
    ], VirtualList.prototype, "others", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "元素节点大小是否一致\n大小不一致时必须提供calcItemSize接口，且暂不支持grid排版" })
    ], VirtualList.prototype, "isFixedSize", void 0);
    __decorate([
        property(cc.Node)
    ], VirtualList.prototype, "emptyTip", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "分帧加载间隔，为0时表示不分帧" })
    ], VirtualList.prototype, "frameLoadItv", void 0);
    __decorate([
        property({ tooltip: CC_DEV && "是否需要处理层级 为true 需要设置subling" })
    ], VirtualList.prototype, "isSubling", void 0);
    VirtualList = __decorate([
        ccclass,
        disallowMultiple,
        executeInEditMode,
        requireComponent(cc.ScrollView),
        menu("c2f/UI/VirtualList")
    ], VirtualList);
    return VirtualList;
}(cc.Component));
exports.default = VirtualList;

cc._RF.pop();