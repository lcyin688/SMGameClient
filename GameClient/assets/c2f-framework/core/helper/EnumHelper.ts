declare global {
    interface ICore {
        EnumHelper: typeof EnumHelper;
    }
}

const tmpValueDesc = {
    value: undefined,
    enumerable: false,
    writable: false,
    configurable: true,
};

export class EnumHelper {
    /** 通过Key获取枚举值 */
    public static getValueFromKey<T>(enumObject: T, key: keyof T): T[keyof T] | undefined {
        return enumObject[key];
    }

    /** 通过值获取枚举Key */
    public static getKeyFromValue<T>(enumObject: T, value: T[keyof T]): keyof T | undefined {
        const keys = Object.keys(enumObject) as Array<keyof T>;
        for (const key of keys) {
            if (enumObject[key] === value) {
                return key;
            }
        }
        return undefined;
    }

    /** 获取所有值 */
    public static getEnumValues<T>(enumObject: T): Array<T[keyof T]> {
        const enumKeys = Object.keys(enumObject).filter((key) => isNaN(Number(key)));
        const enumValues = enumKeys.map((key) => enumObject[key]);
        return Array.from(new Set(enumValues));
    }

    /** 获取所有Key */
    public static getEnumKeys<T>(enumObject: T): Array<keyof T> {
        return Object.keys(enumObject).filter((key) => isNaN(Number(key))) as Array<keyof T>;
    }

    /**
     * 字符串值类型枚举转数字值类型枚举
     * @param enumObject 枚举对象
     * @returns
     */
    public static convertStringEnumToNumberEnum<T>(enumObject: T, keys?: string[]) {
        const result: any = {};
        keys ??= this.getEnumKeys(enumObject) as string[];
        for (let i = 0; i < keys.length; i++) {
            result[keys[i]] = i;
            result[i] = keys[i];
        }

        this.setObjectValue(result, '__enums__', null, true, undefined);

        return result;
    }

    public static setObjectValue(obj, prop, value, writable, enumerable) {
        tmpValueDesc.value = value;
        tmpValueDesc.writable = writable;
        tmpValueDesc.enumerable = enumerable;
        Object.defineProperty(obj, prop, tmpValueDesc);
        tmpValueDesc.value = undefined;
    }
}

c2f.core.EnumHelper = EnumHelper;
