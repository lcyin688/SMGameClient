/** 日期(时间)工具 */
enum TimeUnit {
    S,
    M,
    H,
    D,
}

class DateUtil {
    /**
     * 格式化日期显示
     * @param format 格式化字符串（例：yyyy-MM-dd hh:mm:ss）
     * @param date   时间对象
     */
    static format(fmtStr: string, date: Date): string {
        let o: any = {
            'M+': date.getMonth() + 1, // month
            'd+': date.getDate(), // day
            'h+': date.getHours(), // hour
            'm+': date.getMinutes(), // minute
            's+': date.getSeconds(), // second
            'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
            S: date.getMilliseconds(), // millisecond
        };
        if (/(y+)/.test(fmtStr)) {
            fmtStr = fmtStr.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmtStr)) {
                fmtStr = fmtStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substring(('' + o[k]).length));
            }
        }
        return fmtStr;
    }

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
    public static formatTimeString(sec: number, format: string | { S: string; M: string; H: string; D: string } = '%{hh}:%{mm}:%{ss}'): string {
        let seconds: number = Math.floor(sec);
        let minutes: number = Math.floor(seconds / 60);
        let hours: number = Math.floor(seconds / 3600);
        let days: number = Math.floor(seconds / 86400);

        let maxUnit: TimeUnit = TimeUnit.S;
        let result: string = '';

        if (typeof format === 'string') {
            // 查询格式化字符串中最大的单位
            result = format;
            if (/%\{d+\}/.test(format)) {
                maxUnit = TimeUnit.D;
            } else if (/%\{h+\}/.test(format)) {
                maxUnit = TimeUnit.H;
            } else if (/%\{m+\}/.test(format)) {
                maxUnit = TimeUnit.M;
            }
        } else {
            // 以传入的数值判断最大单位
            if (days > 0) {
                maxUnit = TimeUnit.D;
                result = format.D;
            } else if (hours > 0) {
                maxUnit = TimeUnit.H;
                result = format.H;
            } else if (minutes > 0) {
                maxUnit = TimeUnit.M;
                result = format.M;
            } else {
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

        let data = {
            dd: days < 10 ? `0${days}` : `${days}`,
            d: `${days}`,
            hh: hours < 10 ? `0${hours}` : `${hours}`,
            h: `${hours}`,
            mm: minutes < 10 ? `0${minutes}` : `${minutes}`,
            m: `${minutes}`,
            ss: seconds < 10 ? `0${seconds}` : `${seconds}`,
            s: `${seconds}`,
        };
        result = c2f.utils.str.formatWithObj(result, data);
        return result;
    }

    /**
     * 将一个Date对象或Date时间戳返回格式化日期字符串
     * @param date Date对象或Date时间戳
     * @param format 格式化字符串
     * @param isUTC true:UTC时间 false:本地时间
     * @example
     * c2f.utils.date.formatDateString(0, "%{YYYY}-%{MM}-%{dd} %{hh}:%{mm}:%{ss}", true); // "1970-01-01 00:00:00"
     * c2f.utils.date.formatDateString(0, "%{dd}/%{MM}/%{YY}", true); // "01/01/70"
     */
    public static formatDateString(date: number | Date, format: string = '%{YYYY}-%{MM}-%{dd} %{hh}:%{mm}:%{ss}', isUTC: boolean = false): string {
        let src = date instanceof Date ? date : new Date(date);
        let year = isUTC ? src.getUTCFullYear() : src.getFullYear();
        let month = isUTC ? src.getUTCMonth() + 1 : src.getMonth() + 1;
        let days = isUTC ? src.getUTCDate() : src.getDate();
        let hours = isUTC ? src.getUTCHours() : src.getHours();
        let minutes = isUTC ? src.getUTCMinutes() : src.getMinutes();
        let seconds = isUTC ? src.getUTCSeconds() : src.getSeconds();

        let data = {
            YYYY: `${year}`,
            YY: year % 100 < 10 ? `0${year % 100}` : `${year % 100}`,
            MM: month < 10 ? `0${month}` : `${month}`,
            M: `${month}`,
            dd: days < 10 ? `0${days}` : `${days}`,
            d: `${days}`,
            hh: hours < 10 ? `0${hours}` : `${hours}`,
            h: `${hours}`,
            mm: minutes < 10 ? `0${minutes}` : `${minutes}`,
            m: `${minutes}`,
            ss: seconds < 10 ? `0${seconds}` : `${seconds}`,
            s: `${seconds}`,
        };
        let result = c2f.utils.str.formatWithObj(format, data);
        return result;
    }

    /** 获得当前时间戳 */
    static getLocalTick() {
        return Math.floor(new Date().getTime() / 1000);
    }

    /** 判断2个时间戳是否是同一天 */
    static isSameDay(ts1: number, ts2: number) {
        let isSame: boolean = false;
        if (ts1 != null && ts2 != null) {
            let time_a = moment(ts1 * 1000).format('YYYYMMDD');
            let time_b = moment(ts2 * 1000).format('YYYYMMDD');
            isSame = time_a == time_b;
        }
        return isSame;
    }

    /** 判断2个时间戳是否是同一周
     * ts1 现在的
     * ts2 之前的
     */
    static isSameWeek(ts1: number, ts2: number) {
        let isSame: boolean = false;
        if (ts1 != null && ts2 != null) {
            let secondsDiff = Math.abs(ts2 - ts1);
            if (secondsDiff < 604800) {
                //7天内
                let date1 = new Date(ts1 * 1000);
                let date2 = new Date(ts2 * 1000);
                let day1 = date1.getDay();
                let day2 = date2.getDay();
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
    }

    /** 是否为是今天 */
    static isToday(ts: number) {
        let svrTime = this.getSerVerTime();
        return this.isSameDay(ts, Math.floor(svrTime * 1000));
    }

    /** 时区 */
    static timeZone: number = undefined;
    /** 设置默认时区 */
    static setDefTimeZone(zone: number) {
        if (zone != null && zone >= -12 && zone <= 12) {
            this.timeZone = zone;
            let name = 'Etc/GMT';
            if (zone >= 0) {
                name += '+';
            }
            name += zone;
            moment.tz.setDefault(name);
        } else {
            cc.log('修改时区错误 ==>' + zone);
        }
    }

    /**
     * 获取毫秒级服务器是时间
     */
    static getSerVerTime() {
        // let serverTime = szg.player.time.getServerTs() * 1000;
        let serverTime = c2f.utils.date.getLocalTick();
        return serverTime;
    }

    /**
     * 获取某时间0时时间戳
     */
    static getDayStartTS(ts: number) {
        //转换成毫秒级
        let time = ts * 1000;
        let startTime = moment(time).startOf('day').format('x');
        return Math.floor(startTime / 1000);
    }

    /**
     * 获取当天24时时间戳
     */
    static getTodayEndTS() {
        let serverTime = this.getSerVerTime();
        let endTime = moment(serverTime).endOf('day').format('x');
        return Math.floor(endTime / 1000);
    }

    /**
     * 获取当天0时时间戳
     */
    static getTodayStartTS() {
        let serverTime = this.getSerVerTime();
        let startTime = moment(serverTime).startOf('day').format('x');
        return Math.floor(startTime / 1000);
    }

    /**
     * 获取当天剩余时长
     */
    static getTodayRestDur() {
        let serverTime = this.getSerVerTime();
        let endTime = moment(serverTime).endOf('day').format('x');
        let time = endTime - serverTime >= 0 ? endTime - serverTime : 0;
        return Math.floor(time / 1000);
    }

    /**
     * 获取当天已过时长
     */
    static getTodayPassDur() {
        let serverTime = this.getSerVerTime();
        let startTime = moment(serverTime).startOf('day').format('x');
        let time = serverTime - startTime >= 0 ? serverTime - startTime : 0;
        return Math.floor(time / 1000);
    }

    /**
     * 获取今天按秒偏移后的时间戳
     */
    static getTodayTsByOffset(offSecond: number) {
        let startTime = this.getTodayStartTS();
        let dstTs = startTime + offSecond;
        return dstTs;
    }

    /**
     * 获取格式化时间
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     */
    static formatServerTime(fmtStr: string = 'YYYY-MM-DD HH:mm:ss') {
        let serverTime = this.getSerVerTime();
        let time = moment(serverTime).format(fmtStr);
        return time;
    }

    /**
     * 获取添加了时区的格式时间
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     */
    static getDateStrWithZone(fmtStr: string = 'YYYY/MM/DD HH:mm:ss') {
        let time = this.formatServerTime(fmtStr);
        if (this.timeZone >= 0) {
            time += ' GMT(+' + this.timeZone + ')';
        } else {
            time += ' GMT(' + this.timeZone + ')';
        }
        return time;
    }

    /**
     * 获取指定时间，指定格式的时间字符串
     * @fmtStr "YYYY/MM/DD HH:mm:ss"
     * @time 时间 = 时间戳 x 1000
     * eg. c2f.utils.date.formatStringByTime("YYYY/MM/DD", ts * 1000);
     * eg. c2f.utils.date.formatStringByTime("HH:mm:ss", data.Ts * 1000);
     */
    static formatStringByTime(fmtStr: string, time: number) {
        let forTime = moment(time).format(fmtStr);
        return forTime;
    }

    /**
     * 根据时间字符串获取时间戳
     * eg. c2f.utils.date.getTimeBySting("2023-10-11 15:35:59");
     */
    static getTsBySting(timeString: string) {
        let time = moment(timeString).format('X');
        return Math.floor(time / 1000);
    }

    /**
     * 获取月份
     * @time 时间 = 时间戳 x 1000
     */
    static getMonthForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let month = moment(timeValue).format('M');
        return month;
    }

    /**
     * 获取日期
     * @time 时间 = 时间戳 x 1000
     */
    static getDayForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let day = moment(timeValue).format('D');
        return day;
    }

    /**
     * 获取小时
     * @time 时间 = 时间戳 x 1000
     */
    static getHourForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let hour = moment(timeValue).format('HH');
        return hour;
    }

    /**
     * 获取分钟
     * @time 时间 = 时间戳 x 1000
     */
    static getMinuteForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let minute = moment(timeValue).format('mm');
        return minute;
    }

    /**
     * 获取秒
     * @time 时间 = 时间戳 x 1000
     */
    static getSecondForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let second = moment(timeValue).format('ss');
        return second;
    }

    /**
     * 获取年
     * @time 时间 = 时间戳 x 1000
     */
    static getYearForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let year = moment(timeValue).format('YYYY');
        return year;
    }

    /**
     * 获取周几
     */
    static getWeekForTime(time?: number) {
        let timeValue = time || this.getSerVerTime();
        let week = moment(timeValue).format('E');
        return week;
    }

    /**
     * 获取时间和服务器时间的时间差
     * @time 时间 = 时间戳 x 1000
     * eg. c2f.utils.date.getOffsetByType("d", ts * 1000)
     */
    static getOffsetByType(type: string, time: number) {
        let serverTime = this.getSerVerTime();
        switch (type) {
            case 's':
                return parseInt('' + (time - serverTime) / 1000);
            case 'n':
                return parseInt('' + (time - serverTime) / 60000);
            case 'h':
                return parseInt('' + (time - serverTime) / 3600000);
            case 'd':
                return parseInt('' + (time - serverTime) / 86400000);
            case 'w':
                return parseInt('' + (time - serverTime) / (86400000 * 7));
            case 'm':
                return this.getOffsetByType('y', time) * 12 + this.getMonthForTime(time) - this.getMonthForTime();
            case 'y':
                return this.getYearForTime(time) - this.getYearForTime();
        }
    }

    /**
     * 与服务器时间间隔几天
     * @param 1、2023/10/11   => string
     *        2、时间戳或time  => number
     *        3、20231211     => number
     */
    static getOffsetDays(param: string | number) {
        let time: number = 0;
        if (typeof param == 'string') {
            if (param.length > 10) {
                param = param.substring(0, 10);
            }
            time = moment(param + ' 00:00:00').format('x');
        } else if (param > 100000000) {
            let numBitLen = ('' + param).length;
            if (numBitLen == 10) {
                time = moment(param * 1000).format('x');
            } else {
                time = moment(param).format('x');
            }
        } else {
            let year = parseInt('' + param / 10000);
            let month = parseInt('' + (param % 10000) / 100);
            let day = param % 100;
            time = moment([year, month - 1, day]).format('x');
        }

        let serverTime = this.getSerVerTime();
        const secOneDay = 86400;
        let offset = (serverTime - time) / 1000;
        let passDay = Math.floor(offset / secOneDay);
        let restSec = offset % secOneDay;
        if (restSec > 0) {
            let startTs = this.getTodayStartTS();
            let targeTs = time / 1000 + passDay * secOneDay;
            if (targeTs < startTs) {
                passDay = passDay + 1;
            }
        }
        return passDay;
    }

    /** 到下一个周几还有多少秒 */
    static getSecondToNextWeek(week: number) {
        let dur = this.getTodayRestDur();
        const secOneDay = 86400;
        let curWeek = this.getWeekForTime();
        let offset = week - curWeek - 1;
        if (offset >= 0) {
            dur += offset * secOneDay;
        } else {
            dur += (7 + offset) * secOneDay;
        }
        return dur;
    }

    /** 到本周几的指定时间还有多少秒 */
    static getSecondToThisWeekTime(week: number, time: string) {
        let dur = this.getTodayRestDur();
        const secOneDay = 86400;
        let curWeek = this.getWeekForTime();
        let offset = week - curWeek - 1;
        // if (offset >= 0) {
        dur += offset * secOneDay;
        // } else {
        //     dur += (7 + offset) * secOneDay;
        // }

        let strArr = time.split(':');
        if (strArr && strArr.length > 0) {
            let hour: number = parseInt(strArr[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArr.length > 1) {
                let min: number = parseInt(strArr[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArr.length > 2) {
                    let sen: number = parseInt(strArr[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }

        return dur;
    }
    /**通过本周相差时间  */
    static getSecondToNextWeekTimeByDisSec(sec: number): number {
        let secTemp = sec;
        if (sec < 0) {
            secTemp = 7 * 86400 + sec;
        }
        return secTemp;
    }

    /** 到下月(1号)还有多少秒 */
    static getTimeDifferenceToNextMonthFirstDay() {
        let serverTime = this.getSerVerTime();
        let dur = this.getTodayRestDur();
        let nextMonthFirstDay = this.getNextMonthFirstDay();
        // 计算时间差（毫秒）
        let timeDiff = Math.abs(nextMonthFirstDay.getTime() - serverTime);
        let timeSceond = Math.floor(timeDiff / 1000);
        return timeSceond;
    }

    static getNextMonthFirstDay(): Date {
        let serverTime = this.getSerVerTime();
        let now = new Date(serverTime);
        const nextMonth = now.getMonth() + 1 === 12 ? 0 : now.getMonth() + 1;
        const nextYear = nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
        return new Date(nextYear, nextMonth, 1);
    }

    /**hh:mm:ss  获取时间戳*/
    static getSecondByTimeStr(time: string) {
        let sec = this.getTodayStartTS();
        let strArr = time.split(':');
        if (strArr && strArr.length > 0) {
            let hour: number = parseInt(strArr[0]);
            if (hour) {
                sec += hour * 3600;
            }
            if (strArr.length > 1) {
                let min: number = parseInt(strArr[1]);
                if (min) {
                    sec += min * 60;
                }
                if (strArr.length > 2) {
                    let sen: number = parseInt(strArr[2]);
                    if (sen) {
                        sec += sen;
                    }
                }
            }
        }
        return sec;
    }

    /** 到下一个x整点还有多少秒 */
    static getSecondToNextHour(hour: number) {
        let svrTime = this.getSerVerTime();
        let endTime = moment(svrTime).endOf('hour').format('x');
        let dur = Math.floor((endTime - svrTime) / 1000);

        const secOneHour = 3600;
        let curHour = this.getHourForTime();
        let offset = hour - curHour - 1;
        if (offset >= 0) {
            dur += offset * secOneHour;
        } else {
            dur += (24 + offset) * secOneHour;
        }
        return dur;
    }

    /** 获取倒计时到天
     *  @description 一天以上倒计时到几天  一天以内倒计时到小时   一小时以内倒计时到分钟
     */
    static getDayCountDownCommon(num: number): string {
        let sec = c2f.utils.date.getSecondToNextWeek(1);
        if (sec > 86400) {
            let days: number = Math.floor(sec / 86400);
            return `${days}${c2f.language.words('2504')}`;
        } else if (sec > 3600) {
            let hours: number = Math.floor(sec / 3600);
            return `${hours}${c2f.language.words('2505')}`;
        } else if (sec > 60) {
            let minute: number = Math.floor(sec / 60);
            return `${minute}${c2f.language.words('2506')}`;
        } else {
            return `${sec}${c2f.language.words('2507')}`;
        }
    }

    /**
     * 生成指定范围的随机整数
     * @param num   秒
     * @param type  类型
     */
    static getHoursBySceond(num: number, type: number = 1): number {
        switch (type) {
            case 1:
                return Math.ceil(num / 3600);
            case 2:
                return Math.floor(num / 3600);
        }
        return 0;
    }

    /**
     * 获取上次下线的时间文本
     * 在线 显示绿色 文本在线
     * 5分钟之内算在线
     * 24小时以内 显示XX小时前
     * 大于7天内 显示7天前
     * num 上一次下线的时间戳
     */
    static getLastOnLineStr(num: number): { str: string; color: string } {
        let serverTime = this.getSerVerTime();
        let data = { str: '', color: '#5D4F49' };
        if (num == -1) {
            data.str = c2f.language.words('20076');
            data.color = '#547e49';
            return data;
        }
        let seconds = serverTime - num;
        let minutes: number = Math.floor(seconds / 60);
        let hours: number = Math.floor(seconds / 3600);
        let days: number = Math.floor(seconds / 86400);
        if (minutes < 5) {
            data.str = c2f.language.words('20076');
            data.color = '#547e49';
        } else if (minutes < 60) {
            data.str = c2f.language.words('20103').format(minutes);
        } else if (hours < 24) {
            data.str = c2f.language.words('20077').format(hours);
        } else if (days < 7) {
            data.str = c2f.language.words('20078').format(days);
        } else {
            data.str = c2f.language.words('20078').format(7);
        }
        return data;
    }

    /**
     * 上一次上线几天前
     */
    static getLastTimeDay(num: number): number {
        let serverTime = this.getSerVerTime();
        if ((num = -1)) {
            return 0;
        }
        let seconds = serverTime - num;
        let days: number = Math.floor(seconds / 86400);
        return days;
    }

    /** 到下周几的指定时间还有多少秒 */
    static getSecondToNextWeekTime(week: number, time: string) {
        let dur = this.getTodayRestDur();
        const secOneDay = 86400;
        let curWeek = this.getWeekForTime();
        let offset = week - curWeek - 1;
        if (offset >= 0) {
            dur += offset * secOneDay;
        } else {
            dur += (7 + offset) * secOneDay;
        }

        let strArr = time.split(':');
        if (strArr && strArr.length > 0) {
            let hour: number = parseInt(strArr[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArr.length > 1) {
                let min: number = parseInt(strArr[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArr.length > 2) {
                    let sen: number = parseInt(strArr[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }

        return dur;
    }

    /**周几 多少秒 */
    static getWeekTimeSecondByTimeStr(str: string): number {
        let strArr = str.split('/');
        let dur = this.getWeekTimeSecondByTime(parseInt(strArr[0]), strArr[1]);
        return dur;
    }

    /**
     * 通过09:00获取秒
     *
     */
    static getTimeSecondByTime(time: string): number {
        let dur = 0;
        let strArrTwo = time.split(':');
        if (strArrTwo && strArrTwo.length > 0) {
            let hour: number = parseInt(strArrTwo[0]);
            if (hour) {
                dur += hour * 3600;
            }
            if (strArrTwo.length > 1) {
                let min: number = parseInt(strArrTwo[1]);
                if (min) {
                    dur += min * 60;
                }
                if (strArrTwo.length > 2) {
                    let sen: number = parseInt(strArrTwo[2]);
                    if (sen) {
                        dur += sen;
                    }
                }
            }
        }
        return dur;
    }
    /**周几 多少秒 */
    static getWeekTimeSecondByTime(weekIndex: number, time: string): number {
        let secOneDay = 86400;
        let dur = (weekIndex - 1) * secOneDay;
        dur = dur + this.getTimeSecondByTime(time);
        return dur;
    }

    /**获取服务器 本周周一零点时间 */
    static getServerCurWeekStartSecond(): number {
        let curTs = this.getSerVerTime();
        let ret = this.getFirstDayOfWeekTimestamp(curTs * 1000) / 1000;
        return ret;
    }

    static getFirstDayOfWeekTimestamp(timestamp: number): number {
        // 将时间戳转换为 Date 对象
        const date = new Date(timestamp);
        // 获取当前是星期几（0代表星期日，1代表星期一，...，6代表星期六）
        const dayOfWeek = date.getDay();
        // 如果今天是星期一，则不需要做任何调整
        // 否则，需要减去相应的天数以回到上一个星期一
        const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 如果星期日是0，则上一个星期一是6天前
        // 设置日期为上一个星期一的日期，并将时间设置为凌晨0点
        date.setDate(date.getDate() - daysToSubtract);
        date.setHours(0, 0, 0, 0);
        // 将修改后的 Date 对象转换回时间戳
        return date.getTime();
    }
}

declare global {
    interface IUtil {
        date: typeof DateUtil;
    }
}
c2f.utils.date = DateUtil;
export {};
