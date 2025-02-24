
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/scrollList/VirtualItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37390yL2g9Gx56ICLo3MK1K', 'VirtualItem');
// c2f-framework/component/ui/scrollList/VirtualItem.ts

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
var UIPControlBase_1 = require("../../../gui/layer/UIPControlBase");
var _a = cc._decorator, ccclass = _a.ccclass, disallowMultiple = _a.disallowMultiple;
/**
 * 虚拟列表的元素组件
 */
var VirtualItem = /** @class */ (function (_super) {
    __extends(VirtualItem, _super);
    function VirtualItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 列表数据索引 */
        _this.dataIdx = 0;
        /** 列表数据 */
        _this.args = null;
        /** 分层的其余节点，顺序为Others数组的顺序 */
        _this.others = [];
        return _this;
    }
    VirtualItem.prototype.onDestroy = function () {
        this.args = null;
        this.others = [];
        _super.prototype.onDestroy.call(this);
    };
    /**
     * 根据数据刷新item显示
     * @virtual
     */
    VirtualItem.prototype.onRefresh = function (args) {
    };
    /**
     * 在onRefresh之后调用，参数为分层显示的节点，参数顺序为Others数组的顺序
     * @virtual
     */
    VirtualItem.prototype.onRefreshOthers = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
    };
    /**
     * 回收item时重置内部状态
     * @virtual
     */
    VirtualItem.prototype.onReset = function () {
    };
    /**
     * 获取item显示当前数据所需的真实大小（若节点size会根据数据改变，请在此函数内返回准确的size）
     * @virtual
     */
    VirtualItem.prototype.getRealSize = function () {
        return this.node.getContentSize();
    };
    VirtualItem = __decorate([
        ccclass,
        disallowMultiple
    ], VirtualItem);
    return VirtualItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = VirtualItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9zY3JvbGxMaXN0L1ZpcnR1YWxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUU3RCxJQUFBLEtBQWdDLEVBQUUsQ0FBQyxVQUFVLEVBQTNDLE9BQU8sYUFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUVwRDs7R0FFRztBQUdIO0lBQXlDLCtCQUFjO0lBQXZEO1FBQUEscUVBMENDO1FBekNHLGFBQWE7UUFDTixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFdBQVc7UUFDSixVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLDZCQUE2QjtRQUN0QixZQUFNLEdBQWMsRUFBRSxDQUFDOztJQW9DbEMsQ0FBQztJQWxDYSwrQkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSwrQkFBUyxHQUFoQixVQUFpQixJQUFTO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxQ0FBZSxHQUF0QjtRQUF1QixlQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsMEJBQW1COztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU8sR0FBZDtJQUNBLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBekNnQixXQUFXO1FBRi9CLE9BQU87UUFDUCxnQkFBZ0I7T0FDSSxXQUFXLENBMEMvQjtJQUFELGtCQUFDO0NBMUNELEFBMENDLENBMUN3QywrQkFBYyxHQTBDdEQ7a0JBMUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgZGlzYWxsb3dNdWx0aXBsZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDomZrmi5/liJfooajnmoTlhYPntKDnu4Tku7ZcbiAqL1xuQGNjY2xhc3NcbkBkaXNhbGxvd011bHRpcGxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsSXRlbSBleHRlbmRzIFVJUENvbnRyb2xCYXNlIHtcbiAgICAvKiog5YiX6KGo5pWw5o2u57Si5byVICovXG4gICAgcHVibGljIGRhdGFJZHg6IG51bWJlciA9IDA7XG4gICAgLyoqIOWIl+ihqOaVsOaNriAqL1xuICAgIHB1YmxpYyBhcmdzOiBhbnkgPSBudWxsO1xuICAgIC8qKiDliIblsYLnmoTlhbbkvZnoioLngrnvvIzpobrluo/kuLpPdGhlcnPmlbDnu4TnmoTpobrluo8gKi9cbiAgICBwdWJsaWMgb3RoZXJzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXJncyA9IG51bGw7XG4gICAgICAgIHRoaXMub3RoZXJzID0gW107XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNruaVsOaNruWIt+aWsGl0ZW3mmL7npLpcbiAgICAgKiBAdmlydHVhbFxuICAgICAqL1xuICAgIHB1YmxpYyBvblJlZnJlc2goYXJnczogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zyob25SZWZyZXNo5LmL5ZCO6LCD55So77yM5Y+C5pWw5Li65YiG5bGC5pi+56S655qE6IqC54K577yM5Y+C5pWw6aG65bqP5Li6T3RoZXJz5pWw57uE55qE6aG65bqPXG4gICAgICogQHZpcnR1YWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZWZyZXNoT3RoZXJzKC4uLm5vZGVzOiBjYy5Ob2RlW10pOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlm57mlLZpdGVt5pe26YeN572u5YaF6YOo54q25oCBXG4gICAgICogQHZpcnR1YWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZXNldCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5ZpdGVt5pi+56S65b2T5YmN5pWw5o2u5omA6ZyA55qE55yf5a6e5aSn5bCP77yI6Iul6IqC54K5c2l6ZeS8muagueaNruaVsOaNruaUueWPmO+8jOivt+WcqOatpOWHveaVsOWGhei/lOWbnuWHhuehrueahHNpemXvvIlcbiAgICAgKiBAdmlydHVhbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSZWFsU2l6ZSgpOiBjYy5TaXplIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIH1cbn1cbiJdfQ==