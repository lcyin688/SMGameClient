import { StringHelper } from '../../../core/helper/StringHelper';
import { WEI18nBase } from './WEI18nBase';

const { ccclass, requireComponent, menu, property } = cc._decorator;

declare global {
    interface IUI {
        WEI18nSprite: typeof WEI18nSprite;
    }

    namespace c2f {
        namespace ui {
            type WEI18nSprite = InstanceType<typeof WEI18nSprite>;
        }
    }
}

@ccclass
@requireComponent(cc.Sprite)
@menu('c2f/lang/WEI18nSprite(多语言Sprite组件)')
export class WEI18nSprite extends WEI18nBase<cc.SpriteFrame> {
    @property({ visible: false })
    protected _resId: string = '';
    @property({
        visible: false,
        tooltip: CC_DEV && '语言资源ID',
    })
    get resId(): string {
        return this._resId;
    }
    set resId(value: string) {
        this._resId = value;
        this.setRes();
    }

    private _sprite: cc.Sprite;
    private get sprite(): cc.Sprite | null {
        this._sprite ??= this.node.getComponent(cc.Sprite);
        return this._sprite;
    }
    private spUUID: string;

    /** 默认挂载的图片作为默认多语言资源 */
    private defaultSprite: cc.SpriteFrame | null = null;

    private static resIdReg = /(langtexture\/)([^\/]+)/;

    resSetFinish: () => void;

    protected onLoad() {
        super.onLoad();
        this.setSpriteFrame(this.sprite?.spriteFrame);
        if (this.sprite && !CC_EDITOR) {
            this.sprite.spriteFrame = null;
        }
        this.setRes().catch((e) => {
            cc.warn('WEI18nSprite onLoad, setRes error=', e);
        });
    }

    protected async getRes(): Promise<cc.SpriteFrame> {
        if (!this.resId) {
            this._resId = c2f.res.getUrlByUuid(this.spUUID);
        }

        if (StringHelper.isNullOrEmpty(this.resId)) {
            cc.warn('WEI18nSprite getRes, resId not config');
            return;
        }

        let resUrl = this.resId.replace(WEI18nSprite.resIdReg, `$1${c2f.language.current}`);

        const isExist = c2f.res.isAssetExist(resUrl);
        if (!isExist) {
            resUrl = this.resId.replace(WEI18nSprite.resIdReg, `$1${c2f.language.getDefaultLangCode()}`);
            if (!c2f.res.isAssetExist(resUrl)) {
                return;
            }
        }

        this._resId = resUrl;

        return await c2f.res.loadOne(this.resId, cc.SpriteFrame);
    }

    public async setRes() {
        if (!this.sprite) {
            return;
        }

        const res = await this.getRes();
        if (!res) {
            // 指定语言的资源不存在，则直接显示默认的
            this.sprite.spriteFrame = this.defaultSprite;
            return;
        }
        if (this.sprite) {
            this.sprite.spriteFrame = res;
        }

        this.resSetFinish && this.resSetFinish();
    }

    public setSp(sp: cc.SpriteFrame) {
        if (!sp || !this.sprite) {
            return;
        }

        this._resId = null;
        this.setSpriteFrame(sp);
        this.setRes();
    }

    /**
     * 动态设置资源地址
     * @param url hall/skin/ct/res/langtexture/id/main/Start
     * @returns
     */
    public setResId(url: string) {
        // url 中必须存在 langtexture
        if (!url.includes('langtexture')) {
            cc.warn('WEI18nSprite setResId, url must include langtexture', url);
            return;
        }
        this._resId = url;
        this.setRes();
        return this;
    }

    private setSpriteFrame(sp: cc.SpriteFrame) {
        if (!this.sprite || !sp) {
            return;
        }

        this.sprite.spriteFrame = sp;
        this.spUUID = this.sprite.spriteFrame?.['_uuid'];
        this.defaultSprite = this.sprite.spriteFrame;
    }
}

c2f.ui.WEI18nSprite = WEI18nSprite;
