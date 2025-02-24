"use strict";
cc._RF.push(module, 'ed226gLF85Oyr+WhA9TJZLX', 'StorageMgr');
// c2f-framework/core/storage/StorageMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Md5_1 = require("../../libs/md5/Md5");
/** 本地存储 */
var StorageMgr = /** @class */ (function () {
    function StorageMgr() {
        this._key = null;
        this._iv = null;
        this._id = "";
    }
    /**
     * 初始化密钥
     * @param key aes加密的key
     * @param iv  aes加密的iv
     */
    StorageMgr.prototype.init = function (key, iv) {
        this._key = Md5_1.md5(key);
        this._iv = Md5_1.md5(iv);
    };
    /**
     * 设置用户唯一标识
     * @param id
     */
    StorageMgr.prototype.setUser = function (id) {
        this._id = id;
    };
    /**
     * 存储本地数据
     * @param key 存储key
     * @param value 存储值
     * @returns
     */
    StorageMgr.prototype.set = function (key, value) {
        key = key + "_" + this._id;
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        if (!CC_PREVIEW) {
            key = Md5_1.md5(key);
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
                console.error("\u89E3\u6790\u5931\u8D25\uFF0Cstr = " + value);
                return;
            }
        }
        else if (typeof value === 'number') {
            value = value + "";
        }
        else if (typeof value === 'boolean') {
            value = value ? '1' : '0';
        }
        if (!CC_PREVIEW && null != this._key && null != this._iv) {
            value = c2f.utils.encrypt.aesEncrypt("" + value, this._key, this._iv);
        }
        cc.sys.localStorage.setItem(key, value);
    };
    /**
     * 获取指定关键字的数据
     * @param key          获取的关键字
     * @param defaultValue 获取的默认值
     * @returns
     */
    StorageMgr.prototype.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if (null == key) {
            console.error("存储的key不能为空");
            return null;
        }
        key = key + "_" + this._id;
        if (!CC_PREVIEW) {
            key = Md5_1.md5(key);
        }
        var str = cc.sys.localStorage.getItem(key);
        if (null != str && '' !== str && !CC_PREVIEW && null != this._key && null != this._iv) {
            str = c2f.utils.encrypt.aesDecrypt(str, this._key, this._iv);
        }
        if (null === str) {
            return defaultValue;
        }
        return str;
    };
    /** 获取指定关键字的数值 */
    StorageMgr.prototype.getNumber = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        var r = cc.sys.localStorage.getItem(key);
        return Number(r) || defaultValue;
    };
    StorageMgr.prototype.setNumber = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    /** 获取指定关键字的布尔值 */
    StorageMgr.prototype.getBoolean = function (key) {
        var r = this.get(key);
        return (!r || r == '0' || r == '') ? false : true;
    };
    /** 获取指定关键字的JSON对象 */
    StorageMgr.prototype.getJson = function (key, defaultValue) {
        var r = this.get(key);
        return (r && JSON.parse(r)) || defaultValue;
    };
    /**
     * 删除指定关键字的数据
     * @param key 需要移除的关键字
     * @returns
     */
    StorageMgr.prototype.remove = function (key) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }
        key = key + "_" + this._id;
        if (!CC_PREVIEW) {
            Md5_1.md5(key);
        }
        cc.sys.localStorage.removeItem(key);
    };
    /** 清空整个本地存储 */
    StorageMgr.prototype.clear = function () {
        cc.sys.localStorage.clear();
    };
    /** 获得配置原始文本 */
    StorageMgr.prototype.setPlainItem = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    /** 获得配置原始文本 */
    StorageMgr.prototype.getPlainItem = function (key, defaultValue) {
        var value = cc.sys.localStorage.getItem(key);
        if (value != null) {
            return value;
        }
        return defaultValue;
    };
    /** 获得原始boolean */
    StorageMgr.prototype.getPlainBool = function (key, defaultValue) {
        var value = cc.sys.localStorage.getItem(key);
        if (value != null) {
            return parseInt(value) == 1;
        }
        return defaultValue;
    };
    StorageMgr.getInstance = function () {
        if (!this._instance) {
            this._instance = new StorageMgr();
        }
        return this._instance;
    };
    /** 静态成员 */
    StorageMgr._instance = null;
    return StorageMgr;
}());
c2f.storage = StorageMgr.getInstance();

cc._RF.pop();