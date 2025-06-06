import { GameConsts } from '../../../Script/game/GameConsts';
import { C2FConst } from '../../define/C2FConst';

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu('c2f/common/BlurScreen')
export default class BlurScreen extends cc.Component {
    /** 多重叠加背景 */
    private asBackgroud: cc.Sprite = null;
    /** 当前显示背景 */
    private screenCopy: cc.Sprite = null;
    /** 窗口对应Texture */
    private mapTexture2View: Map<string, cc.RenderTexture> = null;

    private createBGSprite(bgName: string, mat: cc.Material) {
        let newNode = new cc.Node(bgName);
        newNode.scaleY = -1;

        newNode.parent = this.node;
        newNode.width = cc.visibleRect.width;
        newNode.height = cc.visibleRect.height;
        let spBg = newNode.addComponent(cc.Sprite);
        spBg.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        newNode.active = false;
        spBg.setMaterial(0, mat);
        return spBg;
    }

    /** 初始化 */
    public initUI() {
        //动态背景尺寸
        if (!this.screenCopy) {
            /** 材质 */
            c2f.res.load(GameConsts.Bundle.framework, 'commonRes/shader/materials/blurImg', cc.Material, (err: Error | null, mat: cc.Material) => {
                this.screenCopy = this.createBGSprite('screenCopy', mat);
                this.asBackgroud = this.createBGSprite('asBg', mat);
            });
        }
        //模糊背景缓存
        if (!this.mapTexture2View) {
            this.mapTexture2View = new Map();
        }
    }

    /** 添加模糊背景
     * @param layerName 窗口名称(预制体名)
     * @param endCb 添加完成回调
     * @param preFloorN 上一层窗口名称
     */
    public addBlurBg(layerName: string, endCb: Function, preFloorN: string) {
        if (this.mapTexture2View && this.mapTexture2View.has(layerName)) {
            let texture = this.mapTexture2View.get(layerName);
            this.screenCopy.spriteFrame = new cc.SpriteFrame(texture);
            this.screenCopy.node.active = true;
            this.playBlurInAnima(endCb);
        } else {
            this.copyScreen(layerName, endCb, preFloorN);
        }
    }

    /** 移除模糊背景 */
    public removedBlurBg(layerName: string) {
        if (this.mapTexture2View) {
            this.mapTexture2View.delete(layerName);
        }
    }

    /** 清空模糊背景 */
    public cleanBlurBg() {
        if (this.mapTexture2View) {
            this.mapTexture2View.clear();
        }
    }

    /** 屏幕截图 */
    private copyScreen(layerName: string, endCb: Function, preFloorN: string) {
        //画布
        let curTexture = new cc.RenderTexture();
        curTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        this.mapTexture2View.set(layerName, curTexture);
        //是否有叠加截屏
        let isOverlayCopy = this.mapTexture2View.size > 1;
        if (preFloorN.length > 0) {
            let preTexture = this.mapTexture2View.get(preFloorN);
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
        let cameraNode = cc.Canvas.instance.node.getChildByName('Camera');
        let camera = cameraNode.getComponent(cc.Camera);
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
        let spriteFrame = new cc.SpriteFrame(curTexture);
        this.screenCopy.spriteFrame = spriteFrame;

        this.playBlurInAnima(endCb);
    }

    /** 播放渐显效果 */
    private playBlurInAnima(endCb: Function) {
        this.screenCopy.node.opacity = 180;
        cc.tween(this.screenCopy.node)
            .to(0.3, { opacity: 255 })
            .call(() => {
                endCb && endCb();
            })
            .start();
    }
}
