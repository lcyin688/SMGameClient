
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxTime/BoxTimeView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa6eej6ZVNDYqt4YkpFNnxs', 'BoxTimeView');
// boxGame/script/BoxTime/BoxTimeView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxTimeView.ts .
// If you need add data, please write in BoxTimeViewModel.ts .
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxTimeView = /** @class */ (function (_super) {
    __extends(BoxTimeView, _super);
    function BoxTimeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxTime';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.txt_betLabel = undefined;
        _this.btm_doubleSprite = undefined;
        _this.btm_doubleButton = undefined;
        return _this;
    }
    BoxTimeView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxTimeView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxTimeView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxTimeView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.txt_bet = this.get('_txt_bet_');
        this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
        this.btm_double = this.get('_btm_double_');
        this.btm_doubleSprite = this.btm_double.getComponent(cc.Sprite);
        this.btm_doubleButton = this.btm_double.getComponent(cc.Button);
    };
    BoxTimeView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.on('click', this.onbtm_doubleButtonClick, this);
    };
    BoxTimeView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
        this.btm_doubleButton.node.off('click', this.onbtm_doubleButtonClick, this);
    };
    BoxTimeView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxTimeView.prototype.onbtm_doubleButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxTimeView = __decorate([
        ccclass
    ], BoxTimeView);
    return BoxTimeView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxTimeView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hUaW1lL0JveFRpbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsMERBQTBEO0FBQzFELDhEQUE4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF5QywrQkFBVTtJQUFuRDtRQUFBLHFFQW1FQztRQWpFRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUd6QixvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUN0QyxvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUV0QyxrQkFBWSxHQUFhLFNBQVMsQ0FBQztRQUVuQyxzQkFBZ0IsR0FBYyxTQUFTLENBQUM7UUFDeEMsc0JBQWdCLEdBQWMsU0FBUyxDQUFDOztJQXVEbkQsQ0FBQztJQXBEVSw0QkFBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsa0NBQVksR0FBdEI7UUFDSSxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEUsQ0FBQztJQUVPLDhCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUvRSxDQUFDO0lBRU8saUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWhGLENBQUM7SUFFTywyQ0FBcUIsR0FBN0IsVUFBOEIsU0FBb0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZDQUF1QixHQUEvQixVQUFnQyxTQUFvQjtRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBaEVnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUUvQjtJQUFELGtCQUFDO0NBbkVELEFBbUVDLENBbkV3Qyx1QkFBVSxHQW1FbEQ7a0JBbkVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEJveFRpbWVWaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gQm94VGltZVZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFRpbWVWaWV3IGV4dGVuZHMgVUlWaWV3QmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfQm94VGltZSc7XG5cbiAgICBwdWJsaWMgYnRuQ2xvc2U6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bkNsb3NlU3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bkNsb3NlQnV0dG9uOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dF9iZXQ6IGNjLk5vZGU7XG4gICAgcHVibGljIHR4dF9iZXRMYWJlbDogY2MuTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bV9kb3VibGU6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bV9kb3VibGVTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYnRtX2RvdWJsZUJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmdldCgnX2J0bkNsb3NlXycpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlU3ByaXRlID0gdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbiA9IHRoaXMuYnRuQ2xvc2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMudHh0X2JldCA9IHRoaXMuZ2V0KCdfdHh0X2JldF8nKTtcbiAgICAgICAgdGhpcy50eHRfYmV0TGFiZWwgPSB0aGlzLnR4dF9iZXQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5idG1fZG91YmxlID0gdGhpcy5nZXQoJ19idG1fZG91YmxlXycpO1xuICAgICAgICB0aGlzLmJ0bV9kb3VibGVTcHJpdGUgPSB0aGlzLmJ0bV9kb3VibGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuYnRtX2RvdWJsZUJ1dHRvbiA9IHRoaXMuYnRtX2RvdWJsZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5DbG9zZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG1fZG91YmxlQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmJ0bV9kb3VibGVCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkNsb3NlQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5DbG9zZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG1fZG91YmxlQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG1fZG91YmxlQnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bkNsb3NlQnV0dG9uQ2xpY2soY29tcG9uZW50OiBjYy5CdXR0b24pIHtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bV9kb3VibGVCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cblxufSJdfQ==