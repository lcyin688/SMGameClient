
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/audit/AuditItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'daf3a0054VJEZhk4y3k7Evr', 'AuditItem');
// c2f-framework/component/ui/audit/AuditItem.ts

"use strict";
/**
 * 提审·设置目标
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditItem = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var AuditItem = /** @class */ (function () {
    function AuditItem() {
        this.target = null;
        this._controlVisible = false;
        this._tsVisible = false;
        this._controlOpacity = false;
        this._tsOpacity = 0;
        this._btnDisableOp0 = false;
    }
    Object.defineProperty(AuditItem.prototype, "controlVisible", {
        get: function () {
            return this._controlVisible;
        },
        set: function (visible) {
            this._controlVisible = visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "tsVisible", {
        get: function () {
            return this._tsVisible;
        },
        set: function (show) {
            this._tsVisible = show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "controlOpacity", {
        get: function () {
            return this._controlOpacity;
        },
        set: function (visible) {
            this._controlOpacity = visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "tsOpacity", {
        get: function () {
            return this._tsOpacity;
        },
        set: function (value) {
            this._tsOpacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditItem.prototype, "btnDisableOp0", {
        get: function () {
            return this._btnDisableOp0;
        },
        set: function (value) {
            this._btnDisableOp0 = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && "列表容器节点",
        })
    ], AuditItem.prototype, "target", void 0);
    __decorate([
        property()
    ], AuditItem.prototype, "_controlVisible", void 0);
    __decorate([
        property({ tooltip: '控制目标节点可见性' })
    ], AuditItem.prototype, "controlVisible", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_tsVisible", void 0);
    __decorate([
        property({ tooltip: '目标节点是否可见性', visible: function () { return this.controlVisible; } })
    ], AuditItem.prototype, "tsVisible", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_controlOpacity", void 0);
    __decorate([
        property({ tooltip: '控制目标节点透明度' })
    ], AuditItem.prototype, "controlOpacity", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_tsOpacity", void 0);
    __decorate([
        property({ tooltip: '目标节点透明度', visible: function () { return this.controlOpacity; } })
    ], AuditItem.prototype, "tsOpacity", null);
    __decorate([
        property()
    ], AuditItem.prototype, "_btnDisableOp0", void 0);
    __decorate([
        property({ tooltip: '目标节点透明度为0时，其button组件无效', visible: function () { return this.controlOpacity; } })
    ], AuditItem.prototype, "btnDisableOp0", null);
    AuditItem = __decorate([
        ccclass("AuditItem"),
        executeInEditMode
    ], AuditItem);
    return AuditItem;
}());
exports.AuditItem = AuditItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9hdWRpdC9BdWRpdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRDtJQUFBO1FBS1csV0FBTSxHQUFZLElBQUksQ0FBQztRQUc5QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQVVqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBVTVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBVWpDLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFVdkIsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFRcEMsQ0FBQztJQTlDRyxzQkFBSSxxQ0FBYzthQUdsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBTEQsVUFBbUIsT0FBZ0I7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxnQ0FBUzthQUdiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFMRCxVQUFjLElBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxxQ0FBYzthQUdsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBTEQsVUFBbUIsT0FBZ0I7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxnQ0FBUzthQUdiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFMRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxvQ0FBYTthQUdqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBTEQsVUFBa0IsS0FBYztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQS9DRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLE9BQU8sRUFBRSxNQUFNLElBQUksUUFBUTtTQUM5QixDQUFDOzZDQUM0QjtJQUc5QjtRQURDLFFBQVEsRUFBRTtzREFDc0I7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7bURBR2xDO0lBTUQ7UUFEQyxRQUFRLEVBQUU7aURBQ2lCO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsY0FBYyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs4Q0FHeEY7SUFNRDtRQURDLFFBQVEsRUFBRTtzREFDc0I7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7bURBR2xDO0lBTUQ7UUFEQyxRQUFRLEVBQUU7aURBQ1k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxjQUFjLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzhDQUd0RjtJQU1EO1FBREMsUUFBUSxFQUFFO3FEQUNxQjtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztrREFHckc7SUFwRFEsU0FBUztRQUZyQixPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BCLGlCQUFpQjtPQUNMLFNBQVMsQ0F3RHJCO0lBQUQsZ0JBQUM7Q0F4REQsQUF3REMsSUFBQTtBQXhEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o+Q5a6hwrforr7nva7nm67moIdcbiAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzKFwiQXVkaXRJdGVtXCIpXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBjbGFzcyBBdWRpdEl0ZW0ge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiBcIuWIl+ihqOWuueWZqOiKgueCuVwiLFxuICAgIH0pXG4gICAgcHVibGljIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF9jb250cm9sVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6ICfmjqfliLbnm67moIfoioLngrnlj6/op4HmgKcnIH0pXG4gICAgc2V0IGNvbnRyb2xWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fY29udHJvbFZpc2libGUgPSB2aXNpYmxlO1xuICAgIH1cbiAgICBnZXQgY29udHJvbFZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sVmlzaWJsZTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF90c1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn55uu5qCH6IqC54K55piv5ZCm5Y+v6KeB5oCnJywgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sVmlzaWJsZTsgfSB9KVxuICAgIHNldCB0c1Zpc2libGUoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl90c1Zpc2libGUgPSBzaG93O1xuICAgIH1cbiAgICBnZXQgdHNWaXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHNWaXNpYmxlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgX2NvbnRyb2xPcGFjaXR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+aOp+WItuebruagh+iKgueCuemAj+aYjuW6picgfSlcbiAgICBzZXQgY29udHJvbE9wYWNpdHkodmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9jb250cm9sT3BhY2l0eSA9IHZpc2libGU7XG4gICAgfVxuICAgIGdldCBjb250cm9sT3BhY2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xPcGFjaXR5O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgX3RzT3BhY2l0eTogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiAn55uu5qCH6IqC54K56YCP5piO5bqmJywgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sT3BhY2l0eTsgfSB9KVxuICAgIHNldCB0c09wYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90c09wYWNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRzT3BhY2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RzT3BhY2l0eTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF9idG5EaXNhYmxlT3AwOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogJ+ebruagh+iKgueCuemAj+aYjuW6puS4ujDml7bvvIzlhbZidXR0b27nu4Tku7bml6DmlYgnLCB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xPcGFjaXR5OyB9IH0pXG4gICAgc2V0IGJ0bkRpc2FibGVPcDAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYnRuRGlzYWJsZU9wMCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYnRuRGlzYWJsZU9wMCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J0bkRpc2FibGVPcDA7XG4gICAgfVxufVxuIl19