import { GameConsts } from '../../../Script/game/GameConsts';
import { C2FConst } from '../../define/C2FConst';

const { ccclass, menu, property } = cc._decorator;

@ccclass
@menu('c2f/common/WaterWaveScreen')
export default class WaterWaveScreen extends cc.Component {
    /** 背景 */
    private bg: cc.Sprite = null;
    /** 窗口对应Texture */
    private texture2View: cc.RenderTexture = null;
    /** 水波材质 */
    private waterMat: cc.Material = null;
    /** 水波偏移 */
    private waveOffset: number = 0.0;
    /** 持续时间 */
    private duration: number = null;
    /** 变化步长 */
    private offsetStep: number = null;
    /** 已过去时间 */
    private elapsed: number = 0;

    /** 设置特效持续时间 */
    public setDuration(dur: number) {
        this.duration = dur;
        this.elapsed = 0;
        this.offsetStep = (2 / this.duration) * (1 / cc.game.getFrameRate());
        this.initMaterialPa();
    }

    private createBGSprite(mat: cc.Material) {
        let newNode = new cc.Node();
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

    private initMaterialPa() {
        if (this.waterMat) {
            this.waterMat.setProperty('center', [0.5, 0.5]);
            this.waveOffset = 0.0;
        }
    }

    /** 初始化 */
    public initUI() {
        //动态背景尺寸
        if (!this.bg) {
            /** 材质 */
            const url = 'commonRes/shader/materials/waterWave';
            c2f.res.load(GameConsts.Bundle.framework, url, cc.Material, (err: Error | null, mat: cc.Material) => {
                this.waterMat = mat;
                this.bg = this.createBGSprite(mat);
                //初始参数
                this.initMaterialPa();
            });
        }
    }

    protected onLoad(): void {
        this.initUI();
    }

    protected update(dt: number): void {
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
    }

    /** 截屏输出到图片 */
    private copyCameraToSprite() {
        if (!this.texture2View) {
            this.texture2View = new cc.RenderTexture();
            this.texture2View.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        }
        this.bg.node.active = false;
        let cameraNode = cc.Canvas.instance.node.getChildByName('Camera');
        let camera = cameraNode.getComponent(cc.Camera);
        if (camera) {
            camera.targetTexture = this.texture2View;
            camera.render(null);
            camera.targetTexture = null;
        }

        this.bg.node.active = true;
        let spriteFrame = new cc.SpriteFrame(this.texture2View);
        this.bg.spriteFrame = spriteFrame;
    }
}
