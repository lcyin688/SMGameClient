"use strict";
cc._RF.push(module, '74cc6iGkDFM/6PRdibtfQ5B', 'Logger');
// c2f-framework/core/log/Logger.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    /** 网络层日志 */
    LogType[LogType["Net"] = 1] = "Net";
    /** 数据结构层日志 */
    LogType[LogType["Model"] = 2] = "Model";
    /** 业务逻辑层日志 */
    LogType[LogType["Business"] = 4] = "Business";
    /** 视图层日志 */
    LogType[LogType["View"] = 8] = "View";
    /** 配置日志 */
    LogType[LogType["Config"] = 16] = "Config";
    /** 标准日志 */
    LogType[LogType["Trace"] = 32] = "Trace";
    /** SDK */
    LogType[LogType["SDK"] = 64] = "SDK";
    /** 战斗 */
    LogType[LogType["BAT"] = 128] = "BAT";
})(LogType || (LogType = {}));
var names = {
    "1": "网络日志",
    "2": "数据日志",
    "4": "业务日志",
    "8": "视图日志",
    "16": "配置日志",
    "32": "标准日志",
    "64": "SDK日志",
    "128": "战斗日志",
};
/**
 * 日志管理
 * @example
c2f.log.trace("默认标准日志");
c2f.log.logConfig("灰色配置日志");
c2f.log.logNet("橙色网络日志");
c2f.log.logModel("紫色数据日志");
c2f.log.logBusiness("蓝色业务日志");
c2f.log.logView("绿色视图日志");
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.init = function () {
        this.tags =
            LogType.Net |
                LogType.Model |
                LogType.Business |
                LogType.View |
                LogType.Config |
                LogType.Trace |
                LogType.SDK |
                LogType.BAT;
    };
    /**
     * 设置显示的日志类型，默认值为不显示任何类型日志
     * @example
        c2f.log.setTags(LogType.View|LogType.Business)
     */
    Logger.setTags = function (tag) {
        if (tag === void 0) { tag = null; }
        if (tag) {
            this.tags = tag;
        }
    };
    /**
     * 记录开始计时
     * @param describe  标题描述
     * @example
        c2f.log.start();
        ...
        省略N行代码
        ...
        c2f.log.end();
     */
    Logger.start = function (describe) {
        if (describe === void 0) { describe = "Time"; }
        console.time(describe);
    };
    /**
     * 打印范围内时间消耗
     * @param describe  标题描述
     * @example
        c2f.log.start();
        ...
        省略N行代码
        ...
        c2f.log.end();
     */
    Logger.end = function (describe) {
        if (describe === void 0) { describe = "Time"; }
        console.timeEnd(describe);
    };
    /**
     * 打印表格
     * @param msg       日志消息
     * @param describe  标题描述
     * @example
        var object:any = {uid:1000, name:"c2f"};
        c2f.log.table(object);
     */
    Logger.table = function (msg, describe) {
        if (!this.isOpen(LogType.Trace)) {
            return;
        }
        console.table(msg);
    };
    /**
     * 打印标准日志
     * @param msg       日志消息
     */
    Logger.trace = function (msg) {
        // 标记没有打开，不打印该日志
        if (!this.isOpen(LogType.Trace)) {
            return;
        }
        console.log(msg);
    };
    /**
     * 打印网络层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    Logger.logNet = function (msg, describe) {
        this.orange(LogType.Net, msg, describe);
    };
    /**
     * 打印数据层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    Logger.logModel = function (msg, describe) {
        this.violet(LogType.Model, msg, describe);
    };
    /**
     * 打印业务层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    Logger.logBusiness = function (msg, describe) {
        this.blue(LogType.Business, msg, describe);
    };
    /**
     * 打印视图日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    Logger.logView = function (msg, describe) {
        this.green(LogType.View, msg, describe);
    };
    /** 打印配置日志 */
    Logger.logConfig = function (msg, describe) {
        this.gray(LogType.Config, msg, describe);
    };
    /** 打印SDK日志 */
    Logger.logSDK = function (msg, describe) {
        this.cyan(LogType.SDK, msg, describe);
    };
    /** 打印战斗日志 */
    Logger.logBat = function (msg, describe) {
        this.cyan(LogType.BAT, msg, describe);
    };
    // 橙色
    Logger.orange = function (tag, msg, describe) {
        this.print(tag, msg, "color:#ee7700;", describe);
    };
    // 紫色
    Logger.violet = function (tag, msg, describe) {
        this.print(tag, msg, "color:Violet;", describe);
    };
    // 蓝色
    Logger.blue = function (tag, msg, describe) {
        this.print(tag, msg, "color:#3a5fcd;", describe);
    };
    // 绿色
    Logger.green = function (tag, msg, describe) {
        this.print(tag, msg, "color:green;", describe);
    };
    // 灰色
    Logger.gray = function (tag, msg, describe) {
        this.print(tag, msg, "color:gray;", describe);
    };
    // 青色
    Logger.cyan = function (tag, msg, describe) {
        this.print(tag, msg, "color:#09CBD7;", describe);
    };
    Logger.isOpen = function (tag) {
        return (this.tags & tag) != 0;
    };
    /**
     * 输出日志
     * @param tag       日志类型
     * @param msg       日志内容
     * @param color     日志文本颜色
     * @param describe  日志标题描述
     */
    Logger.print = function (tag, msg, color, describe) {
        // 标记没有打开，不打印该日志
        if (!this.isOpen(tag)) {
            return;
        }
        var backLog = console.log || cc.log;
        var type = names[tag];
        if (describe) {
            backLog.call(null, "%c%s%s%s:\n%s%o", color, this.getDateString(), '[' + type + ']', this.stack(5), describe, msg);
        }
        else {
            backLog.call(null, "%c%s%s%s:\n%o", color, this.getDateString(), '[' + type + ']', this.stack(5), msg);
        }
    };
    Logger.stack = function (index) {
        var e = new Error();
        var lines = e.stack.split("\n");
        var result = [];
        lines.forEach(function (line) {
            var _a;
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            }
            else {
                result.push((_a = {}, _a[lineBreak[0]] = lineBreak[1], _a));
            }
        });
        var list = [];
        var splitList = [];
        if (index < result.length - 1) {
            var value;
            for (var a in result[index]) {
                var splitList = a.split(".");
                if (splitList.length == 2) {
                    list = splitList.concat();
                }
                else {
                    value = result[index][a];
                    var start = value.lastIndexOf("/");
                    var end = value.lastIndexOf(".");
                    if (start > -1 && end > -1) {
                        var r = value.substring(start + 1, end);
                        list.push(r);
                    }
                    else {
                        list.push(value);
                    }
                }
            }
        }
        if (list.length == 1) {
            return "[" + list[0] + ".ts]";
        }
        else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
        }
        return "";
    };
    Logger.getDateString = function () {
        var d = new Date();
        var str = d.getHours().toString();
        var timeStr = "";
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMinutes().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getSeconds().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMilliseconds().toString();
        if (str.length == 1)
            str = "00" + str;
        if (str.length == 2)
            str = "0" + str;
        timeStr += str;
        timeStr = "[" + timeStr + "]";
        return timeStr;
    };
    Logger.tags = 0;
    return Logger;
}());
//// @ts-ignore
Logger.init();
c2f.log = Logger;

cc._RF.pop();