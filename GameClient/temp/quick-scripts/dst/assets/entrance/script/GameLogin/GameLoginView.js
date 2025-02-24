
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/GameLogin/GameLoginView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7ceeIfjM9HYoWbgtG1+WKD', 'GameLoginView');
// entrance/script/GameLogin/GameLoginView.ts

"use strict";
// This script is automatic generation, please do not edit.
// If you need add logic, please write in GameLoginView.ts .
// If you need add data, please write in GameLoginViewModel.ts .
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
var GameLoginView = /** @class */ (function (_super) {
    __extends(GameLoginView, _super);
    function GameLoginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'GameLogin';
        _this.btn2048Button = undefined;
        _this.btnCreateMapButton = undefined;
        _this.btnStartButton = undefined;
        _this.btnBasketBallButton = undefined;
        _this.btnLoginButton = undefined;
        return _this;
    }
    GameLoginView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameLoginView.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.addEvent();
    };
    GameLoginView.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.removeEvent();
    };
    GameLoginView.prototype.initProperty = function () {
        _super.prototype.initProperty.call(this);
        this.btn2048 = this.get('_btn2048_');
        this.btn2048Button = this.btn2048.getComponent(cc.Button);
        this.btnCreateMap = this.get('_btnCreateMap_');
        this.btnCreateMapButton = this.btnCreateMap.getComponent(cc.Button);
        this.btnStart = this.get('_btnStart_');
        this.btnStartButton = this.btnStart.getComponent(cc.Button);
        this.btnBasketBall = this.get('_btnBasketBall_');
        this.btnBasketBallButton = this.btnBasketBall.getComponent(cc.Button);
        this.btnLogin = this.get('_btnLogin_');
        this.btnLoginButton = this.btnLogin.getComponent(cc.Button);
    };
    GameLoginView.prototype.addEvent = function () {
        this.btn2048Button.node.on('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.on('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.on('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.on('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.on('click', this.onbtnLoginButtonClick, this);
    };
    GameLoginView.prototype.removeEvent = function () {
        this.btn2048Button.node.off('click', this.onbtn2048ButtonClick, this);
        this.btnCreateMapButton.node.off('click', this.onbtnCreateMapButtonClick, this);
        this.btnStartButton.node.off('click', this.onbtnStartButtonClick, this);
        this.btnBasketBallButton.node.off('click', this.onbtnBasketBallButtonClick, this);
        this.btnLoginButton.node.off('click', this.onbtnLoginButtonClick, this);
    };
    GameLoginView.prototype.onbtn2048ButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnCreateMapButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnStartButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnBasketBallButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView.prototype.onbtnLoginButtonClick = function (component) {
        this.emit('click', component);
    };
    GameLoginView = __decorate([
        ccclass
    ], GameLoginView);
    return GameLoginView;
}(UIViewBase_1.UIViewBase));
exports.default = GameLoginView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvR2FtZUxvZ2luL0dhbWVMb2dpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDNUQsZ0VBQWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsNEVBQTJFO0FBRXJFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJDLGlDQUFVO0lBQXJEO1FBQUEscUVBeUZDO1FBdkZHLGdCQUFnQjtRQUNULGdCQUFVLEdBQUcsV0FBVyxDQUFDO1FBR3pCLG1CQUFhLEdBQWMsU0FBUyxDQUFDO1FBRXJDLHdCQUFrQixHQUFjLFNBQVMsQ0FBQztRQUUxQyxvQkFBYyxHQUFjLFNBQVMsQ0FBQztRQUV0Qyx5QkFBbUIsR0FBYyxTQUFTLENBQUM7UUFFM0Msb0JBQWMsR0FBYyxTQUFTLENBQUM7O0lBMkVqRCxDQUFDO0lBeEVVLDhCQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLElBQUksaUJBQU0sUUFBUSxFQUFFO1lBQ2hCLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUNJLElBQUksaUJBQU0sU0FBUyxFQUFFO1lBQ2pCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxvQ0FBWSxHQUF0QjtRQUNJLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElB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Q0FBQztJQUNsQyxDQUFDO0lBRU8sNkNBQXFCLEdBQTdCLFVBQThCLFNBQW9CO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxrREFBMEIsR0FBbEMsVUFBbUMsU0FBb0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZDQUFxQixHQUE3QixVQUE4QixTQUFvQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBdEZnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUZqQztJQUFELG9CQUFDO0NBekZELEFBeUZDLENBekYwQyx1QkFBVSxHQXlGcEQ7a0JBekZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljIGdlbmVyYXRpb24sIHBsZWFzZSBkbyBub3QgZWRpdC5cbi8vIElmIHlvdSBuZWVkIGFkZCBsb2dpYywgcGxlYXNlIHdyaXRlIGluIEdhbWVMb2dpblZpZXcudHMgLlxuLy8gSWYgeW91IG5lZWQgYWRkIGRhdGEsIHBsZWFzZSB3cml0ZSBpbiBHYW1lTG9naW5WaWV3TW9kZWwudHMgLlxuXG5pbXBvcnQgeyBVSVZpZXdCYXNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jMmYtZnJhbWV3b3JrL2d1aS9sYXllci9VSVZpZXdCYXNlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9naW5WaWV3IGV4dGVuZHMgVUlWaWV3QmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ0dhbWVMb2dpbic7XG5cbiAgICBwdWJsaWMgYnRuMjA0ODogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuMjA0OEJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5DcmVhdGVNYXA6IGNjLk5vZGU7XG4gICAgcHVibGljIGJ0bkNyZWF0ZU1hcEJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5TdGFydDogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuU3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgYnRuQmFza2V0QmFsbDogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuQmFza2V0QmFsbEJ1dHRvbjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBidG5Mb2dpbjogY2MuTm9kZTtcbiAgICBwdWJsaWMgYnRuTG9naW5CdXR0b246IGNjLkJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHN1cGVyLm9uRW5hYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNhYmxlKSB7XG4gICAgICAgICAgICBzdXBlci5vbkRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfSBcblxuICAgIHByb3RlY3RlZCBpbml0UHJvcGVydHkoKSB7XG4gICAgICAgIHN1cGVyLmluaXRQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmJ0bjIwNDggPSB0aGlzLmdldCgnX2J0bjIwNDhfJyk7XG4gICAgICAgIHRoaXMuYnRuMjA0OEJ1dHRvbiA9IHRoaXMuYnRuMjA0OC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5DcmVhdGVNYXAgPSB0aGlzLmdldCgnX2J0bkNyZWF0ZU1hcF8nKTtcbiAgICAgICAgdGhpcy5idG5DcmVhdGVNYXBCdXR0b24gPSB0aGlzLmJ0bkNyZWF0ZU1hcC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5TdGFydCA9IHRoaXMuZ2V0KCdfYnRuU3RhcnRfJyk7XG4gICAgICAgIHRoaXMuYnRuU3RhcnRCdXR0b24gPSB0aGlzLmJ0blN0YXJ0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICB0aGlzLmJ0bkJhc2tldEJhbGwgPSB0aGlzLmdldCgnX2J0bkJhc2tldEJhbGxfJyk7XG4gICAgICAgIHRoaXMuYnRuQmFza2V0QmFsbEJ1dHRvbiA9IHRoaXMuYnRuQmFza2V0QmFsbC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idG5Mb2dpbiA9IHRoaXMuZ2V0KCdfYnRuTG9naW5fJyk7XG4gICAgICAgIHRoaXMuYnRuTG9naW5CdXR0b24gPSB0aGlzLmJ0bkxvZ2luLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmJ0bjIwNDhCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuMjA0OEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5DcmVhdGVNYXBCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuQ3JlYXRlTWFwQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbmJ0blN0YXJ0QnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0bkJhc2tldEJhbGxCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uYnRuQmFza2V0QmFsbEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5Mb2dpbkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25idG5Mb2dpbkJ1dHRvbkNsaWNrLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuYnRuMjA0OEJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuMjA0OEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5DcmVhdGVNYXBCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbmJ0bkNyZWF0ZU1hcEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5TdGFydEJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuU3RhcnRCdXR0b25DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuYnRuQmFza2V0QmFsbEJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuQmFza2V0QmFsbEJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idG5Mb2dpbkJ1dHRvbi5ub2RlLm9mZignY2xpY2snLCB0aGlzLm9uYnRuTG9naW5CdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uYnRuMjA0OEJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5DcmVhdGVNYXBCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uYnRuU3RhcnRCdXR0b25DbGljayhjb21wb25lbnQ6IGNjLkJ1dHRvbikge1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uYnRuQmFza2V0QmFsbEJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25idG5Mb2dpbkJ1dHRvbkNsaWNrKGNvbXBvbmVudDogY2MuQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBjb21wb25lbnQpO1xuICAgIH1cblxuXG59Il19