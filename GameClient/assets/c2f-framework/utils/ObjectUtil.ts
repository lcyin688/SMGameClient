/** 对象工具 */
class ObjectUtil {
    /**
     * 判断指定的值是否为对象
     * @param value 值
     */
    static isObject(value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Object]';
    }

    /**
     * 深拷贝
     * @param target 目标
     */
    static deepCopy(target: any): any {
        if (target == null || typeof target !== 'object') {
            return target;
        }

        let result: any = null;

        if (target instanceof Date) {
            result = new Date();
            result.setTime(target.getTime());
            return result;
        }

        if (target instanceof Array) {
            result = [];
            for (let i = 0, length = target.length; i < length; i++) {
                result[i] = this.deepCopy(target[i]);
            }
            return result;
        }

        if (target instanceof Object) {
            result = {};
            for (const key in target) {
                if (target.hasOwnProperty(key)) {
                    result[key] = this.deepCopy(target[key]);
                }
            }
            return result;
        }

        console.warn(`不支持的类型：${result}`);
    }



    /**
     * 防止json循环引用 深拷贝
     * @param target 目标
     */
    static deepCopyOne(target: any): object {
        function replacer(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.includes(value)) {
                    // If circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }
        target.self = target;
        let cache = [];
        return JSON.parse(JSON.stringify(target, replacer));
    }

    /**
     * 拷贝对象
     * @param target 目标
     */
    static copy(target: object): object {
        return JSON.parse(JSON.stringify(target));
    }

    /** 修改小写 */
    static modifyKeysLowercase(target: any): any {
        if (target == null || typeof target !== 'object') {
            return target;
        }
        if (target instanceof Array) {
            let retArr = [];
            for (let i = 0, length = target.length; i < length; i++) {
                retArr[i] = this.modifyKeysLowercase(target[i]);
            }
            return retArr;
        }
        if (target instanceof Object) {
            let retObj = {};
            for (const key in target) {
                if (target.hasOwnProperty(key)) {
                    let lcKey = c2f.utils.str.lowercaseFirstLetter(key);
                    retObj[lcKey] = this.modifyKeysLowercase(target[key]);
                }
            }
            return retObj;
        }
    }
}

declare global {
    interface IUtil {
        obj: typeof ObjectUtil;
    }
}
c2f.utils.obj = ObjectUtil;
export { };
