
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/LoopList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47957NchK9M3pnXr5DdUH/B', 'LoopList');
// c2f-framework/component/ui/scrollList/LoopList.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
/** 列表元素模板类型 */
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 0] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 1] = "PREFAB";
})(TemplateType || (TemplateType = {}));
/**
 * 无限循环列表(轮播图)
 */
var LoopList = /** @class */ (function (_super) {
    __extends(LoopList, _super);
    function LoopList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateType = TemplateType.PREFAB;
        _this.templatePrefab = null;
        _this.templateNode = null;
        _this._firstDirty = false;
        _this._refreshDirty = false;
        /** 当前显示的数据下标 */
        _this._curIdx = 0;
        /** 所有item的中间节点下标 */
        _this._midIdx = 2;
        /** 实际需显示的数据长度 */
        _this._dataLen = 0;
        _this._refreshCall = null;
        _this._target = null;
        _this._pageView = null;
        return _this;
    }
    Object.defineProperty(LoopList.prototype, "pageView", {
        get: function () {
            if (!this._pageView) {
                this._pageView = this.getComponent(cc.PageView);
            }
            return this._pageView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoopList.prototype, "view", {
        get: function () { return this.pageView.content.parent; },
        enumerable: false,
        configurable: true
    });
    LoopList.prototype.start = function () {
        // 注册事件
        this.node.on("scroll-ended", this.onScrollEnd, this);
    };
    LoopList.prototype.lateUpdate = function () {
        if (this.pageView.getPages().length === 0) {
            return;
        }
        if (this._firstDirty) {
            this._firstDirty = false;
            this.pageView.setContentPosition(cc.v2(-this.view.width / 2 - this._midIdx * this.view.width, 0));
            this.pageView.setCurrentPageIndex(this._midIdx);
        }
        if (this._refreshDirty) {
            this._refreshDirty = false;
            this.refresh();
        }
    };
    /**
     * 初始化循环列表
     * @param length 数据长度
     * @param curIdx 初始显示的数据
     * @param refreshCall 每个item刷新时的回调
     * @param target 调用refreshCall时的this
     */
    LoopList.prototype.onInit = function (length, curIdx, refreshCall, target) {
        if (target === void 0) { target = null; }
        this._dataLen = length;
        this._curIdx = cc.misc.clampf(curIdx, 0, this._dataLen - 1);
        this._refreshCall = refreshCall;
        this._target = target;
        this._firstDirty = true;
        this._refreshDirty = true;
        // 生成节点
        if (this.pageView.getPages().length === 0) {
            var tmp = this.templateType === TemplateType.PREFAB ? this.templatePrefab : this.templateNode;
            for (var i = 0; i < 5; i++) {
                var node = c2f.res.instantiate(tmp, this.node);
                node.active = true;
                node.setPosition(0, 0);
                this.pageView.addPage(node);
            }
            this.pageView.content.getComponent(cc.Layout).updateLayout();
        }
    };
    /**
     * 重置数据长度与当前显示的数据下标
     */
    LoopList.prototype.resetData = function (length, curIdx) {
        if (curIdx === void 0) { curIdx = null; }
        this._dataLen = length;
        this._curIdx = cc.misc.clampf(curIdx === null ? this._curIdx : curIdx, 0, this._dataLen - 1);
        this._refreshDirty = true;
    };
    /**
     * 根据下标设置当前显示的数据
     */
    LoopList.prototype.setCurIdx = function (curIdx) {
        this._curIdx = curIdx;
        this._refreshDirty = true;
    };
    LoopList.prototype.onScrollEnd = function () {
        var cur = this.pageView.getCurrentPageIndex();
        if (cur === this._midIdx) {
            return;
        }
        this.pageView.setContentPosition(cc.v2(-this.view.width / 2 - this._midIdx * this.view.width, 0));
        this.pageView.setCurrentPageIndex(this._midIdx);
        this._curIdx += cur - this._midIdx;
        while (this._curIdx < 0) {
            this._curIdx += this._dataLen;
        }
        while (this._curIdx > this._dataLen - 1) {
            this._curIdx -= this._dataLen;
        }
        this._refreshDirty = true;
    };
    LoopList.prototype.refresh = function () {
        var _this = this;
        this.pageView.content.children.forEach(function (item, index) {
            var i = _this._curIdx - (_this._midIdx - index);
            while (i < 0) {
                i += _this._dataLen;
            }
            while (i > _this._dataLen - 1) {
                i -= _this._dataLen;
            }
            if (_this._refreshCall) {
                _this._refreshCall.call(_this._target, item, i, i === _this._curIdx);
            }
        });
    };
    /** item刷新事件 */
    LoopList.ITEM_REFRESH = "LoopList-itemRefresh";
    __decorate([
        property({
            type: cc.Enum(TemplateType),
            tooltip: CC_DEV && "列表元素模板类型"
        })
    ], LoopList.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && "列表元素模板预制体",
            visible: function () { return this.templateType === TemplateType.PREFAB; }
        })
    ], LoopList.prototype, "templatePrefab", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表元素模板节点",
            visible: function () { return this.templateType === TemplateType.NODE; }
        })
    ], LoopList.prototype, "templateNode", void 0);
    LoopList = __decorate([
        ccclass,
        disallowMultiple,
        requireComponent(cc.PageView),
        menu("c2f/UI/LoopList")
    ], LoopList);
    return LoopList;
}(cc.Component));
exports.default = LoopList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L0xvb3BMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBa0UsRUFBRSxDQUFDLFVBQVUsRUFBN0UsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRXRGLGVBQWU7QUFDZixJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYiwrQ0FBSSxDQUFBO0lBQ0osbURBQU0sQ0FBQTtBQUNWLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUVEOztHQUVHO0FBS0g7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4SUM7UUF0SVUsa0JBQVksR0FBaUIsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQU9qRCxvQkFBYyxHQUFjLElBQUksQ0FBQztRQU9qQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUN2QyxnQkFBZ0I7UUFDUixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLG9CQUFvQjtRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDcEIsaUJBQWlCO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGtCQUFZLEdBQXlELElBQUksQ0FBQztRQUMxRSxhQUFPLEdBQVEsSUFBSSxDQUFDO1FBRXBCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDOztJQTJHMUMsQ0FBQztJQTFHRyxzQkFBVyw4QkFBUTthQUFuQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUk7YUFBZixjQUE2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXpELHdCQUFLLEdBQWY7UUFDSSxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVTLDZCQUFVLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxNQUFjLEVBQUUsTUFBYyxFQUFFLFdBQWlFLEVBQUUsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUMvSCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLEdBQVEsSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ25HLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNEJBQVMsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsYUFBcUI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU8sOEJBQVcsR0FBbkI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLDBCQUFPLEdBQWY7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUMvQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7WUFDRCxPQUFPLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7WUFFRCxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUlELGVBQWU7SUFDRCxxQkFBWSxHQUFXLHNCQUFzQixDQUFDO0lBTTVEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxNQUFNLElBQUksVUFBVTtTQUNoQyxDQUFDO2tEQUNzRDtJQU94RDtRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtZQUNmLE9BQU8sRUFBRSxNQUFNLElBQUksV0FBVztZQUM5QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRSxDQUFDO29EQUNzQztJQU94QztRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLE9BQU8sRUFBRSxNQUFNLElBQUksVUFBVTtZQUM3QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoRSxDQUFDO2tEQUNrQztJQXRCbkIsUUFBUTtRQUo1QixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDO09BQ0gsUUFBUSxDQThJNUI7SUFBRCxlQUFDO0NBOUlELEFBOElDLENBOUlxQyxFQUFFLENBQUMsU0FBUyxHQThJakQ7a0JBOUlvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIOWIl+ihqOWFg+e0oOaooeadv+exu+WeiyAqL1xuZW51bSBUZW1wbGF0ZVR5cGUge1xuICAgIE5PREUsXG4gICAgUFJFRkFCXG59XG5cbi8qKlxuICog5peg6ZmQ5b6q546v5YiX6KGoKOi9ruaSreWbvilcbiAqL1xuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5QYWdlVmlldylcbkBtZW51KFwiYzJmL1VJL0xvb3BMaXN0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLyoqIGl0ZW3liLfmlrDkuovku7YgKi9cbiAgICBwdWJsaWMgc3RhdGljIElURU1fUkVGUkVTSDogc3RyaW5nID0gXCJMb29wTGlzdC1pdGVtUmVmcmVzaFwiO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShUZW1wbGF0ZVR5cGUpLFxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgXCLliJfooajlhYPntKDmqKHmnb/nsbvlnotcIlxuICAgIH0pXG4gICAgcHVibGljIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlID0gVGVtcGxhdGVUeXBlLlBSRUZBQjtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5YWD57Sg5qih5p2/6aKE5Yi25L2TXCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlBSRUZBQjsgfVxuICAgIH0pXG4gICAgcHVibGljIHRlbXBsYXRlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmIFwi5YiX6KGo5YWD57Sg5qih5p2/6IqC54K5XCIsXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk5PREU7IH1cbiAgICB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZmlyc3REaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3JlZnJlc2hEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKiDlvZPliY3mmL7npLrnmoTmlbDmja7kuIvmoIcgKi9cbiAgICBwcml2YXRlIF9jdXJJZHggPSAwO1xuICAgIC8qKiDmiYDmnIlpdGVt55qE5Lit6Ze06IqC54K55LiL5qCHICovXG4gICAgcHJpdmF0ZSBfbWlkSWR4ID0gMjtcbiAgICAvKiog5a6e6ZmF6ZyA5pi+56S655qE5pWw5o2u6ZW/5bqmICovXG4gICAgcHJpdmF0ZSBfZGF0YUxlbiA9IDA7XG4gICAgcHJpdmF0ZSBfcmVmcmVzaENhbGw6IChub2RlOiBjYy5Ob2RlLCBpZHg6IG51bWJlciwgaXNDdXI6IGJvb2xlYW4pID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgX3RhcmdldDogYW55ID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3BhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XG4gICAgcHVibGljIGdldCBwYWdlVmlldygpOiBjYy5QYWdlVmlldyB7XG4gICAgICAgIGlmICghdGhpcy5fcGFnZVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VWaWV3ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlVmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZXcoKTogY2MuTm9kZSB7IHJldHVybiB0aGlzLnBhZ2VWaWV3LmNvbnRlbnQucGFyZW50OyB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIC8vIOazqOWGjOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vblNjcm9sbEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxhdGVVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3LmdldFBhZ2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0RGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0RGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuc2V0Q29udGVudFBvc2l0aW9uKGNjLnYyKC10aGlzLnZpZXcud2lkdGggLyAyIC0gdGhpcy5fbWlkSWR4ICogdGhpcy52aWV3LndpZHRoLCAwKSk7XG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3LnNldEN1cnJlbnRQYWdlSW5kZXgodGhpcy5fbWlkSWR4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmVmcmVzaERpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5b6q546v5YiX6KGoXG4gICAgICogQHBhcmFtIGxlbmd0aCDmlbDmja7plb/luqZcbiAgICAgKiBAcGFyYW0gY3VySWR4IOWIneWni+aYvuekuueahOaVsOaNrlxuICAgICAqIEBwYXJhbSByZWZyZXNoQ2FsbCDmr4/kuKppdGVt5Yi35paw5pe255qE5Zue6LCDXG4gICAgICogQHBhcmFtIHRhcmdldCDosIPnlKhyZWZyZXNoQ2FsbOaXtueahHRoaXNcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Jbml0KGxlbmd0aDogbnVtYmVyLCBjdXJJZHg6IG51bWJlciwgcmVmcmVzaENhbGw6IChub2RlOiBjYy5Ob2RlLCBpZHg6IG51bWJlciwgaXNDdXI6IGJvb2xlYW4pID0+IHZvaWQsIHRhcmdldDogYW55ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhTGVuID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLl9jdXJJZHggPSBjYy5taXNjLmNsYW1wZihjdXJJZHgsIDAsIHRoaXMuX2RhdGFMZW4gLSAxKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaENhbGwgPSByZWZyZXNoQ2FsbDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLl9maXJzdERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaERpcnR5ID0gdHJ1ZTtcblxuICAgICAgICAvLyDnlJ/miJDoioLngrlcbiAgICAgICAgaWYgKHRoaXMucGFnZVZpZXcuZ2V0UGFnZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCB0bXA6IGFueSA9IHRoaXMudGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuUFJFRkFCID8gdGhpcy50ZW1wbGF0ZVByZWZhYiA6IHRoaXMudGVtcGxhdGVOb2RlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGMyZi5yZXMuaW5zdGFudGlhdGUodG1wLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuYWRkUGFnZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaVsOaNrumVv+W6puS4juW9k+WJjeaYvuekuueahOaVsOaNruS4i+agh1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldERhdGEobGVuZ3RoOiBudW1iZXIsIGN1cklkeDogbnVtYmVyID0gbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhTGVuID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLl9jdXJJZHggPSBjYy5taXNjLmNsYW1wZihjdXJJZHggPT09IG51bGwgPyB0aGlzLl9jdXJJZHggOiBjdXJJZHgsIDAsIHRoaXMuX2RhdGFMZW4gLSAxKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaERpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7kuIvmoIforr7nva7lvZPliY3mmL7npLrnmoTmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Q3VySWR4KGN1cklkeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2N1cklkeCA9IGN1cklkeDtcbiAgICAgICAgdGhpcy5fcmVmcmVzaERpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2Nyb2xsRW5kKCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VyID0gdGhpcy5wYWdlVmlldy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgICAgIGlmIChjdXIgPT09IHRoaXMuX21pZElkeCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZVZpZXcuc2V0Q29udGVudFBvc2l0aW9uKGNjLnYyKC10aGlzLnZpZXcud2lkdGggLyAyIC0gdGhpcy5fbWlkSWR4ICogdGhpcy52aWV3LndpZHRoLCAwKSk7XG4gICAgICAgIHRoaXMucGFnZVZpZXcuc2V0Q3VycmVudFBhZ2VJbmRleCh0aGlzLl9taWRJZHgpO1xuICAgICAgICB0aGlzLl9jdXJJZHggKz0gY3VyIC0gdGhpcy5fbWlkSWR4O1xuICAgICAgICB3aGlsZSAodGhpcy5fY3VySWR4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5fY3VySWR4ICs9IHRoaXMuX2RhdGFMZW47XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMuX2N1cklkeCA+IHRoaXMuX2RhdGFMZW4gLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJJZHggLT0gdGhpcy5fZGF0YUxlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWZyZXNoRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlVmlldy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMuX2N1cklkeCAtICh0aGlzLl9taWRJZHggLSBpbmRleCk7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDApIHtcbiAgICAgICAgICAgICAgICBpICs9IHRoaXMuX2RhdGFMZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaSA+IHRoaXMuX2RhdGFMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgaSAtPSB0aGlzLl9kYXRhTGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVmcmVzaENhbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZyZXNoQ2FsbC5jYWxsKHRoaXMuX3RhcmdldCwgaXRlbSwgaSwgaSA9PT0gdGhpcy5fY3VySWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19