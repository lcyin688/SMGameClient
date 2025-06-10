/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { C2FConst } from '../../../c2f-framework/define/C2FConst';

const { ccclass, executeInEditMode, property, menu } = cc._decorator;

const language_type_enum = c2f.core.EnumHelper.convertStringEnumToNumberEnum(c2f.language.current, c2f.core.EnumHelper.getEnumValues(C2FConst.LanguageKey));

/**
 * 多语言差异类型
 * ❌ 已有的编号不能去改动，新增请往后占用编号
 */
enum LangDiffType {
    NONE = 0,
    // 基础类型【1-49】
    ACTIVE = 1,
    SIZE = 2,
    POSITION = 3,
    COLOR = 4,
    // 组合类型【49-99】
    SIZE_POSITION = 50,
    SIZE_POSITION_COLOR = 51,
    // 全部类型 == 100
    ALL = 100,
}

/** 当前差异类型 */
let curDiffType = LangDiffType.NONE;

@ccclass('LangNodeCfg') // 必须提供类名
export default class LangNodeCfg {
    bShowLang: boolean = true;
    constructor() {
        // 保留无参构造
    }
    init(bShowLang: boolean = true) {
        this.bShowLang = bShowLang;
    }

    @property({
        displayName: CC_DEV && '语言',
        type: language_type_enum,
        visible: function () {
            return this.bShowLang == true;
        },
    })
    lang: number = language_type_enum.en;

    @property({
        displayName: CC_DEV && '显示',
        visible: function () {
            return this.isInType(LangDiffType.ACTIVE, curDiffType);
        },
    })
    active: boolean = false;

    @property({
        displayName: CC_DEV && '尺寸',
        visible: function () {
            return this.isInType(LangDiffType.SIZE, curDiffType);
        },
    })
    size: cc.Size = cc.size(0, 0);

    @property({
        displayName: CC_DEV && '位置',
        visible: function () {
            return this.isInType(LangDiffType.POSITION, curDiffType);
        },
    })
    position: cc.Vec3 = cc.v3(0, 0);

    @property({
        displayName: CC_DEV && '颜色',
        visible: function () {
            return this.isInType(LangDiffType.COLOR, curDiffType);
        },
    })
    color: cc.Color = cc.Color.WHITE;

    private isInType(type: LangDiffType, curType: LangDiffType): boolean {
        if (curType === LangDiffType.ALL) {
            return true;
        }
        if (curType === type) {
            return true;
        }
        if (type === LangDiffType.COLOR && curType === LangDiffType.SIZE_POSITION_COLOR) {
            return true;
        }
        if (type === LangDiffType.SIZE && curType === LangDiffType.SIZE_POSITION) {
            return true;
        }
        if (type === LangDiffType.SIZE && curType === LangDiffType.SIZE_POSITION_COLOR) {
            return true;
        }
        if (type === LangDiffType.POSITION && curType === LangDiffType.SIZE_POSITION) {
            return true;
        }
        if (type === LangDiffType.POSITION && curType === LangDiffType.SIZE_POSITION_COLOR) {
            return true;
        }
        return false;
    }
}

@ccclass
@executeInEditMode
@menu('c2f/lang/WEI18nCustom(多语言自定义节点差异)')
export class WEI18nCustom extends cc.Component {
    // ///////////////////////////////////////////////////// 当前语言 /////////////////////////////////////////////////////

    @property()
    private _language: number = language_type_enum.en;

    /** 语言 */
    @property({ displayName: CC_DEV && '当前语言', type: language_type_enum })
    protected get language(): number {
        return this._language;
    }

    protected set language(value: number) {
        this._language = value;
        this.init();
    }

    // ///////////////////////////////////////////////////// 语言差异类型 /////////////////////////////////////////////////////

    @property()
    _mixType: number = LangDiffType.NONE;

