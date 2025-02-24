"use strict";
cc._RF.push(module, '83b64iWLLpN4r8f8SxyCqIL', 'CsvBase');
// entrance/script/game/base/CsvBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvBase = void 0;
var GameCaches_1 = require("../GameCaches");
var CacheData_1 = require("./CacheData");
var CsvBase = /** @class */ (function () {
    function CsvBase() {
        this.cache = null;
        this.cache = null;
    }
    CsvBase.prototype.initCache = function (data) {
        this.cache = new CacheData_1.CacheData(data);
        GameCaches_1.GameCaches.ins.addCsvCache(this.cache);
    };
    Object.defineProperty(CsvBase.prototype, "data", {
        get: function () {
            return this.cache.data;
        },
        set: function (data) {
            this.cache.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return CsvBase;
}());
exports.CsvBase = CsvBase;

cc._RF.pop();