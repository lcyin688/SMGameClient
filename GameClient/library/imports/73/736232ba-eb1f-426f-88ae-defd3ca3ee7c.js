"use strict";
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