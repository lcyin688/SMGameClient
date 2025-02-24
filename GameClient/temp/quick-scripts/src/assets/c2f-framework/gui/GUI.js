"use strict";
cc._RF.push(module, '9ae3ckGur1Od7oSTFCIrXfx', 'GUI');
// c2f-framework/gui/GUI.ts

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
exports.GUI = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu;
/** 游戏界面屏幕自适应管理 */
var GUI = /** @class */ (function (_super) {
    __extends(GUI, _super);
    function GUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 竖屏设计尺寸 */
        _this.portraitDrz = null;
        /** 横屏设计尺寸 */
        _this.landscapeDrz = null;
        return _this;
    }
    GUI.prototype.onLoad = function () {
        this.init();
    };
    /** 初始化引擎 */
    GUI.prototype.init = function () {
        if (cc.view.getDesignResolutionSize().width > cc.view.getDesignResolutionSize().height) {
            this.landscapeDrz = cc.view.getDesignResolutionSize();
            this.portraitDrz = new cc.Size(this.landscapeDrz.height, this.landscapeDrz.width);
        }
        else {
            this.portraitDrz = cc.view.getDesignResolutionSize();
            this.landscapeDrz = new cc.Size(this.portraitDrz.height, this.portraitDrz.width);
        }
        this.autoSize();
    };
    /** 游戏画布尺寸变化 */
    GUI.prototype.autoSize = function () {
        var dr;
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        }
        else {
            dr = this.portraitDrz;
        }
        var rw = cc.winSize.width;
        var rh = cc.winSize.height;
        var finalW = rw;
        var finalH = rh;
        if ((rw / rh) > (dr.width / dr.height)) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
            this.portrait = false;
        }
        else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
            this.portrait = true;
        }
        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node.width = finalW;
        this.node.height = finalH;
        c2f.log.logView(dr, "设计尺寸");
        c2f.log.logView(cc.winSize, "屏幕尺寸");
    };
    GUI.prototype.fixedWidth = function () {
        var dr;
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        }
        else {
            dr = this.portraitDrz;
        }
        var rw = cc.winSize.width;
        var rh = cc.winSize.height;
        var finalW = rw;
        var finalH = rh;
        finalW = dr.width;
        finalH = finalW * rh / rw;
        this.portrait = true;
        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node.width = finalW;
        this.node.height = finalH;
    };
    GUI = __decorate([
        ccclass
    ], GUI);
    return GUI;
}(cc.Component));
exports.GUI = GUI;

cc._RF.pop();