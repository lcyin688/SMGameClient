import GradientLabel from '../../../../c2f-framework/component/common/GradientColor';

const { ccclass, disallowMultiple, executeInEditMode, property, menu } = cc._decorator;

class ButtonStyleData {
    spriteUuid: string[] = [];
    /** 字体uuid */
    fontUuid: string = '';
    /** 贴图 */
    @property({ type: cc.SpriteFrame })
    spriteFrame?: cc.SpriteFrame = null;
    /** 贴图颜色叠加 */
    @property()
    sfColor?: cc.Color = cc.color(255, 255, 255.255);
    /** 字号 */
    @property()
    fontSize: number[] = [44, 40, 30];
    /** 字体颜色 */
    @property()
    fontColor: cc.Color = cc.color(255, 255, 255.255);
    /** 文字描边 */
    @property()
    enableOutline: boolean = false;
    /** 描边 */
    @property()
    outlineSize: number = 3;
    /** 描边颜色 */
    @property()
    outlineColor: cc.Color = cc.color(255, 255, 255.255);
    /** 文字阴影 */
    @property()
    enableShadow: boolean = false;
    /** 阴影颜色 */
    @property()
    shadowColor: cc.Color = cc.color(255, 255, 255.255);
    /** 阴影方向 */
    @property()
    shadowPos: cc.Vec2 = cc.v2(0, 0);
    /** 阴影扩散 */
    @property()
    shadowBlur: number = 2;
    /** 文字排版模式 */
    @property({ type: cc.Enum(cc.Label.Overflow) })
    Overflow: cc.Label.Overflow = cc.Label.Overflow.SHRINK;
    /** 渐变色 */
    @property()
    GradientColors: cc.Color[] = [cc.color(255, 255, 255, 255), cc.color(255, 255, 255, 255)];
}

enum ButtonColorStyleEnum {
    /** 蓝色样式 */
    Blue,
    /** 绿色样式 */
    Green,
    /** 灰色样式 */
    Gray,
    /** 黄色样式 */
    Orange,
    /** 红色样式 */
    Red,
}

enum ButtonSizeStyleEnum {
    Big,
    Medium,
    Small,
}

/** 按钮使用字体统一 */
const fontUuid = 'd08dfb8f-211b-43e5-aad3-c53412d04482';
/** 预览效果实际大小 */
const fontSize = [36, 34, 25];
/** 描边 */
const enableOutline = true;
const outlineSize = 3;
const shadowBlur = 1;
const enableShadow = false;
const shadowPos = cc.v2(0, -2);

