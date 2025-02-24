"use strict";
cc._RF.push(module, 'ee62dEHZb9KpaLZxws3OjQy', 'BlurScreen');
// c2f-framework/component/common/BlurScreen.ts

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
var BlurScreen = /** @class */ (function (_super) {
    __extends(BlurScreen, _super);
    function BlurScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 多重叠加背景 */
        _this.asBackgroud = null;
        /** 当前显示背景 */
        _this.screenCopy = null;
        /** 窗口对应Texture */
        _this.mapTexture2View = null;
        return _this;
    }
    BlurScreen.prototype.createBGSprite = function (bgName, mat) {
        var newNode = new cc.Node(bgName);
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
    /** 初始化 */
    BlurScreen.prototype.initUI = function () {
        var _this = this;
        //动态背景尺寸
        if (!this.screenCopy) {
            /** 材质 */
            c2f.res.load(C2FConst_1.C2FConst.fwBundleName, 'commonRes/shader/materials/blurImg', cc.Material, function (err, mat) {
                _this.screenCopy = _this.createBGSprite('screenCopy', mat);
                _this.asBackgroud = _this.createBGSprite('asBg', mat);
            });
        }
        //模糊背景缓存
        if (!this.mapTexture2View) {
            this.mapTexture2View = new Map();
        }
    };
    /** 添加模糊背景
     * @param layerName 窗口名称(预制体名)
     * @param endCb 添加完成回调
     * @param preFloorN 上一层窗口名称
     */
    BlurScreen.prototype.addBlurBg = function (layerName, endCb, preFloorN) {
        if (this.mapTexture2View && this.mapTexture2View.has(layerName)) {
            var texture = this.mapTexture2View.get(layerName);
            this.screenCopy.spriteFrame = new cc.SpriteFrame(texture);
            this.screenCopy.node.active = true;
            this.playBlurInAnima(endCb);
        }
        else {
            this.copyScreen(layerName, endCb, preFloorN);
        }
    };
    /** 移除模糊背景 */
    BlurScreen.prototype.removedBlurBg = function (layerName) {
        if (this.mapTexture2View) {
            this.mapTexture2View.delete(layerName);
        }
    };
    /** 清空模糊背景 */
    BlurScreen.prototype.cleanBlurBg = function () {
        if (this.mapTexture2View) {
            this.mapTexture2View.clear();
        }
    };
    /** 屏幕截图 */
    BlurScreen.prototype.copyScreen = function (layerName, endCb, preFloorN) {
        //画布
        var curTexture = new cc.RenderTexture();
        curTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        this.mapTexture2View.set(layerName, curTexture);
        //是否有叠加截屏
        var isOverlayCopy = this.mapTexture2View.size > 1;
        if (preFloorN.length > 0) {
            var preTexture = this.mapTexture2View.get(preFloorN);
            if (preTexture) {
                this.asBackgroud.spriteFrame = new cc.SpriteFrame(preTexture);
                this.asBackgroud.node.active = true;
            }
        }
        //先隐藏自身
        this.screenCopy.node.active = false;
        //隐藏正在播放出入场的界面
        c2f.gui.hideAnimaPlayingView();
        //屏幕拷贝
        var cameraNode = cc.Canvas.instance.node.getChildByName("Camera");
        var camera = cameraNode.getComponent(cc.Camera);
        if (camera) {
            camera.targetTexture = curTexture;
            camera.render(null);
            camera.targetTexture = null;
        }
        this.asBackgroud.node.active = false;
        //恢复正在播放出入场的界面
        c2f.gui.showAnimaPlayingView();
        //显示自身
        this.screenCopy.node.active = true;
        var spriteFrame = new cc.SpriteFrame(curTexture);
        this.screenCopy.spriteFrame = spriteFrame;
        this.playBlurInAnima(endCb);
    };
    /** 播放渐显效果 */
    BlurScreen.prototype.playBlurInAnima = function (endCb) {
        this.screenCopy.node.opacity = 180;
        cc.tween(this.screenCopy.node)
            .to(0.3, { opacity: 255 })
            .call(function () {
            endCb && endCb();
        })
            .start();
    };
    BlurScreen = __decorate([
        ccclass,
        menu('c2f/common/BlurScreen')
    ], BlurScreen);
    return BlurScreen;
}(cc.Component));
exports.default = BlurScreen;

cc._RF.pop();