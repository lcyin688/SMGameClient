
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/RichTextEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8770ed6EHFI3pPr9cUiO5zN', 'RichTextEvent');
// c2f-framework/component/common/RichTextEvent.ts

"use strict";
//注意!!! click响应函数handler
//富文本 param 设置为 clickNames 的值
//exp:<on click='handler' param="{0}"> 描述</on>  -->{0} 这个值就是clickName  类型 string
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var RichTextEvent = /** @class */ (function (_super) {
    __extends(RichTextEvent, _super);
    function RichTextEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickNames = [];
        _this.cliskCbs = [];
        return _this;
    }
    /** 设置richText响应名称及其回调函数 */
    RichTextEvent.prototype.updateView = function (names, cbs) {
        this.clickNames = names;
        this.cliskCbs = cbs;
    };
    RichTextEvent.prototype.handler = function (evt, param) {
        if (!this.clickNames && this.clickNames.length <= 0) {
            return;
        }
        var idx = this.clickNames.indexOf(param);
        if (this.cliskCbs.length > 0 && this.cliskCbs[idx] && typeof this.cliskCbs[idx] == 'function') {
            this.cliskCbs[idx](param);
        }
    };
    RichTextEvent.prototype.onDestroy = function () {
        this.clickNames = [];
        this.cliskCbs = [];
    };
    RichTextEvent = __decorate([
        ccclass,
        menu('c2f/common/RichTextEvent')
    ], RichTextEvent);
    return RichTextEvent;
}(cc.Component));
exports.default = RichTextEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vUmljaFRleHRFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QixnRkFBZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxRSxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUdsRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXlCQztRQXZCVyxnQkFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixjQUFRLEdBQWUsRUFBRSxDQUFDOztJQXNCdEMsQ0FBQztJQXBCRywyQkFBMkI7SUFDcEIsa0NBQVUsR0FBakIsVUFBa0IsS0FBZSxFQUFFLEdBQWU7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVPLCtCQUFPLEdBQWYsVUFBZ0IsR0FBRyxFQUFFLEtBQUs7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDVjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRTtZQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVTLGlDQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXhCZ0IsYUFBYTtRQUZqQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLDBCQUEwQixDQUFDO09BQ1osYUFBYSxDQXlCakM7SUFBRCxvQkFBQztDQXpCRCxBQXlCQyxDQXpCMEMsRUFBRSxDQUFDLFNBQVMsR0F5QnREO2tCQXpCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5rOo5oSPISEhIGNsaWNr5ZON5bqU5Ye95pWwaGFuZGxlclxuLy/lr4zmlofmnKwgcGFyYW0g6K6+572u5Li6IGNsaWNrTmFtZXMg55qE5YC8XG4vL2V4cDo8b24gY2xpY2s9J2hhbmRsZXInIHBhcmFtPVwiezB9XCI+IOaPj+i/sDwvb24+ICAtLT57MH0g6L+Z5Liq5YC85bCx5pivY2xpY2tOYW1lICDnsbvlnosgc3RyaW5nXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AbWVudSgnYzJmL2NvbW1vbi9SaWNoVGV4dEV2ZW50JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0RXZlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjbGlja05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgY2xpc2tDYnM6IEZ1bmN0aW9uW10gPSBbXTtcblxuICAgIC8qKiDorr7nva5yaWNoVGV4dOWTjeW6lOWQjeensOWPiuWFtuWbnuiwg+WHveaVsCAqL1xuICAgIHB1YmxpYyB1cGRhdGVWaWV3KG5hbWVzOiBzdHJpbmdbXSwgY2JzOiBGdW5jdGlvbltdKSB7XG4gICAgICAgIHRoaXMuY2xpY2tOYW1lcyA9IG5hbWVzO1xuICAgICAgICB0aGlzLmNsaXNrQ2JzID0gY2JzO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlcihldnQsIHBhcmFtKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGlja05hbWVzICYmIHRoaXMuY2xpY2tOYW1lcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZHggPSB0aGlzLmNsaWNrTmFtZXMuaW5kZXhPZihwYXJhbSk7XG4gICAgICAgIGlmICh0aGlzLmNsaXNrQ2JzLmxlbmd0aCA+IDAgJiYgdGhpcy5jbGlza0Nic1tpZHhdICYmIHR5cGVvZiB0aGlzLmNsaXNrQ2JzW2lkeF0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jbGlza0Nic1tpZHhdKHBhcmFtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpY2tOYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLmNsaXNrQ2JzID0gW107XG4gICAgfVxufVxuIl19