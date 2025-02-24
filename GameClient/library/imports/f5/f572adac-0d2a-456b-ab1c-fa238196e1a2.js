"use strict";
cc._RF.push(module, 'f572a2sDSpFa6sc+iOBluGi', 'RC4');
// c2f-framework/libs/rc4/RC4.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RC4 = void 0;
/**
 * RC4 stream cipher algorithm.
 */
var RC4 = /** @class */ (function () {
    function RC4(key) {
        this._i = 0;
        this._j = 0;
        this._S = [];
        this.initKey(key);
    }
    RC4.prototype.initKey = function (key) {
        var S = this._S;
        for (var i = 0; i < 256; i++) {
            S[i] = i;
        }
        var keyLen = key.length;
        for (var i = 0, j = 0; i < 256; i++) {
            j = (j + S[i] + key[i % keyLen]) % 256;
            // Swap
            var tmp = S[i];
            S[i] = S[j];
            S[j] = tmp;
        }
    };
    RC4.prototype.encrypt = function (buf) {
        for (var i = 0, length = buf.length; i < length; i++) {
            buf[i] ^= this.prga();
        }
    };
    RC4.prototype.decrypt = function (buf) {
        for (var i = 0, length = buf.length; i < length; i++) {
            buf[i] ^= this.prga();
        }
    };
    RC4.prototype.prga = function () {
        var S = this._S;
        var i = (this._i + 1) % 256;
        var j = (this._j + S[i]) % 256;
        var temp = S[i];
        S[i] = S[j];
        S[j] = temp;
        this._i = i;
        this._j = j;
        return S[(S[i] + S[j]) % 256];
    };
    ;
    return RC4;
}());
exports.RC4 = RC4;

cc._RF.pop();