"use strict";
cc._RF.push(module, '495b16AbyhIxoIvWp7YkMC9', 'ProgressAdd');
// c2f-framework/component/common/ProgressAdd.ts

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
exports.ProgressAdd = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ProgressAdd = /** @class */ (function (_super) {
    __extends(ProgressAdd, _super);
    function ProgressAdd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onceDur = 1;
        /** 进度控件 */
        _this.curBar = null;
        /** 真实进度 */
        _this.realValue = null;
        return _this;
    }
    ProgressAdd.prototype.onLoad = function () {
        this.curBar = this.node.getComponent(cc.ProgressBar);
    };
    ProgressAdd.prototype.stopAnima = function () {
        cc.Tween.stopAllByTarget(this.node);
        if (!isNaN(this.realValue)) {
            this.curBar.progress = this.realValue;
        }
    };
    ProgressAdd.prototype.setProgress = function (value, fullTms, playAnima) {
        this.stopAnima();
        this.realValue = value;
        if (playAnima) {
            this.playAnima(value, fullTms);
        }
        else {
            this.curBar.progress = value;
        }
    };
    ProgressAdd.prototype.playAnima = function (value, fullTms) {
        if (fullTms > 0) {
            var restDur = (1 - this.curBar.progress) * this.onceDur;
            var newpDur = value * this.onceDur;
            cc.tween(this.curBar)
                .to(restDur, { progress: 1 })
                .sequence(cc.tween(this.curBar).set({ progress: 0 }), cc.tween(this.curBar).to(this.onceDur, { progress: 1 }))
                .repeat(fullTms - 1)
                .set({ progress: 0 })
                .to(newpDur, { progress: value })
                .start();
        }
        else {
            var needDur = (value - this.curBar.progress) * this.onceDur;
            cc.tween(this.curBar)
                .to(needDur, { progress: value })
                .start();
        }
    };
    __decorate([
        property({ serializable: true })
    ], ProgressAdd.prototype, "onceDur", void 0);
    ProgressAdd = __decorate([
        ccclass,
        menu('c2f/common/ProgressAdd')
    ], ProgressAdd);
    return ProgressAdd;
}(cc.Component));
exports.ProgressAdd = ProgressAdd;

cc._RF.pop();