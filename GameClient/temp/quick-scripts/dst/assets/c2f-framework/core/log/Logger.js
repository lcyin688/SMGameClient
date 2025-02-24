
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/core/log/Logger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2NvcmUvbG9nL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUssT0FpQko7QUFqQkQsV0FBSyxPQUFPO0lBQ1IsWUFBWTtJQUNaLG1DQUFPLENBQUE7SUFDUCxjQUFjO0lBQ2QsdUNBQVMsQ0FBQTtJQUNULGNBQWM7SUFDZCw2Q0FBWSxDQUFBO0lBQ1osWUFBWTtJQUNaLHFDQUFRLENBQUE7SUFDUixXQUFXO0lBQ1gsMENBQVcsQ0FBQTtJQUNYLFdBQVc7SUFDWCx3Q0FBVSxDQUFBO0lBQ1YsVUFBVTtJQUNWLG9DQUFRLENBQUE7SUFDUixTQUFTO0lBQ1QscUNBQVMsQ0FBQTtBQUNiLENBQUMsRUFqQkksT0FBTyxLQUFQLE9BQU8sUUFpQlg7QUFFRCxJQUFJLEtBQUssR0FBRztJQUNSLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxPQUFPO0lBQ2IsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQTtBQUVEOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQUE7SUErUEEsQ0FBQztJQTVQVSxXQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSTtZQUNMLE9BQU8sQ0FBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxRQUFRO2dCQUNoQixPQUFPLENBQUMsSUFBSTtnQkFDWixPQUFPLENBQUMsTUFBTTtnQkFDZCxPQUFPLENBQUMsS0FBSztnQkFDYixPQUFPLENBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBTyxHQUFkLFVBQWUsR0FBb0I7UUFBcEIsb0JBQUEsRUFBQSxNQUFlLElBQUs7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UUFDckMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN0QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFFZixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQTdQYyxXQUFJLEdBQVcsQ0FBQyxDQUFDO0lBOFBwQyxhQUFDO0NBL1BELEFBK1BDLElBQUE7QUFFRCxlQUFlO0FBQ2YsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBUWQsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIExvZ1R5cGUge1xuICAgIC8qKiDnvZHnu5zlsYLml6Xlv5cgKi9cbiAgICBOZXQgPSAxLFxuICAgIC8qKiDmlbDmja7nu5PmnoTlsYLml6Xlv5cgKi9cbiAgICBNb2RlbCA9IDIsXG4gICAgLyoqIOS4muWKoemAu+i+keWxguaXpeW/lyAqL1xuICAgIEJ1c2luZXNzID0gNCxcbiAgICAvKiog6KeG5Zu+5bGC5pel5b+XICovXG4gICAgVmlldyA9IDgsXG4gICAgLyoqIOmFjee9ruaXpeW/lyAqL1xuICAgIENvbmZpZyA9IDE2LFxuICAgIC8qKiDmoIflh4bml6Xlv5cgKi9cbiAgICBUcmFjZSA9IDMyLFxuICAgIC8qKiBTREsgKi9cbiAgICBTREsgPSA2NCxcbiAgICAvKiog5oiY5paXICovXG4gICAgQkFUID0gMTI4XG59XG5cbnZhciBuYW1lcyA9IHtcbiAgICBcIjFcIjogXCLnvZHnu5zml6Xlv5dcIixcbiAgICBcIjJcIjogXCLmlbDmja7ml6Xlv5dcIixcbiAgICBcIjRcIjogXCLkuJrliqHml6Xlv5dcIixcbiAgICBcIjhcIjogXCLop4blm77ml6Xlv5dcIixcbiAgICBcIjE2XCI6IFwi6YWN572u5pel5b+XXCIsXG4gICAgXCIzMlwiOiBcIuagh+WHhuaXpeW/l1wiLFxuICAgIFwiNjRcIjogXCJTREvml6Xlv5dcIixcbiAgICBcIjEyOFwiOiBcIuaImOaWl+aXpeW/l1wiLFxufVxuXG4vKiogXG4gKiDml6Xlv5fnrqHnkIYgXG4gKiBAZXhhbXBsZVxuYzJmLmxvZy50cmFjZShcIum7mOiupOagh+WHhuaXpeW/l1wiKTtcbmMyZi5sb2cubG9nQ29uZmlnKFwi54Gw6Imy6YWN572u5pel5b+XXCIpO1xuYzJmLmxvZy5sb2dOZXQoXCLmqZnoibLnvZHnu5zml6Xlv5dcIik7XG5jMmYubG9nLmxvZ01vZGVsKFwi57Sr6Imy5pWw5o2u5pel5b+XXCIpO1xuYzJmLmxvZy5sb2dCdXNpbmVzcyhcIuiTneiJsuS4muWKoeaXpeW/l1wiKTtcbmMyZi5sb2cubG9nVmlldyhcIue7v+iJsuinhuWbvuaXpeW/l1wiKTtcbiAqL1xuY2xhc3MgTG9nZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyB0YWdzOiBudW1iZXIgPSAwO1xuXG4gICAgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFncyA9XG4gICAgICAgICAgICBMb2dUeXBlLk5ldCB8XG4gICAgICAgICAgICBMb2dUeXBlLk1vZGVsIHxcbiAgICAgICAgICAgIExvZ1R5cGUuQnVzaW5lc3MgfFxuICAgICAgICAgICAgTG9nVHlwZS5WaWV3IHxcbiAgICAgICAgICAgIExvZ1R5cGUuQ29uZmlnIHxcbiAgICAgICAgICAgIExvZ1R5cGUuVHJhY2UgfFxuICAgICAgICAgICAgTG9nVHlwZS5TREsgfFxuICAgICAgICAgICAgTG9nVHlwZS5CQVQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIOiuvue9ruaYvuekuueahOaXpeW/l+exu+Wei++8jOm7mOiupOWAvOS4uuS4jeaYvuekuuS7u+S9leexu+Wei+aXpeW/l1xuICAgICAqIEBleGFtcGxlXG4gICAgICAgIGMyZi5sb2cuc2V0VGFncyhMb2dUeXBlLlZpZXd8TG9nVHlwZS5CdXNpbmVzcylcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0VGFncyh0YWc6IExvZ1R5cGUgPSBudWxsISkge1xuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ3MgPSB0YWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorrDlvZXlvIDlp4vorqHml7ZcbiAgICAgKiBAcGFyYW0gZGVzY3JpYmUgIOagh+mimOaPj+i/sFxuICAgICAqIEBleGFtcGxlXG4gICAgICAgIGMyZi5sb2cuc3RhcnQoKTtcbiAgICAgICAgLi4uXG4gICAgICAgIOecgeeVpU7ooYzku6PnoIFcbiAgICAgICAgLi4uXG4gICAgICAgIGMyZi5sb2cuZW5kKCk7XG4gICAgICovXG4gICAgc3RhdGljIHN0YXJ0KGRlc2NyaWJlOiBzdHJpbmcgPSBcIlRpbWVcIik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLnRpbWUoZGVzY3JpYmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJk+WNsOiMg+WbtOWGheaXtumXtOa2iOiAl1xuICAgICAqIEBwYXJhbSBkZXNjcmliZSAg5qCH6aKY5o+P6L+wXG4gICAgICogQGV4YW1wbGVcbiAgICAgICAgYzJmLmxvZy5zdGFydCgpO1xuICAgICAgICAuLi5cbiAgICAgICAg55yB55WlTuihjOS7o+eggVxuICAgICAgICAuLi5cbiAgICAgICAgYzJmLmxvZy5lbmQoKTtcbiAgICAgKi9cbiAgICBzdGF0aWMgZW5kKGRlc2NyaWJlOiBzdHJpbmcgPSBcIlRpbWVcIik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLnRpbWVFbmQoZGVzY3JpYmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJk+WNsOihqOagvFxuICAgICAqIEBwYXJhbSBtc2cgICAgICAg5pel5b+X5raI5oGvXG4gICAgICogQHBhcmFtIGRlc2NyaWJlICDmoIfpopjmj4/ov7BcbiAgICAgKiBAZXhhbXBsZVxuICAgICAgICB2YXIgb2JqZWN0OmFueSA9IHt1aWQ6MTAwMCwgbmFtZTpcImMyZlwifTtcbiAgICAgICAgYzJmLmxvZy50YWJsZShvYmplY3QpO1xuICAgICAqL1xuICAgIHN0YXRpYyB0YWJsZShtc2c6IGFueSwgZGVzY3JpYmU/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbihMb2dUeXBlLlRyYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUudGFibGUobXNnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiZPljbDmoIflh4bml6Xlv5dcbiAgICAgKiBAcGFyYW0gbXNnICAgICAgIOaXpeW/l+a2iOaBr1xuICAgICAqL1xuICAgIHN0YXRpYyB0cmFjZShtc2c6IGFueSkge1xuICAgICAgICAvLyDmoIforrDmsqHmnInmiZPlvIDvvIzkuI3miZPljbDor6Xml6Xlv5dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbihMb2dUeXBlLlRyYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omT5Y2w572R57uc5bGC5pel5b+XXG4gICAgICogQHBhcmFtIG1zZyAgICAgICDml6Xlv5fmtojmga9cbiAgICAgKiBAcGFyYW0gZGVzY3JpYmUgIOagh+mimOaPj+i/sFxuICAgICAqL1xuICAgIHN0YXRpYyBsb2dOZXQobXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3JhbmdlKExvZ1R5cGUuTmV0LCBtc2csIGRlc2NyaWJlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiZPljbDmlbDmja7lsYLml6Xlv5dcbiAgICAgKiBAcGFyYW0gbXNnICAgICAgIOaXpeW/l+a2iOaBr1xuICAgICAqIEBwYXJhbSBkZXNjcmliZSAg5qCH6aKY5o+P6L+wXG4gICAgICovXG4gICAgc3RhdGljIGxvZ01vZGVsKG1zZzogYW55LCBkZXNjcmliZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpb2xldChMb2dUeXBlLk1vZGVsLCBtc2csIGRlc2NyaWJlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiZPljbDkuJrliqHlsYLml6Xlv5dcbiAgICAgKiBAcGFyYW0gbXNnICAgICAgIOaXpeW/l+a2iOaBr1xuICAgICAqIEBwYXJhbSBkZXNjcmliZSAg5qCH6aKY5o+P6L+wXG4gICAgICovXG4gICAgc3RhdGljIGxvZ0J1c2luZXNzKG1zZzogYW55LCBkZXNjcmliZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmJsdWUoTG9nVHlwZS5CdXNpbmVzcywgbXNnLCBkZXNjcmliZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omT5Y2w6KeG5Zu+5pel5b+XXG4gICAgICogQHBhcmFtIG1zZyAgICAgICDml6Xlv5fmtojmga9cbiAgICAgKiBAcGFyYW0gZGVzY3JpYmUgIOagh+mimOaPj+i/sFxuICAgICAqL1xuICAgIHN0YXRpYyBsb2dWaWV3KG1zZzogYW55LCBkZXNjcmliZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmdyZWVuKExvZ1R5cGUuVmlldywgbXNnLCBkZXNjcmliZSk7XG4gICAgfVxuXG4gICAgLyoqIOaJk+WNsOmFjee9ruaXpeW/lyAqL1xuICAgIHN0YXRpYyBsb2dDb25maWcobXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JheShMb2dUeXBlLkNvbmZpZywgbXNnLCBkZXNjcmliZSk7XG4gICAgfVxuXG4gICAgLyoqIOaJk+WNsFNES+aXpeW/lyAqL1xuICAgIHN0YXRpYyBsb2dTREsobXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3lhbihMb2dUeXBlLlNESywgbXNnLCBkZXNjcmliZSk7XG4gICAgfVxuXG4gICAgLyoqIOaJk+WNsOaImOaWl+aXpeW/lyAqL1xuICAgIHN0YXRpYyBsb2dCYXQobXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3lhbihMb2dUeXBlLkJBVCwgbXNnLCBkZXNjcmliZSk7XG4gICAgfVxuXG4gICAgLy8g5qmZ6ImyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3JhbmdlKHRhZzogTG9nVHlwZSwgbXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCBtc2csIFwiY29sb3I6I2VlNzcwMDtcIiwgZGVzY3JpYmUpXG4gICAgfVxuXG4gICAgLy8g57Sr6ImyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlvbGV0KHRhZzogTG9nVHlwZSwgbXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCBtc2csIFwiY29sb3I6VmlvbGV0O1wiLCBkZXNjcmliZSlcbiAgICB9XG5cbiAgICAvLyDok53oibJcbiAgICBwcml2YXRlIHN0YXRpYyBibHVlKHRhZzogTG9nVHlwZSwgbXNnOiBhbnksIGRlc2NyaWJlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCBtc2csIFwiY29sb3I6IzNhNWZjZDtcIiwgZGVzY3JpYmUpXG4gICAgfVxuXG4gICAgLy8g57u/6ImyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ3JlZW4odGFnOiBMb2dUeXBlLCBtc2c6IGFueSwgZGVzY3JpYmU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIG1zZywgXCJjb2xvcjpncmVlbjtcIiwgZGVzY3JpYmUpXG4gICAgfVxuXG4gICAgLy8g54Gw6ImyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ3JheSh0YWc6IExvZ1R5cGUsIG1zZzogYW55LCBkZXNjcmliZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLnByaW50KHRhZywgbXNnLCBcImNvbG9yOmdyYXk7XCIsIGRlc2NyaWJlKVxuICAgIH1cblxuICAgIC8vIOmdkuiJslxuICAgIHByaXZhdGUgc3RhdGljIGN5YW4odGFnOiBMb2dUeXBlLCBtc2c6IGFueSwgZGVzY3JpYmU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIG1zZywgXCJjb2xvcjojMDlDQkQ3O1wiLCBkZXNjcmliZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpc09wZW4odGFnOiBMb2dUeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy50YWdzICYgdGFnKSAhPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi+k+WHuuaXpeW/l1xuICAgICAqIEBwYXJhbSB0YWcgICAgICAg5pel5b+X57G75Z6LXG4gICAgICogQHBhcmFtIG1zZyAgICAgICDml6Xlv5flhoXlrrlcbiAgICAgKiBAcGFyYW0gY29sb3IgICAgIOaXpeW/l+aWh+acrOminOiJslxuICAgICAqIEBwYXJhbSBkZXNjcmliZSAg5pel5b+X5qCH6aKY5o+P6L+wXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJpbnQodGFnOiBMb2dUeXBlLCBtc2c6IGFueSwgY29sb3I6IHN0cmluZywgZGVzY3JpYmU/OiBzdHJpbmcpIHtcbiAgICAgICAgLy8g5qCH6K6w5rKh5pyJ5omT5byA77yM5LiN5omT5Y2w6K+l5pel5b+XXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4odGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhY2tMb2cgPSBjb25zb2xlLmxvZyB8fCBjYy5sb2c7XG4gICAgICAgIHZhciB0eXBlID0gbmFtZXNbdGFnXTtcbiAgICAgICAgaWYgKGRlc2NyaWJlKSB7XG4gICAgICAgICAgICBiYWNrTG9nLmNhbGwobnVsbCwgXCIlYyVzJXMlczpcXG4lcyVvXCIsIGNvbG9yLCB0aGlzLmdldERhdGVTdHJpbmcoKSwgJ1snICsgdHlwZSArICddJywgdGhpcy5zdGFjayg1KSwgZGVzY3JpYmUsIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYWNrTG9nLmNhbGwobnVsbCwgXCIlYyVzJXMlczpcXG4lb1wiLCBjb2xvciwgdGhpcy5nZXREYXRlU3RyaW5nKCksICdbJyArIHR5cGUgKyAnXScsIHRoaXMuc3RhY2soNSksIG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdGFjayhpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgdmFyIGxpbmVzID0gZS5zdGFjayEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIHZhciByZXN1bHQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICAgICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgbGluZSA9IGxpbmUuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgdmFyIGxpbmVCcmVhayA9IGxpbmUuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgaWYgKGxpbmVCcmVhay5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGluZUJyZWFrWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgW2xpbmVCcmVha1swXV06IGxpbmVCcmVha1sxXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgICAgIHZhciBzcGxpdExpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgaWYgKGluZGV4IDwgcmVzdWx0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgYSBpbiByZXN1bHRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0TGlzdCA9IGEuc3BsaXQoXCIuXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0TGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gc3BsaXRMaXN0LmNvbmNhdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHRbaW5kZXhdW2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB2YWx1ZSEubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gdmFsdWUhLmxhc3RJbmRleE9mKFwiLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gLTEgJiYgZW5kID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdmFsdWUhLnN1YnN0cmluZyhzdGFydCArIDEsIGVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBcIltcIiArIGxpc3RbMF0gKyBcIi50c11cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBsaXN0WzBdICsgXCIudHMtPlwiICsgbGlzdFsxXSArIFwiXVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERhdGVTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgc3RyID0gZC5nZXRIb3VycygpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB0aW1lU3RyID0gXCJcIjtcbiAgICAgICAgdGltZVN0ciArPSAoc3RyLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBzdHIgOiBzdHIpICsgXCI6XCI7XG4gICAgICAgIHN0ciA9IGQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRpbWVTdHIgKz0gKHN0ci5sZW5ndGggPT0gMSA/IFwiMFwiICsgc3RyIDogc3RyKSArIFwiOlwiO1xuICAgICAgICBzdHIgPSBkLmdldFNlY29uZHMoKS50b1N0cmluZygpO1xuICAgICAgICB0aW1lU3RyICs9IChzdHIubGVuZ3RoID09IDEgPyBcIjBcIiArIHN0ciA6IHN0cikgKyBcIjpcIjtcbiAgICAgICAgc3RyID0gZC5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAxKSBzdHIgPSBcIjAwXCIgKyBzdHI7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDIpIHN0ciA9IFwiMFwiICsgc3RyO1xuICAgICAgICB0aW1lU3RyICs9IHN0cjtcblxuICAgICAgICB0aW1lU3RyID0gXCJbXCIgKyB0aW1lU3RyICsgXCJdXCI7XG4gICAgICAgIHJldHVybiB0aW1lU3RyO1xuICAgIH1cbn1cblxuLy8vLyBAdHMtaWdub3JlXG5Mb2dnZXIuaW5pdCgpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIElDMkYge1xuICAgICAgICBsb2c6IHR5cGVvZiBMb2dnZXI7XG4gICAgfVxufVxuXG5jMmYubG9nID0gTG9nZ2VyO1xuZXhwb3J0IHsgfTtcbiJdfQ==