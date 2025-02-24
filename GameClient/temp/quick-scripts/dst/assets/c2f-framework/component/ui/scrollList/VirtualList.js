
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/VirtualList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L1ZpcnR1YWxMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gsd0RBQW1EO0FBQ25ELDZDQUF5RDtBQUN6RCwyQ0FBMEM7QUFDMUMsaURBQTRDO0FBRXRDLElBQUEsS0FBcUYsRUFBRSxDQUFDLFVBQVUsRUFBaEcsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBTXpHO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBdVVDO1FBclVVLFVBQUksR0FBZSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFrQixFQUFFLENBQUM7UUFHM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTFCLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQVFsQyxhQUFPLEdBQWtCLElBQUksQ0FBQztRQVE5QixjQUFRLEdBQVUsRUFBRSxDQUFDO1FBUzdCLGVBQWU7UUFDUCxrQkFBWSxHQUFhLElBQUksQ0FBQztRQVE5QixtQkFBYSxHQUEyQixJQUFJLENBQUM7O0lBa1J6RCxDQUFDO0lBblRHLHNCQUFXLG1DQUFVO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdkQ7WUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywrQkFBTTthQUFqQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQzthQUN0RTtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLGdDQUFPO1FBRGxCLGdCQUFnQjthQUNoQixjQUE4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3JELFVBQW1CLENBQVE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BTG9EO0lBU3JELHNCQUFXLG9DQUFXO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFDRCxVQUF1QixDQUFXO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBT0Qsc0JBQVcscUNBQVk7UUFEdkIsNENBQTRDO2FBQzVDLGNBQW9ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUV2RSw0QkFBTSxHQUFoQjtRQUNJLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVTLCtCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFUyxtQ0FBYSxHQUF2QjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVMscUNBQWUsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSywrQkFBUyxHQUFqQjtRQUFBLGlCQThCQztRQTdCRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQUMsYUFBc0IsRUFBRSxPQUFnQjtZQUM1RCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLHlCQUFXLENBQUMsZUFBZSxFQUFFO29CQUM3RCxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUNwQixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxJQUFJLFlBQVksRUFBRTtnQkFDZCxvQkFBVSxDQUFDLG9CQUFvQixDQUFDLHlCQUFXLEVBQUUsZUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDakcsSUFBSSxPQUFPLEVBQUU7b0JBQ1Qsb0JBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNMLG9DQUFjLEdBQXRCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksc0NBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxVQUE2QixFQUFFLFVBQTZCLEVBQUUsQ0FBYSxFQUFFLENBQWlCO1FBQTlGLDJCQUFBLEVBQUEsYUFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUFFLDJCQUFBLEVBQUEsYUFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUFFLGtCQUFBLEVBQUEsS0FBYTtRQUFFLGtCQUFBLEVBQUEsUUFBaUI7UUFDL0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUNBQVcsR0FBbEIsVUFBbUIsWUFBd0IsRUFBRSxVQUEwQjtRQUFwRCw2QkFBQSxFQUFBLGdCQUF3QjtRQUFFLDJCQUFBLEVBQUEsaUJBQTBCO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQ0FBYyxHQUFyQixVQUFzQixZQUF3QixFQUFFLFVBQTBCO1FBQXBELDZCQUFBLEVBQUEsZ0JBQXdCO1FBQUUsMkJBQUEsRUFBQSxpQkFBMEI7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLGtDQUFZLEdBQW5CLFVBQW9CLFlBQXdCLEVBQUUsVUFBMEI7UUFBcEQsNkJBQUEsRUFBQSxnQkFBd0I7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQWEsR0FBcEIsVUFBcUIsWUFBd0IsRUFBRSxVQUEwQjtRQUFwRCw2QkFBQSxFQUFBLGdCQUF3QjtRQUFFLDJCQUFBLEVBQUEsaUJBQTBCO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBZSxHQUF0QixVQUF1QixJQUE0QjtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO0lBQ04sd0NBQWtCLEdBQXpCLFVBQTBCLENBQVE7UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDJCQUFLLEdBQVosVUFBYSxLQUFhLEVBQUUsSUFBUztRQUNqQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMEJBQUksR0FBWCxVQUFZLElBQVM7UUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNJLHlCQUFHLEdBQVY7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBTyxHQUFkLFVBQWUsSUFBUztRQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwyQkFBSyxHQUFaO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw0QkFBTSxHQUFiLFVBQWMsS0FBYSxFQUFFLFdBQW1CLEVBQUUsT0FBYztRQUM1RCxJQUFJLE1BQWEsQ0FBQztRQUNsQixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9DLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMEJBQUksR0FBWCxVQUFZLElBQWdDO1FBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNEJBQU0sR0FBYixVQUFjLElBQTBEO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjO0lBQ1Asc0NBQWdCLEdBQXZCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7SUFDSiwrQkFBUyxHQUFoQjtRQUNJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2pEO2FBQU07WUFDSCxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQXBVRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSx1QkFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7NkNBQzVCO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHlCQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxrQ0FBa0MsRUFBRSxDQUFDOytDQUNyRDtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksa0RBQWtELEVBQUUsQ0FBQztvREFDakQ7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksaUJBQWlCLEVBQUUsQ0FBQztxREFDbkI7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLDRCQUE0QixFQUFFLENBQUM7a0RBQzVCO0lBakJqQixXQUFXO1FBTC9CLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDO09BQ04sV0FBVyxDQXVVL0I7SUFBRCxrQkFBQztDQXZVRCxBQXVVQyxDQXZVd0MsRUFBRSxDQUFDLFNBQVMsR0F1VXBEO2tCQXZVb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6Jma5ouf5YiX6KGoXG4gKi9cblxuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L2dhbWUvR2FtZURhdGFcIjtcbmltcG9ydCBFZGl0b3JUb29sIGZyb20gXCIuLi8uLi8uLi91dGlscy9FZGl0b3JUb29sXCI7XG5pbXBvcnQgeyBHcm91cFNvdXJjZSwgVkxJdGVtR3JvdXAgfSBmcm9tIFwiLi9WTEl0ZW1Hcm91cFwiO1xuaW1wb3J0IHsgVkxUZW1wbGF0ZSB9IGZyb20gXCIuL1ZMVGVtcGxhdGVcIjtcbmltcG9ydCBWaXJ0dWFsTGF5b3V0IGZyb20gXCIuL1ZpcnR1YWxMYXlvdXRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgZXhlY3V0ZUluRWRpdE1vZGUsIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQGRpc2FsbG93TXVsdGlwbGVcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuU2Nyb2xsVmlldylcbkBtZW51KFwiYzJmL1VJL1ZpcnR1YWxMaXN0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogVkxUZW1wbGF0ZSwgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5Li75a655ZmoXCIgfSlcbiAgICBwdWJsaWMgbWFpbjogVkxUZW1wbGF0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBWTEl0ZW1Hcm91cCwgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5Ymv5a655ZmoXFxu6ZyA6KaB5YiG5bGC5pi+56S65pe25L2/55So77yM5LiA6Iis55So5LqO6ZmN5L2OZHJhdyBjYWxsXCIgfSlcbiAgICBwdWJsaWMgb3RoZXJzOiBWTEl0ZW1Hcm91cFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLlhYPntKDoioLngrnlpKflsI/mmK/lkKbkuIDoh7RcXG7lpKflsI/kuI3kuIDoh7Tml7blv4Xpobvmj5DkvptjYWxjSXRlbVNpemXmjqXlj6PvvIzkuJTmmoLkuI3mlK/mjIFncmlk5o6S54mIXCIgfSlcbiAgICBwdWJsaWMgaXNGaXhlZFNpemU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGVtcHR5VGlwOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IENDX0RFViAmJiBcIuWIhuW4p+WKoOi9vemXtOmalO+8jOS4ujDml7booajnpLrkuI3liIbluKdcIiB9KVxuICAgIHB1YmxpYyBmcmFtZUxvYWRJdHY6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBDQ19ERVYgJiYgXCLmmK/lkKbpnIDopoHlpITnkIblsYLnuqcg5Li6dHJ1ZSDpnIDopoHorr7nva5zdWJsaW5nXCIgfSlcbiAgICBwdWJsaWMgaXNTdWJsaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogY2MuU2Nyb2xsVmlldyB7XG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xheW91dDogVmlydHVhbExheW91dCA9IG51bGw7XG4gICAgcHVibGljIGdldCBsYXlvdXQoKTogVmlydHVhbExheW91dCB7XG4gICAgICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5nZXRDb21wb25lbnQoVmlydHVhbExheW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hcmdzQXJyOiBhbnlbXSA9IFtdO1xuICAgIC8qKiDliJfooajnvJPlrZjnmoTmiYDmnInmlbDmja4gKi9cbiAgICBwdWJsaWMgZ2V0IGFyZ3NBcnIoKTogYW55W10geyByZXR1cm4gdGhpcy5fYXJnc0FycjsgfVxuICAgIHB1YmxpYyBzZXQgYXJnc0Fycih2OiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9hcmdzQXJyID0gdjtcbiAgICAgICAgdGhpcy5sYXlvdXQucmVhcnJhbmdlKCk7XG4gICAgICAgIHRoaXMubGlzdENudENoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKiog5YiG5bin5Yqg6L295a6M5oiQ5Zue6LCDICovXG4gICAgcHJpdmF0ZSBfZnJhbWVMb2FkQ2I6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IGZyYW1lTG9hZENiKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lTG9hZENiO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZyYW1lTG9hZENiKHY6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2ZyYW1lTG9hZENiID0gdjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjSXRlbVNpemU6IChhcmdzOiBhbnkpID0+IGNjLlNpemUgPSBudWxsO1xuICAgIC8qKiDmoLnmja7lj4LmlbDorqHnrpflhYPntKDlpKflsI/nmoTmjqXlj6PvvIhpc0ZpeGVkU2l6ZeS4umZhbHNl5pe25b+F6aG75o+Q5L6b77yJICovXG4gICAgcHVibGljIGdldCBjYWxjSXRlbVNpemUoKTogKGFyZ3M6IGFueSkgPT4gY2MuU2l6ZSB7IHJldHVybiB0aGlzLl9jYWxjSXRlbVNpemU7IH07XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkVkaXRvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1haW4udGVtcGxhdGVQcmVmYWIgfHwgdGhpcy5tYWluLnRlbXBsYXRlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0TGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYWluID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdGhlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5lbXB0eVRpcCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXlvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9hcmdzQXJyID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVMb2FkQ2IgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0TGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0KSB7XG4gICAgICAgICAgICB0aGlzLmxheW91dC5vbkluaXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRJbkVkaXRvcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW5FZGl0b3IoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Gb2N1c0luRWRpdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tYWluKSB7XG4gICAgICAgICAgICB0aGlzLm1haW4ucmVzZXRNYWluSXRlbUNoaWxkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnvJbovpHlmajmqKHlvI/kuIvnmoTkuIDkupvorr7nva5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJ1bkVkaXRvcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2Nyb2xsVmlldyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICBsZXQgbGF5b3V0ID0gc2Nyb2xsVmlldy5jb250ZW50LmdldENvbXBvbmVudChWaXJ0dWFsTGF5b3V0KTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4uY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbnRlbnQgPSBzY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuY29udGVudC5hZGRDb21wb25lbnQoVmlydHVhbExheW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLmVkaXRvckNhbGwgPSAobWFpbkl0ZW1DaGlsZDogdW5rbm93biwgcmVmcmVzaDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgbGV0IGhhc0NoaWxkVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm90aGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm90aGVyc1tpXS50ZW1wbGF0ZVR5cGUgPT09IEdyb3VwU291cmNlLk1BSU5fSVRFTV9DSElMRCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzQ2hpbGRUeXBlKSB7XG4gICAgICAgICAgICAgICAgRWRpdG9yVG9vbC5zZXRDbGFzc0F0dHJQcm9wRW51bShWTEl0ZW1Hcm91cCwgXCJ0ZW1wbGF0ZUNoaWxkXCIsIGNjLkVudW1bXCJnZXRMaXN0XCJdKG1haW5JdGVtQ2hpbGQpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICBFZGl0b3JUb29sLnJlZnJlc2hTZWxlY3RlZEluc3BlY3Rvcih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMubWFpbikge1xuICAgICAgICAgICAgdGhpcy5tYWluLnJlc2V0TWFpbkl0ZW1DaGlsZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWIl+ihqOS4quaVsOWPmOabtCAqL1xuICAgIHByaXZhdGUgbGlzdENudENoYW5nZWQoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuYXJnc0Fyci5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLmVtcHR5VGlwKSB7XG4gICAgICAgICAgICB0aGlzLmVtcHR5VGlwLmFjdGl2ZSA9IGNvdW50IDw9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmu5rliqjlhYPntKDoioLngrnliLB2aWV355qE5oyH5a6a5L2N572uXG4gICAgICogQHBhcmFtIGlkeCDlhYPntKDkuIvmoIdcbiAgICAgKiBAcGFyYW0gaXRlbUFuY2hvciDlhYPntKDnmoTplJrngrnkvY3nva7vvIjlt6bkuIvop5LkuLow54K577yJXG4gICAgICogQHBhcmFtIHZpZXdBbmNob3Igdmlld+eahOmUmueCueS9jee9ru+8iOW3puS4i+inkuS4ujDngrnvvIlcbiAgICAgKiBAcGFyYW0gdCDml7bpl7Qgc1xuICAgICAqIEBwYXJhbSBhIOWKoOmAn+W6puaYr+WQpuihsOWHj++8jOS4unRydWXkuJTmu5rliqjot53nprvlpKfml7bmu5rliqjkvJrkuI3lh4bnoa5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsSXRlbVRvVmlldyhpZHg6IG51bWJlciwgaXRlbUFuY2hvcjogY2MuVmVjMiA9IGNjLnYyKCksIHZpZXdBbmNob3I6IGNjLlZlYzIgPSBjYy52MigpLCB0OiBudW1iZXIgPSAwLCBhOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQodGhpcy5sYXlvdXQuZ2V0U2Nyb2xsT2Zmc2V0KGlkeCwgaXRlbUFuY2hvciwgdmlld0FuY2hvciksIHQsIGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa7muWKqOWIsOinhuWbvumhtumDqFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IDAsIGF0dGVudWF0ZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa7muWKqOWIsOinhuWbvuW6lemDqFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IDAsIGF0dGVudWF0ZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa7muWKqOWIsOinhuWbvuW3pumDqFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0xlZnQodGltZUluU2Vjb25kOiBudW1iZXIgPSAwLCBhdHRlbnVhdGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rua5Yqo5Yiw6KeG5Zu+5Y+z6YOoXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kOiBudW1iZXIgPSAwLCBhdHRlbnVhdGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNruWPguaVsOiuoeeul+WFg+e0oOWkp+Wwj+eahOaOpeWPo++8iGlzRml4ZWRTaXpl5Li6ZmFsc2Xml7blv4Xpobvmj5DkvpvvvIlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Q2FsY0l0ZW1TaXplKGNhbGw6IChhcmdzOiBhbnkpID0+IGNjLlNpemUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsY0l0ZW1TaXplID0gY2FsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnq4vljbPmm7TmlrDluIPlsYBcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9yY2VVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGF5b3V0LmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yi35paw5omA5pyJ5r+A5rS755qEaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoQWxsSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlZnJlc2hBbGxJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKiDliLfmlrDliJfooajmlbDmja4gKi9cbiAgICBwdWJsaWMgcmVmcmVzaEFsbFdpdGhEYXRhKHY6IGFueVtdKSB7XG4gICAgICAgIGxldCBjdXJDbnQgPSB0aGlzLl9hcmdzQXJyLmxlbmd0aDtcbiAgICAgICAgaWYgKGN1ckNudCA+IDAgJiYgY3VyQ250ID09IHYubGVuZ3RoICYmIHRoaXMuaXNGaXhlZFNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FyZ3NBcnIgPSB2O1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQucmVzZXRBbGxJdGVtRGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5saXN0Q250Q2hhbmdlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcmdzQXJyID0gdjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9ruafkOS4quWFg+e0oOaVsOaNrlxuICAgICAqIEBwYXJhbSBpbmRleCBcbiAgICAgKiBAcGFyYW0gYXJncyDlhYPntKDmiYDpnIDlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoaW5kZXg6IG51bWJlciwgYXJnczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChjMmYudXRpbHMubWF0aC5pblJhbmdlKDAsIHRoaXMuX2FyZ3NBcnIubGVuZ3RoIC0gMSwgaW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLl9hcmdzQXJyW2luZGV4XSA9IGFyZ3M7XG4gICAgICAgICAgICB0aGlzLmxheW91dC5yZWFycmFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWFg+e0oOaVsOaNruWIsOWwvumDqFxuICAgICAqIEBwYXJhbSBhcmdzIOWFg+e0oOaJgOmcgOWPguaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBwdXNoKGFyZ3M6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9hcmdzQXJyLnB1c2goYXJncyk7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlYXJyYW5nZShmYWxzZSk7XG4gICAgICAgIHRoaXMubGlzdENudENoYW5nZWQoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTlsL7pg6jlhYPntKDmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9wKCk6IGFueSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9hcmdzQXJyLnBvcCgpO1xuICAgICAgICB0aGlzLmxheW91dC5yZWFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy5saXN0Q250Q2hhbmdlZCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWFg+e0oOaVsOaNruWIsOWktOmDqFxuICAgICAqIEBwYXJhbSBhcmdzIFxuICAgICAqL1xuICAgIHB1YmxpYyB1bnNoaWZ0KGFyZ3M6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9hcmdzQXJyLnVuc2hpZnQoYXJncyk7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLmxpc3RDbnRDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5aS06YOo5YWD57Sg5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIHNoaWZ0KCk6IGFueSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9hcmdzQXJyLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLmxpc3RDbnRDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5o+S5YWl5oiW5Yig6Zmk5YWD57SgIOeUqOazleWQjOaVsOe7hHNwbGljZVxuICAgICAqL1xuICAgIHB1YmxpYyBzcGxpY2Uoc3RhcnQ6IG51bWJlciwgZGVsZXRlQ291bnQ6IG51bWJlciwgYXJnc0FycjogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdO1xuICAgICAgICBpZiAoZGVsZXRlQ291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fYXJnc0Fyci5zcGxpY2Uoc3RhcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFyZ3NBcnIgPT09IHVuZGVmaW5lZCB8fCBhcmdzQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2FyZ3NBcnIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2FyZ3NBcnIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FyZ3NBcnIuc3BsaWNlKHN0YXJ0ICsgaSwgMCwgYXJnc0FycltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0LnJlYXJyYW5nZSgpO1xuICAgICAgICB0aGlzLmxpc3RDbnRDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw5o2u5o6S5bqPXG4gICAgICogQHBhcmFtIGNhbGwgXG4gICAgICovXG4gICAgcHVibGljIHNvcnQoY2FsbDogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIpOiBhbnlbXSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9hcmdzQXJyLnNvcnQoY2FsbCk7XG4gICAgICAgIHRoaXMubGF5b3V0LnJlYXJyYW5nZSgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaVsOaNrui/h+a7pFxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXIoY2FsbDogKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIGFycmF5OiBhbnlbXSkgPT4gYm9vbGVhbik6IGFueVtdIHtcbiAgICAgICAgdGhpcy5fYXJnc0FyciA9IHRoaXMuX2FyZ3NBcnIuZmlsdGVyKGNhbGwpO1xuICAgICAgICB0aGlzLmxheW91dC5yZWFycmFuZ2UoKTtcbiAgICAgICAgdGhpcy5saXN0Q250Q2hhbmdlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJnc0FycjtcbiAgICB9XG5cbiAgICAvKiog5YiX6KGo5piv5ZCm5Zyo5bqV6YOoICovXG4gICAgcHVibGljIHNjcm9sbElzSW5Cb3R0b20oKSB7XG4gICAgICAgIGxldCBpbkJvdHRvbSA9IGZhbHNlO1xuICAgICAgICBsZXQgbGFzdElkeCA9IHRoaXMuX2FyZ3NBcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGZpbmQgPSB0aGlzLmxheW91dC5maW5kSWR4SXNJblZpZXcobGFzdElkeCk7XG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbCgpKSB7XG4gICAgICAgICAgICBpbkJvdHRvbSA9IGZpbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluQm90dG9tO1xuICAgIH1cblxuICAgIC8qKiDlj6/lkKbmu5rliqggKi9cbiAgICBwdWJsaWMgY2FuU2Nyb2xsKCkge1xuICAgICAgICBsZXQgY2FuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcudmVydGljYWwpIHtcbiAgICAgICAgICAgIGNhbiA9IGNvbnRlbnQuaGVpZ2h0ID49IGNvbnRlbnQucGFyZW50LmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbiA9IGNvbnRlbnQud2lkdGggPj0gY29udGVudC5wYXJlbnQud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbjtcbiAgICB9XG59XG4iXX0=