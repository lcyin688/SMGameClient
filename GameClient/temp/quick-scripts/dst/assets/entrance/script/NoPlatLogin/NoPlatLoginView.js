
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/NoPlatLogin/NoPlatLoginView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bba6dTV2TpGgrO1R0bUM29t', 'NoPlatLoginView');
// entrance/script/NoPlatLogin/NoPlatLoginView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in NoPlatLoginView.ts .
// If you need add data, please write in NoPlatLoginViewModel.ts .
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
var UIViewBase_1 = require("./../../../c2f-framework/gui/layer/UIViewBase");
var LinkPrefab_1 = require("./../../../c2f-framework/component/common/LinkPrefab");
var PopDlgPanel_1 = require("./../controls/entity/PopDlgPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NoPlatLoginView = /** @class */ (function (_super) {
    __extends(NoPlatLoginView, _super);
    function NoPlatLoginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'NoPlatLogin';
        _this.dlgPanelLinkPrefab = undefined;
        _this.dlgPanelPopDlgPanel = undefined;
        _this.userIdEditBox = undefined;
        _this.platFlagEditBox = undefined;
        _this.payFlagEditBox = undefined;
        _this.loginButton = undefined;
        return _this;
    }
    NoPlatLoginView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoPlatLoginView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    NoPlatLoginView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    NoPlatLoginView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.dlgPanel = this.get('_dlgPanel_');
        this.dlgPanelLinkPrefab = this.dlgPanel.getComponent(LinkPrefab_1.default);
        this.dlgPanelPopDlgPanel = this.dlgPanel.getComponent(LinkPrefab_1.default).getComponentEx(PopDlgPanel_1.default);
        this.userId = this.get('_userId_');
        this.userIdEditBox = this.userId.getComponent(cc.EditBox);
        this.platFlag = this.get('_platFlag_');
        this.platFlagEditBox = this.platFlag.getComponent(cc.EditBox);
        this.payFlag = this.get('_payFlag_');
        this.payFlagEditBox = this.payFlag.getComponent(cc.EditBox);
        this.login = this.get('_login_');
        this.loginButton = this.login.getComponent(cc.Button);
    };
    NoPlatLoginView.prototype.addEvent = function () {
        this.userIdEditBox.node.on('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.on('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.on('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.on('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.on('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.on('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.on('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.on('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.on('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.on('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.on('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.on('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.on('click', this.onloginButtonClick, this);
    };
    NoPlatLoginView.prototype.removeEvent = function () {
        this.userIdEditBox.node.off('editing-did-began', this.onuserIdEditBoxEditingBegan, this);
        this.userIdEditBox.node.off('editing-did-ended', this.onuserIdEditBoxEditingEnded, this);
        this.userIdEditBox.node.off('editing-return', this.onuserIdEditBoxEditingReturn, this);
        this.userIdEditBox.node.off('text-changed', this.onuserIdEditBoxTextChanged, this);
        this.platFlagEditBox.node.off('editing-did-began', this.onplatFlagEditBoxEditingBegan, this);
        this.platFlagEditBox.node.off('editing-did-ended', this.onplatFlagEditBoxEditingEnded, this);
        this.platFlagEditBox.node.off('editing-return', this.onplatFlagEditBoxEditingReturn, this);
        this.platFlagEditBox.node.off('text-changed', this.onplatFlagEditBoxTextChanged, this);
        this.payFlagEditBox.node.off('editing-did-began', this.onpayFlagEditBoxEditingBegan, this);
        this.payFlagEditBox.node.off('editing-did-ended', this.onpayFlagEditBoxEditingEnded, this);
        this.payFlagEditBox.node.off('editing-return', this.onpayFlagEditBoxEditingReturn, this);
        this.payFlagEditBox.node.off('text-changed', this.onpayFlagEditBoxTextChanged, this);
        this.loginButton.node.off('click', this.onloginButtonClick, this);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onuserIdEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onplatFlagEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingBegan = function (component) {
        this.emit('editing-did-began', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingEnded = function (component) {
        this.emit('editing-did-ended', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxEditingReturn = function (component) {
        this.emit('editing-return', component);
    };
    NoPlatLoginView.prototype.onpayFlagEditBoxTextChanged = function (component) {
        this.emit('text-changed', component);
    };
    NoPlatLoginView.prototype.onloginButtonClick = function (component) {
        this.emit('click', component);
    };
    NoPlatLoginView = __decorate([
        ccclass
    ], NoPlatLoginView);
    return NoPlatLoginView;
}(UIViewBase_1.UIViewBase));
exports.default = NoPlatLoginView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvTm9QbGF0TG9naW4vTm9QbGF0TG9naW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsOERBQThEO0FBQzlELGtFQUFrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxFLDRFQUEyRTtBQUMzRSxtRkFBOEU7QUFDOUUsZ0VBQTJEO0FBR3JELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBMklDO1FBeklHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsYUFBYSxDQUFDO1FBRzNCLHdCQUFrQixHQUFlLFNBQVMsQ0FBQztRQUMzQyx5QkFBbUIsR0FBZ0IsU0FBUyxDQUFDO1FBRTdDLG1CQUFhLEdBQWUsU0FBUyxDQUFDO1FBRXRDLHFCQUFlLEdBQWUsU0FBUyxDQUFDO1FBRXhDLG9CQUFjLEdBQWUsU0FBUyxDQUFDO1FBRXZDLGlCQUFXLEdBQWMsU0FBUyxDQUFDOztJQTRIOUMsQ0FBQztJQXpIVSxnQ0FBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsc0NBQVksR0FBdEI7UUFDSSxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUks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Q0FBQztJQXhJZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTJJbkM7SUFBRCxzQkFBQztDQTNJRCxBQTJJQyxDQTNJNEMsdUJBQVUsR0EySXREO2tCQTNJb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBOb1BsYXRMb2dpblZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBOb1BsYXRMb2dpblZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuaW1wb3J0IExpbmtQcmVmYWIgZnJvbSBcIi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9jb21wb25lbnQvY29tbW9uL0xpbmtQcmVmYWJcIjtcbmltcG9ydCBQb3BEbGdQYW5lbCBmcm9tIFwiLi8uLi9jb250cm9scy9lbnRpdHkvUG9wRGxnUGFuZWxcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vUGxhdExvZ2luVmlldyBleHRlbmRzIFVJVmlld0Jhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdOb1BsYXRMb2dpbic7XG5cbiAgICBwdWJsaWMgZGxnUGFuZWw6IGNjLk5vZGU7XG4gICAgcHVibGljIGRsZ1BhbmVsTGlua1ByZWZhYjogTGlua1ByZWZhYiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgZGxnUGFuZWxQb3BEbGdQYW5lbDogUG9wRGxnUGFuZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHVzZXJJZDogY2MuTm9kZTtcbiAgICBwdWJsaWMgdXNlcklkRWRpdEJveDogY2MuRWRpdEJveCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgcGxhdEZsYWc6IGNjLk5vZGU7XG4gICAgcHVibGljIHBsYXRGbGFnRWRpdEJveDogY2MuRWRpdEJveCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgcGF5RmxhZzogY2MuTm9kZTtcbiAgICBwdWJsaWMgcGF5RmxhZ0VkaXRCb3g6IGNjLkVkaXRCb3ggPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGxvZ2luOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBsb2dpbkJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuZGxnUGFuZWwgPSB0aGlzLmdldCgnX2RsZ1BhbmVsXycpO1xuICAgICAgICB0aGlzLmRsZ1BhbmVsTGlua1ByZWZhYiA9IHRoaXMuZGxnUGFuZWwuZ2V0Q29tcG9uZW50KExpbmtQcmVmYWIpO1xuICAgICAgICB0aGlzLmRsZ1BhbmVsUG9wRGxnUGFuZWwgPSB0aGlzLmRsZ1BhbmVsLmdldENvbXBvbmVudChMaW5rUHJlZmFiKS5nZXRDb21wb25lbnRFeChQb3BEbGdQYW5lbCk7XG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy5nZXQoJ191c2VySWRfJyk7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveCA9IHRoaXMudXNlcklkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZyA9IHRoaXMuZ2V0KCdfcGxhdEZsYWdfJyk7XG4gICAgICAgIHRoaXMucGxhdEZsYWdFZGl0Qm94ID0gdGhpcy5wbGF0RmxhZy5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIHRoaXMucGF5RmxhZyA9IHRoaXMuZ2V0KCdfcGF5RmxhZ18nKTtcbiAgICAgICAgdGhpcy5wYXlGbGFnRWRpdEJveCA9IHRoaXMucGF5RmxhZy5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmdldCgnX2xvZ2luXycpO1xuICAgICAgICB0aGlzLmxvZ2luQnV0dG9uID0gdGhpcy5sb2dpbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy51c2VySWRFZGl0Qm94Lm5vZGUub24oJ2VkaXRpbmctZGlkLWJlZ2FuJywgdGhpcy5vbnVzZXJJZEVkaXRCb3hFZGl0aW5nQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJJZEVkaXRCb3gubm9kZS5vbignZWRpdGluZy1kaWQtZW5kZWQnLCB0aGlzLm9udXNlcklkRWRpdEJveEVkaXRpbmdFbmRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveC5ub2RlLm9uKCdlZGl0aW5nLXJldHVybicsIHRoaXMub251c2VySWRFZGl0Qm94RWRpdGluZ1JldHVybiwgdGhpcyk7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveC5ub2RlLm9uKCd0ZXh0LWNoYW5nZWQnLCB0aGlzLm9udXNlcklkRWRpdEJveFRleHRDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZ0VkaXRCb3gubm9kZS5vbignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ0JlZ2FuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZ0VkaXRCb3gubm9kZS5vbignZWRpdGluZy1kaWQtZW5kZWQnLCB0aGlzLm9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ0VuZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZ0VkaXRCb3gubm9kZS5vbignZWRpdGluZy1yZXR1cm4nLCB0aGlzLm9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ1JldHVybiwgdGhpcyk7XG4gICAgICAgIHRoaXMucGxhdEZsYWdFZGl0Qm94Lm5vZGUub24oJ3RleHQtY2hhbmdlZCcsIHRoaXMub25wbGF0RmxhZ0VkaXRCb3hUZXh0Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGF5RmxhZ0VkaXRCb3gubm9kZS5vbignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9ucGF5RmxhZ0VkaXRCb3hFZGl0aW5nQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLnBheUZsYWdFZGl0Qm94Lm5vZGUub24oJ2VkaXRpbmctZGlkLWVuZGVkJywgdGhpcy5vbnBheUZsYWdFZGl0Qm94RWRpdGluZ0VuZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wYXlGbGFnRWRpdEJveC5ub2RlLm9uKCdlZGl0aW5nLXJldHVybicsIHRoaXMub25wYXlGbGFnRWRpdEJveEVkaXRpbmdSZXR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLnBheUZsYWdFZGl0Qm94Lm5vZGUub24oJ3RleHQtY2hhbmdlZCcsIHRoaXMub25wYXlGbGFnRWRpdEJveFRleHRDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sb2dpbkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25sb2dpbkJ1dHRvbkNsaWNrLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9udXNlcklkRWRpdEJveEVkaXRpbmdCZWdhbiwgdGhpcyk7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1kaWQtZW5kZWQnLCB0aGlzLm9udXNlcklkRWRpdEJveEVkaXRpbmdFbmRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMudXNlcklkRWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1yZXR1cm4nLCB0aGlzLm9udXNlcklkRWRpdEJveEVkaXRpbmdSZXR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJJZEVkaXRCb3gubm9kZS5vZmYoJ3RleHQtY2hhbmdlZCcsIHRoaXMub251c2VySWRFZGl0Qm94VGV4dENoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXRGbGFnRWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1kaWQtYmVnYW4nLCB0aGlzLm9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ0JlZ2FuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZ0VkaXRCb3gubm9kZS5vZmYoJ2VkaXRpbmctZGlkLWVuZGVkJywgdGhpcy5vbnBsYXRGbGFnRWRpdEJveEVkaXRpbmdFbmRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGxhdEZsYWdFZGl0Qm94Lm5vZGUub2ZmKCdlZGl0aW5nLXJldHVybicsIHRoaXMub25wbGF0RmxhZ0VkaXRCb3hFZGl0aW5nUmV0dXJuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF0RmxhZ0VkaXRCb3gubm9kZS5vZmYoJ3RleHQtY2hhbmdlZCcsIHRoaXMub25wbGF0RmxhZ0VkaXRCb3hUZXh0Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGF5RmxhZ0VkaXRCb3gubm9kZS5vZmYoJ2VkaXRpbmctZGlkLWJlZ2FuJywgdGhpcy5vbnBheUZsYWdFZGl0Qm94RWRpdGluZ0JlZ2FuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wYXlGbGFnRWRpdEJveC5ub2RlLm9mZignZWRpdGluZy1kaWQtZW5kZWQnLCB0aGlzLm9ucGF5RmxhZ0VkaXRCb3hFZGl0aW5nRW5kZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLnBheUZsYWdFZGl0Qm94Lm5vZGUub2ZmKCdlZGl0aW5nLXJldHVybicsIHRoaXMub25wYXlGbGFnRWRpdEJveEVkaXRpbmdSZXR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLnBheUZsYWdFZGl0Qm94Lm5vZGUub2ZmKCd0ZXh0LWNoYW5nZWQnLCB0aGlzLm9ucGF5RmxhZ0VkaXRCb3hUZXh0Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubG9naW5CdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmxvZ2luQnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbnVzZXJJZEVkaXRCb3hFZGl0aW5nQmVnYW4oY29tcG9uZW50OiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZWRpdGluZy1kaWQtYmVnYW4nLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb251c2VySWRFZGl0Qm94RWRpdGluZ0VuZGVkKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctZGlkLWVuZGVkJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9udXNlcklkRWRpdEJveEVkaXRpbmdSZXR1cm4oY29tcG9uZW50OiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZWRpdGluZy1yZXR1cm4nLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb251c2VySWRFZGl0Qm94VGV4dENoYW5nZWQoY29tcG9uZW50OiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuZW1pdCgndGV4dC1jaGFuZ2VkJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ0JlZ2FuKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctZGlkLWJlZ2FuJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ0VuZGVkKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctZGlkLWVuZGVkJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9ucGxhdEZsYWdFZGl0Qm94RWRpdGluZ1JldHVybihjb21wb25lbnQ6IGNjLkVkaXRCb3gpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlZGl0aW5nLXJldHVybicsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbnBsYXRGbGFnRWRpdEJveFRleHRDaGFuZ2VkKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3RleHQtY2hhbmdlZCcsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbnBheUZsYWdFZGl0Qm94RWRpdGluZ0JlZ2FuKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VkaXRpbmctZGlkLWJlZ2FuJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9ucGF5RmxhZ0VkaXRCb3hFZGl0aW5nRW5kZWQoY29tcG9uZW50OiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZWRpdGluZy1kaWQtZW5kZWQnLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25wYXlGbGFnRWRpdEJveEVkaXRpbmdSZXR1cm4oY29tcG9uZW50OiBjYy5FZGl0Qm94KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZWRpdGluZy1yZXR1cm4nLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25wYXlGbGFnRWRpdEJveFRleHRDaGFuZ2VkKGNvbXBvbmVudDogY2MuRWRpdEJveCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3RleHQtY2hhbmdlZCcsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmxvZ2luQnV0dG9uQ2xpY2soY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIGNvbXBvbmVudCk7XG4gICAgfVxuXG5cbn0iXX0=