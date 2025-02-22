import { md5 } from "../../libs/md5/Md5";

/** 本地存储 */
class StorageMgr {
    private _key: string | null = null;
    private _iv: string | null = null;
    private _id: string = "";

    /**
     * 初始化密钥
     * @param key aes加密的key 
     * @param iv  aes加密的iv
     */
    public init(key: string, iv: string) {
        this._key = md5(key);
        this._iv = md5(iv);
    }

    /**
     * 设置用户唯一标识
     * @param id 
     */
    public setUser(id: string) {
        this._id = id;
    }

    /**
     * 存储本地数据
     * @param key 存储key
     * @param value 存储值
     * @returns 
     */
    public set(key: string, value: any) {
        key = `${key}_${this._id}`;

        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        if (!CC_PREVIEW) {
            key = md5(key);
        }
        if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            this.remove(key);
            return;
        }
        if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
        }
        if (typeof value === 'object') {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
                console.error(`解析失败，str = ${value}`);
                return;
            }
        } else if (typeof value === 'number') {
            value = value + "";
        } else if (typeof value === 'boolean') {
            value = value ? '1' : '0';
        }
        if (!CC_PREVIEW && null != this._key && null != this._iv) {
            value = c2f.utils.encrypt.aesEncrypt(`${value}`, this._key, this._iv);
        }
        cc.sys.localStorage.setItem(key, value);
    }

    /**
     * 获取指定关键字的数据
     * @param key          获取的关键字
     * @param defaultValue 获取的默认值
     * @returns 
     */
    public get(key: string, defaultValue: any = ""): string {
        if (null == key) {
            console.error("存储的key不能为空");
            return null!;
        }

        key = `${key}_${this._id}`;

        if (!CC_PREVIEW) {
            key = md5(key);
        }

        let str: string | null = cc.sys.localStorage.getItem(key);
        if (null != str && '' !== str && !CC_PREVIEW && null != this._key && null != this._iv) {
            str = c2f.utils.encrypt.aesDecrypt(str, this._key, this._iv);
        }

        if (null === str) {
            return defaultValue;
        }
        return str;
    }

    /** 获取指定关键字的数值 */
    public getNumber(key: string, defaultValue: number = 0): number {
        var r = cc.sys.localStorage.getItem(key)
        return Number(r) || defaultValue;
    }
    public setNumber(key: string, value: number) {
        cc.sys.localStorage.setItem(key, value);
    }
    /** 获取指定关键字的布尔值 */
    public getBoolean(key: string): boolean {
        var r = this.get(key);
        return (!r || r == '0' || r == '') ? false : true;
    }

    /** 获取指定关键字的JSON对象 */
    public getJson(key: string, defaultValue?: any): any {
        var r = this.get(key);
        return (r && JSON.parse(r)) || defaultValue;
    }

    /**
     * 删除指定关键字的数据
     * @param key 需要移除的关键字
     * @returns 
     */
    public remove(key: string) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }

        key = `${key}_${this._id}`;

        if (!CC_PREVIEW) {
            md5(key);
        }
        cc.sys.localStorage.removeItem(key);
    }

    /** 清空整个本地存储 */
    public clear() {
        cc.sys.localStorage.clear();
    }


    /** 获得配置原始文本 */
    public setPlainItem(key: string, value: string) {
        cc.sys.localStorage.setItem(key, value);
    }

    /** 获得配置原始文本 */
    public getPlainItem(key: string, defaultValue: any) {
        const value = cc.sys.localStorage.getItem(key);
        if (value != null) {
            return value;
        }
        return defaultValue;
    }

    /** 获得原始boolean */
    public getPlainBool(key: string, defaultValue: boolean) {
        const value = cc.sys.localStorage.getItem(key);
        if (value != null) {
            return parseInt(value) == 1;
        }
        return defaultValue;
    }

    /** 静态成员 */
    private static _instance: StorageMgr = null
    public static getInstance(): StorageMgr {
        if (!this._instance) {
            this._instance = new StorageMgr();
        }
        return this._instance;
    }
}

declare global {
    interface IC2F {
        storage: StorageMgr;
    }
}
c2f.storage = StorageMgr.getInstance();
export { };