const ButtonStyles: { [key: number]: ButtonStyleData } = {
    [ButtonColorStyleEnum.Blue]: {
        spriteUuid: ['b3dcaa8a-4955-4ca4-89aa-4be1a3890e8b', '0743033d-1917-40e3-af3d-6d854997e194', '53f89a1d-87b8-4abc-9008-2e7e3da54755'],
        fontUuid: fontUuid,
        fontColor: cc.color().fromHEX('#ffffff'),
        fontSize: fontSize,
        enableOutline: enableOutline,
        outlineSize: outlineSize,
        outlineColor: cc.color().fromHEX('#0f074f'),
        enableShadow: enableShadow,
        shadowColor: cc.color().fromHEX('#0f074f'),
        shadowBlur: shadowBlur,
        shadowPos: shadowPos,
        Overflow: cc.Label.Overflow.SHRINK,
        GradientColors: [cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#fdf7c4')],
    },

    [ButtonColorStyleEnum.Green]: {
        spriteUuid: ['63a51a51-0948-440f-8545-4159a12f423c', '61e99d84-352d-4755-ad6a-09c3a7b4a5c3', 'efbaa7ff-e61b-4723-a8fe-af87318e8ecf'],
        fontUuid: fontUuid,
        fontColor: cc.color().fromHEX('#ffffff'),
        fontSize: fontSize,
        enableOutline: enableOutline,
        outlineSize: outlineSize,
        outlineColor: cc.color().fromHEX('#033200'),
        enableShadow: enableShadow,
        shadowColor: cc.color().fromHEX('#033200'),
        shadowBlur: shadowBlur,
        shadowPos: shadowPos,
        Overflow: cc.Label.Overflow.SHRINK,
        GradientColors: [cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#fdf7c4'), cc.color().fromHEX('#fdf7c4')],
    },
    [ButtonColorStyleEnum.Orange]: {
        spriteUuid: ['4d674eff-258e-443c-bf40-7a254dfea20f', '2a7edfd5-dd6d-4c90-835c-f06898831137', '2fc8e1dc-b478-4a07-ad69-a242acdcb630'],
        fontUuid: fontUuid,
        fontColor: cc.color().fromHEX('#ffffff'),
        fontSize: fontSize,
        enableOutline: enableOutline,
        outlineSize: outlineSize,
        outlineColor: cc.color().fromHEX('#3a1a06'),
        enableShadow: enableShadow,
        shadowColor: cc.color().fromHEX('#3a1a06'),
        shadowBlur: shadowBlur,
        shadowPos: shadowPos,
        Overflow: cc.Label.Overflow.SHRINK,
        GradientColors: [cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#fdf7c4'), cc.color().fromHEX('#fdf7c4')],
    },
    [ButtonColorStyleEnum.Gray]: {
        spriteUuid: ['8c8fc9ae-9aa1-4bd5-aebe-82475c853d25', '5480e701-f4c7-4f6e-866e-131021cb8dce', '2f30787f-ec1e-46a3-86e3-8b7b17716db5'],
        fontUuid: fontUuid,
        fontColor: cc.color().fromHEX('#ffffff'),
        fontSize: fontSize,
        enableOutline: enableOutline,
        outlineSize: outlineSize,
        outlineColor: cc.color().fromHEX('#1a1916'),
        enableShadow: enableShadow,
        shadowColor: cc.color().fromHEX('#1a1916'),
        shadowBlur: shadowBlur,
        shadowPos: shadowPos,
        Overflow: cc.Label.Overflow.SHRINK,
        GradientColors: [cc.color().fromHEX('#929292'), cc.color().fromHEX('#929292'), cc.color().fromHEX('#ededed'), cc.color().fromHEX('#ededed')],
    },
    [ButtonColorStyleEnum.Red]: {
        spriteUuid: ['7e93ee4e-3397-4614-b39f-8e879099a966', '66d5ac1d-5055-44ab-8ad9-ef87f8007277', '625edf02-e5cf-49f5-8a51-fa8cdf3d933b'],
        fontUuid: fontUuid,
        fontColor: cc.color().fromHEX('#ffffff'),
        fontSize: fontSize,
        enableOutline: enableOutline,
        outlineSize: outlineSize,
        outlineColor: cc.color().fromHEX('#420e0e'),
        enableShadow: enableShadow,
        shadowColor: cc.color().fromHEX('#420e0e'),
        shadowBlur: shadowBlur,
        shadowPos: shadowPos,
        Overflow: cc.Label.Overflow.SHRINK,
        GradientColors: [cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#ad7a46'), cc.color().fromHEX('#fdf7c4'), cc.color().fromHEX('#fdf7c4')],
    },
};

@ccclass()
@executeInEditMode
@disallowMultiple
@menu('皮肤样式/bg2 按钮')
export class Cm5Button extends cc.Component {
    /** 按钮图片 */
    @property({ type: cc.Sprite, tooltip: CC_DEV && '按钮图片' })
    sprite: cc.Sprite = null;

    /** 按钮文本 */
    @property({ type: cc.Label, tooltip: CC_DEV && '按钮文本' })
    label: cc.Label = null;

    // label 缩放倍数
    readonly labelScale: number = 0.65;

    // /////////////////////////////////////////////////////////////// 按钮风格

    @property
    private _style: ButtonColorStyleEnum = ButtonColorStyleEnum.Blue;
    @property({
        type: cc.Enum(ButtonColorStyleEnum),
        tooltip: CC_DEV && '按钮风格',
    })
    get style(): ButtonColorStyleEnum {
        return this._style;
    }
    set style(style: ButtonColorStyleEnum) {
        if (this._style === style) {
            return;
        }
        this._style = style;
        this.updateStyle();
    }

    // /////////////////////////////////////////////////////////////// 按钮尺寸

    /** 使用哪种内置大小 */
    @property
    private _size: ButtonSizeStyleEnum = ButtonSizeStyleEnum.Medium;
    @property({
        type: cc.Enum(ButtonSizeStyleEnum),
        tooltip: CC_DEV && '按钮尺寸',
    })
    get size(): ButtonSizeStyleEnum {
        return this._size;
    }
    set size(style: ButtonSizeStyleEnum) {
        if (this._size === style) {
            return;
        }
        this._size = style;
        this.updateStyle();
    }

    // ////////////////////////////////////////////////////////////////
    // //////////////////////  按钮  ///////////////////////////////////
    // ////////////////////////////////////////////////////////////////

    protected onLoad(): void {
        CC_PREVIEW && alert(`⚠️ ${cc.js.getClassName(this)} 未删除干净，请排查 ！！！`);

        this.sprite = this.getComponent(cc.Sprite);
        if (!this.sprite) {
            this.sprite = this.getComponentInChildren(cc.Sprite);
            if (!this.sprite) {
                this.sprite = this.node.addComponent(cc.Sprite);
            }
        }

        this.label = this.getComponentInChildren(cc.Label);
        if (!this.label) {
            let lab = new cc.Node();
            lab.name = 'label';
            lab.parent = this.node;
            this.label = lab.addComponent(cc.Label);
            this.label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            this.label.verticalAlign = cc.Label.VerticalAlign.CENTER;
            this.label.string = 'Label';
        }

        this.updateStyle();
    }

    private async updateStyle() {
        cc.warn('设置成功后 请删除此组建 bg2Button ！！！');

        if (!CC_EDITOR && this.label && this.label.node.scale == this.labelScale) {
            return;
        }
        const styleData = ButtonStyles[this._style];

        // bg
        if (CC_EDITOR && this.sprite) {
            this.sprite.type == cc.Sprite.Type.SIMPLE;
            this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
            this.sprite.spriteFrame = await this.loadSpriteFrame(styleData);
        }
        // label
        if (this.label) {
            if (CC_EDITOR) {
                this.label.font = await this.loadFont(styleData);
            }
            switch (this._size) {
                case ButtonSizeStyleEnum.Small:
                    this.label.node.setPosition(0, 5);
                    break;
                case ButtonSizeStyleEnum.Medium:
                    this.label.node.setPosition(0, 6);
                    break;
                case ButtonSizeStyleEnum.Big:
                default:
                    this.label.node.setPosition(0, 7);
                    break;
            }
            this.label.node.scale = this.labelScale;
            this.label.enableWrapText = false;

            if (styleData.fontColor) {
                this.label.node.color = styleData.fontColor;
            }

            if (styleData.fontSize) {
                const fontSize = Math.ceil(styleData.fontSize[this.size] / this.labelScale);
                this.label.fontSize = fontSize;
                this.label.lineHeight = fontSize + 2;
            }

            if (styleData.enableOutline) {
                const outLine = this.nodeAddComponent(this.label.node, cc.LabelOutline);
                if (styleData.outlineSize) {
                    outLine.width = styleData.outlineSize;
                }
                if (styleData.outlineColor) {
                    outLine.color = styleData.outlineColor;
                }
            } else {
                // 移除描边效果
                this.label.node.removeComponent(cc.LabelOutline);
            }

            if (styleData.GradientColors.length > 0) {
                const colorAssembler = this.nodeAddComponent(this.label.node, GradientLabel);
                colorAssembler.beginColor = styleData.GradientColors[0];
                colorAssembler.endColor = styleData.GradientColors[1];
            } else {
                // 移除渐变效果
                this.label.node.removeComponent(GradientLabel);
            }

            if (styleData.enableShadow) {
                const shadow = this.nodeAddComponent(this.label.node, cc.LabelShadow);
                shadow.color = styleData.shadowColor;
                shadow.offset = styleData.shadowPos;
                shadow.blur = styleData.shadowBlur;
            } else {
                // 移除阴影效果
                this.label.node.removeComponent(cc.LabelShadow);
            }

            this.label.overflow = styleData.Overflow;
            if (styleData.Overflow === cc.Label.Overflow.SHRINK) {
                this.label.node.width = (this.sprite.node.width - 50) * 1.65;
                this.label.node.height = (this.sprite.node.height - 30) * 1.65;
            }
        }
    }

    private async loadSpriteFrame(style: ButtonStyleData): Promise<cc.SpriteFrame> {
        return new Promise((resolve) => {
            cc.assetManager.loadAny(style.spriteUuid[this.size], (err, asset) => {
                if (err) {
                    cc.error(`load sprite frame with uuid(${style.spriteUuid}) error: ${err}`);
                }
                resolve(asset);
            });
        });
    }

    private async loadFont(style: ButtonStyleData): Promise<cc.Font> {
        return new Promise((resolve) => {
            cc.assetManager.loadAny(style.fontUuid, (err, asset) => {
                if (err) {
                    cc.error(`load Font with uuid(${style.fontUuid}) error: ${err}`);
                }
                resolve(asset);
            });
        });
    }

    private nodeAddComponent<T extends cc.Component>(node: cc.Node, CLASS: new () => T): T {
        if (!node) {
            return;
        }
        return node.getComponent(CLASS) ?? node.addComponent(CLASS);
    }
}
