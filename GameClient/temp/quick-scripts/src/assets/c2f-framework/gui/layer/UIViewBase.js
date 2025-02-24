"use strict";
cc._RF.push(module, '4d786jOK99BAooW+pdRnepo', 'UIViewBase');
// c2f-framework/gui/layer/UIViewBase.ts

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
exports.UIViewBase = void 0;
var C2FConst_1 = require("../../define/C2FConst");
var C2FEnum_1 = require("../../define/C2FEnum");
var UIPrefabBase_1 = require("./UIPrefabBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIViewBase = /** @class */ (function (_super) {
    __extends(UIViewBase, _super);
    function UIViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //--------------UI对象-------------    
        /** 黑色底板 */
        _this.blackBg = null;
        /** 界面根节点 */
        _this.nodeUI = null;
        //---------------------------------
        /** 正在播放出(入)特效 */
        _this._animaPlaying = false;
        return _this;
    }
    Object.defineProperty(UIViewBase.prototype, "animaPlaying", {
        get: function () {
            return this._animaPlaying;
        },
        set: function (v) {
            this._animaPlaying = v;
        },
        enumerable: false,
        configurable: true
    });
    UIViewBase.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initCommonUI();
    };
    UIViewBase.prototype.onDestroy = function () {
        this.blackBg = null;
        this.nodeUI = null;
        _super.prototype.onDestroy.call(this);
    };
    UIViewBase.prototype.initProperty = function () {
        this.blackBg = cc.find('blackBg', this.node);
        this.nodeUI = cc.find('nodeUI', this.node);
    };
    UIViewBase.prototype.initCommonUI = function () {
        if (this.blackBg) {
            this.blackBg.opacity = 0;
        }
        if (this.nodeUI) {
            this.nodeUI.opacity = 0;
        }
    };
    UIViewBase.prototype.playInAnima = function () {
        var _this = this;
        var offsetY = -50;
        var upHeight = 10;
        var duration = 0.3;
        var delayDur = 0.02;
        this.animaPlaying = true;
        if (this.blackBg) {
            cc.tween(this.blackBg)
                .delay(delayDur)
                .set({ opacity: 127 })
                .to(duration, { opacity: C2FConst_1.C2FConst.UIBgOpacity })
                .start();
        }
        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .delay(delayDur)
                .call(function () {
                _this.nodeUI.opacity = 0;
                _this.nodeUI.setPosition(0, offsetY, 0);
            })
                .by(duration / 2, { position: cc.v3(0, -offsetY + upHeight, 0), opacity: 125 })
                .by(duration / 2, { position: cc.v3(0, -upHeight, 0), opacity: 130 })
                .call(function () {
                _this.emit(C2FEnum_1.C2FEnum.Event.PopViewInAnimaCmpl);
            })
                .start();
        }
        if (this.blackBg || this.nodeUI) {
            this.scheduleOnce(function () {
                _this.animaPlaying = false;
            }, duration + delayDur);
        }
        else {
            this.animaPlaying = false;
        }
    };
    UIViewBase.prototype.playOutAnima = function (params, nextFunc) {
        var _this = this;
        var offsetY = -100;
        var duration = 0.2;
        this.animaPlaying = true;
        if (this.nodeUI) {
            cc.tween(this.nodeUI)
                .by(duration, { position: cc.v3(0, offsetY, 0), opacity: -255 })
                .start();
        }
        if (this.blackBg) {
            cc.tween(this.blackBg)
                .to(duration, { opacity: 0 })
                .start();
        }
        var animaEnd = function () {
            _this.animaPlaying = false;
            nextFunc && nextFunc();
        };
        if (this.nodeUI || this.blackBg) {
            this.scheduleOnce(animaEnd, duration);
        }
        else {
            animaEnd && animaEnd();
        }
    };
    UIViewBase.prototype.onEnable = function () {
        if (_super.prototype.onEnable) {
            _super.prototype.onEnable.call(this);
        }
        this.on(C2FEnum_1.C2FEnum.Event.ChangeViewValue, this.onChangeViewValue, this);
    };
    UIViewBase.prototype.onDisable = function () {
        if (_super.prototype.onDisable) {
            _super.prototype.onDisable.call(this);
        }
        this.off(C2FEnum_1.C2FEnum.Event.ChangeViewValue);
    };
    /**
     *
     * @param msgType 消息类型
     * @param varName 变量名
     * @param cb 处理函数
     */
    UIViewBase.prototype.onChangeViewValue = function (msgType, varName, cb) {
        cb === null || cb === void 0 ? void 0 : cb(this[varName]);
    };
    UIViewBase = __decorate([
        ccclass
    ], UIViewBase);
    return UIViewBase;
}(UIPrefabBase_1.UIPrefabBase));
exports.UIViewBase = UIViewBase;

cc._RF.pop();