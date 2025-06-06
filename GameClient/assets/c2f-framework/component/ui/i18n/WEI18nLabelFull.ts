import { LanguageData } from '../../../core/language/LanguageData';
import { C2FConst } from '../../../define/C2FConst';
import { WEI18nBase } from './WEI18nBase';

const { ccclass, disallowMultiple, executeInEditMode, property, menu } = cc._decorator;

enum LanguageEnum {
    zh = 0,
    tw = 1,
    en = 2,
}
const LanguageJson: { [key: number]: string } = {
    [LanguageEnum.zh]: 'bf0d5c1b-c4d8-4abd-9d1b-c89cea66eb3d',
    [LanguageEnum.en]: 'b1edc332-4913-44d7-a2e8-e06b68d07447',
    [LanguageEnum.tw]: 'a32af448-3af6-456c-b4b5-17305aa844c1',
};

/**
 * 大厅 多语言 文字插件，
 * @warning 一般只在 prefab 编辑模式下使用，不会挂载全局
 * 不支持字符串格式化
 */

@ccclass
@executeInEditMode
@disallowMultiple
@menu('c2f/lang/WEI18nLabelFull(多语言翻译)')
export class WEI18nLabelFull extends WEI18nBase<string> {
    private label: cc.Label | cc.RichText | null = null;

    @property({ visible: false })
    protected _resId: string = '';

    @property({
        tooltip: CC_DEV && '语言资源ID',
    })
    get resId(): string {
        return this._resId;
    }
    set resId(value: string) {
        this._resId = value;
        this.setRes();
    }

    @property({ visible: false })
    protected _langArea: LanguageEnum = LanguageEnum.zh;

    @property({
        type: cc.Enum(LanguageEnum),
        tooltip: CC_DEV && '语言区域',
    })
    get langArea(): LanguageEnum {
        return this._langArea;
    }
    set langArea(value: LanguageEnum) {
        this._langArea = value;
        this.setRes();
    }

    @property({ serializable: true })
    _formatV: string = '';
    @property({ type: cc.String, serializable: true })
    get formatV(): string {
        return this._formatV || '';
    }
    set formatV(value: string) {
        this._formatV = value;
        this.setRes();
    }

    protected onLoad() {
        super.onLoad();
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.setRes();
    }

    async getRes() {
        if (!CC_EDITOR) {
            return;
        }
        let url = LanguageJson[this.langArea];
        let arr = await this.loadJson(url);
        return arr.json?.[this.resId] || '';
    }

    async setRes() {
        if (!this.label) {
            return;
        }
        if (CC_EDITOR) {
            let value = await this.getRes();
            if (!value || !this.label) {
                cc.log('json key not font:', this.resId);
                return;
            }
            let text = c2f.utils.str.formatWords(value, this.formatV);
            this.label.string = text;
            if (this.label instanceof cc.Label) {
                this.label['_forceUpdateRenderData']();
            }
        } else {
            // let areaId = LanguageJson[this.langArea];
            // c2f.language.setLangCode(areaId, false);
            // await c2f.language.loadLangJsonModule();
            let text = LanguageData.getLangByID(this.resId, this.formatV);
            this.label.string = text;
            cc.log('  setRes ===== text  ', text);
        }
    }

    /**通过 uuid 获取 */
    async loadJson(url: string): Promise<cc.JsonAsset> {
        return new Promise((resolve) => {
            cc.assetManager.loadAny(url, (err, asset) => {
                if (err) {
                    cc.error(`load sprite frame with uuid(${url}) error: ${err}`);
                }
                resolve(asset);
            });
        });
    }

    resetInEditor(): void {
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.setRes();
    }
}
