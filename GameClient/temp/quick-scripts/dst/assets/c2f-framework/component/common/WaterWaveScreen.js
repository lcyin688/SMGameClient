
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/WaterWaveScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7fa9vj+BxPToLhte/sRtiZ', 'WaterWaveScreen');
// c2f-framework/component/common/WaterWaveScreen.ts

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
var C2FConst_1 = require("../../define/C2FConst");
var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
var WaterWaveScreen = /** @class */ (function (_super) {
    __extends(WaterWaveScreen, _super);
    function WaterWaveScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 背景 */
        _this.bg = null;
        /** 窗口对应Texture */
        _this.texture2View = null;
        /** 水波材质 */
        _this.waterMat = null;
        /** 水波偏移 */
        _this.waveOffset = 0.0;
        /** 持续时间 */
        _this.duration = null;
        /** 变化步长 */
        _this.offsetStep = null;
        /** 已过去时间 */
        _this.elapsed = 0;
        return _this;
    }
    /** 设置特效持续时间 */
    WaterWaveScreen.prototype.setDuration = function (dur) {
        this.duration = dur;
        this.elapsed = 0;
        this.offsetStep = 2 / this.duration * (1 / cc.game.getFrameRate());
        this.initMaterialPa();
    };
    WaterWaveScreen.prototype.createBGSprite = function (mat) {
        var newNode = new cc.Node();
        newNode.scaleY = -1;
        newNode.parent = this.node;
        newNode.width = cc.visibleRect.width;
        newNode.height = cc.visibleRect.height;
        var spBg = newNode.addComponent(cc.Sprite);
        spBg.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        newNode.active = false;
        spBg.setMaterial(0, mat);
        return spBg;
    };
    WaterWaveScreen.prototype.initMaterialPa = function () {
        if (this.waterMat) {
            this.waterMat.setProperty('center', [0.5, 0.5]);
            this.waveOffset = 0.0;
        }
    };
    /** 初始化 */
    WaterWaveScreen.prototype.initUI = function () {
        var _this = this;
        //动态背景尺寸
        if (!this.bg) {
            /** 材质 */
            var url = 'commonRes/shader/materials/waterWave';
            c2f.res.load(C2FConst_1.C2FConst.fwBundleName, url, cc.Material, function (err, mat) {
                _this.waterMat = mat;
                _this.bg = _this.createBGSprite(mat);
                //初始参数
                _this.initMaterialPa();
            });
        }
    };
    WaterWaveScreen.prototype.onLoad = function () {
        this.initUI();
    };
    WaterWaveScreen.prototype.update = function (dt) {
        if (!this.bg) {
            return;
        }
        if (this.elapsed > this.duration) {
            this.node.destroy();
        }
        //截屏
        this.copyCameraToSprite();
        //修改波纹
        this.elapsed += dt;
        this.waveOffset += this.offsetStep;
        this.waterMat.setProperty('wave_offset', this.waveOffset);
    };
    /** 截屏输出到图片 */
    WaterWaveScreen.prototype.copyCameraToSprite = function () {
        if (!this.texture2View) {
            this.texture2View = new cc.RenderTexture();
            this.texture2View.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        }
        this.bg.node.active = false;
        var cameraNode = cc.Canvas.instance.node.getChildByName("Camera");
        var camera = cameraNode.getComponent(cc.Camera);
        if (camera) {
            camera.targetTexture = this.texture2View;
            camera.render(null);
            camera.targetTexture = null;
        }
        this.bg.node.active = true;
        var spriteFrame = new cc.SpriteFrame(this.texture2View);
        this.bg.spriteFrame = spriteFrame;
    };
    WaterWaveScreen = __decorate([
        ccclass,
        menu('c2f/common/WaterWaveScreen')
    ], WaterWaveScreen);
    return WaterWaveScreen;
}(cc.Component));
exports.default = WaterWaveScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vV2F0ZXJXYXZlU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUUzQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUlsRDtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1HQztRQWpHQSxTQUFTO1FBQ0QsUUFBRSxHQUFjLElBQUksQ0FBQztRQUM3QixrQkFBa0I7UUFDVixrQkFBWSxHQUFxQixJQUFJLENBQUM7UUFDOUMsV0FBVztRQUNILGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQ3JDLFdBQVc7UUFDSCxnQkFBVSxHQUFXLEdBQUcsQ0FBQztRQUNqQyxXQUFXO1FBQ0gsY0FBUSxHQUFXLElBQUksQ0FBQztRQUNoQyxXQUFXO1FBQ0gsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFDbEMsWUFBWTtRQUNKLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBb0Y3QixDQUFDO0lBbEZBLGVBQWU7SUFDUixxQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsR0FBZ0I7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsT0FB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QUM7UUFDNUIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sRUFBRTtZQUNYLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBbEdtQixlQUFlO1FBRm5DLE9BQU87UUFDUCxJQUFJLENBQUMsNEJBQTRCLENBQUM7T0FDZCxlQUFlLENBbUduQztJQUFELHNCQUFDO0NBbkdELEFBbUdDLENBbkc0QyxFQUFFLENBQUMsU0FBUyxHQW1HeEQ7a0JBbkdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQzJGQ29uc3QgfSBmcm9tIFwiLi4vLi4vZGVmaW5lL0MyRkNvbnN0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgbWVudSwgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AbWVudSgnYzJmL2NvbW1vbi9XYXRlcldhdmVTY3JlZW4nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0ZXJXYXZlU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXHQvKiog6IOM5pmvICovXG5cdHByaXZhdGUgYmc6IGNjLlNwcml0ZSA9IG51bGw7XG5cdC8qKiDnqpflj6Plr7nlupRUZXh0dXJlICovXG5cdHByaXZhdGUgdGV4dHVyZTJWaWV3OiBjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcblx0LyoqIOawtOazouadkOi0qCAqL1xuXHRwcml2YXRlIHdhdGVyTWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XG5cdC8qKiDmsLTms6LlgY/np7sgKi9cblx0cHJpdmF0ZSB3YXZlT2Zmc2V0OiBudW1iZXIgPSAwLjA7XG5cdC8qKiDmjIHnu63ml7bpl7QgKi9cblx0cHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyID0gbnVsbDtcblx0LyoqIOWPmOWMluatpemVvyAqL1xuXHRwcml2YXRlIG9mZnNldFN0ZXA6IG51bWJlciA9IG51bGw7XG5cdC8qKiDlt7Lov4fljrvml7bpl7QgKi9cblx0cHJpdmF0ZSBlbGFwc2VkOiBudW1iZXIgPSAwO1xuXG5cdC8qKiDorr7nva7nibnmlYjmjIHnu63ml7bpl7QgKi9cblx0cHVibGljIHNldER1cmF0aW9uKGR1cjogbnVtYmVyKSB7XG5cdFx0dGhpcy5kdXJhdGlvbiA9IGR1cjtcblx0XHR0aGlzLmVsYXBzZWQgPSAwO1xuXHRcdHRoaXMub2Zmc2V0U3RlcCA9IDIgLyB0aGlzLmR1cmF0aW9uICogKDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcblx0XHR0aGlzLmluaXRNYXRlcmlhbFBhKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUJHU3ByaXRlKG1hdDogY2MuTWF0ZXJpYWwpIHtcblx0XHRsZXQgbmV3Tm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG5cdFx0bmV3Tm9kZS5zY2FsZVkgPSAtMTtcblxuXHRcdG5ld05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXHRcdG5ld05vZGUud2lkdGggPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcblx0XHRuZXdOb2RlLmhlaWdodCA9IGNjLnZpc2libGVSZWN0LmhlaWdodDtcblx0XHRsZXQgc3BCZyA9IG5ld05vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cdFx0c3BCZy5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG5cdFx0bmV3Tm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRzcEJnLnNldE1hdGVyaWFsKDAsIG1hdCk7XG5cdFx0cmV0dXJuIHNwQmc7XG5cdH1cblxuXHRwcml2YXRlIGluaXRNYXRlcmlhbFBhKCkge1xuXHRcdGlmICh0aGlzLndhdGVyTWF0KSB7XG5cdFx0XHR0aGlzLndhdGVyTWF0LnNldFByb3BlcnR5KCdjZW50ZXInLCBbMC41LCAwLjVdKTtcblx0XHRcdHRoaXMud2F2ZU9mZnNldCA9IDAuMDtcblx0XHR9XG5cdH1cblxuXHQvKiog5Yid5aeL5YyWICovXG5cdHB1YmxpYyBpbml0VUkoKSB7XG5cdFx0Ly/liqjmgIHog4zmma/lsLrlr7hcblx0XHRpZiAoIXRoaXMuYmcpIHtcblx0XHRcdC8qKiDmnZDotKggKi9cblx0XHRcdGNvbnN0IHVybCA9ICdjb21tb25SZXMvc2hhZGVyL21hdGVyaWFscy93YXRlcldhdmUnO1xuXHRcdFx0YzJmLnJlcy5sb2FkKEMyRkNvbnN0LmZ3QnVuZGxlTmFtZSwgdXJsLCBjYy5NYXRlcmlhbCwgKGVycjogRXJyb3IgfCBudWxsLCBtYXQ6IGNjLk1hdGVyaWFsKSA9PiB7XG5cdFx0XHRcdHRoaXMud2F0ZXJNYXQgPSBtYXQ7XG5cdFx0XHRcdHRoaXMuYmcgPSB0aGlzLmNyZWF0ZUJHU3ByaXRlKG1hdCk7XG5cdFx0XHRcdC8v5Yid5aeL5Y+C5pWwXG5cdFx0XHRcdHRoaXMuaW5pdE1hdGVyaWFsUGEoKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLmluaXRVSSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmJnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aGlzLm5vZGUuZGVzdHJveSgpO1xuXHRcdH1cblx0XHQvL+aIquWxj1xuXHRcdHRoaXMuY29weUNhbWVyYVRvU3ByaXRlKCk7XG5cdFx0Ly/kv67mlLnms6Lnurlcblx0XHR0aGlzLmVsYXBzZWQgKz0gZHQ7XG5cdFx0dGhpcy53YXZlT2Zmc2V0ICs9IHRoaXMub2Zmc2V0U3RlcDtcblx0XHR0aGlzLndhdGVyTWF0LnNldFByb3BlcnR5KCd3YXZlX29mZnNldCcsIHRoaXMud2F2ZU9mZnNldCk7XG5cdH1cblxuXHQvKiog5oiq5bGP6L6T5Ye65Yiw5Zu+54mHICovXG5cdHByaXZhdGUgY29weUNhbWVyYVRvU3ByaXRlKCkge1xuXHRcdGlmICghdGhpcy50ZXh0dXJlMlZpZXcpIHtcblx0XHRcdHRoaXMudGV4dHVyZTJWaWV3ID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcblx0XHRcdHRoaXMudGV4dHVyZTJWaWV3LmluaXRXaXRoU2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0LCBjYy5SZW5kZXJUZXh0dXJlLkRlcHRoU3RlbmNpbEZvcm1hdC5SQl9GTVRfUzgpO1xuXHRcdH1cblx0XHR0aGlzLmJnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGNhbWVyYU5vZGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbWVyYVwiKTtcblx0XHRsZXQgY2FtZXJhID0gY2FtZXJhTm9kZS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcblx0XHRpZiAoY2FtZXJhKSB7XG5cdFx0XHRjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMudGV4dHVyZTJWaWV3O1xuXHRcdFx0Y2FtZXJhLnJlbmRlcihudWxsKTtcblx0XHRcdGNhbWVyYS50YXJnZXRUZXh0dXJlID0gbnVsbDtcblx0XHR9XG5cblx0XHR0aGlzLmJnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHRsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlMlZpZXcpO1xuXHRcdHRoaXMuYmcuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcblx0fVxufVxuIl19