    @property({ displayName: CC_DEV && '差异类型', type: cc.Enum(LangDiffType) })
    get mixType(): LangDiffType {
        curDiffType = this._mixType;
        return this._mixType;
    }

    set mixType(value: LangDiffType) {
        curDiffType = value;
        this._mixType = value;
        this.init();
    }

    // ///////////////////////////////////////////////////// 默认值配置 /////////////////////////////////////////////////////

    @property({ type: LangNodeCfg })
    _defaultCfg = new LangNodeCfg();

    @property({ displayName: CC_DEV && '默认配置', type: LangNodeCfg })
    get defaultCfg(): LangNodeCfg {
        this._defaultCfg.init(false);
        return this._defaultCfg;
    }

    set defaultCfg(value: LangNodeCfg) {
        this._defaultCfg.init(false);
        this._defaultCfg = value;
        this.init();
    }

    // ///////////////////////////////////////////////////// 语言差异配置 /////////////////////////////////////////////////////

    /** 语言差异配置 */
    @property({ type: [LangNodeCfg] })
    _customCfg: LangNodeCfg[] = [];

    @property({ displayName: CC_DEV && '差异配置', type: [LangNodeCfg] })
    get customCfg(): LangNodeCfg[] {
        return this._customCfg;
    }

    set customCfg(value: LangNodeCfg[]) {
        if (this.hasDuplicateLang(value) == true) {
            CC_DEV && cc.warn('差异配置存在重复语言, 请检查差异配置！！！');
        }
        this._customCfg = value;
        this.init();
    }

    // ///////////////////////////////////////////////////// 脚本生命周期 /////////////////////////////////////////////////////

    protected onLoad() {
        this.init();
    }

    onFocusInEditor() {
        this.init();
    }

    onLostFocusInEditor() {
        this.init();
    }

    protected init(): void {
        if (CC_EDITOR) {
            this._update_view();
        } else {
            this._language = language_type_enum[c2f.language.current];
            this._update_view();
        }
    }

    private _update_view() {
        switch (this.mixType) {
            case LangDiffType.NONE:
                break;
            case LangDiffType.ACTIVE:
                this.onActive();
                break;
            case LangDiffType.COLOR:
                this.onColor();
                break;
            case LangDiffType.SIZE:
                this.onSize();
                break;
            case LangDiffType.POSITION:
                this.onPosition();
                break;
            case LangDiffType.SIZE_POSITION:
                this.onSize();
                this.onPosition();
                break;
            case LangDiffType.SIZE_POSITION_COLOR:
                this.onSize();
                this.onPosition();
                this.onColor();
                break;
            case LangDiffType.ALL:
                this.onActive();
                this.onColor();
                this.onSize();
                this.onPosition();
                break;
            default:
                break;
        }
    }

    private onActive() {
        for (const item of this.customCfg) {
            if (item.lang == this._language) {
                this.node.active = item.active;
                return;
            } else {
                this.node.active = this._defaultCfg.active;
            }
        }
    }

    private onColor() {
        for (const item of this.customCfg) {
            if (item.lang == this._language) {
                this.node.color = item.color;
                return;
            } else {
                this.node.color = this._defaultCfg.color;
            }
        }
    }

    private onSize() {
        for (const item of this.customCfg) {
            if (item.lang == this._language) {
                this.node.setContentSize(item.size);
                return;
            } else {
                this.node.setContentSize(this._defaultCfg.size);
            }
        }
    }

    private onPosition() {
        for (const item of this.customCfg) {
            if (item.lang == this._language) {
                this.node.position = item.position;
                return;
            } else {
                this.node.position = this._defaultCfg.position;
            }
        }
    }

    /** 对象字段排重 key in lang */
    private hasDuplicateLang(arr: LangNodeCfg[]) {
        const langSet = new Set<string>();
        for (const item of arr) {
            if (langSet.has(item.lang + '')) {
                langSet.clear();
                return true;
            }
            langSet.add(item.lang + '');
        }
        langSet.clear();
        return false;
    }
}
