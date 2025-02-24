"use strict";
cc._RF.push(module, '7fc441tnbFGOZ81Gp+ekVps', 'EngineExtension');
// c2f-framework/core/engine/EngineExtension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//{ copy from engine:
var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var HexChars = '0123456789abcdef'.split('');
var HexMap = {};
{
    for (var i = 0; i < HexChars.length; i++) {
        var char = HexChars[i];
        HexMap[char] = i;
    }
}
var BASE64_VALUES = new Array(123); // max char code in base64Keys
for (var i = 0; i < 123; ++i)
    BASE64_VALUES[i] = 64; // fill with placeholder('=') index
for (var i = 0; i < 64; ++i)
    BASE64_VALUES[BASE64_KEYS.charCodeAt(i)] = i;
var _t = ['', '', '', ''];
var UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
var Indices = UuidTemplate.map(function (x, i) { return x === '-' ? NaN : i; }).filter(isFinite);
//}
var EngineExtension = /** @class */ (function () {
    function EngineExtension() {
    }
    /**
     * 替换预制体中多语言资源UUID替换
     */
    EngineExtension.prototype.replaceUuidForMulLG = function (tdInfo) {
        if (!c2f.language) {
            return;
        }
        if (c2f.language.languages.length <= 1) {
            return;
        }
        if (c2f.language.current == c2f.config.game.lanuageBase) {
            return;
        }
        if (!tdInfo || !tdInfo.uuidList) {
            return;
        }
        for (var i = 0; i < tdInfo.uuidList.length; i++) {
            var dstUuid = tdInfo.uuidList[i];
            if (CC_BUILD) {
                dstUuid = this.decodeUuid(dstUuid);
            }
            var newGuid = c2f.language.getLGResUuid(dstUuid);
            if (newGuid) {
                tdInfo.uuidList[i] = CC_BUILD ? this.encodeUuid(newGuid) : newGuid;
            }
        }
    };
    /** 压缩uuid */
    EngineExtension.prototype.encodeUuid = function (uuid) {
        if (uuid.length !== 36) {
            return uuid;
        }
        var zipUuid = [];
        zipUuid[0] = uuid[0];
        zipUuid[1] = uuid[1];
        var cleanUuid = uuid.replace('-', '').replace('-', '').replace('-', '').replace('-', '');
        for (var i = 2, j = 2; i < 32; i += 3) {
            var left = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i))];
            var mid = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i + 1))];
            var right = HexMap[String.fromCharCode(cleanUuid.charCodeAt(i + 2))];
            zipUuid[j++] = BASE64_KEYS[(left << 2) + (mid >> 2)];
            zipUuid[j++] = BASE64_KEYS[((mid & 3) << 4) + right];
        }
        return zipUuid.join('');
    };
    /** 解压uuid */
    EngineExtension.prototype.decodeUuid = function (uuid) {
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
    };
    EngineExtension.instance = new EngineExtension();
    return EngineExtension;
}());
c2f.engineExt = EngineExtension.instance;

cc._RF.pop();