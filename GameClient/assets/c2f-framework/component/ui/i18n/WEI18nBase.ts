import { LanguageData } from '../../../core/language/LanguageData';

const { ccclass, property } = cc._decorator;

/**
 * 多语言组件基类
 */
@ccclass
export abstract class WEI18nBase<T> extends cc.Component {
    protected curLang: string;

    /** 语言切换 */
    private onLangChanged(lang: string) {
        try {
            if (this.curLang === lang) {
                return;
            }
            this.curLang = lang;
            this.flushChanged();
        } catch (err) {
            cc.warn(`WEI18nBase onLangChanged, err:${JSON.stringify(err.message || err)}`);
        }
    }

    protected onLoad() {
        this.curLang = LanguageData.current;
        this.node.on('LangChanged', this.onLangChanged, this);
    }

    protected onDestroy() {
        this.node.off('LangChanged', this.onLangChanged, this);
    }

    /**
     * 语言更改回调（子类重写该函数以具体实现）
     */
    protected flushChanged() {
        this.setRes();
    }

    /**
     * 获取当前语言资源
     */
    protected abstract getRes();

    /**
     * 设置当前语言资源
     */
    protected abstract setRes();
}
