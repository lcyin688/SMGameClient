"use strict";
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