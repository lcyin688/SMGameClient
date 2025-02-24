"use strict";
cc._RF.push(module, '6cc99vHdtxHF6VdxK5NyUHr', 'Tbl');
// c2f-framework/tbl/Tbl.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tbl = void 0;
var ccclass = cc._decorator.ccclass;
var Tbl = /** @class */ (function () {
    function Tbl() {
        this.cache = [];
    }
    Tbl.prototype.init = function (name, data) {
        this.name = name;
        this.json = data;
    };
    Tbl.prototype.getLength = function () {
        return this.json.data.length;
    };
    Tbl.prototype.getDataByIndex = function (index) {
        return this.warpKeys(index);
    };
    Tbl.prototype.getIndex = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var key = keys.join("_");
        return this.json.index[key];
    };
    /**
     * 获取数据
     *
     * @param {(...string[] | number[])} keys
     * @return {*}  {T}
     * @memberof Tbl
     */
    Tbl.prototype.get = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var key = keys.join("_");
        var data = this.warpKeys(this.json.index[key]);
        if (!data) {
            console.error("Tbl-> [" + this.name + "] 不存在 key = " + __spreadArrays(keys).toString());
        }
        return data;
    };
    Tbl.prototype.warpKeys = function (index) {
        if (this.cache[index] != undefined) {
            return this.cache[index];
        }
        else {
            var data = this.json.data[index];
            if (data) {
                var redirectKeys = [];
                var obj = {};
                for (var i = 0; i < this.json.keys.length; i++) {
                    var key = this.json.keys[i];
                    obj[key] = data[i];
                    // 判断是否需要重定向
                    if (this._needRedirect(key)) {
                        redirectKeys.push(key);
                    }
                }
                this.cache[index] = obj;
                // 延迟进行重定向，防止死循环
                for (var j = 0; j < redirectKeys.length; j++) {
                    var key = redirectKeys[j];
                    obj[key] = this._redirect(key, obj[key]);
                }
                obj = Object.freeze(obj);
                return obj;
            }
        }
        return null;
    };
    Tbl.prototype._needRedirect = function (key) {
        return key in this.json.redirect;
    };
    Tbl.prototype._redirect = function (key, data) {
        if (key in this.json.redirect) {
            var tblName = this.json.redirect[key];
            var tbl = c2f.tbl[tblName];
            if (tbl) {
                var finalData = null;
                if (Array.isArray(data)) {
                    finalData = tbl.get.apply(tbl, data);
                }
                else {
                    finalData = tbl.get(data);
                }
                if (finalData) {
                    return finalData;
                }
            }
            return null;
        }
        return data;
    };
    /**
     * 获取数据数组 - 只读
     * @return { T[] }
     * @memberof Tbl
     */
    Tbl.prototype.getDataListReadonly = function () {
        for (var i = 0; i < this.json.data.length; i++) {
            if (this.cache[i]) {
                continue;
            }
            this.warpKeys(i);
        }
        if (!Object.isFrozen(this.cache)) {
            Object.freeze(this.cache);
        }
        return this.cache;
    };
    /**
     * 获取数据副本
     * @return { T[] }
     * @memberof Tbl
     */
    Tbl.prototype.getDataListCopy = function () {
        var data = this.getDataListReadonly();
        return JSON.parse(JSON.stringify(data));
    };
    /**
     *  过滤出指定数据
     * @param {(data: T)=> boolean} filterFn
     * @return { T[] }
     * @memberof Tbl
     */
    Tbl.prototype.filter = function (filterFn) {
        var list = [];
        var dataList = this.getDataListReadonly();
        for (var i = 0; i < dataList.length; i++) {
            var element = dataList[i];
            if (filterFn(element)) {
                list.push(element);
            }
        }
        return list;
    };
    Tbl = __decorate([
        ccclass('Tbl')
    ], Tbl);
    return Tbl;
}());
exports.Tbl = Tbl;

cc._RF.pop();