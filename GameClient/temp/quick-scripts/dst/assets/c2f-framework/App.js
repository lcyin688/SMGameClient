
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1bad7kuUNKjL6mfAsU3gsi', 'App');
// c2f-framework/App.ts

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
exports.App = void 0;
var EventDefine_1 = require("./core/event/EventDefine");
var GameTimer_1 = require("./core/timer/GameTimer");
var GUI_1 = require("./gui/GUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //UI根节点
        _this.root = null;
        return _this;
    }
    App.prototype.onLoad = function () {
    };
    App.prototype.initApp = function (root) {
        this.root = root;
        c2f.gui.init(root);
        // 游戏显示事件
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.log("Game.EVENT_SHOW");
            GameTimer_1.GameTimer.gameResume();
            c2f.timer.load();
            c2f.audio.resumeAll();
            cc.director.resume();
            cc.game.resume();
            c2f.event.emit(EventDefine_1.EventMessage.GAME_ENTER);
        });
        // 游戏隐藏事件
        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.log("Game.EVENT_HIDE");
            c2f.timer.save(); // 平台不需要在退出时精准计算时间，直接暂时游戏时间
            c2f.audio.pauseAll();
            cc.director.pause();
            cc.game.pause();
            c2f.event.emit(EventDefine_1.EventMessage.GAME_EXIT);
        });
        // 游戏尺寸修改事件
        var gui = this.root.addComponent(GUI_1.GUI);
        if (!cc.sys.isMobile) {
            cc.view.setResizeCallback(function () {
                gui.autoSize();
                c2f.event.emit(EventDefine_1.EventMessage.GAME_RESIZE);
            });
        }
    };
    App = __decorate([
        ccclass
    ], App);
    return App;
}(cc.Component));
exports.App = App;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ3hELG9EQUFtRDtBQUNuRCxpQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBeUIsdUJBQVk7SUFBckM7UUFBQSxxRUEwQ0M7UUF4Q0csT0FBTztRQUNDLFVBQUksR0FBWSxJQUFLLENBQUM7O0lBdUNsQyxDQUFDO0lBckNhLG9CQUFNLEdBQWhCO0lBQ0EsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLFNBQVM7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixFQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDMUIscUJBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBSywyQkFBMkI7WUFDakQsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMEJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVc7UUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFHLENBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNmLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUF6Q1EsR0FBRztRQURmLE9BQU87T0FDSyxHQUFHLENBMENmO0lBQUQsVUFBQztDQTFDRCxBQTBDQyxDQTFDd0IsRUFBRSxDQUFDLFNBQVMsR0EwQ3BDO0FBMUNZLGtCQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSBcIi4vY29yZS9ldmVudC9FdmVudERlZmluZVwiO1xuaW1wb3J0IHsgR2FtZVRpbWVyIH0gZnJvbSBcIi4vY29yZS90aW1lci9HYW1lVGltZXJcIjtcbmltcG9ydCB7IEdVSSB9IGZyb20gXCIuL2d1aS9HVUlcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vVUnmoLnoioLngrlcbiAgICBwcml2YXRlIHJvb3Q6IGNjLk5vZGUgPSBudWxsITtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRBcHAocm9vdDogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICBjMmYuZ3VpLmluaXQocm9vdCk7XG5cbiAgICAgICAgLy8g5ri45oiP5pi+56S65LqL5Lu2XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJHYW1lLkVWRU5UX1NIT1dcIik7XG4gICAgICAgICAgICBHYW1lVGltZXIuZ2FtZVJlc3VtZSgpO1xuICAgICAgICAgICAgYzJmLnRpbWVyLmxvYWQoKTtcbiAgICAgICAgICAgIGMyZi5hdWRpby5yZXN1bWVBbGwoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcbiAgICAgICAgICAgIGMyZi5ldmVudC5lbWl0KEV2ZW50TWVzc2FnZS5HQU1FX0VOVEVSKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5ri45oiP6ZqQ6JeP5LqL5Lu2XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJHYW1lLkVWRU5UX0hJREVcIik7XG4gICAgICAgICAgICBjMmYudGltZXIuc2F2ZSgpOyAgICAgLy8g5bmz5Y+w5LiN6ZyA6KaB5Zyo6YCA5Ye65pe257K+5YeG6K6h566X5pe26Ze077yM55u05o6l5pqC5pe25ri45oiP5pe26Ze0XG4gICAgICAgICAgICBjMmYuYXVkaW8ucGF1c2VBbGwoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgICAgICAgICBjMmYuZXZlbnQuZW1pdChFdmVudE1lc3NhZ2UuR0FNRV9FWElUKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5ri45oiP5bC65a+45L+u5pS55LqL5Lu2XG4gICAgICAgIGxldCBndWkgPSB0aGlzLnJvb3QuYWRkQ29tcG9uZW50KEdVSSkhO1xuICAgICAgICBpZiAoIWNjLnN5cy5pc01vYmlsZSkge1xuICAgICAgICAgICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3VpLmF1dG9TaXplKCk7XG4gICAgICAgICAgICAgICAgYzJmLmV2ZW50LmVtaXQoRXZlbnRNZXNzYWdlLkdBTUVfUkVTSVpFKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==