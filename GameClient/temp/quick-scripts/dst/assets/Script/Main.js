
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73623K66x9Cb4iu3v08o+58', 'Main');
// Script/Main.ts

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
var GameConsts_1 = require("./game/GameConsts");
var GameHelper_1 = require("./game/GameHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 界面层节点 */
        _this.gui = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        cc.assetManager.loadBundle(GameConsts_1.GameConsts.Bundle.framework, this.afterLoadFW.bind(this));
    };
    Main.prototype.afterLoadFW = function () {
        c2f.initFW();
        var app = this.node.addComponent('App');
        if (app) {
            app.initApp(this.gui);
            ;
        }
        this.runApp();
    };
    Main.prototype.runApp = function () {
        this.runGame();
    };
    Main.prototype.runGame = function () {
        GameHelper_1.GameHelper.loadBundle(GameConsts_1.GameConsts.Bundle.entrance).then(function (UIID) {
            c2f.gui.open(UIID.GameLogo);
        });
    };
    __decorate([
        property({ type: cc.Node, tooltip: "界面层" })
    ], Main.prototype, "gui", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0M7QUFDL0MsZ0RBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNEJDO1FBMUJHLFlBQVk7UUFFWixTQUFHLEdBQVksSUFBSyxDQUFDOztJQXdCekIsQ0FBQztJQXRCYSxxQkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTywwQkFBVyxHQUFuQjtRQUNJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxxQkFBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxzQkFBTyxHQUFmO1FBQ0ksdUJBQVUsQ0FBQyxVQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO3FDQUN2QjtJQUpKLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E0QnhCO0lBQUQsV0FBQztDQTVCRCxBQTRCQyxDQTVCaUMsRUFBRSxDQUFDLFNBQVMsR0E0QjdDO2tCQTVCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tIFwiLi9nYW1lL0dhbWVDb25zdHNcIjtcbmltcG9ydCB7IEdhbWVIZWxwZXIgfSBmcm9tIFwiLi9nYW1lL0dhbWVIZWxwZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLyoqIOeVjOmdouWxguiKgueCuSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi55WM6Z2i5bGCXCIgfSlcbiAgICBndWk6IGNjLk5vZGUgPSBudWxsITtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKEdhbWVDb25zdHMuQnVuZGxlLmZyYW1ld29yaywgdGhpcy5hZnRlckxvYWRGVy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFmdGVyTG9hZEZXKCkge1xuICAgICAgICBjMmYuaW5pdEZXKCk7XG4gICAgICAgIGxldCBhcHAgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KCdBcHAnKTtcbiAgICAgICAgaWYgKGFwcCkge1xuICAgICAgICAgICAgYXBwLmluaXRBcHAodGhpcy5ndWkpOztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJ1bkFwcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuQXBwKCkge1xuICAgICAgICB0aGlzLnJ1bkdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1bkdhbWUoKSB7XG4gICAgICAgIEdhbWVIZWxwZXIubG9hZEJ1bmRsZShHYW1lQ29uc3RzLkJ1bmRsZS5lbnRyYW5jZSkudGhlbihVSUlEID0+IHtcbiAgICAgICAgICAgIGMyZi5ndWkub3BlbihVSUlELkdhbWVMb2dvKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19