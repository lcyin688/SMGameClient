
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/controls/CtrlPopDlgPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d2b0oE1BhFELxAFehJDwS9', 'CtrlPopDlgPanel');
// entrance/script/controls/CtrlPopDlgPanel.ts

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
var LinkPrefab_1 = require("../../../c2f-framework/component/common/LinkPrefab");
var C2FEnum_1 = require("../../../c2f-framework/define/C2FEnum");
var PopDlgPanel_1 = require("./entity/PopDlgPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CtrlPopDlgPanel = /** @class */ (function (_super) {
    __extends(CtrlPopDlgPanel, _super);
    function CtrlPopDlgPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._titleID = 0;
        _this._separator = true;
        _this._separatorBottom = 0;
        _this.closeHandler = [];
        return _this;
    }
    Object.defineProperty(CtrlPopDlgPanel.prototype, "titleID", {
        get: function () {
            return this._titleID;
        },
        set: function (value) {
            if (this._titleID != value) {
                this._titleID = value;
            }
            if (this._titleID > 0) {
                this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).setTiTle(c2f.language.words(this.titleID));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CtrlPopDlgPanel.prototype, "separator", {
        get: function () {
            return this._separator;
        },
        set: function (value) {
            this._separator = value;
            this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).separatorVisible(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CtrlPopDlgPanel.prototype, "separatorBottom", {
        get: function () {
            if (this._separatorBottom == 0) {
                this._separatorBottom = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).getSeparatorWidgetBottom();
            }
            return this._separatorBottom;
        },
        set: function (value) {
            this._separatorBottom = value;
            this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default).separatorWidgetBottom(value);
        },
        enumerable: false,
        configurable: true
    });
    CtrlPopDlgPanel.prototype.onLoad = function () {
        var panel = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
        panel.separatorVisible(this.separator);
        if (this.closeHandler.length > 0) {
            panel.setBtnHandler(this.closeHandler);
        }
        panel.separatorWidgetBottom(this.separatorBottom);
        cc.director.on(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    CtrlPopDlgPanel.prototype.onDestroy = function () {
        cc.director.off(C2FEnum_1.C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    };
    CtrlPopDlgPanel.prototype.onDataIDChanged = function () {
        var panel = this.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        if (this.titleID > 0) {
            panel.setTiTle(c2f.language.words(this.titleID));
        }
    };
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_titleID", void 0);
    __decorate([
        property({ tooltip: "弹窗标题ID" })
    ], CtrlPopDlgPanel.prototype, "titleID", null);
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_separator", void 0);
    __decorate([
        property({ tooltip: "是否显示按钮分割线" })
    ], CtrlPopDlgPanel.prototype, "separator", null);
    __decorate([
        property()
    ], CtrlPopDlgPanel.prototype, "_separatorBottom", void 0);
    __decorate([
        property({ visible: function () { return this.separator; }, tooltip: "按钮分割线离底部距离" })
    ], CtrlPopDlgPanel.prototype, "separatorBottom", null);
    __decorate([
        property({ type: cc.Component.EventHandler, tooltip: "关闭按钮事件" })
    ], CtrlPopDlgPanel.prototype, "closeHandler", void 0);
    CtrlPopDlgPanel = __decorate([
        ccclass,
        executeInEditMode
    ], CtrlPopDlgPanel);
    return CtrlPopDlgPanel;
}(cc.Component));
exports.default = CtrlPopDlgPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvY29udHJvbHMvQ3RybFBvcERsZ1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE0RTtBQUM1RSxpRUFBZ0U7QUFDaEUsb0RBQStDO0FBRXpDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRy9EO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0VDO1FBbkVHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFlckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFXM0Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBZTdCLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQzs7SUEwQm5ELENBQUM7SUFqRUcsc0JBQUksb0NBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBWSxLQUFhO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLHFCQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDeEc7UUFDTCxDQUFDOzs7T0FSQTtJQWFELHNCQUFJLHNDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQWMsS0FBYztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZ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QUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzt5REFDbEI7SUE1QzlCLGVBQWU7UUFGbkMsT0FBTztRQUNQLGlCQUFpQjtPQUNHLGVBQWUsQ0FzRW5DO0lBQUQsc0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RTRDLEVBQUUsQ0FBQyxTQUFTLEdBc0V4RDtrQkF0RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlua1ByZWZhYiBmcm9tIFwiLi4vLi4vLi4vYzJmLWZyYW1ld29yay9jb21wb25lbnQvY29tbW9uL0xpbmtQcmVmYWJcIjtcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tIFwiLi4vLi4vLi4vYzJmLWZyYW1ld29yay9kZWZpbmUvQzJGRW51bVwiO1xuaW1wb3J0IFBvcERsZ1BhbmVsIGZyb20gXCIuL2VudGl0eS9Qb3BEbGdQYW5lbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN0cmxQb3BEbGdQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF90aXRsZUlEOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5by556qX5qCH6aKYSURcIiB9KVxuICAgIGdldCB0aXRsZUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVJRDtcbiAgICB9XG4gICAgc2V0IHRpdGxlSUQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fdGl0bGVJRCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGVJRCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90aXRsZUlEID4gMCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoTGlua1ByZWZhYikuZ2V0Q29tcG9uZW50RXgoUG9wRGxnUGFuZWwpLnNldFRpVGxlKGMyZi5sYW5ndWFnZS53b3Jkcyh0aGlzLnRpdGxlSUQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgX3NlcGFyYXRvcjogYm9vbGVhbiA9IHRydWU7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmmK/lkKbmmL7npLrmjInpkq7liIblibLnur9cIiB9KVxuICAgIGdldCBzZXBhcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3I7XG4gICAgfVxuICAgIHNldCBzZXBhcmF0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VwYXJhdG9yID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpLmdldENvbXBvbmVudEV4KFBvcERsZ1BhbmVsKS5zZXBhcmF0b3JWaXNpYmxlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoKVxuICAgIF9zZXBhcmF0b3JCb3R0b206IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5zZXBhcmF0b3IgfSwgdG9vbHRpcDogXCLmjInpkq7liIblibLnur/nprvlupXpg6jot53nprtcIiB9KVxuICAgIGdldCBzZXBhcmF0b3JCb3R0b20oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZXBhcmF0b3JCb3R0b20gPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fc2VwYXJhdG9yQm90dG9tID0gdGhpcy5nZXRDb21wb25lbnQoTGlua1ByZWZhYikuZ2V0Q29tcG9uZW50RXgoUG9wRGxnUGFuZWwpLmdldFNlcGFyYXRvcldpZGdldEJvdHRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JCb3R0b207XG4gICAgfVxuICAgIHNldCBzZXBhcmF0b3JCb3R0b20odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zZXBhcmF0b3JCb3R0b20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoTGlua1ByZWZhYikuZ2V0Q29tcG9uZW50RXgoUG9wRGxnUGFuZWwpLnNlcGFyYXRvcldpZGdldEJvdHRvbSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCB0b29sdGlwOiBcIuWFs+mXreaMiemSruS6i+S7tlwiIH0pXG4gICAgY2xvc2VIYW5kbGVyOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpLmdldENvbXBvbmVudEV4KFBvcERsZ1BhbmVsKTtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVJRCA+IDApIHtcbiAgICAgICAgICAgIHBhbmVsLnNldFRpVGxlKGMyZi5sYW5ndWFnZS53b3Jkcyh0aGlzLnRpdGxlSUQpKTtcbiAgICAgICAgfVxuICAgICAgICBwYW5lbC5zZXBhcmF0b3JWaXNpYmxlKHRoaXMuc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VIYW5kbGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhbmVsLnNldEJ0bkhhbmRsZXIodGhpcy5jbG9zZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIHBhbmVsLnNlcGFyYXRvcldpZGdldEJvdHRvbSh0aGlzLnNlcGFyYXRvckJvdHRvbSk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3Iub24oQzJGRW51bS5FeHRFdmVudC5Td2l0Y2hMYW5ndWFnZSwgdGhpcy5vbkRhdGFJRENoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihDMkZFbnVtLkV4dEV2ZW50LlN3aXRjaExhbmd1YWdlLCB0aGlzLm9uRGF0YUlEQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRhdGFJRENoYW5nZWQoKSB7XG4gICAgICAgIGxldCBwYW5lbCA9IHRoaXMuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpLmdldENvbXBvbmVudEV4KFBvcERsZ1BhbmVsKTtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVJRCA+IDApIHtcbiAgICAgICAgICAgIHBhbmVsLnNldFRpVGxlKGMyZi5sYW5ndWFnZS53b3Jkcyh0aGlzLnRpdGxlSUQpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=