/** 正则工具 */
class RegexUtil {
    /**
     * 判断字符是否为双字节字符（如中文字符）
     * @param string 原字符串
     */
    static isDoubleWord(string: string): boolean {
        return /[^\x00-\xff]/.test(string);
    }
}


declare global {
    interface IUtil {
        regex: typeof RegexUtil;
    }
}
c2f.utils.regex = RegexUtil;
export { };
