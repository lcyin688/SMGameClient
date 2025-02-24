"use strict";
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