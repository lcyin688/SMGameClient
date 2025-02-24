
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/controls/entity/PopDlgPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55ba3UvprJA4bxrJe8qyYeB', 'PopDlgPanel');
// entrance/script/controls/entity/PopDlgPanel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopDlgPanel = /** @class */ (function (_super) {
    __extends(PopDlgPanel, _super);
    function PopDlgPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.btnClose = null;
        _this.separatorLine = null;
        return _this;
    }
    PopDlgPanel.prototype.setTiTle = function (title) {
        this.title.string = title;
    };
    PopDlgPanel.prototype.setBtnHandler = function (handle) {
        this.btnClose.node.active = handle.length > 0 ? true : false;
        this.btnClose.clickEvents = handle;
    };
    PopDlgPanel.prototype.separatorVisible = function (v) {
        if (this.separatorLine) {
            this.separatorLine.active = v;
        }
    };
    PopDlgPanel.prototype.separatorWidgetBottom = function (v) {
        if (!this.separatorLine) {
            return;
        }
        var comp = this.separatorLine.getComponent(cc.Widget);
        if (comp) {
            comp.bottom = v;
        }
        if (!CC_EDITOR) {
            comp.updateAlignment();
        }
    };
    PopDlgPanel.prototype.getSeparatorWidgetBottom = function () {
        var bottom = 0;
        if (this.separatorLine) {
            var comp = this.separatorLine.getComponent(cc.Widget);
            bottom = comp.bottom;
        }
        return bottom;
    };
    /** 快捷设置关闭事件 */
    PopDlgPanel.prototype.quickSetCloseHnadler = function (ower, handlerName) {
        if (handlerName === void 0) { handlerName = 'closeView'; }
        var handler = new cc.Component.EventHandler();
        handler.target = ower.node;
        handler.component = c2f.utils.view.getComponentName(ower);
        handler.handler = handlerName;
        handler.customEventData = "";
        this.setBtnHandler([handler]);
    };
    __decorate([
        property(cc.Label)
    ], PopDlgPanel.prototype, "title", void 0);
    __decorate([
        property(cc.Button)
    ], PopDlgPanel.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopDlgPanel.prototype, "separatorLine", void 0);
    PopDlgPanel = __decorate([
        ccclass
    ], PopDlgPanel);
    return PopDlgPanel;
}(cc.Component));
exports.default = PopDlgPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvY29udHJvbHMvZW50aXR5L1BvcERsZ1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBeURDO1FBdERHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFnRGxDLENBQUM7SUE5Q1UsOEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRU0sbUNBQWEsR0FBcEIsVUFBcUIsTUFBbUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVNLHNDQUFnQixHQUF2QixVQUF3QixDQUFVO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU0sMkNBQXFCLEdBQTVCLFVBQTZCLENBQVM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVNLDhDQUF3QixHQUEvQjtRQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZTtJQUNSLDBDQUFvQixHQUEzQixVQUE0QixJQUFrQixFQUFFLFdBQWlDO1FBQWpDLDRCQUFBLEVBQUEseUJBQWlDO1FBQzdFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNZO0lBVGIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXlEL0I7SUFBRCxrQkFBQztDQXpERCxBQXlEQyxDQXpEd0MsRUFBRSxDQUFDLFNBQVMsR0F5RHBEO2tCQXpEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BEbGdQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXBhcmF0b3JMaW5lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRUaVRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gdGl0bGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJ0bkhhbmRsZXIoaGFuZGxlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pIHtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5ub2RlLmFjdGl2ZSA9IGhhbmRsZS5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmNsaWNrRXZlbnRzID0gaGFuZGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXBhcmF0b3JWaXNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc2VwYXJhdG9yTGluZSkge1xuICAgICAgICAgICAgdGhpcy5zZXBhcmF0b3JMaW5lLmFjdGl2ZSA9IHY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VwYXJhdG9yV2lkZ2V0Qm90dG9tKHY6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VwYXJhdG9yTGluZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb21wID0gdGhpcy5zZXBhcmF0b3JMaW5lLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAoY29tcCkge1xuICAgICAgICAgICAgY29tcC5ib3R0b20gPSB2O1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICBjb21wLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlcGFyYXRvcldpZGdldEJvdHRvbSgpIHtcbiAgICAgICAgbGV0IGJvdHRvbSA9IDA7XG4gICAgICAgIGlmICh0aGlzLnNlcGFyYXRvckxpbmUpIHtcbiAgICAgICAgICAgIGxldCBjb21wID0gdGhpcy5zZXBhcmF0b3JMaW5lLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICAgICAgYm90dG9tID0gY29tcC5ib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdHRvbTtcbiAgICB9XG5cbiAgICAvKiog5b+r5o236K6+572u5YWz6Zet5LqL5Lu2ICovXG4gICAgcHVibGljIHF1aWNrU2V0Q2xvc2VIbmFkbGVyKG93ZXI6IGNjLkNvbXBvbmVudCwgaGFuZGxlck5hbWU6IHN0cmluZyA9ICdjbG9zZVZpZXcnKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgaGFuZGxlci50YXJnZXQgPSBvd2VyLm5vZGU7XG4gICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gYzJmLnV0aWxzLnZpZXcuZ2V0Q29tcG9uZW50TmFtZShvd2VyKTtcbiAgICAgICAgaGFuZGxlci5oYW5kbGVyID0gaGFuZGxlck5hbWU7XG4gICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZXRCdG5IYW5kbGVyKFtoYW5kbGVyXSk7XG4gICAgfVxufSJdfQ==