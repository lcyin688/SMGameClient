"use strict";
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