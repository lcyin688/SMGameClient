
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/base/CsvBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9iYXNlL0NzdkJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTJDO0FBQzNDLHlDQUF3QztBQUV4QztJQUdJO1FBRlUsVUFBSyxHQUFpQixJQUFJLENBQUM7UUFHakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLElBQU87UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHFCQUFTLENBQUksSUFBSSxDQUFDLENBQUM7UUFDcEMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0JBQVcseUJBQUk7YUFHZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQzthQUxELFVBQWdCLElBQU87WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBSUwsY0FBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQnFCLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNhY2hlcyB9IGZyb20gXCIuLi9HYW1lQ2FjaGVzXCI7XG5pbXBvcnQgeyBDYWNoZURhdGEgfSBmcm9tIFwiLi9DYWNoZURhdGFcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzdkJhc2U8VD4ge1xuICAgIHByb3RlY3RlZCBjYWNoZTogQ2FjaGVEYXRhPFQ+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdENhY2hlKGRhdGE6IFQpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBDYWNoZURhdGE8VD4oZGF0YSk7XG4gICAgICAgIEdhbWVDYWNoZXMuaW5zLmFkZENzdkNhY2hlKHRoaXMuY2FjaGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGF0YShkYXRhOiBUKSB7XG4gICAgICAgIHRoaXMuY2FjaGUuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuZGF0YTtcbiAgICB9XG59Il19