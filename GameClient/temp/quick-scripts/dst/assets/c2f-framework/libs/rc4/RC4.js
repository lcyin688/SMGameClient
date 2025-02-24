
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/libs/rc4/RC4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2xpYnMvcmM0L1JDNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNIO0lBS0ksYUFBWSxHQUFhO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFCQUFPLEdBQWYsVUFBZ0IsR0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBRUQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRXZDLE9BQU87WUFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFHO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFHO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVNLGtCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUvQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUFBLENBQUM7SUFDTixVQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSxrQkFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUkM0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgUkM0IHtcbiAgICBfaTogbnVtYmVyO1xuICAgIF9qOiBudW1iZXI7XG4gICAgX1M6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9pID0gMDtcbiAgICAgICAgdGhpcy5faiA9IDA7XG4gICAgICAgIHRoaXMuX1MgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0S2V5KGtleSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5KGtleTogbnVtYmVyW10pIHtcbiAgICAgICAgbGV0IFMgPSB0aGlzLl9TO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgICAgICAgICBTW2ldID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlMZW4gPSBrZXkubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgICAgICAgaiA9IChqICsgU1tpXSArIGtleVtpICUga2V5TGVuXSkgJSAyNTY7XG5cbiAgICAgICAgICAgIC8vIFN3YXBcbiAgICAgICAgICAgIGxldCB0bXAgPSBTW2ldO1xuICAgICAgICAgICAgU1tpXSA9IFNbal07XG4gICAgICAgICAgICBTW2pdID0gdG1wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuY3J5cHQoYnVmKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBidWYubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJ1ZltpXSBePSB0aGlzLnByZ2EoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWNyeXB0KGJ1Zikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gYnVmLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBidWZbaV0gXj0gdGhpcy5wcmdhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcHJnYSgpIHtcbiAgICAgICAgbGV0IFMgPSB0aGlzLl9TO1xuICAgICAgICBsZXQgaSA9ICh0aGlzLl9pICsgMSkgJSAyNTY7XG4gICAgICAgIGxldCBqID0gKHRoaXMuX2ogKyBTW2ldKSAlIDI1NjtcblxuICAgICAgICBsZXQgdGVtcCA9IFNbaV07XG4gICAgICAgIFNbaV0gPSBTW2pdO1xuICAgICAgICBTW2pdID0gdGVtcDtcblxuICAgICAgICB0aGlzLl9pID0gaTtcbiAgICAgICAgdGhpcy5faiA9IGo7XG5cbiAgICAgICAgcmV0dXJuIFNbKFNbaV0gKyBTW2pdKSAlIDI1Nl07XG4gICAgfTtcbn0iXX0=