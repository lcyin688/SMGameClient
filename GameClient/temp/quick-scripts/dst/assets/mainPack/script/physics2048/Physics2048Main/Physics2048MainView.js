
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Main/Physics2048MainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e688JJ0I1PwInnEeQEMhKT', 'Physics2048MainView');
// mainPack/script/physics2048/Physics2048Main/Physics2048MainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in Physics2048MainView.ts .
// If you need add data, please write in Physics2048MainViewModel.ts .
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
var UIViewBase_1 = require("./../../../../c2f-framework/gui/layer/UIViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048MainView = /** @class */ (function (_super) {
    __extends(Physics2048MainView, _super);
    function Physics2048MainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_Physics2048Main';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.iconMaxSprite = undefined;
        _this.txtCurScoreLabel = undefined;
        _this.contentWidget = undefined;
        _this.effectWidget = undefined;
        _this.txtTotalScoreLabel = undefined;
        _this.iconSprite = undefined;
        _this.iconRigidBody = undefined;
        _this.iconPhysicsCircleCollider = undefined;
        return _this;
    }
    Physics2048MainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Physics2048MainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    Physics2048MainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    Physics2048MainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.iconMax = this.get('_iconMax_');
        this.iconMaxSprite = this.iconMax.getComponent(cc.Sprite);
        this.txtCurScore = this.get('_txtCurScore_');
        this.txtCurScoreLabel = this.txtCurScore.getComponent(cc.Label);
        this.initPos = this.get('_initPos_');
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
        this.effect = this.get('_effect_');
        this.effectWidget = this.effect.getComponent(cc.Widget);
        this.txtTotalScore = this.get('_txtTotalScore_');
        this.txtTotalScoreLabel = this.txtTotalScore.getComponent(cc.Label);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.iconRigidBody = this.icon.getComponent(cc.RigidBody);
        this.iconPhysicsCircleCollider = this.icon.getComponent(cc.PhysicsCircleCollider);
    };
    Physics2048MainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    Physics2048MainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    Physics2048MainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    Physics2048MainView = __decorate([
        ccclass
    ], Physics2048MainView);
    return Physics2048MainView;
}(UIViewBase_1.UIViewBase));
exports.default = Physics2048MainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhNYWluL1BoeXNpY3MyMDQ4TWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxrRUFBa0U7QUFDbEUsc0VBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEUsK0VBQThFO0FBRXhFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlELHVDQUFVO0lBQTNEO1FBQUEscUVBaUZDO1FBL0VHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFHakMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFDckMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFFckMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFFckMsc0JBQWdCLEdBQWEsU0FBUyxDQUFDO1FBR3ZDLG1CQUFhLEdBQWMsU0FBUyxDQUFDO1FBRXJDLGtCQUFZLEdBQWMsU0FBUyxDQUFDO1FBRXBDLHdCQUFrQixHQUFhLFNBQVMsQ0FBQztRQUV6QyxnQkFBVSxHQUFjLFNBQVMsQ0FBQztRQUNsQyxtQkFBYSxHQUFpQixTQUFTLENBQUM7UUFDeEMsK0JBQXlCLEdBQTZCLFNBQVMsQ0FBQzs7SUEyRDNFLENBQUM7SUF4RFUsb0NBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLHVDQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJ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dUJBQVUsR0FpRjFEO2tCQWpGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIFBoeXNpY3MyMDQ4TWFpblZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBQaHlzaWNzMjA0OE1haW5WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVZpZXdCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZpZXdCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHlzaWNzMjA0OE1haW5WaWV3IGV4dGVuZHMgVUlWaWV3QmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0ZfUGh5c2ljczIwNDhNYWluJztcblxuICAgIHB1YmxpYyBidG5NZW51OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBidG5NZW51U3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bk1lbnVCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgaWNvbk1heDogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvbk1heFNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0eHRDdXJTY29yZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0Q3VyU2NvcmVMYWJlbDogY2MuTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGluaXRQb3M6IGNjLk5vZGU7XG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGU7XG4gICAgcHVibGljIGNvbnRlbnRXaWRnZXQ6IGNjLldpZGdldCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgZWZmZWN0OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBlZmZlY3RXaWRnZXQ6IGNjLldpZGdldCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0VG90YWxTY29yZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0VG90YWxTY29yZUxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBpY29uUmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGljb25QaHlzaWNzQ2lyY2xlQ29sbGlkZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJ0bk1lbnUgPSB0aGlzLmdldCgnX2J0bk1lbnVfJyk7XG4gICAgICAgIHRoaXMuYnRuTWVudVNwcml0ZSA9IHRoaXMuYnRuTWVudS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uID0gdGhpcy5idG5NZW51LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICB0aGlzLmljb25NYXggPSB0aGlzLmdldCgnX2ljb25NYXhfJyk7XG4gICAgICAgIHRoaXMuaWNvbk1heFNwcml0ZSA9IHRoaXMuaWNvbk1heC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy50eHRDdXJTY29yZSA9IHRoaXMuZ2V0KCdfdHh0Q3VyU2NvcmVfJyk7XG4gICAgICAgIHRoaXMudHh0Q3VyU2NvcmVMYWJlbCA9IHRoaXMudHh0Q3VyU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5pbml0UG9zID0gdGhpcy5nZXQoJ19pbml0UG9zXycpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmdldCgnX2NvbnRlbnRfJyk7XG4gICAgICAgIHRoaXMuY29udGVudFdpZGdldCA9IHRoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLmdldCgnX2VmZmVjdF8nKTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaWRnZXQgPSB0aGlzLmVmZmVjdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgdGhpcy50eHRUb3RhbFNjb3JlID0gdGhpcy5nZXQoJ190eHRUb3RhbFNjb3JlXycpO1xuICAgICAgICB0aGlzLnR4dFRvdGFsU2NvcmVMYWJlbCA9IHRoaXMudHh0VG90YWxTY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmdldCgnX2ljb25fJyk7XG4gICAgICAgIHRoaXMuaWNvblNwcml0ZSA9IHRoaXMuaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5pY29uUmlnaWRCb2R5ID0gdGhpcy5pY29uLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICB0aGlzLmljb25QaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSB0aGlzLmljb24uZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuTWVudUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bk1lbnVCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cblxufSJdfQ==