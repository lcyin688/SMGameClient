
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/utils/DateUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a198IzsFhK1I/NrrHKaDs/', 'DateUtil');
// c2f-framework/utils/DateUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 日期(时间)工具 */
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["S"] = 0] = "S";
    TimeUnit[TimeUnit["M"] = 1] = "M";
    TimeUnit[TimeUnit["H"] = 2] = "H";
    TimeUnit[TimeUnit["D"] = 3] = "D";
})(TimeUnit || (TimeUnit = {}));
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    /**
     * 格式化日期显示
     * @param format 格式化字符串（例：yyyy-MM-dd hh:mm:ss）
     * @param date   时间对象
     */
    DateUtil.format = function (fmtStr, date) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() // millisecond 
        };
        if (/(y+)/.test(fmtStr)) {
            fmtStr = fmtStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmtStr)) {
                fmtStr = fmtStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
            }
        }
        return fmtStr;
    };
    /**
     * 对一段时间返回格式化时间字符串
     * @param sec 时间s
     * @param format 格式化字符串
     * @example
     * // 当format为string时，会以format中的最大时间单位进行格式化
     * c2f.utils.date.formatTimeString(3601, "%{m}:%{s}"); // 60:1
     * c2f.utils.date.formatTimeString(3601, "%{mm}:%{ss}"); // 60:01
     * c2f.utils.date.formatTimeString(3601, "%{hh}:%{mm}:%{ss}"); // 01:00:01
     *
     * // 当format为object时，会以传入的sec计算最大的时间单位，并选择format对应的字符串进行格式化
     * c2f.utils.date.formatTimeString(100, {
     *     S: "%{s}秒",
     *     M: "%{m}分%{s}秒",
     *     H: "%{h}时%{m}分%{s}秒",
     *     D: "%{d}天%{h}时%{m}分%{s}秒"
     * }); // 1分40秒
     * c2f.utils.date.formatTimeString(100000, {
     *     S: "%{s}秒",
     *     M: "%{m}分%{s}秒",
     *     H: "%{h}时%{m}分%{s}秒",
     *     D: "%{d}天%{h}时%{m}分%{s}秒"
     * }); // 1天3时46分40秒
     */
    DateUtil.formatTimeString = function (sec, format) {
        if (format === void 0) { format = "%{hh}:%{mm}:%{ss}"; }
        var seconds = Math.floor(sec);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(seconds / 3600);
        var days = Math.floor(seconds / 86400);
        var maxUnit = TimeUnit.S;
        var result = "";
        if (typeof format === "string") {
            // 查询格式化字符串中最大的单位
            result = format;
            if (/%\{d+\}/.test(format)) {
                maxUnit = TimeUnit.D;
            }
            else if (/%\{h+\}/.test(format)) {
                maxUnit = TimeUnit.H;
            }
            else if (/%\{m+\}/.test(format)) {
                maxUnit = TimeUnit.M;
            }
        }
        else {
            // 以传入的数值判断最大单位
            if (days > 0) {
                maxUnit = TimeUnit.D;
                result = format.D;
            }
            else if (hours > 0) {
                maxUnit = TimeUnit.H;
                result = format.H;
            }
            else if (minutes > 0) {
                maxUnit = TimeUnit.M;
                result = format.M;
            }
            else {
                maxUnit = TimeUnit.S;
                result = format.S;
            }
        }
        if (maxUnit > TimeUnit.S) {
            seconds %= 60;
        }
        if (maxUnit > TimeUnit.M) {
            minutes %= 60;
        }
        if (maxUnit > TimeUnit.H) {
            hours %= 24;
        }
        var data = {
            dd: days < 10 ? "0" + days : "" + days,
            d: "" + days,
            hh: hours < 10 ? "0" + hours : "" + hours,
            h: "" + hours,
            mm: minutes < 10 ? "0" + minutes : "" + minutes,
            m: "" + minutes,
            ss: seconds < 10 ? "0" + seconds : "" + seconds,
            s: "" + seconds
        };
        result = c2f.utils.str.formatWithObj(result, data);
        return result;
    };
    /**
     * 将一个Date对象或Date时间戳返回格式化日期字符串
     * @param date Date对象或Date时间戳
     * @param format 格式化字符串
     * @param isUTC true:UTC时间 false:本地时间
     * @example
     * c2f.utils.date.formatDateString(0, "%{YYYY}-%{MM}-%{dd} %{hh}:%{mm}:%{ss}", true); // "1970-01-01 00:00:00"
     * c2f.utils.date.formatDateString(0, "%{dd}/%{MM}/%{YY}", true); // "01/01/70"
     */
    DateUtil.formatDateString = function (date, format, isUTC) {
        if (format === void 0) { format = "%{YYYY}-%{MM}-%{dd} %{hh}:%{mm}:%{ss}"; }
        if (isUTC === void 0) { isUTC = false; }
        var src = date instanceof Date ? date : new Date(date);
        var year = isUTC ? src.getUTCFullYear() : src.getFullYear();
        var month = isUTC ? src.getUTCMonth() + 1 : src.getMonth() + 1;
        var days = isUTC ? src.getUTCDate() : src.getDate();
        var hours = isUTC ? src.getUTCHours() : src.getHours();
        var minutes = isUTC ? src.getUTCMinutes() : src.getMinutes();
        var seconds = isUTC ? src.getUTCSeconds() : src.getSeconds();
        var data = {
            YYYY: "" + year,
            YY: year % 100 < 10 ? "0" + year % 100 : "" + year % 100,
            MM: month < 10 ? "0" + month : "" + month,
            M: "" + month,
            dd: days < 10 ? "0" + days : "" + days,
            d: "" + days,
            hh: hours < 10 ? "0" + hours : "" + hours,
            h: "" + hours,
            mm: minutes < 10 ? "0" + minutes : "" + minutes,
            m: "" + minutes,
            ss: seconds < 10 ? "0" + seconds : "" + seconds,
            s: "" + seconds
        };
        var result = c2f.utils.str.formatWithObj(format, data);
        return result;
    };
    /** 获得当前时间戳 */
    DateUtil.getLocalTick = function () {
        return Math.floor(new Date().getTime() / 1000);
    };
    /** 判断2个时间戳是否是同一天 */
    DateUtil.isSameDay = function (ts1, ts2) {
        var isSame = false;
        if (ts1 != null && ts2 != null) {
            var time_a = moment(ts1 * 1000).format("YYYYMMDD");
            var time_b = moment(ts2 * 1000).format("YYYYMMDD");
            isSame = time_a == time_b;
        }
        return isSame;
    };
    /** 判断2个时间戳是否是同一周
     * ts1 现在的
     * ts2 之前的
    */
    DateUtil.isSameWeek = function (ts1, ts2) {
        var isSame = false;
        if (ts1 != null && ts2 != null) {
            var secondsDiff = Math.abs(ts2 - ts1);
            if (secondsDiff < 604800) { //7天内
                var date1 = new Date(ts1 * 1000);
                var date2 = new Date(ts2 * 1000);
                var day1 = date1.getDay();
                var day2 = date2.getDay();
                //周末是0 单独处理
                if (day1 == 0) {
                    day1 = 7;
                }
                if (day2 == 0) {
                    day2 = 7;
                }
                //还需要每周1重置 比如 一个是周2一个周末
                //现在的礼拜几 一定要大于之前的礼拜
                if (day1 >= day2) {
                    isSame = true;
                }
            }
        }
        return isSame;
    };
    /** 是否为是今天 */
    DateUtil.isToday = function (ts) {
        var svrTime = this.getSerVerTime();
        return this.isSameDay(ts, Math.floor(svrTime * 1000));
    };
    /** 设置默认时区 */
    DateUtil.setDefTimeZone = function (zone) {
        if (zone != null && zone >= -12 && zone <= 12) {
            this.timeZone = zone;
            var name = "Etc/GMT";
            if (zone >= 0) {
                name += "+";
            }
            name += zone;
            moment.tz.setDefault(name);
        }
        else {
            cc.log("修改时区错误 ==>" + zone);
        }
    };
    /**
     * 获取毫秒级服务器是时间
     */
    DateUtil.getSerVerTime = function () {
        // let serverTime = szg.player.time.getServerTs() * 1000;
        var serverTime = c2f.utils.date.getLocalTick();
        return serverTime;
    };
    ;
    /**
     * 获取某时间0时时间戳
     */
    DateUtil.getDayStartTS = function (ts) {
        //转换成毫秒级
        var time = ts * 1000;
        var startTime = moment(time).startOf("day").format("x");
        return Math.floor(startTime / 1000);
    };
    /**
     * 获取当天24时时间戳
     */
    DateUtil.getTodayEndTS = function () {
        var serverTime = this.getSerVerTime();
        var endTime = moment(serverTime).endOf("day").format("x");
        return Math.floor(endTime / 1000);
    };
    /**
     * 获取当天0时时间戳
     */
    DateUtil.getTodayStartTS = function () {
        var serverTime = this.getSerVerTime();
        var startTime = moment(serverTime).startOf("day").format("x");
        return Math.floor(startTime / 1000);
    };
    /**
     * 获取当天剩余时长
     */
    DateUtil.getTodayRestDur = function () {
        var serverTime = this.getSerVerTime();
        var endTime = moment(serverTime).endOf("day").format("x");
        var time = (endTime - serverTime) >= 0 ? endTime - serverTime : 0;
        return Math.floor(time / 1000);
    };
    /**
     * 获取当天已过时长
     */
    DateUtil.getTodayPassDur = function () {
        var serverTime = this.getSerVerTime();
        var startTime = moment(serverTime).startOf("day").format("x");
        var time = (serverTime - startTime) >= 0 ? serverTime - startTime : 0;
        return Math.floor(time / 1000);
    };
    /**
     * 获取今天按秒偏移后的时间戳
     */
    DateUtil.getTodayTsByOffset = function (offSecond) {
        var startTime = this.getTodayStartTS();
        var dstTs = startTime + offSecond;
        return dstTs;
    };
    /**
     * 获取格式化时间
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     */
    DateUtil.formatServerTime = function (fmtStr) {
        if (fmtStr === void 0) { fmtStr = "YYYY-MM-DD HH:mm:ss"; }
        var serverTime = this.getSerVerTime();
        var time = moment(serverTime).format(fmtStr);
        return time;
    };
    /**
     * 获取添加了时区的格式时间
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     */
    DateUtil.getDateStrWithZone = function (fmtStr) {
        if (fmtStr === void 0) { fmtStr = "YYYY/MM/DD HH:mm:ss"; }
        var time = this.formatServerTime(fmtStr);
        if (this.timeZone >= 0) {
            time += " GMT(+" + this.timeZone + ")";
        }
        else {
            time += " GMT(" + this.timeZone + ")";
        }
        return time;
    };
    /**
     * 获取指定时间，指定格式的时间字符串
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     * @time 时间 = 时间戳 x 1000
     * eg. c2f.utils.date.formatStringByTime("YYYY/MM/DD", ts * 1000);
     * eg. c2f.utils.date.formatStringByTime("HH:mm:ss", data.Ts * 1000);
     */
    DateUtil.formatStringByTime = function (fmtStr, time) {
        var forTime = moment(time).format(fmtStr);
        return forTime;
    };
    /**
     * 根据时间字符串获取时间戳
     * eg. c2f.utils.date.getTimeBySting("2023-10-11 15:35:59");
     */
    DateUtil.getTsBySting = function (timeString) {
        var time = moment(timeString).format("X");
        return Math.floor(time / 1000);
    };
    /**
     * 获取月份
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getMonthForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var month = moment(timeValue).format("M");
        return month;
    };
    /**
     * 获取日期
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getDayForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var day = moment(timeValue).format("D");
        return day;
    };
    /**
     * 获取小时
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getHourForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var hour = moment(timeValue).format("HH");
        return hour;
    };
    /**
     * 获取分钟
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getMinuteForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var minute = moment(timeValue).format("mm");
        return minute;
    };
    /**
     * 获取秒
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getSecondForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var second = moment(timeValue).format("ss");
        return second;
    };
    /**
     * 获取年
     * @time 时间 = 时间戳 x 1000
     */
    DateUtil.getYearForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var year = moment(timeValue).format("YYYY");
        return year;
    };
    /**
     * 获取周几
     */
    DateUtil.getWeekForTime = function (time) {
        var timeValue = time || this.getSerVerTime();
        var week = moment(timeValue).format("E");
        return week;
    };
    /**
     * 获取时间和服务器时间的时间差
     * @time 时间 = 时间戳 x 1000
     * eg. c2f.utils.date.getOffsetByType("d", ts * 1000)
     */
    DateUtil.getOffsetByType = function (type, time) {
        var serverTime = this.getSerVerTime();
        switch (type) {
            case 's':
                return parseInt("" + (time - serverTime) / 1000);
            case 'n':
                return parseInt("" + (time - serverTime) / 60000);
            case 'h':
                return parseInt("" + (time - serverTime) / 3600000);
            case 'd':
                return parseInt("" + (time - serverTime) / 86400000);
            case 'w':
                return parseInt("" + (time - serverTime) / (86400000 * 7));
            case 'm':
                return this.getOffsetByType("y", time) * 12 + this.getMonthForTime(time) - this.getMonthForTime();
            case 'y':
                return this.getYearForTime(time) - this.getYearForTime();
        }
    };
    /**
     * 与服务器时间间隔几天
     * @param 1、2023/10/11   => string
     *        2、时间戳或time  => number
     *        3、20231211     => number
     */
    DateUtil.getOffsetDays = function (param) {
        var time = 0;
        if (typeof param == 'string') {
            if (param.length > 10) {
                param = param.substring(0, 10);
            }
            time = moment(param + ' 00:00:00').format("x");
        }
        else if (param > 100000000) {
            var numBitLen = ('' + param).length;
            if (numBitLen == 10) {
                time = moment(param * 1000).format("x");
            }
            else {
                time = moment(param).format("x");
            }
        }
        else {
            var year = parseInt("" + param / 10000);
            var month = parseInt("" + (param % 10000) / 100);
            var day = param % 100;
            time = moment([year, month - 1, day]).format("x");
        }
        var serverTime = this.getSerVerTime();
        var secOneDay = 86400;
        var offset = (serverTime - time) / 1000;
        var passDay = Math.floor(offset / secOneDay);
        var restSec = offset % secOneDay;
        if (restSec > 0) {
            var startTs = this.getTodayStartTS();
            var targeTs = time / 1000 + passDay * secOneDay;
            if (targeTs < startTs) {
                passDay = passDay + 1;
            }
        }
        return passDay;
    };
    /** 到下一个周几还有多少秒 */
    DateUtil.getSecondToNextWeek = function (week) {
        var dur = this.getTodayRestDur();
        var secOneDay = 86400;
        var curWeek = this.getWeekForTime();
        var offset = week - curWeek - 1;
        if (offset >= 0) {
            dur += offset * secOneDay;
        }
        else {
            dur += (7 + offset) * secOneDay;
        }
        return dur;
    };
    /** 到本周几的指定时间还有多少秒 */
    DateUtil.getSecondToThisWeekTime = function (week, time) {
        var dur = this.getTodayRestDur();
        var secOneDay = 86400;
        var curWeek = this.getWeekForTime();
        var offset = week - curWeek - 1;
        // if (offset >= 0) {
        dur += offset * secOneDay;
        // } else {
        //     dur += (7 + offset) * secOneDay;
        // }
        var strArr = time.split(":");
        if (strArr && strArr.length > 0) {
            var hour = parseInt(strArr[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArr.length > 1) {
                var min = parseInt(strArr[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArr.length > 2) {
                    var sen = parseInt(strArr[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }
        return dur;
    };
    /**通过本周相差时间  */
    DateUtil.getSecondToNextWeekTimeByDisSec = function (sec) {
        var secTemp = sec;
        if (sec < 0) {
            secTemp = 7 * 86400 + sec;
        }
        return secTemp;
    };
    /** 到下月(1号)还有多少秒 */
    DateUtil.getTimeDifferenceToNextMonthFirstDay = function () {
        var serverTime = this.getSerVerTime();
        var dur = this.getTodayRestDur();
        var nextMonthFirstDay = this.getNextMonthFirstDay();
        // 计算时间差（毫秒）  
        var timeDiff = Math.abs(nextMonthFirstDay.getTime() - serverTime);
        var timeSceond = Math.floor(timeDiff / 1000);
        return timeSceond;
    };
    DateUtil.getNextMonthFirstDay = function () {
        var serverTime = this.getSerVerTime();
        var now = new Date(serverTime);
        var nextMonth = now.getMonth() + 1 === 12 ? 0 : now.getMonth() + 1;
        var nextYear = nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
        return new Date(nextYear, nextMonth, 1);
    };
    /**hh:mm:ss  获取时间戳*/
    DateUtil.getSecondByTimeStr = function (time) {
        var sec = this.getTodayStartTS();
        var strArr = time.split(":");
        if (strArr && strArr.length > 0) {
            var hour = parseInt(strArr[0]);
            if (hour) {
                sec += hour * 3600;
            }
            if (strArr.length > 1) {
                var min = parseInt(strArr[1]);
                if (min) {
                    sec += min * 60;
                }
                if (strArr.length > 2) {
                    var sen = parseInt(strArr[2]);
                    if (sen) {
                        sec += sen;
                    }
                }
            }
        }
        return sec;
    };
    /** 到下一个x整点还有多少秒 */
    DateUtil.getSecondToNextHour = function (hour) {
        var svrTime = this.getSerVerTime();
        var endTime = moment(svrTime).endOf("hour").format("x");
        var dur = Math.floor((endTime - svrTime) / 1000);
        var secOneHour = 3600;
        var curHour = this.getHourForTime();
        var offset = hour - curHour - 1;
        if (offset >= 0) {
            dur += offset * secOneHour;
        }
        else {
            dur += (24 + offset) * secOneHour;
        }
        return dur;
    };
    /** 获取倒计时到天
 *  @description 一天以上倒计时到几天  一天以内倒计时到小时   一小时以内倒计时到分钟
 */
    DateUtil.getDayCountDownCommon = function (num) {
        var sec = c2f.utils.date.getSecondToNextWeek(1);
        if (sec > 86400) {
            var days = Math.floor(sec / 86400);
            return "" + days + c2f.language.words(2504);
        }
        else if (sec > 3600) {
            var hours = Math.floor(sec / 3600);
            return "" + hours + c2f.language.words(2505);
        }
        else if (sec > 60) {
            var minute = Math.floor(sec / 60);
            return "" + minute + c2f.language.words(2506);
        }
        else {
            return "" + sec + c2f.language.words(2507);
        }
    };
    /**
     * 生成指定范围的随机整数
     * @param num   秒
     * @param type  类型
     */
    DateUtil.getHoursBySceond = function (num, type) {
        if (type === void 0) { type = 1; }
        switch (type) {
            case 1:
                return Math.ceil(num / 3600);
            case 2:
                return Math.floor(num / 3600);
        }
        return 0;
    };
    /**
     * 获取上次下线的时间文本
     * 在线 显示绿色 文本在线
     * 5分钟之内算在线
     * 24小时以内 显示XX小时前
     * 大于7天内 显示7天前
     * num 上一次下线的时间戳
     */
    DateUtil.getLastOnLineStr = function (num) {
        var serverTime = this.getSerVerTime();
        var data = { str: "", color: "#5D4F49" };
        if (num == -1) {
            data.str = c2f.language.words(20076);
            data.color = "#547e49";
            return data;
        }
        var seconds = serverTime - num;
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(seconds / 3600);
        var days = Math.floor(seconds / 86400);
        if (minutes < 5) {
            data.str = c2f.language.words(20076);
            data.color = "#547e49";
        }
        else if (minutes < 60) {
            data.str = c2f.language.words(20103).format(minutes);
        }
        else if (hours < 24) {
            data.str = c2f.language.words(20077).format(hours);
        }
        else if (days < 7) {
            data.str = c2f.language.words(20078).format(days);
        }
        else {
            data.str = c2f.language.words(20078).format(7);
        }
        return data;
    };
    /**
     * 上一次上线几天前
     */
    DateUtil.getLastTimeDay = function (num) {
        var serverTime = this.getSerVerTime();
        if (num = -1) {
            return 0;
        }
        var seconds = serverTime - num;
        var days = Math.floor(seconds / 86400);
        return days;
    };
    /** 到下周几的指定时间还有多少秒 */
    DateUtil.getSecondToNextWeekTime = function (week, time) {
        var dur = this.getTodayRestDur();
        var secOneDay = 86400;
        var curWeek = this.getWeekForTime();
        var offset = week - curWeek - 1;
        if (offset >= 0) {
            dur += offset * secOneDay;
        }
        else {
            dur += (7 + offset) * secOneDay;
        }
        var strArr = time.split(":");
        if (strArr && strArr.length > 0) {
            var hour = parseInt(strArr[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArr.length > 1) {
                var min = parseInt(strArr[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArr.length > 2) {
                    var sen = parseInt(strArr[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }
        return dur;
    };
    /**周几 多少秒 */
    DateUtil.getWeekTimeSecondByTimeStr = function (str) {
        var strArr = str.split("/");
        var dur = this.getWeekTimeSecondByTime(parseInt(strArr[0]), strArr[1]);
        return dur;
    };
    /**
     * 通过09:00获取秒
     *
     */
    DateUtil.getTimeSecondByTime = function (time) {
        var dur = 0;
        var strArrTwo = time.split(":");
        if (strArrTwo && strArrTwo.length > 0) {
            var hour = parseInt(strArrTwo[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArrTwo.length > 1) {
                var min = parseInt(strArrTwo[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArrTwo.length > 2) {
                    var sen = parseInt(strArrTwo[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }
        return dur;
    };
    /**周几 多少秒 */
    DateUtil.getWeekTimeSecondByTime = function (weekIndex, time) {
        var secOneDay = 86400;
        var dur = (weekIndex - 1) * secOneDay;
        dur = dur + this.getTimeSecondByTime(time);
        return dur;
    };
    /**获取服务器 本周周一零点时间 */
    DateUtil.getServerCurWeekStartSecond = function () {
        var curTs = this.getSerVerTime();
        var ret = this.getFirstDayOfWeekTimestamp(curTs * 1000) / 1000;
        return ret;
    };
    DateUtil.getFirstDayOfWeekTimestamp = function (timestamp) {
        // 将时间戳转换为 Date 对象  
        var date = new Date(timestamp);
        // 获取当前是星期几（0代表星期日，1代表星期一，...，6代表星期六）  
        var dayOfWeek = date.getDay();
        // 如果今天是星期一，则不需要做任何调整  
        // 否则，需要减去相应的天数以回到上一个星期一  
        var daysToSubtract = (dayOfWeek === 0) ? 6 : dayOfWeek - 1; // 如果星期日是0，则上一个星期一是6天前  
        // 设置日期为上一个星期一的日期，并将时间设置为凌晨0点  
        date.setDate(date.getDate() - daysToSubtract);
        date.setHours(0, 0, 0, 0);
        // 将修改后的 Date 对象转换回时间戳  
        return date.getTime();
    };
    /** 时区 */
    DateUtil.timeZone = undefined;
    return DateUtil;
}());
c2f.utils.date = DateUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3V0aWxzL0RhdGVVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTtBQUNmLElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULGlDQUFDLENBQUE7SUFDRCxpQ0FBQyxDQUFBO0lBQ0QsaUNBQUMsQ0FBQTtJQUNELGlDQUFDLENBQUE7QUFDTCxDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQUVEO0lBQUE7SUFxd0JBLENBQUM7SUFwd0JHOzs7O09BSUc7SUFDSSxlQUFNLEdBQWIsVUFBYyxNQUFjLEVBQUUsSUFBVTtRQUNwQyxJQUFJLENBQUMsR0FBUTtZQUNULElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBcUIsZUFBZTtTQUNsRSxDQUFBO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDOUY7UUFFRCxLQUFLLElB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Q0FBQyxDQUFDLHdCQUF3QjtRQUN0RiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQix3QkFBd0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQXpqQkQsU0FBUztJQUNGLGlCQUFRLEdBQVcsU0FBUyxDQUFDO0lBMmpCeEMsZUFBQztDQXJ3QkQsQUFxd0JDLElBQUE7QUFXRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5pel5pyfKOaXtumXtCnlt6XlhbcgKi9cbmVudW0gVGltZVVuaXQge1xuICAgIFMsXG4gICAgTSxcbiAgICBILFxuICAgIERcbn1cblxuY2xhc3MgRGF0ZVV0aWwge1xuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaXpeacn+aYvuekulxuICAgICAqIEBwYXJhbSBmb3JtYXQg5qC85byP5YyW5a2X56ym5Liy77yI5L6L77yaeXl5eS1NTS1kZCBoaDptbTpzc++8iVxuICAgICAqIEBwYXJhbSBkYXRlICAg5pe26Ze05a+56LGhXG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdChmbXRTdHI6IHN0cmluZywgZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvOiBhbnkgPSB7XG4gICAgICAgICAgICBcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAgICAgIC8vIG1vbnRoIFxuICAgICAgICAgICAgXCJkK1wiOiBkYXRlLmdldERhdGUoKSwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXkgXG4gICAgICAgICAgICBcImgrXCI6IGRhdGUuZ2V0SG91cnMoKSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvdXIgXG4gICAgICAgICAgICBcIm0rXCI6IGRhdGUuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pbnV0ZSBcbiAgICAgICAgICAgIFwicytcIjogZGF0ZS5nZXRTZWNvbmRzKCksICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kIFxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAgICAvLyBxdWFydGVyIFxuICAgICAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgICAgICAgICAvLyBtaWxsaXNlY29uZCBcbiAgICAgICAgfVxuICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm10U3RyKSkge1xuICAgICAgICAgICAgZm10U3RyID0gZm10U3RyLnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdFN0cikpIHtcbiAgICAgICAgICAgICAgICBmbXRTdHIgPSBmbXRTdHIucmVwbGFjZShSZWdFeHAuJDEsIFJlZ0V4cC4kMS5sZW5ndGggPT0gMSA/IG9ba10gOiAoXCIwMFwiICsgb1trXSkuc3Vic3RyaW5nKChcIlwiICsgb1trXSkubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZtdFN0cjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlr7nkuIDmrrXml7bpl7Tov5Tlm57moLzlvI/ljJbml7bpl7TlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gc2VjIOaXtumXtHNcbiAgICAgKiBAcGFyYW0gZm9ybWF0IOagvOW8j+WMluWtl+espuS4slxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8g5b2TZm9ybWF05Li6c3RyaW5n5pe277yM5Lya5LulZm9ybWF05Lit55qE5pyA5aSn5pe26Ze05Y2V5L2N6L+b6KGM5qC85byP5YyWXG4gICAgICogYzJmLnV0aWxzLmRhdGUuZm9ybWF0VGltZVN0cmluZygzNjAxLCBcIiV7bX06JXtzfVwiKTsgLy8gNjA6MVxuICAgICAqIGMyZi51dGlscy5kYXRlLmZvcm1hdFRpbWVTdHJpbmcoMzYwMSwgXCIle21tfTole3NzfVwiKTsgLy8gNjA6MDFcbiAgICAgKiBjMmYudXRpbHMuZGF0ZS5mb3JtYXRUaW1lU3RyaW5nKDM2MDEsIFwiJXtoaH06JXttbX06JXtzc31cIik7IC8vIDAxOjAwOjAxXG4gICAgICogXG4gICAgICogLy8g5b2TZm9ybWF05Li6b2JqZWN05pe277yM5Lya5Lul5Lyg5YWl55qEc2Vj6K6h566X5pyA5aSn55qE5pe26Ze05Y2V5L2N77yM5bm26YCJ5oupZm9ybWF05a+55bqU55qE5a2X56ym5Liy6L+b6KGM5qC85byP5YyWXG4gICAgICogYzJmLnV0aWxzLmRhdGUuZm9ybWF0VGltZVN0cmluZygxMDAsIHtcbiAgICAgKiAgICAgUzogXCIle3N956eSXCIsXG4gICAgICogICAgIE06IFwiJXttfeWIhiV7c33np5JcIixcbiAgICAgKiAgICAgSDogXCIle2h95pe2JXttfeWIhiV7c33np5JcIixcbiAgICAgKiAgICAgRDogXCIle2R95aSpJXtofeaXtiV7bX3liIYle3N956eSXCJcbiAgICAgKiB9KTsgLy8gMeWIhjQw56eSXG4gICAgICogYzJmLnV0aWxzLmRhdGUuZm9ybWF0VGltZVN0cmluZygxMDAwMDAsIHtcbiAgICAgKiAgICAgUzogXCIle3N956eSXCIsXG4gICAgICogICAgIE06IFwiJXttfeWIhiV7c33np5JcIixcbiAgICAgKiAgICAgSDogXCIle2h95pe2JXttfeWIhiV7c33np5JcIixcbiAgICAgKiAgICAgRDogXCIle2R95aSpJXtofeaXtiV7bX3liIYle3N956eSXCJcbiAgICAgKiB9KTsgLy8gMeWkqTPml7Y0NuWIhjQw56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXRUaW1lU3RyaW5nKHNlYzogbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyB8IHsgXCJTXCI6IHN0cmluZzsgXCJNXCI6IHN0cmluZzsgXCJIXCI6IHN0cmluZzsgXCJEXCI6IHN0cmluZyB9ID0gXCIle2hofTole21tfTole3NzfVwiKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHNlY29uZHM6IG51bWJlciA9IE1hdGguZmxvb3Ioc2VjKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICAgICAgbGV0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDg2NDAwKTtcblxuICAgICAgICBsZXQgbWF4VW5pdDogVGltZVVuaXQgPSBUaW1lVW5pdC5TO1xuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyDmn6Xor6LmoLzlvI/ljJblrZfnrKbkuLLkuK3mnIDlpKfnmoTljZXkvY1cbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGlmICgvJVxce2QrXFx9Ly50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICBtYXhVbml0ID0gVGltZVVuaXQuRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoLyVcXHtoK1xcfS8udGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgbWF4VW5pdCA9IFRpbWVVbml0Lkg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC8lXFx7bStcXH0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIG1heFVuaXQgPSBUaW1lVW5pdC5NO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5Lul5Lyg5YWl55qE5pWw5YC85Yik5pat5pyA5aSn5Y2V5L2NXG4gICAgICAgICAgICBpZiAoZGF5cyA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXhVbml0ID0gVGltZVVuaXQuRDtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmb3JtYXQuRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4VW5pdCA9IFRpbWVVbml0Lkg7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0Lkg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4VW5pdCA9IFRpbWVVbml0Lk07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0Lk07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heFVuaXQgPSBUaW1lVW5pdC5TO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdC5TO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1heFVuaXQgPiBUaW1lVW5pdC5TKSB7XG4gICAgICAgICAgICBzZWNvbmRzICU9IDYwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhVbml0ID4gVGltZVVuaXQuTSkge1xuICAgICAgICAgICAgbWludXRlcyAlPSA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4VW5pdCA+IFRpbWVVbml0LkgpIHtcbiAgICAgICAgICAgIGhvdXJzICU9IDI0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBkZDogZGF5cyA8IDEwID8gYDAke2RheXN9YCA6IGAke2RheXN9YCxcbiAgICAgICAgICAgIGQ6IGAke2RheXN9YCxcbiAgICAgICAgICAgIGhoOiBob3VycyA8IDEwID8gYDAke2hvdXJzfWAgOiBgJHtob3Vyc31gLFxuICAgICAgICAgICAgaDogYCR7aG91cnN9YCxcbiAgICAgICAgICAgIG1tOiBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogYCR7bWludXRlc31gLFxuICAgICAgICAgICAgbTogYCR7bWludXRlc31gLFxuICAgICAgICAgICAgc3M6IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBgJHtzZWNvbmRzfWAsXG4gICAgICAgICAgICBzOiBgJHtzZWNvbmRzfWBcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0ID0gYzJmLnV0aWxzLnN0ci5mb3JtYXRXaXRoT2JqKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5LiA5LiqRGF0ZeWvueixoeaIlkRhdGXml7bpl7TmiLPov5Tlm57moLzlvI/ljJbml6XmnJ/lrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gZGF0ZSBEYXRl5a+56LGh5oiWRGF0ZeaXtumXtOaIs1xuICAgICAqIEBwYXJhbSBmb3JtYXQg5qC85byP5YyW5a2X56ym5LiyXG4gICAgICogQHBhcmFtIGlzVVRDIHRydWU6VVRD5pe26Ze0IGZhbHNlOuacrOWcsOaXtumXtFxuICAgICAqIEBleGFtcGxlXG4gICAgICogYzJmLnV0aWxzLmRhdGUuZm9ybWF0RGF0ZVN0cmluZygwLCBcIiV7WVlZWX0tJXtNTX0tJXtkZH0gJXtoaH06JXttbX06JXtzc31cIiwgdHJ1ZSk7IC8vIFwiMTk3MC0wMS0wMSAwMDowMDowMFwiXG4gICAgICogYzJmLnV0aWxzLmRhdGUuZm9ybWF0RGF0ZVN0cmluZygwLCBcIiV7ZGR9LyV7TU19LyV7WVl9XCIsIHRydWUpOyAvLyBcIjAxLzAxLzcwXCJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdERhdGVTdHJpbmcoZGF0ZTogbnVtYmVyIHwgRGF0ZSwgZm9ybWF0OiBzdHJpbmcgPSBcIiV7WVlZWX0tJXtNTX0tJXtkZH0gJXtoaH06JXttbX06JXtzc31cIiwgaXNVVEM6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzcmMgPSBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUgOiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgbGV0IHllYXIgPSBpc1VUQyA/IHNyYy5nZXRVVENGdWxsWWVhcigpIDogc3JjLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtb250aCA9IGlzVVRDID8gc3JjLmdldFVUQ01vbnRoKCkgKyAxIDogc3JjLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgZGF5cyA9IGlzVVRDID8gc3JjLmdldFVUQ0RhdGUoKSA6IHNyYy5nZXREYXRlKCk7XG4gICAgICAgIGxldCBob3VycyA9IGlzVVRDID8gc3JjLmdldFVUQ0hvdXJzKCkgOiBzcmMuZ2V0SG91cnMoKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBpc1VUQyA/IHNyYy5nZXRVVENNaW51dGVzKCkgOiBzcmMuZ2V0TWludXRlcygpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IGlzVVRDID8gc3JjLmdldFVUQ1NlY29uZHMoKSA6IHNyYy5nZXRTZWNvbmRzKCk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBZWVlZOiBgJHt5ZWFyfWAsXG4gICAgICAgICAgICBZWTogeWVhciAlIDEwMCA8IDEwID8gYDAke3llYXIgJSAxMDB9YCA6IGAke3llYXIgJSAxMDB9YCxcbiAgICAgICAgICAgIE1NOiBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gLFxuICAgICAgICAgICAgTTogYCR7bW9udGh9YCxcbiAgICAgICAgICAgIGRkOiBkYXlzIDwgMTAgPyBgMCR7ZGF5c31gIDogYCR7ZGF5c31gLFxuICAgICAgICAgICAgZDogYCR7ZGF5c31gLFxuICAgICAgICAgICAgaGg6IGhvdXJzIDwgMTAgPyBgMCR7aG91cnN9YCA6IGAke2hvdXJzfWAsXG4gICAgICAgICAgICBoOiBgJHtob3Vyc31gLFxuICAgICAgICAgICAgbW06IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBgJHttaW51dGVzfWAsXG4gICAgICAgICAgICBtOiBgJHttaW51dGVzfWAsXG4gICAgICAgICAgICBzczogc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IGAke3NlY29uZHN9YCxcbiAgICAgICAgICAgIHM6IGAke3NlY29uZHN9YFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBjMmYudXRpbHMuc3RyLmZvcm1hdFdpdGhPYmooZm9ybWF0LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiog6I635b6X5b2T5YmN5pe26Ze05oizICovXG4gICAgc3RhdGljIGdldExvY2FsVGljaygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICB9XG5cbiAgICAvKiog5Yik5patMuS4quaXtumXtOaIs+aYr+WQpuaYr+WQjOS4gOWkqSAqL1xuICAgIHN0YXRpYyBpc1NhbWVEYXkodHMxOiBudW1iZXIsIHRzMjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpc1NhbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHRzMSAhPSBudWxsICYmIHRzMiAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZV9hID0gbW9tZW50KHRzMSAqIDEwMDApLmZvcm1hdChcIllZWVlNTUREXCIpO1xuICAgICAgICAgICAgbGV0IHRpbWVfYiA9IG1vbWVudCh0czIgKiAxMDAwKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcbiAgICAgICAgICAgIGlzU2FtZSA9IHRpbWVfYSA9PSB0aW1lX2JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNTYW1lO1xuICAgIH1cblxuICAgIC8qKiDliKTmlq0y5Liq5pe26Ze05oiz5piv5ZCm5piv5ZCM5LiA5ZGoIFxuICAgICAqIHRzMSDnjrDlnKjnmoRcbiAgICAgKiB0czIg5LmL5YmN55qEXG4gICAgKi9cbiAgICBzdGF0aWMgaXNTYW1lV2Vlayh0czE6IG51bWJlciwgdHMyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGlzU2FtZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAodHMxICE9IG51bGwgJiYgdHMyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBzZWNvbmRzRGlmZiA9IE1hdGguYWJzKHRzMiAtIHRzMSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kc0RpZmYgPCA2MDQ4MDApIHsvLzflpKnlhoVcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZSh0czEgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZSh0czIgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MSA9IGRhdGUxLmdldERheSgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkyID0gZGF0ZTIuZ2V0RGF5KCk7XG4gICAgICAgICAgICAgICAgLy/lkajmnKvmmK8wIOWNleeLrOWkhOeQhlxuICAgICAgICAgICAgICAgIGlmIChkYXkxID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5MSA9IDdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRheTIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkyID0gN1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+i/mOmcgOimgeavj+WRqDHph43nva4g5q+U5aaCIOS4gOS4quaYr+WRqDLkuIDkuKrlkajmnKtcbiAgICAgICAgICAgICAgICAvL+eOsOWcqOeahOekvOaLnOWHoCDkuIDlrpropoHlpKfkuo7kuYvliY3nmoTnpLzmi5xcbiAgICAgICAgICAgICAgICBpZiAoZGF5MSA+PSBkYXkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2FtZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU2FtZTtcbiAgICB9XG5cblxuICAgIC8qKiDmmK/lkKbkuLrmmK/ku4rlpKkgKi9cbiAgICBzdGF0aWMgaXNUb2RheSh0czogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzdnJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZURheSh0cywgTWF0aC5mbG9vcihzdnJUaW1lICogMTAwMCkpO1xuICAgIH1cblxuICAgIC8qKiDml7bljLogKi9cbiAgICBzdGF0aWMgdGltZVpvbmU6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgICAvKiog6K6+572u6buY6K6k5pe25Yy6ICovXG4gICAgc3RhdGljIHNldERlZlRpbWVab25lKHpvbmU6IG51bWJlcikge1xuICAgICAgICBpZiAoem9uZSAhPSBudWxsICYmIHpvbmUgPj0gLTEyICYmIHpvbmUgPD0gMTIpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVpvbmUgPSB6b25lO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkV0Yy9HTVRcIjtcbiAgICAgICAgICAgIGlmICh6b25lID49IDApIHtcbiAgICAgICAgICAgICAgICBuYW1lICs9IFwiK1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYW1lICs9IHpvbmU7XG4gICAgICAgICAgICBtb21lbnQudHouc2V0RGVmYXVsdChuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuS/ruaUueaXtuWMuumUmeivryA9PT5cIiArIHpvbmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5q+r56eS57qn5pyN5Yqh5Zmo5piv5pe26Ze0XG4gICAgICovXG4gICAgc3RhdGljIGdldFNlclZlclRpbWUoKSB7XG4gICAgICAgIC8vIGxldCBzZXJ2ZXJUaW1lID0gc3pnLnBsYXllci50aW1lLmdldFNlcnZlclRzKCkgKiAxMDAwO1xuICAgICAgICBsZXQgc2VydmVyVGltZSA9IGMyZi51dGlscy5kYXRlLmdldExvY2FsVGljaygpO1xuICAgICAgICByZXR1cm4gc2VydmVyVGltZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmn5Dml7bpl7Qw5pe25pe26Ze05oizXG4gICAgICovXG4gICAgc3RhdGljIGdldERheVN0YXJ0VFModHM6IG51bWJlcikge1xuICAgICAgICAvL+i9rOaNouaIkOavq+enkue6p1xuICAgICAgICBsZXQgdGltZSA9IHRzICogMTAwMDtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudCh0aW1lKS5zdGFydE9mKFwiZGF5XCIpLmZvcm1hdChcInhcIik7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHN0YXJ0VGltZSAvIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluW9k+WkqTI05pe25pe26Ze05oizXG4gICAgICovXG4gICAgc3RhdGljIGdldFRvZGF5RW5kVFMoKSB7XG4gICAgICAgIGxldCBzZXJ2ZXJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KHNlcnZlclRpbWUpLmVuZE9mKFwiZGF5XCIpLmZvcm1hdChcInhcIik7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGVuZFRpbWUgLyAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPlpKkw5pe25pe26Ze05oizXG4gICAgICovXG4gICAgc3RhdGljIGdldFRvZGF5U3RhcnRUUygpIHtcbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudChzZXJ2ZXJUaW1lKS5zdGFydE9mKFwiZGF5XCIpLmZvcm1hdChcInhcIik7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHN0YXJ0VGltZSAvIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluW9k+WkqeWJqeS9meaXtumVv1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUb2RheVJlc3REdXIoKSB7XG4gICAgICAgIGxldCBzZXJ2ZXJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KHNlcnZlclRpbWUpLmVuZE9mKFwiZGF5XCIpLmZvcm1hdChcInhcIik7XG4gICAgICAgIGxldCB0aW1lID0gKGVuZFRpbWUgLSBzZXJ2ZXJUaW1lKSA+PSAwID8gZW5kVGltZSAtIHNlcnZlclRpbWUgOiAwO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lIC8gMTAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5aSp5bey6L+H5pe26ZW/XG4gICAgICovXG4gICAgc3RhdGljIGdldFRvZGF5UGFzc0R1cigpIHtcbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudChzZXJ2ZXJUaW1lKS5zdGFydE9mKFwiZGF5XCIpLmZvcm1hdChcInhcIik7XG4gICAgICAgIGxldCB0aW1lID0gKHNlcnZlclRpbWUgLSBzdGFydFRpbWUpID49IDAgPyBzZXJ2ZXJUaW1lIC0gc3RhcnRUaW1lIDogMDtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGltZSAvIDEwMDApO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiDojrflj5bku4rlpKnmjInnp5LlgY/np7vlkI7nmoTml7bpl7TmiLMgXG4gICAgICovXG4gICAgc3RhdGljIGdldFRvZGF5VHNCeU9mZnNldChvZmZTZWNvbmQ6IG51bWJlcikge1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gdGhpcy5nZXRUb2RheVN0YXJ0VFMoKTtcbiAgICAgICAgbGV0IGRzdFRzID0gc3RhcnRUaW1lICsgb2ZmU2Vjb25kO1xuICAgICAgICByZXR1cm4gZHN0VHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5qC85byP5YyW5pe26Ze0XG4gICAgICogQGZtdFN0ciBcIllZWVkvTU0vREQgSEg6bW06c3NcIlxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRTZXJ2ZXJUaW1lKGZtdFN0cjogc3RyaW5nID0gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpIHtcbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHRpbWUgPSBtb21lbnQoc2VydmVyVGltZSkuZm9ybWF0KGZtdFN0cik7XG4gICAgICAgIHJldHVybiB0aW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlua3u+WKoOS6huaXtuWMuueahOagvOW8j+aXtumXtFxuICAgICAqIEBmbXRTdHIgXCJZWVlZL01NL0REIEhIOm1tOnNzXCJcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RGF0ZVN0cldpdGhab25lKGZtdFN0cjogc3RyaW5nID0gXCJZWVlZL01NL0REIEhIOm1tOnNzXCIpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmZvcm1hdFNlcnZlclRpbWUoZm10U3RyKTtcbiAgICAgICAgaWYgKHRoaXMudGltZVpvbmUgPj0gMCkge1xuICAgICAgICAgICAgdGltZSArPSBcIiBHTVQoK1wiICsgdGhpcy50aW1lWm9uZSArIFwiKVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZSArPSBcIiBHTVQoXCIgKyB0aGlzLnRpbWVab25lICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oyH5a6a5pe26Ze077yM5oyH5a6a5qC85byP55qE5pe26Ze05a2X56ym5LiyXG4gICAgICogQGZtdFN0ciBcIllZWVkvTU0vREQgSEg6bW06c3NcIlxuICAgICAqIEB0aW1lIOaXtumXtCA9IOaXtumXtOaIsyB4IDEwMDBcbiAgICAgKiBlZy4gYzJmLnV0aWxzLmRhdGUuZm9ybWF0U3RyaW5nQnlUaW1lKFwiWVlZWS9NTS9ERFwiLCB0cyAqIDEwMDApO1xuICAgICAqIGVnLiBjMmYudXRpbHMuZGF0ZS5mb3JtYXRTdHJpbmdCeVRpbWUoXCJISDptbTpzc1wiLCBkYXRhLlRzICogMTAwMCk7XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdFN0cmluZ0J5VGltZShmbXRTdHI6IHN0cmluZywgdGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBmb3JUaW1lID0gbW9tZW50KHRpbWUpLmZvcm1hdChmbXRTdHIpO1xuICAgICAgICByZXR1cm4gZm9yVGltZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7ml7bpl7TlrZfnrKbkuLLojrflj5bml7bpl7TmiLNcbiAgICAgKiBlZy4gYzJmLnV0aWxzLmRhdGUuZ2V0VGltZUJ5U3RpbmcoXCIyMDIzLTEwLTExIDE1OjM1OjU5XCIpO1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUc0J5U3RpbmcodGltZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGxldCB0aW1lID0gbW9tZW50KHRpbWVTdHJpbmcpLmZvcm1hdChcIlhcIik7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWUgLyAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmnIjku71cbiAgICAgKiBAdGltZSDml7bpl7QgPSDml7bpl7TmiLMgeCAxMDAwXG4gICAgICovXG4gICAgc3RhdGljIGdldE1vbnRoRm9yVGltZSh0aW1lPzogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0aW1lVmFsdWUgPSB0aW1lIHx8IHRoaXMuZ2V0U2VyVmVyVGltZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJNXCIpO1xuICAgICAgICByZXR1cm4gbW9udGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5pel5pyfXG4gICAgICogQHRpbWUg5pe26Ze0ID0g5pe26Ze05oizIHggMTAwMFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXREYXlGb3JUaW1lKHRpbWU/OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWVWYWx1ZSA9IHRpbWUgfHwgdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBkYXkgPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJEXCIpO1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWwj+aXtlxuICAgICAqIEB0aW1lIOaXtumXtCA9IOaXtumXtOaIsyB4IDEwMDBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SG91ckZvclRpbWUodGltZT86IG51bWJlcikge1xuICAgICAgICBsZXQgdGltZVZhbHVlID0gdGltZSB8fCB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IGhvdXIgPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJISFwiKTtcbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5YiG6ZKfXG4gICAgICogQHRpbWUg5pe26Ze0ID0g5pe26Ze05oizIHggMTAwMFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRNaW51dGVGb3JUaW1lKHRpbWU/OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWVWYWx1ZSA9IHRpbWUgfHwgdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBtaW51dGUgPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJtbVwiKTtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnp5JcbiAgICAgKiBAdGltZSDml7bpl7QgPSDml7bpl7TmiLMgeCAxMDAwXG4gICAgICovXG4gICAgc3RhdGljIGdldFNlY29uZEZvclRpbWUodGltZT86IG51bWJlcikge1xuICAgICAgICBsZXQgdGltZVZhbHVlID0gdGltZSB8fCB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IG1vbWVudCh0aW1lVmFsdWUpLmZvcm1hdChcInNzXCIpO1xuICAgICAgICByZXR1cm4gc2Vjb25kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluW5tFxuICAgICAqIEB0aW1lIOaXtumXtCA9IOaXtumXtOaIsyB4IDEwMDBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0WWVhckZvclRpbWUodGltZT86IG51bWJlcikge1xuICAgICAgICBsZXQgdGltZVZhbHVlID0gdGltZSB8fCB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHllYXIgPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJZWVlZXCIpO1xuICAgICAgICByZXR1cm4geWVhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blkajlh6BcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0V2Vla0ZvclRpbWUodGltZT86IG51bWJlcikge1xuICAgICAgICBsZXQgdGltZVZhbHVlID0gdGltZSB8fCB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgbGV0IHdlZWsgPSBtb21lbnQodGltZVZhbHVlKS5mb3JtYXQoXCJFXCIpO1xuICAgICAgICByZXR1cm4gd2VlaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bml7bpl7TlkozmnI3liqHlmajml7bpl7TnmoTml7bpl7Tlt65cbiAgICAgKiBAdGltZSDml7bpl7QgPSDml7bpl7TmiLMgeCAxMDAwXG4gICAgICogZWcuIGMyZi51dGlscy5kYXRlLmdldE9mZnNldEJ5VHlwZShcImRcIiwgdHMgKiAxMDAwKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRPZmZzZXRCeVR5cGUodHlwZTogc3RyaW5nLCB0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoXCJcIiArICh0aW1lIC0gc2VydmVyVGltZSkgLyAxMDAwKTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChcIlwiICsgKHRpbWUgLSBzZXJ2ZXJUaW1lKSAvIDYwMDAwKTtcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChcIlwiICsgKHRpbWUgLSBzZXJ2ZXJUaW1lKSAvIDM2MDAwMDApO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KFwiXCIgKyAodGltZSAtIHNlcnZlclRpbWUpIC8gODY0MDAwMDApO1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KFwiXCIgKyAodGltZSAtIHNlcnZlclRpbWUpIC8gKDg2NDAwMDAwICogNykpO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2Zmc2V0QnlUeXBlKFwieVwiLCB0aW1lKSAqIDEyICsgdGhpcy5nZXRNb250aEZvclRpbWUodGltZSkgLSB0aGlzLmdldE1vbnRoRm9yVGltZSgpO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WWVhckZvclRpbWUodGltZSkgLSB0aGlzLmdldFllYXJGb3JUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuI7mnI3liqHlmajml7bpl7Tpl7TpmpTlh6DlpKlcbiAgICAgKiBAcGFyYW0gMeOAgTIwMjMvMTAvMTEgICA9PiBzdHJpbmdcbiAgICAgKiAgICAgICAgMuOAgeaXtumXtOaIs+aIlnRpbWUgID0+IG51bWJlclxuICAgICAqICAgICAgICAz44CBMjAyMzEyMTEgICAgID0+IG51bWJlclxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRPZmZzZXREYXlzKHBhcmFtOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWU6IG51bWJlciA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW0uc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWUgPSBtb21lbnQocGFyYW0gKyAnIDAwOjAwOjAwJykuZm9ybWF0KFwieFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbSA+IDEwMDAwMDAwMCkge1xuICAgICAgICAgICAgbGV0IG51bUJpdExlbiA9ICgnJyArIHBhcmFtKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnVtQml0TGVuID09IDEwKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IG1vbWVudChwYXJhbSAqIDEwMDApLmZvcm1hdChcInhcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBtb21lbnQocGFyYW0pLmZvcm1hdChcInhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeWVhciA9IHBhcnNlSW50KFwiXCIgKyBwYXJhbSAvIDEwMDAwKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KFwiXCIgKyAocGFyYW0gJSAxMDAwMCkgLyAxMDApO1xuICAgICAgICAgICAgbGV0IGRheSA9IHBhcmFtICUgMTAwO1xuICAgICAgICAgICAgdGltZSA9IG1vbWVudChbeWVhciwgbW9udGggLSAxLCBkYXldKS5mb3JtYXQoXCJ4XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgY29uc3Qgc2VjT25lRGF5ID0gODY0MDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAoc2VydmVyVGltZSAtIHRpbWUpIC8gMTAwMDtcbiAgICAgICAgbGV0IHBhc3NEYXkgPSBNYXRoLmZsb29yKG9mZnNldCAvIHNlY09uZURheSk7XG4gICAgICAgIGxldCByZXN0U2VjID0gb2Zmc2V0ICUgc2VjT25lRGF5O1xuICAgICAgICBpZiAocmVzdFNlYyA+IDApIHtcbiAgICAgICAgICAgIGxldCBzdGFydFRzID0gdGhpcy5nZXRUb2RheVN0YXJ0VFMoKTtcbiAgICAgICAgICAgIGxldCB0YXJnZVRzID0gdGltZSAvIDEwMDAgKyBwYXNzRGF5ICogc2VjT25lRGF5O1xuICAgICAgICAgICAgaWYgKHRhcmdlVHMgPCBzdGFydFRzKSB7XG4gICAgICAgICAgICAgICAgcGFzc0RheSA9IHBhc3NEYXkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXNzRGF5O1xuICAgIH1cblxuICAgIC8qKiDliLDkuIvkuIDkuKrlkajlh6Dov5jmnInlpJrlsJHnp5IgKi9cbiAgICBzdGF0aWMgZ2V0U2Vjb25kVG9OZXh0V2Vlayh3ZWVrOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGR1ciA9IHRoaXMuZ2V0VG9kYXlSZXN0RHVyKCk7XG4gICAgICAgIGNvbnN0IHNlY09uZURheSA9IDg2NDAwO1xuICAgICAgICBsZXQgY3VyV2VlayA9IHRoaXMuZ2V0V2Vla0ZvclRpbWUoKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IHdlZWsgLSBjdXJXZWVrIC0gMTtcbiAgICAgICAgaWYgKG9mZnNldCA+PSAwKSB7XG4gICAgICAgICAgICBkdXIgKz0gb2Zmc2V0ICogc2VjT25lRGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyICs9ICg3ICsgb2Zmc2V0KSAqIHNlY09uZURheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHVyO1xuICAgIH1cblxuXG4gICAgLyoqIOWIsOacrOWRqOWHoOeahOaMh+WumuaXtumXtOi/mOacieWkmuWwkeenkiAqL1xuICAgIHN0YXRpYyBnZXRTZWNvbmRUb1RoaXNXZWVrVGltZSh3ZWVrOiBudW1iZXIsIHRpbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZHVyID0gdGhpcy5nZXRUb2RheVJlc3REdXIoKTtcbiAgICAgICAgY29uc3Qgc2VjT25lRGF5ID0gODY0MDA7XG4gICAgICAgIGxldCBjdXJXZWVrID0gdGhpcy5nZXRXZWVrRm9yVGltZSgpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gd2VlayAtIGN1cldlZWsgLSAxO1xuICAgICAgICAvLyBpZiAob2Zmc2V0ID49IDApIHtcbiAgICAgICAgZHVyICs9IG9mZnNldCAqIHNlY09uZURheTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGR1ciArPSAoNyArIG9mZnNldCkgKiBzZWNPbmVEYXk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgc3RyQXJyID0gdGltZS5zcGxpdChcIjpcIik7XG4gICAgICAgIGlmIChzdHJBcnIgJiYgc3RyQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBob3VyOiBudW1iZXIgPSBwYXJzZUludChzdHJBcnJbMF0pO1xuICAgICAgICAgICAgaWYgKGhvdXIpIHtcbiAgICAgICAgICAgICAgICBkdXIgKz0gaG91ciAqIDM2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWluOiBudW1iZXIgPSBwYXJzZUludChzdHJBcnJbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyICs9IG1pbiAqIDYwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyQXJyLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbjogbnVtYmVyID0gcGFyc2VJbnQoc3RyQXJyWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyICs9IHNlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdXI7XG4gICAgfVxuICAgIC8qKumAmui/h+acrOWRqOebuOW3ruaXtumXtCAgKi9cbiAgICBzdGF0aWMgZ2V0U2Vjb25kVG9OZXh0V2Vla1RpbWVCeURpc1NlYyhzZWM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzZWNUZW1wID0gc2VjXG4gICAgICAgIGlmIChzZWMgPCAwKSB7XG4gICAgICAgICAgICBzZWNUZW1wID0gNyAqIDg2NDAwICsgc2VjXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlY1RlbXBcbiAgICB9XG5cblxuICAgIC8qKiDliLDkuIvmnIgoMeWPtynov5jmnInlpJrlsJHnp5IgKi9cbiAgICBzdGF0aWMgZ2V0VGltZURpZmZlcmVuY2VUb05leHRNb250aEZpcnN0RGF5KCkge1xuICAgICAgICBsZXQgc2VydmVyVGltZSA9IHRoaXMuZ2V0U2VyVmVyVGltZSgpO1xuICAgICAgICBsZXQgZHVyID0gdGhpcy5nZXRUb2RheVJlc3REdXIoKTtcbiAgICAgICAgbGV0IG5leHRNb250aEZpcnN0RGF5ID0gdGhpcy5nZXROZXh0TW9udGhGaXJzdERheSgpO1xuICAgICAgICAvLyDorqHnrpfml7bpl7Tlt67vvIjmr6vnp5LvvIkgIFxuICAgICAgICBsZXQgdGltZURpZmYgPSBNYXRoLmFicyhuZXh0TW9udGhGaXJzdERheS5nZXRUaW1lKCkgLSBzZXJ2ZXJUaW1lKTtcbiAgICAgICAgbGV0IHRpbWVTY2VvbmQgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gMTAwMClcbiAgICAgICAgcmV0dXJuIHRpbWVTY2VvbmRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TmV4dE1vbnRoRmlyc3REYXkoKTogRGF0ZSB7XG4gICAgICAgIGxldCBzZXJ2ZXJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZShzZXJ2ZXJUaW1lKTtcbiAgICAgICAgY29uc3QgbmV4dE1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxID09PSAxMiA/IDAgOiBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IG5leHRZZWFyID0gbmV4dE1vbnRoID09PSAwID8gbm93LmdldEZ1bGxZZWFyKCkgKyAxIDogbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShuZXh0WWVhciwgbmV4dE1vbnRoLCAxKTtcbiAgICB9XG5cblxuXG5cblxuICAgIC8qKmhoOm1tOnNzICDojrflj5bml7bpl7TmiLMqL1xuICAgIHN0YXRpYyBnZXRTZWNvbmRCeVRpbWVTdHIodGltZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzZWMgPSB0aGlzLmdldFRvZGF5U3RhcnRUUygpO1xuICAgICAgICBsZXQgc3RyQXJyID0gdGltZS5zcGxpdChcIjpcIik7XG4gICAgICAgIGlmIChzdHJBcnIgJiYgc3RyQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBob3VyOiBudW1iZXIgPSBwYXJzZUludChzdHJBcnJbMF0pO1xuICAgICAgICAgICAgaWYgKGhvdXIpIHtcbiAgICAgICAgICAgICAgICBzZWMgKz0gaG91ciAqIDM2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWluOiBudW1iZXIgPSBwYXJzZUludChzdHJBcnJbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjICs9IG1pbiAqIDYwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyQXJyLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbjogbnVtYmVyID0gcGFyc2VJbnQoc3RyQXJyWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjICs9IHNlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VjO1xuICAgIH1cblxuICAgIC8qKiDliLDkuIvkuIDkuKp45pW054K56L+Y5pyJ5aSa5bCR56eSICovXG4gICAgc3RhdGljIGdldFNlY29uZFRvTmV4dEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzdnJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KHN2clRpbWUpLmVuZE9mKFwiaG91clwiKS5mb3JtYXQoXCJ4XCIpO1xuICAgICAgICBsZXQgZHVyID0gTWF0aC5mbG9vcigoZW5kVGltZSAtIHN2clRpbWUpIC8gMTAwMCk7XG5cbiAgICAgICAgY29uc3Qgc2VjT25lSG91ciA9IDM2MDA7XG4gICAgICAgIGxldCBjdXJIb3VyID0gdGhpcy5nZXRIb3VyRm9yVGltZSgpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gaG91ciAtIGN1ckhvdXIgLSAxO1xuICAgICAgICBpZiAob2Zmc2V0ID49IDApIHtcbiAgICAgICAgICAgIGR1ciArPSBvZmZzZXQgKiBzZWNPbmVIb3VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyICs9ICgyNCArIG9mZnNldCkgKiBzZWNPbmVIb3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdXI7XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluWAkuiuoeaXtuWIsOWkqVxuICogIEBkZXNjcmlwdGlvbiDkuIDlpKnku6XkuIrlgJLorqHml7bliLDlh6DlpKkgIOS4gOWkqeS7peWGheWAkuiuoeaXtuWIsOWwj+aXtiAgIOS4gOWwj+aXtuS7peWGheWAkuiuoeaXtuWIsOWIhumSn1xuICovXG4gICAgc3RhdGljIGdldERheUNvdW50RG93bkNvbW1vbihudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzZWMgPSBjMmYudXRpbHMuZGF0ZS5nZXRTZWNvbmRUb05leHRXZWVrKDEpXG4gICAgICAgIGlmIChzZWMgPiA4NjQwMCkge1xuICAgICAgICAgICAgbGV0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3Ioc2VjIC8gODY0MDApO1xuICAgICAgICAgICAgcmV0dXJuIGAke2RheXN9JHtjMmYubGFuZ3VhZ2Uud29yZHMoMjUwNCl9YFxuICAgICAgICB9IGVsc2UgaWYgKHNlYyA+IDM2MDApIHtcbiAgICAgICAgICAgIGxldCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtob3Vyc30ke2MyZi5sYW5ndWFnZS53b3JkcygyNTA1KX1gXG4gICAgICAgIH0gZWxzZSBpZiAoc2VjID4gNjApIHtcbiAgICAgICAgICAgIGxldCBtaW51dGU6IG51bWJlciA9IE1hdGguZmxvb3Ioc2VjIC8gNjApO1xuICAgICAgICAgICAgcmV0dXJuIGAke21pbnV0ZX0ke2MyZi5sYW5ndWFnZS53b3JkcygyNTA2KX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7c2VjfSR7YzJmLmxhbmd1YWdlLndvcmRzKDI1MDcpfWBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ5oyH5a6a6IyD5Zu055qE6ZqP5py65pW05pWwXG4gICAgICogQHBhcmFtIG51bSAgIOenklxuICAgICAqIEBwYXJhbSB0eXBlICDnsbvlnotcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SG91cnNCeVNjZW9uZChudW06IG51bWJlciwgdHlwZTogbnVtYmVyID0gMSk6IG51bWJlciB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtIC8gMzYwMCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtIC8gMzYwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIrmrKHkuIvnur/nmoTml7bpl7TmlofmnKxcbiAgICAgKiDlnKjnur8g5pi+56S657u/6ImyIOaWh+acrOWcqOe6v1xuICAgICAqIDXliIbpkp/kuYvlhoXnrpflnKjnur9cbiAgICAgKiAyNOWwj+aXtuS7peWGhSDmmL7npLpYWOWwj+aXtuWJjVxuICAgICAqIOWkp+S6jjflpKnlhoUg5pi+56S6N+WkqeWJjVxuICAgICAqIG51bSDkuIrkuIDmrKHkuIvnur/nmoTml7bpl7TmiLNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0TGFzdE9uTGluZVN0cihudW06IG51bWJlcik6IHsgc3RyOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfSB7XG4gICAgICAgIGxldCBzZXJ2ZXJUaW1lID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCBkYXRhID0geyBzdHI6IFwiXCIsIGNvbG9yOiBcIiM1RDRGNDlcIiB9XG4gICAgICAgIGlmIChudW0gPT0gLTEpIHtcbiAgICAgICAgICAgIGRhdGEuc3RyID0gYzJmLmxhbmd1YWdlLndvcmRzKDIwMDc2KVxuICAgICAgICAgICAgZGF0YS5jb2xvciA9IFwiIzU0N2U0OVwiXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWNvbmRzID0gc2VydmVyVGltZSAtIG51bVxuICAgICAgICBsZXQgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgICAgICBsZXQgZGF5czogbnVtYmVyID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gODY0MDApO1xuICAgICAgICBpZiAobWludXRlcyA8IDUpIHtcbiAgICAgICAgICAgIGRhdGEuc3RyID0gYzJmLmxhbmd1YWdlLndvcmRzKDIwMDc2KVxuICAgICAgICAgICAgZGF0YS5jb2xvciA9IFwiIzU0N2U0OVwiXG4gICAgICAgIH0gZWxzZSBpZiAobWludXRlcyA8IDYwKSB7XG4gICAgICAgICAgICBkYXRhLnN0ciA9IGMyZi5sYW5ndWFnZS53b3JkcygyMDEwMykuZm9ybWF0KG1pbnV0ZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAyNCkge1xuICAgICAgICAgICAgZGF0YS5zdHIgPSBjMmYubGFuZ3VhZ2Uud29yZHMoMjAwNzcpLmZvcm1hdChob3VycylcbiAgICAgICAgfSBlbHNlIGlmIChkYXlzIDwgNykge1xuICAgICAgICAgICAgZGF0YS5zdHIgPSBjMmYubGFuZ3VhZ2Uud29yZHMoMjAwNzgpLmZvcm1hdChkYXlzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5zdHIgPSBjMmYubGFuZ3VhZ2Uud29yZHMoMjAwNzgpLmZvcm1hdCg3KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiK5LiA5qyh5LiK57q/5Yeg5aSp5YmNXG4gICAgICovXG4gICAgc3RhdGljIGdldExhc3RUaW1lRGF5KG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHNlcnZlclRpbWUgPSB0aGlzLmdldFNlclZlclRpbWUoKTtcbiAgICAgICAgaWYgKG51bSA9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWNvbmRzID0gc2VydmVyVGltZSAtIG51bVxuICAgICAgICBsZXQgZGF5czogbnVtYmVyID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gODY0MDApO1xuICAgICAgICByZXR1cm4gZGF5c1xuICAgIH1cblxuICAgIC8qKiDliLDkuIvlkajlh6DnmoTmjIflrprml7bpl7Tov5jmnInlpJrlsJHnp5IgKi9cbiAgICBzdGF0aWMgZ2V0U2Vjb25kVG9OZXh0V2Vla1RpbWUod2VlazogbnVtYmVyLCB0aW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGR1ciA9IHRoaXMuZ2V0VG9kYXlSZXN0RHVyKCk7XG4gICAgICAgIGNvbnN0IHNlY09uZURheSA9IDg2NDAwO1xuICAgICAgICBsZXQgY3VyV2VlayA9IHRoaXMuZ2V0V2Vla0ZvclRpbWUoKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IHdlZWsgLSBjdXJXZWVrIC0gMTtcbiAgICAgICAgaWYgKG9mZnNldCA+PSAwKSB7XG4gICAgICAgICAgICBkdXIgKz0gb2Zmc2V0ICogc2VjT25lRGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyICs9ICg3ICsgb2Zmc2V0KSAqIHNlY09uZURheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJBcnIgPSB0aW1lLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgaWYgKHN0ckFyciAmJiBzdHJBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGhvdXI6IG51bWJlciA9IHBhcnNlSW50KHN0ckFyclswXSk7XG4gICAgICAgICAgICBpZiAoaG91cikge1xuICAgICAgICAgICAgICAgIGR1ciArPSBob3VyICogMzYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHJBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCBtaW46IG51bWJlciA9IHBhcnNlSW50KHN0ckFyclsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKG1pbikge1xuICAgICAgICAgICAgICAgICAgICBkdXIgKz0gbWluICogNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJBcnIubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuOiBudW1iZXIgPSBwYXJzZUludChzdHJBcnJbMl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXIgKz0gc2VuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGR1cjtcbiAgICB9XG5cbiAgICAvKirlkajlh6Ag5aSa5bCR56eSICovXG4gICAgc3RhdGljIGdldFdlZWtUaW1lU2Vjb25kQnlUaW1lU3RyKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN0ckFyciA9IHN0ci5zcGxpdChcIi9cIik7XG4gICAgICAgIGxldCBkdXIgPSB0aGlzLmdldFdlZWtUaW1lU2Vjb25kQnlUaW1lKHBhcnNlSW50KHN0ckFyclswXSksIHN0ckFyclsxXSlcbiAgICAgICAgcmV0dXJuIGR1clxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmui/hzA5OjAw6I635Y+W56eSXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIGdldFRpbWVTZWNvbmRCeVRpbWUodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGR1ciA9IDBcbiAgICAgICAgbGV0IHN0ckFyclR3byA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgICBpZiAoc3RyQXJyVHdvICYmIHN0ckFyclR3by5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaG91cjogbnVtYmVyID0gcGFyc2VJbnQoc3RyQXJyVHdvWzBdKTtcbiAgICAgICAgICAgIGlmIChob3VyKSB7XG4gICAgICAgICAgICAgICAgZHVyICs9IGhvdXIgKiAzNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0ckFyclR3by5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1pbjogbnVtYmVyID0gcGFyc2VJbnQoc3RyQXJyVHdvWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAobWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1ciArPSBtaW4gKiA2MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0ckFyclR3by5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW46IG51bWJlciA9IHBhcnNlSW50KHN0ckFyclR3b1syXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ciArPSBzZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1clxuICAgIH1cbiAgICAvKirlkajlh6Ag5aSa5bCR56eSICovXG4gICAgc3RhdGljIGdldFdlZWtUaW1lU2Vjb25kQnlUaW1lKHdlZWtJbmRleDogbnVtYmVyLCB0aW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBsZXQgc2VjT25lRGF5ID0gODY0MDA7XG4gICAgICAgIGxldCBkdXIgPSAod2Vla0luZGV4IC0gMSkgKiBzZWNPbmVEYXk7XG4gICAgICAgIGR1ciA9IGR1ciArIHRoaXMuZ2V0VGltZVNlY29uZEJ5VGltZSh0aW1lKVxuICAgICAgICByZXR1cm4gZHVyXG4gICAgfVxuXG4gICAgLyoq6I635Y+W5pyN5Yqh5ZmoIOacrOWRqOWRqOS4gOmbtueCueaXtumXtCAqL1xuICAgIHN0YXRpYyBnZXRTZXJ2ZXJDdXJXZWVrU3RhcnRTZWNvbmQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGN1clRzID0gdGhpcy5nZXRTZXJWZXJUaW1lKCk7XG4gICAgICAgIGxldCByZXQgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrVGltZXN0YW1wKGN1clRzICogMTAwMCkgLyAxMDAwXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Rmlyc3REYXlPZldlZWtUaW1lc3RhbXAodGltZXN0YW1wOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyDlsIbml7bpl7TmiLPovazmjaLkuLogRGF0ZSDlr7nosaEgIFxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5piv5pif5pyf5Yeg77yIMOS7o+ihqOaYn+acn+aXpe+8jDHku6PooajmmJ/mnJ/kuIDvvIwuLi7vvIw25Luj6KGo5pif5pyf5YWt77yJICBcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgLy8g5aaC5p6c5LuK5aSp5piv5pif5pyf5LiA77yM5YiZ5LiN6ZyA6KaB5YGa5Lu75L2V6LCD5pW0ICBcbiAgICAgICAgLy8g5ZCm5YiZ77yM6ZyA6KaB5YeP5Y6755u45bqU55qE5aSp5pWw5Lul5Zue5Yiw5LiK5LiA5Liq5pif5pyf5LiAICBcbiAgICAgICAgY29uc3QgZGF5c1RvU3VidHJhY3QgPSAoZGF5T2ZXZWVrID09PSAwKSA/IDYgOiBkYXlPZldlZWsgLSAxOyAvLyDlpoLmnpzmmJ/mnJ/ml6XmmK8w77yM5YiZ5LiK5LiA5Liq5pif5pyf5LiA5pivNuWkqeWJjSAgXG4gICAgICAgIC8vIOiuvue9ruaXpeacn+S4uuS4iuS4gOS4quaYn+acn+S4gOeahOaXpeacn++8jOW5tuWwhuaXtumXtOiuvue9ruS4uuWHjOaZqDDngrkgIFxuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlzVG9TdWJ0cmFjdCk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIC8vIOWwhuS/ruaUueWQjueahCBEYXRlIOWvueixoei9rOaNouWbnuaXtumXtOaIsyAgXG4gICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKTtcbiAgICB9XG5cblxufVxuXG5cblxuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgSVV0aWwge1xuICAgICAgICBkYXRlOiB0eXBlb2YgRGF0ZVV0aWw7XG4gICAgfVxufVxuYzJmLnV0aWxzLmRhdGUgPSBEYXRlVXRpbDtcbmV4cG9ydCB7IH07XG4iXX0=