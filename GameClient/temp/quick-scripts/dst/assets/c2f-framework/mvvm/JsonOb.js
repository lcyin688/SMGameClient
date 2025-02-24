
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/JsonOb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c87781WJc9H6LKVJHRn4Kbs', 'JsonOb');
// c2f-framework/mvvm/JsonOb.ts

"use strict";
/**
 * 实现动态绑定的核心部分，
 * 每次修改属性值，都会调用对应函数，并且获取值的路径
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonOb = void 0;
var OP = Object.prototype;
var types = {
    obj: '[object Object]',
    array: '[object Array]'
};
var OAM = ['push', 'pop', 'shift', 'unshift', 'short', 'reverse', 'splice'];
/**
 * 实现属性拦截的类
 */
var JsonOb = /** @class */ (function () {
    function JsonOb(obj, callback) {
        if (OP.toString.call(obj) !== types.obj && OP.toString.call(obj) !== types.array) {
            console.error('请传入一个对象或数组');
        }
        this._callback = callback;
        this.observe(obj);
    }
    /**对象属性劫持 */
    JsonOb.prototype.observe = function (obj, path) {
        var _this = this;
        if (OP.toString.call(obj) === types.array) {
            this.overrideArrayProto(obj, path);
        }
        Object.keys(obj).forEach(function (key) {
            var self = _this;
            var oldVal = obj[key];
            var pathArray = path && path.slice();
            if (pathArray) {
                pathArray.push(key);
            }
            else {
                pathArray = [key];
            }
            Object.defineProperty(obj, key, {
                get: function () {
                    return oldVal;
                },
                set: function (newVal) {
                    //cc.log(newVal);
                    if (oldVal !== newVal) {
                        if (OP.toString.call(newVal) === '[object Object]') {
                            self.observe(newVal, pathArray);
                        }
                        self._callback(newVal, oldVal, pathArray);
                        oldVal = newVal;
                    }
                }
            });
            if (OP.toString.call(obj[key]) === types.obj || OP.toString.call(obj[key]) === types.array) {
                _this.observe(obj[key], pathArray);
            }
        }, this);
    };
    /**
     * 对数组类型进行动态绑定
     * @param array
     * @param path
     */
    JsonOb.prototype.overrideArrayProto = function (array, path) {
        // 保存原始 Array 原型  
        var originalProto = Array.prototype;
        // 通过 Object.create 方法创建一个对象，该对象的原型是Array.prototype  
        var overrideProto = Object.create(Array.prototype);
        var self = this;
        var result;
        // 遍历要重写的数组方法  
        OAM.forEach(function (method) {
            Object.defineProperty(overrideProto, method, {
                value: function () {
                    var oldVal = this.slice();
                    //调用原始原型上的方法  
                    result = originalProto[method].apply(this, arguments);
                    //继续监听新数组  
                    self.observe(this, path);
                    self._callback(this, oldVal, path);
                    return result;
                }
            });
        });
        // 最后 让该数组实例的 __proto__ 属性指向 假的原型 overrideProto  
        array['__proto__'] = overrideProto;
    };
    return JsonOb;
}());
exports.JsonOb = JsonOb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vSnNvbk9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0dBR0c7OztBQUVILElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDNUIsSUFBTSxLQUFLLEdBQUc7SUFDVixHQUFHLEVBQUUsaUJBQWlCO0lBQ3RCLEtBQUssRUFBRSxnQkFBZ0I7Q0FDMUIsQ0FBQTtBQUNELElBQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFOUU7O0dBRUc7QUFDSDtJQUNJLGdCQUFZLEdBQU0sRUFBRSxRQUFpRTtRQUNqRixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtZQUM5RSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBR0QsWUFBWTtJQUNKLHdCQUFPLEdBQWYsVUFBbUIsR0FBTSxFQUFFLElBQUs7UUFBaEMsaUJBa0NDO1FBakNHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFB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qOaAgee7keWumueahOaguOW/g+mDqOWIhu+8jFxuICog5q+P5qyh5L+u5pS55bGe5oCn5YC877yM6YO95Lya6LCD55So5a+55bqU5Ye95pWw77yM5bm25LiU6I635Y+W5YC855qE6Lev5b6EXG4gKi9cblxuY29uc3QgT1AgPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3QgdHlwZXMgPSB7XG4gICAgb2JqOiAnW29iamVjdCBPYmplY3RdJyxcbiAgICBhcnJheTogJ1tvYmplY3QgQXJyYXldJ1xufVxuY29uc3QgT0FNID0gWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3Nob3J0JywgJ3JldmVyc2UnLCAnc3BsaWNlJ107XG5cbi8qKlxuICog5a6e546w5bGe5oCn5oum5oiq55qE57G7XG4gKi9cbmV4cG9ydCBjbGFzcyBKc29uT2I8VD4ge1xuICAgIGNvbnN0cnVjdG9yKG9iajogVCwgY2FsbGJhY2s6IChuZXdWYWw6IGFueSwgb2xkVmFsOiBhbnksIHBhdGhBcnJheTogc3RyaW5nW10pID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKE9QLnRvU3RyaW5nLmNhbGwob2JqKSAhPT0gdHlwZXMub2JqICYmIE9QLnRvU3RyaW5nLmNhbGwob2JqKSAhPT0gdHlwZXMuYXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S8oOWFpeS4gOS4quWvueixoeaIluaVsOe7hCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub2JzZXJ2ZShvYmopO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGxiYWNrO1xuICAgIC8qKuWvueixoeWxnuaAp+WKq+aMgSAqL1xuICAgIHByaXZhdGUgb2JzZXJ2ZTxUPihvYmo6IFQsIHBhdGg/KSB7XG4gICAgICAgIGlmIChPUC50b1N0cmluZy5jYWxsKG9iaikgPT09IHR5cGVzLmFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJyaWRlQXJyYXlQcm90byhvYmosIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgb2xkVmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBsZXQgcGF0aEFycmF5ID0gcGF0aCAmJiBwYXRoLnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAocGF0aEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEFycmF5LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGhBcnJheSA9IFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbGRWYWw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2cobmV3VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbCAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT1AudG9TdHJpbmcuY2FsbChuZXdWYWwpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZShuZXdWYWwsIHBhdGhBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsYmFjayhuZXdWYWwsIG9sZFZhbCwgcGF0aEFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsID0gbmV3VmFsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoT1AudG9TdHJpbmcuY2FsbChvYmpba2V5XSkgPT09IHR5cGVzLm9iaiB8fCBPUC50b1N0cmluZy5jYWxsKG9ialtrZXldKSA9PT0gdHlwZXMuYXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmUob2JqW2tleV0sIHBhdGhBcnJheSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlr7nmlbDnu4Tnsbvlnovov5vooYzliqjmgIHnu5HlrppcbiAgICAgKiBAcGFyYW0gYXJyYXkgXG4gICAgICogQHBhcmFtIHBhdGggXG4gICAgICovXG4gICAgcHJpdmF0ZSBvdmVycmlkZUFycmF5UHJvdG8oYXJyYXk6IGFueSwgcGF0aCkge1xuICAgICAgICAvLyDkv53lrZjljp/lp4sgQXJyYXkg5Y6f5Z6LICBcbiAgICAgICAgdmFyIG9yaWdpbmFsUHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG4gICAgICAgIC8vIOmAmui/hyBPYmplY3QuY3JlYXRlIOaWueazleWIm+W7uuS4gOS4quWvueixoe+8jOivpeWvueixoeeahOWOn+Wei+aYr0FycmF5LnByb3RvdHlwZSAgXG4gICAgICAgIHZhciBvdmVycmlkZVByb3RvID0gT2JqZWN0LmNyZWF0ZShBcnJheS5wcm90b3R5cGUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgLy8g6YGN5Y6G6KaB6YeN5YaZ55qE5pWw57uE5pa55rOVICBcbiAgICAgICAgT0FNLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG92ZXJyaWRlUHJvdG8sIG1ldGhvZCwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRWYWwgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8v6LCD55So5Y6f5aeL5Y6f5Z6L5LiK55qE5pa55rOVICBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gb3JpZ2luYWxQcm90b1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIC8v57un57ut55uR5ZCs5paw5pWw57uEICBcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlKHRoaXMsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsYmFjayh0aGlzLCBvbGRWYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmnIDlkI4g6K6p6K+l5pWw57uE5a6e5L6L55qEIF9fcHJvdG9fXyDlsZ7mgKfmjIflkJEg5YGH55qE5Y6f5Z6LIG92ZXJyaWRlUHJvdG8gIFxuICAgICAgICBhcnJheVsnX19wcm90b19fJ10gPSBvdmVycmlkZVByb3RvO1xuICAgIH1cbn0iXX0=