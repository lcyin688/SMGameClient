
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/desStar/DesStarMain/DesStarMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0426aPXXpAzKo6Sj44W/qZ', 'DesStarMainView');
// mainPack/script/desStar/DesStarMain/DesStarMainView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in DesStarMainView.ts .
// If you need add data, please write in DesStarMainViewModel.ts .
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
var DesStarMainView = /** @class */ (function (_super) {
    __extends(DesStarMainView, _super);
    function DesStarMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_DesStarMain';
        _this.barSprite = undefined;
        _this.barProgressBar = undefined;
        _this.txtLvLabel = undefined;
        _this.txtLvLabelOutline = undefined;
        _this.txtScoreLabel = undefined;
        _this.txtScoreLabelOutline = undefined;
        _this.rewardSprite = undefined;
        _this.btnMenuSprite = undefined;
        _this.btnMenuButton = undefined;
        return _this;
    }
    DesStarMainView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DesStarMainView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    DesStarMainView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    DesStarMainView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.bar = this.get('_bar_');
        this.barSprite = this.bar.getComponent(cc.Sprite);
        this.barProgressBar = this.bar.getComponent(cc.ProgressBar);
        this.txtLv = this.get('_txtLv_');
        this.txtLvLabel = this.txtLv.getComponent(cc.Label);
        this.txtLvLabelOutline = this.txtLv.getComponent(cc.LabelOutline);
        this.txtScore = this.get('_txtScore_');
        this.txtScoreLabel = this.txtScore.getComponent(cc.Label);
        this.txtScoreLabelOutline = this.txtScore.getComponent(cc.LabelOutline);
        this.endPos = this.get('_endPos_');
        this.content = this.get('_content_');
        this.reward = this.get('_reward_');
        this.rewardSprite = this.reward.getComponent(cc.Sprite);
        this.btnMenu = this.get('_btnMenu_');
        this.btnMenuSprite = this.btnMenu.getComponent(cc.Sprite);
        this.btnMenuButton = this.btnMenu.getComponent(cc.Button);
    };
    DesStarMainView.prototype.addEvent = function () {
        this.btnMenuButton.node.on('click', this.onbtnMenuButtonClick, this);
    };
    DesStarMainView.prototype.removeEvent = function () {
        this.btnMenuButton.node.off('click', this.onbtnMenuButtonClick, this);
    };
    DesStarMainView.prototype.onbtnMenuButtonClick = function (component) {
        this.emit('click', component);
    };
    DesStarMainView = __decorate([
        ccclass
    ], DesStarMainView);
    return DesStarMainView;
}(UIViewBase_1.UIViewBase));
exports.default = DesStarMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvZGVzU3Rhci9EZXNTdGFyTWFpbi9EZXNTdGFyTWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCw4REFBOEQ7QUFDOUQsa0VBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsK0VBQThFO0FBRXhFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBNkVDO1FBM0VHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsZUFBZSxDQUFDO1FBRzdCLGVBQVMsR0FBYyxTQUFTLENBQUM7UUFDakMsb0JBQWMsR0FBbUIsU0FBUyxDQUFDO1FBRTNDLGdCQUFVLEdBQWEsU0FBUyxDQUFDO1FBQ2pDLHVCQUFpQixHQUFvQixTQUFTLENBQUM7UUFFL0MsbUJBQWEsR0FBYSxTQUFTLENBQUM7UUFDcEMsMEJBQW9CLEdBQW9CLFNBQVMsQ0FBQztRQUlsRCxrQkFBWSxHQUFjLFNBQVMsQ0FBQztRQUVwQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQztRQUNyQyxtQkFBYSxHQUFjLFNBQVMsQ0FBQzs7SUF5RGhELENBQUM7SUF0RFUsZ0NBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxpQkFBTSxRQUFRLEVBQUU7WUFDaEIsaUJBQU0sUUFBUSxXQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCO1FBQ0ksSUFBSSxpQkFBTSxTQUFTLEVBQUU7WUFDakIsaUJBQU0sU0FBUyxXQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLHNDQUFZLEdBQXRCO1FBQ0ksaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5RCxDQUFDO0lBRU8sa0NBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV6RSxDQUFDO0lBRU8scUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRSxDQUFDO0lBRU8sOENBQW9CLEdBQTVCLFVBQTZCLFNBQW9CO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUExRWdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E2RW5DO0lBQUQsc0JBQUM7Q0E3RUQsQUE2RUMsQ0E3RTRDLHVCQUFVLEdBNkV0RDtrQkE3RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWMgZ2VuZXJhdGlvbiwgcGxlYXNlIGRvIG5vdCBlZGl0LlxuLy8gSWYgeW91IG5lZWQgYWRkIGxvZ2ljLCBwbGVhc2Ugd3JpdGUgaW4gRGVzU3Rhck1haW5WaWV3LnRzIC5cbi8vIElmIHlvdSBuZWVkIGFkZCBkYXRhLCBwbGVhc2Ugd3JpdGUgaW4gRGVzU3Rhck1haW5WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVZpZXdCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZpZXdCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNTdGFyTWFpblZpZXcgZXh0ZW5kcyBVSVZpZXdCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9EZXNTdGFyTWFpbic7XG5cbiAgICBwdWJsaWMgYmFyOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBiYXJTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYmFyUHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0eHRMdjogY2MuTm9kZTtcbiAgICBwdWJsaWMgdHh0THZMYWJlbDogY2MuTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dEx2TGFiZWxPdXRsaW5lOiBjYy5MYWJlbE91dGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHR4dFNjb3JlOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRTY29yZUxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgdHh0U2NvcmVMYWJlbE91dGxpbmU6IGNjLkxhYmVsT3V0bGluZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgZW5kUG9zOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyByZXdhcmQ6IGNjLk5vZGU7XG4gICAgcHVibGljIHJld2FyZFNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5NZW51OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBidG5NZW51U3ByaXRlOiBjYy5TcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIGJ0bk1lbnVCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMuZ2V0KCdfYmFyXycpO1xuICAgICAgICB0aGlzLmJhclNwcml0ZSA9IHRoaXMuYmFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmJhclByb2dyZXNzQmFyID0gdGhpcy5iYXIuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgdGhpcy50eHRMdiA9IHRoaXMuZ2V0KCdfdHh0THZfJyk7XG4gICAgICAgIHRoaXMudHh0THZMYWJlbCA9IHRoaXMudHh0THYuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy50eHRMdkxhYmVsT3V0bGluZSA9IHRoaXMudHh0THYuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgIHRoaXMudHh0U2NvcmUgPSB0aGlzLmdldCgnX3R4dFNjb3JlXycpO1xuICAgICAgICB0aGlzLnR4dFNjb3JlTGFiZWwgPSB0aGlzLnR4dFNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMudHh0U2NvcmVMYWJlbE91dGxpbmUgPSB0aGlzLnR4dFNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpO1xuICAgICAgICB0aGlzLmVuZFBvcyA9IHRoaXMuZ2V0KCdfZW5kUG9zXycpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmdldCgnX2NvbnRlbnRfJyk7XG4gICAgICAgIHRoaXMucmV3YXJkID0gdGhpcy5nZXQoJ19yZXdhcmRfJyk7XG4gICAgICAgIHRoaXMucmV3YXJkU3ByaXRlID0gdGhpcy5yZXdhcmQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuYnRuTWVudSA9IHRoaXMuZ2V0KCdfYnRuTWVudV8nKTtcbiAgICAgICAgdGhpcy5idG5NZW51U3ByaXRlID0gdGhpcy5idG5NZW51LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLmJ0bk1lbnVCdXR0b24gPSB0aGlzLmJ0bk1lbnUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuTWVudUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idG5NZW51QnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5NZW51QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmJ0bk1lbnVCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cblxufSJdfQ==