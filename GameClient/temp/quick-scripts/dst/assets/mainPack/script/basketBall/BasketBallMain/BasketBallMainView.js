
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/basketBall/BasketBallMain/BasketBallMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bba39gmbZ5PNZKn4q+T0Ozz', 'BasketBallMainView');
// mainPack/script/basketBall/BasketBallMain/BasketBallMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BasketBallMainView.ts .
// If you need add data, please write in BasketBallMainViewModel.ts .
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
var BasketBallMainView = /** @class */ (function (_super) {
    __extends(BasketBallMainView, _super);
    function BasketBallMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BasketBallMain';
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        _this.txtCountLabel = undefined;
        _this.leftSprite = undefined;
        _this.leftBoxCollider = undefined;
        _this.rightSprite = undefined;
        _this.rightBoxCollider = undefined;
        _this.lineSprite = undefined;
        _this.contentWidget = undefined;
        return _this;
    }
    BasketBallMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BasketBallMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BasketBallMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BasketBallMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
        this.txtCount = this.get('_txtCount_');
        this.txtCountLabel = this.txtCount.getComponent(cc.Label);
        this.left = this.get('_left_');
        this.leftSprite = this.left.getComponent(cc.Sprite);
        this.leftBoxCollider = this.left.getComponent(cc.BoxCollider);
        this.right = this.get('_right_');
        this.rightSprite = this.right.getComponent(cc.Sprite);
        this.rightBoxCollider = this.right.getComponent(cc.BoxCollider);
        this.line = this.get('_line_');
        this.lineSprite = this.line.getComponent(cc.Sprite);
        this.content = this.get('_content_');
        this.contentWidget = this.content.getComponent(cc.Widget);
        this.initPos = this.get('_initPos_');
    };
    BasketBallMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    BasketBallMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    BasketBallMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    BasketBallMainView = __decorate([
        ccclass
    ], BasketBallMainView);
    return BasketBallMainView;
}(UIViewBase_1.UIViewBase));
exports.default = BasketBallMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvYmFza2V0QmFsbC9CYXNrZXRCYWxsTWFpbi9CYXNrZXRCYWxsTWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxpRUFBaUU7QUFDakUscUVBQXFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsK0VBQThFO0FBRXhFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdELHNDQUFVO0lBQTFEO1FBQUEscUVBNkVDO1FBM0VHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFHaEMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFDckMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFFckMsbUJBQWEsR0FBYSxTQUFTLENBQUM7UUFFcEMsZ0JBQVUsR0FBYyxTQUFTLENBQUM7UUFDbEMscUJBQWUsR0FBbUIsU0FBUyxDQUFDO1FBRTVDLGlCQUFXLEdBQWMsU0FBUyxDQUFDO1FBQ25DLHNCQUFnQixHQUFtQixTQUFTLENBQUM7UUFFN0MsZ0JBQVUsR0FBYyxTQUFTLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxTQUFTLENBQUM7O0lBMERoRCxDQUFDO0lBdERVLG1DQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxzQ0FBUyxHQUFoQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyx5Q0FBWSxHQUF0QjtRQUNJLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTyxxQ0FBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFTyx3Q0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTFFLENBQUM7SUFFTyxpREFBb0IsR0FBNUIsVUFBNkIsU0FBb0I7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTFFZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0E2RXRDO0lBQUQseUJBQUM7Q0E3RUQsQUE2RUMsQ0E3RStDLHVCQUFVLEdBNkV6RDtrQkE3RW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpYyBnZW5lcmF0aW9uLCBwbGVhc2UgZG8gbm90IGVkaXQuXG4vLyBJZiB5b3UgbmVlZCBhZGQgbG9naWMsIHBsZWFzZSB3cml0ZSBpbiBCYXNrZXRCYWxsTWFpblZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBCYXNrZXRCYWxsTWFpblZpZXdNb2RlbC50cyAuXG5cbmltcG9ydCB7IFVJVmlld0Jhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJVmlld0Jhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldEJhbGxNYWluVmlldyBleHRlbmRzIFVJVmlld0Jhc2Uge1xuXG4gICAgLyoqIOmihOWItuWQjSDnu5nlrp7kvovosIPnlKggKi9cbiAgICBwdWJsaWMgcHJlZmFiTmFtZSA9ICdGX0Jhc2tldEJhbGxNYWluJztcblxuICAgIHB1YmxpYyBidG5NZW51OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBidG5NZW51U3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bk1lbnVCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0Q291bnQ6IGNjLk5vZGU7XG4gICAgcHVibGljIHR4dENvdW50TGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBsZWZ0OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBsZWZ0U3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGxlZnRCb3hDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHJpZ2h0OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyByaWdodFNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyByaWdodEJveENvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgbGluZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgbGluZVNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBjb250ZW50V2lkZ2V0OiBjYy5XaWRnZXQgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGluaXRQb3M6IGNjLk5vZGU7XG4gICAgXG5cbiAgICBwdWJsaWMgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkVuYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRGlzYWJsZSkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH0gXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFByb3BlcnR5KCkge1xuICAgICAgICBzdXBlci5pbml0UHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5idG5NZW51ID0gdGhpcy5nZXQoJ19idG5NZW51XycpO1xuICAgICAgICB0aGlzLmJ0bk1lbnVTcHJpdGUgPSB0aGlzLmJ0bk1lbnUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuYnRuTWVudUJ1dHRvbiA9IHRoaXMuYnRuTWVudS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy50eHRDb3VudCA9IHRoaXMuZ2V0KCdfdHh0Q291bnRfJyk7XG4gICAgICAgIHRoaXMudHh0Q291bnRMYWJlbCA9IHRoaXMudHh0Q291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5nZXQoJ19sZWZ0XycpO1xuICAgICAgICB0aGlzLmxlZnRTcHJpdGUgPSB0aGlzLmxlZnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMubGVmdEJveENvbGxpZGVyID0gdGhpcy5sZWZ0LmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmdldCgnX3JpZ2h0XycpO1xuICAgICAgICB0aGlzLnJpZ2h0U3ByaXRlID0gdGhpcy5yaWdodC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5yaWdodEJveENvbGxpZGVyID0gdGhpcy5yaWdodC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLmdldCgnX2xpbmVfJyk7XG4gICAgICAgIHRoaXMubGluZVNwcml0ZSA9IHRoaXMubGluZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5nZXQoJ19jb250ZW50XycpO1xuICAgICAgICB0aGlzLmNvbnRlbnRXaWRnZXQgPSB0aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIHRoaXMuaW5pdFBvcyA9IHRoaXMuZ2V0KCdfaW5pdFBvc18nKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmJ0bk1lbnVCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bk1lbnVCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmJ0bk1lbnVCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uYnRuTWVudUJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19