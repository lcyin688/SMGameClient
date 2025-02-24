
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/JsonUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a3e6eBWN9Dgp1w6XQU6jFH', 'JsonUtil');
// c2f-framework/utils/JsonUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 资源路径 */
var PATH = "config/game/";
/** 数据缓存 */
var DATA = new Map();
/** JSON数据表工具 */
var JsonUtil = /** @class */ (function () {
    function JsonUtil() {
    }
    /**
     * 通知资源名从缓存中获取一个Json数据表
     * @param name  资源名
     */
    JsonUtil.get = function (name) {
        if (DATA.has(name))
            return DATA.get(name);
    };
    /**
     * 通知资源名加载Json数据表
     * @param name      资源名
     * @param callback  资源加载完成回调
     */
    JsonUtil.load = function (name, callback) {
        if (DATA.has(name))
            callback(DATA.get(name));
        else {
            var url = PATH + name;
            cc.resources.load(url, cc.JsonAsset, function (err, content) {
                if (err) {
                    cc.error(err.message);
                }
                DATA.set(name, content.json);
                callback(content.json);
            });
        }
    };
    /**
     * 异步加载Json数据表
     * @param name 资源名
     */
    JsonUtil.loadAsync = function (name) {
        return new Promise(function (resolve, reject) {
            if (DATA.has(name)) {
                resolve(DATA.get(name));
            }
            else {
                var url = PATH + name;
                cc.resources.load(url, cc.JsonAsset, function (err, content) {
                    if (err) {
                        cc.error(err.message);
                    }
                    DATA.set(name, content.json);
                    resolve(content.json);
                });
            }
        });
    };
    /**
     * 通过指定资源名释放资源
     * @param name 资源名
     */
    JsonUtil.release = function (name) {
        var url = PATH + name;
        DATA.delete(name);
        cc.resources.release(url);
    };
    /** 格式化字符串为对象 */
    JsonUtil.parse = function (str, defaultV) {
        if (defaultV === void 0) { defaultV = null; }
        var result = defaultV;
        try {
            result = JSON.parse(str);
        }
        catch (error) {
            c2f.log.logBusiness('failed to parse json:', str);
        }
        return result;
    };
    return JsonUtil;
}());
c2f.utils.json = JsonUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0pzb25VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsV0FBVztBQUNYLElBQUksSUFBSSxHQUFXLGNBQWMsQ0FBQztBQUVsQyxXQUFXO0FBQ1gsSUFBSSxJQUFJLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7QUFFdkMsZ0JBQWdCO0FBQ2hCO0lBQUE7SUF3RUEsQ0FBQztJQXZFRzs7O09BR0c7SUFDSSxZQUFHLEdBQVYsVUFBVyxJQUFZO1FBQ25CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsUUFBa0I7UUFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBaUIsRUFBRSxPQUFxQjtnQkFDMUUsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUMxQjtpQkFDSTtnQkFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQWlCLEVBQUUsT0FBcUI7b0JBQzFFLElBQUksR0FBRyxFQUFFO3dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN6QjtvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQkFBTyxHQUFkLFVBQWUsSUFBWTtRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdCQUFnQjtJQUNULGNBQUssR0FBWixVQUFhLEdBQVcsRUFBRSxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLGVBQW9CO1FBQzFDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJO1lBQ0EsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXhFQSxBQXdFQyxJQUFBO0FBT0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiog6LWE5rqQ6Lev5b6EICovXG52YXIgUEFUSDogc3RyaW5nID0gXCJjb25maWcvZ2FtZS9cIjtcblxuLyoqIOaVsOaNrue8k+WtmCAqL1xudmFyIERBVEE6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XG5cbi8qKiBKU09O5pWw5o2u6KGo5bel5YW3ICovXG5jbGFzcyBKc29uVXRpbCB7XG4gICAgLyoqXG4gICAgICog6YCa55+l6LWE5rqQ5ZCN5LuO57yT5a2Y5Lit6I635Y+W5LiA5LiqSnNvbuaVsOaNruihqFxuICAgICAqIEBwYXJhbSBuYW1lICDotYTmupDlkI1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChEQVRBLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiBEQVRBLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgJrnn6XotYTmupDlkI3liqDovb1Kc29u5pWw5o2u6KGoXG4gICAgICogQHBhcmFtIG5hbWUgICAgICDotYTmupDlkI1cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgIOi1hOa6kOWKoOi9veWujOaIkOWbnuiwg1xuICAgICAqL1xuICAgIHN0YXRpYyBsb2FkKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmIChEQVRBLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIGNhbGxiYWNrKERBVEEuZ2V0KG5hbWUpKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUEFUSCArIG5hbWU7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLkpzb25Bc3NldCwgKGVycjogRXJyb3IgfCBudWxsLCBjb250ZW50OiBjYy5Kc29uQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgREFUQS5zZXQobmFtZSwgY29udGVudC5qc29uKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjb250ZW50Lmpzb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8guatpeWKoOi9vUpzb27mlbDmja7ooahcbiAgICAgKiBAcGFyYW0gbmFtZSDotYTmupDlkI1cbiAgICAgKi9cbiAgICBzdGF0aWMgbG9hZEFzeW5jKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKERBVEEuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShEQVRBLmdldChuYW1lKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBQQVRIICsgbmFtZTtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLkpzb25Bc3NldCwgKGVycjogRXJyb3IgfCBudWxsLCBjb250ZW50OiBjYy5Kc29uQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERBVEEuc2V0KG5hbWUsIGNvbnRlbnQuanNvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudC5qc29uKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgJrov4fmjIflrprotYTmupDlkI3ph4rmlL7otYTmupBcbiAgICAgKiBAcGFyYW0gbmFtZSDotYTmupDlkI1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmVsZWFzZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHVybCA9IFBBVEggKyBuYW1lO1xuICAgICAgICBEQVRBLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnJlbGVhc2UodXJsKTtcbiAgICB9XG5cbiAgICAvKiog5qC85byP5YyW5a2X56ym5Liy5Li65a+56LGhICovXG4gICAgc3RhdGljIHBhcnNlKHN0cjogc3RyaW5nLCBkZWZhdWx0VjogYW55ID0gbnVsbCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZGVmYXVsdFY7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjMmYubG9nLmxvZ0J1c2luZXNzKCdmYWlsZWQgdG8gcGFyc2UganNvbjonLCBzdHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElVdGlsIHtcbiAgICAgICAganNvbjogdHlwZW9mIEpzb25VdGlsO1xuICAgIH1cbn1cbmMyZi51dGlscy5qc29uID0gSnNvblV0aWw7XG5leHBvcnQgeyB9OyJdfQ==