import { GameConsts } from '../../../Script/game/GameConsts';
import { C2FConst } from '../../define/C2FConst';

const { ccclass, requireComponent, menu, property } = cc._decorator;
@ccclass
@menu('c2f/shader/ShaderCyclicRLabel')
@requireComponent(cc.Label)
export default class ShaderCyclicRLabel extends cc.Component {
    @property({ tooltip: '文本显示的宽度阈值' })
    maxWidth: number = 0;

    @property({ tooltip: '滑动显示' })
    moveTxt: boolean = true;

    @property({ tooltip: '缩放匹配' })
    scaleMatch: boolean = false;

    @property({
        tooltip: '滑动显示移动速度',
        visible() {
            return this.moveTxt;
        },
    })
    moveSpeed: number = 100;

    @property({ tooltip: '将单字单行显示转为竖直水平的语言种类，以|分隔' })
    vTransH: boolean = false;

    @property({
        tooltip: '转为竖直水平的语言种类，以|分隔',
        visible() {
            return this.vTransH;
        },
    })
    transLG: string = `${C2FConst.LanguageKey.en}|${C2FConst.LanguageKey.th}`;

    //原始缩放
    private oriScale = 1.0;
    //
    private oriPos: cc.Vec2 = cc.Vec2.ZERO;
    private oriMat: cc.Material = null;
    private oriCacheMode: cc.Label.CacheMode = cc.Label.CacheMode.NONE;

    private duration: number = 0;
    private useShader: boolean = false;

    onLoad() {
        this.duration = 0;
        this.oriPos = this.node.getPosition();
        this.oriScale = this.node.scale;
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onLabelSizeChanged.bind(this));
    }

    start() {
        let labelComp = this.node.getComponent(cc.Label);
        this.oriCacheMode = labelComp.cacheMode;
        this.oriMat = labelComp.getMaterial(0);

        this.onLabelSizeChanged();
    }

    /** 是否把竖排改为旋转90横排 */
    private isNeedTransVH() {
        let need = false;
        if (this.vTransH) {
            let lgs = this.transLG.split('|');
            if (lgs.length > 0 && lgs.indexOf(c2f.language.current) >= 0) {
                need = true;
            }
        }
        return need;
    }

    /** 是否需要滚动 */
    private isNeedScroll() {
        let nodeSize = this.node.getContentSize();
        if (nodeSize.width > this.maxWidth) {
            return true;
        }
        return false;
    }

    private onLabelSizeChanged() {
        cc.log(`label size: w:${this.node.width} h:${this.node.height}`);
        if (this.isNeedTransVH()) {
            this.transferV2H();
        }
        if (this.moveTxt) {
            this.updateMoveShow();
        }
        if (this.scaleMatch) {
            this.node.scale = Math.min(this.oriScale, this.maxWidth / Math.max(1, this.node.width));
        }
    }

    private moveLabelWithShader() {
        let txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.cacheMode != cc.Label.CacheMode.NONE) {
            txtLabel.cacheMode = cc.Label.CacheMode.NONE;
        }
        let resUrl = 'commonRes/shader/materials/cyclicRollingTxt';
        c2f.res.load(GameConsts.Bundle.framework, resUrl, cc.Material, null, (err: Error | null, res: cc.Material) => {
            if (err) {
                cc.error(err);
                return;
            }
            if (txtLabel && txtLabel.isValid) {
                let variant1 = txtLabel.setMaterial(0, res);
                if (variant1) {
                    variant1.setProperty('anchorX', this.node.anchorX);
                    variant1.setProperty('showWidth', this.maxWidth / this.node.width);
                    variant1.setProperty('moveSpeed', Math.max(1.0, (this.node.width - this.maxWidth) / (this.moveSpeed || 100)));
                    //重置状态
                    this.duration = 0;
                    this.useShader = true;
                }
            }
        });
    }

    private updateMoveShow() {
        //重置shader使用状态
        this.useShader = false;
        //只有普通模式才支持滑动显示
        let txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.overflow != cc.Label.Overflow.NONE) {
            return;
        }
        if (!this.isNeedScroll()) {
            if (this.oriMat) {
                txtLabel.setMaterial(0, this.oriMat);
                txtLabel.cacheMode = this.oriCacheMode;
            }
            return;
        }
        //正确设置宽度才支持
        if (this.maxWidth <= 0) {
            return;
        }
        this.moveLabelWithShader();
    }

    private transferV2H() {
        if (!this.vTransH) {
            return;
        }
        let txtLabel = this.node.getComponent(cc.Label);
        if (txtLabel.overflow != cc.Label.Overflow.RESIZE_HEIGHT) {
            return;
        }
        //暂时不需要缓存原始信息
        txtLabel.overflow = cc.Label.Overflow.NONE;
        txtLabel.node.angle = 90;
        let oriAnchor = txtLabel.node.getAnchorPoint();
        txtLabel.node.anchorX = oriAnchor.y;
        txtLabel.node.anchorY = oriAnchor.x;
    }

    public update(dt: number) {
        if (this.useShader) {
            this.duration += dt;
            let txtLabel = this.node.getComponent(cc.Label);
            let variant1 = txtLabel.getMaterial(0);
            if (variant1) {
                variant1.setProperty('curTick', this.duration);
            }
        }
    }
}
