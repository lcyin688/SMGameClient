
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/net/BindHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '782a2U2boRKxKxpaZwpyi/A', 'BindHandler');
// c2f-framework/net/BindHandler.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genHandler = exports.BindHandler = void 0;
var handlerPool = [];
//用于绑定回调函数this指针
var BindHandler = /** @class */ (function () {
    function BindHandler() {
    }
    BindHandler.prototype.init = function (cb, host) {
        if (host === void 0) { host = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.cb = cb;
        this.host = host;
        this.args = args;
    };
    BindHandler.prototype.exec = function () {
        var extras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extras[_i] = arguments[_i];
        }
        this.cb.apply(this.host, this.args.concat(extras));
    };
    return BindHandler;
}());
exports.BindHandler = BindHandler;
function genHandler(cb, host) {
    if (host === void 0) { host = null; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var single = handlerPool.length < 0 ? handlerPool.pop() : new BindHandler();
    //这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
    single.init.apply(single, __spreadArrays([cb, host], args));
    return single;
}
exports.genHandler = genHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL25ldC9CaW5kSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxXQUFXLEdBQWtCLEVBQUUsQ0FBQztBQUVwQyxnQkFBZ0I7QUFDaEI7SUFLSTtJQUFnQixDQUFDO0lBRWpCLDBCQUFJLEdBQUosVUFBSyxFQUFZLEVBQUUsSUFBVztRQUFYLHFCQUFBLEVBQUEsV0FBVztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFBSyxnQkFBUzthQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7WUFBVCwyQkFBUzs7UUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQ0FBVztBQWtCeEIsU0FBZ0IsVUFBVSxDQUFDLEVBQVksRUFBRSxJQUFnQjtJQUFoQixxQkFBQSxFQUFBLFdBQWdCO0lBQUUsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCw2QkFBYzs7SUFDckUsSUFBSSxNQUFNLEdBQWdCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUE7SUFDeEYsc0RBQXNEO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxrQkFBTSxFQUFFLEVBQUUsSUFBSSxHQUFLLElBQUksR0FBRTtJQUMvQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBTEQsZ0NBS0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGFuZGxlclBvb2w6IEJpbmRIYW5kbGVyW10gPSBbXTtcblxuLy/nlKjkuo7nu5Hlrprlm57osIPlh73mlbB0aGlz5oyH6ZKIXG5leHBvcnQgY2xhc3MgQmluZEhhbmRsZXIge1xuICAgIHByaXZhdGUgY2I6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgaG9zdDogYW55O1xuICAgIHByaXZhdGUgYXJnczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaW5pdChjYjogRnVuY3Rpb24sIGhvc3QgPSBudWxsLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuY2IgPSBjYjtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB9XG5cbiAgICBleGVjKC4uLmV4dHJhcykge1xuICAgICAgICB0aGlzLmNiLmFwcGx5KHRoaXMuaG9zdCwgdGhpcy5hcmdzLmNvbmNhdChleHRyYXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5IYW5kbGVyKGNiOiBGdW5jdGlvbiwgaG9zdDogYW55ID0gbnVsbCwgLi4uYXJnczogYW55W10pOiBCaW5kSGFuZGxlciB7XG4gICAgbGV0IHNpbmdsZTogQmluZEhhbmRsZXIgPSBoYW5kbGVyUG9vbC5sZW5ndGggPCAwID8gaGFuZGxlclBvb2wucG9wKCkgOiBuZXcgQmluZEhhbmRsZXIoKVxuICAgIC8v6L+Z6YeM6KaB5bGV5byAYXJncywg5ZCm5YiZ5Lya5bCGYXJnc+W9k+aVsOe7hOS8oOe7mXdyYXBwZXIsIOWvvOiHtOWFtmFyZ3Plj4LmlbDlj5jmiJAy57u05pWw57uEW1tdXVxuICAgIHNpbmdsZS5pbml0KGNiLCBob3N0LCAuLi5hcmdzKTtcbiAgICByZXR1cm4gc2luZ2xlO1xufVxuIl19