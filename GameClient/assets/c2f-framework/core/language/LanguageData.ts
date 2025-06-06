import { C2FConst } from '../../define/C2FConst';

export class LanguageData {
    /** 当前语言 */
    static current: string = C2FConst.LanguageKey.zh;
    /** 语言配置 */
    static data: Map<string, string> = new Map<string, string>();

    public static getLangByID(labId: string, params: string = ''): string {
        let value = LanguageData.data.get(labId) || 'WD_' + labId;
        let result = c2f.utils.str.formatWords(value, params);
        return result;
    }
}
