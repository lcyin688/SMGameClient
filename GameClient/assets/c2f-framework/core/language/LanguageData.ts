import { C2FConst } from '../../define/C2FConst';
import { words } from '../../game/words';

export class LanguageData {
    /** 当前语言 */
    static current: string = C2FConst.LanguageKey.zh;
    /** 语言配置 */
    static data: any = words;

    public static getLangByID(labId: number, params: string = ''): string {
        let value = LanguageData.data[labId] || 'WD_' + labId;
        let result = c2f.utils.str.formatWords(value, params);
        return result;
    }
}
