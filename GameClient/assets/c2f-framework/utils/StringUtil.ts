/** 字符串工具 */
class StringUtil {
    /** 获取一个唯一标识的字符串 */
    static guid() {
        let guid: string = "";
        for (let i = 1; i <= 32; i++) {
            let n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
    }

    /**
     * 转美式计数字符串
     * @param value 数字
     * @example
     * 123456789 = 123,456,789
     */
    static numberTotPermil(value: number): string {
        return value.toLocaleString();
    }

    /** 
     * 转英文单位计数
     * @param value 数字
     * @param fixed 保留小数位数
     * @example
     * 12345 = 12.35K
     */
    static numberToThousand(value: number, fixed: number = 2): string {
        var k = 1000;
        var sizes = ['', 'K', 'M', 'G'];
        if (value < k) {
            return value.toString();
        }
        else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            var r = ((value / Math.pow(k, i)));
            return r.toFixed(fixed) + sizes[i];
        }
    }

    /** 
     * 转中文单位计数
     * @param value 数字
     * @param fixed 保留小数位数
     * @example
     * 12345 = 1.23万
     */
    static numberToTenThousand(value: number, fixed: number = 2): string {
        var k = 10000;
        var sizes = ['', '万', '亿', '万亿'];
        if (value < k) {
            return value.toString();
        }
        else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            return ((value / Math.pow(k, i))).toFixed(fixed) + sizes[i];
        }
    }

    /**
     * "," 分割字符串成数组
     * @param str 字符串
     */
    static stringToArray1(str: string) {
        if (str == "") {
            return [];
        }
        return str.split(",");
    }

    /** 
     * "|" 分割字符串成数组 
     * @param str 字符串
     */
    static stringToArray2(str: string) {
        if (str == "") {
            return [];
        }
        return str.split("|");
    }

    /** 
     * ":" 分割字符串成数组
     * @param str 字符串
     */
    static stringToArray3(str: string) {
        if (str == "") {
            return [];
        }
        return str.split(":");
    }

    /** 
     * ";" 分割字符串成数组 
     * @param str 字符串
     */
    static stringToArray4(str: string) {
        if (str == "") {
            return [];
        }
        return str.split(";");
    }

    /**
     * 字符串截取
     * @param str     字符串
     * @param n       截取长度
     * @param showdot 是否把截取的部分用省略号代替
     */
    static sub(str: string, n: number, showdot: boolean = false) {
        var r = /[^\x00-\xff]/g;
        if (str.replace(r, "mm").length <= n) { return str; }
        var m = Math.floor(n / 2);
        for (var i = m; i < str.length; i++) {
            if (str.substring(0, i).replace(r, "mm").length >= n) {
                if (showdot) {
                    return str.substring(0, i) + "...";
                } else {
                    return str.substring(0, i);
                }
            }
        }
        return str;
    }

    /**
     * 计算字符串长度，中文算两个字节
     * @param str 字符串
     */
    static stringLen(str: string) {
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    }

    /**
     * 字符串格式化：xx{0}yy{1}zz中的占位用后面的参数替换
     * @param str 字符串
     */
    static formatWords(str: string, params: string) {
        if (!params || params.length <= 0) {
            return str;
        }
        let fromUI = params == 'UIV_Null' ? true : false;
        let arrPa = this.stringToArray2(params);
        let result = str.replace(/\{(\w+)\}/g, function (s, i) {
            return fromUI ? "" : arrPa[i];
        });
        return result;
    }

    /**
         * 根据参数返回格式化字符串
         * @param text 源字符串
         * @param option 用于格式化源字符串的数据，可以是键值对，也可以按顺序传参
         * @example
         * // 可使用以下两种调用方式，返回结果都是"测试字符串111--abc..."
         * c2f.utils.date.formatWithObj("测试字符串%{a1}--%{a2}...", {a1: 111, a2: "abc"});
         * c2f.utils.date.formatWithObj("测试字符串%{a1}--%{a2}...", 111, "abc");
         */
    static formatWithObj(text: string, ...option: [Record<string, string | number>] | Array<string | number>): string {
        let result = text;
        if (option.length === 1 && Object.prototype.toString.call(option[0]) === "[object Object]") {
            // 参数为键值对
            for (let arg in (option[0] as Record<string, string | number>)) {
                if (option[0].hasOwnProperty(arg)) {
                    let reg = new RegExp(`%{${arg}}`, "g");
                    result = result.replace(reg, `${option[0][arg]}`);
                }
            }
        } else {
            // 参数为数组
            option.forEach((value: any) => {
                result = result.replace(/%\{.*?\}/, `${value}`);
            });
        }
        return result;
    }

    /** 首字母大写 */
    static uppercaseFirstLetter(text: string) {
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    }

    /** 首字母小写 */
    static lowercaseFirstLetter(text: string) {
        return text.substring(0, 1).toLowerCase() + text.substring(1);
    }

    /** 判断是否都是数字 */
    static isAllDigits(str: string): boolean {
        const regex = /^\d+$/;
        return regex.test(str);
    }

    /**
     * 字符串格式化
     * @param format 要格式化的字符串
     * @param args 参数
     * @example
     * //我叫美男子,性别男,今年20岁
     * stringFormat('我叫{0},性别{1},今年{2}岁', '美男子', '男', 20);
     * stringFormat('我叫{name},性别{sex},今年{age}岁', { name: '美男子', sex: '男', age: 20 });
     */
    public static stringFormat(format: string, ...args: any[]): string {
        if (typeof format != 'string') {
            console.log('Utility stringFormat format is invalid');
            return '';
        }

        if (args.length == 0) {
            return format;
        }

        let result = format;
        if (args.length == 1 && typeof args[0] == 'object') {
            let params: Object = args[0];
            for (let key in params) {
                let value = params[key];
                const reg = new RegExp(`\\{${key}\\}`, 'g');
                if (typeof value == 'string' || (typeof value == 'number' && !isNaN(value))) {
                    result = result.replace(reg, value.toString());
                }
            }
        } else {
            for (let i = 0; i < args.length; i++) {
                let value = args[i];
                if (typeof value == 'string' || (typeof value == 'number' && !isNaN(value))) {
                    result = result.replace('{' + i + '}', value.toString());
                }
            }
        }

        return result;
    }

}

declare global {
    interface IUtil {
        str: typeof StringUtil;
    }
}
c2f.utils.str = StringUtil;
export { };