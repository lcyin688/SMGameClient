
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/boxGame/script/BoxGameResult/BoxGameResultView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '341a7+hsXZESaVNYXGWhvIA', 'BoxGameResultView');
// boxGame/script/BoxGameResult/BoxGameResultView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in BoxGameResultView.ts .
// If you need add data, please write in BoxGameResultViewModel.ts .
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
var BoxGameResultView = /** @class */ (function (_super) {
    __extends(BoxGameResultView, _super);
    function BoxGameResultView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_BoxGameResult';
        _this.btnCloseSprite = undefined;
        _this.btnCloseButton = undefined;
        _this.iconSprite = undefined;
        _this.txt_betLabel = undefined;
        return _this;
    }
    BoxGameResultView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxGameResultView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    BoxGameResultView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    BoxGameResultView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btnClose = this.get('_btnClose_');
        this.btnCloseSprite = this.btnClose.getComponent(cc.Sprite);
        this.btnCloseButton = this.btnClose.getComponent(cc.Button);
        this.icon = this.get('_icon_');
        this.iconSprite = this.icon.getComponent(cc.Sprite);
        this.txt_bet = this.get('_txt_bet_');
        this.txt_betLabel = this.txt_bet.getComponent(cc.Label);
    };
    BoxGameResultView.prototype.addEvent = function () {
        this.btnCloseButton.node.on('click', this.onbtnCloseButtonClick, this);
    };
    BoxGameResultView.prototype.removeEvent = function () {
        this.btnCloseButton.node.off('click', this.onbtnCloseButtonClick, this);
    };
    BoxGameResultView.prototype.onbtnCloseButtonClick = function (component) {
        this.emit('click', component);
    };
    BoxGameResultView = __decorate([
        ccclass
    ], BoxGameResultView);
    return BoxGameResultView;
}(UIViewBase_1.UIViewBase));
exports.default = BoxGameResultView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9ib3hHYW1lL3NjcmlwdC9Cb3hHYW1lUmVzdWx0L0JveEdhbWVSZXN1bHRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0QsZ0VBQWdFO0FBQ2hFLG9FQUFvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLDRFQUEyRTtBQUVyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBVTtJQUF6RDtRQUFBLHFFQTJEQztRQXpERyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLGlCQUFpQixDQUFDO1FBRy9CLG9CQUFjLEdBQWMsU0FBUyxDQUFDO1FBQ3RDLG9CQUFjLEdBQWMsU0FBUyxDQUFDO1FBRXRDLGdCQUFVLEdBQWMsU0FBUyxDQUFDO1FBRWxDLGtCQUFZLEdBQWEsU0FBUyxDQUFDOztJQWdEOUMsQ0FBQztJQTdDVSxrQ0FBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFDSSxJQUFJLGlCQUFNLFFBQVEsRUFBRTtZQUNoQixpQkFBTSxRQUFRLFdBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0scUNBQVMsR0FBaEI7UUFDSSxJQUFJLGlCQUFNLFNBQVMsRUFBRTtZQUNqQixpQkFBTSxTQUFTLFdBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsd0NBQVksR0FBdEI7UUFDSSxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1RCxDQUFDO0lBRU8sb0NBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUzRSxDQUFDO0lBRU8sdUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRU8saURBQXFCLEdBQTdCLFVBQThCLFNBQW9CO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF4RGdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBMkRyQztJQUFELHdCQUFDO0NBM0RELEFBMkRDLENBM0Q4Qyx1QkFBVSxHQTJEeEQ7a0JBM0RvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWMgZ2VuZXJhdGlvbiwgcGxlYXNlIGRvIG5vdCBlZGl0LlxuLy8gSWYgeW91IG5lZWQgYWRkIGxvZ2ljLCBwbGVhc2Ugd3JpdGUgaW4gQm94R2FtZVJlc3VsdFZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBCb3hHYW1lUmVzdWx0Vmlld01vZGVsLnRzIC5cblxuaW1wb3J0IHsgVUlWaWV3QmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlWaWV3QmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94R2FtZVJlc3VsdFZpZXcgZXh0ZW5kcyBVSVZpZXdCYXNlIHtcblxuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9Cb3hHYW1lUmVzdWx0JztcblxuICAgIHB1YmxpYyBidG5DbG9zZTogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuQ2xvc2VTcHJpdGU6IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYnRuQ2xvc2VCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgaWNvbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgaWNvblNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB0eHRfYmV0OiBjYy5Ob2RlO1xuICAgIHB1YmxpYyB0eHRfYmV0TGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuICAgIFxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25FbmFibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChzdXBlci5vbkRpc2FibGUpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uRGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9IFxuXG4gICAgcHJvdGVjdGVkIGluaXRQcm9wZXJ0eSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdFByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLmdldCgnX2J0bkNsb3NlXycpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlU3ByaXRlID0gdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZUJ1dHRvbiA9IHRoaXMuYnRuQ2xvc2UuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0KCdfaWNvbl8nKTtcbiAgICAgICAgdGhpcy5pY29uU3ByaXRlID0gdGhpcy5pY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLnR4dF9iZXQgPSB0aGlzLmdldCgnX3R4dF9iZXRfJyk7XG4gICAgICAgIHRoaXMudHh0X2JldExhYmVsID0gdGhpcy50eHRfYmV0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2VCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuQ2xvc2VCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bkNsb3NlQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25idG5DbG9zZUJ1dHRvbkNsaWNrLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5DbG9zZUJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19