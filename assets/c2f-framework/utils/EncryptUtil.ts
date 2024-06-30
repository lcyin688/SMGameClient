class EncryptUtil {

    /** */
    static utf8Parse(utf8Str: string): string {
        return CryptoJS.enc.Utf8.parse(utf8Str);
    }

    /**
     * AES 加密
     * @param msg 加密信息
     * @param key aes加密的key 
     * @param iv  aes加密的iv
     */
    static aesEncrypt(msg: string, key: string, iv: string): string {
        let realKey = this.utf8Parse(key);
        let realIv = this.utf8Parse(iv);
        let encrypt = CryptoJS.AES.encrypt(
            msg,
            realKey,
            {
                iv: realIv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypt.toString();
    }

    /**
     * AES 解密
     * @param str 解密字符串
     * @param key aes加密的key 
     * @param iv  aes加密的iv
     */
    static aesDecrypt(str: string, key: string = null, iv: string = null): string {
        let realKey = this.utf8Parse(key);
        let realIv = this.utf8Parse(iv);
        let decrypt = CryptoJS.AES.decrypt(
            str,
            realKey,
            {
                iv: realIv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return CryptoJS.enc.Utf8.stringify(decrypt);
    }
}

declare global {
    interface IUtil {
        encrypt: typeof EncryptUtil;
    }
}
c2f.utils.encrypt = EncryptUtil;
export { };