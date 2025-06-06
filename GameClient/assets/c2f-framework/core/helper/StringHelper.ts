declare global {
    interface ICore {
        StringHelper: typeof StringHelper;
    }
}

export class StringHelper {
    static getLongHashCode(str: string): number {
        const seed = 1313;
        let hash = 0;

        for (let i = 0; i < str.length; ++i) {
            const c: string = str[i];
            const high: number = (c.charCodeAt(0) >> 8) & 0xff;
            const low: number = c.charCodeAt(0) & 0xff;
            hash = hash * seed + high;
            hash = hash * seed + low;
        }

        return hash;
    }

    static mod(strText: string, mode: number) {
        return this.getLongHashCode(strText) % mode;
    }

    public static isNullOrEmpty(str: string | null | undefined): boolean {
        return str === null || str === undefined || str === '';
    }

    /**
     * 格式化字符串
     * @param template 模板字符串
     * @param args 参数列表
     * @returns 格式化后的字符串
     * ```ts
     * 1.{key}:
     * format('我叫{name},性别{sex},今年{age}岁', { name: '美男子', sex: '男', age: 20 });
     * 2.<%=key%>:
     * format("张三<%=name%> 年龄<%=age%>", {name: 'zhangsan', age: 20});
     * 3.%s/%d:
     * format("sounds/music/%s/%d", 'ab', 100);
     * 4.{index}:
     * format('我叫{0},性别{1},今年{2}岁', '美男子', '男', 20);
     * ```
     */
    public static format(template: string, ...args: any[]): string {
        // 处理参数是数组包裹的情况 (如 format(str, [arg1, arg2]))
        let params: any[] = args;
        if (params.length === 1 && Array.isArray(params[0])) {
            params = params[0];
        }

        // 判断是否为键值对对象模式
        const isKeyValueMode = params.length === 1 && typeof params[0] === 'object' && params[0] !== null && !Array.isArray(params[0]);

        // 键值对模式处理 {key} 和 <%=key%>
        if (isKeyValueMode) {
            const keyValue = params[0] as Record<string, any>;
            return template
                .replace(/\{(\w+)\}/g, (_, key) => {
                    return keyValue[key] ?? '';
                }) // 处理 {key}
                .replace(/<%=(\w+)%>/g, (_, key) => {
                    return keyValue[key] ?? '';
                }); // 处理 <%=key%>
        }

        // 顺序参数模式处理 %s/%d 和 {index}
        let currentIndex = 0;
        return template
            .replace(/%[sd]/g, () => {
                return String(params[currentIndex++] ?? '');
            }) // 处理 %s/%d（顺序替换）
            .replace(/\{(\d+)\}/g, (_, index) => {
                // 处理 {index}
                const idx = parseInt(index, 10);
                return idx < params.length ? params[idx] : '';
            });
    }

    /**
     * 首字母大写
     * @returns {string}
     */
    public static toUpFirst(str: string) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }

    /**
     * 首字母小写
     * @returns {string}
     */
    public static toLowFirst(str: string) {
        return str.substring(0, 1).toLowerCase() + str.substring(1);
    }

    /**
     * 下划线转驼峰
     */
    public static toHump(str: string) {
        return str.replace(/_(\w)/g, (all, letter) => {
            return letter.toUpperCase();
        });
    }

    /**
     * 驼峰转下划线
     */
    public static toLine(str: string) {
        return str.replace(/(A-Z)/g, '_$1').toLowerCase();
    }

    public static toNumber(str: string) {
        let nums = '';
        for (let i = 0; i < str.length; i++) {
            nums += str.charCodeAt(i).toString();
        }

        return Number(nums);
    }

    /**
     * 在指定位置插入字符串
     * @param source 原始字符串
     * @param start 要插入的位置
     * @param newStr 要插入的字符串
     */
    public static insertStr(source: string, start: number, newStr: string) {
        return source.slice(0, start) + newStr + source.slice(start);
    }

    /**
     * 移除指定位置的字符
     * @param source 原始字符串
     * @param index 要移除字符的位置
     * @returns 处理后的字符串
     */
    public static removeStr(source: string, index: number) {
        return source.substring(0, index) + source.substring(index + 1);
    }
}

c2f.core.StringHelper = StringHelper;
