
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/gui/view/CmmPromptDlg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dd51Dj6WhL8JsXYexbsjCW', 'CmmPromptDlg');
// c2f-framework/gui/view/CmmPromptDlg.ts

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
exports.CmmPromptDlg = void 0;
var LanguageLabel_1 = require("../../component/language/LanguageLabel");
/** 公共提示窗口 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CmmPromptDlg = /** @class */ (function (_super) {
    __extends(CmmPromptDlg, _super);
    function CmmPromptDlg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 窗口标题多语言组件 */
        _this.lab_title = null;
        /** 提示内容多语言组件 */
        _this.lab_content = null;
        /** 确认按钮文本多语言组件 */
        _this.lab_ok = null;
        /** 取消按钮文本多语言组件 */
        _this.lab_cancel = null;
        _this.config = {};
        return _this;
    }
    CmmPromptDlg.prototype.onTouchEnd = function (event, data) {
        switch (event.target.name) {
            case "btn_ok":
                this.onOk();
                break;
            case "btn_cancel":
                this.onCancel();
                break;
            default:
                break;
        }
    };
    /**
     *
     *
     * @param params 参数
     * {
     *     title:      标题
     *     content:    内容
     *     okWord:     ok按钮上的文字
     *     okFunc:     确认时执行的方法
     *     cancelWord: 取消按钮的文字
     *     cancelFunc: 取消时执行的方法
     *     needCancel: 是否需要取消按钮
     * }
     */
    CmmPromptDlg.prototype.onUIAdded = function (params) {
        if (params === void 0) { params = {}; }
        this.config = params || {};
        this.setTitle();
        this.setContent();
        this.setBtnOkLabel();
        this.setBtnCancelLabel();
        this.node.active = true;
    };
    CmmPromptDlg.prototype.setTitle = function () {
        this.lab_title.dataID = this.config.title;
    };
    CmmPromptDlg.prototype.setContent = function () {
        this.lab_content.dataID = this.config.content;
    };
    CmmPromptDlg.prototype.setBtnOkLabel = function () {
        this.lab_ok.dataID = this.config.okWord;
    };
    CmmPromptDlg.prototype.setBtnCancelLabel = function () {
        this.lab_cancel.dataID = this.config.cancelWord;
        this.lab_cancel.node.parent.active = this.config.needCancel || false;
    };
    CmmPromptDlg.prototype.onOk = function () {
        if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.onClose = function () {
        if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.onCancel = function () {
        if (typeof this.config.cancelFunc == "function") {
            this.config.cancelFunc();
        }
        this.close();
    };
    CmmPromptDlg.prototype.close = function () {
        c2f.gui.removeByNode(this.node);
    };
    CmmPromptDlg.prototype.onDestroy = function () {
        this.config = null;
    };
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_title", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_content", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_ok", void 0);
    __decorate([
        property(LanguageLabel_1.default)
    ], CmmPromptDlg.prototype, "lab_cancel", void 0);
    CmmPromptDlg = __decorate([
        ccclass
    ], CmmPromptDlg);
    return CmmPromptDlg;
}(cc.Component));
exports.CmmPromptDlg = CmmPromptDlg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2d1aS92aWV3L0NtbVByb21wdERsZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1FO0FBR25FLGFBQWE7QUFDUCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQW9HQztRQW5HRyxnQkFBZ0I7UUFFUixlQUFTLEdBQXlCLElBQUksQ0FBQztRQUUvQyxnQkFBZ0I7UUFFUixpQkFBVyxHQUF5QixJQUFJLENBQUM7UUFFakQsa0JBQWtCO1FBRVYsWUFBTSxHQUF5QixJQUFJLENBQUE7UUFFM0Msa0JBQWtCO1FBRVYsZ0JBQVUsR0FBeUIsSUFBSSxDQUFDO1FBRXhDLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBbUY3QixDQUFDO0lBakZXLGlDQUFVLEdBQWxCLFVBQW1CLEtBQTBCLEVBQUUsSUFBUztRQUNwRCxRQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILGdDQUFTLEdBQVQsVUFBVSxNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFdBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUVPLG9DQUFhLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLE1BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVPLHdDQUFpQixHQUF6QjtRQUNJLElBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFXLENBQUMsSUFBSyxDQUFDLE1BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO0lBQzVFLENBQUM7SUFFTywyQkFBSSxHQUFaO1FBQ0ksSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyw4QkFBTyxHQUFmO1FBQ0ksSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTywrQkFBUSxHQUFoQjtRQUNJLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sNEJBQUssR0FBYjtRQUNJLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFoR0Q7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzttREFDdUI7SUFJL0M7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztxREFDeUI7SUFJakQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztnREFDbUI7SUFJM0M7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztvREFDd0I7SUFmdkMsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQW9HeEI7SUFBRCxtQkFBQztDQXBHRCxBQW9HQyxDQXBHaUMsRUFBRSxDQUFDLFNBQVMsR0FvRzdDO0FBcEdZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmd1YWdlTGFiZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9sYW5ndWFnZS9MYW5ndWFnZUxhYmVsXCI7XG5cblxuLyoqIOWFrOWFseaPkOekuueql+WPoyAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQ21tUHJvbXB0RGxnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiog56qX5Y+j5qCH6aKY5aSa6K+t6KiA57uE5Lu2ICovXG4gICAgQHByb3BlcnR5KExhbmd1YWdlTGFiZWwpXG4gICAgcHJpdmF0ZSBsYWJfdGl0bGU6IExhbmd1YWdlTGFiZWwgfCBudWxsID0gbnVsbDtcblxuICAgIC8qKiDmj5DnpLrlhoXlrrnlpJror63oqIDnu4Tku7YgKi9cbiAgICBAcHJvcGVydHkoTGFuZ3VhZ2VMYWJlbClcbiAgICBwcml2YXRlIGxhYl9jb250ZW50OiBMYW5ndWFnZUxhYmVsIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvKiog56Gu6K6k5oyJ6ZKu5paH5pys5aSa6K+t6KiA57uE5Lu2ICovXG4gICAgQHByb3BlcnR5KExhbmd1YWdlTGFiZWwpXG4gICAgcHJpdmF0ZSBsYWJfb2s6IExhbmd1YWdlTGFiZWwgfCBudWxsID0gbnVsbFxuXG4gICAgLyoqIOWPlua2iOaMiemSruaWh+acrOWkmuivreiogOe7hOS7tiAqL1xuICAgIEBwcm9wZXJ0eShMYW5ndWFnZUxhYmVsKVxuICAgIHByaXZhdGUgbGFiX2NhbmNlbDogTGFuZ3VhZ2VMYWJlbCB8IG51bGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjb25maWc6IGFueSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9va1wiOlxuICAgICAgICAgICAgICAgIHRoaXMub25PaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9jYW5jZWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogXG4gICAgICogQHBhcmFtIHBhcmFtcyDlj4LmlbAgXG4gICAgICoge1xuICAgICAqICAgICB0aXRsZTogICAgICDmoIfpophcbiAgICAgKiAgICAgY29udGVudDogICAg5YaF5a65XG4gICAgICogICAgIG9rV29yZDogICAgIG9r5oyJ6ZKu5LiK55qE5paH5a2XXG4gICAgICogICAgIG9rRnVuYzogICAgIOehruiupOaXtuaJp+ihjOeahOaWueazlVxuICAgICAqICAgICBjYW5jZWxXb3JkOiDlj5bmtojmjInpkq7nmoTmloflrZdcbiAgICAgKiAgICAgY2FuY2VsRnVuYzog5Y+W5raI5pe25omn6KGM55qE5pa55rOVXG4gICAgICogICAgIG5lZWRDYW5jZWw6IOaYr+WQpumcgOimgeWPlua2iOaMiemSrlxuICAgICAqIH1cbiAgICAgKi9cbiAgICBvblVJQWRkZWQocGFyYW1zOiBhbnkgPSB7fSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5zZXRCdG5Pa0xhYmVsKCk7XG4gICAgICAgIHRoaXMuc2V0QnRuQ2FuY2VsTGFiZWwoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICAgICAgdGhpcy5sYWJfdGl0bGUhLmRhdGFJRCA9IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5sYWJfY29udGVudCEuZGF0YUlEID0gdGhpcy5jb25maWcuY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJ0bk9rTGFiZWwoKSB7XG4gICAgICAgIHRoaXMubGFiX29rIS5kYXRhSUQgPSB0aGlzLmNvbmZpZy5va1dvcmQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCdG5DYW5jZWxMYWJlbCgpIHtcbiAgICAgICAgdGhpcy5sYWJfY2FuY2VsIS5kYXRhSUQgPSB0aGlzLmNvbmZpZy5jYW5jZWxXb3JkO1xuICAgICAgICB0aGlzLmxhYl9jYW5jZWwhLm5vZGUhLnBhcmVudCEuYWN0aXZlID0gdGhpcy5jb25maWcubmVlZENhbmNlbCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT2soKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2tGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcub2tGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5jbG9zZUZ1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5jbG9zZUZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5jYW5jZWxGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuY2FuY2VsRnVuYygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlKCkge1xuICAgICAgICBjMmYuZ3VpLnJlbW92ZUJ5Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgIH1cbn0iXX0=