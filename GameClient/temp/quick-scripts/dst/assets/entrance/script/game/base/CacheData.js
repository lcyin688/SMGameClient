
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/base/CacheData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9iYXNlL0NhY2hlRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJLG1CQUFZLEVBQUs7UUFGVCxVQUFLLEdBQU0sSUFBSSxDQUFDO1FBR3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFXLDJCQUFJO2FBSWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQU5ELFVBQWdCLEVBQUs7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLTCxnQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FjaGVEYXRhPFQ+e1xuICAgIHByaXZhdGUgX2RhdGE6IFQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZHQ6IFQpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGR0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkYXRhKGR0OiBUKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbn0iXX0=