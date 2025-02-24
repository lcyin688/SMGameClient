
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/component/common/BlurScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvbXBvbmVudC9jb21tb24vQmx1clNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFFM0MsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJbEQ7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzSEM7UUFwSEEsYUFBYTtRQUNMLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQ3RDLGFBQWE7UUFDTCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUNyQyxrQkFBa0I7UUFDVixxQkFBZSxHQUFrQyxJQUFJLENBQUM7O0lBK0cvRCxDQUFDO0lBNUdRLG1DQUFjLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxHQUFnQjtRQUN0RCxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNyQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFF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SSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQzVCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDekIsSUFBSSxDQUFDO1lBQ0wsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ1YsQ0FBQztJQXJIbUIsVUFBVTtRQUY5QixPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ1QsVUFBVSxDQXNIOUI7SUFBRCxpQkFBQztDQXRIRCxBQXNIQyxDQXRIdUMsRUFBRSxDQUFDLFNBQVMsR0FzSG5EO2tCQXRIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMyRkNvbnN0IH0gZnJvbSBcIi4uLy4uL2RlZmluZS9DMkZDb25zdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIG1lbnUsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQG1lbnUoJ2MyZi9jb21tb24vQmx1clNjcmVlbicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXHQvKiog5aSa6YeN5Y+g5Yqg6IOM5pmvICovXG5cdHByaXZhdGUgYXNCYWNrZ3JvdWQ6IGNjLlNwcml0ZSA9IG51bGw7XG5cdC8qKiDlvZPliY3mmL7npLrog4zmma8gKi9cblx0cHJpdmF0ZSBzY3JlZW5Db3B5OiBjYy5TcHJpdGUgPSBudWxsO1xuXHQvKiog56qX5Y+j5a+55bqUVGV4dHVyZSAqL1xuXHRwcml2YXRlIG1hcFRleHR1cmUyVmlldzogTWFwPHN0cmluZywgY2MuUmVuZGVyVGV4dHVyZT4gPSBudWxsO1xuXG5cblx0cHJpdmF0ZSBjcmVhdGVCR1Nwcml0ZShiZ05hbWU6IHN0cmluZywgbWF0OiBjYy5NYXRlcmlhbCkge1xuXHRcdGxldCBuZXdOb2RlID0gbmV3IGNjLk5vZGUoYmdOYW1lKTtcblx0XHRuZXdOb2RlLnNjYWxlWSA9IC0xO1xuXG5cdFx0bmV3Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cdFx0bmV3Tm9kZS53aWR0aCA9IGNjLnZpc2libGVSZWN0LndpZHRoO1xuXHRcdG5ld05vZGUuaGVpZ2h0ID0gY2MudmlzaWJsZVJlY3QuaGVpZ2h0O1xuXHRcdGxldCBzcEJnID0gbmV3Tm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcblx0XHRzcEJnLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcblx0XHRuZXdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHNwQmcuc2V0TWF0ZXJpYWwoMCwgbWF0KTtcblx0XHRyZXR1cm4gc3BCZztcblx0fVxuXG5cdC8qKiDliJ3lp4vljJYgKi9cblx0cHVibGljIGluaXRVSSgpIHtcblx0XHQvL+WKqOaAgeiDjOaZr+WwuuWvuFxuXHRcdGlmICghdGhpcy5zY3JlZW5Db3B5KSB7XG5cdFx0XHQvKiog5p2Q6LSoICovXG5cdFx0XHRjMmYucmVzLmxvYWQoQzJGQ29uc3QuZndCdW5kbGVOYW1lLCAnY29tbW9uUmVzL3NoYWRlci9tYXRlcmlhbHMvYmx1ckltZycsIGNjLk1hdGVyaWFsLCAoZXJyOiBFcnJvciB8IG51bGwsIG1hdDogY2MuTWF0ZXJpYWwpID0+IHtcblx0XHRcdFx0dGhpcy5zY3JlZW5Db3B5ID0gdGhpcy5jcmVhdGVCR1Nwcml0ZSgnc2NyZWVuQ29weScsIG1hdCk7XG5cdFx0XHRcdHRoaXMuYXNCYWNrZ3JvdWQgPSB0aGlzLmNyZWF0ZUJHU3ByaXRlKCdhc0JnJywgbWF0KTtcblx0XHRcdH0pXG5cdFx0fVxuXHRcdC8v5qih57OK6IOM5pmv57yT5a2YXG5cdFx0aWYgKCF0aGlzLm1hcFRleHR1cmUyVmlldykge1xuXHRcdFx0dGhpcy5tYXBUZXh0dXJlMlZpZXcgPSBuZXcgTWFwKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOa3u+WKoOaooeeziuiDjOaZr1xuXHQgKiBAcGFyYW0gbGF5ZXJOYW1lIOeql+WPo+WQjeensCjpooTliLbkvZPlkI0pXG5cdCAqIEBwYXJhbSBlbmRDYiDmt7vliqDlrozmiJDlm57osINcblx0ICogQHBhcmFtIHByZUZsb29yTiDkuIrkuIDlsYLnqpflj6PlkI3np7Bcblx0ICovXG5cdHB1YmxpYyBhZGRCbHVyQmcobGF5ZXJOYW1lOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbiwgcHJlRmxvb3JOOiBzdHJpbmcpIHtcblx0XHRpZiAodGhpcy5tYXBUZXh0dXJlMlZpZXcgJiYgdGhpcy5tYXBUZXh0dXJlMlZpZXcuaGFzKGxheWVyTmFtZSkpIHtcblx0XHRcdGxldCB0ZXh0dXJlID0gdGhpcy5tYXBUZXh0dXJlMlZpZXcuZ2V0KGxheWVyTmFtZSk7XG5cdFx0XHR0aGlzLnNjcmVlbkNvcHkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG5cdFx0XHR0aGlzLnNjcmVlbkNvcHkubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0dGhpcy5wbGF5Qmx1ckluQW5pbWEoZW5kQ2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvcHlTY3JlZW4obGF5ZXJOYW1lLCBlbmRDYiwgcHJlRmxvb3JOKTtcblx0XHR9XG5cdH1cblxuXHQvKiog56e76Zmk5qih57OK6IOM5pmvICovXG5cdHB1YmxpYyByZW1vdmVkQmx1ckJnKGxheWVyTmFtZTogc3RyaW5nKSB7XG5cdFx0aWYgKHRoaXMubWFwVGV4dHVyZTJWaWV3KSB7XG5cdFx0XHR0aGlzLm1hcFRleHR1cmUyVmlldy5kZWxldGUobGF5ZXJOYW1lKTtcblx0XHR9XG5cdH1cblxuXHQvKiog5riF56m65qih57OK6IOM5pmvICovXG5cdHB1YmxpYyBjbGVhbkJsdXJCZygpIHtcblx0XHRpZiAodGhpcy5tYXBUZXh0dXJlMlZpZXcpIHtcblx0XHRcdHRoaXMubWFwVGV4dHVyZTJWaWV3LmNsZWFyKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOWxj+W5leaIquWbviAqL1xuXHRwcml2YXRlIGNvcHlTY3JlZW4obGF5ZXJOYW1lOiBzdHJpbmcsIGVuZENiOiBGdW5jdGlvbiwgcHJlRmxvb3JOOiBzdHJpbmcpIHtcblx0XHQvL+eUu+W4g1xuXHRcdGxldCBjdXJUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcblx0XHRjdXJUZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0LCBjYy5SZW5kZXJUZXh0dXJlLkRlcHRoU3RlbmNpbEZvcm1hdC5SQl9GTVRfUzgpO1xuXHRcdHRoaXMubWFwVGV4dHVyZTJWaWV3LnNldChsYXllck5hbWUsIGN1clRleHR1cmUpO1xuXHRcdC8v5piv5ZCm5pyJ5Y+g5Yqg5oiq5bGPXG5cdFx0bGV0IGlzT3ZlcmxheUNvcHkgPSB0aGlzLm1hcFRleHR1cmUyVmlldy5zaXplID4gMTtcblx0XHRpZiAocHJlRmxvb3JOLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCBwcmVUZXh0dXJlID0gdGhpcy5tYXBUZXh0dXJlMlZpZXcuZ2V0KHByZUZsb29yTik7XG5cdFx0XHRpZiAocHJlVGV4dHVyZSkge1xuXHRcdFx0XHR0aGlzLmFzQmFja2dyb3VkLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHByZVRleHR1cmUpO1xuXHRcdFx0XHR0aGlzLmFzQmFja2dyb3VkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly/lhYjpmpDol4/oh6rouqtcblx0XHR0aGlzLnNjcmVlbkNvcHkubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHQvL+makOiXj+ato+WcqOaSreaUvuWHuuWFpeWcuueahOeVjOmdolxuXHRcdGMyZi5ndWkuaGlkZUFuaW1hUGxheWluZ1ZpZXcoKTtcblx0XHQvL+Wxj+W5leaLt+i0nVxuXHRcdGxldCBjYW1lcmFOb2RlID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW1lcmFcIik7XG5cdFx0bGV0IGNhbWVyYSA9IGNhbWVyYU5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG5cdFx0aWYgKGNhbWVyYSkge1xuXHRcdFx0Y2FtZXJhLnRhcmdldFRleHR1cmUgPSBjdXJUZXh0dXJlO1xuXHRcdFx0Y2FtZXJhLnJlbmRlcihudWxsKTtcblx0XHRcdGNhbWVyYS50YXJnZXRUZXh0dXJlID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5hc0JhY2tncm91ZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdC8v5oGi5aSN5q2j5Zyo5pKt5pS+5Ye65YWl5Zy655qE55WM6Z2iXG5cdFx0YzJmLmd1aS5zaG93QW5pbWFQbGF5aW5nVmlldygpO1xuXHRcdC8v5pi+56S66Ieq6LqrXG5cdFx0dGhpcy5zY3JlZW5Db3B5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHRsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoY3VyVGV4dHVyZSk7XG5cdFx0dGhpcy5zY3JlZW5Db3B5LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG5cblx0XHR0aGlzLnBsYXlCbHVySW5BbmltYShlbmRDYik7XG5cdH1cblxuXHQvKiog5pKt5pS+5riQ5pi+5pWI5p6cICovXG5cdHByaXZhdGUgcGxheUJsdXJJbkFuaW1hKGVuZENiOiBGdW5jdGlvbikge1xuXHRcdHRoaXMuc2NyZWVuQ29weS5ub2RlLm9wYWNpdHkgPSAxODA7XG5cdFx0Y2MudHdlZW4odGhpcy5zY3JlZW5Db3B5Lm5vZGUpXG5cdFx0XHQudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KVxuXHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRlbmRDYiAmJiBlbmRDYigpO1xuXHRcdFx0fSlcblx0XHRcdC5zdGFydCgpXG5cdH1cbn1cbiJdfQ==