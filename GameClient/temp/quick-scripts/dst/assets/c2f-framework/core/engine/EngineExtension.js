
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/engine/EngineExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvZW5naW5lL0VuZ2luZUV4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQjtBQUNyQixJQUFJLFdBQVcsR0FBRyxtRUFBbUUsQ0FBQztBQUN0RixJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0FBQ2Y7SUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNuQjtDQUNKO0FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7QUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO0FBQ3hGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxF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Q0FBQyxDQUFDLENBQUM7WUFDaEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25FLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWxFZSx3QkFBUSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO0lBbUV0RSxzQkFBQztDQXBFRCxBQW9FQyxJQUFBO0FBUUQsR0FBRyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy97IGNvcHkgZnJvbSBlbmdpbmU6XG52YXIgQkFTRTY0X0tFWVMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xudmFyIEhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnLnNwbGl0KCcnKTtcbmxldCBIZXhNYXAgPSB7fVxue1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSGV4Q2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoYXIgPSBIZXhDaGFyc1tpXVxuICAgICAgICBIZXhNYXBbY2hhcl0gPSBpXG4gICAgfVxufVxuXG52YXIgQkFTRTY0X1ZBTFVFUyA9IG5ldyBBcnJheSgxMjMpOyAvLyBtYXggY2hhciBjb2RlIGluIGJhc2U2NEtleXNcbmZvciAobGV0IGkgPSAwOyBpIDwgMTIzOyArK2kpIEJBU0U2NF9WQUxVRVNbaV0gPSA2NDsgLy8gZmlsbCB3aXRoIHBsYWNlaG9sZGVyKCc9JykgaW5kZXhcbmZvciAobGV0IGkgPSAwOyBpIDwgNjQ7ICsraSkgQkFTRTY0X1ZBTFVFU1tCQVNFNjRfS0VZUy5jaGFyQ29kZUF0KGkpXSA9IGk7XG52YXIgX3QgPSBbJycsICcnLCAnJywgJyddO1xudmFyIFV1aWRUZW1wbGF0ZSA9IF90LmNvbmNhdChfdCwgJy0nLCBfdCwgJy0nLCBfdCwgJy0nLCBfdCwgJy0nLCBfdCwgX3QsIF90KTtcbnZhciBJbmRpY2VzID0gVXVpZFRlbXBsYXRlLm1hcChmdW5jdGlvbiAoeCwgaSkgeyByZXR1cm4geCA9PT0gJy0nID8gTmFOIDogaTsgfSkuZmlsdGVyKGlzRmluaXRlKTtcbi8vfVxuXG5jbGFzcyBFbmdpbmVFeHRlbnNpb24ge1xuICAgIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogRW5naW5lRXh0ZW5zaW9uID0gbmV3IEVuZ2luZUV4dGVuc2lvbigpO1xuXG4gICAgLyoqIFxuICAgICAqIOabv+aNoumihOWItuS9k+S4reWkmuivreiogOi1hOa6kFVVSUTmm7/mjaIgXG4gICAgICovXG4gICAgcHVibGljIHJlcGxhY2VVdWlkRm9yTXVsTEcodGRJbmZvOiBhbnkpIHtcbiAgICAgICAgaWYgKCFjMmYubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzJmLmxhbmd1YWdlLmxhbmd1YWdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjMmYubGFuZ3VhZ2UuY3VycmVudCA9PSBjMmYuY29uZmlnLmdhbWUubGFudWFnZUJhc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRkSW5mbyB8fCAhdGRJbmZvLnV1aWRMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZEluZm8udXVpZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkc3RVdWlkID0gdGRJbmZvLnV1aWRMaXN0W2ldO1xuICAgICAgICAgICAgaWYgKENDX0JVSUxEKSB7XG4gICAgICAgICAgICAgICAgZHN0VXVpZCA9IHRoaXMuZGVjb2RlVXVpZChkc3RVdWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdHdWlkID0gYzJmLmxhbmd1YWdlLmdldExHUmVzVXVpZChkc3RVdWlkKTtcbiAgICAgICAgICAgIGlmIChuZXdHdWlkKSB7XG4gICAgICAgICAgICAgICAgdGRJbmZvLnV1aWRMaXN0W2ldID0gQ0NfQlVJTEQgPyB0aGlzLmVuY29kZVV1aWQobmV3R3VpZCkgOiBuZXdHdWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWOi+e8qXV1aWQgKi9cbiAgICBwcml2YXRlIGVuY29kZVV1aWQodXVpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh1dWlkLmxlbmd0aCAhPT0gMzYpIHtcbiAgICAgICAgICAgIHJldHVybiB1dWlkO1xuICAgICAgICB9XG4gICAgICAgIGxldCB6aXBVdWlkID0gW11cbiAgICAgICAgemlwVXVpZFswXSA9IHV1aWRbMF07XG4gICAgICAgIHppcFV1aWRbMV0gPSB1dWlkWzFdO1xuICAgICAgICBsZXQgY2xlYW5VdWlkID0gdXVpZC5yZXBsYWNlKCctJywgJycpLnJlcGxhY2UoJy0nLCAnJykucmVwbGFjZSgnLScsICcnKS5yZXBsYWNlKCctJywgJycpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDIsIGogPSAyOyBpIDwgMzI7IGkgKz0gMykge1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IEhleE1hcFtTdHJpbmcuZnJvbUNoYXJDb2RlKGNsZWFuVXVpZC5jaGFyQ29kZUF0KGkpKV07XG4gICAgICAgICAgICBjb25zdCBtaWQgPSBIZXhNYXBbU3RyaW5nLmZyb21DaGFyQ29kZShjbGVhblV1aWQuY2hhckNvZGVBdChpICsgMSkpXTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gSGV4TWFwW1N0cmluZy5mcm9tQ2hhckNvZGUoY2xlYW5VdWlkLmNoYXJDb2RlQXQoaSArIDIpKV07XG4gICAgICAgICAgICB6aXBVdWlkW2orK10gPSBCQVNFNjRfS0VZU1sobGVmdCA8PCAyKSArIChtaWQgPj4gMildXG4gICAgICAgICAgICB6aXBVdWlkW2orK10gPSBCQVNFNjRfS0VZU1soKG1pZCAmIDMpIDw8IDQpICsgcmlnaHRdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gemlwVXVpZC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKiog6Kej5Y6LdXVpZCAqL1xuICAgIHByaXZhdGUgZGVjb2RlVXVpZCh1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHV1aWQubGVuZ3RoICE9PSAyMikge1xuICAgICAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgICAgIH1cbiAgICAgICAgVXVpZFRlbXBsYXRlWzBdID0gdXVpZFswXTtcbiAgICAgICAgVXVpZFRlbXBsYXRlWzFdID0gdXVpZFsxXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDIsIGogPSAyOyBpIDwgMjI7IGkgKz0gMikge1xuICAgICAgICAgICAgdmFyIGxocyA9IEJBU0U2NF9WQUxVRVNbdXVpZC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgICAgIHZhciByaHMgPSBCQVNFNjRfVkFMVUVTW3V1aWQuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgVXVpZFRlbXBsYXRlW0luZGljZXNbaisrXV0gPSBIZXhDaGFyc1tsaHMgPj4gMl07XG4gICAgICAgICAgICBVdWlkVGVtcGxhdGVbSW5kaWNlc1tqKytdXSA9IEhleENoYXJzWygobGhzICYgMykgPDwgMikgfCByaHMgPj4gNF07XG4gICAgICAgICAgICBVdWlkVGVtcGxhdGVbSW5kaWNlc1tqKytdXSA9IEhleENoYXJzW3JocyAmIDB4Rl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFV1aWRUZW1wbGF0ZS5qb2luKCcnKTtcbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSUMyRiB7XG4gICAgICAgIGVuZ2luZUV4dDogRW5naW5lRXh0ZW5zaW9uO1xuICAgIH1cbn1cblxuYzJmLmVuZ2luZUV4dCA9IEVuZ2luZUV4dGVuc2lvbi5pbnN0YW5jZTtcbmV4cG9ydCB7IH07Il19