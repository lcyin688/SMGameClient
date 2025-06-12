import GradientLabel from '../../../../c2f-framework/component/common/GradientColor';

const { ccclass, disallowMultiple, executeInEditMode, property, menu } = cc._decorator;

class DialogStyleData {
    font_size: number;
    title_pos: cc.Vec2;
    outLine_width: number;
    close_pos: cc.Vec2;
    uuid_bg: string;
    uuid_close: string;
    uuid_font: string;
    content_size: cc.Size;
    content_pos: cc.Vec2;
}

enum SizeStyleEnum {
    Small,
    Medium,
    Big,
}

const ButtonStyles: { [key: number]: DialogStyleData } = {
    [SizeStyleEnum.Small]: {
        font_size: 56,
        title_pos: cc.v2(0, 223),
        outLine_width: 3,
        close_pos: cc.v2(354, 215),
        uuid_bg: 'eb6a1174-08fa-4c75-a135-ee7a09c58b7f',
        uuid_close: 'a967246a-5578-4250-8dfe-d3e9143a6674',
        uuid_font: 'd08dfb8f-211b-43e5-aad3-c53412d04482',
        content_size: cc.size(757, 292),
        content_pos: cc.v2(0, 0),
    },
    [SizeStyleEnum.Medium]: {
        font_size: 56,
        title_pos: cc.v2(5, 251),
        outLine_width: 3,
        close_pos: cc.v2(435, 245),
        uuid_bg: '1c0aae7b-04d8-4f51-a7aa-3f531d80ac64',
        uuid_close: 'a967246a-5578-4250-8dfe-d3e9143a6674',
        uuid_font: 'd08dfb8f-211b-43e5-aad3-c53412d04482',
        content_size: cc.size(909, 420),
        content_pos: cc.v2(0, -40),
    },
    [SizeStyleEnum.Big]: {
        font_size: 56,
        title_pos: cc.v2(0, 276),
        outLine_width: 3,
        close_pos: cc.v2(546, 267),
        uuid_bg: 'ab4cf8dc-66f1-4225-8782-92582ea2027f',
        uuid_close: 'a967246a-5578-4250-8dfe-d3e9143a6674',
        uuid_font: 'd08dfb8f-211b-43e5-aad3-c53412d04482',
        content_size: cc.size(1129, 374),
        content_pos: cc.v2(0, 10),
    },
};

const uuid_content_bg = '2646c8a0-910a-4e9f-9fca-d46bbae89241';

@ccclass()
@executeInEditMode
@disallowMultiple
@menu('皮肤样式/bg2 弹窗')
export class RsDialog extends cc.Component {
    /** 使用哪种内置大小 */
    @property
    private _size: SizeStyleEnum = SizeStyleEnum.Small;
    @property({ type: cc.Enum(SizeStyleEnum), tooltip: CC_DEV && '弹窗尺寸' })
    get size(): SizeStyleEnum {
        return this._size;
    }
    set size(style: SizeStyleEnum) {
        if (this._size === style) {
            return;
        }
        this._size = style;
        this.updateStyle();
    }

    protected onLoad() {
        CC_PREVIEW && alert(`⚠️ ${cc.js.getClassName(this)} 未删除干净，请排查 ！！！`);

        cc.warn('设置成功后 请删除此组建 bg2Dialog ！！！');
    }

    async updateStyle() {
        if (!CC_EDITOR) {
            return;
        }

        const data = ButtonStyles[this._size];

        // bg
        this.node.setPosition(0, 0);
        const bg = c2f.utils.node.addComponent(this.node, cc.Sprite) as cc.Sprite;
        bg.spriteFrame = await this.loadSpriteFrame(data.uuid_bg);
        bg.type = cc.Sprite.Type.SLICED;
        bg.sizeMode = cc.Sprite.SizeMode.TRIMMED;

        // RC_title
        let title: cc.Node | null = null;
        if (this.node.getChildByName('RC_title')) {
            title = this.node.getChildByName('RC_title');
        } else {
            title = new cc.Node('RC_title');
        }
        title.removeComponent(c2f.ui.WEI18nSprite);
        title.removeComponent(cc.Sprite);
        title.removeComponent(cc.LabelOutline);
        title.setAnchorPoint(0.5, 0.5);
        const title_label = c2f.utils.node.addComponent(title, cc.Label) as cc.Label;
        const title_color = c2f.utils.node.addComponent(title, GradientLabel) as GradientLabel;
        const title_shadow = c2f.utils.node.addComponent(title, cc.LabelShadow) as cc.LabelShadow;

        title_label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        title_label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        title_label.overflow = cc.Label.Overflow.SHRINK;
        title_label.fontSize = data.font_size;
        title_label.lineHeight = 62;
        title_label.font = await this.loadFont(data.uuid_font);

        title_color.beginColor = cc.color().fromHEX('#C2AD72');
        title_color.endColor = cc.color().fromHEX('#FDF6CD');

        title_shadow == null ? cc.warn('null') : (title_shadow.enabled = true);

        title_shadow.color = cc.color().fromHEX('#25130e');
        title_shadow.offset = cc.v2(0, -2);
        title_shadow.blur = 2;

        title.setPosition(data.title_pos);
        title.parent = this.node;
        title.setSiblingIndex(0);
        title.width = 410;

        // content bg
        let content_bg: cc.Node | null = null;
        if (!this.node.getChildByName('content_bg')) {
            content_bg = new cc.Node('content_bg');
        } else {
            content_bg = this.node.getChildByName('content_bg');
        }
        const content_bg_sp = c2f.utils.node.addComponent(content_bg, cc.Sprite) as cc.Sprite;
        content_bg_sp.spriteFrame = await this.loadSpriteFrame(uuid_content_bg);
        content_bg_sp.type = cc.Sprite.Type.SLICED;
        content_bg_sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        content_bg.setPosition(data.content_pos);
        content_bg.setContentSize(data.content_size);
        content_bg.parent = this.node;
        title.setSiblingIndex(2);

        // RC_btnClose
        let btnClose: cc.Node | null = null;
        if (this.node.getChildByName('RC_btnClose')) {
            btnClose = this.node.getChildByName('RC_btnClose');
        } else {
            btnClose = new cc.Node('RC_btnClose');
        }
        btnClose.setPosition(data.close_pos);
        btnClose.setContentSize(new cc.Size(100, 100));
        btnClose.parent = this.node;
        btnClose.setSiblingIndex(1);

        btnClose.removeAllChildren();

        // close icon
        const closeIcon = new cc.Node('icon');
        closeIcon.addComponent(cc.Sprite).spriteFrame = await this.loadSpriteFrame(data.uuid_close);
        closeIcon.setPosition(0, 0);
        closeIcon.parent = btnClose;
    }

    // //////////////////////////////////////////// 其他方法 ////////////////////////////////////////////

    async loadFont(uuid: string): Promise<cc.Font> {
        return new Promise((resolve) => {
            cc.assetManager.loadAny(uuid, (err, asset) => {
                resolve(asset);
            });
        });
    }

    async loadSpriteFrame(uuid: string): Promise<cc.SpriteFrame> {
        return new Promise((resolve) => {
            cc.assetManager.loadAny(uuid, (err, asset) => {
                resolve(asset);
            });
        });
    }

    resetInEditor(): void {
        this.updateStyle();
    }
}
