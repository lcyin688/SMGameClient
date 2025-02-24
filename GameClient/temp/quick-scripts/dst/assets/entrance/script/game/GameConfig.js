
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrance/script/game/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7185cXkKU9LIJyMFVSXpGZG', 'GameConfig');
// entrance/script/game/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CfgType;
(function (CfgType) {
    CfgType[CfgType["JSON"] = 1] = "JSON";
    CfgType[CfgType["CSV"] = 2] = "CSV";
})(CfgType || (CfgType = {}));
var GameConfig = /** @class */ (function () {
    function GameConfig() {
        /** 本地配置 */
        this.cfgs = null;
        /** 配置文件类型 */
        this.type = null;
        /** 活动语言表 */
        this.actLanguage = null;
        this.cfgs = new Map();
    }
    Object.defineProperty(GameConfig, "ins", {
        get: function () {
            if (!GameConfig._ins) {
                GameConfig._ins = new GameConfig();
            }
            return GameConfig._ins;
        },
        enumerable: false,
        configurable: true
    });
    /** 释放 */
    GameConfig.prototype.clear = function () {
        //this.cfgs.clear();//暂时不释放
    };
    /** 获得某表数据 */
    GameConfig.prototype.getCfgData = function (tabName) {
        var result = null;
        if (this.cfgs) {
            result = this.cfgs.get(tabName);
        }
        return result;
    };
    /** 是否为JSON */
    GameConfig.prototype.isJsonCfg = function () {
        return this.type == CfgType.JSON;
    };
    /** 设置活动语言表配置 */
    GameConfig.prototype.setActLanguageTab = function (data) {
    };
    //单例
    GameConfig._ins = null;
    return GameConfig;
}());
szg.cfg = GameConfig.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnRyYW5jZS9zY3JpcHQvZ2FtZS9HYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSyxPQUdKO0FBSEQsV0FBSyxPQUFPO0lBQ1IscUNBQVEsQ0FBQTtJQUNSLG1DQUFPLENBQUE7QUFDWCxDQUFDLEVBSEksT0FBTyxLQUFQLE9BQU8sUUFHWDtBQUVEO0lBUUk7UUFQQSxXQUFXO1FBQ0gsU0FBSSxHQUFxQixJQUFJLENBQUM7UUFDdEMsYUFBYTtRQUNMLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDN0IsWUFBWTtRQUNKLGdCQUFXLEdBQXdCLElBQUksQ0FBQztRQUc1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUlELHNCQUFXLGlCQUFHO2FBQWQ7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDbEIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsU0FBUztJQUNGLDBCQUFLLEdBQVo7UUFDSSwyQkFBMkI7SUFDL0IsQ0FBQztJQUVELGFBQWE7SUFDTiwrQkFBVSxHQUFqQixVQUFrQixPQUFlO1FBQzdCLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsY0FBYztJQUNQLDhCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQjtJQUNULHNDQUFpQixHQUF4QixVQUF5QixJQUFTO0lBRWxDLENBQUM7SUEvQkQsSUFBSTtJQUNXLGVBQUksR0FBZSxJQUFJLENBQUM7SUErQjNDLGlCQUFDO0NBNUNELEFBNENDLElBQUE7QUFRRCxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RzIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9nYW1lL0dhbWVDb25zdHNcIjtcblxuZW51bSBDZmdUeXBlIHtcbiAgICBKU09OID0gMSxcbiAgICBDU1YgPSAyXG59XG5cbmNsYXNzIEdhbWVDb25maWcge1xuICAgIC8qKiDmnKzlnLDphY3nva4gKi9cbiAgICBwcml2YXRlIGNmZ3M6IE1hcDxzdHJpbmcsIGFueT4gPSBudWxsO1xuICAgIC8qKiDphY3nva7mlofku7bnsbvlnosgKi9cbiAgICBwcml2YXRlIHR5cGU6IENmZ1R5cGUgPSBudWxsO1xuICAgIC8qKiDmtLvliqjor63oqIDooaggKi9cbiAgICBwcml2YXRlIGFjdExhbmd1YWdlOiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNmZ3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy/ljZXkvotcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBHYW1lQ29uZmlnID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IGlucygpIHtcbiAgICAgICAgaWYgKCFHYW1lQ29uZmlnLl9pbnMpIHtcbiAgICAgICAgICAgIEdhbWVDb25maWcuX2lucyA9IG5ldyBHYW1lQ29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdhbWVDb25maWcuX2lucztcbiAgICB9XG5cbiAgICAvKiog6YeK5pS+ICovXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICAvL3RoaXMuY2Zncy5jbGVhcigpOy8v5pqC5pe25LiN6YeK5pS+XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+afkOihqOaVsOaNriAqL1xuICAgIHB1YmxpYyBnZXRDZmdEYXRhKHRhYk5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmNmZ3MpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY2Zncy5nZXQodGFiTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiog5piv5ZCm5Li6SlNPTiAqL1xuICAgIHB1YmxpYyBpc0pzb25DZmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gQ2ZnVHlwZS5KU09OO1xuICAgIH1cblxuICAgIC8qKiDorr7nva7mtLvliqjor63oqIDooajphY3nva4gKi9cbiAgICBwdWJsaWMgc2V0QWN0TGFuZ3VhZ2VUYWIoZGF0YTogYW55KSB7XG5cbiAgICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVNaRyB7XG4gICAgICAgIGNmZzogR2FtZUNvbmZpZztcbiAgICB9XG59XG5cbnN6Zy5jZmcgPSBHYW1lQ29uZmlnLmlucztcbmV4cG9ydCB7IH07Il19