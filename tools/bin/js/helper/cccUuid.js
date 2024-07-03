//{ copy from engine:
var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var HexChars = '0123456789abcdef'.split('');
let HexMap = {}
{
    for (let i = 0; i < HexChars.length; i++) {
        let char = HexChars[i]
        HexMap[char] = i
    }
}

var BASE64_VALUES = new Array(123); // max char code in base64Keys
for (let i = 0; i < 123; ++i) BASE64_VALUES[i] = 64; // fill with placeholder('=') index
for (let i = 0; i < 64; ++i) BASE64_VALUES[BASE64_KEYS.charCodeAt(i)] = i;
var _t = ['', '', '', ''];
var UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
var Indices = UuidTemplate.map(function (x, i) { return x === '-' ? NaN : i; }).filter(isFinite);
//}

var cccUuid = {
    /** 压缩uuid */
    encodeUuid: function (uuid) {
        if (uuid.length !== 36) {
            return uuid;
        }
        let zipUuid = []
        zipUuid[0] = uuid[0];
        zipUuid[1] = uuid[1];
        let cleanUuid = uuid.replace('-', '').replace('-', '').replace('-', '').replace('-', '')

        for (let i = 2, j = 2; i < 32; i += 3) {
            const left = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i))];
            const mid = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i + 1))];
            const right = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i + 2))];
            zipUuid[j++] = BASE64_KEYS[(left << 2) + (mid >> 2)]
            zipUuid[j++] = BASE64_KEYS[((mid & 3) << 4) + right]
        }

        return zipUuid.join('');
    },

    /** 解压uuid */
    decodeUuid: function (uuid) {
        if (uuid.length !== 22) {
            return uuid;
        }
        UuidTemplate[0] = uuid[0];
        UuidTemplate[1] = uuid[1];
        for (var i = 2, j = 2; i < 22; i += 2) {
            var lhs = BASE64_VALUES[uuid.charCodeAt(i)];
            var rhs = BASE64_VALUES[uuid.charCodeAt(i + 1)];
            UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
            UuidTemplate[Indices[j++]] = HexChars[((lhs & 3) << 2) | rhs >> 4];
            UuidTemplate[Indices[j++]] = HexChars[rhs & 0xF];
        }
        return UuidTemplate.join('');
    }
}

module.exports = cccUuid;