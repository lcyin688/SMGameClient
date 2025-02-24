
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/EncryptUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6164cBONlIwZy24msao4eJ', 'EncryptUtil');
// c2f-framework/utils/EncryptUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncryptUtil = /** @class */ (function () {
    function EncryptUtil() {
    }
    /** */
    EncryptUtil.utf8Parse = function (utf8Str) {
        return CryptoJS.enc.Utf8.parse(utf8Str);
    };
    /**
     * AES 加密
     * @param msg 加密信息
     * @param key aes加密的key
     * @param iv  aes加密的iv
     */
    EncryptUtil.aesEncrypt = function (msg, key, iv) {
        var realKey = this.utf8Parse(key);
        var realIv = this.utf8Parse(iv);
        var encrypt = CryptoJS.AES.encrypt(msg, realKey, {
            iv: realIv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypt.toString();
    };
    /**
     * AES 解密
     * @param str 解密字符串
     * @param key aes加密的key
     * @param iv  aes加密的iv
     */
    EncryptUtil.aesDecrypt = function (str, key, iv) {
        if (key === void 0) { key = null; }
        if (iv === void 0) { iv = null; }
        var realKey = this.utf8Parse(key);
        var realIv = this.utf8Parse(iv);
        var decrypt = CryptoJS.AES.decrypt(str, realKey, {
            iv: realIv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt);
    };
    return EncryptUtil;
}());
c2f.utils.encrypt = EncryptUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0VuY3J5cHRVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQThDQSxDQUFDO0lBNUNHLE1BQU07SUFDQyxxQkFBUyxHQUFoQixVQUFpQixPQUFlO1FBQzVCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHNCQUFVLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxHQUFXLEVBQUUsRUFBVTtRQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLEdBQUcsRUFDSCxPQUFPLEVBQ1A7WUFDSSxFQUFFLEVBQUUsTUFBTTtZQUNWLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSztTQUM5QixDQUFDLENBQUM7UUFDUCxPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxzQkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBa0IsRUFBRSxFQUFpQjtRQUFyQyxvQkFBQSxFQUFBLFVBQWtCO1FBQUUsbUJBQUEsRUFBQSxTQUFpQjtRQUNoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLEdBQUcsRUFDSCxPQUFPLEVBQ1A7WUFDSSxFQUFFLEVBQUUsTUFBTTtZQUNWLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSztTQUM5QixDQUFDLENBQUM7UUFDUCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBT0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW5jcnlwdFV0aWwge1xuXG4gICAgLyoqICovXG4gICAgc3RhdGljIHV0ZjhQYXJzZSh1dGY4U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQUVTIOWKoOWvhlxuICAgICAqIEBwYXJhbSBtc2cg5Yqg5a+G5L+h5oGvXG4gICAgICogQHBhcmFtIGtleSBhZXPliqDlr4bnmoRrZXkgXG4gICAgICogQHBhcmFtIGl2ICBhZXPliqDlr4bnmoRpdlxuICAgICAqL1xuICAgIHN0YXRpYyBhZXNFbmNyeXB0KG1zZzogc3RyaW5nLCBrZXk6IHN0cmluZywgaXY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWFsS2V5ID0gdGhpcy51dGY4UGFyc2Uoa2V5KTtcbiAgICAgICAgbGV0IHJlYWxJdiA9IHRoaXMudXRmOFBhcnNlKGl2KTtcbiAgICAgICAgbGV0IGVuY3J5cHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcbiAgICAgICAgICAgIG1zZyxcbiAgICAgICAgICAgIHJlYWxLZXksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXY6IHJlYWxJdixcbiAgICAgICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW5jcnlwdC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFFUyDop6Plr4ZcbiAgICAgKiBAcGFyYW0gc3RyIOino+WvhuWtl+espuS4slxuICAgICAqIEBwYXJhbSBrZXkgYWVz5Yqg5a+G55qEa2V5IFxuICAgICAqIEBwYXJhbSBpdiAgYWVz5Yqg5a+G55qEaXZcbiAgICAgKi9cbiAgICBzdGF0aWMgYWVzRGVjcnlwdChzdHI6IHN0cmluZywga2V5OiBzdHJpbmcgPSBudWxsLCBpdjogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZWFsS2V5ID0gdGhpcy51dGY4UGFyc2Uoa2V5KTtcbiAgICAgICAgbGV0IHJlYWxJdiA9IHRoaXMudXRmOFBhcnNlKGl2KTtcbiAgICAgICAgbGV0IGRlY3J5cHQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChcbiAgICAgICAgICAgIHN0cixcbiAgICAgICAgICAgIHJlYWxLZXksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXY6IHJlYWxJdixcbiAgICAgICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KGRlY3J5cHQpO1xuICAgIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVXRpbCB7XG4gICAgICAgIGVuY3J5cHQ6IHR5cGVvZiBFbmNyeXB0VXRpbDtcbiAgICB9XG59XG5jMmYudXRpbHMuZW5jcnlwdCA9IEVuY3J5cHRVdGlsO1xuZXhwb3J0IHsgfTsiXX0=