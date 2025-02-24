import { LanguageData } from "../../core/language/LanguageData";
import { C2FEnum } from "../../define/C2FEnum";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('c2f/language/LanguageLabel')
export default class LanguageLabel extends cc.Component {

    @property({ serializable: true })
    private _dataID: string = "";
    @property({ type: cc.String, serializable: true })
    get dataID(): string {
        return this._dataID || "";
    }
    set dataID(value: string) {
        this._dataID = value;
        this.onDataIDChanged()
    }

    @property({ serializable: true })
    _formatV: string = "";
    @property({ type: cc.String, serializable: true })
    get formatV(): string {
        return this._formatV || "";
    }
    set formatV(value: string) {
        this._formatV = value;
        this.onDataIDChanged()
    }

    onLoad() {
        this.onDataIDChanged();
        cc.director.on(C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    }

    onDestroy() {
        cc.director.off(C2FEnum.ExtEvent.SwitchLanguage, this.onDataIDChanged, this);
    }

    private onDataIDChanged() {
        this.refreshFromWords();
    }

    public refreshFromWords() {
        if (!this._dataID) {
            return;
        }
        let text = ''
        let wordId = Number(this.dataID);

        let fmtV = this.formatV;
        if (fmtV.length <= 0) {
            fmtV = 'UIV_Null';
        }
        if (CC_EDITOR) {
            text = LanguageData.getLangByID(wordId, fmtV);
        } else {
            text = c2f.language.getLangByID(wordId, fmtV);
        }
        let spcomp: cc.Label | cc.RichText = this.getComponent(cc.Label);
        if (!spcomp) {
            spcomp = this.getComponent(cc.RichText);
            if (!spcomp) {
                cc.warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
                return;
            }
        }
        spcomp.string = text;
    }
}
