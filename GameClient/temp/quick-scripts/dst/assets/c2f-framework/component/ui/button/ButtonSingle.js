
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/ui/button/ButtonSingle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dd4fIEsu5H8YHrLixEwxNu', 'ButtonSingle');
// c2f-framework/component/ui/button/ButtonSingle.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, requireComponent = _a.requireComponent;
/**
 * 按钮分组
 */
var ButtonGroup;
(function (ButtonGroup) {
    ButtonGroup[ButtonGroup["DEFAULT"] = 0] = "DEFAULT";
    ButtonGroup[ButtonGroup["GROUP1"] = 1] = "GROUP1";
    ButtonGroup[ButtonGroup["GROUP2"] = 2] = "GROUP2";
})(ButtonGroup || (ButtonGroup = {}));
/**
 * 防多点触摸的按钮，同组按钮同一时刻只会有一个生效
 */
var ButtonSingle = /** @class */ (function (_super) {
    __extends(ButtonSingle, _super);
    function ButtonSingle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonGroup = ButtonGroup.DEFAULT;
        _this._button = null;
        return _this;
    }
    ButtonSingle_1 = ButtonSingle;
    Object.defineProperty(ButtonSingle, "groupMap", {
        get: function () {
            if (this._groupMap === null) {
                this._groupMap = new Map();
            }
            return this._groupMap;
        },
        enumerable: false,
        configurable: true
    });
    ButtonSingle.prototype.onLoad = function () {
        this._button = this.getComponent(cc.Button);
        var groupData = ButtonSingle_1.groupMap.get(this.buttonGroup);
        if (groupData === undefined) {
            groupData = {
                lock: false,
                buttonSet: new Set()
            };
            ButtonSingle_1.groupMap.set(this.buttonGroup, groupData);
        }
        groupData.buttonSet.add(this._button);
        // 监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    ButtonSingle.prototype.onDestroy = function () {
        var groupData = ButtonSingle_1.groupMap.get(this.buttonGroup);
        if (groupData === undefined) {
            cc.error("[ButtonSingle.onDestroy] \u6570\u636E\u5F02\u5E38 ButtonGroup: " + this.buttonGroup);
            return;
        }
        groupData.buttonSet.delete(this._button);
        this.unlock(groupData);
    };
    ButtonSingle.prototype.onTouchStart = function (event) {
        var _this = this;
        var groupData = ButtonSingle_1.groupMap.get(this.buttonGroup);
        if (groupData === undefined) {
            cc.error("[ButtonSingle.onTouchStart] \u6570\u636E\u5F02\u5E38 ButtonGroup: " + this.buttonGroup);
            return;
        }
        if (groupData.lock) {
            return;
        }
        groupData.lock = true;
        groupData.buttonSet.forEach(function (e) {
            e.enabled = (e === _this._button);
        });
    };
    ButtonSingle.prototype.onTouchEnd = function (event) {
        var groupData = ButtonSingle_1.groupMap.get(this.buttonGroup);
        if (groupData === undefined) {
            cc.error("[ButtonSingle.onTouchEnd] \u6570\u636E\u5F02\u5E38 ButtonGroup: " + this.buttonGroup);
            return;
        }
        this.unlock(groupData);
    };
    /**
     * 当前按钮松开或销毁时解除同组按钮锁定状态
     */
    ButtonSingle.prototype.unlock = function (groupData) {
        if (groupData.lock && this._button.enabled) {
            groupData.lock = false;
            groupData.buttonSet.forEach(function (e) {
                e.enabled = true;
            });
        }
    };
    var ButtonSingle_1;
    /** 记录所有绑定该组件的按钮数据 */
    ButtonSingle._groupMap = null;
    __decorate([
        property({ type: cc.Enum(ButtonGroup), tooltip: CC_DEV && "按钮分组，同组按钮同一时刻只会有一个生效" })
    ], ButtonSingle.prototype, "buttonGroup", void 0);
    ButtonSingle = ButtonSingle_1 = __decorate([
        ccclass,
        requireComponent(cc.Button),
        menu("c2f/UI/ButtonSingle")
    ], ButtonSingle);
    return ButtonSingle;
}(cc.Component));
exports.default = ButtonSingle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC91aS9idXR0b24vQnV0dG9uU2luZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBZ0QsRUFBRSxDQUFDLFVBQVUsRUFBM0QsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBWXBFOztHQUVHO0FBQ0gsSUFBSyxXQUlKO0FBSkQsV0FBSyxXQUFXO0lBQ1osbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTixpREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpJLFdBQVcsS0FBWCxXQUFXLFFBSWY7QUFFRDs7R0FFRztBQUlIO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0ZDO1FBOUVVLGlCQUFXLEdBQWdCLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFXOUMsYUFBTyxHQUFjLElBQUksQ0FBQzs7SUFtRXRDLENBQUM7cUJBaEZvQixZQUFZO0lBTTdCLHNCQUFtQix3QkFBUTthQUEzQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUM5QjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlTLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBYyxjQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3pCLFNBQVMsR0FBRztnQkFDUixJQUFJLEVBQUUsS0FB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QUM7O0lBM0VELHFCQUFxQjtJQUNOLHNCQUFTLEdBQWdDLElBQUksQ0FBQztJQUg3RDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksc0JBQXNCLEVBQUUsQ0FBQztxREFDOUI7SUFGckMsWUFBWTtRQUhoQyxPQUFPO1FBQ1AsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUM7T0FDUCxZQUFZLENBZ0ZoQztJQUFELG1CQUFDO0NBaEZELEFBZ0ZDLENBaEZ5QyxFQUFFLENBQUMsU0FBUyxHQWdGckQ7a0JBaEZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDmjInpkq7nu4TmlbDmja5cbiAqL1xuaW50ZXJmYWNlIEdyb3VwRGF0YSB7XG4gICAgLyoqIOivpee7hOaYr+WQpumUgeWumu+8jOWQjOe7hOaMiemSruiiq+inpuaRuOaXtui/m+WFpemUgeWumueKtuaAgSAqL1xuICAgIGxvY2s6IGJvb2xlYW47XG4gICAgLyoqIOWQjOe7hOaMiemSriAqL1xuICAgIGJ1dHRvblNldDogU2V0PGNjLkJ1dHRvbj47XG59XG5cbi8qKlxuICog5oyJ6ZKu5YiG57uEXG4gKi9cbmVudW0gQnV0dG9uR3JvdXAge1xuICAgIERFRkFVTFQsXG4gICAgR1JPVVAxLFxuICAgIEdST1VQMixcbn1cblxuLyoqXG4gKiDpmLLlpJrngrnop6bmkbjnmoTmjInpkq7vvIzlkIznu4TmjInpkq7lkIzkuIDml7bliLvlj6rkvJrmnInkuIDkuKrnlJ/mlYhcbiAqL1xuQGNjY2xhc3NcbkByZXF1aXJlQ29tcG9uZW50KGNjLkJ1dHRvbilcbkBtZW51KFwiYzJmL1VJL0J1dHRvblNpbmdsZVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uU2luZ2xlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEJ1dHRvbkdyb3VwKSwgdG9vbHRpcDogQ0NfREVWICYmIFwi5oyJ6ZKu5YiG57uE77yM5ZCM57uE5oyJ6ZKu5ZCM5LiA5pe25Yi75Y+q5Lya5pyJ5LiA5Liq55Sf5pWIXCIgfSlcbiAgICBwdWJsaWMgYnV0dG9uR3JvdXA6IEJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXAuREVGQVVMVDtcblxuICAgIC8qKiDorrDlvZXmiYDmnInnu5Hlrpror6Xnu4Tku7bnmoTmjInpkq7mlbDmja4gKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfZ3JvdXBNYXA6IE1hcDxCdXR0b25Hcm91cCwgR3JvdXBEYXRhPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdyb3VwTWFwKCk6IE1hcDxCdXR0b25Hcm91cCwgR3JvdXBEYXRhPiB7XG4gICAgICAgIGlmICh0aGlzLl9ncm91cE1hcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwTWFwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2J1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGxldCBncm91cERhdGE6IEdyb3VwRGF0YSA9IEJ1dHRvblNpbmdsZS5ncm91cE1hcC5nZXQodGhpcy5idXR0b25Hcm91cCk7XG4gICAgICAgIGlmIChncm91cERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ3JvdXBEYXRhID0ge1xuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJ1dHRvblNldDogbmV3IFNldCgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQnV0dG9uU2luZ2xlLmdyb3VwTWFwLnNldCh0aGlzLmJ1dHRvbkdyb3VwLCBncm91cERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwRGF0YS5idXR0b25TZXQuYWRkKHRoaXMuX2J1dHRvbik7XG5cbiAgICAgICAgLy8g55uR5ZCs6Kem5pG45LqL5Lu2XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGxldCBncm91cERhdGE6IEdyb3VwRGF0YSA9IEJ1dHRvblNpbmdsZS5ncm91cE1hcC5nZXQodGhpcy5idXR0b25Hcm91cCk7XG4gICAgICAgIGlmIChncm91cERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCdXR0b25TaW5nbGUub25EZXN0cm95XSDmlbDmja7lvILluLggQnV0dG9uR3JvdXA6ICR7dGhpcy5idXR0b25Hcm91cH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBncm91cERhdGEuYnV0dG9uU2V0LmRlbGV0ZSh0aGlzLl9idXR0b24pO1xuICAgICAgICB0aGlzLnVubG9jayhncm91cERhdGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGxldCBncm91cERhdGE6IEdyb3VwRGF0YSA9IEJ1dHRvblNpbmdsZS5ncm91cE1hcC5nZXQodGhpcy5idXR0b25Hcm91cCk7XG4gICAgICAgIGlmIChncm91cERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCdXR0b25TaW5nbGUub25Ub3VjaFN0YXJ0XSDmlbDmja7lvILluLggQnV0dG9uR3JvdXA6ICR7dGhpcy5idXR0b25Hcm91cH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cERhdGEubG9jaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwRGF0YS5sb2NrID0gdHJ1ZTtcbiAgICAgICAgZ3JvdXBEYXRhLmJ1dHRvblNldC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBlLmVuYWJsZWQgPSAoZSA9PT0gdGhpcy5fYnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGxldCBncm91cERhdGE6IEdyb3VwRGF0YSA9IEJ1dHRvblNpbmdsZS5ncm91cE1hcC5nZXQodGhpcy5idXR0b25Hcm91cCk7XG4gICAgICAgIGlmIChncm91cERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCdXR0b25TaW5nbGUub25Ub3VjaEVuZF0g5pWw5o2u5byC5bi4IEJ1dHRvbkdyb3VwOiAke3RoaXMuYnV0dG9uR3JvdXB9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVubG9jayhncm91cERhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeaMiemSruadvuW8gOaIlumUgOavgeaXtuino+mZpOWQjOe7hOaMiemSrumUgeWumueKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgdW5sb2NrKGdyb3VwRGF0YTogR3JvdXBEYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChncm91cERhdGEubG9jayAmJiB0aGlzLl9idXR0b24uZW5hYmxlZCkge1xuICAgICAgICAgICAgZ3JvdXBEYXRhLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGdyb3VwRGF0YS5idXR0b25TZXQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==