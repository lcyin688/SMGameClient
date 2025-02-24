
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/storage/StorageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvc3RvcmFnZS9TdG9yYWdlTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXlDO0FBRXpDLFdBQVc7QUFDWDtJQUFBO1FBQ1ksU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDM0IsUUFBRyxHQUFrQixJQUFJLENBQUM7UUFDMUIsUUFBRyxHQUFXLEVBQUUsQ0FBQztJQXlLN0IsQ0FBQztJQXZLRzs7OztPQUlHO0lBQ0kseUJBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxFQUFVO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBTyxHQUFkLFVBQWUsRUFBVTtRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3QkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLEtBQVU7UUFDOUIsR0FBRyxHQUFNLEdBQUcsU0FBSSxJQUFJLENBQUMsR0FBSyxDQUFDO1FBRTNCLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNiLEdBQUcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUs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Q0FBWSxHQUFuQixVQUFvQixHQUFXLEVBQUUsWUFBaUI7UUFDOUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVELGtCQUFrQjtJQUNYLGlDQUFZLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxZQUFxQjtRQUNsRCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUlhLHNCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFQRCxXQUFXO0lBQ0ksb0JBQVMsR0FBZSxJQUFJLENBQUE7SUFPL0MsaUJBQUM7Q0E1S0QsQUE0S0MsSUFBQTtBQU9ELEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWQ1IH0gZnJvbSBcIi4uLy4uL2xpYnMvbWQ1L01kNVwiO1xuXG4vKiog5pys5Zyw5a2Y5YKoICovXG5jbGFzcyBTdG9yYWdlTWdyIHtcbiAgICBwcml2YXRlIF9rZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgX2l2OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nID0gXCJcIjtcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWvhumSpVxuICAgICAqIEBwYXJhbSBrZXkgYWVz5Yqg5a+G55qEa2V5IFxuICAgICAqIEBwYXJhbSBpdiAgYWVz5Yqg5a+G55qEaXZcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChrZXk6IHN0cmluZywgaXY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9rZXkgPSBtZDUoa2V5KTtcbiAgICAgICAgdGhpcy5faXYgPSBtZDUoaXYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueUqOaIt+WUr+S4gOagh+ivhlxuICAgICAqIEBwYXJhbSBpZCBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0VXNlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2Y5YKo5pys5Zyw5pWw5o2uXG4gICAgICogQHBhcmFtIGtleSDlrZjlgqhrZXlcbiAgICAgKiBAcGFyYW0gdmFsdWUg5a2Y5YKo5YC8XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICBrZXkgPSBgJHtrZXl9XyR7dGhpcy5faWR9YDtcblxuICAgICAgICBpZiAobnVsbCA9PSBrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlrZjlgqjnmoRrZXnkuI3og73kuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDQ19QUkVWSUVXKSB7XG4gICAgICAgICAgICBrZXkgPSBtZDUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVsbCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5a2Y5YKo55qE5YC85Li656m677yM5YiZ55u05o6l56e76Zmk6K+l5a2Y5YKoXCIpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YKo5a2Y55qE5YC85LiN6IO95Li65pa55rOVXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGDop6PmnpDlpLHotKXvvIxzdHIgPSAke3ZhbHVlfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICsgXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/ICcxJyA6ICcwJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNDX1BSRVZJRVcgJiYgbnVsbCAhPSB0aGlzLl9rZXkgJiYgbnVsbCAhPSB0aGlzLl9pdikge1xuICAgICAgICAgICAgdmFsdWUgPSBjMmYudXRpbHMuZW5jcnlwdC5hZXNFbmNyeXB0KGAke3ZhbHVlfWAsIHRoaXMuX2tleSwgdGhpcy5faXYpO1xuICAgICAgICB9XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmjIflrprlhbPplK7lrZfnmoTmlbDmja5cbiAgICAgKiBAcGFyYW0ga2V5ICAgICAgICAgIOiOt+WPlueahOWFs+mUruWtl1xuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6I635Y+W55qE6buY6K6k5YC8XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG51bGwgPT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5a2Y5YKo55qEa2V55LiN6IO95Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGwhO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0gYCR7a2V5fV8ke3RoaXMuX2lkfWA7XG5cbiAgICAgICAgaWYgKCFDQ19QUkVWSUVXKSB7XG4gICAgICAgICAgICBrZXkgPSBtZDUoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHI6IHN0cmluZyB8IG51bGwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKG51bGwgIT0gc3RyICYmICcnICE9PSBzdHIgJiYgIUNDX1BSRVZJRVcgJiYgbnVsbCAhPSB0aGlzLl9rZXkgJiYgbnVsbCAhPSB0aGlzLl9pdikge1xuICAgICAgICAgICAgc3RyID0gYzJmLnV0aWxzLmVuY3J5cHQuYWVzRGVjcnlwdChzdHIsIHRoaXMuX2tleSwgdGhpcy5faXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG51bGwgPT09IHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8qKiDojrflj5bmjIflrprlhbPplK7lrZfnmoTmlbDlgLwgKi9cbiAgICBwdWJsaWMgZ2V0TnVtYmVyKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB2YXIgciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgICAgIHJldHVybiBOdW1iZXIocikgfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0TnVtYmVyKGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLyoqIOiOt+WPluaMh+WumuWFs+mUruWtl+eahOW4g+WwlOWAvCAqL1xuICAgIHB1YmxpYyBnZXRCb29sZWFuKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuICghciB8fCByID09ICcwJyB8fCByID09ICcnKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5oyH5a6a5YWz6ZSu5a2X55qESlNPTuWvueixoSAqL1xuICAgIHB1YmxpYyBnZXRKc29uKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICAgICAgICB2YXIgciA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiAociAmJiBKU09OLnBhcnNlKHIpKSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5oyH5a6a5YWz6ZSu5a2X55qE5pWw5o2uXG4gICAgICogQHBhcmFtIGtleSDpnIDopoHnp7vpmaTnmoTlhbPplK7lrZdcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChudWxsID09IGtleSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWtmOWCqOeahGtleeS4jeiDveS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGAke2tleX1fJHt0aGlzLl9pZH1gO1xuXG4gICAgICAgIGlmICghQ0NfUFJFVklFVykge1xuICAgICAgICAgICAgbWQ1KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqIOa4heepuuaVtOS4quacrOWcsOWtmOWCqCAqL1xuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuXG4gICAgLyoqIOiOt+W+l+mFjee9ruWOn+Wni+aWh+acrCAqL1xuICAgIHB1YmxpYyBzZXRQbGFpbkl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiDojrflvpfphY3nva7ljp/lp4vmlofmnKwgKi9cbiAgICBwdWJsaWMgZ2V0UGxhaW5JdGVtKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+WOn+Wni2Jvb2xlYW4gKi9cbiAgICBwdWJsaWMgZ2V0UGxhaW5Cb29sKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSkgPT0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIC8qKiDpnZnmgIHmiJDlkZggKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFN0b3JhZ2VNZ3IgPSBudWxsXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTdG9yYWdlTWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3RvcmFnZU1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIHN0b3JhZ2U6IFN0b3JhZ2VNZ3I7XG4gICAgfVxufVxuYzJmLnN0b3JhZ2UgPSBTdG9yYWdlTWdyLmdldEluc3RhbmNlKCk7XG5leHBvcnQgeyB9OyJdfQ==