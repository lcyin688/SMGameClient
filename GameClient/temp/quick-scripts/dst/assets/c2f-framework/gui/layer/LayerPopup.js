
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/layer/LayerPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3baab9H85lCfp7tVcQQZzQu', 'LayerPopup');
// c2f-framework/gui/layer/LayerPopup.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerPopUp = void 0;
var LayerUI_1 = require("./LayerUI");
/*
 * 弹窗层，允许同时弹出多个窗口，弹框参数可以查看 PopViewParams
 */
var LayerPopUp = /** @class */ (function (_super) {
    __extends(LayerPopUp, _super);
    function LayerPopUp(name) {
        var _this = _super.call(this, name) || this;
        _this.init();
        return _this;
    }
    LayerPopUp.prototype.init = function () {
        this.black = this.addComponent(cc.BlockInputEvents);
        this.black.enabled = false;
    };
    /**
     * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     传给组件onUIAdded、onUIRemoved方法的参数。
     * @param popParams  弹出界面的设置定义，详情见PopViewParams
     */
    LayerPopUp.prototype.add = function (config, params, popParams) {
        this.black.enabled = true;
        return _super.prototype.add.call(this, config, params, popParams);
    };
    LayerPopUp.prototype.remove = function (prefabPath, isDestroy) {
        _super.prototype.remove.call(this, prefabPath, isDestroy);
        this.setBlackDisable();
    };
    LayerPopUp.prototype.removeByUuid = function (prefabPath, isDestroy) {
        _super.prototype.removeByUuid.call(this, prefabPath, isDestroy);
        this.setBlackDisable();
    };
    LayerPopUp.prototype.setBlackDisable = function () {
        this.black.enabled = false;
    };
    LayerPopUp.prototype.clearUI = function (isDestroy, excludePrefab) {
        if (excludePrefab === void 0) { excludePrefab = []; }
        _super.prototype.clearUI.call(this, isDestroy, excludePrefab);
        this.black.enabled = false;
    };
    return LayerPopUp;
}(LayerUI_1.LayerUI));
exports.LayerPopUp = LayerPopUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9MYXllclBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBb0M7QUFFcEM7O0dBRUc7QUFDSDtJQUFnQyw4QkFBTztJQUduQyxvQkFBWSxJQUFZO1FBQXhCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2hCLENBQUM7SUFFTyx5QkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3QkFBRyxHQUFWLFVBQVcsTUFBZ0IsRUFBRSxNQUFXLEVBQUUsU0FBeUI7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8saUJBQU0sR0FBRyxZQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxVQUFrQixFQUFFLFNBQWtCO1FBQ2hELGlCQUFNLE1BQU0sWUFBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFUyxpQ0FBWSxHQUF0QixVQUF1QixVQUFrQixFQUFFLFNBQWtCO1FBQ3pELGlCQUFNLFlBQVksWUFBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFUyxvQ0FBZSxHQUF6QjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLFNBQWtCLEVBQUUsYUFBNEI7UUFBNUIsOEJBQUEsRUFBQSxrQkFBNEI7UUFDM0QsaUJBQU0sT0FBTyxZQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsQ0ExQytCLGlCQUFPLEdBMEN0QztBQTFDWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcFZpZXdQYXJhbXMsIFVJQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZVSURlZlwiO1xuaW1wb3J0IHsgTGF5ZXJVSSB9IGZyb20gXCIuL0xheWVyVUlcIjtcblxuLypcbiAqIOW8ueeql+Wxgu+8jOWFgeiuuOWQjOaXtuW8ueWHuuWkmuS4queql+WPo++8jOW8ueahhuWPguaVsOWPr+S7peafpeeciyBQb3BWaWV3UGFyYW1zXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXllclBvcFVwIGV4dGVuZHMgTGF5ZXJVSSB7XG4gICAgcHJvdGVjdGVkIGJsYWNrITogY2MuQmxvY2tJbnB1dEV2ZW50cztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLmJsYWNrID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgICAgIHRoaXMuYmxhY2suZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOS4qumihOWItuS7tuiKgueCueWIsFBvcFVw5bGC5a655Zmo5Lit77yM6K+l5pa55rOV5bCG6L+U5Zue5LiA5Liq5ZSv5LiAdXVpZOadpeagh+ivhuivpeaTjeS9nOiKgueCuVxuICAgICAqIEBwYXJhbSBwcmVmYWJQYXRoIOmihOWItuS7tui3r+W+hFxuICAgICAqIEBwYXJhbSBwYXJhbXMgICAgIOS8oOe7mee7hOS7tm9uVUlBZGRlZOOAgW9uVUlSZW1vdmVk5pa55rOV55qE5Y+C5pWw44CCXG4gICAgICogQHBhcmFtIHBvcFBhcmFtcyAg5by55Ye655WM6Z2i55qE6K6+572u5a6a5LmJ77yM6K+m5oOF6KeBUG9wVmlld1BhcmFtc1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGQoY29uZmlnOiBVSUNvbmZpZywgcGFyYW1zOiBhbnksIHBvcFBhcmFtcz86IFBvcFZpZXdQYXJhbXMpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLmJsYWNrLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3VwZXIuYWRkKGNvbmZpZywgcGFyYW1zLCBwb3BQYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUocHJlZmFiUGF0aDogc3RyaW5nLCBpc0Rlc3Ryb3k6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgc3VwZXIucmVtb3ZlKHByZWZhYlBhdGgsIGlzRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tEaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZUJ5VXVpZChwcmVmYWJQYXRoOiBzdHJpbmcsIGlzRGVzdHJveTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBzdXBlci5yZW1vdmVCeVV1aWQocHJlZmFiUGF0aCwgaXNEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zZXRCbGFja0Rpc2FibGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0QmxhY2tEaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmJsYWNrLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJVSShpc0Rlc3Ryb3k6IGJvb2xlYW4sIGV4Y2x1ZGVQcmVmYWI6IHN0cmluZ1tdID0gW10pIHtcbiAgICAgICAgc3VwZXIuY2xlYXJVSShpc0Rlc3Ryb3ksIGV4Y2x1ZGVQcmVmYWIpXG4gICAgICAgIHRoaXMuYmxhY2suZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbn0iXX0=