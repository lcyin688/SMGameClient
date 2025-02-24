
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/tbl/Tbl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3RibC9UYmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBUWxDO0lBQUE7UUFDSSxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBMklwQixDQUFDO0lBdElVLGtCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBUztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sdUJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRU0sNEJBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHNCQUFRLEdBQWY7UUFBZ0IsY0FBNEI7YUFBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1lBQTVCLHlCQUE0Qjs7UUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxpQkFBRyxHQUFWO1FBQVcsY0FBNEI7YUFBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1lBQTVCLHlCQUE0Qjs7UUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENB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QVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTNJUSxHQUFHO1FBRGYsT0FBTyxDQUFDLEtBQUssQ0FBQztPQUNGLEdBQUcsQ0E0SWY7SUFBRCxVQUFDO0NBNUlELEFBNElDLElBQUE7QUE1SVksa0JBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcbmludGVyZmFjZSBfSVRibCB7XG4gICAga2V5czogQXJyYXk8c3RyaW5nPjtcbiAgICBkYXRhOiBBcnJheTxBcnJheTxhbnk+PjtcbiAgICBpbmRleDogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbiAgICByZWRpcmVjdDogUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cbkBjY2NsYXNzKCdUYmwnKVxuZXhwb3J0IGNsYXNzIFRibDxUPiB7XG4gICAgY2FjaGU6IFRbXSA9IFtdO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBqc29uOiBfSVRibDtcblxuXG4gICAgcHVibGljIGluaXQobmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5qc29uID0gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5qc29uLmRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhQnlJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhcnBLZXlzKGluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5kZXgoLi4ua2V5czogc3RyaW5nW10gfCBudW1iZXJbXSkge1xuICAgICAgICBsZXQga2V5ID0ga2V5cy5qb2luKFwiX1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbi5pbmRleFtrZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoLi4uc3RyaW5nW10gfCBudW1iZXJbXSl9IGtleXNcbiAgICAgKiBAcmV0dXJuIHsqfSAge1R9XG4gICAgICogQG1lbWJlcm9mIFRibFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQoLi4ua2V5czogc3RyaW5nW10gfCBudW1iZXJbXSk6IFQge1xuICAgICAgICBsZXQga2V5ID0ga2V5cy5qb2luKFwiX1wiKTtcbiAgICAgICAgbGV0IGRhdGE6IFQgPSB0aGlzLndhcnBLZXlzKHRoaXMuanNvbi5pbmRleFtrZXldKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUYmwtPiBbXCIgKyB0aGlzLm5hbWUgKyBcIl0g5LiN5a2Y5ZyoIGtleSA9IFwiICsgWy4uLmtleXNdLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdhcnBLZXlzKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVbaW5kZXhdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmpzb24uZGF0YVtpbmRleF07XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmpzb24ua2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5qc29uLmtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm6ZyA6KaB6YeN5a6a5ZCRXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZWVkUmVkaXJlY3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2luZGV4XSA9IG9iajtcblxuICAgICAgICAgICAgICAgIC8vIOW7tui/n+i/m+ihjOmHjeWumuWQke+8jOmYsuatouatu+W+queOr1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVkaXJlY3RLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJlZGlyZWN0S2V5c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLl9yZWRpcmVjdChrZXksIG9ialtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqID0gT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGwgYXMgYW55O1xuICAgIH1cblxuICAgIHByaXZhdGUgX25lZWRSZWRpcmVjdChrZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMuanNvbi5yZWRpcmVjdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZWRpcmVjdChrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5qc29uLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICBsZXQgdGJsTmFtZSA9IHRoaXMuanNvbi5yZWRpcmVjdFtrZXldO1xuICAgICAgICAgICAgbGV0IHRibCA9IGMyZi50YmxbdGJsTmFtZV07XG4gICAgICAgICAgICBpZiAodGJsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmFsRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhID0gdGJsLmdldC5hcHBseSh0YmwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsRGF0YSA9IHRibC5nZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaW5hbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsRGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5pWw5o2u5pWw57uEIC0g5Y+q6K+7XG4gICAgICogQHJldHVybiB7IFRbXSB9IFxuICAgICAqIEBtZW1iZXJvZiBUYmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGF0YUxpc3RSZWFkb25seSgpOiBUW10ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuanNvbi5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtpXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53YXJwS2V5cyhpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5pc0Zyb3plbih0aGlzLmNhY2hlKSkge1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmlbDmja7lia/mnKxcbiAgICAgKiBAcmV0dXJuIHsgVFtdIH0gXG4gICAgICogQG1lbWJlcm9mIFRibFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREYXRhTGlzdENvcHkoKTogVFtdIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGFMaXN0UmVhZG9ubHkoKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICDov4fmu6Tlh7rmjIflrprmlbDmja5cbiAgICAgKiBAcGFyYW0geyhkYXRhOiBUKT0+IGJvb2xlYW59IGZpbHRlckZuXG4gICAgICogQHJldHVybiB7IFRbXSB9IFxuICAgICAqIEBtZW1iZXJvZiBUYmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyKGZpbHRlckZuOiAoZGF0YTogVCkgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxldCBkYXRhTGlzdCA9IHRoaXMuZ2V0RGF0YUxpc3RSZWFkb25seSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUxpc3RbaV07XG4gICAgICAgICAgICBpZiAoZmlsdGVyRm4oZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgY2xhc3MgR1RibDxUPiBleHRlbmRzIFRibDxUPnsgfVxufVxuXG5leHBvcnQgeyB9OyJdfQ==