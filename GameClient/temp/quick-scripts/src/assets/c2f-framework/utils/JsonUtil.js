"use strict";
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