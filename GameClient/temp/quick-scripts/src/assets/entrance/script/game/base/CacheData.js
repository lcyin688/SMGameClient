"use strict";
cc._RF.push(module, 'f0a2d6i8CJObJJM0VOKgJ0s', 'CacheData');
// entrance/script/game/base/CacheData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheData = void 0;
var CacheData = /** @class */ (function () {
    function CacheData(dt) {
        this._data = null;
        this._data = dt;
    }
    CacheData.prototype.clear = function () {
        this._data = null;
    };
    Object.defineProperty(CacheData.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (dt) {
            this._data = dt;
        },
        enumerable: false,
        configurable: true
    });
    return CacheData;
}());
exports.CacheData = CacheData;

cc._RF.pop();