"use strict";
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