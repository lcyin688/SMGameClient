/**
 * RC4 stream cipher algorithm.
 */
export class RC4 {
    _i: number;
    _j: number;
    _S: number[];

    constructor(key: number[]) {
        this._i = 0;
        this._j = 0;
        this._S = [];
        this.initKey(key);
    }

    private initKey(key: number[]) {
        let S = this._S;
        for (let i = 0; i < 256; i++) {
            S[i] = i;
        }

        let keyLen = key.length;
        for (let i = 0, j = 0; i < 256; i++) {
            j = (j + S[i] + key[i % keyLen]) % 256;

            // Swap
            let tmp = S[i];
            S[i] = S[j];
            S[j] = tmp;
        }
    }

    public encrypt(buf) {
        for (let i = 0, length = buf.length; i < length; i++) {
            buf[i] ^= this.prga();
        }
    }

    public decrypt(buf) {
        for (let i = 0, length = buf.length; i < length; i++) {
            buf[i] ^= this.prga();
        }
    }

    public prga() {
        let S = this._S;
        let i = (this._i + 1) % 256;
        let j = (this._j + S[i]) % 256;

        let temp = S[i];
        S[i] = S[j];
        S[j] = temp;

        this._i = i;
        this._j = j;

        return S[(S[i] + S[j]) % 256];
    };
}