"use strict";
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